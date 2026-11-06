import { build } from 'esbuild'
import { readFile, copyFile } from 'node:fs/promises'
await Promise.all([copyFile('src/agent.mjs', 'lib/agent.mjs'), copyFile('src/core.mjs', 'lib/core.mjs'), copyFile('src/catalog.json', 'lib/catalog.json')])
const css = await readFile('src/style.css', 'utf8')
await build({
  entryPoints: ['src/client.jsx'], outfile: 'client/client.js', bundle: true,
  platform: 'browser', format: 'cjs', target: 'es2022', external: ['react', 'react/jsx-runtime'],
  jsx: 'automatic', minify: false,
  banner: { js: `window.__ModuleLoader__.load({ id: "dsh-plugin-github-center", factory: (require) => { var module = { exports: {} }; var exports = module.exports; if (!document.querySelector('style[data-ghc]')) { const style = document.createElement('style'); style.dataset.ghc = ''; style.dataset.plugin = 'dsh-plugin-github-center'; style.textContent = ${JSON.stringify(css)}; document.head.appendChild(style); }` },
  footer: { js: 'return module.exports; } });' },
})
