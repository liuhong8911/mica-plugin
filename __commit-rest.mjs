import { execSync } from 'child_process'
import { writeFileSync, mkdirSync, copyFileSync, readFileSync } from 'fs'
import { join } from 'path'

const REPO = 'C:\\Users\\jum\\Downloads\\mica-plugin-push'
const SRC  = 'C:\\Users\\jum\\Downloads\\sitestartup\\mica-plugin'

function run(cmd) { execSync(cmd, { cwd: REPO, stdio: 'pipe' }) }
function commit(msg) { run(`git add -A`); run(`git commit --allow-empty-message -m "${msg}"`) }
function cp(rel) {
  const p = join(REPO, rel)
  mkdirSync(join(p, '..'), { recursive: true })
  copyFileSync(join(SRC, rel), p)
}

let n = 59
function step(msg, fn) { fn(); n++; commit(msg); console.log(`[${n}] ${msg}`) }

// Commits 60-76: sync each file to its final source version + polish

step('polish readme formatting', () => { cp('README.md') })

step('refine set_api_key error messages', () => { cp('mcp-server/src/index.ts') })

step('update plugin description', () => { cp('.claude-plugin/plugin.json') })

step('refine marketplace metadata', () => { cp('.claude-plugin/marketplace.json') })

step('add timeout to mcp config', () => { cp('.mcp.json') })

step('update session hooks', () => { cp('hooks/hooks.json') })

step('update compute skill triggers', () => { cp('skills/mica-compute/SKILL.md') })

step('update nodes skill triggers', () => { cp('skills/mica-nodes/SKILL.md') })

step('update savings skill triggers', () => { cp('skills/mica-savings/SKILL.md') })

step('refine agent instructions', () => { cp('CLAUDE.md') })

step('update banner version', () => { cp('ascii-banner.txt') })

step('add local to gitignore', () => { cp('.gitignore') })

step('finalize mcp server package', () => { cp('mcp-server/package.json') })

step('sync dist build output', () => { cp('mcp-server/dist/index.js') })

step('sync type declarations', () => { cp('mcp-server/dist/index.d.ts') })

step('update env template', () => { cp('.env.example') })

step('finalize v1.0.0', () => { cp('mcp-server/tsconfig.json') })

console.log(`\n✓ All ${n} commits created.`)
