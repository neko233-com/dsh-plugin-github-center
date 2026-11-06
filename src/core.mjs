export function unwrap(answer) {
  if (!answer || answer.ok !== true) throw new Error(answer?.error?.message || '与 DSH 的连接失败，请刷新后检查状态')
  return answer.value
}

export function parseTargets(value) {
  const lines = value.split(/\r?\n/).map(x => x.trim()).filter(Boolean)
  if (!lines.length) throw new Error('请至少输入一个来源或本地路径')
  if (lines.length > 30) throw new Error('每次最多处理 30 项')
  if (lines.some(x => x.startsWith('-') || /[\u0000-\u001f]/.test(x))) throw new Error('来源格式无效')
  if (lines.some(x => /^(?:git\+)?https?:\/\//i.test(x) && (() => { try { const u=new URL(x.replace(/^git\+/, '')); return !!(u.username || u.password || u.search) } catch { return true } })())) throw new Error('来源地址不能包含账号、密码或查询参数；请使用本机 Git/npm 凭据配置')
  return [...new Set(lines)]
}

export function validateIndex(value) {
  const url = new URL(value.trim())
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.hash || url.search) throw new Error('索引需要不含账号、密码、查询参数或片段的 HTTP(S) 地址')
  return url.href
}

export function resultText(result) {
  if (result.application === 'failed' || result.application === 'cancelled') {
    const pending = result.pendingBuilds?.length ? `；待授权构建脚本：${result.pendingBuilds.join(', ')}（请在官方插件管理器中处理）` : ''
    return `失败：${result.error?.diagnostic || result.error?.code || result.application}${pending}`
  }
  if (result.application === 'restart-required') return '已处理，重启后生效'
  if (result.application === 'overridden') return '已处理，但配置被其他层覆盖'
  if (result.application === 'applied') return '已生效'
  return `状态未知：${result.application || '无结果'}`
}

export function mapRemoteEntry(p) {
  const version = p.versions?.find(v => v.version === p.defaultVersion)
  let repository
  try { const u = new URL(p.repository?.url); if (['http:', 'https:'].includes(u.protocol) && !u.username && !u.password) repository = u.href } catch {}
  let spec, registry
  try {
    if (version?.install?.spec && parseTargets(version.install.spec).length === 1) spec = version.install.spec
    if (version?.install?.registry) registry = validateIndex(version.install.registry)
  } catch { spec = undefined; registry = undefined }
  return { name: p.name, title: typeof p.title === 'string' ? p.title : p.title?.zh || p.title?.en || p.name,
    description: typeof p.description === 'string' ? p.description : p.description?.zh || p.description?.en || '',
    category: p.metadata?.category || 'other', repository,
    version: version?.version, spec, registry,
    compatible: !!version, installation: p.installation?.status }
}
