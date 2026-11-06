import test from 'node:test'
import assert from 'node:assert/strict'
import { createCommunityTool } from '../src/agent.mjs'

const signal = new AbortController().signal
function setup(market) { return createCommunityTool({get: name => name === 'pluginMarket' ? market : undefined}) }
test('Agent searches the real built-in catalog with bounded pages and exact manager install target', async () => {
  const tool=setup()
  const first=JSON.parse(await tool.execute({action:'search',query:'dshmarket',limit:2},{signal}))
  assert.ok(first.total >= 1)
  const item=first.entries.find(x=>x.name==='dshmarket')
  assert.ok(item); assert.match(item.install.target,/^dshmarket@/); assert.equal(item.compatibility,'unknown')
  const all=JSON.parse(await tool.execute({action:'search',limit:2},{signal}))
  assert.equal(all.total,200); assert.equal(all.nextOffset,2)
  await assert.rejects(tool.execute({action:'search',limit:51},{signal}),/limit/)
  await assert.rejects(tool.execute({action:'install',target:'x'},{signal}),/Invalid/)
})
test('Agent only reads configured safe sources, passes real install target and honors cancellation', async () => {
  const market={listIndexes:()=>[{url:'http://company.local/index.json',title:'Company'},{url:'https://x/a?token=secret'}],search:async(url,q)=>({total:1,nextOffset:null,entries:[{name:'team',title:'Team',versions:[{version:'1.0.0',install:{spec:'github:team/plugin'},compatibility:{compatible:true}}],defaultVersion:'1.0.0'}]})}
  const tool=setup(market)
  const sources=JSON.parse(await tool.execute({action:'list_sources'},{signal}))
  assert.deepEqual(sources.sources.map(x=>x.url),['http://company.local/index.json'])
  const result=JSON.parse(await tool.execute({action:'search_source',source:'http://company.local/index.json'},{signal}))
  assert.equal(result.entries[0].install.target,'github:team/plugin')
  await assert.rejects(tool.execute({action:'search_source',source:'https://evil.example/index.json'},{signal}),/configured/)
  const aborted=new AbortController(); aborted.abort()
  await assert.rejects(tool.execute({action:'search'},{signal:aborted.signal}))
})
