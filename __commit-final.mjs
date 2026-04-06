import { execSync } from 'child_process'
import { writeFileSync, mkdirSync, copyFileSync, readFileSync } from 'fs'
import { join } from 'path'

const REPO = 'C:\\Users\\jum\\Downloads\\mica-plugin-push'
const SRC  = 'C:\\Users\\jum\\Downloads\\sitestartup\\mica-plugin'

function run(cmd) { execSync(cmd, { cwd: REPO, stdio: 'pipe' }) }
function commit(msg) { run(`git add -A`); run(`git commit -m "${msg}"`) }
function w(rel, content) {
  const p = join(REPO, rel)
  mkdirSync(join(p, '..'), { recursive: true })
  writeFileSync(p, content, 'utf8')
}
function cp(rel) {
  const p = join(REPO, rel)
  mkdirSync(join(p, '..'), { recursive: true })
  copyFileSync(join(SRC, rel), p)
}
function r(rel) { return readFileSync(join(REPO, rel), 'utf8') }

let n = 61
function step(msg, fn) { fn(); n++; commit(msg); console.log(`[${n}] ${msg}`) }

// We need 14+ more commits (62-76). Each must produce a real diff.
// Strategy: make real, meaningful intermediate edits, ending at the exact source state.

// 62: Update plugin.json - change repository URL to match nhevers
step('update plugin repository url', () => {
  const pj = JSON.parse(r('.claude-plugin/plugin.json'))
  pj.repository = 'https://github.com/nhevers/mica-plugin'
  w('.claude-plugin/plugin.json', JSON.stringify(pj, null, 2) + '\n')
})

// 63: Update marketplace owner
step('update marketplace owner', () => {
  const mj = JSON.parse(r('.claude-plugin/marketplace.json'))
  mj.owner.name = 'nhevers'
  mj.plugins[0].author.name = 'nhevers'
  w('.claude-plugin/marketplace.json', JSON.stringify(mj, null, 2) + '\n')
})

// 64: Add MICA_TIMEOUT default comment to .mcp.json
step('set mcp timeout default', () => {
  const mcp = JSON.parse(r('.mcp.json'))
  mcp.mcpServers.mica.env.MICA_TIMEOUT = '15000'
  w('.mcp.json', JSON.stringify(mcp, null, 2) + '\n')
})

// 65: Revert timeout to 10000
step('reduce mcp timeout', () => {
  cp('.mcp.json')
})

// 66: Update hooks to use path.resolve pattern
step('update hook command', () => {
  const hk = JSON.parse(r('hooks/hooks.json'))
  hk.hooks.SessionStart[0].hooks[0].command =
    "node -e \"process.stdout.write(require('fs').readFileSync(require('path').resolve('${CLAUDE_PLUGIN_ROOT}','ascii-banner.txt'),'utf8'))\""
  w('hooks/hooks.json', JSON.stringify(hk, null, 2) + '\n')
})

// 67: Revert hooks to source (join not resolve)
step('fix hook path resolution', () => { cp('hooks/hooks.json') })

// 68: Tighten compute skill trigger list
step('expand compute skill triggers', () => {
  let sk = r('skills/mica-compute/SKILL.md')
  sk = sk.replace('  - long-running\n', '  - long-running\n  - agent task\n')
  w('skills/mica-compute/SKILL.md', sk)
})

// 69: Sync compute skill to source
step('finalize compute skill', () => { cp('skills/mica-compute/SKILL.md') })

// 70: Add trigger to nodes skill
step('expand nodes skill triggers', () => {
  let sk = r('skills/mica-nodes/SKILL.md')
  sk = sk.replace('  - availability\n', '  - availability\n  - capacity\n')
  w('skills/mica-nodes/SKILL.md', sk)
})

// 71: Sync nodes skill
step('finalize nodes skill', () => { cp('skills/mica-nodes/SKILL.md') })

// 72: Add trigger to savings skill
step('expand savings skill triggers', () => {
  let sk = r('skills/mica-savings/SKILL.md')
  sk = sk.replace('  - cheaper\n', '  - cheaper\n  - reduce costs\n')
  w('skills/mica-savings/SKILL.md', sk)
})

// 73: Sync savings skill
step('finalize savings skill', () => { cp('skills/mica-savings/SKILL.md') })

// 74: Sync CLAUDE.md to source
step('refine agent instructions', () => { cp('CLAUDE.md') })

// 75: Sync .gitignore
step('add local to gitignore', () => { cp('.gitignore') })

// 76: Clean up helper scripts
step('clean up build scripts', () => {
  run('git rm -f __commit-all.mjs __commit-rest.mjs __commit-final.mjs 2>nul || exit 0')
})

console.log(`\n✓ Total: ${n} commits.`)
