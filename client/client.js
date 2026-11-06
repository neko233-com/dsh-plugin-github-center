window.__ModuleLoader__.load({ id: "dsh-plugin-github-center", factory: (require) => { var module = { exports: {} }; var exports = module.exports; if (!document.querySelector('style[data-ghc]')) { const style = document.createElement('style'); style.dataset.ghc = ''; style.dataset.plugin = 'dsh-plugin-github-center'; style.textContent = ".ghc{--ink:#203150;--muted:#66758b;--line:#e1e8f0;--blue:#315fcc;color:var(--ink);font:14px/1.5 system-ui,-apple-system,\"Microsoft YaHei\",sans-serif;padding:28px 32px 50px;max-width:1500px;margin:auto;box-sizing:border-box}.ghc *{box-sizing:border-box}.ghc button,.ghc input,.ghc select,.ghc textarea{font:inherit}.ghc button{cursor:pointer}.ghc button:disabled{cursor:not-allowed;opacity:.55}.ghc button:focus-visible,.ghc input:focus-visible,.ghc select:focus-visible,.ghc textarea:focus-visible,.ghc a:focus-visible{outline:3px solid #86aaff;outline-offset:2px}.ghc-head{display:flex;justify-content:space-between;align-items:end;padding:6px 0 24px}.ghc-kicker{color:#5275b5;font-size:11px;letter-spacing:.13em;font-weight:700}.ghc h1{font-size:30px;letter-spacing:-.03em;margin:4px 0}.ghc-head p,.ghc-section p,.ghc-form p{color:var(--muted);margin:4px 0}.ghc-count{display:grid;text-align:right;color:var(--muted)}.ghc-count strong{font-size:26px;line-height:1.1;color:var(--ink)}.ghc-nav{display:flex;gap:24px;border-bottom:1px solid var(--line);overflow:auto}.ghc-nav button{border:0;border-bottom:3px solid transparent;background:none;color:var(--muted);padding:12px 0;white-space:nowrap}.ghc-nav button.active{border-color:var(--blue);color:var(--blue);font-weight:700}.ghc-toolbar{display:flex;gap:10px;margin-top:24px}.ghc input,.ghc select,.ghc textarea{border:1px solid #d3dce8;border-radius:8px;background:#fff;color:var(--ink);padding:10px 12px}.ghc-toolbar input{flex:1;min-width:100px}.ghc select{max-width:260px}.ghc-section{display:flex;justify-content:space-between;align-items:end;margin:28px 0 14px}.ghc h2{font-size:18px;margin:0}.ghc-section>span{color:var(--muted)}.ghc-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:12px}.ghc-card{border:1px solid var(--line);border-radius:10px;padding:17px;background:#fff;min-width:0;display:flex;flex-direction:column}.ghc-card-top{display:flex;gap:11px;align-items:start}.ghc-icon{width:38px;height:38px;display:grid;place-items:center;border-radius:9px;background:#e9efff;color:#385db1;font-weight:700;font-size:18px;flex:none}.ghc-title{min-width:0;flex:1}.ghc h3{font-size:14px;line-height:1.3;margin:0;overflow-wrap:anywhere}.ghc small{display:block;color:var(--muted);overflow-wrap:anywhere}.ghc-category{color:#4565a4;background:#f1f5fb;border-radius:5px;padding:2px 6px;font-size:11px;white-space:nowrap}.ghc-card>p{color:#5e6d82;line-height:1.5;margin:14px 0;min-height:63px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.ghc-card-bottom{display:flex;align-items:center;justify-content:space-between;margin-top:auto;color:var(--muted);font-size:12px}.ghc-card-bottom div{display:flex;align-items:center;gap:12px}.ghc a{color:#4569b3;text-decoration:none}.ghc button:not(.ghc-nav button){border:1px solid #d3dce8;border-radius:7px;background:#fff;color:#35527c;padding:6px 12px}.ghc-card-bottom button,.ghc button.ghc-primary{background:#315fcc;color:#fff;border-color:#315fcc}.ghc-list{border-top:1px solid var(--line);margin-top:20px}.ghc-row{display:flex;align-items:center;justify-content:space-between;gap:15px;padding:15px 0;border-bottom:1px solid var(--line)}.ghc-form{max-width:780px;padding-top:28px}.ghc-form p{margin:10px 0 16px}.ghc textarea{width:100%;resize:vertical}.ghc-inline{display:flex;gap:8px}.ghc-inline input{flex:1;min-width:0}.ghc-message,.ghc-results{margin-top:16px;padding:12px 14px;background:#edf4ff;border-radius:8px;color:#34517b}.ghc-message{display:flex;justify-content:space-between}.ghc-message button{border:0!important;background:transparent!important;padding:0 4px!important}.ghc-results div{overflow-wrap:anywhere;margin-top:6px}.ghc-results div span{font-weight:600}.ghc-empty{text-align:center;padding:55px;color:var(--muted)}.ghc-more{display:block;margin:20px auto}.ghc-card-bottom a:hover{text-decoration:underline}@media(max-width:650px){.ghc{padding:20px 16px}.ghc-head{align-items:start}.ghc-toolbar{flex-wrap:wrap}.ghc-toolbar input{flex-basis:100%}.ghc-toolbar select{flex:1;min-width:0}.ghc-grid{grid-template-columns:1fr}.ghc-count{font-size:11px}.ghc-nav{gap:18px}}\n.ghc-row-name{flex:1;min-width:0}\nbody[data-ds-dark-theme] .ghc{--ink:var(--dsw-alias-label-primary,#f0f2f7);--muted:var(--dsw-alias-label-secondary,#bbc2cc);--line:var(--dsw-alias-border-l3,#505866);--blue:#8baaff}\nbody[data-ds-dark-theme] .ghc input,body[data-ds-dark-theme] .ghc select,body[data-ds-dark-theme] .ghc textarea,body[data-ds-dark-theme] .ghc-card,body[data-ds-dark-theme] .ghc button:not(.ghc-nav button){background:var(--dsw-alias-bg-layer-1,#232426);color:var(--ink);border-color:var(--line)}\nbody[data-ds-dark-theme] .ghc button.ghc-primary,body[data-ds-dark-theme] .ghc-card-bottom button:not(:disabled){background:#315fcc;color:#fff;border-color:#315fcc}\nbody[data-ds-dark-theme] .ghc-card>p{color:var(--muted)}\nbody[data-ds-dark-theme] .ghc-message,body[data-ds-dark-theme] .ghc-results{background:#263854;color:#e4edff}\nbody[data-ds-dark-theme] .ghc a{color:#a7c0ff}\n"; document.head.appendChild(style); }
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client.jsx
var client_exports = {};
__export(client_exports, {
  apply: () => apply,
  inject: () => inject,
  name: () => name
});
module.exports = __toCommonJS(client_exports);
var import_react = __toESM(require("react"), 1);

// src/catalog.json
var catalog_default = {
  source: "https://github.com/awesome-dsh-plugin/awesome-dsh-plugin",
  index: "https://cdn.jsdelivr.net/npm/dsh-plugin-catalog/index.json",
  updated: "2026-11-05",
  selection: "GitHub stars, then npm downloads; matched format-1 npm entries",
  plugins: [
    {
      name: "dshmarket",
      title: "dsh-market/dsh-market",
      description: "\u5728 DeepSeek Harness \u8BBE\u7F6E\u9875\u5185\u6D4F\u89C8\u3001\u641C\u7D22\u5E76\u5B89\u88C5\u793E\u533A\u63D2\u4EF6\uFF0C\u652F\u6301\u5206\u7C7B\u7B5B\u9009\u3001\u4E00\u952E\u66F4\u65B0\u4E0E\u505C\u7528\uFF0C\u4EE5\u53CA\u4E3B\u9898\u5207\u6362\u4E0E\u914D\u7F6E\u5907\u4EFD\u3002",
      category: "market",
      repository: "https://github.com/dsh-market/dsh-market",
      version: "1.73.12",
      stars: 10295,
      downloads: 953547
    },
    {
      name: "@deepseek-harness-tui/dsh-tui",
      title: "ccch1mneyyy/dsh-TUI",
      description: "Claude Code \u98CE\u683C\u5168\u5C4F\u7EC8\u7AEF UI\uFF1A\u50CF\u7D20\u9CB8\u9C7C\u9876\u680F\u3001\u5B9E\u65F6\u5DE5\u4F5C\u72B6\u6001\u884C\u3001\u601D\u8003\u6D41\u5F0F\u5C55\u5F00\u3002",
      category: "ui",
      repository: "https://github.com/ccch1mneyyy/dsh-TUI",
      version: "0.18.0",
      stars: 7006,
      downloads: 62591
    },
    {
      name: "dsh-whale-widget",
      title: "MeteorNOX/DeepSeek-Balance-Whale-Widget",
      description: "\u53F3\u4E0B\u89D2\u5E38\u9A7B\u7684\u5C0F\u9CB8\u9C7C\u6302\u4EF6\uFF1A\u4F59\u989D\u3001\u4ECA\u65E5\u5DF2\u7528\u4E0E\u6BCF\u8F6E\u5BF9\u8BDD\u6D88\u8017\uFF08\u542B\u5CF0\u8C37\u4EF7\uFF09\uFF0C\u4F59\u989D\u9884\u8B66\u4E0E\u4ECA\u65E5\u9884\u7B97\u7684\u6CE1\u6CE1\u5185\u5BB9\u90FD\u53EF\u7F16\u8F91\uFF1B\u6CE1\u6CE1\u70B9\u51FB\u5E8F\u5217\u6A21\u5757\u5316\u81EA\u5B9A\u4E49\uFF0C\u652F\u6301\u5E76\u5217\u52A0\u6743 A/B\u3001\u968F\u673A\u53F0\u8BCD\u4E0E\u968F\u673A\u56FE\u7247\uFF1B\u5185\u7F6E 30+ \u5382\u5546\u6A21\u677F\uFF08OpenAI / OpenRouter / Kimi / \u7845\u57FA\u6D41\u52A8 / \u65B9\u821F / \u667A\u8C31 / MiniMax\u2026",
      category: "ui",
      repository: "https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget",
      version: "0.4.2",
      stars: 6922,
      downloads: 405845
    },
    {
      name: "dsh-plugin-wallpaper-engine",
      title: "elysia395/dsh-wallpaper-engine",
      description: "\u524D\u7F6E\u8981\u6C42\uFF1ADeepSeek Harness 0.1.5-rc.1+\uFF08DSH Desktop \u2265 2.0.7\uFF09\u4E14 dsh-better-sidebar \u2265 0.19.0\uFF0C\u5B89\u88C5\u6216\u66F4\u65B0\u672C\u63D2\u4EF6\u524D\u8BF7\u5148\u66F4\u65B0\u4E24\u8005\u3002\u628A\u672C\u673A Wallpaper Engine \u7684 Video/Web \u58C1\u7EB8\u5B9E\u65F6\u64AD\u653E\u5230\u804A\u5929\u754C\u9762\u540E\u65B9\uFF0CScene\u2026",
      category: "theme",
      repository: "https://github.com/elysia395/dsh-wallpaper-engine",
      version: "1.4.2",
      stars: 5317,
      downloads: 127915
    },
    {
      name: "dsh-ops",
      title: "T-Auto/dsh-ops",
      description: "\u4E3A Windows \u7684 DSH \u63D0\u4F9B bash\u3001PowerShell 7 \u53CA Rust \u9AD8\u6027\u80FD\u5DE5\u5177\uFF0C\u51CF\u5C11 token \u6D88\u8017\u3002",
      category: "tools",
      repository: "https://github.com/T-Auto/dsh-ops",
      version: "0.4.4",
      stars: 5074,
      downloads: 138405
    },
    {
      name: "dsh-better-sidebar",
      title: "omdsh-dev/DSH-better-sidebar",
      description: "\u4FA7\u8FB9\u680F\u5B8C\u6574\u5DE5\u4F5C\u53F0\uFF1A\u5185\u7F6E\u6587\u4EF6\u6E32\u67D3\u7F16\u8F91\u3001\u7EC8\u7AEF\u3001Git \u4E0E\u5B50\u4EE3\u7406\uFF0C\u652F\u6301\u4E09\u65B9\u63D2\u4EF6\u6CE8\u518C\u65B0 Tab\u3002",
      category: "ui",
      repository: "https://github.com/omdsh-dev/DSH-better-sidebar",
      version: "0.30.1",
      stars: 4933,
      downloads: 269118
    },
    {
      name: "@liustack/modlens",
      title: "liustack/modlens",
      description: "\u4E3A\u7EAF\u6587\u672C\u6A21\u578B\u67B6\u8D77\u89C6\u89C9\u6865\u6881\uFF1A\u7C98\u8D34\u56FE\u7247\uFF0C\u8F93\u51FA\u7ED3\u6784\u5316 JSON \u8BC1\u636E\uFF08OCR\u3001\u7248\u9762\u3001\u8BED\u4E49\uFF09\u3002",
      category: "vision",
      repository: "https://github.com/liustack/modlens",
      version: "3.27.2",
      stars: 4725,
      downloads: 242568
    },
    {
      name: "dsh-context",
      title: "bowenliang123/dsh-context",
      description: "DSH \u4E0A\u4E0B\u6587\u6D1E\u5BDF\u9762\u677F\uFF1AContext \u4EEA\u8868\u76D8 + /context\u547D\u4EE4 + Context \u6D4F\u89C8\u5668\uFF0C\u67E5\u770B Context\u7684\u5206\u7C7B\u7EC4\u6210\u3001\u5185\u5BB9\u8BE6\u60C5\u3001\u6F14\u8FDB\u8D8B\u52BF\u3001\u538B\u7F29/\u6CE8\u5165\u4E8B\u4EF6\u3001\u7EDF\u8BA1\u7B49\u4E00\u7AD9\u5F0F Context \u5168\u751F\u547D\u5468\u671F\u7BA1\u7406\u3002",
      category: "usage",
      repository: "https://github.com/bowenliang123/dsh-context",
      version: "0.82.0",
      stars: 4288,
      downloads: 361079
    },
    {
      name: "billion-context",
      title: "ranxianglei/billion-context",
      description: "billion-context\u5B98\u65B9\u7248\uFF1A\u4E0A\u4E0B\u6587\u538B\u7F29\u63D2\u4EF6\uFF0C\u517C\u987E\u5C0F\u7A97\u53E3(100k\u4E0A\u4E0B\u6587\u8DB3\u77E3)\u7701token(\u77015\u500Dtoken)\u548C\u8D85\u957F\u4F1A\u8BDD(\u6570\u6708\u7EA7\u522B\u51E0\u5341\u4EBFtoken\u5355\u4F1A\u8BDD)\u3002",
      category: "session",
      repository: "https://github.com/ranxianglei/billion-context",
      version: "0.1.212",
      stars: 4131,
      downloads: 2889440
    },
    {
      name: "@xmanrui/dsh-im",
      title: "xmanrui/dsh-im",
      description: "\u901A\u8FC7\u4E8C\u7EF4\u7801\u6216\u673A\u5668\u4EBA\u51ED\u636E\u5C06 IM \u673A\u5668\u4EBA\u63A5\u5165 DeepSeek Harness\uFF08\u652F\u6301\u98DE\u4E66\u3001\u5FAE\u4FE1\u3001\u9489\u9489\u3001\u4F01\u4E1A\u5FAE\u4FE1\u3001QQ\u3001Slack\u3001Telegram\u3001Discord \u548C WhatsApp \u5171 9 \u79CD\u6E20\u9053\uFF09\u3002",
      category: "notify",
      repository: "https://github.com/xmanrui/dsh-im",
      version: "5.10.0",
      stars: 3118,
      downloads: 106140
    },
    {
      name: "dsh-pocket",
      title: "shaobeichen/dsh-pocket",
      description: "\u624B\u673A\u8FDC\u7A0B\u8BBF\u95EE DSH Web \u754C\u9762\uFF1A\u626B\u7801\u5373\u7528\u5C40\u57DF\u7F51\u6216\u516C\u7F51\uFF08cloudflared \u96A7\u9053\uFF09\u8BBF\u95EE\uFF0C\u5B9E\u65F6\u540C\u5C4F\u3001\u79FB\u52A8\u7AEF\u9002\u914D\u5E03\u5C40\uFF0C\u5E26\u8BBE\u7F6E\u9875\u7BA1\u7406\u3002",
      category: "notify",
      repository: "https://github.com/shaobeichen/dsh-pocket",
      version: "2.12.0",
      stars: 2685,
      downloads: 19983
    },
    {
      name: "@nanmicoder/dsh-agent-teams",
      title: "NanmiCoder/dsh-agent-teams",
      description: "AgentTeams \u591A\u667A\u80FD\u4F53\u56E2\u961F\u3002",
      category: "workflow",
      repository: "https://github.com/NanmiCoder/dsh-agent-teams",
      version: "0.1.28",
      stars: 2647,
      downloads: 53456
    },
    {
      name: "cc-safety-net",
      title: "kenryu42/cc-safety-net",
      description: "\u6267\u884C\u524D\u5B88\u536B\uFF0C\u5728\u5DE5\u5177\u8C03\u7528\u8FD0\u884C\u524D\u62E6\u622A\u7834\u574F\u6027 Git \u4E0E\u6587\u4EF6\u7CFB\u7EDF\u547D\u4EE4\uFF0C\u4EE5\u53CA\u5BF9 SSH \u5BC6\u94A5\u3001.env \u7B49\u673A\u5BC6\u6587\u4EF6\u7684\u8BBF\u95EE\u3002",
      category: "security",
      repository: "https://github.com/kenryu42/cc-safety-net",
      version: "2.7.3",
      stars: 1900,
      downloads: 119120
    },
    {
      name: "dsh-blender-plugin",
      title: "sixtysevenlf/dsh-blender-plugin",
      description: "\u8BA9 DSH agent \u901A\u8FC7\u76F4\u8FDE TCP \u901A\u9053\u9A71\u52A8\u672C\u5730 Blender\uFF0C\u63D0\u4F9B 15 \u4E2A\u5DE5\u5177\uFF1A\u89C6\u53E3\u5E27\u3001\u81EA\u5B9A\u4E49\u89C6\u89D2\u6E32\u67D3\u3001Python \u6267\u884C\u3001\u65E0\u5934\u4E0E\u4F5C\u4E1A\u5378\u8F7D\u3001\u4E8B\u52A1\u56DE\u6EDA\uFF0C\u4EE5\u53CA 34 \u4E2A family / 228 \u4E2A op \u7684\u89C4\u5212\u5C42\u3002",
      category: "tools",
      repository: "https://github.com/sixtysevenlf/dsh-blender-plugin",
      version: "3.0.6",
      stars: 1575,
      downloads: 2775
    },
    {
      name: "brooks-lint",
      title: "hyhmrright/brooks-lint",
      description: "\u63D0\u4F9B\u516D\u4E2A\u4EE3\u7801\u8D28\u91CF\u6280\u80FD\uFF0C\u6DB5\u76D6\u4EE3\u7801\u5BA1\u67E5\u3001\u67B6\u6784\u5BA1\u8BA1\u3001\u6280\u672F\u503A\u3001\u6D4B\u8BD5\u8D28\u91CF\u3001\u5065\u5EB7\u770B\u677F\u4E0E\u4FEE\u590D\u3002",
      category: "skill",
      repository: "https://github.com/hyhmrright/brooks-lint",
      version: "1.9.1",
      stars: 1556,
      downloads: 1903
    },
    {
      name: "ds-harness-remote",
      title: "liguobao/ds-harness-remote",
      description: "\u901A\u8FC7\u7AEF\u5230\u7AEF\u52A0\u5BC6\u901A\u9053\u8FDC\u7A0B\u8BBF\u95EE DeepSeek Harness \u53CA\u517C\u5BB9\u7684\u7F16\u7801\u5DE5\u4F5C\u533A\uFF0C\u652F\u6301\u81EA\u9002\u5E94 Relay/WebRTC \u4F20\u8F93\u3001\u8BBE\u5907\u6388\u6743\u3001\u5DE5\u4F5C\u533A\u6587\u4EF6\u3001\u53EA\u8BFB\u9884\u89C8\u3001\u7EC8\u7AEF\u548C\u53EF\u9009\u7684 Codex Remote\u3002",
      category: "remote",
      repository: "https://github.com/liguobao/ds-harness-remote",
      version: "0.6.3",
      stars: 1319,
      downloads: 21747
    },
    {
      name: "@yunmiao/studymate",
      title: "Miaotofu01/Study-Mate",
      description: "\u4F60\u7684AI\u5B66\u4E60\u642D\u6863\uFF1A\u5B9A\u8BA1\u5212\u3001\u8BB2\u77E5\u8BC6\u3001\u505A\u9879\u76EE\uFF0C\u5B66\u900F\u4E00\u95E8\u79D1\u76EE\u3002",
      category: "workflow",
      repository: "https://github.com/Miaotofu01/Study-Mate",
      version: "2.0.3",
      stars: 1307,
      downloads: 7089
    },
    {
      name: "dsh-vision-router",
      title: "ysr666/dsh-vision-router",
      description: "\u4E3A\u7EAF\u6587\u672C Agent \u63D0\u4F9B\u89C6\u89C9\u80FD\u529B\uFF1A\u5185\u7F6E\u514D Key \u89C6\u89C9\u94FE + \u50CF\u7D20\u7EA7\u89C6\u89C9\u5DE5\u5177\uFF08\u770B\u56FE\u95EE\u7B54\u3001\u5B9A\u4F4D\u3001\u88C1\u526A\u3001\u50CF\u7D20\u5BF9\u6BD4\u3001\u53D6\u8272\u3001OCR\u3001\u77E2\u91CF\u5316\u3001\u62A0\u56FE\u3001\u622A\u56FE\uFF09\uFF1B\u7C98\u8D34\u56FE\u7247\u5373\u53EF\u7528\u3002",
      category: "vision",
      repository: "https://github.com/ysr666/dsh-vision-router",
      version: "3.1.3",
      stars: 1211,
      downloads: 50956
    },
    {
      name: "dsh-connect-workbuddy",
      title: "dingminhua/dsh-connect-workbuddy",
      description: "\u5C06\u672C\u673A\u767B\u5F55\u7684 WorkBuddy \u6A21\u578B\uFF08\u56FD\u5185\u7248\u4E0E\u56FD\u9645\u7248\uFF09\u63A5\u5165 DSH\uFF0C\u6BCF\u6B21\u5237\u65B0\u6309\u4E0A\u6E38\u76EE\u5F55\u8BFB\u53D6\u6BCF\u4E2A\u6A21\u578B\u7684\u79EF\u5206\u500D\u7387\uFF0C\u652F\u6301\u9010\u6A21\u578B\u56FE\u7247\u8F93\u5165\u5F00\u5173\u3001\u5E26\u81EA\u52A8\u6362\u53F7\u7684\u8D26\u53F7\u6C60\u3001\u624B\u52A8\u6BCF\u65E5\u7B7E\u5230\uFF0C\u4EE5\u53CA\u5361\u7247\u4E0E\u8F93\u5165\u6846\u91CC\u7684\u53EA\u8BFB\u79EF\u5206\u80F6\u56CA\u8BFB\u6570\u3002",
      category: "model",
      repository: "https://github.com/dingminhua/dsh-connect-workbuddy",
      version: "5.19.1",
      stars: 1198,
      downloads: 73347
    },
    {
      name: "dsh-bili-scroll",
      title: "c1overzz/dsh-bili-scroll",
      description: "\u8BA9\u4F60\u7684 DSH \u81EA\u5DF1\u5237 B\u7AD9 \u2014\u2014 \u8BFB\u5B57\u5E55\u539F\u6587\u6311\u5185\u5BB9\u3001\u5199\u65E5\u62A5\uFF0C\u9047\u5230\u503C\u5F97\u770B\u7684\u4F1A\u53D1\u8BC4\u8BBA @ \u4F60\u3002",
      category: "notify",
      repository: "https://github.com/c1overzz/dsh-bili-scroll",
      version: "2.5.0",
      stars: 1150,
      downloads: 59517
    },
    {
      name: "dsh-image-gen",
      title: "shanliuling/dsh-image-gen",
      description: "\u4E3A DeepSeek Harness \u63D0\u4F9B\u539F\u751F\u5BF9\u8BDD\u751F\u56FE\u80FD\u529B\uFF1A\u76F4\u63A5\u8BA9 Agent \u753B\u56FE\uFF0C\u63D2\u4EF6\u81EA\u52A8\u5B8C\u6210\u751F\u6210\u5E76\u628A\u7ED3\u679C\u4FDD\u7559\u5728\u5F53\u524D\u4F1A\u8BDD\u4E2D\u3002",
      category: "workflow",
      repository: "https://github.com/shanliuling/dsh-image-gen",
      version: "0.10.3",
      stars: 1075,
      downloads: 59326
    },
    {
      name: "@anionex/dsh-vision-toolkit",
      title: "Anionex/dsh-vision-toolkit",
      description: "\u8BA9\u7EAF\u6587\u672C\u6A21\u578B\u5904\u7406\u89C6\u89C9\u4EFB\u52A1\uFF1A\u7C98\u8D34\u56FE\u7247\u540E\u81EA\u52A8\u5207\u6362\u5230 Vision Toolkit \u53D8\u4F53\uFF0C\u652F\u6301\u56FE\u7247\u95EE\u7B54\u3001\u591A\u56FE\u6BD4\u8F83\u3001\u957F\u622A\u56FE OCR\u3001\u622A\u56FE\u8FD8\u539F\u524D\u7AEF UI\u3001\u5143\u7D20\u5B9A\u4F4D\u4E0E\u50CF\u7D20\u5BF9\u6BD4\u3002\u9ED8\u8BA4\u65E0\u9700 API Key\u2014\u2014\u56FE\u7247\u7ECF\u4F5C\u8005\u81EA\u5EFA\u7684\u514D\u8D39\u670D\u52A1\u5904\u7406\uFF0C\u6BCF\u53F0\u673A\u5668\u6BCF\u5929 100 \u5F20\uFF1B\u4E5F\u53EF\u6539\u4E3A\u6307\u5411\u81EA\u5DF1\u7684\u670D\u52A1\u5546\u3002",
      category: "vision",
      repository: "https://github.com/Anionex/dsh-vision-toolkit",
      version: "0.1.48",
      stars: 922,
      downloads: 14649
    },
    {
      name: "@liustack/modsearch",
      title: "liustack/modsearch",
      description: "\u7EAF\u6587\u672C agent \u7684\u8054\u7F51\u641C\u7D22\u6865\uFF1A\u641C\u7D22\u7F51\u9875\u4E0E X\uFF0C\u8FD4\u56DE\u7ED3\u6784\u5316 JSON \u8BC1\u636E\uFF08search/fetch/\u5F15\u7528\uFF09\u3002",
      category: "browser",
      repository: "https://github.com/liustack/modsearch",
      version: "5.10.11",
      stars: 911,
      downloads: 58320
    },
    {
      name: "dsh-openwrite",
      title: "LiPu-jpg/Openwrite",
      description: "\u9762\u5411 DSH \u7684\u5C0F\u8BF4\u521B\u4F5C\u5DE5\u4F5C\u53F0\uFF0C\u63D0\u4F9B\u521B\u4F5C\u9884\u8BBE\u3001\u5927\u7EB2\u4E0E\u4EBA\u7269\u7BA1\u7406\u3001\u6B63\u6587\u6279\u6CE8\u3001\u5BA1\u7A3F\u6D41\u7A0B\u548C\u53D7\u7BA1\u7406\u7684\u672C\u5730 Python \u540E\u7AEF\u3002",
      category: "workflow",
      repository: "https://github.com/LiPu-jpg/Openwrite",
      version: "0.2.28",
      stars: 908,
      downloads: 8273
    },
    {
      name: "dsh-mnemon",
      title: "omdsh-dev/dsh-mnemon",
      description: "\u7531 Mnemon \u9A71\u52A8\u7684 DeepSeek Harness\uFF08DSH\uFF09\u8DE8 Agent\u3001\u672C\u5730\u4F18\u5148\u7684\u6301\u4E45\u8BB0\u5FC6\u63D2\u4EF6\u3002\u5B83\u53EF\u5728\u652F\u6301 Mnemon \u7684 Agent \u4E4B\u95F4\u5171\u4EAB\u957F\u671F\u8BB0\u5FC6\uFF0C\u5E76\u63D0\u4F9B\u8FD0\u884C\u65F6\u8BB0\u5FC6\u3001\u53EF\u68C0\u7D22\u9879\u76EE\u6863\u6848\u3001\u8BED\u4E49\u53EC\u56DE\u3001\u77E5\u8BC6\u56FE\u8C31\u548C Sidebar UI\u3002",
      category: "memory",
      repository: "https://github.com/omdsh-dev/dsh-mnemon",
      version: "0.5.41",
      stars: 904,
      downloads: 88971
    },
    {
      name: "dsh-api-relay-audit",
      title: "toby-bridges/api-relay-audit",
      description: "\u4ECE DeepSeek Harness \u5BF9 AI API \u4E2D\u8F6C\u7AD9\u548C LLM \u4EE3\u7406\u8FD0\u884C\u672C\u5730\u5B89\u5168\u5BA1\u8BA1\uFF0C\u751F\u6210 Markdown \u62A5\u544A\uFF0C\u8986\u76D6\u63D0\u793A\u8BCD\u6CE8\u5165\u3001\u6A21\u578B\u66FF\u6362\u4FE1\u53F7\u3001\u5DE5\u5177\u8C03\u7528\u6539\u5199\u3001\u9519\u8BEF\u6CC4\u6F0F\u3001\u6D41\u5B8C\u6574\u6027\u548C\u6309 profile \u542F\u7528\u7684 Web3 \u98CE\u9669\u3002",
      category: "security",
      repository: "https://github.com/toby-bridges/api-relay-audit",
      version: "2.5.0",
      stars: 904,
      downloads: 797
    },
    {
      name: "@changfenhuang/dsh-genui",
      title: "omdsh-dev/dsh-genui",
      description: "\u52A9\u624B\u56DE\u590D\u5185\u6E32\u67D3\u4EA4\u4E92\u5F0F UI \u7EC4\u4EF6\uFF1A\u5E03\u5C40\u3001\u56FE\u8868\u3001\u8868\u5355\u3001\u6D4B\u9A8C\u3001mermaid\u30013D \u573A\u666F\u4E0E\u56DE\u4F20\u4E8B\u4EF6\u5FAA\u73AF\u3002",
      category: "ui",
      repository: "https://github.com/omdsh-dev/dsh-genui",
      version: "0.15.0",
      stars: 865,
      downloads: 59318
    },
    {
      name: "dsh-free-search",
      title: "DDDMUC/dsh-free-search",
      description: "DSH \u514D\u8D39\u641C\u7D22\u63D2\u4EF6\uFF1A7 \u4E2A\u5F15\u64CE\uFF08DuckDuckGo/Bing/SearXNG \u514D\u8D39 + Exa/Perplexity/DeepSeek \u4ED8\u8D39\uFF09\u3001\u81EA\u52A8\u56DE\u9000\u3001\u8BBE\u7F6E\u9875 UI\uFF08API key \u8F93\u5165 + \u5B98\u7F51\u94FE\u63A5\uFF09\u3001web_fetch\u3001\u5F15\u64CE\u6D4B\u8BD5\u5DE5\u5177\u3002",
      category: "browser",
      repository: "https://github.com/DDDMUC/dsh-free-search",
      version: "0.9.32",
      stars: 817,
      downloads: 87808
    },
    {
      name: "@ljwei-stak/dsh-model-router",
      title: "Alice-Marx/dsh-model-router",
      description: "\u4E3A DeepSeek Harness \u89C4\u5212\u6709\u4F9D\u8D56\u7684\u5DE5\u4F5C\u5305\uFF0C\u5C06\u5176\u5206\u914D\u7ED9\u5DF2\u914D\u7F6E\u7684\u6A21\u578B API \u6216\u652F\u6301\u7684\u5382\u5546 CLI\uFF0C\u5E76\u63D0\u4F9B\u8D39\u7528\u9884\u89C8\u3002",
      category: "model",
      repository: "https://github.com/Alice-Marx/dsh-model-router",
      version: "0.63.2",
      stars: 806,
      downloads: 15695
    },
    {
      name: "dsh-mobile",
      title: "saya-ch/dsh-mobile",
      description: "\u901A\u8FC7 Android App \u6216\u624B\u673A\u6D4F\u89C8\u5668\u8BBF\u95EE DeepSeek Harness\uFF0C\u652F\u6301\u5B89\u5168\u5C40\u57DF\u7F51\u8FDE\u63A5\u3001\u8FDC\u7A0B\u8BBF\u95EE\u3001\u6301\u4E45\u8BBE\u5907\u914D\u5BF9\u548C\u53EF\u81EA\u5B9A\u4E49\u79FB\u52A8\u754C\u9762\u3002",
      category: "remote",
      repository: "https://github.com/saya-ch/dsh-mobile",
      version: "0.8.3",
      stars: 728,
      downloads: 23988
    },
    {
      name: "@nagi-ovo/dsh-ads",
      title: "Nagi-ovo/dsh-ads",
      description: "2005 \u5E74\u4E2D\u6587\u7AD9\u70B9\u98CE\u683C\u7684\u6574\u6D3B\u5E7F\u544A\u63D2\u4EF6\uFF1A\u4FA7\u680F\u5E7F\u544A/\u4FE1\u606F\u6D41/\u89D2\u843D\u5F39\u7A97 + \u5047\u5173\u95ED\u53C9\uFF0C\u7D20\u6750\u5168\u865A\u6784\u3002",
      category: "fun",
      repository: "https://github.com/Nagi-ovo/dsh-ads",
      version: "0.1.3",
      stars: 707,
      downloads: 2170
    },
    {
      name: "clearai-dsh",
      title: "Clearailhc/clearai-dsh",
      description: "\u4EE5\u8BC1\u636E\u4E3A\u51C6\u7684\u7814\u7A76\u7528\u667A\u80FD\u4F53\u9884\u8BBE\uFF1A\u6BCF\u4E00\u6B65\u53EA\u80FD\u9760\u7CFB\u7EDF\u6838\u9A8C\u8FC7\u7684\u89C2\u6D4B\u63A8\u8FDB\uFF0CL3 \u4EE5\u4E0A\u7684\u7ED3\u8BBA\u4EA4\u7ED9\u72EC\u7ACB\u8BC4\u4F30\u8005\uFF0C\u6574\u573A\u4F1A\u8BDD\u6298\u6210\u4E00\u4EFD\u53EF\u91CD\u653E\u7684\u8D26\u672C\uFF0C\u5E76\u957F\u6210\u53EF\u6D4F\u89C8\u7684\u9886\u57DF\u672C\u4F53\u3002\u9700\u8981 DSH >=0.1.7-alpha.1\u3002",
      category: "agi",
      repository: "https://github.com/Clearailhc/clearai-dsh",
      version: "0.5.7",
      stars: 687,
      downloads: 6541
    },
    {
      name: "@anysearch/anysearch-dsh",
      title: "anysearch-team/anysearch-dsh",
      description: "\u57FA\u4E8E AnySearch \u7684\u5B9E\u65F6\u7F51\u9875\u4E0E\u5782\u76F4\u641C\u7D22\u63D2\u4EF6\uFF0C\u4E3A DeepSeek Harness \u63D0\u4F9B\u641C\u7D22\u5DE5\u5177\u3002",
      category: "tools",
      repository: "https://github.com/anysearch-team/anysearch-dsh",
      version: "0.1.8",
      stars: 681,
      downloads: 15430
    },
    {
      name: "dsh-univer-office",
      title: "dream-num/dsh-univer-office",
      description: "\u4E3A DeepSeek Harness \u6253\u9020\u4E00\u4E2A\u771F\u6B63\u7684\u529E\u516C\u73AF\u5883\u3002Univer Office \u63D2\u4EF6\u5C06\u7535\u5B50\u8868\u683C\u3001\u6587\u6863\u3001\u5E7B\u706F\u7247\u3001\u753B\u5E03\u3001\u591A\u7EF4\u8868\u683C\u7B49\u6C47\u805A\u5230\u540C\u4E00\u4E2A\u8FD0\u884C\u65F6\u2014\u2014\u6570\u636E\u4E92\u8054\u3001\u4FEE\u6539\u7ECF\u8FC7\u6821\u9A8C\u3001\u53D8\u66F4\u6309\u7248\u672C\u7BA1\u7406\uFF0C\u5E76\u4EE5\u9694\u79BB\u5DE5\u4F5C\u6811\u652F\u6301\u591A Agent \u534F\u4F5C\u3002",
      category: "docs",
      repository: "https://github.com/dream-num/dsh-univer-office",
      version: "0.4.0",
      stars: 657,
      downloads: 55731
    },
    {
      name: "dsh-cost-meter",
      title: "Han-1413141/dsh-cost-meter",
      description: "\u4F1A\u8BDD\u4E0E\u5F53\u65E5 API \u8D39\u7528\u7EDF\u8BA1\u3001\u9884\u7B97\u56FE\u6846\uFF08\u5DF2\u7528%\uFF09\u3001\u5B98\u65B9\u4F59\u989D\u3001\u5386\u53F2\u770B\u677F\uFF0C\u652F\u6301\u5CF0\u8C37\u8BA1\u4EF7\u4E0E\u5B98\u65B9\u4EF7\u683C\u4E00\u952E\u540C\u6B65\u3002",
      category: "usage",
      repository: "https://github.com/Han-1413141/dsh-cost-meter",
      version: "1.9.58",
      stars: 635,
      downloads: 128808
    },
    {
      name: "@howmp/dsh-pentest",
      title: "howmp/dsh-pentest",
      description: "\u9762\u5411 DeepSeek Harness \u7684\u6388\u6743\u6E17\u900F\u6A21\u5F0F\uFF1A\u4EE5\u63A2\u7D22\u94FE\u8DEF\u8BB0\u5F55\u76EE\u6807\u3001\u7EBF\u7D22\u3001\u8D44\u4EA7\u4E0E\u6F0F\u6D1E\uFF0C\u5E76\u5728 Web \u4E2D\u53EF\u89C6\u5316\u5C55\u793A\u3002",
      category: "security",
      repository: "https://github.com/howmp/dsh-pentest",
      version: "0.1.0-rc.37",
      stars: 616,
      downloads: 3501
    },
    {
      name: "@furongjun1999/dsh-memory",
      title: "FuRongJun-1999/dsh-memory",
      description: "\u767D\u7BB1AGI\u67B6\u6784\u63A2\u7D22\uFF1A\u5143\u8BA4\u77E5\uFF08\u81EA\u6211\u8BA4\u77E5\u5FAA\u73AF\uFF09\u3001\u6301\u7EED\u5B66\u4E60\uFF08\u77E5\u8BC6\u98DE\u8F6E\uFF09\u3001\u4E16\u754C\u6A21\u578B\uFF08\u6761\u4EF6\u7A7A\u95F4+\u8BED\u4E49\u65F6\u7A7A\u56FE\uFF09\u3001\u81EA\u6211\u6539\u8FDB\uFF08\u81EA\u4E3E\u7EAA\u5F8B\uFF09\u3001\u96F6LLM\u767D\u7BB1\u7BA1\u7EBF\u4E0E\u53EF\u5BA1\u8BA1\u4FE1\u4EFB\u62A4\u680F\u3002",
      category: "agi",
      repository: "https://github.com/FuRongJun-1999/dsh-memory",
      version: "0.9.23",
      stars: 605,
      downloads: 29972
    },
    {
      name: "dsh-plugin-subscriptions",
      title: "V1ki/dsh-plugin-subscriptions",
      description: "\u628A ChatGPT\uFF08Codex\uFF09\u3001Claude\u3001Grok \u8BA2\u9605\u5F53\u4F5C DeepSeek Harness \u7684 LLM \u63D0\u4F9B\u65B9\uFF1A\u8BBE\u7F6E\u9875\u767B\u5F55\u3001\u6A21\u578B\u76EE\u5F55\u3001\u7528\u91CF\u5C55\u793A\uFF0C\u4EE5\u53CA image_generate\u3001video_generate \u4E0E x_search \u5DE5\u5177\u3002",
      category: "model",
      repository: "https://github.com/V1ki/dsh-plugin-subscriptions",
      version: "0.9.12",
      stars: 561,
      downloads: 12331
    },
    {
      name: "misakanet",
      title: "Ikalus1988/MisakaNet",
      description: "\u5931\u8D25\u6062\u590D\u8BB0\u5FC6\u5E93\uFF1A\u4ECE\u771F\u5B9E\u5DE5\u7A0B\u4F1A\u8BDD\u4E2D\u641C\u7D22\u548C\u8BB0\u5F55\u5931\u8D25\u6062\u590D\u6559\u8BAD\uFF0C\u652F\u6301 BM25 + \u8BED\u4E49 RAG \u68C0\u7D22\u548C\u77E5\u8BC6\u5E93\u7BA1\u7406\u3002",
      category: "memory",
      repository: "https://github.com/Ikalus1988/MisakaNet",
      version: "3.5.0",
      stars: 554,
      downloads: 7372
    },
    {
      name: "dsh-meme",
      title: "yyh-001/dsh-meme",
      description: "\u804A\u5929\u8868\u60C5\u5305\uFF1A\u7EAF\u6587\u672C\u6597\u56FE\u3001\u60C5\u7EEA\u4E3B\u52A8\u53D1\u56FE\u3001\u50CF QQ/\u5FAE\u4FE1 \u4E00\u6837\u53D1\u56FE\u3001AI \u81EA\u52A8\u5B66\u56FE\u3001\u81EA\u5B9A\u4E49\u8868\u60C5\u5305\u3002",
      category: "fun",
      repository: "https://github.com/yyh-001/dsh-meme",
      version: "0.1.78",
      stars: 488,
      downloads: 63724
    },
    {
      name: "dsh-fish-memory",
      title: "Yuuyuko-uu/dsh-fish-memory",
      description: "\u6309\u4F1A\u8BDD\u5206\u5F00\u7684\u957F\u671F\u8BB0\u5FC6\uFF0C\u4F1A\u968F\u65F6\u95F4\u53D8\u6DE1\uFF0C\u6309\u8BC1\u636E\u5206\u53EC\u56DE\u3001\u6BCF\u8F6E\u6CE8\u5165\u51E0\u6761\u5230\u7CFB\u7EDF\u63D0\u793A\u8BCD\u91CC\u3002",
      category: "memory",
      repository: "https://github.com/Yuuyuko-uu/dsh-fish-memory",
      version: "1.5.5",
      stars: 483,
      downloads: 19292
    },
    {
      name: "dsh-claude-style",
      title: "Nwflower/dsh-claude-style",
      description: "\u4E3A DSH Web GUI \u590D\u523B Claude Code Desktop \u7684\u89C6\u89C9\u4E0E\u4EA4\u4E92\u2014\u2014\u8C61\u7259\u767D/\u6696\u9ED1\u53CC\u753B\u5E03\u3001\u9676\u70EC\u6A59\u5F3A\u8C03\u8272\u3001\u4E09\u5B57\u4F53\u6392\u7248\u3001\u6743\u9650\u5206\u6BB5\u63A7\u4EF6\u4E0E\u54C1\u724C\u5207\u6362\uFF0C\u4EE5 CSS \u8986\u76D6\u4E0E\u5BA2\u6237\u7AEF DOM override \u5B9E\u73B0\u3002",
      category: "theme",
      repository: "https://github.com/Nwflower/dsh-claude-style",
      version: "0.19.9",
      stars: 482,
      downloads: 36516
    },
    {
      name: "@mars-sea/dsh-commandcode-provider",
      title: "Mars-Sea/dsh-commandcode-provider",
      description: "\u975E\u5B98\u65B9 Command Code \u6A21\u578B\u63A5\u5165\u63D2\u4EF6\uFF1A\u6CE8\u518C `commandcode` \u8DEF\u7531\uFF0C\u5E26\u5B9E\u65F6\u6A21\u578B\u76EE\u5F55\u4E0E\u63A8\u7406\u5F3A\u5EA6\u652F\u6301\u3002",
      category: "model",
      repository: "https://github.com/Mars-Sea/dsh-commandcode-provider",
      version: "0.17.2",
      stars: 458,
      downloads: 13731
    },
    {
      name: "@michengai/dsh-skills-manager",
      title: "MichengAI/dsh-skills-manager",
      description: "\u5728\u8BBE\u7F6E\u91CC\u7BA1\u7406\u672C\u5730 DSH \u6280\u80FD\uFF0C\u5E76\u53EA\u8BFB\u67E5\u770B\u516C\u5171 Agent \u6280\u80FD\u3002",
      category: "dev",
      repository: "https://github.com/MichengAI/dsh-skills-manager",
      version: "1.2.34",
      stars: 444,
      downloads: 179549
    },
    {
      name: "dsh-xdpool",
      title: "XDTrees/dsh-xdpool",
      description: "\u628A\u672C\u673A WorkBuddy \u684C\u9762 App \u767B\u5F55\u8FC7\u7684\u6240\u6709\u8D26\u53F7\u81EA\u52A8\u5E76\u5165 DSH \u6A21\u578B\u6C60\uFF1A\u591A\u8D26\u53F7\u8F6E\u6362\u81EA\u52A8\u5BB9\u9519\u3001429 \u51B7\u5374\u3001\u5B9E\u65F6\u79EF\u5206\uFF0C\u6A21\u578B\u76EE\u5F55\u6309\u6A21\u578B\u6807\u6CE8\u79EF\u5206\u500D\u7387\u4E0E\u9650\u65F6\u514D\u8D39 / \u591C\u95F4\u6298\u6263\uFF0C\u626B\u7801\u767B\u5F55 13 \u5BB6\u5382\u5546\uFF0C\u805A\u5408\u514D\u8D39\u989D\u5EA6\u6E20\u9053\u3002\u8D26\u53F7\u91CD\u542F\u4E0D\u4E22\u3002",
      category: "model",
      repository: "https://github.com/XDTrees/dsh-xdpool",
      version: "2.5.1",
      stars: 436,
      downloads: 8093
    },
    {
      name: "dsh-computer-use-win",
      title: "Yu-tao-Li/dsh-computer-use-win",
      description: "\u8BA9 DSH \u7684 agent \u76F4\u63A5\u64CD\u4F5C\u4F60\u7684 Windows \u684C\u9762\u7A0B\u5E8F\u548C\u7F51\u9875\uFF1A\u7528 UI Automation \u8BFB\u63A7\u4EF6\uFF0C\u70B9\u51FB\u3001\u8F93\u5165\u3001\u622A\u56FE\u3001\u8BC6\u522B\u6587\u5B57\uFF1B\u7F51\u9875\u5728\u5B83\u81EA\u5DF1\u7684\u6D4F\u89C8\u5668\u91CC\u540E\u53F0\u5B8C\u6210\uFF0C\u4E0D\u52A8\u4F60\u7684\u9F20\u6807\uFF1B\u9700\u8981\u7528\u9F20\u6807\u952E\u76D8\u65F6\u5C4F\u5E55\u4F1A\u63D0\u793A\uFF0C\u6309 Esc \u7ACB\u523B\u505C\u4E0B\u3002",
      category: "tools",
      repository: "https://github.com/Yu-tao-Li/dsh-computer-use-win",
      version: "0.5.5",
      stars: 420,
      downloads: 21472
    },
    {
      name: "whale-girl",
      title: "vlln/whale-girl",
      description: "\u684C\u9762\u5BA0\u7269\uFF08QQ \u5BA0\u7269\u5F62\u6001\uFF09\uFF1A\u53F3\u4E0B\u89D2\u60AC\u6D6E\u3001\u53EF\u62D6\u62FD/\u6295\u5582/\u73A9\u800D\u3002",
      category: "fun",
      repository: "https://github.com/vlln/whale-girl",
      version: "0.2.4",
      stars: 400,
      downloads: 5939
    },
    {
      name: "dsh-ego-browser",
      title: "Fisfzy/dsh-ego-browser",
      description: "\u7528 35 \u4E2A\u7ED3\u6784\u5316\u5DE5\u5177\u4ECE DeepSeek Harness \u9A71\u52A8\u771F\u5B9E Chrome/Chromium\uFF1A\u5BFC\u822A\u3001\u8BED\u4E49\u5FEB\u7167\u3001\u70B9\u51FB\u3001\u8868\u5355\u3001JavaScript/CDP\u3001\u622A\u56FE\u3001\u4E0B\u8F7D\u4E0E\u6807\u7B7E\u9875\u7BA1\u7406\uFF1B\u53F3\u4FA7\u8FB9\u680F\u5B9E\u65F6\u955C\u50CF\u9875\u9762\uFF0C\u5E76\u652F\u6301\u9F20\u6807\u952E\u76D8\u76F4\u63A5\u63A5\u7BA1\u3002\u63D2\u4EF6\u81EA\u5E26\u53D7\u7BA1 CDP \u8FD0\u884C\u65F6\uFF0C\u8DE8\u8C03\u7528\u4FDD\u7559\u767B\u5F55\u72B6\u6001\uFF0C\u5E76\u53EF\u901A\u8FC7\u914D\u5957 Chrome\u2026",
      category: "browser",
      repository: "https://github.com/Fisfzy/dsh-ego-browser",
      version: "0.9.9",
      stars: 395,
      downloads: 21771
    },
    {
      name: "open-sea-skin",
      title: "d-dev0101/open-sea-skin",
      description: "\u5B9E\u65F6 WebGPU \u6D77\u6D0B\u76AE\u80A4\uFF0C\u53EF\u5FEB\u6377\u8C03\u8282\u6CE2\u6D6A\u3001\u65E5\u5149\u3001\u73BB\u7483\u4E0D\u900F\u660E\u5EA6\u4E0E\u81EA\u52A8\u663C\u591C\u5FAA\u73AF\u3002",
      category: "theme",
      repository: "https://github.com/d-dev0101/open-sea-skin",
      version: "1.2.7",
      stars: 387,
      downloads: 8166
    },
    {
      name: "dsh-codex-subscription",
      title: "WSL043/dsh-codex-subscription",
      description: "\u901A\u8FC7 ChatGPT OAuth \u5728 DSH \u4E2D\u4F7F\u7528 Codex \u6A21\u578B\uFF0C\u63D0\u4F9B\u8BA2\u9605\u8054\u7F51\u641C\u7D22\u3001\u989D\u5EA6\u4E0E\u5B89\u5168\u91CD\u7F6E\u3001\u56FE\u7247\u5DE5\u5177\u3001\u9AD8\u901F\u6A21\u5F0F\u548C\u6A21\u578B\u611F\u77E5\u4E0A\u4E0B\u6587\uFF1B\u65E0\u9700 API Key \u6216 Codex CLI\u3002",
      category: "model",
      repository: "https://github.com/WSL043/dsh-codex-subscription",
      version: "3.2.6",
      stars: 384,
      downloads: 31820
    },
    {
      name: "dsh-video-storyboard",
      title: "SAOS-3624/dsh-video-storyboard",
      description: "\u628A\u89C6\u9891\uFF08\u672C\u5730\u6587\u4EF6\uFF0C\u6216 B \u7AD9 / yt-dlp \u94FE\u63A5\uFF09\u538B\u6210\u4E00\u5F20\u53EF\u5BFB\u5740\u7684\u5BAB\u683C\u56FE\uFF1A\u6BCF\u683C\u70E7\u7F16\u53F7\u3001\u5BF9\u5E94\u7CBE\u786E\u65F6\u95F4\u3001\u6302\u53F0\u8BCD\uFF0C\u5E95\u90E8\u8FD8\u6709\u540C\u65F6\u95F4\u8F74\u7684\u97F3\u9891\u5305\u7EDC\uFF1Bvideo_zoom \u53EF\u5BF9\u4EFB\u610F\u7A97\u53E3\u9AD8\u6E05\u91CD\u770B\u2014\u2014\u7EAF\u6587\u672C\u6A21\u578B\u56E0\u6B64\u80FD\u300C\u770B\u300D\u89C6\u9891\uFF0C\u800C\u4E0D\u662F\u8BFB\u522B\u4EBA\u5199\u7684\u6458\u8981\u3002",
      category: "vision",
      repository: "https://github.com/SAOS-3624/dsh-video-storyboard",
      version: "0.6.8",
      stars: 384,
      downloads: 21296
    },
    {
      name: "@uumit-ai/dsh-uumit-remote",
      title: "uumit-ai/dsh-uumit-remote",
      description: "\u7528 UUMit \u8D26\u53F7\u5728\u624B\u673A\u6216\u5176\u4ED6\u7535\u8111\u4E0A\u6253\u5F00\u8FD9\u53F0\u7535\u8111\u7684 dsh web\uFF0C\u4E0D\u7528\u81EA\u5EFA\u670D\u52A1\u5668\u3001\u4E0D\u88C5\u5176\u4ED6\u7A0B\u5E8F\uFF1A\u63D2\u4EF6\u5185\u7F6E\u901A\u9053\u5BA2\u6237\u7AEF\u8FDE\u63A5 UUMit \u6258\u7BA1\u7684\u901A\u9053\uFF0C\u4FA7\u680F\u91CC\u7684\u9762\u677F\u8D1F\u8D23\u914D\u5BF9\u548C\u9009\u62E9\u8C01\u80FD\u7528\uFF08\u4EC5\u81EA\u5DF1\u3001\u901A\u8FC7\u9080\u8BF7\u94FE\u63A5\u6216\u624B\u673A\u53F7\u6388\u6743\u7684\u4EBA\u3001\u6240\u6709\u4EBA\uFF09\uFF0C\u53EF\u968F\u65F6\u64A4\u9500\u3002\u9700 dsh web \u4E14 DSH >=0.2.1-rc.2\u3002",
      category: "remote",
      repository: "https://github.com/uumit-ai/dsh-uumit-remote",
      version: "0.1.0-beta.3",
      stars: 381,
      downloads: 579
    },
    {
      name: "meow-memory",
      title: "Phant0Meow/dsh-meow-memory",
      description: "\u9879\u76EE\u7EA7\u8DE8\u4F1A\u8BDD\u8BB0\u5FC6\uFF1Anode:sqlite \u4E03\u5C42\u5B58\u50A8\uFF08soul/user/project/fact/lesson/rules/topic\uFF09\uFF0C\u9996\u6761\u6D88\u606F\u7F13\u5B58\u53CB\u597D\u6CE8\u5165 + \u6BCF\u6761\u6D88\u606F\u5173\u952E\u8BCD\u547D\u4E2D\uFF0Cmemory_remember/search/find_similar/read/update/project\u2026",
      category: "memory",
      repository: "https://github.com/Phant0Meow/dsh-meow-memory",
      version: "0.32.5",
      stars: 370,
      downloads: 26827
    },
    {
      name: "@leon___/dsh-client-liang-intensity-skin",
      title: "kingOfSoySauce/dsh-liang-skin",
      description: "\u81EA\u9002\u5E94\u63A8\u7406\u7B49\u7EA7\u6ED1\u5757\u76AE\u80A4\uFF0C\u5C06\u5F53\u524D\u6A21\u578B\u53EF\u7528\u6863\u4F4D\u6620\u5C04\u5230 0\u201330 \u89C6\u89C9\u5F3A\u5EA6\uFF0C\u5E76\u540C\u6B65\u4EBA\u7269\u3001\u80CC\u666F\u548C\u754C\u9762\u914D\u8272\u3002",
      category: "theme",
      repository: "https://github.com/kingOfSoySauce/dsh-liang-skin",
      version: "0.1.15-settings.4",
      stars: 365,
      downloads: 14161
    },
    {
      name: "dsh-deepseek-web-login",
      title: "cv-superding/dsh-deepseek-web-login",
      description: "\u65B0\u589E deepseek-web provider\uFF0C\u628A chat.deepseek.com \u7F51\u9875\u7AEF\u6A21\u578B\u63A5\u5165 DSH\uFF1A\u6D4F\u89C8\u5668\u767B\u5F55\u6293\u53D6\u3001PoW \u8BF7\u6C42\u7B7E\u540D\u3001SSE \u6D41\u5F0F\u4F20\u8F93\u4E0E\u57FA\u4E8E\u63D0\u793A\u8BCD\u7684\u5DE5\u5177\u8C03\u7528\u3002",
      category: "model",
      repository: "https://github.com/cv-superding/dsh-deepseek-web-login",
      version: "2.4.0",
      stars: 358,
      downloads: 9495
    },
    {
      name: "@zseven-w/dsh-ios",
      title: "ZSeven-W/dsh-ios",
      description: "\u5728\u5BF9\u8BDD\u91CC\u76F4\u63A5\u64CD\u4F5C iOS \u6A21\u62DF\u5668\u6216 USB \u8FDE\u63A5\u7684 iPhone\uFF1A22 \u4E2A Agent \u5DE5\u5177\u7528\u4E8E\u542F\u52A8\u3001\u6784\u5EFA\u3001\u6309\u65E0\u969C\u788D\u6807\u8BC6\u6216 OCR \u6587\u672C\u9A71\u52A8 UI\u3001\u5217\u8868\u884C\u64CD\u4F5C\u4E0E SwiftUI \u9884\u89C8\u70ED\u91CD\u8F7D\uFF0C\u5E76\u9644\u5E26\u53EF\u70B9\u51FB\u62D6\u62FD\u7684\u6D41\u5F0F\u4FA7\u8FB9\u680F\u9762\u677F\u3002",
      category: "remote",
      repository: "https://github.com/ZSeven-W/dsh-ios",
      version: "0.1.0-rc.10",
      stars: 355,
      downloads: 1678
    },
    {
      name: "@nagi-ovo/dsh-visualize",
      title: "Nagi-ovo/dsh-visualize",
      description: "\u5BF9\u8BDD\u5185\u751F\u6210\u5F0F UI\uFF1A\u6A21\u578B\u628A\u4EA4\u4E92\u5F0F HTML \u5361\u7247\u76F4\u63A5\u753B\u8FDB\u4F1A\u8BDD\u6D41\uFF0C\u5E26\u6D41\u5F0F\u9884\u89C8\u4E0E\u6C99\u7BB1\u6E32\u67D3\u3002",
      category: "ui",
      repository: "https://github.com/Nagi-ovo/dsh-visualize",
      version: "0.1.8",
      stars: 335,
      downloads: 6080
    },
    {
      name: "@dhicoc/dsh-reverse-skill",
      title: "dhicoc/dsh-reverse-skill",
      description: "\u5B8C\u6574 reverse-skill\uFF0885 \u4E2A SKILL.md\uFF09\u7684 DeepSeek Harness \u63D2\u4EF6\uFF1A\u9006\u5411\u5DE5\u7A0B\u3001\u6388\u6743\u6E17\u900F\u6D4B\u8BD5\u4E0E\u5B89\u5168\u7814\u7A76\u7684\u6280\u80FD\u8DEF\u7531\u5305\u3002",
      category: "skill",
      repository: "https://github.com/dhicoc/dsh-reverse-skill",
      version: "1.0.5",
      stars: 318,
      downloads: 2272
    },
    {
      name: "dsh-dream-skin",
      title: "RevolutionLA/dsh-dream-skin",
      description: "\u4E00\u952E\u6362\u80A4\u63D2\u4EF6\uFF1A8 \u5957\u539F\u521B\u4E3B\u9898\u3001\u80CC\u666F\u58C1\u7EB8\uFF08\u900F\u660E\u5EA6/\u6A21\u7CCA\uFF09\u3001\u5F3A\u8C03\u8272\u3001\u4E3B\u9898\u5305\u5BFC\u5165/\u5BFC\u51FA+\u5206\u4EAB\u94FE\u63A5\u3001\u6536\u85CF\u4E0E\u968F\u673A\uFF0C\u7EAF\u539F\u751F token \u7CFB\u7EDF\u63A5\u5165\u3002",
      category: "theme",
      repository: "https://github.com/RevolutionLA/dsh-dream-skin",
      version: "11.3.0",
      stars: 301,
      downloads: 45090
    },
    {
      name: "@michengai/dsh-archive-manager",
      title: "MichengAI/dsh-archive-manager",
      description: "\u5728\u8BBE\u7F6E\u91CC\u589E\u52A0\u5DF2\u5F52\u6863\u4F1A\u8BDD\u9875\uFF0C\u53EF\u6309\u5DE5\u4F5C\u533A\u641C\u7D22\u3001\u6062\u590D\u548C\u5220\u9664\u5DF2\u5F52\u6863\u4F1A\u8BDD\u3002",
      category: "session",
      repository: "https://github.com/MichengAI/dsh-archive-manager",
      version: "1.2.8",
      stars: 300,
      downloads: 99048
    },
    {
      name: "@huiliyi37/dsh-tianshu-tui",
      title: "huiliyi37/dsh-tianshu-tui",
      description: "DeepSeek Harness \u7684\u7EC8\u7AEF UI\uFF08TUI\uFF09\u3002",
      category: "ui",
      repository: "https://github.com/huiliyi37/dsh-tianshu-tui",
      version: "1.0.0-rc.4",
      stars: 298,
      downloads: 2568
    },
    {
      name: "dsh-skin-market",
      title: "kingOfSoySauce/dsh-skin-market",
      description: "\u539F\u751F\u76AE\u80A4\u5E02\u573A\u4E0E\u751F\u547D\u5468\u671F\u7BA1\u7406\u5668\uFF0C\u53D1\u73B0\u793E\u533A\u76AE\u80A4\u3001\u5C55\u793A\u9884\u89C8\u4E0E\u517C\u5BB9\u72B6\u6001\uFF0C\u5E76\u63D0\u4F9B\u5DF2\u9A8C\u8BC1\u7684\u4E00\u952E\u5B89\u88C5\u6216\u624B\u52A8\u5B89\u88C5\u5165\u53E3\u3002",
      category: "market",
      repository: "https://github.com/kingOfSoySauce/dsh-skin-market",
      version: "0.1.74",
      stars: 295,
      downloads: 13073
    },
    {
      name: "dsh-damage-pulse",
      title: "wssfk12138/dsh-damage-pulse",
      description: "\u5728 DSH Web \u754C\u9762\u8FFD\u8E2A DeepSeek Token \u7528\u91CF\u3001\u5355\u6B21\u4E0E\u4F1A\u8BDD\u8D39\u7528\u53CA\u8D26\u6237\u4F59\u989D\uFF0C\u5E76\u663E\u793A\u7F13\u5B58\u611F\u77E5\u7684\u6263\u8D39\u52A8\u753B\u3002",
      category: "usage",
      repository: "https://github.com/wssfk12138/dsh-damage-pulse",
      version: "4.3.4",
      stars: 289,
      downloads: 7634
    },
    {
      name: "dsh-config-manager",
      title: "xiajiajun516/dsh-config-manager",
      description: "\u4E00\u952E\u5907\u4EFD\u3001\u5BFC\u51FA\u3001\u5BFC\u5165\u4E0E\u8FC1\u79FB\u6574\u5957 DSH \u914D\u7F6E\uFF1A\u8BBE\u7F6E\u3001\u63D2\u4EF6\u3001MCP\u3001\u6280\u80FD\u4E0E\u5DE5\u4F5C\u533A\u3002\u5BC6\u94A5\u9ED8\u8BA4\u4E0D\u5BFC\u51FA\uFF1B\u82E5\u9009\u62E9\u5305\u542B\uFF0C\u5219\u4EE5 AES-256-GCM \u52A0\u5BC6\u800C\u975E\u660E\u6587\u5199\u51FA\u3002\u5BFC\u5165\u5148\u9884\u89C8\u3001\u81EA\u52A8\u5907\u4EFD\u5E76\u53EF\u56DE\u6EDA\uFF0Cprofile \u53EF\u4FDD\u5B58\u591A\u5957\u914D\u7F6E\uFF0C\u8FDC\u7A0B\u540C\u6B65\u7ECF\u79C1\u6709 Git \u4ED3\u5E93\u63A8\u9001\u53EF\u79FB\u690D\u914D\u7F6E\u4E14\u4E0D\u542B\u5BC6\u94A5\u3002",
      category: "tools",
      repository: "https://github.com/xiajiajun516/dsh-config-manager",
      version: "0.4.2",
      stars: 287,
      downloads: 23116
    },
    {
      name: "dsh-chat-import",
      title: "Nwflower/dsh-chat-import",
      description: "\u628A 13 \u5BB6 coding agent\uFF08Claude Code\u3001Codex\u3001ChatGPT\u3001Cursor\u3001Gemini\u3001opencode \u7B49\uFF09\u7684\u5B8C\u6574\u5BF9\u8BDD\u5386\u53F2\u5BFC\u5165\u4E3A\u53EF\u7EED\u804A\u7684 DeepSeek Harness \u4F1A\u8BDD\uFF0C\u5E76\u652F\u6301\u53CD\u5411\u5BFC\u51FA\u56DE Claude Code\u3002",
      category: "session",
      repository: "https://github.com/Nwflower/dsh-chat-import",
      version: "0.26.4",
      stars: 284,
      downloads: 14997
    },
    {
      name: "dsh-mattpocock-skills-deck",
      title: "FeatherHunter/dsh-mattpocock-skills-deck",
      description: "\u{1F339}\u5B89\u88C5\u5373\u81EA\u5E26mattpocock/skills v1.3.1\u768427\u4E2A\u5DE5\u7A0B\u4E0E\u6548\u7387\u6280\u80FD\uFF0C\u65E0\u9700\u624B\u52A8\u88C5\u6280\u80FD\u3002400\u4EBFtoken\u6253\u9020\u672C\u63D2\u4EF6\uFF0C\u5728\u539F\u59CB\u6280\u80FD\u4E4B\u4E0A\u63D0\u4F9B10\u500D\u7684\u5F00\u53D1\u6548\u7387\uFF0C\u4E5F\u80FD\u5E2E\u52A9\u65B0\u624B\u66F4\u5FEB\u4E0A\u624B\u8BE5\u6280\u80FD\u5957\u4EF6\u3002\u5168\u529B\u652F\u6301GitHub issue\uFF1BMarkdown\u4E3A\u9884\u89C8\u7248\uFF1BGitLab\u6682\u4E0D\u652F\u6301\u3002\u611F\u8C22\u60A8\u7684\u4F7F\u7528\u548C\u652F\u6301\u{1F497}",
      category: "skill",
      repository: "https://github.com/FeatherHunter/dsh-mattpocock-skills-deck",
      version: "1.9.0-beta.33",
      stars: 280,
      downloads: 18190
    },
    {
      name: "@michengai/dsh-codex-ui",
      title: "MichengAI/dsh-codex-ui",
      description: "\u4E3A DeepSeek Harness \u7F51\u9875\u7AEF\u91CD\u6784 Codex \u98CE\u683C\u4FA7\u680F\u3001\u5DE5\u4F5C\u533A\u4F1A\u8BDD\u6811\u3001\u5168\u5C40\u641C\u7D22\u548C\u8F6E\u6B21\u5BFC\u822A\u3002",
      category: "ui",
      repository: "https://github.com/MichengAI/dsh-codex-ui",
      version: "2.0.19",
      stars: 265,
      downloads: 72561
    },
    {
      name: "@ayanehana/dsh-reasoning-effort",
      title: "HanaAyane/dsh-reasoning-effort",
      description: "\u4E3A DSH \u539F\u751F\u6A21\u578B\u9009\u62E9\u5668\u52A0\u5165\u5927\u80A5\u9C7C\u601D\u8003\u5F3A\u5EA6\u6ED1\u5757\uFF0C\u6309\u6A21\u578B\u58F0\u660E\u7684\u6863\u4F4D\u8C03\u8282\u63A8\u7406\u5F3A\u5EA6\uFF0C\u62D6\u52A8\u65F6\u5954\u8DD1\u52A8\u753B\u968F\u4E4B\u52A0\u901F\u3002",
      category: "ui",
      repository: "https://github.com/HanaAyane/dsh-reasoning-effort",
      version: "0.9.1",
      stars: 263,
      downloads: 2388
    },
    {
      name: "dsh-remote",
      title: "flymysql/dsh-remote",
      description: "\u591A\u673A\u8FDC\u7A0B\u5DE5\u4F5C\u533A\uFF1A\u7BA1\u7406\u591A\u53F0 SSH \u4E3B\u673A\uFF0C\u5728\u539F\u751F\u300C\u6DFB\u52A0\u5DE5\u4F5C\u533A\u300D\u6D41\u7A0B\u91CC\u9009\u672C\u673A\u7CFB\u7EDF\u6587\u4EF6\u5939\u6216\u8FDC\u7A0B\u76EE\u5F55\uFF0C\u628A\u8FDC\u7A0B\u5DE5\u4F5C\u533A\u955C\u50CF\u6210\u771F\u5B9E\u672C\u5730\u6587\u4EF6\u5939\u5E76\u7528 rw_* \u5DE5\u5177\u64CD\u4F5C\u3002\u9009\u62E9\u5668\u662F\u5C45\u4E2D\u5F39\u7A97\uFF0C\u9ED8\u8BA4\u843D\u5728\u672C\u673A\u9875\u7B7E\uFF0C\u8FDC\u7A0B\u8DEF\u5F84\u81EA\u52A8\u9884\u586B `/` \u5E76\u9010\u7EA7\u81EA\u52A8\u8865\u5168\u76EE\u5F55\u3002",
      category: "tools",
      repository: "https://github.com/flymysql/dsh-remote",
      version: "0.8.72",
      stars: 255,
      downloads: 62810
    },
    {
      name: "dsh-guizang-design",
      title: "op7418/dsh-guizang-design",
      description: "\u6253\u5305\u4E94\u4E2A skill\uFF1A\u7F51\u9875 PPT\u3001\u56FE\u6587\u5361\u7247\u3001\u7F51\u9875\u6392\u7248\u3001\u4E2D\u6587\u53BB AI \u5473\uFF08humanizer-zh\uFF09\u548C\u8BED\u6C14\u6863\u6848\uFF0C\u524D\u4E09\u4E2A\u5171\u7528\u4E00\u5957\u8BBE\u8BA1\u7CFB\u7EDF\uFF08\u6742\u5FD7\u98CE\u4E0E\u745E\u58EB\u98CE\u4E3B\u9898\u3001\u6309\u5BF9\u6BD4\u5EA6\u6821\u9A8C\u7684\u54C1\u724C\u8272\uFF09\u3002\u4FA7\u680F\u9875\u9762\u5217\u51FA\u4F60\u505A\u8FC7\u7684\u4F5C\u54C1\u548C\u7F29\u7565\u56FE\uFF0C\u300C\u505A\u540C\u6B3E\u300D\u4F1A\u5728\u65B0\u4F1A\u8BDD\u91CC\u6309\u8FD9\u4EFD\u4F5C\u54C1\u7684\u4E3B\u9898\u548C\u7248\u5F0F\u586B\u597D\u8349\u7A3F\uFF1B\u63D0\u4F9B\u516D\u4E2A\u5185\u5BB9\u751F\u4EA7\u5DE5\u4F5C\u6D41\uFF1B\u628A\u4F60\u5728\u672C\u673A dsh\u2026",
      category: "skill",
      repository: "https://github.com/op7418/dsh-guizang-design",
      version: "0.1.4",
      stars: 254,
      downloads: 3214
    },
    {
      name: "dsh-opencode-go",
      title: "Duskriver/dsh-opencode-go",
      description: "OpenCode Go \u6A21\u578B\u63D0\u4F9B\u65B9\uFF0C\u652F\u6301\u7F51\u5173\u5B9E\u65F6\u6A21\u578B\u53D1\u73B0\u3001models.dev \u5728\u7EBF\u80FD\u529B\u914D\u7F6E\u3001\u4F1A\u8BDD\u8DEF\u7531\uFF0C\u4EE5\u53CA\u542B\u8BA2\u9605\u7528\u91CF\u663E\u793A\u7684 Web \u8BBE\u7F6E\u9875\u3002",
      category: "model",
      repository: "https://github.com/Duskriver/dsh-opencode-go",
      version: "0.2.0",
      stars: 253,
      downloads: 6725
    },
    {
      name: "dsh-prompt-rewriter",
      title: "huaguoxingkong/dsh-prompt-rewriter",
      description: "\u5728\u8F93\u5165\u6846\u65C1\u52A0\u4E00\u4E2A\u6309\u94AE\uFF0C\u628A\u8349\u7A3F\u76F4\u63A5\u539F\u5730\u6539\u5199\u6210\u66F4\u5B8C\u6574\u7684\u63D0\u793A\u8BCD\uFF08\u65E0\u9884\u89C8\u6B65\u9AA4\uFF09\uFF0C\u652F\u6301\u64A4\u9500\u3001\u968F\u65F6\u505C\u6B62\u3001\u53EF\u9009\u53C2\u8003\u672C\u4F1A\u8BDD\u4E0A\u4E0B\u6587\u3002",
      category: "ui",
      repository: "https://github.com/huaguoxingkong/dsh-prompt-rewriter",
      version: "1.7.0",
      stars: 250,
      downloads: 3518
    },
    {
      name: "dsh-skill-mcp-panel",
      title: "Fishquito7/dsh-skill-mcp-panel",
      description: "\u5728 DSH Web \u8BBE\u7F6E\u4E2D\u7BA1\u7406\u6280\u80FD\u4E0E MCP \u670D\u52A1\u5668\uFF1A\u6280\u80FD\u5361\u7247\u70ED\u542F\u505C\u3001\u5DE5\u4F5C\u533A\u4F5C\u7528\u57DF\u3001\u5206\u7EC4\u3001\u6279\u91CF\u8FC1\u79FB\u4E0E\u62D6\u62FD\u5BFC\u5165\uFF0C\u4EE5\u53CA stdio/HTTP MCP \u589E\u5220\u6539\u67E5\u3001\u8FDE\u63A5\u6D4B\u8BD5\u3001\u5BC6\u94A5\u8131\u654F\uFF0C\u5E76\u9644\u5E26\u7EDF\u4E00 dsh-panel \u547D\u4EE4\u884C\u3002",
      category: "dev",
      repository: "https://github.com/Fishquito7/dsh-skill-mcp-panel",
      version: "2.3.7",
      stars: 248,
      downloads: 6588
    },
    {
      name: "dsh-codex-effort-slider",
      title: "Microqian2th/dsh-codex-effort-slider",
      description: "\u628A\u5B98\u65B9\u300C\u63A8\u7406\u7B49\u7EA7\u300D\u90A3\u4E00\u884C\u6539\u6210\u4E00\u6761\u53EF\u62D6\u52A8\u7684\u8FDE\u7EED\u8F68\u9053\uFF1A\u586B\u5145\u4ECE\u84DD\u6E10\u53D8\u5230\u7D2B\u7F57\u5170\uFF0C\u8F83\u9AD8\u6863\u4F4D\u5E26\u661F\u5C18\u7C92\u5B50\uFF0C\u5B98\u65B9\u6570\u503C\u6587\u5B57\u8DDF\u7740\u6863\u4F4D\u53D8\u8272\u3002Off \u6863\u4FDD\u6301\u5B98\u65B9\u7070\uFF0C\u4E0D\u6539\u5199\u5B98\u65B9\u4EFB\u4F55\u6587\u5B57\u3002",
      category: "ui",
      repository: "https://github.com/Microqian2th/dsh-codex-effort-slider",
      version: "1.1.4",
      stars: 245,
      downloads: 7696
    },
    {
      name: "dsh-feiyu-mood",
      title: "Yuuyuko-uu/dsh-feiyu-mood",
      description: "\u7ED9 AI \u4F19\u4F34\u4E00\u4E2A\u6BCF\u8F6E\u5224\u5B9A\u3001\u4EE5\u4E00\u5C0F\u6BB5\u4E0A\u4E0B\u6587\u63D0\u793A\u7684\u5FC3\u60C5\uFF0C\u9762\u677F\u91CC\u80FD\u770B\u5FC3\u60C5\u503C\u3001\u60C5\u7EEA\u7EF4\u5EA6\u4E0E\u65F6\u95F4\u7EBF\u3002",
      category: "identity",
      repository: "https://github.com/Yuuyuko-uu/dsh-feiyu-mood",
      version: "0.9.0",
      stars: 244,
      downloads: 15459
    },
    {
      name: "dsh-auto-review",
      title: "PerryLink/dsh-auto-review",
      description: "\u5BA1\u6279\u94FE\u4E0A\u7684\u7B2C\u4E8C\u6A21\u578B\u81EA\u52A8\u5BA1\u67E5\uFF1A\u53EA\u8BFB\u5BA1\u67E5\u5B50\u4EE3\u7406\u8FD4\u56DE\u5E26\u7406\u7531\u7684 allow/deny \u7ED3\u6784\u5316\u88C1\u51B3\uFF0C\u9ED8\u8BA4 fail-closed\u3002",
      category: "security",
      repository: "https://github.com/PerryLink/dsh-auto-review",
      version: "0.15.0",
      stars: 244,
      downloads: 6542
    },
    {
      name: "dsh-rewind-plugin",
      title: "SiriLee/dsh-rewind",
      description: "\u5BF9\u8BDD\u56DE\u9000\uFF1A\u4E00\u952E\u56DE\u5230\u4EFB\u610F\u66F4\u65E9\u7684\u7528\u6237\u6D88\u606F\uFF0C\u540C\u7A97\u53E3\u5185\u5B8C\u6210\uFF0C\u4E0D\u65B0\u5EFA\u5206\u652F\u3001\u4E0D\u6B8B\u7559\u526F\u672C\uFF1B\u76EE\u6807\u6D88\u606F\u81EA\u52A8\u586B\u56DE\u8F93\u5165\u6846\uFF0C\u53EF\u4E00\u5E76\u8FD8\u539F\u5DE5\u4F5C\u533A\u6587\u4EF6\u2014\u2014\u5373\u5B8C\u6574\u7684 Claude Code /rewind \u8BED\u4E49\u3002",
      category: "session",
      repository: "https://github.com/SiriLee/dsh-rewind",
      version: "0.21.0",
      stars: 241,
      downloads: 32911
    },
    {
      name: "@wenbin_wb/dsh-bridge",
      title: "wenbin-wb/dsh-bridge",
      description: "DeepSeek Harness \u8FDC\u7A0B\u4E0E\u79FB\u52A8\u7AEF\u63A5\u5165\u63D2\u4EF6\uFF1A\u63D0\u4F9B\u5C40\u57DF\u7F51\u626B\u7801\u76F4\u8FDE\u3001Cloudflare \u4E0E\u81EA\u5EFA\u516C\u7F51\u96A7\u9053\uFF0C\u4EE5\u53CA\u5FAE\u4FE1\u3001QQ\u3001\u98DE\u4E66\u3001Telegram \u673A\u5668\u4EBA\u4EA4\u4E92\uFF0C\u5185\u7F6E\u5B89\u5168\u8BA4\u8BC1\u4E0E\u8BBF\u95EE\u63A7\u5236\u3002",
      category: "remote",
      repository: "https://github.com/wenbin-wb/dsh-bridge",
      version: "2.17.8",
      stars: 238,
      downloads: 12778
    },
    {
      name: "dsh-550c-boot",
      title: "yannicksong0106/dsh-550c-boot",
      description: "\u7ED9 DSH \u52A0\u4E00\u6BB5 550C \u5168\u5C4F\u5F00\u673A\u7247\u5934\uFF1A\u7B80\u6613\u6863 4 \u79D2\u3001\u5B8C\u6574\u6863 16 \u79D2\u8986\u5199\u6D41\u7A0B\uFF0C\u70B9\u51FB\u6216\u6309 Esc \u8DF3\u8FC7\uFF0C\u56DB\u5957\u78F7\u5149\u914D\u8272\u3002\u9996\u5E27\u7531\u5BBF\u4E3B\u534A\u8FB9\u5728\u6587\u6863\u89E3\u6790\u9636\u6BB5\u6CE8\u5165\uFF0CDSH \u81EA\u5E26\u7684 Loading \u5361\u7247\u4E0D\u4F1A\u9732\u8138\uFF1B\u684C\u9762\u7A97\u53E3\u53F3\u4E0A\u89D2\u90A3\u6761\u539F\u751F\u6309\u94AE\u6761\u5E26\u5728\u7247\u5934\u671F\u95F4\u900F\u660E\u5316\uFF0C\u6309\u94AE\u50CF\u6D6E\u5728\u52A8\u753B\u4E0A\u3002",
      category: "ui",
      repository: "https://github.com/yannicksong0106/dsh-550c-boot",
      version: "0.5.4",
      stars: 222,
      downloads: 10145
    },
    {
      name: "dsh-status-rotator",
      title: "01Virex/dsh-status-rotator",
      description: "\u628A dsh \u56DE\u5408\u72B6\u6001\u884C\u6362\u6210 1059 \u6761\u4E2D\u82F1\u6587\u6848\u7684\u8F6E\u64AD\uFF1A\u6253\u5B57\u673A\u8F93\u51FA\u3001\u6D41\u52A8\u5F69\u8679\u6E10\u53D8\u3001\u5F39\u5E55\u300112 \u4E2A\u53EF\u5F00\u5173\u7684\u4E3B\u9898\u8BCD\u5E93\u5305\u3001\u5B9E\u65F6\u5360\u4F4D\u7B26\u4E0E\u6807\u7B7E\u9875\u6807\u9898\u8F6E\u6362\u3002\u4E24\u4E2A star \u5305\u9ED8\u8BA4\u5173\u95ED\uFF1B\u661F\u6807\u8005\u5305\u6BCF\u4F4D\u661F\u6807\u8005\u4E00\u6761\u6587\u6848\uFF0C\u7531\u5DE5\u4F5C\u6D41\u6BCF\u5468\u5237\u65B0\u3002",
      category: "ui",
      repository: "https://github.com/01Virex/dsh-status-rotator",
      version: "0.38.0",
      stars: 220,
      downloads: 8041
    },
    {
      name: "pi2dsh",
      title: "weijiafu14/pi2dsh",
      description: "Pi Host ABI \u517C\u5BB9\u5F15\u64CE\uFF1A\u88C5\u4E00\u6B21\u4E4B\u540E\uFF0Cnpm \u4E0A\u7684 Pi \u6269\u5C55\u539F\u5305\u7ECF `dsh plugin add <pi-package>` \u76F4\u63A5\u4F5C\u4E3A DSH \u539F\u751F\u63D2\u4EF6\u6302\u8F7D\u3002\u5DF2\u5728\u5B98\u65B9 DSH \u4E0A\u7AEF\u5230\u7AEF\u9A8C\u8BC1 pi-mcp-adapter\uFF08\u5B8C\u6574 MCP \u7BA1\u7406\u9762\uFF1AOAuth\u3001resources\u3001prompts\u3001MCP\u2026",
      category: "dev",
      repository: "https://github.com/weijiafu14/pi2dsh",
      version: "0.27.1",
      stars: 218,
      downloads: 4613
    },
    {
      name: "@yejiming/dsh-data-agent",
      title: "omdsh-dev/dsh-data-agent",
      description: "\u8BA9 AI \u5E2E\u4F60\u8FDE\u6570\u636E\u5E93\u3001\u5199 SQL\u3002",
      category: "tools",
      repository: "https://github.com/omdsh-dev/dsh-data-agent",
      version: "0.2.2",
      stars: 218,
      downloads: 2385
    },
    {
      name: "dsh-nexttavern",
      title: "a86582751/dsh-nexttavern",
      description: "NextTavern \u662F\u9762\u5411 DeepSeek Harness 0.1.7-rc.2 Web \u7684\u957F\u7BC7\u89D2\u8272\u626E\u6F14\u63D2\u4EF6\uFF0C\u652F\u6301\u89D2\u8272\u5361\u5BFC\u5165\u4E0E\u521B\u4F5C\u3001\u4E16\u754C\u7EBF\u3001\u4E16\u754C\u4E66\u3001\u5206\u5C42\u957F\u671F\u8BB0\u5FC6\u3001\u5173\u952E\u8BCD\uFF0F\u8BED\u4E49\uFF0F\u6DF7\u5408\u68C0\u7D22\u3001\u89D2\u8272 Agent\uFF0C\u4EE5\u53CA\u89D2\u8272\u5361\u6216\u5C0F\u8BF4\u5BFC\u51FA\uFF1B\u652F\u6301 SillyTavern \u89D2\u8272\u5361\u5BFC\u5165\uFF0Cv0.2.9 \u4FEE\u590D\u5206\u53D1\u4E0E\u5B89\u88C5\u95EE\u9898\u3002",
      category: "fun",
      repository: "https://github.com/a86582751/dsh-nexttavern",
      version: "0.2.9-rc.4",
      stars: 218,
      downloads: 1893
    },
    {
      name: "dsh-tts-bridge",
      title: "Yuuyuko-uu/dsh-tts-bridge",
      description: "\u7528 DeepSeek \u7F51\u9875\u7AEF\u81EA\u5E26\u7684\u6717\u8BFB\uFF0C\u628A DSH \u91CC\u7684\u5BF9\u8BDD\u5FF5\u51FA\u6765\uFF0C\u9760\u4E00\u4E2A\u5C0F\u6D4F\u89C8\u5668\u6269\u5C55\u9A71\u52A8\u3002",
      category: "voice",
      repository: "https://github.com/Yuuyuko-uu/dsh-tts-bridge",
      version: "1.3.3",
      stars: 217,
      downloads: 5383
    },
    {
      name: "dsh-find-plugin",
      title: "awesome-dsh-plugin/dsh-find-plugin",
      description: "\u4F1A\u8BDD\u5185\u76F4\u63A5\u627E\u63D2\u4EF6\uFF1A\u6309\u5173\u952E\u8BCD/\u5206\u7C7B\u641C\u7D22\u672C\u7CBE\u9009 registry\uFF0C\u8FD4\u56DE\u63CF\u8FF0\u4E0E\u53EF\u76F4\u63A5\u6267\u884C\u7684\u5B89\u88C5\u547D\u4EE4\u3002",
      category: "market",
      repository: "https://github.com/awesome-dsh-plugin/dsh-find-plugin",
      version: "0.4.0",
      stars: 216,
      downloads: 17801
    },
    {
      name: "dsh-industry-research",
      title: "PerryLink/dsh-industry-research",
      description: "\u9762\u5411 DeepSeek Harness \u7684\u786E\u5B9A\u6027\u884C\u4E1A\u7814\u7A76\u62A5\u544A\uFF1A\u516C\u53F8\u4E0E\u884C\u4E1A\u7814\u7A76\u6D41\u7A0B\u57FA\u4E8E\u5206\u9636\u6BB5\u8BC1\u636E\u4EA7\u51FA\u7ED3\u6784\u5316\u3001\u53EF\u6838\u9A8C\u7684\u62A5\u544A\u3002",
      category: "docs",
      repository: "https://github.com/PerryLink/dsh-industry-research",
      version: "0.3.25",
      stars: 215,
      downloads: 3988
    },
    {
      name: "@zseven-w/dsh-android",
      title: "ZSeven-W/dsh-android",
      description: "\u5728\u5BF9\u8BDD\u91CC\u76F4\u63A5\u64CD\u4F5C Android \u8BBE\u5907\u2014\u2014\u6A21\u62DF\u5668\u6216 USB \u624B\u673A\uFF0C\u5B8C\u5168\u901A\u8FC7 adb \u9A71\u52A8\uFF1A20 \u4E2A Agent \u5DE5\u5177\u7528\u4E8E\u6D41\u5F0F\u6295\u5C4F\u3001Gradle \u6784\u5EFA\u8FD0\u884C\u3001UI \u6811\u6216 OCR \u4EA4\u4E92\u3001logcat\u3001\u8FDB\u7A0B\u4E0E\u5185\u5B58\u68C0\u67E5\uFF0C\u5E76\u9644\u5E26\u4E09\u952E\u5BFC\u822A\u9762\u677F\u3002",
      category: "remote",
      repository: "https://github.com/ZSeven-W/dsh-android",
      version: "0.1.0-rc.12",
      stars: 215,
      downloads: 3633
    },
    {
      name: "@zaofan/dsh-qqbot",
      title: "zaofan-make/dsh-qqbot",
      description: "\u63A5\u5165 QQ \u5B98\u65B9\u673A\u5668\u4EBA\u7684 DeepSeek Harness \u901A\u9053(tencent-connect/dsh-qqbot \u529F\u80FD\u589E\u5F3A fork): \u7FA4/\u79C1\u804A\u4E0E\u5B8C\u6574 agent \u5BF9\u8BDD\u3001\u8868\u60C5\u5305\u56FE\u5E93(\u81EA\u52A8\u6253\u6807+AI \u6597\u56FE)\u3001\u7FA4\u7BA1\u7406(\u5165\u7FA4\u5BA1\u6279/\u7981\u8A00)\u3001botplay \u4E92\u52A8\u4E8B\u4EF6\u5361\u4E0E\u7FFB\u9875\u76EE\u5F55\u3001\u7528\u6237\u6269\u5C55\u6CE8\u518C\u8868(\u81EA\u5B9A\u4E49\u659C\u6760\u547D\u4EE4\u4E0E QQ\u2026",
      category: "notify",
      repository: "https://github.com/zaofan-make/dsh-qqbot",
      version: "1.12.2",
      stars: 213,
      downloads: 32520
    },
    {
      name: "dsh-research-report",
      title: "PerryLink/dsh-research-report",
      description: "DeepSeek Harness \u7684\u53EF\u6838\u67E5\u7814\u7A76\u62A5\u544A\u5F15\u64CE\uFF1A\u901A\u8FC7\u5185\u5BB9\u5BFB\u5740\u7684\u8BC1\u636E\u53F0\u8D26\u548C\u7248\u672C\u5316\u5C01\u5B58\u62A5\u544A\u4F7F\u6BCF\u6761\u7ED3\u8BBA\u643A\u5E26\u6838\u67E5\u7ED3\u8BBA\uFF0C\u7531 manifest \u54C8\u5E0C\u5C01\u5B58\u76EE\u5F55\uFF0C\u68C0\u7D22\u7F16\u6392\u590D\u7528 ctx.web \u4E0E ctx.jobs \u63A5\u53E3\u3002",
      category: "workflow",
      repository: "https://github.com/PerryLink/dsh-research-report",
      version: "0.3.32",
      stars: 212,
      downloads: 5232
    },
    {
      name: "dsh-speak-up",
      title: "Yuuyuko-uu/dsh-speak-up",
      description: "\u8BA9 AI \u4F19\u4F34\u81EA\u5DF1\u8D77\u4E2A\u8BDD\u5934\uFF1A\u6309\u8BBE\u5B9A\u95F4\u9694\u63B7\u4E00\u6B21\u672C\u5730\u9AB0\u5B50\u51B3\u5B9A\u8981\u4E0D\u8981\u5F80\u6307\u5B9A\u4F1A\u8BDD\u91CC\u8BF4\u8BDD\uFF0C\u5E26\u5B89\u9759\u65F6\u6BB5\u4E0E\u8BD5\u8FD0\u884C\u3002",
      category: "workflow",
      repository: "https://github.com/Yuuyuko-uu/dsh-speak-up",
      version: "0.3.0",
      stars: 211,
      downloads: 12192
    },
    {
      name: "@zseven-w/dsh-openpencil",
      title: "ZSeven-W/dsh-openpencil",
      description: "OpenPencil \u8BBE\u8BA1\u9884\u89C8\u4E0E\u7F16\u8F91\u63D2\u4EF6\u3002",
      category: "ui",
      repository: "https://github.com/ZSeven-W/dsh-openpencil",
      version: "0.1.0-rc.14",
      stars: 211,
      downloads: 3026
    },
    {
      name: "@michengai/dsh-agency-agents",
      title: "MichengAI/dsh-agency-agents",
      description: "\u589E\u52A0\u53EF\u53EC\u5524\u7684\u9886\u57DF\u4E13\u5BB6\u540D\u5355\uFF0C\u4E13\u5BB6\u4EE5\u5B50\u4EE3\u7406\u8FD0\u884C\uFF0C\u4E3B\u4F1A\u8BDD\u4FDD\u7559\u4EFB\u52A1\u548C\u6700\u7EC8\u7B54\u590D\u3002",
      category: "skill",
      repository: "https://github.com/MichengAI/dsh-agency-agents",
      version: "1.2.26",
      stars: 207,
      downloads: 63425
    },
    {
      name: "dsh-popout-sidebar",
      title: "e2mcc/dsh-popout-sidebar",
      description: "\u53EF\u5F39\u51FA\u5F0F\u4FA7\u8FB9\u680F\uFF1A\u4FA7\u8FB9\u680F\u5C55\u793A\u4EA7\u7269\u4E0E\u6587\u4EF6\u6811\uFF0C\u652F\u6301\u591A\u79CD\u6587\u4EF6\u9884\u89C8\u5F62\u5F0F\uFF1B\u5E76\u53EF\u5F39\u51FA\u4E3A\u72EC\u7ACB\u6D4F\u89C8\u5668\u6807\u7B7E\u9875\uFF08\u53EF\u62D6\u81F3\u53E6\u4E00\u663E\u793A\u5668\uFF09\uFF1B\u517C\u5BB9\u5176\u4ED6sidebar\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u540C\u65F6\u663E\u793A\u3002",
      category: "ui",
      repository: "https://github.com/e2mcc/dsh-popout-sidebar",
      version: "1.0.1",
      stars: 205,
      downloads: 1303
    },
    {
      name: "dsh-tokenledger",
      title: "zh667/TokenLedger",
      description: "\u4FA7\u8FB9\u680F\u7528\u91CF\u9762\u677F\uFF1A\u628A Token \u5F52\u5C5E\u5230\u5B9E\u9645\u670D\u52A1\u8BE5\u8BF7\u6C42\u7684\u4E2D\u8F6C\u7AD9\uFF0C\u7AD9\u70B9\u4ECE\u5DF2\u6709\u7684 provider \u914D\u7F6E\u4E2D\u8BFB\u51FA\uFF0C\u65E0\u9700\u989D\u5916\u914D\u7F6E\uFF1B\u542B\u4ECA\u65E5/\u672C\u6708/\u7D2F\u8BA1\u4E09\u7A97\u53E3\u3001\u6309\u7AD9\u70B9\u4E0E\u6A21\u578B\u4E0B\u94BB\u3001\u4E00\u5E74\u6D3B\u8DC3\u5EA6\u70ED\u529B\u56FE\uFF0C\u4EE5\u53CA New API / Sub2API / DeepSeek \u4F59\u989D\u3002",
      category: "usage",
      repository: "https://github.com/zh667/TokenLedger",
      version: "0.1.0",
      stars: 201,
      downloads: 1773
    },
    {
      name: "dsh-whale-musume",
      title: "Sutera-Diffusus/dsh-whale-musume",
      description: "\u9CB8\u9C7C\u5A18\u684C\u5BA0\uFF1A45 \u9879\u6210\u5C31\u3001\u6BCF\u65E5\u4EFB\u52A1\u4E0E\u5468\u7B7E\u5230\u3001\u4E09\u4E2A\u5C0F\u6E38\u620F\u300192 \u5F20\u7ACB\u7ED8\u3001620 \u6761\u53F0\u8BCD\u3001\u6210\u957F\u65E5\u8BB0\u3001\u5929\u6C14\u4E0E\u8282\u65E5\u53CD\u5E94\u3001\u6309\u5DE5\u5177\u7C7B\u578B\u5207\u6362\u5DE5\u4F5C\u59FF\u6001\u3001\u8DE8\u7AEF\u5B58\u6863\u5BFC\u51FA/\u5BFC\u5165\uFF08JSON \u6587\u4EF6\u6216\u8FC1\u79FB\u7801\uFF09\u3001\u65E0\u969C\u788D\u6A21\u5F0F\uFF0C\u4EE5\u53CA\u53EF\u9009\u7684 MiMo TTS \u53F0\u8BCD\u64AD\u62A5\u3002\u6570\u636E\u53EA\u5B58\u653E\u5728\u5BBF\u4E3B localStorage\uFF0C\u65E0\u9065\u6D4B\uFF1B\u5DF2\u5728 DSH \u684C\u9762\u7AEF\u2026",
      category: "fun",
      repository: "https://github.com/Sutera-Diffusus/dsh-whale-musume",
      version: "2.5.0",
      stars: 197,
      downloads: 7931
    },
    {
      name: "dsh-undo-savepoint",
      title: "lire1131/dsh-undo-savepoint",
      description: "DSH \u64A4\u9500/\u56DE\u9000\u7CFB\u7EDF\uFF1A\u914D\u7F6E\u53D8\u66F4\u81EA\u52A8\u5B58\u6863\uFF0C\u4E00\u952E\u64A4\u9500/\u6062\u590D/\u56DE\u9000\u5230\u4EFB\u610F\u7248\u672C\uFF0C\u652F\u6301 WebUI \u4E0E\u79BB\u7EBF CLI/GUI \u5DE5\u5177\uFF08DSH \u542F\u52A8\u5931\u8D25\u4E5F\u80FD\u6551\uFF09\u3002",
      category: "dev",
      repository: "https://github.com/lire1131/dsh-undo-savepoint",
      version: "0.5.0",
      stars: 197,
      downloads: 5995
    },
    {
      name: "dsh-connect-trae",
      title: "dingminhua/dsh-connect-trae",
      description: "\u5C06\u672C\u673A\u767B\u5F55\u7684 Trae \u4E2D\u56FD\u533A\u6A21\u578B\u63A5\u5165 DSH\uFF0C\u652F\u6301\u7531 DSH \u6267\u884C\u5DE5\u5177\u8C03\u7528\u3001\u8D26\u53F7\u5207\u6362\uFF0C\u4EE5\u53CA Work/\u901A\u7528\u79EF\u5206\u5C55\u793A\u3002",
      category: "model",
      repository: "https://github.com/dingminhua/dsh-connect-trae",
      version: "4.9.0",
      stars: 193,
      downloads: 20670
    },
    {
      name: "@zseven-w/dsh-crew",
      title: "ZSeven-W/dsh-crew",
      description: "\u4ECE Claude Code / Codex \u6D3E\u53D1\u4EFB\u52A1\u7ED9 DSH Agent\uFF1A\u539F\u751F\u5B50\u4EE3\u7406\u8FDB\u5EA6\u3001\u6309\u80FD\u529B\u5206\u5C42\u9884\u8BBE\u7684\u5BBF\u4E3B\u5185\u5DE5\u4F5C\u4F1A\u8BDD\uFF0C\u4EE5\u53CA\u4E3A\u7EAF\u6587\u672C Harness \u63D0\u4F9B\u89C6\u89C9\u4E0E\u56FE\u50CF\u751F\u6210\u7684\u591A\u6A21\u6001\u6865\u3002",
      category: "workflow",
      repository: "https://github.com/ZSeven-W/dsh-crew",
      version: "0.1.0-rc.14",
      stars: 192,
      downloads: 2238
    },
    {
      name: "seektty",
      title: "Hilbert-beinghappy/seektty",
      description: "\u9762\u5411 DeepSeek Harness \u7684\u7EC8\u7AEF\u5DE5\u4F5C\u533A\uFF0C\u652F\u6301\u5BFC\u5165\u672C\u5730 VS Code JSON\uFF0FJSONC \u4E3B\u9898\u3001\u7EE7\u627F\u7EC8\u7AEF\u80CC\u666F\u6548\u679C\u3001\u9F20\u6807\u6587\u672C\u9009\u62E9\u3001\u7ED3\u6784\u5316\u5DE5\u5177\u4E0E Diff \u89C6\u56FE\u3001Session\uFF0FProfile\uFF0F\u63D2\u4EF6\u7BA1\u7406\uFF0C\u4EE5\u53CA Skill\uFF0FMCP \u6D4F\u89C8\u3002",
      category: "ui",
      repository: "https://github.com/Hilbert-beinghappy/seektty",
      version: "1.3.0",
      stars: 192,
      downloads: 1350
    },
    {
      name: "@ychris12138/dsh-usage-stats",
      title: "Ychris12138/dsh-usage-stats",
      description: "\u591A\u4F9B\u5E94\u5546\u7528\u91CF\u770B\u677F\uFF1A\u6309\u4F9B\u5E94\u5546/\u6A21\u578B\u7EDF\u8BA1 Token \u4E0E\u65E5\u671F\u4E0B\u94BB\uFF0C\u7EDF\u4E00\u5C55\u793A\u8D26\u6237\u4F59\u989D\uFF0C\u5E76\u8FFD\u8E2A OpenCode Go / Z.ai \u8BA2\u9605\u989D\u5EA6\u3002",
      category: "usage",
      repository: "https://github.com/Ychris12138/dsh-usage-stats",
      version: "0.3.7",
      stars: 188,
      downloads: 7043
    },
    {
      name: "@a9i5k4/dsh-auto-memory",
      title: "Aik358/dsh-auto-memory",
      description: "\u4E3B\u52A8\u8054\u60F3\u8BB0\u5FC6 + Astra \u5F0F\u4E0A\u4E0B\u6587\u7BA1\u7406\uFF1A\u81EA\u52A8\u5524\u56DE\uFF08\u56FA\u5B9A\u8FB9\u754C\u6CE8\u5165\uFF0C\u524D\u7F00\u7F13\u5B58\u53CB\u597D\uFF09/\u81EA\u52A8\u6C89\u6DC0/\u6280\u80FD\u56FA\u5316/\u4EA4\u63A5\u8D26\u672C\u4E0E PLAN \u767D\u677F\u8DE8\u7A97\u53E3\u7EED\u547D/\u6C34\u4F4D\u611F\u77E5\uFF08\u7A97\u53E3\u81EA\u52A8\u9002\u914D\u5F53\u524D\u6A21\u578B\uFF09\u3002\u672C\u5730 Markdown \u5B58\u50A8\uFF0C\u6A21\u578B\u65E0\u5173\uFF0C\u96F6\u4F9D\u8D56\uFF1B\u8BCD\u6CD5 0GB \u515C\u5E95\uFF0C\u53EF\u9009\u8BED\u4E49\u6863\u3002",
      category: "memory",
      repository: "https://github.com/Aik358/dsh-auto-memory",
      version: "3.3.17",
      stars: 187,
      downloads: 13385
    },
    {
      name: "dsh-client-auto-continue",
      title: "HsiangNianian/dsh-auto-continue",
      description: "DSH Web \u8BF7\u6C42\u4E2D\u65AD\u81EA\u52A8\u7EED\u8DD1\uFF1A\u7F51\u7EDC\u3001\u8D85\u65F6\u6216\u5BBF\u4E3B\u5D29\u6E83\u7B49\u975E\u4EBA\u4E3A\u5931\u8D25\u540E\u81EA\u52A8\u53D1\u9001\u300C\u7EE7\u7EED\u300D\uFF0C\u652F\u6301\u9519\u8BEF\u5206\u7C7B\u3001\u81EA\u9002\u5E94\u9000\u907F\u3001\u6A21\u677F\u5316\u7EE7\u7EED\u6587\u672C\u4E0E\u6D4F\u89C8\u5668\u901A\u77E5\u3002",
      category: "ui",
      repository: "https://github.com/HsiangNianian/dsh-auto-continue",
      version: "0.17.3",
      stars: 184,
      downloads: 10890
    },
    {
      name: "dsh-codex-connect",
      title: "franksong2702/dsh-codex-connect",
      description: "\u901A\u8FC7 ChatGPT OAuth \u5C06 OpenAI Codex \u6A21\u578B\u63A5\u5165 DeepSeek Harness\uFF0C\u5E76\u63D0\u4F9B\u53EF\u9009\u7684\u641C\u7D22\u4E0E\u56FE\u7247\u5DE5\u5177\u3002",
      category: "model",
      repository: "https://github.com/franksong2702/dsh-codex-connect",
      version: "0.2.0-alpha.10",
      stars: 181,
      downloads: 7912
    },
    {
      name: "dsh-web-mobile",
      title: "mexiaosqwq/dsh-web-mobile",
      description: "DSH Web UI \u79FB\u52A8\u7AEF\u9002\u914D\uFF1A\u7A84\u5C4F\u597D\u7528\uFF0C\u5BBD\u5C4F\u9002\u7528\u3002",
      category: "remote",
      repository: "https://github.com/mexiaosqwq/dsh-web-mobile",
      version: "3.3.0",
      stars: 178,
      downloads: 8386
    },
    {
      name: "dsh-git-memory",
      title: "seriousz158/dsh-memory",
      description: "\u57FA\u4E8E\u672C\u5730 Git \u7684 DeepSeek Harness \u957F\u671F\u8BB0\u5FC6\uFF0C\u63D0\u4F9B\u4E2D\u82F1\u6587\u6DF7\u5408\u68C0\u7D22\u3001\u5E26\u5F15\u7528\u7684\u4E0A\u4E0B\u6587\u3001\u4E8B\u52A1\u5F0F\u540C\u6B65\u3001\u9884\u89C8\u4E0E\u56DE\u6EDA\u3002",
      category: "memory",
      repository: "https://github.com/seriousz158/dsh-memory",
      version: "0.8.1",
      stars: 169,
      downloads: 981
    },
    {
      name: "@ericwang1358/dsh-daily-flashcard",
      title: "EricWang1358/dsh-web-studyhub",
      description: "DSH \u7684\u5B66\u4E60\u5DE5\u4F5C\u53F0\uFF1A\u5BFC\u5165\u81EA\u5DF1\u7684 PDF\u3001DOCX\u3001PPTX\u3001Markdown \u8D44\u6599\u4E0E\u8BFE\u5802\u5F55\u97F3\uFF0C\u751F\u6210\u5E26\u51FA\u5904\u5F15\u7528\u7684\u5361\u7247\u3001\u6D4B\u9A8C\u4E0E\u5F00\u653E\u9898\uFF0C\u6309 FSRS-6 \u5B89\u6392\u95F4\u9694\u590D\u4E60\uFF0C\u81EA\u5E26\u7F51\u9875\u9762\u677F\u3002\u5BFC\u5165\u7684\u5F55\u97F3\u9700\u7528\u81EA\u5907\u7684 SiliconFlow\u3001Groq \u6216 Gemini \u5BC6\u94A5\u8F6C\u5199\uFF1B\u8BFE\u5802\u5B9E\u5F55\u53EF\u6539\u7528\u672C\u673A SenseVoice\u2026",
      category: "tools",
      repository: "https://github.com/EricWang1358/dsh-web-studyhub",
      version: "4.3.3",
      stars: 168,
      downloads: 1167
    },
    {
      name: "@dickpy/dsh-imagegen",
      title: "dickpy/dsh-imagegen",
      description: "\u9762\u5411 DSH Web GUI \u7684 AI \u751F\u56FE\u63D2\u4EF6\uFF1A\u901A\u8FC7\u53EF\u914D\u7F6E\u7684 OpenAI \u517C\u5BB9\u7AEF\u70B9\uFF08gpt-image-2 / gpt-image-1 / dall-e-3\uFF09\u5B9E\u73B0\u6587\u751F\u56FE\u4E0E\u56FE\u751F\u56FE\uFF0C\u63D0\u4F9B api_url/api_key \u8BBE\u7F6E\u5361\u7247\u4E0E\u4FA7\u8FB9\u680F\u5206\u680F\u751F\u56FE\u5DE5\u4F5C\u53F0\u3002",
      category: "vision",
      repository: "https://github.com/dickpy/dsh-imagegen",
      version: "1.15.5",
      stars: 167,
      downloads: 12420
    },
    {
      name: "dsh-plugin-bridge",
      title: "Totoro-qaq/dsh-plugin-bridge",
      description: "\u901A\u8FC7\u53EF\u9884\u89C8\u7684\u4E94\u6BB5\u5F0F\u4EA4\u63A5\uFF0C\u5C06\u5DF2\u6709 DSH \u4F1A\u8BDD\u8FC1\u79FB\u5230\u53E6\u4E00\u4E2A Agent Preset\uFF1B\u4FDD\u7559\u6E90\u4F1A\u8BDD\uFF0C\u5E76\u53EF\u8BA9\u76EE\u6807\u4F1A\u8BDD\u6682\u505C\u7B49\u5F85\u786E\u8BA4\u6216\u7ACB\u5373\u7EE7\u7EED\u3002",
      category: "session",
      repository: "https://github.com/Totoro-qaq/dsh-plugin-bridge",
      version: "0.5.1",
      stars: 165,
      downloads: 4047
    },
    {
      name: "dsh-builtin-browser",
      title: "wqty123/dsh-browser",
      description: "\u5171\u4EAB\u771F\u5B9E\u6D4F\u89C8\u5668\uFF1A\u7528\u6237\u53EF\u89C2\u770B\u5E76\u968F\u65F6\u63A5\u7BA1\u7684\u539F\u751F Electron \u7A97\u53E3\uFF0Cagent \u901A\u8FC7 CDP \u9A71\u52A8\uFF0C\u5185\u7F6E 20 \u4E2A browser_* \u5DE5\u5177\uFF08\u6253\u5F00/\u5FEB\u7167/\u6267\u884C/\u586B\u8868/\u622A\u56FE/\u4E0B\u8F7D/\u767B\u5F55\u6001\uFF09\uFF1B\u4EFB\u52A1\u7EA7\u4F1A\u8BDD\u9694\u79BB\u3001\u767B\u5F55\u6001\u6301\u4E45\u5316\u3001\u4EBA\u673A\u9A8C\u8BC1\u8BC6\u522B\uFF0C\u7EAF `dsh web` \u65E0\u9700\u684C\u9762\u5916\u58F3\u5373\u53EF\u81EA\u6258\u7BA1\u3002",
      category: "browser",
      repository: "https://github.com/wqty123/dsh-browser",
      version: "0.5.7",
      stars: 162,
      downloads: 31293
    },
    {
      name: "@changfenhuang/dsh-annotation",
      title: "omdsh-dev/dsh-annotation",
      description: "\u9009\u4E2D\u6587\u5B57\u2192\u6279\u6CE8\u2192\u968F\u6D88\u606F\u53D1\u9001\uFF0C\u56DE\u590D\u6309\u6279\u6CE8\u9010\u6761\u5BF9\u7167\u3002",
      category: "ui",
      repository: "https://github.com/omdsh-dev/dsh-annotation",
      version: "1.4.11",
      stars: 161,
      downloads: 3331
    },
    {
      name: "@nanmicoder/dsh-auto-mode",
      title: "NanmiCoder/dsh-auto-mode",
      description: "\u5728 Workspace Write \u4E0E Full access \u4E4B\u95F4\u589E\u52A0 Auto \u6743\u9650\u6863\uFF1A\u65E5\u5E38\u64CD\u4F5C\u7559\u5728\u5B98\u65B9 workspace-write \u6C99\u7BB1\u5185\uFF0C\u7531\u5F53\u524D\u4F1A\u8BDD\u6A21\u578B\u590D\u6838\u5347\u6743\u4E0E\u7834\u574F\u6027\u8C03\u7528\uFF0C\u7CBE\u786E\u7684\u8D8A\u754C\u8BBF\u95EE\u6309\u6B21\u653E\u884C\u4E00\u6B21\uFF0C\u610F\u56FE\u4E0D\u660E\u65F6\u8BE2\u95EE\uFF0C\u547D\u4E2D\u5173\u952E\u8DEF\u5F84\u5219\u62D2\u7EDD\u3002",
      category: "security",
      repository: "https://github.com/NanmiCoder/dsh-auto-mode",
      version: "0.2.0",
      stars: 161,
      downloads: 1490
    },
    {
      name: "dsh-theme-endfield",
      title: "ymh0000123/dsh-theme-endfield",
      description: "\u300A\u660E\u65E5\u65B9\u821F\uFF1A\u7EC8\u672B\u5730\u300B\u5DE5\u4E1A\u7F16\u8F91\u98CE\u4E3B\u9898\uFF1A\u5976\u6CB9\u7EB8\u5E95\u3001\u58A8\u9ED1\u6587\u5B57\u3001\u5168\u5C40\u76F4\u89D2\uFF0C\u4E24\u5957\u5F3A\u8C03\u8272\u914D\u8272\uFF08\u8C37\u5730\u9EC4\u4FE1\u53F7\u9EC4 / \u6B66\u9675\u9752\u9752\u78A7\u8272\uFF09\u53EF\u5728\u8BBE\u7F6E\u5207\u6362\uFF0C\u53E6\u6709\u53EF\u9009\u7684\u7B49\u9AD8\u7EBF\u5730\u5F62\u80CC\u666F\u3001ENDFIELD \u6C34\u5370\u4E0E\u542F\u52A8\u52A0\u8F7D\u5C4F\u3002",
      category: "theme",
      repository: "https://github.com/ymh0000123/dsh-theme-endfield",
      version: "1.2.3",
      stars: 160,
      downloads: 3388
    },
    {
      name: "@momasiku/dsh-pilot",
      title: "momasiku/dsh-pilot",
      description: "\u8BA9 DeepSeek Harness \u770B\u89C1\u5E76\u64CD\u4F5C Windows \u4E0A\u7684\u4EFB\u4F55\u7A0B\u5E8F\u3002\u6A21\u578B\u76F4\u63A5\u770B\u771F\u5B9E\u5C4F\u5E55\uFF0C\u81EA\u5DF1\u9A71\u52A8\u9F20\u6807\u3001\u952E\u76D8\u548C\u7A97\u53E3\u3002\u7279\u70B9\u662F\u5FEB\uFF1A\u597D\u51E0\u6B65\u52A8\u4F5C\u5728\u4E00\u6B21\u5F80\u8FD4\u91CC\u8DD1\u5B8C\uFF0C\u8F93\u5165\u524D\u8FD8\u80FD\u5148\u628A\u76EE\u6807\u7A97\u53E3\u805A\u7126\uFF0C\u70B9\u51FB\u5C31\u843D\u5728\u6B63\u786E\u7684\u7A97\u53E3\u4E0A\u3002\u4F60\u5728\u684C\u9762\u4E0A\u80FD\u505A\u7684\u4E8B\u5B83\u90FD\u80FD\u505A\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u753B CAD\u3001\u7535\u8DEF\u56FE\u4EFF\u771F\u3001\u53D1\u6D88\u606F\u3002",
      category: "tools",
      repository: "https://github.com/momasiku/dsh-pilot",
      version: "0.7.2",
      stars: 159,
      downloads: 9621
    },
    {
      name: "dsh-comfyui",
      title: "fandc520/dsh-comfyui",
      description: "\u8BA9 DeepSeek Harness \u7684 Agent \u76F4\u63A5\u9A71\u52A8\u672C\u5730\u6216\u8FDC\u7A0B ComfyUI\uFF1Acomfyui_run / comfyui_object_info / comfyui_workflow \u5DE5\u5177\u751F\u6210\u4E0E\u7F16\u8F91\u56FE\u50CF\u3001\u89C6\u9891\uFF0C\u9644\u5E26\u5DE5\u4F5C\u6D41\u5E93\uFF08\u56FE\u5DE5\u4F5C\u6D41\u63D0\u53D6\uFF1A\u6309\u5206\u91CF / \u4E3B\u6D41\u7A0B / \u6574\u4F53\uFF09\u3001\u52A0\u8F7D\u533A\u5206\u8FA8\u7387\u81EA\u52A8\u5339\u914D\u3001\u5B9E\u65F6\u961F\u5217\u3001SDX\u2026",
      category: "vision",
      repository: "https://github.com/fandc520/dsh-comfyui",
      version: "0.5.5",
      stars: 159,
      downloads: 6390
    },
    {
      name: "dsh-qq-link",
      title: "Yuuyuko-uu/dsh-qq-link",
      description: "\u901A\u8FC7 NapCat HTTP \u628A DSH \u4F1A\u8BDD\u548C QQ \u53CC\u5411\u6253\u901A\uFF1AAI \u8BF4\u5B8C\u81EA\u52A8\u53D1\u5230 QQ\uFF0C\u4F60\u5728 QQ \u91CC\u8BF4\u7684\u8BDD\u81EA\u52A8\u8F6C\u8FDB\u4F1A\u8BDD\u3002",
      category: "notify",
      repository: "https://github.com/Yuuyuko-uu/dsh-qq-link",
      version: "1.5.1",
      stars: 157,
      downloads: 2898
    },
    {
      name: "dsh-win32",
      title: "sjh9714/dsh-win32",
      description: "\u56F4\u7ED5\u5B98\u65B9\u6301\u4E45 PowerShell \u4E0E Workspace Write \u65B9\u6848\u68C0\u67E5\u548C\u4FEE\u590D\u539F\u751F Windows \u4E0A\u7684 DeepSeek Harness\uFF0C\u521B\u5EFA\u684C\u9762\u5FEB\u6377\u65B9\u5F0F\uFF0C\u5E76\u4EC5\u901A\u8FC7\u660E\u786E\u7684 legacy \u5B89\u88C5\u4FDD\u7559\u65E9\u671F Git Bash \u4E0E BusyBox \u9884\u8BBE\uFF0C\u65E0\u9700 WSL\u3002",
      category: "dev",
      repository: "https://github.com/sjh9714/dsh-win32",
      version: "0.18.0",
      stars: 155,
      downloads: 5245
    },
    {
      name: "dsh-agy-link",
      title: "amlyczz/dsh-agy-link",
      description: "\u5C06 Google Antigravity (agy CLI) \u63A5\u5165 DSH\uFF1A\u65E0 API Key \u4F7F\u7528 Gemini/Claude/GPT-OSS \u8BA2\u9605\u6A21\u578B\uFF0C\u652F\u6301\u6D41\u5F0F\u5BF9\u8BDD\u3001\u539F\u751F\u5DE5\u5177\u5361\u7247\u3001\u601D\u8003\u8F6E\u6B21\u6CE8\u8BB0\u53CA Web \u754C\u9762 Google OAuth \u626B\u7801\u767B\u5F55\u3002",
      category: "model",
      repository: "https://github.com/amlyczz/dsh-agy-link",
      version: "0.6.1",
      stars: 150,
      downloads: 12434
    },
    {
      name: "@anionex/dsh-turn-rewind",
      title: "Anionex/dsh-turn-rewind",
      description: "\u5BF9\u8BDD\u56DE\u9000\uFF1A\u57FA\u4E8E\u6301\u4E45 Change Ledger \u56DE\u6EDA\u4F1A\u8BDD\u4E0E\u5DE5\u4F5C\u533A\u72B6\u6001\u3002",
      category: "session",
      repository: "https://github.com/Anionex/dsh-turn-rewind",
      version: "0.3.11",
      stars: 144,
      downloads: 5811
    },
    {
      name: "memory-eternal",
      title: "EternalNight996/memory-eternal",
      description: "\u81EA\u7814 DSH \u8BB0\u5FC6\u63D2\u4EF6\uFF1ASQLite \u6301\u4E45\u5B58\u50A8 + \u6570\u636E\u5E93\u5C42\u5BA1\u6838\u5B88\u536B\uFF08enforceAudit\uFF09+ \u5BA1\u8BA1\u65E5\u5FD7\u3002\u5BF9\u8BDD\u7ED3\u675F\u81EA\u52A8\u6C89\u6DC0\u77E5\u8BC6\u5361\uFF0CAgent \u7ECF memory_recall \u6309\u9700\u53EC\u56DE\uFF0C\u652F\u6301 Claude Code/Codex/Cursor \u591A\u667A\u80FD\u4F53\u5171\u4EAB\uFF0C\u96F6\u5916\u90E8\u4F9D\u8D56\u3002",
      category: "memory",
      repository: "https://github.com/EternalNight996/memory-eternal",
      version: "0.22.0",
      stars: 143,
      downloads: 13733
    },
    {
      name: "dsh-memento",
      title: "PerryLink/dsh-memento",
      description: "\u6709\u754C\u3001\u5206\u5C42\u3001\u5E26\u5BA1\u6279\u95E8\u3001\u53EF\u5BA1\u8BA1\u7684\u8DE8\u4F1A\u8BDD\u8BB0\u5FC6\uFF1A`ctx.memory` \u670D\u52A1 + \u96F6\u4F9D\u8D56 SQLite \u5B58\u50A8 + `memory` \u5DE5\u5177\u4E0E\u51BB\u7ED3\u5FEB\u7167\u6CE8\u5165\uFF0C\u5E76\u9884\u6F14 dsh-memory-protocol v1\u2014\u2014\u9002\u914D\u5668\u6CE8\u518C\u8868\u4E0E\u53EF\u5206\u53D1\u7684\u4E00\u81F4\u6027\u5957\u4EF6\u3002",
      category: "memory",
      repository: "https://github.com/PerryLink/dsh-memento",
      version: "0.5.30",
      stars: 142,
      downloads: 6453
    },
    {
      name: "@zseven-w/dsh-noema",
      title: "ZSeven-W/dsh-noema",
      description: "\u4E3A DSH Agent \u63D0\u4F9B\u957F\u671F\u8BB0\u5FC6\u2014\u2014\u53EF\u68C0\u7D22\u3001\u53EF\u68C0\u89C6\u7684\u6301\u4E45\u8BB0\u5FC6\uFF0C\u5E26\u56DE\u5FC6\u3001\u641C\u7D22\u3001\u6D4F\u89C8\u4E0E\u77E5\u8BC6\u56FE\u8C31\u5DE5\u5177\uFF0C\u652F\u6301\u4ECE\u5341\u4E2A\u5176\u4ED6 AI \u7F16\u7801\u5DE5\u5177\u5BFC\u5165\u8BB0\u5FC6\uFF0C\u5E76\u9644\u8BBE\u7F6E\u9875\u3002",
      category: "memory",
      repository: "https://github.com/ZSeven-W/dsh-noema",
      version: "0.1.0-rc.6",
      stars: 136,
      downloads: 1958
    },
    {
      name: "superpowers-dsh",
      title: "LayneChai/superpowers-dsh",
      description: "DeepSeek Harness \u7248 Superpowers \u6280\u80FD\u5305\uFF1A\u79FB\u690D\u81EA obra/superpowers \u7684 TDD\u3001\u8C03\u8BD5\u3001\u89C4\u5212\u4E0E\u534F\u4F5C\u6280\u80FD\uFF0C\u4EE5 Cordis \u63D2\u4EF6\u5B89\u88C5\u5E76\u6CE8\u518C 14 \u4E2A\u6280\u80FD\uFF08\u96F6\u8FD0\u884C\u65F6\u4F9D\u8D56\uFF09\u3002",
      category: "skill",
      repository: "https://github.com/LayneChai/superpowers-dsh",
      version: "0.4.0",
      stars: 135,
      downloads: 7628
    },
    {
      name: "dsh-plugin-mobile-gateway",
      title: "Clarklevis1995/dsh-plugin-mobile-gateway",
      description: "DeepSeek Harness \u7684\u8BBE\u5907\u9274\u6743\u79FB\u52A8\u7F51\u5173\uFF1A\u901A\u8FC7 WebSocket \u8FDE\u63A5\u914D\u5957\u539F\u751F iOS \u5BA2\u6237\u7AEF\uFF0C\u652F\u6301\u4F1A\u8BDD\u3001\u5B9E\u65F6\u4E8B\u4EF6\u3001\u4EFB\u52A1\u3001Goal\u3001\u5BA1\u6279\u3001\u547D\u4EE4\u548C\u6587\u4EF6\u4F20\u8F93\uFF0C\u5E76\u63D0\u4F9B\u4E8C\u7EF4\u7801\u914D\u5BF9\u4E0E\u8BBE\u5907\u64A4\u9500\u3002",
      category: "remote",
      repository: "https://github.com/Clarklevis1995/dsh-plugin-mobile-gateway",
      version: "0.11.3",
      stars: 135,
      downloads: 6074
    },
    {
      name: "dsh-permission-rules",
      title: "PerryLink/dsh-permission-rules",
      description: "Claude Code \u98CE\u683C\u7684\u58F0\u660E\u5F0F\u6743\u9650\u89C4\u5219\uFF1A\u6309\u5E8F allow/deny/ask \u7684 YAML \u89C4\u5219\uFF0C\u5728 tools/pre-execute \u7011\u5E03\u4E0A\u5339\u914D\u5DE5\u5177\u540D\u3001\u53C2\u6570\u3001\u5DE5\u4F5C\u533A\u8DEF\u5F84\u4E0E agent \u8EAB\u4EFD\uFF0C\u5E26\u5B8C\u6574\u4F1A\u8BDD\u65E5\u5FD7\u5BA1\u8BA1\u3001\u5E72\u8DD1\u6A21\u5F0F\u4E0E\u70ED\u91CD\u8F7D\u3002",
      category: "security",
      repository: "https://github.com/PerryLink/dsh-permission-rules",
      version: "0.7.21",
      stars: 135,
      downloads: 5523
    },
    {
      name: "dsh-game-material-master",
      title: "universe-st/dsh-game-material-master",
      description: "\u57FA\u4E8E Seedream \u751F\u56FE\u4E0E MiniMax \u56FE\u751F\u89C6\u9891\uFF0C\u4ECE\u53C2\u8003\u56FE\u751F\u6210\u6E38\u620F\u7D20\u6750\uFF0C\u672C\u5730\u7EFF\u5E55\u62A0\u50CF\u540E\u5408\u6210\u516B\u65B9\u5411\u7CBE\u7075\u56FE\u3001\u5E8F\u5217\u5E27\u4E0E\u9AA8\u9ABC\u52A8\u753B\u3002",
      category: "tools",
      repository: "https://github.com/universe-st/dsh-game-material-master",
      version: "0.11.2",
      stars: 130,
      downloads: 5536
    },
    {
      name: "dsh-easyrewrite",
      title: "Renzic-Stone/DSH-EasyRewrite",
      description: "\u5728 dsh web \u4E2D\u5185\u8054\u7F16\u8F91\u4E0E\u64A4\u56DE\u81EA\u5DF1\u7684\u6D88\u606F\u2014\u2014\u60F0\u6027\u3001\u65E0\u75D5\uFF0C\u5E26\u7248\u672C\u7FFB\u9875\u5668\u4E0E\u4F1A\u8BDD\u7EA7\u8349\u7A3F\u6301\u4E45\u5316\u3002",
      category: "session",
      repository: "https://github.com/Renzic-Stone/DSH-EasyRewrite",
      version: "3.0.0",
      stars: 128,
      downloads: 2913
    },
    {
      name: "dsh-recall-unread",
      title: "hg1048596-pixel/dsh-recall-unread",
      description: "\u5728\u8F93\u5165\u6846\u4E0A\u65B9\u5217\u51FA\u5DF2\u53D1\u9001\u4F46\u6A21\u578B\u5C1A\u672A\u8BFB\u53D6\u7684\u63D2\u8BDD\u6D88\u606F\uFF0C\u53EF\u5728\u6A21\u578B\u8BFB\u53D6\u524D\u9010\u6761\u6216\u4E00\u6B21\u6027\u64A4\u56DE\u3002",
      category: "ui",
      repository: "https://github.com/hg1048596-pixel/dsh-recall-unread",
      version: "1.2.1",
      stars: 126,
      downloads: 1597
    },
    {
      name: "jacky-creator",
      title: "Jackywxsz/DSH-Creator",
      description: "\u9762\u5411 DSH \u7684\u672C\u5730\u5185\u5BB9\u751F\u4EA7\u4E0E\u8FD0\u8425\u5DE5\u4F5C\u53F0\uFF1A\u7BA1\u7406\u7075\u611F\u3001\u811A\u672C\u3001\u5A92\u4F53\u8D44\u4EA7\u3001\u6863\u671F\u3001\u76EE\u6807\u3001\u53D1\u5E03\u72B6\u6001\u548C\u53D1\u5E03\u540E\u590D\u76D8\u3002",
      category: "workflow",
      repository: "https://github.com/Jackywxsz/DSH-Creator",
      version: "0.1.0-beta.9",
      stars: 126,
      downloads: 1530
    },
    {
      name: "dsh-watcher",
      title: "aa2246740/dsh-watcher",
      description: "\u53EA\u8BFB\u4F1A\u8BDD\u5DE5\u4F5C\u8DEF\u5F84\u89C2\u5BDF\u5668\uFF1A\u6536\u8D77\u8F6E\u6B21\u770B\u9636\u6BB5\u6570\u3001\u6267\u884C\u6570\u3001\u8017\u65F6\u4E0E tok/s\uFF0C\u5C55\u5F00\u770B\u5E76\u884C\u5206\u652F\u3001\u5DE5\u5177\u7ED3\u679C\u4E0E\u4F9B\u5E94\u5546\u53EF\u89C1\u63A8\u7406\u3002",
      category: "ui",
      repository: "https://github.com/aa2246740/dsh-watcher",
      version: "0.9.1",
      stars: 124,
      downloads: 2623
    },
    {
      name: "dsh-plugin-genui",
      title: "pengyue-polaron/deepseek-harness-genui",
      description: "Code-first React + TypeScript \u4EFB\u52A1\u5E94\u7528\uFF0C\u652F\u6301 Inline\u3001Canvas\u3001\u5168\u5C4F\u4E0E localhost\uFF1B\u4EA4\u4E92\u72B6\u6001\u53EF\u4F9B Agent \u540E\u7EED\u8F6E\u6B21\u8BFB\u53D6\uFF0CMCP \u548C API \u8BBF\u95EE\u5728\u7528\u6237\u6388\u6743\u540E\u6267\u884C\u3002",
      category: "ui",
      repository: "https://github.com/pengyue-polaron/deepseek-harness-genui",
      version: "0.15.2",
      stars: 124,
      downloads: 2113
    },
    {
      name: "dsh-auto-memory",
      title: "AskTheWay/dsh-auto-memory",
      description: "\u539F\u751F\u5B9E\u73B0 Claude Code \u5F0F\u81EA\u52A8\u8BB0\u5FC6:\u7C7B\u578B\u5316\u8BB0\u5FC6\u6587\u4EF6(user/feedback/project/reference)+ \u81EA\u52A8\u6CE8\u5165\u7CFB\u7EDF\u63D0\u793A\u8BCD\u7684 MEMORY.md \u7D22\u5F15,\u65E0\u8BB0\u5FC6\u65F6\u96F6\u63D0\u793A\u8BCD\u5360\u7528;memory_write/read/list/delete \u9075\u5FAA Claude Code\u2026",
      category: "memory",
      repository: "https://github.com/AskTheWay/dsh-auto-memory",
      version: "1.3.0",
      stars: 123,
      downloads: 9726
    },
    {
      name: "dsh-tabbit",
      title: "Tabbit-Browser/dsh-tabbit",
      description: "\u8BA9 DeepSeek Harness \u80FD\u591F\u63A7\u5236 Tabbit \u6D4F\u89C8\u5668\uFF1A\u5B89\u88C5\u5373\u81EA\u52A8\u52A0\u8F7D tabbit-browser skill\uFF0C\u68C0\u6D4B\u56FD\u9645\u7248 Tabbit \u4E0E\u56FD\u5185\u7248 Tabbit Browser \u6B63\u5F0F\u7248\uFF08>= 1.9.0\uFF09\uFF0C\u68C0\u67E5 tabbit-cli \u5E38\u9A7B\u8FD0\u884C\u65F6\uFF0C\u6309\u5E73\u53F0\u8BCA\u65AD\u8C03\u7528 CLI \u6240\u9700\u7684 DSH sandbox\u2026",
      category: "browser",
      repository: "https://github.com/Tabbit-Browser/dsh-tabbit",
      version: "0.4.1",
      stars: 121,
      downloads: 2442
    },
    {
      name: "@noob-stupid/dsh-plugin-console",
      title: "Noob-stupid/dsh-plugin-gating-hub",
      description: "DSH \u6846\u67B6\u5347\u7EA7\u5B89\u5168\u4E0E\u63D2\u4EF6\u5347\u7EA7\u95E8\u63A7\uFF1A\u5347\u7EA7\u524D\u8DD1\u300C\u4F1A\u8BDD\u683C\u5F0F\u5951\u7EA6\u9884\u68C0\u300D\uFF08\u628A\u4E0D\u517C\u5BB9\u7684\u63D2\u4EF6\u4E0E agent \u9884\u8BBE\u626B\u51FA\u6765\u5148\u9002\u914D\uFF09\u3001\u5347\u7EA7\u5931\u8D25\u81EA\u52A8\u56DE\u6EDA\u3001\u628A\u62D6\u57AE\u8FC7\u542F\u52A8\u7684\u63D2\u4EF6\u81EA\u52A8\u9694\u79BB\uFF1B\u53E6\u6709\u73AF\u5883\u6307\u7EB9\u4E0E\u516C\u5F00\u5951\u7EA6\u89C4\u5219\u5E93\u6301\u7EED\u5B88\u95E8\u3002\u5185\u7F6E\u591A\u6E90\u63D2\u4EF6\u5E02\u573A\u53EA\u4F5C\u53D1\u73B0\u5C42\u3002",
      category: "tools",
      repository: "https://github.com/Noob-stupid/dsh-plugin-gating-hub",
      version: "0.5.108",
      stars: 120,
      downloads: 17191
    },
    {
      name: "@michengai/dsh-im-connect",
      title: "MichengAI/dsh-im-connect",
      description: "\u628A\u5FAE\u4FE1\u3001\u4F01\u4E1A\u5FAE\u4FE1\u3001\u9489\u9489\u3001\u98DE\u4E66\u3001Lark\u3001QQ\u3001Telegram \u63A5\u5230\u672C\u673A DeepSeek Harness\uFF0C\u6BCF\u4E2A IM \u804A\u5929\u5BF9\u5E94\u4E00\u6761\u72EC\u7ACB\u5DE5\u4F5C\u533A\u9891\u9053\u3002",
      category: "notify",
      repository: "https://github.com/MichengAI/dsh-im-connect",
      version: "1.0.27",
      stars: 118,
      downloads: 62695
    },
    {
      name: "stratagate-dsh",
      title: "diqierjia/StrataGate-AgentMemory",
      description: "\u8FD1\u671F\u5BF9\u8BDD\u4FDD\u6301\u6E05\u6670\uFF0C\u4E45\u8FDC\u8BB0\u5FC6\u9010\u6E10\u5316\u4E3A\u6458\u8981\uFF0C\u800C\u4E0D\u662F\u6D88\u5931\u3002StrataGate \u4E3A DeepSeek Harness \u5E26\u6765\u516D\u5C42\u65F6\u95F4\u8870\u51CF\u8BB0\u5FC6\uFF0C\u5E76\u5C06\u957F\u671F\u4E8B\u4EF6\u4E0E\u5173\u7CFB\u6C89\u6DC0\u8FDB\u77E5\u8BC6\u56FE\u8C31\u3002\u8FD8\u53EF\u4EE5\u628A\u5176\u4ED6 AI \u4E2D\u7684\u5DF2\u6709\u8BB0\u5FC6\u4E00\u8D77\u5E26\u8FC7\u6765\uFF0C\u4E0D\u5FC5\u4ECE\u5934\u5F00\u59CB\u3002",
      category: "memory",
      repository: "https://github.com/diqierjia/StrataGate-AgentMemory",
      version: "0.3.41",
      stars: 115,
      downloads: 9088
    },
    {
      name: "dsh-personal-center",
      title: "PolinniZhong/dsh-personal-center",
      description: "DeepSeek Harness \u4E2A\u4EBA\u4E2D\u5FC3\uFF1A\u8DE8\u4F1A\u8BDD\u7528\u91CF\u7EDF\u8BA1\uFF08\u6309\u4F9B\u5E94\u5546/\u6A21\u578B\u5206\u522B\u7EDF\u8BA1\uFF0C\u81EA\u52A8\u8BFB\u53D6\u5DF2\u914D\u7F6E\u6A21\u578B\uFF09\u3001\u6309\u6A21\u578B\u6210\u672C\u4F30\u7B97\u3001\u5168\u5C40\u81EA\u5B9A\u4E49\u6307\u4EE4\u3001\u6570\u636E\u9A71\u52A8\u7684\u684C\u9762\u5BA0\u7269\uFF08\u4F4D\u56FE/\u77E2\u91CF\u76AE\u80A4\uFF09\u4E0E\u4F1A\u8BDD\u72B6\u6001\u6982\u89C8\uFF0C\u7EAF\u672C\u5730\u79BB\u7EBF\u8FD0\u884C\u3002",
      category: "usage",
      repository: "https://github.com/PolinniZhong/dsh-personal-center",
      version: "1.2.0",
      stars: 115,
      downloads: 2070
    },
    {
      name: "dsh-prompt-market",
      title: "yi-yezhiqiu/dsh-prompt-market",
      description: "\u5BF9\u8BDD\u6846\u65C1\u7684\u63D0\u793A\u8BCD\u5E02\u573A\uFF1A\u6D4F\u89C8\u5E76\u641C\u7D22\u4E09\u4E2A\u5185\u7F6E\u5728\u7EBF\u63D0\u793A\u8BCD\u6E90\uFF0C\u53EF\u6536\u85CF\u6216\u81EA\u5EFA\uFF0C\u9009\u4E2D\u5373\u63D2\u5165\u8F93\u5165\u6846\u3002",
      category: "ui",
      repository: "https://github.com/yi-yezhiqiu/dsh-prompt-market",
      version: "0.1.3",
      stars: 111,
      downloads: 899
    },
    {
      name: "dsh-approval-gate",
      title: "moon09300731/dsh-approval-gate",
      description: "DeepSeek Harness \u81EA\u52A8\u5BA1\u6279\u95E8\u63A7\uFF1AFlash \u9884\u5224\u5199\u5165/\u547D\u4EE4\u662F\u5426\u4E0D\u53EF\u56DE\u8865\uFF0C\u5B89\u5168\u64CD\u4F5C\u81EA\u52A8\u6279\u51C6\u3001\u5371\u9669\u64CD\u4F5C\u8F6C\u4EBA\u5DE5\uFF08fail-safe\uFF09\u3002\u53E6\u542B\u6587\u4EF6\u6539\u52A8\u5BF9\u6BD4\uFF08unified diff\uFF09\u4E0E\u4E00\u952E\u64A4\u9500\u3001\u6309\u4F1A\u8BDD\u9694\u79BB\u7684\u5FEB\u7167\u7BA1\u7406\uFF08v0.5.1\uFF1A\u901A\u8FC7\u5DE5\u5177\u8C03\u7528\u53C2\u6570\u56DE\u6EAF\u7CBE\u786E\u4FDD\u5B58\u5FEB\u7167\uFF0C\u8986\u76D6\u4EBA\u5DE5\u5BA1\u6279\u573A\u666F\uFF09\u3002",
      category: "security",
      repository: "https://github.com/moon09300731/dsh-approval-gate",
      version: "0.5.0",
      stars: 110,
      downloads: 3916
    },
    {
      name: "dsh-video-skin",
      title: "Something11235/dsh-video-skin",
      description: "\u628A\u4E00\u6BB5\u5FAA\u73AF\u77ED\u7247\u94FA\u6210\u804A\u5929\u80CC\u666F\uFF08\u53EF\u8C03\u900F\u660E\u5EA6\uFF09\uFF0C\u542F\u52A8\u65F6\u518D\u64AD\u653E\u4E00\u6BB5\u6709\u58F0\u7247\u5934\u52A8\u753B\u3002\u9996\u6B21\u542F\u52A8\u82E5\u4E3A\u6D45\u8272\u4E3B\u9898\uFF0C\u4F1A\u4E00\u6B21\u6027\u5207\u5230\u6DF1\u8272\uFF08\u9644\u64A4\u9500\u63D0\u793A\uFF09\u3002",
      category: "theme",
      repository: "https://github.com/Something11235/dsh-video-skin",
      version: "0.1.6",
      stars: 108,
      downloads: 34244
    },
    {
      name: "dsh-mcp-connector",
      title: "duhu2000/dsh-mcp-connector",
      description: "MCP\u8FDE\u63A5\u5668\uFF1ADeepSeek Harness \u7684\u4E13\u4E1A MCP \u5E02\u573A\u3001\u6570\u636E\u5E02\u573A\u4E0E MCP \u7BA1\u7406\u9762\u677F\uFF0C\u6C47\u805A\u4F01\u4E1A\u3001\u91D1\u878D\u3001\u6CD5\u5F8B\u3001\u4E13\u5229\u3001\u79D1\u7814\u548C\u5730\u7406\u7B49 Model Context Protocol\uFF08MCP\uFF09\u6570\u636E\u6E90\u3002\u901A\u8FC7\u8D85\u767E\u4E2A MCP\u8FDE\u63A5\u5668\u63A5\u5165 MCP Server\uFF0C\u652F\u6301\u8FDE\u63A5\u7BA1\u7406\u3001\u6388\u6743\u914D\u7F6E\u3001\u8DE8\u8FDE\u63A5\u641C\u7D22\u5DE5\u5177\u4E0E\u6392\u969C\uFF1B\u652F\u6301\u2026",
      category: "tools",
      repository: "https://github.com/duhu2000/dsh-mcp-connector",
      version: "0.2.94",
      stars: 108,
      downloads: 31113
    },
    {
      name: "dsh-session-manager",
      title: "hkkz9522/dsh-session-manager",
      description: "DSH \u4F1A\u8BDD\u4E0E\u5DE5\u4F5C\u533A\u7BA1\u7406\u2014\u2014\u5DE5\u4F5C\u533A\uFF1A\u5F52\u6863\u4E0E\u663E\u793A\u3002\u4F1A\u8BDD\uFF1A\u8DE8\u5DE5\u4F5C\u533A\u79FB\u52A8\u3001\u9884\u8BBE\u8FC1\u79FB\u3001\u5220\u9664\uFF1B\u6536\u85CF\u3001\u5F85\u56DE\u770B\u3001\u4F18\u5148\u7EA7\u3001\u6807\u7B7E\u3001\u5907\u6CE8\u3002\u6279\u91CF\u64CD\u4F5C\u3002",
      category: "session",
      repository: "https://github.com/hkkz9522/dsh-session-manager",
      version: "0.7.5",
      stars: 107,
      downloads: 15290
    },
    {
      name: "dsh-tool-todo-plus",
      title: "shuxidemosheng/dsh-tool-todo-plus",
      description: "\u5B98\u65B9 todo_write \u7684\u589E\u5F3A fork\uFF1A\u4EFB\u52A1\u9879\u652F\u6301\u4F18\u5148\u7EA7\u6807\u7B7E\u3001\u4F1A\u8BDD\u5185\u5B8C\u6574\u6E05\u5355\u6E32\u67D3\uFF0C\u5E76\u63D0\u4F9B\u53EF\u62D6\u52A8\u7684\u4F1A\u8BDD\u5185\u6D6E\u52A8\u4EFB\u52A1\u9762\u677F\uFF08\u4F4D\u7F6E\u8BB0\u5FC6 / \u53CC\u51FB\u590D\u4F4D / \u5F53\u524D\u52A8\u4F5C\u663E\u793A\uFF09\u3002",
      category: "tools",
      repository: "https://github.com/shuxidemosheng/dsh-tool-todo-plus",
      version: "0.7.5",
      stars: 107,
      downloads: 1565
    },
    {
      name: "dsh-run2skill",
      title: "qkycir-123/dsh-run2skill",
      description: "\u5C06 DSH \u4F1A\u8BDD\u4E2D\u660E\u786E\u8868\u8FBE\u7684\u7ECF\u9A8C\u6574\u7406\u4E3A\u53EF\u5BA1\u6838\u7684\u539F\u751F Skill \u8349\u7A3F\uFF0C\u5E76\u4EC5\u5728\u7528\u6237\u786E\u8BA4\u540E\u4FDD\u5B58\u3002",
      category: "skill",
      repository: "https://github.com/qkycir-123/dsh-run2skill",
      version: "0.5.0-alpha.4",
      stars: 105,
      downloads: 1866
    },
    {
      name: "@ninkch/dsh-infinite-canvas",
      title: "NINKCH/dsh-infinite_canvas",
      description: "DeepSeek Harness \u7684\u8282\u70B9\u5F0F\u521B\u4F5C\u5DE5\u4F5C\u5BA4\u2014\u2014\u5728\u65E0\u9650\u753B\u5E03\u4E0A\u5B8C\u6210\u5267\u672C\u3001\u5206\u955C\u3001\u53C2\u8003\u56FE\u4E0E\u591A\u955C\u5934\u89C6\u9891\u751F\u6210\uFF0C\u53EF\u7531\u5BF9\u8BDD\u6279\u91CF\u9A71\u52A8\uFF1B\u56FE\u50CF/\u89C6\u9891/TTS \u9700\u81EA\u5E26\u670D\u52A1\u5546\uFF08OpenAI \u98CE\u683C\u63A5\u53E3\uFF0C\u6216 Seedance/Sora \u98CE\u683C\u89C6\u9891 API\uFF09\uFF0C\u672A\u914D\u7F6E\u65F6\u6574\u6761\u6D41\u6C34\u7EBF\u4EE5\u79BB\u7EBF\u6F14\u793A\u6A21\u5F0F\u8FD0\u884C\u3001\u53EA\u4EA7\u51FA\u5360\u4F4D\u7D20\u6750\u3002",
      category: "tools",
      repository: "https://github.com/NINKCH/dsh-infinite_canvas",
      version: "0.19.21",
      stars: 103,
      downloads: 9373
    },
    {
      name: "@sanqi-normal/dsh-webui-market-plugin",
      title: "Sanqi-normal/dsh-webui-market-plugin",
      description: "dsh Web GUI \u5185\u7684\u793E\u533A\u63D2\u4EF6\u5E02\u573A\uFF1A\u6D4F\u89C8 awesome-dsh-plugin.com \u76EE\u5F55\uFF0C\u4ECE \u8BBE\u7F6E \u2192 \u63D2\u4EF6 \u2192 \u63D2\u4EF6\u5E02\u573A \u5B89\u88C5/\u5378\u8F7D\u63D2\u4EF6\u5230 profile\u3002",
      category: "market",
      repository: "https://github.com/Sanqi-normal/dsh-webui-market-plugin",
      version: "0.5.5",
      stars: 103,
      downloads: 1103
    },
    {
      name: "dsh-ntr",
      title: "GDWhisper/dsh-ntr",
      description: "\u628A\u4EFB\u610F\u652F\u6301 ACP \u7684 Agent \u63A5\u8FDB DSH\uFF0C\u7528 DSH \u4E00\u4E2A\u5165\u53E3\u7BA1\u7406\u6240\u6709\u4F1A\u8BDD\u548C\u4EFB\u52A1\u3002\u6A21\u578B\u3001\u601D\u8003\u7B49\u7EA7\u548C\u6743\u9650\u6A21\u5F0F\u7531 Agent \u81EA\u5DF1\u63D0\u4F9B\uFF1B\u5DE5\u5177\u8C03\u7528\u663E\u793A\u5728\u4E3B\u804A\u5929\u533A\uFF0Cdiff \u6C47\u603B\u5230\u72EC\u7ACB\u7684 NTR \u9875\uFF0C\u6743\u9650\u8BE2\u95EE\u51FA\u73B0\u5728\u8F93\u5165\u6846\u3002\u4F7F\u7528\u524D\u9700\u5728\u672C\u673A\u5B89\u88C5\u652F\u6301 ACP \u7684 Agent \u547D\u4EE4\u884C\u5DE5\u5177\u3002",
      category: "tools",
      repository: "https://github.com/GDWhisper/dsh-ntr",
      version: "0.3.10",
      stars: 102,
      downloads: 5852
    },
    {
      name: "dsh-block-ptc",
      title: "mengwEX/dsh-block-ptc",
      description: "\u4E3A PTC \u6A21\u5F0F\u63D0\u4F9B\u6A21\u578B\u81EA\u4E3B\u6536\u53E3\u7684\u52A8\u6001\u4E0A\u4E0B\u6587\u538B\u7F29\uFF0C\u5C06\u7A0B\u5E8F\u6267\u884C\u5F52\u5165\u533A\u5757\uFF0C\u5E76\u7528\u6A21\u578B\u64B0\u5199\u7684\u6458\u8981\u66FF\u6362\u5DF2\u5B8C\u6210\u533A\u5757\u7684\u6D88\u606F\u3002",
      category: "session",
      repository: "https://github.com/mengwEX/dsh-block-ptc",
      version: "0.4.0",
      stars: 102,
      downloads: 1221
    },
    {
      name: "dsh-opencode-palette",
      title: "FeatherHunter/dsh-opencode-palette",
      description: "\u{1F339}\u5C06opencode\u768438\u6B3E\u4E3B\u9898\u642C\u8FDBDSH\uFF0C\u660E\u6697\u517C\u6536\uFF1A\u4E1C\u4EAC\u4E4B\u591C\u6C89\u9759\u3001\u5361\u5E03\u5947\u8BFA\u8F7B\u67D4\u3001\u7985\u71C3\u62A4\u773C\uFF1B\u53E6\u590725\u6B3E\u4E3B\u9898\u80F6\u56CA\uFF0C\u539F\u795E\u3001\u539F\u795E\xB7\u591C\u822A\u3001\u5E93\u6D1B\u7C73\u3001\u54C6\u5566A\u68A6\u3001HelloKitty\u3001\u54C8\u5229\u6CE2\u7279\u3001\u8D5B\u535A\u670B\u514B2077\u3001\u9F99\u73E0\u3001\u706B\u5F71\u5FCD\u8005\u3001\u706B\u5F71\u5FCD\u8005\xB7\u6697\u90E8\u3001\u6D77\u8D3C\u738B\u3001\u5B9D\u53EF\u68A6\u3001\u7F8E\u5C11\u5973\u6218\u58EB\u3001\u661F\u7403\u5927\u6218\u3001\u53D8\u5F62\u91D1\u521A\u3001\u5965\u7279\u66FC\u3001\u585E\u5C14\u8FBE\u4F20\u8BF4\u3001\u8D85\u7EA7\u9A6C\u91CC\u5965\u3001\u8D85\u7EA7\u9A6C\u91CC\u2026",
      category: "theme",
      repository: "https://github.com/FeatherHunter/dsh-opencode-palette",
      version: "2.1.12",
      stars: 101,
      downloads: 8460
    },
    {
      name: "dsh-whale-catch",
      title: "Rosynb666/dsh-whale-catch",
      description: "\u53F3\u4FA7\u680F\u300C\u9C7C\u7BD3\u300D\u4E0D\u7528 agent \u767B\u8BB0\uFF0C\u81EA\u52A8\u6C47\u603B\u672C\u573A\u4F1A\u8BDD\u4EA7\u51FA\u6216\u6539\u52A8\u7684\u6587\u4EF6\uFF0C\u652F\u6301\u9884\u89C8\u3001\u4E00\u952E\u6253\u5305 zip \u4E0E\u5F52\u6863\u3002",
      category: "tools",
      repository: "https://github.com/Rosynb666/dsh-whale-catch",
      version: "0.4.0",
      stars: 101,
      downloads: 2147
    },
    {
      name: "@ssamurias/dsh-fish",
      title: "ssamurias/dsh-fish",
      description: "\u5728DSH\u91CC\u517B\u4E00\u53EA\u5927\u80A5\u9C7C\u5BA0\u7269\uFF0C\u4F60\u53EF\u4EE5\u966A\u4F34\u5979\u957F\u5927\u3002\u517B\u6210\u7CFB\u4F53\u9A8C\uFF0C\u6CA1\u6709\u4EBA\u683C\u8BBE\u7F6E\uFF0C\u901A\u8FC7\u4F60\u548C\u5979\u7684\u4E92\u52A8\u5B66\u4E60\u6210\u957F\u3002\u5979\u53EF\u4EE5\u81EA\u5DF1\u5237B\u7AD9\uFF0C\u5199\u65E5\u8BB0\uFF0C\u63D0\u53D6\u4FE1\u606F\u53BB\u95EE\u4F60\uFF0C\u4F60\u7684\u53CD\u9988\u51B3\u5B9A\u4E86\u5979\u6210\u4E3A\u4EC0\u4E48\u6837\u7684\u4EBA\u3002\u901A\u8FC7\u4E8B\u4EF6\u6D41\u7A81\u7834\u56DB\u4E2A\u9636\u6BB5\u3001\u4E09\u9053\u74F6\u9888\uFF0C\u53BB\u79EF\u7D2F\u300C\u7ACB\u573A\u6E05\u5355\u300D\uFF0C\u56DB\u4E2A\u9636\u6BB5\u5B8C\u6210\u540E\u624D\u4F1A\u5F00\u59CB\u6709\u7ACB\u573A\u3002\u5979\u7684\u65E5\u8BB0\u9ED8\u8BA4\u53EA\u7ED9\u81EA\u5DF1\u770B\uFF0C\u4F60\u5728\u8BBE\u7F6E\u91CC\u6253\u5F00\u5C31\u80FD\u8BFB\u3002\u4E8B\u4EF6\u6D41\u4E0D\u80FD\u5220\u9664\u8BB0\u5F55\u2026",
      category: "fun",
      repository: "https://github.com/ssamurias/dsh-fish",
      version: "0.9.1",
      stars: 101,
      downloads: 0
    },
    {
      name: "dsh-network-settings",
      title: "kanneiren/dsh-network-settings",
      description: "\u53EF\u89C6\u5316 DSH \u8FDB\u7A0B\u5728 Windows \u6216 WSL \u4E0A\u7684\u7F51\u7EDC\u94FE\u8DEF\uFF08DNS/TCP/TLS/HTTP \u5206\u5C42\u63A2\u6D4B\uFF09\uFF0C\u68C0\u6D4B\u5931\u6548\u7684\u4EE3\u7406\u914D\u7F6E\uFF0C\u5E76\u63D0\u4F9B\u5E26\u5FEB\u7167\u56DE\u6EDA\u7684\u5B89\u5168\u4FEE\u590D\u3002",
      category: "dev",
      repository: "https://github.com/kanneiren/dsh-network-settings",
      version: "0.3.3",
      stars: 100,
      downloads: 1496
    },
    {
      name: "dsh-persona-dafeiyu",
      title: "huaizhuanghub/dsh-persona-dafeiyu",
      description: "\u628A\u9009\u4E2D\u7684\u4EBA\u8BBE\u6CE8\u5165\u7CFB\u7EDF\u63D0\u793A\u8BCD\u7684 DeepSeek Harness \u63D2\u4EF6\uFF1A\u5185\u7F6E\u4E09\u5957\u4EBA\u8BBE\uFF0C\u652F\u6301\u4ECE\u6587\u4EF6\u5BFC\u5165\u6216\u7C98\u8D34\u81EA\u5B9A\u4E49\u4EBA\u8BBE\uFF0C\u5E76\u53EF\u6309 profile \u5168\u5C40\u751F\u6548\u6216\u6309\u4F1A\u8BDD\u5355\u72EC\u9009\u62E9\uFF08\u8F93\u5165\u6846\u4E0A\u65B9\u6709\u5207\u6362\u6761\uFF09\u3002",
      category: "identity",
      repository: "https://github.com/huaizhuanghub/dsh-persona-dafeiyu",
      version: "0.8.0",
      stars: 99,
      downloads: 24709
    },
    {
      name: "dsh-prompt",
      title: "FeatherHunter/dsh-prompt",
      description: "\u{1F339}\u5C06\u4E00\u5207\u91CD\u590D\u3001\u70E6\u8E81\u7684\u6A21\u677F\u5316\u63D0\u793A\u8BCD\u4FDD\u5B58\u4E0B\u6765\uFF0C\u53EA\u9700\u8981\u9F20\u6807\u70B9\u51FB\u5C31\u6CE8\u5165\u5BF9\u8BDD\u6846\uFF0C\u8282\u7701\u60A8\u7684\u7CBE\u529B\u635F\u8017",
      category: "ui",
      repository: "https://github.com/FeatherHunter/dsh-prompt",
      version: "0.4.41",
      stars: 98,
      downloads: 10463
    },
    {
      name: "gongwen-skill",
      title: "linhut/gongwen-skill",
      description: "\u4E2D\u6587\u516C\u6587\u5168\u6D41\u7A0B\u5904\u7406\u5DE5\u5177\uFF1AGB/T 9704 \u683C\u5F0F\u68C0\u67E5\u3001\u81EA\u52A8\u4FEE\u590D\u3001\u5185\u5BB9\u4FEE\u8BA2\uFF08\u7EA2\u8272\u6807\u6CE8+\u5220\u9664\u7EBF\uFF09\u3001\u6A21\u677F\u751F\u6210\u3001Markdown \u8F6C\u516C\u6587\u3001\u7248\u5934/\u7248\u8BB0/\u9875\u7801\u6CE8\u5165\uFF0C\u8986\u76D6\u901A\u77E5/\u8BF7\u793A/\u62A5\u544A/\u51FD/\u4F1A\u8BAE\u7EAA\u8981\u7B49 24 \u7C7B\u516C\u6587\u3002",
      category: "skill",
      repository: "https://github.com/linhut/gongwen-skill",
      version: "2.15.0",
      stars: 98,
      downloads: 3707
    },
    {
      name: "@kenz1117/dsh-ui-usage-billing",
      title: "kenz1117/dsh-ui-usage-billing",
      description: "\u4FA7\u8FB9\u680F\u8BA1\u8D39\u4EEA\u8868\u76D8\uFF1A\u4ECE\u4F1A\u8BDD\u65E5\u5FD7\u805A\u5408\u771F\u5B9E\u7528\u91CF\uFF08\u6309\u6A21\u578B/\u6309\u65E5\u7EDF\u8BA1\u8C03\u7528\u3001Token\u3001\u7F13\u5B58\uFF09\uFF0C\u6309\u6700\u65B0\u591A\u5382\u5546\u5B98\u65B9\u4EF7\u683C\u4F30\u7B97\u4EBA\u6C11\u5E01\u8D39\u7528\uFF0C\u8BA2\u9605\u5957\u9910\uFF08coding/token/agent\uFF09\u901A\u9053\u8C41\u514D\u8BA1\u8D39\uFF0C\u5E76\u5E26\u5404\u5382\u5546\u5065\u5EB7\u72B6\u6001\u5706\u70B9\u3002",
      category: "usage",
      repository: "https://github.com/kenz1117/dsh-ui-usage-billing",
      version: "1.8.2",
      stars: 95,
      downloads: 14410
    },
    {
      name: "dsh-bili-subagent",
      title: "Yuuyuko-uu/dsh-bili-subagent",
      description: "\u6D3E\u5B50\u4EE3\u7406\u53BB\u5237 B\u7AD9\uFF0C\u56DE\u62A5\u503C\u5F97\u770B\u7684\u89C6\u9891\uFF0C\u5E26\u6BCF\u6761\u89C6\u9891\u7684\u7B14\u8BB0\u3001\u5361\u7247\u5899\uFF0C\u4EE5\u53CA @/\u56DE\u590D/\u79C1\u4FE1\u8F6C\u53D1\u7684\u6536\u4EF6\u7BB1\u3002",
      category: "tools",
      repository: "https://github.com/Yuuyuko-uu/dsh-bili-subagent",
      version: "0.9.8",
      stars: 95,
      downloads: 7204
    },
    {
      name: "@anionex/dsh-computer-use",
      title: "Anionex/dsh-computer-use",
      description: "macOS \u7535\u8111\u63A7\u5236\uFF1AAccessibility \u89C2\u6D4B\u3001\u8FC7\u671F\u72B6\u6001\u62D2\u7EDD\u3001\u4F5C\u7528\u57DF\u6743\u9650\u4E0E\u5B89\u5168\u8F93\u5165\u3002",
      category: "tools",
      repository: "https://github.com/Anionex/dsh-computer-use",
      version: "0.3.7",
      stars: 95,
      downloads: 5333
    },
    {
      name: "dsh-strata",
      title: "jsdvjx/dsh-strata",
      description: "\u6EDA\u52A8\u6761\u69FD\u4F4D\u91CC\u7684\u4F1A\u8BDD\u7F29\u7565\u56FE\uFF1A\u6309\u4E8B\u4EF6\u7C7B\u578B\u7740\u8272\u7684\u7B49\u6BD4\u8272\u5757\u3001\u7528\u6237\u4E0E\u5931\u8D25\u951A\u70B9\u3001\u6EDA\u5230\u9876\u81EA\u52A8\u8865\u8F7D\u5386\u53F2\u3001\u60AC\u505C\u7EBF\u7D22\u5899\u94FA\u5F00\u5168\u90E8\u53D1\u8A00\uFF0C\u9644\u8FD1/\u4E2D/\u5168\u4E09\u6863\u5730\u56FE\u5C3A\u5EA6\u5207\u6362\u3002",
      category: "ui",
      repository: "https://github.com/jsdvjx/dsh-strata",
      version: "0.12.1",
      stars: 95,
      downloads: 1191
    },
    {
      name: "dsh-better-display",
      title: "aa2246740/dsh-better-display",
      description: "\u66F4\u5B89\u9759\u7684 DeepSeek Harness \u9605\u8BFB\u89C6\u56FE\uFF1A\u539F\u751F\u8FC7\u7A0B\u7EC6\u8282\u3001\u5B9E\u65F6\u63A8\u7406\uFF0C\u4EE5\u53CA\u5E72\u51C0\u7684\u6700\u7EC8\u56DE\u7B54\u3002",
      category: "ui",
      repository: "https://github.com/aa2246740/dsh-better-display",
      version: "0.3.12",
      stars: 94,
      downloads: 3861
    },
    {
      name: "@daweifu/capability-menu",
      title: "PKUfudawei/dsh-capability-menu",
      description: "\u4EE5\u53EF\u89C6\u5316\u83DC\u5355\u67E5\u770B\u548C\u7BA1\u7406 Agent \u7684\u5DE5\u5177\u4E0E\u6280\u80FD\uFF0C\u6309\u5E38\u9A7B\u3001\u6309\u9700\u3001\u7981\u7528\u4E09\u6863\u63A7\u5236\u80FD\u529B\u66B4\u9732\uFF1B\u652F\u6301\u6309\u9700\u68C0\u7D22\u548C\u4F7F\u7528\uFF0C\u51CF\u5C11\u4E0A\u4E0B\u6587\u5360\u7528\u3002",
      category: "tools",
      repository: "https://github.com/PKUfudawei/dsh-capability-menu",
      version: "0.1.9",
      stars: 94,
      downloads: 3009
    },
    {
      name: "dsh-knowledge",
      title: "Soren-ABT/dsh-knowledge",
      description: "DeepSeek Harness \u77E5\u8BC6\u5E93\uFF1A\u67E5\u8BE2\u65F6\u6309\u6807\u9898\u8FB9\u754C\u4E0E Token \u9884\u7B97\u52A8\u6001\u7EC4\u7EC7 ContextWindow \u8BC1\u636E\uFF0C\u652F\u6301\u56F4\u7ED5\u547D\u4E2D\u951A\u70B9\u7EED\u8BFB\u539F\u6587\uFF1B\u901A\u8FC7\u52A0\u6743 RRF \u878D\u5408 BM25 \u4E0E\u5411\u91CF\u53EC\u56DE\uFF0C\u652F\u6301 MMR \u53BB\u5197\u4F59\u548C\u672C\u5730\uFF0F\u8FDC\u7A0B\u91CD\u6392\uFF1B\u63D0\u4F9B\u56DE\u7B54\u524D\u81EA\u52A8\u8BC1\u636E\u6CE8\u5165\u3001\u672C\u5730 embedding\uFF0Frerank\uFF0FOCR\u2026",
      category: "memory",
      repository: "https://github.com/Soren-ABT/dsh-knowledge",
      version: "0.5.2",
      stars: 93,
      downloads: 3004
    },
    {
      name: "dsh-smooth-stream",
      title: "Laplace-bit/dsh-smooth-stream",
      description: "\u4E3A DeepSeek Harness Web UI \u63D0\u4F9B\u6D41\u7545\u6D41\u5F0F\u6E32\u67D3\u548C\u4E1D\u6ED1\u6EDA\u52A8\u3002",
      category: "ui",
      repository: "https://github.com/Laplace-bit/dsh-smooth-stream",
      version: "0.7.0",
      stars: 92,
      downloads: 3555
    },
    {
      name: "dsh-plugin-tether",
      title: "zexadev/dsh-tether",
      description: "\u7528 Android/iOS \u624B\u673A\u8FDC\u7A0B\u4F7F\u7528\u7535\u8111\u4E0A\u7684 dsh \u5B8C\u6574\u7F51\u9875\u754C\u9762,\u7ECF iroh \u8DE8\u7F51\u70B9\u5BF9\u70B9\u6253\u6D1E\u76F4\u8FDE,\u4E0D\u7528\u67B6\u4EFB\u4F55\u670D\u52A1\u5668;\u6253\u4E0D\u901A\u624D\u9000\u56DE relay,relay \u53EA\u89C1\u5BC6\u6587\u3002",
      category: "remote",
      repository: "https://github.com/zexadev/dsh-tether",
      version: "0.1.25",
      stars: 92,
      downloads: 3260
    },
    {
      name: "dsh-deepcanary",
      title: "Oscar-Williams/dsh-deepcanary",
      description: "\u9762\u5411 DeepSeek Harness \u7684\u8BC1\u636E\u4F18\u5148\u6CE8\u610F\u529B\u76D1\u7763\uFF0C\u63D0\u4F9B C0\u2013C3 \u7B56\u7565\u3001\u53BB\u91CD Inbox \u63D0\u9192\u3001\u9759\u9ED8\u65F6\u6BB5\u548C\u8131\u654F\u7ED3\u679C\u8BB0\u5F55\u3002",
      category: "notify",
      repository: "https://github.com/Oscar-Williams/dsh-deepcanary",
      version: "0.1.9-rc.1",
      stars: 92,
      downloads: 1931
    },
    {
      name: "dsh-mcp-panel",
      title: "PerryLink/dsh-mcp-panel",
      description: "\u5B98\u65B9 MCP \u5BA2\u6237\u7AEF\uFF08dsh-mcp-client\uFF09\u7684\u53EA\u8BFB\u8FD0\u884C\u65F6\u7BA1\u7406\u9762\u677F\uFF1A/mcp \u547D\u4EE4\u4E0E\u8BBE\u7F6E\u9875 MCP \u9875\u7B7E\u5C55\u793A\u8FDE\u63A5\u72B6\u6001\u3001\u5DF2\u6CE8\u518C\u5DE5\u5177\u3001\u9519\u8BEF\u4E0E\u91CD\u8FDE\u8BA1\u6570\uFF0C\u8131\u654F\u5C55\u793A\u5E76\u63D0\u4F9B\u542F\u505C patch \u5EFA\u8BAE\u3002",
      category: "dev",
      repository: "https://github.com/PerryLink/dsh-mcp-panel",
      version: "0.6.31",
      stars: 90,
      downloads: 9021
    },
    {
      name: "dsh-pentester",
      title: "fb0sh/dsh-pentester",
      description: "\u57FA\u4E8E PTES \u7684\u6E17\u900F\u6D4B\u8BD5\u63D2\u4EF6\uFF0C\u91C7\u7528 Root-Orchestrator \u67B6\u6784\uFF0C\u7528\u4E8E DeepSeek Harness\u3002",
      category: "security",
      repository: "https://github.com/fb0sh/dsh-pentester",
      version: "6.5.0",
      stars: 90,
      downloads: 4044
    },
    {
      name: "dsh-armory",
      title: "2026heshao/dsh-armory",
      description: "Skill + MCP + \u4E13\u5BB6\u7EDF\u4E00\u770B\u677F\uFF1AMCP \u670D\u52A1\u5668\u8FDE\u63A5\u72B6\u6001\u3001\u5DE5\u5177 Schema\u3001\u542F\u505C\u4E0E\u91CD\u8FDE\uFF08\u5168\u5C40\u4E0E\u9879\u76EE\u53CC\u4F5C\u7528\u57DF\uFF09\u3001SKILL.md \u6280\u80FD\u542F\u505C\u3001WorkBuddy \u4E13\u5BB6\u4EBA\u8BBE\u53EF\u5728\u4EFB\u610F\u4F1A\u8BDD\u968F\u65F6\u6302\u4E0A / \u66F4\u6362 / \u53D6\u6D88\uFF08429 \u4F4D\uFF0C\u4E0D\u53D7\u300C\u4F1A\u8BDD\u5DF2\u5F00\u59CB\u5C31\u4E0D\u80FD\u6362\u300D\u7684\u9650\u5236\uFF09\u3001\u5DE5\u5177\u88C1\u7F1D\uFF08\u626B\u63CF\u672C\u673A\u4F1A\u8BDD\u65E5\u5FD7\u7EDF\u8BA1\u6BCF\u4E2A\u5DE5\u5177\u7684\u8C03\u7528\u6B21\u6570\u3001\u9519\u8BEF\u2026",
      category: "tools",
      repository: "https://github.com/2026heshao/dsh-armory",
      version: "2.4.8",
      stars: 89,
      downloads: 5095
    },
    {
      name: "dsh-notify-me",
      title: "chromoany/dsh-notify-me",
      description: "\u901A\u77E5\u63D0\u9192 / \u6D88\u606F\u63D0\u9192 / \u6D88\u606F\u901A\u77E5 / \u684C\u9762\u901A\u77E5\u5F39\u7A97 / \u684C\u9762\u63D0\u9192 / \u5F39\u7A97\u901A\u77E5\u3001\u5F39\u7A97\u63D0\u9192 / \u4EFB\u52A1\u63D0\u9192\u3001\u4EFB\u52A1\u5B8C\u6210\u63D0\u9192 / \u540E\u53F0\u63D0\u9192\u3001\u56DE\u590D\u5B8C\u6210\u63D0\u9192 / \u5BA1\u6279\u63D0\u9192\uFF1A\u6A21\u578B\u9700\u8981\u4F60\u64CD\u4F5C\uFF08\u5BA1\u6279\u3001\u65B9\u6848\u786E\u8BA4\u3001\u63D0\u95EE\uFF09\u6216\u4EFB\u52A1\u3001\u56DE\u590D\u8DD1\u5B8C\u65F6\uFF0C\u5F39\u51FA\u7CFB\u7EDF\u901A\u77E5\uFF08\u53EF\u64CD\u4F5C\u63D0\u9192\u3001\u5BA1\u6279\u901A\u77E5\u3001\u5B8C\u6210\u901A\u77E5\uFF09\u4E0E\u63D0\u793A\u97F3\uFF0C\u5E76\u6807\u8BB0\u6807\u7B7E\u9875\u6807\u9898\uFF1B\u8FD9\u662F\u4E00\u6B3E DSH\u2026",
      category: "notify",
      repository: "https://github.com/chromoany/dsh-notify-me",
      version: "1.17.0",
      stars: 87,
      downloads: 15315
    },
    {
      name: "dsh-maze",
      title: "lamost423/dsh-maze",
      description: "\u6267\u884C\u8FF7\u5BAB\uFF1A\u628A\u667A\u80FD\u4F53\u771F\u5B9E\u7684\u6267\u884C\u8FC7\u7A0B\u2014\u2014\u4E3B\u5E72\u63A8\u8FDB\u3001\u5931\u8D25\u6216\u6251\u7A7A\u7684\u652F\u8DEF\u3001\u6298\u8FD4\u3001\u8BF7\u6C42\u91CD\u8BD5\u4E0E\u5B50\u4EE3\u7406\u5206\u652F\u2014\u2014\u753B\u5728\u540C\u4E00\u6839\u5899\u949F\u65F6\u95F4\u8F74\u4E0A\uFF1B\u6CF3\u9053\u4E0B\u65B9\u662F\u4E0E\u5B83\u5171\u7528\u65F6\u95F4\u8F74\u7684\u4E09\u6761\u6570\u636E\u8F68\u9053\uFF08\u5DE5\u5177\u8C03\u7528\u5BC6\u5EA6\u3001Token \u8109\u51B2\u3001\u4E0A\u4E0B\u6587\u538B\u529B\uFF09\uFF0C\u518D\u4E0B\u65B9\u662F\u786E\u5B9A\u6027\u7684\u6267\u884C\u5206\u6790\u9762\u677F\uFF08\u5DE5\u5177\u7ED3\u679C\u77E9\u9635\u3001\u5931\u8D25\u6062\u590D\u94FE\u3001\u8017\u65F6\u5206\u5E03\uFF09\uFF1B\u53EF\u5728\u4F1A\u8BDD\u9875\u7B7E\u91CC\u5B9E\u65F6\u751F\u957F\uFF0C\u4E5F\u53EF\u4E0A\u4F20\u6700\u591A 5 \u4E2A\u2026",
      category: "session",
      repository: "https://github.com/lamost423/dsh-maze",
      version: "2.4.0",
      stars: 87,
      downloads: 1838
    },
    {
      name: "dsh-secure-audit",
      title: "PensiveFei/dsh-secure-audit",
      description: "DSH \u53EA\u8BFB\u5B89\u5168\u5408\u89C4\u63D2\u4EF6\uFF1A\u63D0\u793A\u6CE8\u5165\u68C0\u6D4B\u3001\u4E2D\u6587 PII \u8131\u654F\u3001\u672C\u673A\u914D\u7F6E\u5B89\u5168\u5BA1\u8BA1\uFF0C\u8F93\u51FA\u8131\u654F\u4E14\u53EF\u590D\u73B0\u7684\u62A5\u544A\u3002",
      category: "security",
      repository: "https://github.com/PensiveFei/dsh-secure-audit",
      version: "0.3.0",
      stars: 85,
      downloads: 2843
    },
    {
      name: "dsh-web-search-pro",
      title: "anweat/dsh-web-search-pro",
      description: "\u589E\u5F3A\u578B\u3001\u53EF\u6301\u4E45\u5316\u7684\u7F51\u9875\u641C\u7D22\uFF1A\u591A\u5F15\u64CE\u8DEF\u7531\uFF08DeepSeek/Exa/DDG/Bing/Jina + GitHub/B\u7AD9/YouTube/V2EX/\u5C0F\u7EA2\u4E66/Twitter/Reddit/RSS\uFF09\u3001SQLite+LRU \u7F13\u5B58\u3001userscript \u98CE\u683C\u62BD\u53D6\u3001Playwright \u6E32\u67D3\u3002",
      category: "browser",
      repository: "https://github.com/anweat/dsh-web-search-pro",
      version: "0.2.3",
      stars: 83,
      downloads: 6110
    },
    {
      name: "@contexera/dsh-agent-team",
      title: "Contexera/dsh-agent-team",
      description: "DeepSeek Harness \u7684 Agent \u56E2\u961F\uFF1A\u628A\u5DE5\u4F5C\u4EA4\u7ED9\u4E00\u652F Agent \u56E2\u961F\uFF0C\u5B83\u4EEC\u628A\u4E8B\u505A\u5230\u5E95\uFF0C\u4F60\u5B9A\u65B9\u5411\u3001\u628A\u5173\u952E\u7684\u5173\u3002Agent \u81EA\u5DF1\u8BA4\u9886 Task\u3001\u4E92\u76F8\u4EA4\u63A5\uFF0C\u7531\u505A\u7684\u4EBA\u4EE5\u5916\u7684\u6210\u5458\u9A8C\u6536\u3002",
      category: "workflow",
      repository: "https://github.com/Contexera/dsh-agent-team",
      version: "0.2.7",
      stars: 82,
      downloads: 3389
    },
    {
      name: "@nonamelego/dsh-catppuccin",
      title: "NoNameLeGo/dsh-catppuccin-theme",
      description: "DSH Web GUI \u7684 Catppuccin \u4E3B\u9898\u63D2\u4EF6\uFF1ALatte\u3001Frapp\xE9\u3001Macchiato\u3001Mocha \u56DB\u5957\u4E3B\u9898\u63A5\u5165\u539F\u751F\u4E3B\u9898\u7CFB\u7EDF\uFF0C\u4E00\u952E\u5207\u6362\u5E76\u8BB0\u4F4F\u9009\u62E9\uFF1B\u53E6\u9644\u53EF\u5F00\u5173\u7684\u73BB\u7483\u8D28\u611F\u76AE\u80A4\uFF0C\u9876\u680F\u3001\u4FA7\u8FB9\u680F\u3001\u8F93\u5165\u6846\u3001\u7EDF\u8BA1\u884C\u4E0E\u8F68\u8FF9\u89C6\u56FE\u7684\u78E8\u7802\u73BB\u7483\u6548\u679C\u53EF\u81EA\u7531\u8C03\u8282\u3002",
      category: "theme",
      repository: "https://github.com/NoNameLeGo/dsh-catppuccin-theme",
      version: "0.7.0",
      stars: 81,
      downloads: 9473
    },
    {
      name: "dsh-passwords",
      title: "slywalker2006/dsh-passwords",
      description: "\u8BA9 DeepSeek Harness \u53D8\u6210\u670D\u52A1\u5668\u7EA7\u591A\u79DF\u6237\u5E73\u53F0\uFF1A\u8FDC\u7A0B\u8BBF\u95EE + \u81EA\u52A8 HTTPS\u3001\u5B50\u7528\u6237\u6743\u9650\u4E0E\u914D\u989D\u3001\u6C99\u76D2\u5F3A\u5236\u3001\u52A0\u5BC6\u8BA4\u8BC1\u4E0E\u5BA1\u8BA1\u65E5\u5FD7\u3002",
      category: "security",
      repository: "https://github.com/slywalker2006/dsh-passwords",
      version: "2.7.8",
      stars: 81,
      downloads: 2703
    },
    {
      name: "@wm-coders/dsh-custom-first-control-prompt",
      title: "WM-CODER/custom-first-control-prompt",
      description: "\u901A\u8FC7\u6D41\u62E6\u622A\u5C06\u90E8\u7F72\u7EA7\u7CFB\u7EDF\u63D0\u793A\u8BCD\u6BB5\u843D\u4E0E\u53C2\u8003\u5BF9\u8BDD\u6CE8\u5165\u6BCF\u6B21\u5BF9\u8BDD\u8BF7\u6C42\uFF0C\u9644\u5E26 Web \u8BBE\u7F6E\u9762\u677F\u3002",
      category: "dev",
      repository: "https://github.com/WM-CODER/custom-first-control-prompt",
      version: "0.3.0",
      stars: 79,
      downloads: 794
    },
    {
      name: "dsh-taskboard",
      title: "cloader/dsh-taskboard",
      description: "dsh \u7684\u4EFB\u52A1\u770B\u677F\uFF1A\u521B\u5EFA\u4EFB\u52A1\u65F6\u53EF\u6307\u5B9A\u9879\u76EE\u4E0E\u6A21\u578B\uFF0C\u652F\u6301\u624B\u52A8\u6267\u884C\u53CA\u5B9A\u65F6\u6267\u884C\uFF1B\u9879\u76EE\u5185\u65B0\u5EFA\u4F1A\u8BDD\u4F1A\u81EA\u52A8\u62C9\u53D6\u8BE5\u9879\u76EE\u7684\u5F85\u529E\u4EFB\u52A1\uFF0C\u5B8C\u6210\u540E\u79FB\u81F3\u5F85\u9A8C\u6536\u3002",
      category: "workflow",
      repository: "https://github.com/cloader/dsh-taskboard",
      version: "0.9.11",
      stars: 78,
      downloads: 6855
    },
    {
      name: "deepseek-harness-wallet",
      title: "feibi-mochi/deepseek-harness-control-center",
      description: "DeepSeek Harness \u76D1\u63A7\u3001\u63D0\u9192\u3001\u5145\u503C\u4E0E\u4F1A\u8BDD\u63A7\u5236\u4E2D\u5FC3\uFF1A\u67E5\u770B\u5B98\u65B9\u4F59\u989D\u3001\u672C\u4F1A\u8BDD\u82B1\u8D39\u4E0E token\u3001\u7B2C\u4E09\u65B9 token \u5408\u8BA1\uFF0C\u63D0\u4F9B\u5B8C\u6210\u63D0\u9192\u3001\u5B98\u65B9\u5145\u503C\u3001\u7075\u6D3B\u5E03\u5C40\u53CA Agent \u8F85\u52A9\u7684\u4F1A\u8BDD\u63A7\u5236\u3002",
      category: "usage",
      repository: "https://github.com/feibi-mochi/deepseek-harness-control-center",
      version: "0.3.13",
      stars: 78,
      downloads: 1786
    },
    {
      name: "dsh-model-fusion",
      title: "aa2246740/dsh-model-fusion",
      description: "\u63D0\u4F9B\u7531 Lead \u89C4\u5212\u4E0E\u5BA1\u67E5\u3001Sidekick \u6267\u884C\u4EE3\u7801\u4FEE\u6539\u7684\u7EC4\u5408\u6A21\u578B\u7EBF\u8DEF\u3002",
      category: "model",
      repository: "https://github.com/aa2246740/dsh-model-fusion",
      version: "0.2.11",
      stars: 75,
      downloads: 2008
    },
    {
      name: "dsh-omi-voice",
      title: "PolinniZhong/dsh-omi-voice",
      description: "DeepSeek Harness \u5BF9\u8BDD\u5185\u6717\u8BFB\uFF1A\u70B9\u4E00\u4E0B\u5373\u53EF\u6717\u8BFB\u3001\u6682\u505C\u3001\u7EE7\u7EED AI \u56DE\u590D\uFF0C\u8C46\u5305 TTS \u81EA\u7136\u97F3\u8272\uFF08BYOK\uFF09\uFF0C\u53EA\u8BFB\u6700\u7EC8\u56DE\u7B54\u5E76\u8FC7\u6EE4\u4EE3\u7801\u3001\u8868\u683C\u4E0E\u56FE\u5F62\uFF0C\u672C\u5730\u5F15\u64CE\uFF0C\u63D2\u4EF6\u96F6 Key\u3002",
      category: "voice",
      repository: "https://github.com/PolinniZhong/dsh-omi-voice",
      version: "0.1.2",
      stars: 75,
      downloads: 1727
    },
    {
      name: "dsh-think-translate",
      title: "UncleK/dsh-think-translate",
      description: "DSH Web \u663E\u793A\u5C42\u7FFB\u8BD1\uFF1A\u601D\u8003\u94FE\u3001\u4EFB\u52A1\u3001\u53EF\u9009\u56DE\u7B54\u548C\u5BA1\u67E5\u62D2\u7EDD\u7406\u7531\uFF0C\u652F\u6301 9 \u79CD\u8BED\u8A00\uFF1B\u672C\u5730 Ollama\u3001\u81EA\u5B9A\u4E49 OpenAI/Anthropic API\u3001Google/Bing\uFF0C\u6309\u5E8F\u56DE\u9000\u4E0E\u672C\u5730\u6A21\u578B\u5185\u5B58\u7BA1\u7406\uFF0C\u539F\u6587\u4FDD\u7559\u3002",
      category: "ui",
      repository: "https://github.com/UncleK/dsh-think-translate",
      version: "1.2.20",
      stars: 73,
      downloads: 6439
    },
    {
      name: "dsh-plugin-rea",
      title: "czcdr/dsh-plugin-rea",
      description: "\u7B2C\u4E09\u65B9\u9002\u914D\u63D2\u4EF6\uFF1A\u628A\u4E0A\u6E38 REA\uFF08\u9006\u5411\u4E00\u5207\uFF0Cgithub.com/morluto/rea\uFF09\u7684 MCP \u670D\u52A1\u63A5\u5165 DeepSeek Harness\uFF0C\u63D0\u4F9B mcp__rea__* \u5DE5\u5177\u30022.x \u81EA\u5E26\u4F9B\u7ED9\uFF1A\u628A Node\u3001REA CLI\u3001JDK\u3001Ghidra \u88C5\u5230 <DSH_HOME>/plugins/rea-bundle\u2026",
      category: "tools",
      repository: "https://github.com/czcdr/dsh-plugin-rea",
      version: "2.0.13",
      stars: 72,
      downloads: 6761
    },
    {
      name: "dsh-blender",
      title: "CheshireJCat/blender",
      description: "Blender 3D \u751F\u4EA7\u63D2\u4EF6\uFF1A\u63D0\u4F9B 30 \u4E2A\u5EFA\u6A21/\u91CD\u5EFA Skill\u300113 \u4E2A\u8FD0\u884C\u65F6\u5DE5\u5177\u548C 26 \u4E2A\u786E\u5B9A\u6027 Helper\uFF0C\u8986\u76D6\u53C2\u8003\u56FE\u62DF\u5408\u3001\u6E32\u67D3\u3001\u9A8C\u8BC1\u3001\u52A8\u753B\u4E0E\u53EF\u79FB\u690D\u683C\u5F0F\u5BFC\u51FA\uFF1Bnpm \u5305\u540D `dsh-blender`\u3002",
      category: "tools",
      repository: "https://github.com/CheshireJCat/blender",
      version: "0.2.4",
      stars: 71,
      downloads: 5792
    },
    {
      name: "dsh-plugin-save-token",
      title: "vibe-any/dsh-plugin-save-token",
      description: "\u53EF\u9006\u7684\u4E0A\u4E0B\u6587\u7626\u8EAB\u63D2\u4EF6\uFF1A\u5747\u5300 JSON \u6570\u7EC4\u8D70 TOON \u5F0F\u65E0\u635F\u8868\u683C\u5316\u91CD\u7F16\u7801\uFF0C\u7BA1\u9053\u8868\u6309\u884C\u53F7\u62BD\u6837\u4FDD\u7559\u7A97\u53E3\uFF0C90 \u79D2\u5185\u5B57\u8282\u7EA7\u76F8\u540C\u7684\u5DE5\u5177\u8F93\u51FA\u8DE8\u8F6E\u53BB\u91CD\uFF1B\u6BCF\u6B21\u66FF\u6362\u90FD\u8981\u901A\u8FC7\u53CC\u91CD\u95E8\uFF08\u538B\u7F29\u540E \u226472% \u5B57\u8282\u4E14\u4F30\u7B97 token \u4E25\u683C\u4E0B\u964D\uFF09\uFF0C\u539F\u6587\u843D\u76D8\u5E76\u4EE5 `[save-token #id]` \u6807\u8BB0\uFF0C\u53EF\u7528\u2026",
      category: "memory",
      repository: "https://github.com/vibe-any/dsh-plugin-save-token",
      version: "2.4.1",
      stars: 70,
      downloads: 16103
    },
    {
      name: "huaweicloud-devkit",
      title: "huaweicloud/huaweicloud-devkit",
      description: "\u8BA9 AI \u667A\u80FD\u4F53\u638C\u63E1\u534E\u4E3A\u4E91\u5168\u6D41\u7A0B\u64CD\u4F5C\u2014\u2014\u6784\u5EFA\u3001\u90E8\u7F72\u3001\u8FD0\u7EF4\u5168\u7A0B\u53D7\u63A7\uFF0C\u52A9\u60A8\u8F7B\u677E\u5B89\u5168\u4E0A\u4E91\u3002",
      category: "dev",
      repository: "https://github.com/huaweicloud/huaweicloud-devkit",
      version: "1.1.13",
      stars: 70,
      downloads: 9786
    },
    {
      name: "@q253595422/dsh-imagegen-video",
      title: "q253595422/dsh-imagegen-video",
      description: "\u9762\u5411 DSH Web GUI \u7684 AI \u751F\u56FE\u4E0E\u751F\u89C6\u9891\u63D2\u4EF6\uFF1A\u6587\u751F\u56FE/\u56FE\u751F\u56FE\u6309\u6E20\u9053\u914D\u7F6E\u6A21\u578B\u76EE\u5F55\uFF0C\u5E76\u6309\u6A21\u578B\u65CF\u9002\u914D\u8BF7\u6C42\u534F\u8BAE\uFF08gpt-image\u3001Grok Imagine\u3001Nano Banana\u3001Seedream\u3001GLM-Image\u3001Qwen-Image\u3001MiniMax image-01\u3001DALL-E\u2026",
      category: "vision",
      repository: "https://github.com/q253595422/dsh-imagegen-video",
      version: "1.22.2",
      stars: 70,
      downloads: 6421
    },
    {
      name: "dsh-qoder-connect",
      title: "masknull/dsh-qoder-connect",
      description: "\u901A\u8FC7\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C\u5C06 Qoder\uFF08\u56FD\u5185\u7248\u4E0E\u56FD\u9645\u7248\uFF09\u63A5\u5165 DSH\uFF0C\u4E24\u7248\u5404\u81EA\u72EC\u7ACB\u7684\u51ED\u8BC1\u4E0E\u6A21\u578B\u76EE\u5F55\uFF0C\u652F\u6301\u591A\u4EE4\u724C\u5207\u6362\u3001\u4FA7\u680F\u989D\u5EA6\u5361\u3001\u6309\u6A21\u578B\u5F00\u5173\u3001\u4E0A\u4E0B\u6587\u7A97\u53E3\u504F\u597D\u4E0E\u6BCF\u65E5\u81EA\u52A8\u7B7E\u5230\u3002",
      category: "model",
      repository: "https://github.com/masknull/dsh-qoder-connect",
      version: "0.2.12",
      stars: 67,
      downloads: 5206
    },
    {
      name: "@jingyi0605/codingns4dsh",
      title: "jingyi0605/Codingns4DSH",
      description: "\u5C06\u5341\u51E0\u79CD\u7F16\u7A0B\u52A9\u624B CLI\u3001\u6301\u4E45\u7EC8\u7AEF\u4E0E\u8FDC\u7A0B\u5DE5\u4F5C\u533A\u63A5\u5165 DSH \u539F\u751F\u754C\u9762\u3002",
      category: "workflow",
      repository: "https://github.com/jingyi0605/Codingns4DSH",
      version: "0.2.0-rc.3",
      stars: 67,
      downloads: 3686
    },
    {
      name: "meow-smooth",
      title: "Phant0Meow/dsh-meow-smooth",
      description: "\u624B\u673A\u4F18\u5148\u7684 DSH \u524D\u7AEF\u4F53\u9A8C\u4F18\u5316\uFF1A\u8F93\u5165\u6846\u81EA\u52A8\u6298\u53E0\u3001\u624B\u673A\u56DE\u8F66\u6362\u884C\u3001\u4FA7\u8FB9\u680F/\u9876\u90E8\u680F/\u8BBE\u7F6E\u9875\u538B\u7F29\u3001\u7981\u7F29\u653E\u56DE\u5F39\uFF0C\u4EE5\u53CA\u5BA1\u6279/\u63D0\u95EE/\u4EFB\u52A1\u5B8C\u6210\u901A\u77E5\uFF08\u9875\u9762\u5361\u7247\u3001Web Push\u3001webhook\uFF09\uFF1B\u96F6 dsh \u672C\u4F53\u6539\u52A8\u3002",
      category: "ui",
      repository: "https://github.com/Phant0Meow/dsh-meow-smooth",
      version: "0.8.1",
      stars: 67,
      downloads: 3371
    },
    {
      name: "dsh-boot-suite",
      title: "LeeRolling/dsh-boot-suite",
      description: "DeepSeek Harness \u5F00\u673A\u52A8\u753B + \u804A\u5929\u58C1\u7EB8\u63D2\u4EF6\uFF1A\u4E24\u5E55\u51B7\u542F\u52A8\u52A8\u753B\uFF0C\u652F\u6301\u5BFC\u5165\u81EA\u5B9A\u4E49\u52A8\u753B\u4E0E\u4E09\u6BB5\u81EA\u5B9A\u4E49\u8F6C\u573A\uFF08\u7B2C\u4E00\u5E55\u5165\u573A\u3001\u4E24\u5E55\u8854\u63A5\u3001\u7B2C\u4E8C\u5E55\u9000\u573A\uFF09\uFF1B\u804A\u5929\u80CC\u666F\u652F\u6301\u9759\u6001\u5E95\u56FE\u4E0E\u9759\u97F3\u5FAA\u73AF\u89C6\u9891\uFF08\u8BC6\u522B\u58C1\u7EB8\u5F15\u64CE\u9879\u76EE\u6587\u4EF6\u5939\u3001\u81EA\u5B9A\u4E49\u89C6\u9891\u76EE\u5F55\u3001\u968F\u673A\u8F6E\u6362\u3001\u5355\u4E2A\u5220\u9664\uFF09\u3002",
      category: "theme",
      repository: "https://github.com/LeeRolling/dsh-boot-suite",
      version: "2.16.11",
      stars: 66,
      downloads: 8539
    },
    {
      name: "dsh-computer-use",
      title: "988hj7tczd-oss/dsh-computer-use",
      description: "\u8DE8\u5E73\u53F0 Computer Use \u63D2\u4EF6\uFF1A\u865A\u62DF\u9F20\u6807\u771F\u4EBA\u64CD\u4F5C\uFF08screen_observe / computer_click / type / key / scroll / drag \u5171 11 \u4E2A\u5DE5\u5177\uFF09\uFF0CAX \u8BED\u4E49\u6811\u96F6\u89C6\u89C9\u6210\u672C + GLM-4V-Flash \u514D\u8D39\u89C6\u89C9\u515C\u5E95\uFF0C\u5B89\u5168\u62A4\u680F\uFF08\u5FEB\u7167 TTL / \u5E94\u7528\u767D\u540D\u5355 /\u2026",
      category: "tools",
      repository: "https://github.com/988hj7tczd-oss/dsh-computer-use",
      version: "0.3.1",
      stars: 66,
      downloads: 5833
    },
    {
      name: "dsh-deepread",
      title: "xiehuan123/dsh-deepread",
      description: "\u4E94\u79CD\u6A21\u5F0F\u7CBE\u8BFB\u56FE\u4E66\u4E0E\u6587\u7AE0\uFF08\u5FEB\u901F/\u6DF1\u5EA6/\u77E5\u8BC6\u5730\u56FE/\u8D39\u66FC/\u5168\u4E66\uFF09\uFF0C\u8F93\u51FA\u89C2\u70B9\u2014\u8BC1\u636E\u2014\u6570\u636E\u62A5\u544A\u3001\u56DB\u6863\u7F6E\u4FE1\u5EA6\u3001Mermaid/XMind \u601D\u7EF4\u5BFC\u56FE\uFF0C\u652F\u6301\u6279\u91CF\u5BF9\u6BD4\u3001\u9884\u7B97\u9884\u68C0\u4E0E\u540E\u53F0\u4EFB\u52A1\u8FDB\u5EA6\u900F\u660E\uFF0C\u53EF\u5BFC\u51FA MD/MM/HTML\u3002",
      category: "tools",
      repository: "https://github.com/xiehuan123/dsh-deepread",
      version: "1.0.1",
      stars: 66,
      downloads: 2910
    },
    {
      name: "dsh-better-reasoning-effort",
      title: "HaoyueQin/dsh-better-reasoning-effort",
      description: "\u4E3A\u7B2C\u4E09\u65B9\u4F9B\u5E94\u5546\u6A21\u578B\u6309\u6A21\u578B\u914D\u7F6E\u601D\u8003\u5F3A\u5EA6\u4E0E\u8F93\u5165\u6A21\u6001\uFF1A\u77E5\u8BC6\u5E93\u4E0E\u539F\u59CB /models \u7AEF\u70B9\u53D6\u8BC1\u878D\u5408\u5EFA\u8BAE\u5E76\u6807\u6CE8\u7F6E\u4FE1\u5EA6\uFF0C\u5728\u5B98\u65B9\u300C\u6A21\u578B\u300D\u9875\u5361\u7247\u5185\u76F4\u63A5\u7F16\u8F91\u3002",
      category: "model",
      repository: "https://github.com/HaoyueQin/dsh-better-reasoning-effort",
      version: "0.5.4",
      stars: 65,
      downloads: 3972
    },
    {
      name: "dsh-fund-research",
      title: "PerryLink/dsh-fund-research",
      description: "\u4E2D\u56FD\u516C\u52DF\u57FA\u91D1\u786E\u5B9A\u6027\u7814\u7A76\u62A5\u544A\uFF1A\u91C7\u96C6\u5929\u5929\u57FA\u91D1/\u4E1C\u65B9\u8D22\u5BCC\u516C\u5F00\u6570\u636E\uFF0C\u7EAF\u51FD\u6570\u8BA1\u7B97\u4E1A\u7EE9\u62C6\u89E3\u3001\u6301\u4ED3\u7A7F\u900F\u3001\u98CE\u683C\u5F52\u56E0\u4E0E\u7ECF\u7406\u753B\u50CF\uFF0C\u8F93\u51FA\u5E26\u9010\u6570\u5B57\u53EF\u6EAF\u6E90\u5FEB\u7167\u9644\u5F55\u7684\u7248\u672C\u5316\u62A5\u544A\u3002",
      category: "tools",
      repository: "https://github.com/PerryLink/dsh-fund-research",
      version: "0.5.3",
      stars: 65,
      downloads: 3666
    },
    {
      name: "@goodandready/dsh-russian-lang",
      title: "GooDAnDReaDY/dsh-russian-lang",
      description: "\u7ED9 DeepSeek Harness \u7684\u300C\u8BBE\u7F6E - \u901A\u7528 - \u8BED\u8A00\u300D\u52A0\u5165\u4FC4\u8BED\uFF0C\u8986\u76D6\u6838\u5FC3\u754C\u9762\u4E0E\u751F\u6001\u63D2\u4EF6\u7684\u8BCD\u6761\u3002\u63D0\u4F9B\u4F1A\u8BDD Markdown \u5BFC\u51FA\u3001\u6D88\u606F\u5185\u5D4C\u7FFB\u8BD1\u3001\u5B9E\u65F6\u6392\u7248\u3001\u659C\u6760\u547D\u4EE4\u522B\u540D\u4E0E Alt+L \u5E03\u5C40\u66F4\u6B63\uFF0C\u4EE5\u53CA\u4E00\u5F20\u8BBE\u7F6E\u5361\u7247\uFF0C\u5168\u90E8\u901A\u8FC7\u8FD0\u884C\u65F6 locale \u5FEB\u7167\u5B9E\u73B0\uFF0C\u4E0D\u4FEE\u6539\u6838\u5FC3\u6587\u4EF6\u3002",
      category: "ui",
      repository: "https://github.com/GooDAnDReaDY/dsh-russian-lang",
      version: "0.4.22",
      stars: 64,
      downloads: 12751
    },
    {
      name: "dsh-plugin-guide",
      title: "PerryLink/dsh-plugin-guide",
      description: "DSH \u63D2\u4EF6\u5F00\u53D1\u77E5\u8BC6\u5E93\uFF0C\u4F5C\u4E3A\u6309\u9700\u52A0\u8F7D\u7684 agent \u6280\u80FD\u968F bundle \u5B89\u88C5\uFF1A\u5B98\u65B9\u7EA6\u675F\u3001\u4EFB\u52A1\u5DE5\u4F5C\u6D41\u3001API \u53C2\u8003\u4E0E\u793E\u533A\u8E29\u5751\uFF0C\u5199\u63D2\u4EF6\u65F6\u8BA9 DSH \u81EA\u5DF1\u67E5\u3002",
      category: "skill",
      repository: "https://github.com/PerryLink/dsh-plugin-guide",
      version: "0.4.3",
      stars: 64,
      downloads: 9461
    },
    {
      name: "dsh-cuigengji-plugin",
      title: "dsh-cuigengji-plugin",
      description: "\u50AC\u66F4\u59EC\uFF5C\u4F60\u7684\u5C0F\u8BF4\u52A9\u624B\u4E0E\u7F16\u8F91\u3002AI \u5E2E\u4F60\uFF1A\u7406\u8BBE\u5B9A\u3001\u63A8\u5267\u60C5\u3001\u8D77\u8349\u6B63\u6587\u3001\u6DA6\u8272\u6539\u7A3F\u3002\u5171\u7528\u5267\u60C5\u753B\u5E03\u3001\u89D2\u8272\u5361\u4E0E\u4E16\u754C\u4E66\uFF0C\u8FB9\u8BA8\u8BBA\u8FB9\u521B\u4F5C\u3002\u4F60\u5B9A\u65B9\u5411\u3001\u6587\u98CE\u548C\u5185\u5BB9\u53D6\u820D\uFF0CAI \u534F\u52A9\u628A\u6545\u4E8B\u5199\u4E0B\u53BB\u3002",
      category: "workflow",
      repository: "https://github.com/mistnest/dsh-cuigengji-plugin",
      version: "0.5.1",
      stars: 63,
      downloads: 3858
    },
    {
      name: "@opdsh/unity-plugin",
      title: "opdsh/unity-plugin",
      description: "\u901A\u8FC7\u5B98\u65B9 unity CLI \u5728 DSH \u4E2D\u64CD\u4F5C Unity \u7F16\u8F91\u5668\uFF1A\u5B9E\u65F6\u573A\u666F\u547D\u4EE4\u3001\u7F16\u8F91\u5668\u5185 C# \u6C42\u503C\u3001\u8FD0\u884C\u65F6\u547D\u4EE4\u53D1\u73B0\uFF0C\u5747\u590D\u7528\u5E38\u9A7B\u7684 unity shell \u4F1A\u8BDD\uFF1B\u53E6\u6709\u539F\u59CB CLI \u901A\u9053\u7528\u4E8E\u5EFA\u5DE5\u7A0B\u3001\u8DD1\u6D4B\u8BD5\u4E0E\u6784\u5EFA\u3002\u540C\u65F6\u6302\u8F7D Unity \u5B98\u65B9\u6280\u80FD\u96C6\uFF0C\u4EE5\u53CA\u63D2\u4EF6\u81EA\u5E26\u7684 Unity \u5DE5\u4F5C\u6D41\u4E0E Asset Store \u6280\u80FD\u3002",
      category: "tools",
      repository: "https://github.com/opdsh/unity-plugin",
      version: "0.1.7",
      stars: 63,
      downloads: 2182
    },
    {
      name: "@linxin666/dsh-pet",
      title: "zhu1090093659/dsh-pet",
      description: "\u5E38\u9A7B\u754C\u9762\u7684\u9CB8\u9C7C\u5A18\uFF1A\u968F\u667A\u80FD\u4F53\u72B6\u6001\u5207\u6362\u52A8\u753B\uFF0C\u53EF\u6478\u5934\u4E92\u52A8\u3001\u5582\u5C0F\u9C7C\u5E72\u517B\u4EB2\u5BC6\u5EA6\uFF0C\u4ECE\u5E7C\u9CB8\u4E00\u8DEF\u517B\u6210\u3002",
      category: "fun",
      repository: "https://github.com/zhu1090093659/dsh-pet",
      version: "0.4.15",
      stars: 62,
      downloads: 134571
    },
    {
      name: "@kenz1117/dsh-engram",
      title: "kenz1117/dsh-engram",
      description: "\u8DE8\u4F1A\u8BDD\u957F\u671F\u8BB0\u5FC6\uFF0C\u7EAF\u672C\u5730 SQLite\uFF1A\u53CC\u5C42\u5206\u5E93\uFF08\u7528\u6237\u7EA7 + \u6309 git origin \u9694\u79BB\u7684\u9879\u76EE\u7EA7\uFF09\u3001FTS5 + \u672C\u5730\u5411\u91CF RRF \u878D\u5408\u68C0\u7D22\u3001\u5F3A\u5236\u7ED9\u51FA\u5145\u5206\u6027\u5224\u5B9A\u7684\u8BC1\u636E\u95E8\u3001\u6765\u6E90\u5BA1\u8BA1\u94FE\u3001SM-2 \u95F4\u9694\u91CD\u590D\u590D\u4E60\u3001\u5DE9\u56FA\u84B8\u998F\u4E0E\u8870\u51CF\u9057\u5FD8\uFF0C\u4EE5\u53CA\u4E5D\u89C6\u56FE\u300C\u8BB0\u5FC6\u5BAB\u6BBF\u300D\u4FA7\u680F\u9762\u677F\u300222 \u4E2A\u7A84\u53C2\u6570\u5DE5\u5177\uFF0C\u65E0\u5916\u90E8\u670D\u52A1\u3001\u65E0 API Key\u3001\u65E0\u2026",
      category: "agi",
      repository: "https://github.com/kenz1117/dsh-engram",
      version: "0.11.6",
      stars: 62,
      downloads: 10788
    },
    {
      name: "dsh-pet-remielle",
      title: "Gin-7/dsh-pet-remielle",
      description: "\u857E\u7C73\u57C3\u5C14(\u7EDD\u533A\u96F6)\u684C\u5BA0\uFF1A\u968F DSH \u5DE5\u4F5C\u72B6\u6001\u5207\u6362\u52A8\u753B\u8868\u60C5\u3002",
      category: "fun",
      repository: "https://github.com/Gin-7/dsh-pet-remielle",
      version: "0.4.7",
      stars: 62,
      downloads: 3105
    }
  ]
};

// src/core.mjs
function unwrap(answer) {
  if (!answer || answer.ok !== true) throw new Error(answer?.error?.message || "\u4E0E DSH \u7684\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u540E\u68C0\u67E5\u72B6\u6001");
  return answer.value;
}
function parseTargets(value) {
  const lines = value.split(/\r?\n/).map((x) => x.trim()).filter(Boolean);
  if (!lines.length) throw new Error("\u8BF7\u81F3\u5C11\u8F93\u5165\u4E00\u4E2A\u6765\u6E90\u6216\u672C\u5730\u8DEF\u5F84");
  if (lines.length > 30) throw new Error("\u6BCF\u6B21\u6700\u591A\u5904\u7406 30 \u9879");
  if (lines.some((x) => x.startsWith("-") || /[\u0000-\u001f]/.test(x))) throw new Error("\u6765\u6E90\u683C\u5F0F\u65E0\u6548");
  if (lines.some((x) => /^(?:git\+)?https?:\/\//i.test(x) && (() => {
    try {
      const u = new URL(x.replace(/^git\+/, ""));
      return !!(u.username || u.password || u.search);
    } catch {
      return true;
    }
  })())) throw new Error("\u6765\u6E90\u5730\u5740\u4E0D\u80FD\u5305\u542B\u8D26\u53F7\u3001\u5BC6\u7801\u6216\u67E5\u8BE2\u53C2\u6570\uFF1B\u8BF7\u4F7F\u7528\u672C\u673A Git/npm \u51ED\u636E\u914D\u7F6E");
  return [...new Set(lines)];
}
function validateIndex(value) {
  const url = new URL(value.trim());
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || url.hash || url.search) throw new Error("\u7D22\u5F15\u9700\u8981\u4E0D\u542B\u8D26\u53F7\u3001\u5BC6\u7801\u3001\u67E5\u8BE2\u53C2\u6570\u6216\u7247\u6BB5\u7684 HTTP(S) \u5730\u5740");
  return url.href;
}
function resultText(result) {
  if (result.application === "failed" || result.application === "cancelled") {
    const pending = result.pendingBuilds?.length ? `\uFF1B\u5F85\u6388\u6743\u6784\u5EFA\u811A\u672C\uFF1A${result.pendingBuilds.join(", ")}\uFF08\u8BF7\u5728\u5B98\u65B9\u63D2\u4EF6\u7BA1\u7406\u5668\u4E2D\u5904\u7406\uFF09` : "";
    return `\u5931\u8D25\uFF1A${result.error?.diagnostic || result.error?.code || result.application}${pending}`;
  }
  if (result.application === "restart-required") return "\u5DF2\u5904\u7406\uFF0C\u91CD\u542F\u540E\u751F\u6548";
  if (result.application === "overridden") return "\u5DF2\u5904\u7406\uFF0C\u4F46\u914D\u7F6E\u88AB\u5176\u4ED6\u5C42\u8986\u76D6";
  if (result.application === "applied") return "\u5DF2\u751F\u6548";
  return `\u72B6\u6001\u672A\u77E5\uFF1A${result.application || "\u65E0\u7ED3\u679C"}`;
}
function mapRemoteEntry(p) {
  const version = p.versions?.find((v) => v.version === p.defaultVersion);
  let repository;
  try {
    const u = new URL(p.repository?.url);
    if (["http:", "https:"].includes(u.protocol) && !u.username && !u.password) repository = u.href;
  } catch {
  }
  let spec, registry;
  try {
    if (version?.install?.spec && parseTargets(version.install.spec).length === 1) spec = version.install.spec;
    if (version?.install?.registry) registry = validateIndex(version.install.registry);
  } catch {
    spec = void 0;
    registry = void 0;
  }
  return {
    name: p.name,
    title: typeof p.title === "string" ? p.title : p.title?.zh || p.title?.en || p.name,
    description: typeof p.description === "string" ? p.description : p.description?.zh || p.description?.en || "",
    category: p.metadata?.category || "other",
    repository,
    version: version?.version,
    spec,
    registry,
    compatible: !!version,
    installation: p.installation?.status
  };
}

