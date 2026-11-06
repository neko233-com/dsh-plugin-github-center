param([string]$DshCommand = 'dsh', [switch]$Denied, [string]$PackagePath)
$ErrorActionPreference = 'Stop'
$testRoot = Join-Path ([IO.Path]::GetTempPath()) ("dsh-community-agent-" + [guid]::NewGuid().ToString('N'))
$env:DSH_HOME = Join-Path $testRoot 'home'
$env:DSH_PERMISSION_MODE = if ($Denied) { 'workspace-write' } else { 'danger-full-access' }
$env:DSH_CENTER_TEST_DENIED = if ($Denied) { '1' } else { '0' }
$env:DSH_CENTER_TEST_RESULT = Join-Path $testRoot 'result.json'
$env:DSH_CENTER_TEST_FIXTURE = Join-Path $testRoot 'fixture'
$checkDir = Join-Path $testRoot 'checker'
New-Item -ItemType Directory -Force $checkDir, $env:DSH_CENTER_TEST_FIXTURE | Out-Null
@'
{"name":"dsh-community-agent-fixture","version":"1.0.0","type":"module","main":"index.js","dsh":{"bundle":{"patch":"./cordis.patch.yml"}}}
'@ | Set-Content -Encoding utf8 (Join-Path $env:DSH_CENTER_TEST_FIXTURE 'package.json')
"export function apply() {}" | Set-Content -Encoding utf8 (Join-Path $env:DSH_CENTER_TEST_FIXTURE 'index.js')
@'
- insert:
    - id: community-agent-fixture
      name: dsh-community-agent-fixture
'@ | Set-Content -Encoding utf8 (Join-Path $env:DSH_CENTER_TEST_FIXTURE 'cordis.patch.yml')
@'
{"name":"dsh-community-agent-checker","version":"1.0.0","type":"module","main":"index.js","dsh":{"bundle":{"patch":"./cordis.patch.yml"}}}
'@ | Set-Content -Encoding utf8 (Join-Path $checkDir 'package.json')
@'
- insert:
    - id: community-agent-test-checker
      name: dsh-community-agent-checker
'@ | Set-Content -Encoding utf8 (Join-Path $checkDir 'cordis.patch.yml')
if ($Denied) {
@'
- id: approval
  config:
    policy: never
'@ | Add-Content -Encoding utf8 (Join-Path $checkDir 'cordis.patch.yml')
}
@'
import { writeFileSync } from 'node:fs'
import { createServer } from 'node:http'
export function apply(ctx) {
  ctx.inject(['tools','pluginManager','agents','agentPresets'], scope => {
    const timer = setTimeout(async () => {
      try {
        const { agent } = await scope.agents.create({sessionId:`community-test-${Date.now()}`,meta:{cwd:process.cwd(),agentPreset:'standard'},setup:async agentCtx=>{await scope.agentPresets.mount(agentCtx,'standard')}})
        agent.session.append('turn/start', {turn:1})
        async function raw(name,args,id) {
          const result=await scope.tools.execute({agent,signal:new AbortController().signal,calls:[{type:'tool-call',name,id,arguments:JSON.stringify(args)}]})
          return result.results[0].result
        }
        async function call(name,args,id) {
          const item=await raw(name,args,id)
          if(item.isError) throw new Error(`${name}: ${JSON.stringify(item.content)}`)
          return JSON.parse(item.value)
        }
        const found=await call('community_plugin_center',{action:'search',query:'dshmarket'},'search')
        if (process.env.DSH_CENTER_TEST_DENIED === '1') {
          const denied=await raw('plugin_manager',{action:'install_bundle',target:process.env.DSH_CENTER_TEST_FIXTURE},'denied')
          const decisions=agent.session.snapshotEvents().filter(e=>e.type==='approval/decided').map(e=>e.data.outcome)
          writeFileSync(process.env.DSH_CENTER_TEST_RESULT,JSON.stringify({found,denied,decisions}))
          return
        }
        const installed=await call('plugin_manager',{action:'install_bundle',target:process.env.DSH_CENTER_TEST_FIXTURE},'install')
        const listed=await call('plugin_manager',{action:'list_bundles'},'list')
        const removed=await call('plugin_manager',{action:'remove_bundle',target:'dsh-community-agent-fixture'},'remove')
        const enabled=await call('plugin_manager',{action:'set_bundle',target:'@deepseek-ai/dsh-experimental-plugin-market-bundle',enabled:true},'enable-index')
        let market
        for(let i=0;i<50 && !market;i++){market=scope.get('pluginMarket');if(!market) await new Promise(r=>setTimeout(r,100))}
        if(!market) throw new Error('Custom index service did not start')
        const server=createServer((_req,res)=>{res.writeHead(200,{'content-type':'application/json'});res.end(JSON.stringify({format:1,title:'Company test',plugins:[{name:'company-fixture',description:'Company index test',versions:[{version:'1.0.0',publishTimestamp:1,source:{type:'npm'}}]}]}))})
        await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve))
        let sources, custom
        try {
          const source=`http://127.0.0.1:${server.address().port}/index.json`
          await market.setIndexes([source])
          sources=await call('community_plugin_center',{action:'list_sources'},'sources')
          custom=await call('community_plugin_center',{action:'search_source',source,query:'company'},'custom')
          await market.setIndexes([])
        } finally { server.close() }
        writeFileSync(process.env.DSH_CENTER_TEST_RESULT,JSON.stringify({found,installed,listed,removed,enabled,sources,custom}))
      } catch (e) { writeFileSync(process.env.DSH_CENTER_TEST_RESULT,JSON.stringify({error:String(e?.stack || e)})) }
    }, 4000)
    return () => clearTimeout(timer)
  })
}
'@ | Set-Content -Encoding utf8 (Join-Path $checkDir 'index.js')

