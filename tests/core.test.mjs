import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { parseTargets, validateIndex, resultText, mapRemoteEntry, unwrap } from '../src/core.mjs'

test('batch preserves paths with spaces, de-duplicates, and rejects options', () => {
  assert.deepEqual(parseTargets('C:\\my plugins\\one.tgz\ngithub:a/b\nC:\\my plugins\\one.tgz'), ['C:\\my plugins\\one.tgz', 'github:a/b'])
  assert.throws(() => parseTargets('--config.foo=true'), /无效/)
  assert.throws(() => parseTargets(' '), /至少/)
  assert.throws(() => parseTargets('https://user:secret@example.com/a/repo.git'), /不能包含/)
})
test('company HTTP sources are accepted but credentials and fragments are rejected', () => {
  assert.equal(validateIndex('http://192.168.1.2/index.json'), 'http://192.168.1.2/index.json')
  assert.throws(() => validateIndex('https://user:secret@example.com/index.json'))
  assert.throws(() => validateIndex('https://example.com/index.json#x'))
  assert.throws(() => validateIndex('https://example.com/index.json?token=secret'))
  assert.throws(() => validateIndex('file:///tmp/index.json'))
})
test('remote results and compatibility are interpreted conservatively', () => {
  assert.throws(() => unwrap({ok:false,error:{message:'offline'}}), /offline/)
  assert.equal(resultText({application:'restart-required'}), '已处理，重启后生效')
  assert.match(resultText({application:'failed',pendingBuilds:['native']}), /待授权/)
  const mapped = mapRemoteEntry({name:'example',versions:[{version:'1.0.0',install:{spec:'github:a/b',registry:'https://npm.example'}}],defaultVersion:'1.0.0'})
  assert.equal(mapped.spec, 'github:a/b'); assert.equal(mapped.registry, 'https://npm.example/')
  assert.equal(mapRemoteEntry({name:'example',versions:[]}).spec, undefined)
  assert.equal(mapRemoteEntry({name:'example',repository:{url:'javascript:alert(1)'},versions:[]}).repository, undefined)
})
test('catalog has 200 distinct, source-backed versioned entries', async () => {
  const catalog = JSON.parse(await readFile(new URL('../src/catalog.json', import.meta.url)))
  assert.equal(catalog.plugins.length, 200)
  assert.equal(new Set(catalog.plugins.map(x=>x.name)).size, 200)
  for (const p of catalog.plugins) { assert.match(p.repository, /^https:\/\/github\.com\//); assert.ok(p.version); assert.ok(p.description) }
})