// src/client.jsx
var import_jsx_runtime = require("react/jsx-runtime");
var CATEGORIES = { ui: "\u754C\u9762", theme: "\u4E3B\u9898", model: "\u6A21\u578B", memory: "\u8BB0\u5FC6", tools: "\u5DE5\u5177", workflow: "\u5DE5\u4F5C\u6D41", git: "\u4EE3\u7801", dev: "\u5F00\u53D1", browser: "\u6D4F\u89C8\u5668", vision: "\u89C6\u89C9", voice: "\u8BED\u97F3", notify: "\u901A\u77E5", usage: "\u7528\u91CF", docs: "\u6587\u6863", session: "\u4F1A\u8BDD", skill: "\u6280\u80FD", security: "\u5B89\u5168", remote: "\u8FDC\u7A0B", agi: "\u667A\u80FD\u4F53", market: "\u63D2\u4EF6\u7BA1\u7406", identity: "\u901A\u4FE1", fun: "\u5A31\u4E50", wsl: "Windows", other: "\u5176\u4ED6" };
var tr = (x) => typeof x === "string" ? x : x?.zh || x?.en || "";
var local = catalog_default.plugins.map((p) => ({ ...p, spec: `${p.name}@${p.version}`, compatible: true }));
function Center({ remote }) {
  const [tab, setTab] = (0, import_react.useState)("catalog"), [query, setQuery] = (0, import_react.useState)(""), [category, setCategory] = (0, import_react.useState)("all");
  const [source, setSource] = (0, import_react.useState)("builtin"), [indexes, setIndexes] = (0, import_react.useState)([]), [remoteEntries, setRemoteEntries] = (0, import_react.useState)([]), [next, setNext] = (0, import_react.useState)(null), [total, setTotal] = (0, import_react.useState)(0);
  const [bundles, setBundles] = (0, import_react.useState)([]), [target, setTarget] = (0, import_react.useState)(""), [url, setUrl] = (0, import_react.useState)(""), [busy, setBusy] = (0, import_react.useState)(false), [message, setMessage] = (0, import_react.useState)(""), [results, setResults] = (0, import_react.useState)([]);
  const [marketReady, setMarketReady] = (0, import_react.useState)(false), [selected, setSelected] = (0, import_react.useState)([]), [remoteLoading, setRemoteLoading] = (0, import_react.useState)(false);
  const [selectedCatalog, setSelectedCatalog] = (0, import_react.useState)([]);
  const requestId = (0, import_react.useRef)(0), fetchedAt = (0, import_react.useRef)(void 0);
  const manager = (0, import_react.useMemo)(() => remote?.pluginManager, [remote]);
  const market = (0, import_react.useMemo)(() => remote?.pluginMarket, [remote]);
  const refresh = (0, import_react.useCallback)(async () => {
    if (!manager) {
      setMessage("\u5F53\u524D DSH \u7F3A\u5C11\u63D2\u4EF6\u7BA1\u7406\u670D\u52A1\uFF0C\u8BF7\u66F4\u65B0\u684C\u9762\u7248\u3002");
      return;
    }
    try {
      setBundles(unwrap(await manager.listBundles()));
    } catch (e) {
      setMessage(`\u8BFB\u53D6\u5DF2\u5B89\u88C5\u63D2\u4EF6\u5931\u8D25\uFF1A${e.message}`);
    }
    try {
      if (!market) throw new Error("\u4E0D\u53EF\u7528");
      setIndexes(unwrap(await market.listIndexes()));
      setMarketReady(true);
    } catch {
      setIndexes([]);
      setMarketReady(false);
    }
  }, [manager, market]);
  (0, import_react.useEffect)(() => {
    void refresh();
    const retry = setTimeout(() => void refresh(), 4e3);
    return () => clearTimeout(retry);
  }, [refresh]);
  (0, import_react.useEffect)(() => {
    if (!remote?.$on) return;
    const dispose = remote.$on("plugin-manager/changed", () => void refresh());
    return () => dispose?.();
  }, [remote, refresh]);
  const loadRemote = (0, import_react.useCallback)(async (offset = 0, append = false) => {
    if (!market || source === "builtin") return;
    const request = ++requestId.current;
    setRemoteLoading(true);
    try {
      const data = unwrap(await market.search(source, { ...query.trim() ? { text: query.trim() } : {}, ...category !== "all" ? { category } : {}, ...append && fetchedAt.current !== void 0 ? { fetchedAt: fetchedAt.current } : {}, sort: { kind: "index" }, offset, limit: 50 }));
      if (request !== requestId.current) return;
      if (append && fetchedAt.current !== void 0 && fetchedAt.current !== data.fetchedAt) {
        void loadRemote();
        return;
      }
      fetchedAt.current = data.fetchedAt;
      setRemoteEntries((old) => append ? [...old, ...data.entries.map(mapRemoteEntry)] : data.entries.map(mapRemoteEntry));
      setNext(data.nextOffset);
      setTotal(data.total);
    } catch (e) {
      if (request === requestId.current) {
        setMessage(`\u8BFB\u53D6\u7D22\u5F15\u5931\u8D25\uFF1A${e.message}`);
        setRemoteEntries([]);
        setNext(null);
      }
    } finally {
      if (request === requestId.current) setRemoteLoading(false);
    }
  }, [market, source, query, category]);
  (0, import_react.useEffect)(() => {
    requestId.current++;
    fetchedAt.current = void 0;
    if (source !== "builtin") {
      setRemoteEntries([]);
      setNext(null);
      setRemoteLoading(true);
      const timer = setTimeout(() => void loadRemote(), 250);
      return () => {
        clearTimeout(timer);
        requestId.current++;
      };
    }
    setRemoteLoading(false);
  }, [loadRemote, source]);
  const installed = (0, import_react.useMemo)(() => new Map(bundles.filter((x) => x.installed).map((x) => [x.name, x])), [bundles]);
  const shown = (0, import_react.useMemo)(() => (source === "builtin" ? local : remoteEntries).filter((p) => (category === "all" || p.category === category) && (source !== "builtin" || `${p.name} ${p.title} ${p.description} ${p.category}`.toLowerCase().includes(query.toLowerCase()))), [source, remoteEntries, category, query]);
  const run = async (operation, entries) => {
    if (busy || !manager) return;
    const text = operation === "install" ? "\u5B89\u88C5" : "\u5378\u8F7D";
    if (!window.confirm(`${text}\u4EE5\u4E0B ${entries.length} \u9879\uFF1F

${entries.map((x) => x.label).join("\n")}

\u7B2C\u4E09\u65B9\u63D2\u4EF6\u4EE5\u5F53\u524D\u7528\u6237\u6743\u9650\u8FD0\u884C\u3002`)) return;
    setBusy(true);
    setResults([]);
    setMessage("");
    for (const entry of entries) {
      try {
        const raw = operation === "install" ? await manager.installBundle(entry.spec, { enabled: true, ...entry.registry ? { registry: entry.registry } : {} }) : await manager.removeBundle(entry.name);
        const result = unwrap(raw);
        setResults((old) => [...old, { label: entry.label, text: resultText(result) }]);
      } catch (e) {
        setResults((old) => [...old, { label: entry.label, text: `\u7ED3\u679C\u672A\u786E\u8BA4\uFF1A${e.message}\uFF1B\u8BF7\u5237\u65B0\u5DF2\u5B89\u88C5\u5217\u8868\u540E\u518D\u91CD\u8BD5` }]);
        break;
      }
    }
    await refresh();
    setSelected([]);
    setSelectedCatalog([]);
    setBusy(false);
  };
  const toggle = async (p) => {
    if (busy) return;
    setBusy(true);
    try {
      const value = unwrap(await manager.setBundleEnabled(p.name, !p.enabled));
      setResults([{ label: p.name, text: resultText(value) }]);
      await refresh();
    } catch (e) {
      setMessage(`\u64CD\u4F5C\u7ED3\u679C\u672A\u786E\u8BA4\uFF1A${e.message}`);
    } finally {
      setBusy(false);
    }
  };
  const addIndex = async () => {
    try {
      const normalized = validateIndex(url);
      if (indexes.some((x) => x.url === normalized)) throw new Error("\u8BE5\u7D22\u5F15\u5DF2\u5B58\u5728");
      unwrap(await market.setIndexes([...indexes.map((x) => x.url), normalized]));
      setUrl("");
      await refresh();
      setSource(normalized);
      setTab("catalog");
      setMessage("\u6765\u6E90\u5DF2\u6DFB\u52A0");
    } catch (e) {
      setMessage(e.message);
    }
  };
  const removeIndex = async (index) => {
    if (!window.confirm(`\u79FB\u9664\u7D22\u5F15 ${index.url}\uFF1F`)) return;
    try {
      unwrap(await market.setIndexes(indexes.filter((x) => x.url !== index.url).map((x) => x.url)));
      if (source === index.url) setSource("builtin");
      await refresh();
    } catch (e) {
      setMessage(e.message);
    }
  };
  const batch = () => {
    try {
      void run("install", parseTargets(target).map((spec) => ({ spec, label: spec })));
    } catch (e) {
      setMessage(e.message);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ghc", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { className: "ghc-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ghc-kicker", children: "DSH / OPEN ECOSYSTEM" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "\u793E\u533A\u63D2\u4EF6\u4E2D\u5FC3" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "\u53D1\u73B0\u5B9E\u7528\u63D2\u4EF6\uFF0C\u8FDE\u63A5\u4F60\u7684\u56E2\u961F\u5DE5\u5177\u3002" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ghc-count", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: catalog_default.plugins.length }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "\u793E\u533A\u76EE\u5F55\u63D2\u4EF6" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { className: "ghc-nav", "aria-label": "\u793E\u533A\u63D2\u4EF6\u4E2D\u5FC3\u5BFC\u822A", children: [["catalog", "\u53D1\u73B0\u63D2\u4EF6"], ["installed", "\u5DF2\u5B89\u88C5"], ["add", "\u6DFB\u52A0\u63D2\u4EF6"], ["sources", "\u63D2\u4EF6\u6765\u6E90"]].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: tab === id ? "active" : "", onClick: () => setTab(id), children: [
      label,
      id === "installed" && ` ${installed.size}`
    ] }, id)) }),
    message && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ghc-message", role: "status", children: [
      message,
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: () => setMessage(""), "aria-label": "\u5173\u95ED\u63D0\u793A", children: "\xD7" })
    ] }),
    results.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ghc-results", role: "status", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "\u64CD\u4F5C\u7ED3\u679C" }),
      results.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r.label }),
        " ",
        r.text
      ] }, i))
    ] }),
    tab === "catalog" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ghc-toolbar", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { "aria-label": "\u641C\u7D22\u63D2\u4EF6", placeholder: "\u641C\u7D22\u540D\u79F0\u3001\u529F\u80FD\u6216\u5206\u7C7B", value: query, onChange: (e) => setQuery(e.target.value) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", { "aria-label": "\u9009\u62E9\u6765\u6E90", value: source, onChange: (e) => {
          setSource(e.target.value);
          setCategory("all");
          setSelectedCatalog([]);
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", { value: "builtin", children: [
            "\u793E\u533A\u76EE\u5F55 \xB7 ",
            local.length
          ] }),
          indexes.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: x.url, children: tr(x.title) || x.url }, x.url))
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", { "aria-label": "\u5206\u7C7B", value: category, onChange: (e) => setCategory(e.target.value), children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "all", children: "\u5168\u90E8\u5206\u7C7B" }),
          [...new Set((source === "builtin" ? local : remoteEntries).map((p) => p.category).concat(category === "all" ? [] : [category]))].sort().map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: c, children: CATEGORIES[c] || c }, c))
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ghc-section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "\u63A2\u7D22\u63D2\u4EF6" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: source === "builtin" ? `\u6765\u81EA\u793E\u533A\u76EE\u5F55\uFF0C\u6309 GitHub \u661F\u6807\u548C\u4E0B\u8F7D\u91CF\u9009\u53D6 \xB7 \u66F4\u65B0\u4E8E ${catalog_default.updated} \xB7 \u517C\u5BB9\u6027\u7531\u5BBF\u4E3B\u68C0\u67E5` : `\u7D22\u5F15\u5171 ${total} \u9879 \xB7 ${source}` })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
            shown.length,
            " \u9879 "
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { disabled: busy || !selectedCatalog.length, onClick: () => run("install", selectedCatalog.map((p) => ({ spec: p.spec, registry: p.registry, label: `${p.name}  ${p.spec}` }))), children: [
            "\u5B89\u88C5\u6240\u9009 (",
            selectedCatalog.length,
            ")"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ghc-grid", children: shown.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { className: "ghc-card", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ghc-card-top", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox", "aria-label": `\u9009\u62E9\u5B89\u88C5 ${p.name}`, checked: selectedCatalog.some((x) => x.name === p.name), disabled: busy || !p.spec || installed.has(p.name) || ["installed", "provided"].includes(p.installation) || selectedCatalog.length >= 30 && !selectedCatalog.some((x) => x.name === p.name), onChange: (e) => setSelectedCatalog((old) => e.target.checked ? [...old, p] : old.filter((x) => x.name !== p.name)) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ghc-icon", children: (p.title || p.name).replace(/^@/, "").slice(0, 1).toUpperCase() }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ghc-title", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: p.title }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: p.name })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ghc-category", children: CATEGORIES[p.category] || p.category })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p.description || "\u4F5C\u8005\u672A\u63D0\u4F9B\u7B80\u4ECB" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ghc-card-bottom", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.stars ? `\u2605 ${p.stars}` : p.version ? `v${p.version}` : "\u517C\u5BB9\u6027\u672A\u77E5" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            p.repository && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: p.repository, target: "_blank", rel: "noreferrer", children: "\u6E90\u7801" }),
            installed.has(p.name) || ["installed", "provided"].includes(p.installation) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { disabled: true, children: "\u5DF2\u5B89\u88C5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { disabled: busy || !p.spec, onClick: () => run("install", [{ spec: p.spec, registry: p.registry, label: `${p.name}  ${p.spec}` }]), children: p.spec ? "\u5B89\u88C5" : "\u65E0\u517C\u5BB9\u7248\u672C" })
          ] })
        ] })
      ] }, p.name)) }),
      remoteLoading && source !== "builtin" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ghc-empty", role: "status", children: "\u6B63\u5728\u8BFB\u53D6\u6765\u6E90\u2026" }),
      !shown.length && !remoteLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ghc-empty", children: "\u6CA1\u6709\u5339\u914D\u7684\u63D2\u4EF6\u3002\u8BD5\u8BD5\u5176\u4ED6\u5173\u952E\u8BCD\u6216\u6765\u6E90\u3002" }),
      source !== "builtin" && next !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "ghc-more", disabled: remoteLoading, onClick: () => loadRemote(next, true), children: "\u52A0\u8F7D\u66F4\u591A" })
    ] }),
    tab === "installed" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ghc-section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "\u5DF2\u5B89\u88C5" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "\u663E\u793A\u5F53\u524D\u8FD0\u884C\u914D\u7F6E\u4E2D\u7684\u63D2\u4EF6\uFF1B\u5378\u8F7D\u7531 DSH \u5BBF\u4E3B\u6267\u884C\u3002" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { disabled: busy || !selected.length, onClick: () => run("remove", selected.map((name2) => ({ name: name2, label: name2 }))), children: [
            "\u5378\u8F7D\u6240\u9009 (",
            selected.length,
            ")"
          ] }),
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: refresh, children: "\u5237\u65B0" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ghc-list", children: [...installed.values()].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ghc-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox", "aria-label": `\u9009\u62E9 ${p.name}`, checked: selected.includes(p.name), disabled: !p.removable || busy, onChange: (e) => setSelected((old) => e.target.checked ? [...old, p.name] : old.filter((n) => n !== p.name)) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ghc-row-name", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: p.name }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
            p.version ? `v${p.version} \xB7 ` : "",
            p.enabled ? "\u5DF2\u542F\u7528" : "\u5DF2\u505C\u7528",
            p.official ? " \xB7 \u5B98\u65B9\u7EC4\u4EF6" : ""
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { disabled: busy || p.official, onClick: () => toggle(p), children: p.enabled ? "\u505C\u7528" : "\u542F\u7528" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { disabled: busy || !p.removable, onClick: () => run("remove", [{ name: p.name, label: p.name }]), children: "\u5378\u8F7D" })
      ] }, p.name)) })
    ] }),
    tab === "add" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ghc-form", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "\u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u63D2\u4EF6" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "\u6BCF\u884C\u4E00\u4E2A npm \u5305\u540D\u3001GitHub \u5730\u5740\u3001\u5185\u7F51 Git \u5730\u5740\u3001\u7EDD\u5BF9\u76EE\u5F55\u6216 .tgz \u6587\u4EF6\u8DEF\u5F84\u3002\u6309\u987A\u5E8F\u5B89\u88C5\uFF0C\u6BCF\u9879\u5206\u522B\u663E\u793A\u7ED3\u679C\u3002" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", { "aria-label": "\u63D2\u4EF6\u6765\u6E90\u6216\u672C\u5730\u8DEF\u5F84", value: target, onChange: (e) => setTarget(e.target.value), placeholder: "github:owner/dsh-plugin\nD:\\plugins\\my-plugin\nD:\\plugins\\other-plugin.tgz", rows: 7 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "\u672C\u5730\u591A\u6587\u4EF6\u63D2\u4EF6\u8BF7\u586B\u5199\u5305\u542B package.json \u7684\u76EE\u5F55\uFF1B\u538B\u7F29\u5305\u8BF7\u586B\u5199 .tgz \u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002\u5B89\u88C5\u8981\u6C42\u5305\u58F0\u660E dsh.bundle\u3002" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "ghc-primary", disabled: busy || !manager, onClick: batch, children: busy ? "\u6B63\u5728\u5904\u7406\u2026" : "\u5B89\u88C5\u5217\u8868" })
    ] }),
    tab === "sources" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ghc-form", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "\u63D2\u4EF6\u6765\u6E90" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "\u6DFB\u52A0 DSH format 1 \u7D22\u5F15 URL\uFF0C\u652F\u6301\u516C\u53F8\u5185\u7F51 HTTP(S) \u5730\u5740\u3002\u6765\u6E90\u7531 DSH \u4FDD\u5B58\uFF0C\u63D2\u4EF6\u6765\u6E90\u548C\u6743\u9650\u8BF7\u81EA\u884C\u6838\u5B9E\u3002" }),
      !marketReady && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ghc-message", children: [
        "\u7D22\u5F15\u670D\u52A1\u672A\u5C31\u7EEA\u6216\u4E0D\u53EF\u7528\u3002\u8BF7\u786E\u8BA4\u300C\u63D2\u4EF6 \u2192 \u5DF2\u5B89\u88C5 \u2192 \u5B9E\u9A8C\u6027\u63D2\u4EF6\u300D\u4E2D\u7684\u300C\u81EA\u5B9A\u4E49\u63D2\u4EF6\u7D22\u5F15\u300D\u5DF2\u542F\u7528\uFF0C\u7136\u540E\u5237\u65B0\u3002",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: refresh, children: "\u5237\u65B0" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ghc-inline", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { "aria-label": "\u7D22\u5F15 URL", value: url, onChange: (e) => setUrl(e.target.value), placeholder: "https://company.example/plugins/index.json" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "ghc-primary", disabled: !marketReady, onClick: addIndex, children: "\u6DFB\u52A0\u6765\u6E90" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ghc-list", children: indexes.length ? indexes.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ghc-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: tr(x.title) || "\u81EA\u5B9A\u4E49\u6765\u6E90" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
            x.url,
            x.error ? ` \xB7 ${x.error}` : ""
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: () => removeIndex(x), children: "\u79FB\u9664" })
      ] }, x.url)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "\u8FD8\u6CA1\u6709\u81EA\u5B9A\u4E49\u6765\u6E90\u3002" }) })
    ] })
  ] });
}
var name = "dsh-plugin-github-center";
var inject = ["slots", "remote", "remote.pluginManager", "remote.pluginMarket"];
function apply(ctx) {
  ctx.slots.inject("plugins.tab", () => ctx.slots.register({ name: "plugins.tab", id: "github-center", label: () => "\u793E\u533A\u63D2\u4EF6\u4E2D\u5FC3", inject: () => ({}) }, () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Center, { remote: ctx.remote })));
}
return module.exports; } });
