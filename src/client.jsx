import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import catalog from './catalog.json'
import { unwrap, parseTargets, validateIndex, resultText, mapRemoteEntry } from './core.mjs'

const CATEGORIES = { ui:'界面', theme:'主题', model:'模型', memory:'记忆', tools:'工具', workflow:'工作流', git:'代码', dev:'开发', browser:'浏览器', vision:'视觉', voice:'语音', notify:'通知', usage:'用量', docs:'文档', session:'会话', skill:'技能', security:'安全', remote:'远程', agi:'智能体', market:'插件管理', identity:'通信', fun:'娱乐', wsl:'Windows', other:'其他' }
const tr = x => typeof x === 'string' ? x : x?.zh || x?.en || ''
const local = catalog.plugins.map(p => ({...p, spec: `${p.name}@${p.version}`, compatible: true}))

function Center({ remote }) {
  const [tab,setTab] = useState('catalog'), [query,setQuery] = useState(''), [category,setCategory] = useState('all')
  const [source,setSource] = useState('builtin'), [indexes,setIndexes] = useState([]), [remoteEntries,setRemoteEntries] = useState([]), [next,setNext] = useState(null), [total,setTotal] = useState(0)
  const [bundles,setBundles] = useState([]), [target,setTarget] = useState(''), [url,setUrl] = useState(''), [busy,setBusy] = useState(false), [message,setMessage] = useState(''), [results,setResults] = useState([])
  const [marketReady,setMarketReady] = useState(false), [selected,setSelected] = useState([]), [remoteLoading,setRemoteLoading] = useState(false)
  const [selectedCatalog,setSelectedCatalog] = useState([])
  const requestId = useRef(0), fetchedAt = useRef(undefined)
  const manager = useMemo(() => remote?.pluginManager, [remote])
  const market = useMemo(() => remote?.pluginMarket, [remote])
  const refresh = useCallback(async () => {
    if (!manager) { setMessage('当前 DSH 缺少插件管理服务，请更新桌面版。'); return }
    try { setBundles(unwrap(await manager.listBundles())) } catch(e) { setMessage(`读取已安装插件失败：${e.message}`) }
    try { if (!market) throw new Error('不可用'); setIndexes(unwrap(await market.listIndexes())); setMarketReady(true) } catch { setIndexes([]); setMarketReady(false) }
  }, [manager, market])
  useEffect(() => { void refresh(); const retry=setTimeout(() => void refresh(), 4000); return () => clearTimeout(retry) }, [refresh])
  useEffect(() => { if (!remote?.$on) return; const dispose=remote.$on('plugin-manager/changed', () => void refresh()); return () => dispose?.() }, [remote,refresh])
  const loadRemote = useCallback(async (offset=0, append=false) => {
    if (!market || source === 'builtin') return
    const request = ++requestId.current
    setRemoteLoading(true)
    try {
      const data = unwrap(await market.search(source, { ...(query.trim() ? { text:query.trim() } : {}), ...(category !== 'all' ? {category} : {}), ...(append && fetchedAt.current !== undefined ? {fetchedAt:fetchedAt.current} : {}), sort:{kind:'index'}, offset, limit:50 }))
      if (request !== requestId.current) return
      if (append && fetchedAt.current !== undefined && fetchedAt.current !== data.fetchedAt) { void loadRemote(); return }
      fetchedAt.current = data.fetchedAt
      setRemoteEntries(old => append ? [...old,...data.entries.map(mapRemoteEntry)] : data.entries.map(mapRemoteEntry)); setNext(data.nextOffset); setTotal(data.total)
    } catch(e) { if (request === requestId.current) { setMessage(`读取索引失败：${e.message}`); setRemoteEntries([]); setNext(null) } }
    finally { if(request === requestId.current) setRemoteLoading(false) }
  },[market,source,query,category])
  useEffect(() => { requestId.current++; fetchedAt.current=undefined; if (source !== 'builtin') { setRemoteEntries([]); setNext(null); setRemoteLoading(true); const timer=setTimeout(() => void loadRemote(),250); return () => {clearTimeout(timer); requestId.current++} } setRemoteLoading(false) }, [loadRemote,source])
  const installed = useMemo(() => new Map(bundles.filter(x => x.installed).map(x => [x.name,x])), [bundles])
  const shown = useMemo(() => (source === 'builtin' ? local : remoteEntries).filter(p => (category === 'all' || p.category === category) && (source !== 'builtin' || `${p.name} ${p.title} ${p.description} ${p.category}`.toLowerCase().includes(query.toLowerCase()))),[source,remoteEntries,category,query])
  const run = async (operation, entries) => {
    if (busy || !manager) return
    const text = operation === 'install' ? '安装' : '卸载'
    if (!window.confirm(`${text}以下 ${entries.length} 项？\n\n${entries.map(x=>x.label).join('\n')}\n\n第三方插件以当前用户权限运行。`)) return
    setBusy(true); setResults([]); setMessage('')
    for (const entry of entries) {
      try {
        const raw = operation === 'install' ? await manager.installBundle(entry.spec, {enabled:true, ...(entry.registry ? {registry:entry.registry} : {})}) : await manager.removeBundle(entry.name)
        const result = unwrap(raw)
        setResults(old => [...old, { label:entry.label, text:resultText(result) }])
      } catch(e) { setResults(old => [...old,{label:entry.label,text:`结果未确认：${e.message}；请刷新已安装列表后再重试`}]); break }
    }
    await refresh(); setSelected([]); setSelectedCatalog([]); setBusy(false)
  }
  const toggle = async p => { if(busy) return; setBusy(true); try { const value=unwrap(await manager.setBundleEnabled(p.name,!p.enabled)); setResults([{label:p.name,text:resultText(value)}]); await refresh() } catch(e) {setMessage(`操作结果未确认：${e.message}`)} finally {setBusy(false)} }
  const addIndex = async () => { try { const normalized=validateIndex(url); if(indexes.some(x=>x.url===normalized)) throw new Error('该索引已存在'); unwrap(await market.setIndexes([...indexes.map(x=>x.url),normalized])); setUrl(''); await refresh(); setSource(normalized); setTab('catalog'); setMessage('来源已添加') } catch(e) { setMessage(e.message) } }
  const removeIndex = async index => { if (!window.confirm(`移除索引 ${index.url}？`)) return; try { unwrap(await market.setIndexes(indexes.filter(x=>x.url!==index.url).map(x=>x.url))); if(source===index.url) setSource('builtin'); await refresh() } catch(e) {setMessage(e.message)} }
  const batch = () => { try { void run('install',parseTargets(target).map(spec=>({spec,label:spec}))) } catch(e) {setMessage(e.message)} }
  return <div className="ghc">
    <header className="ghc-head"><div><div className="ghc-kicker">DSH / OPEN ECOSYSTEM</div><h1>社区插件中心</h1><p>发现实用插件，连接你的团队工具。</p></div><div className="ghc-count"><strong>{catalog.plugins.length}</strong><span>社区目录插件</span></div></header>
    <nav className="ghc-nav" aria-label="社区插件中心导航">{[['catalog','发现插件'],['installed','已安装'],['add','添加插件'],['sources','插件来源']].map(([id,label])=><button key={id} className={tab===id?'active':''} onClick={()=>setTab(id)}>{label}{id==='installed' && ` ${installed.size}`}</button>)}</nav>
    {message && <div className="ghc-message" role="status">{message}<button onClick={()=>setMessage('')} aria-label="关闭提示">×</button></div>}
    {results.length>0 && <div className="ghc-results" role="status"><strong>操作结果</strong>{results.map((r,i)=><div key={i}><span>{r.label}</span> {r.text}</div>)}</div>}
    {tab==='catalog' && <><div className="ghc-toolbar"><input aria-label="搜索插件" placeholder="搜索名称、功能或分类" value={query} onChange={e=>setQuery(e.target.value)}/><select aria-label="选择来源" value={source} onChange={e=>{setSource(e.target.value);setCategory('all');setSelectedCatalog([])}}><option value="builtin">社区目录 · {local.length}</option>{indexes.map(x=><option key={x.url} value={x.url}>{tr(x.title)||x.url}</option>)}</select><select aria-label="分类" value={category} onChange={e=>setCategory(e.target.value)}><option value="all">全部分类</option>{[...new Set((source==='builtin'?local:remoteEntries).map(p=>p.category).concat(category==='all'?[]:[category]))].sort().map(c=><option key={c} value={c}>{CATEGORIES[c]||c}</option>)}</select></div>
      <div className="ghc-section"><div><h2>探索插件</h2><p>{source==='builtin' ? `来自社区目录，按 GitHub 星标和下载量选取 · 更新于 ${catalog.updated} · 兼容性由宿主检查` : `索引共 ${total} 项 · ${source}`}</p></div><div><span>{shown.length} 项 </span><button disabled={busy||!selectedCatalog.length} onClick={()=>run('install',selectedCatalog.map(p=>({spec:p.spec,registry:p.registry,label:`${p.name}  ${p.spec}`})))}>安装所选 ({selectedCatalog.length})</button></div></div>
      <div className="ghc-grid">{shown.map(p=><article className="ghc-card" key={p.name}><div className="ghc-card-top"><input type="checkbox" aria-label={`选择安装 ${p.name}`} checked={selectedCatalog.some(x=>x.name===p.name)} disabled={busy||!p.spec||installed.has(p.name)||['installed','provided'].includes(p.installation)||(selectedCatalog.length>=30&&!selectedCatalog.some(x=>x.name===p.name))} onChange={e=>setSelectedCatalog(old=>e.target.checked?[...old,p]:old.filter(x=>x.name!==p.name))}/><div className="ghc-icon">{(p.title||p.name).replace(/^@/,'').slice(0,1).toUpperCase()}</div><div className="ghc-title"><h3>{p.title}</h3><small>{p.name}</small></div><span className="ghc-category">{CATEGORIES[p.category]||p.category}</span></div><p>{p.description||'作者未提供简介'}</p><div className="ghc-card-bottom"><span>{p.stars ? `★ ${p.stars}` : p.version ? `v${p.version}` : '兼容性未知'}</span><div>{p.repository && <a href={p.repository} target="_blank" rel="noreferrer">源码</a>}{installed.has(p.name)||['installed','provided'].includes(p.installation) ? <button disabled>已安装</button> : <button disabled={busy || !p.spec} onClick={()=>run('install',[{spec:p.spec,registry:p.registry,label:`${p.name}  ${p.spec}`}])}>{p.spec?'安装':'无兼容版本'}</button>}</div></div></article>)}</div>
      {remoteLoading && source!=='builtin' && <div className="ghc-empty" role="status">正在读取来源…</div>}{!shown.length && !remoteLoading && <div className="ghc-empty">没有匹配的插件。试试其他关键词或来源。</div>}{source!=='builtin' && next!==null && <button className="ghc-more" disabled={remoteLoading} onClick={()=>loadRemote(next,true)}>加载更多</button>}</>}
    {tab==='installed' && <><div className="ghc-section"><div><h2>已安装</h2><p>显示当前运行配置中的插件；卸载由 DSH 宿主执行。</p></div><div><button disabled={busy||!selected.length} onClick={()=>run('remove',selected.map(name=>({name,label:name})))}>卸载所选 ({selected.length})</button> <button onClick={refresh}>刷新</button></div></div><div className="ghc-list">{[...installed.values()].map(p=><div className="ghc-row" key={p.name}><input type="checkbox" aria-label={`选择 ${p.name}`} checked={selected.includes(p.name)} disabled={!p.removable||busy} onChange={e=>setSelected(old=>e.target.checked?[...old,p.name]:old.filter(n=>n!==p.name))}/><div className="ghc-row-name"><strong>{p.name}</strong><small>{p.version ? `v${p.version} · `:''}{p.enabled?'已启用':'已停用'}{p.official?' · 官方组件':''}</small></div><button disabled={busy||p.official} onClick={()=>toggle(p)}>{p.enabled?'停用':'启用'}</button><button disabled={busy||!p.removable} onClick={()=>run('remove',[{name:p.name,label:p.name}])}>卸载</button></div>)}</div></>}
    {tab==='add' && <div className="ghc-form"><h2>添加一个或多个插件</h2><p>每行一个 npm 包名、GitHub 地址、内网 Git 地址、绝对目录或 .tgz 文件路径。按顺序安装，每项分别显示结果。</p><textarea aria-label="插件来源或本地路径" value={target} onChange={e=>setTarget(e.target.value)} placeholder={'github:owner/dsh-plugin\nD:\\plugins\\my-plugin\nD:\\plugins\\other-plugin.tgz'} rows={7}/><p>本地多文件插件请填写包含 package.json 的目录；压缩包请填写 .tgz 的绝对路径。安装要求包声明 dsh.bundle。</p><button className="ghc-primary" disabled={busy || !manager} onClick={batch}>{busy?'正在处理…':'安装列表'}</button></div>}
    {tab==='sources' && <div className="ghc-form"><h2>插件来源</h2><p>添加 DSH format 1 索引 URL，支持公司内网 HTTP(S) 地址。来源由 DSH 保存，插件来源和权限请自行核实。</p>{!marketReady && <div className="ghc-message">索引服务未就绪或不可用。请确认「插件 → 已安装 → 实验性插件」中的「自定义插件索引」已启用，然后刷新。<button onClick={refresh}>刷新</button></div>}<div className="ghc-inline"><input aria-label="索引 URL" value={url} onChange={e=>setUrl(e.target.value)} placeholder="https://company.example/plugins/index.json"/><button className="ghc-primary" disabled={!marketReady} onClick={addIndex}>添加来源</button></div><div className="ghc-list">{indexes.length ? indexes.map(x=><div className="ghc-row" key={x.url}><div><strong>{tr(x.title)||'自定义来源'}</strong><small>{x.url}{x.error?` · ${x.error}`:''}</small></div><button onClick={()=>removeIndex(x)}>移除</button></div>) : <p>还没有自定义来源。</p>}</div></div>}
  </div>
}

export const name = 'dsh-plugin-github-center'
export const inject = ['slots', 'remote', 'remote.pluginManager', 'remote.pluginMarket']
export function apply(ctx) {
  ctx.slots.inject('plugins.tab', () => ctx.slots.register({ name:'plugins.tab', id:'github-center', label:()=> '社区插件中心', inject:()=>({}) }, () => <Center remote={ctx.remote}/>))
}