$pluginDir = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$pluginTarget = if ($PackagePath) { (Resolve-Path -LiteralPath $PackagePath).Path } else { "link:$pluginDir" }
& $DshCommand plugin --profile web add $pluginTarget "link:$checkDir" | Out-Null
if ($LASTEXITCODE -ne 0) { throw 'Could not install isolated test bundles' }
$launch = New-Object System.Diagnostics.ProcessStartInfo
$launch.FileName = (Get-Command $DshCommand).Source
$launch.Arguments = '--profile web --port 0 --no-open'
$launch.UseShellExecute = $false
$launch.CreateNoWindow = $true
$launch.RedirectStandardOutput = $true
$launch.RedirectStandardError = $true
# The desktop dsh.cmd is a batch wrapper; launch through ComSpec while keeping
# the ephemeral server token in memory and never writing it to a log.
if ($launch.FileName.EndsWith('.cmd', [StringComparison]::OrdinalIgnoreCase)) {
  $launch.Arguments = '/d /s /c ""' + $launch.FileName + '" --profile web --port 0 --no-open"'
  $launch.FileName = $env:ComSpec
}
$process = [Diagnostics.Process]::Start($launch)
$stdout = $process.StandardOutput.ReadToEndAsync()
$stderr = $process.StandardError.ReadToEndAsync()
try {
  $deadline = [DateTime]::UtcNow.AddSeconds(90)
  while (-not (Test-Path -LiteralPath $env:DSH_CENTER_TEST_RESULT) -and -not $process.HasExited -and [DateTime]::UtcNow -lt $deadline) { Start-Sleep -Milliseconds 300 }
  if (-not (Test-Path -LiteralPath $env:DSH_CENTER_TEST_RESULT)) { throw 'Host did not produce an Agent tool result' }
  $result = Get-Content -Raw $env:DSH_CENTER_TEST_RESULT | ConvertFrom-Json
  if ($result.error) { throw $result.error }
  if (-not ($result.found.entries | Where-Object name -eq 'dshmarket')) { throw 'Agent catalog search failed' }
  if ($Denied) {
    if (-not $result.denied.isError -or $result.decisions[0] -ne 'rejected') { throw 'Native manager did not reject the unapproved operation through approval policy' }
  } else {
    if ($result.installed.application -ne 'applied' -or $result.removed.application -ne 'applied') { throw 'Agent install/remove did not apply' }
    if (-not ($result.listed.entries | Where-Object name -eq 'dsh-community-agent-fixture')) { throw 'Installed fixture was not listed' }
    if ($result.enabled.application -ne 'applied' -or -not ($result.custom.entries | Where-Object name -eq 'company-fixture')) { throw 'Agent custom index search failed' }
  }
  $manifest = Get-Content -Raw (Join-Path $env:DSH_HOME 'profiles/web/package.json') | ConvertFrom-Json
  if ($manifest.dependencies.'dsh-community-agent-fixture') { throw 'Fixture remained in profile after removal' }
  if ($Denied) { 'Agent search succeeded; unapproved native install was denied and profile remained unchanged.' }
  else { 'Agent-scoped search, native install, list, remove, index enable and custom-source search passed.' }
} finally {
  if (-not $process.HasExited) { & taskkill /PID $process.Id /T /F 2>$null | Out-Null }
}
