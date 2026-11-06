import { writeFile } from 'node:fs/promises'

const fetchJson = async (url) => {
  const response = await fetch(url, { signal: AbortSignal.timeout(30000) })
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`)
  return response.json()
}
const [registry, index] = await Promise.all([
  fetchJson('https://awesome-dsh-plugin.com/plugins.json'),
  fetchJson('https://cdn.jsdelivr.net/npm/dsh-plugin-catalog/index.json'),
])
const byRepo = new Map(registry.plugins.map(p => [p.url?.toLowerCase().replace(/\/$/, ''), p]))
const seen = new Set()
const candidates = index.plugins.flatMap(p => {
  const original = byRepo.get(p.repository?.url?.toLowerCase().replace(/\/$/, ''))
  if (!original || !p.name || !p.versions?.[0]?.version || p.versions[0].source?.type !== 'npm' || seen.has(p.name)) return []
  seen.add(p.name)
  return [{ name: p.name, title: p.title || p.name, description: p.description?.zh || p.description?.en || '',
    category: p.metadata?.category || 'other', repository: p.repository.url, version: p.versions[0].version,
    stars: Number(original.stars) || 0, downloads: Number(original.downloads) || 0 }]
}).sort ( (a,b) => b.stars - a.stars || b.downloads - a.downloads || a.name.localeCompare(b.name))
if (candidates.length < 200) throw new Error(`Only ${candidates.length} eligible entries; refusing to replace catalog`)
await writeFile('src/catalog.json', JSON.stringify({ source: registry.source, index: 'https://cdn.jsdelivr.net/npm/dsh-plugin-catalog/index.json', updated: registry.updated, selection: 'GitHub stars, then npm downloads; matched format-1 npm entries', plugins: candidates.slice(0, 200) }, null, 2) + '\n')
console.log(`Saved 200 entries from ${candidates.length} matched npm entries (${registry.updated})`)
