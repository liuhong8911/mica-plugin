import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { z } from 'zod'

const API_URL = (process.env.MICA_API_URL || 'https://mica-api-production-16e8.up.railway.app/api').replace(/\/$/, '')
let API_KEY = process.env.MICA_API_KEY || ''
let validated = false
let currentPlan = ''

const server = new McpServer({
  name: 'mica',
  version: '1.0.0',
  description: 'Save tokens and cut inference costs by routing compute through MVM nodes on the cheapest available energy.',
})

async function validateKey(key: string): Promise<{ valid: boolean; plan?: string; error?: string }> {
  try {
    const res = await fetch(`${API_URL}/keys/validate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'User-Agent': 'mica-mcp/1.0.0' },
      body: JSON.stringify({ key }),
    })
    if (!res.ok) {
      return { valid: false, error: `API returned ${res.status}` }
    }
    return await res.json()
  } catch (err) {
    return { valid: false, error: `Could not reach mica API: ${(err as Error).message}` }
  }
}

function requireKey() {
  if (!API_KEY) {
    return {
      content: [{
        type: 'text' as const,
        text: 'No API key detected. Ask the user to paste their mica API key, then call mica_set_api_key. Get a key at https://mica.energy/app',
      }],
    }
  }
  return null
}

function text(msg: string) {
  return { content: [{ type: 'text' as const, text: msg }] }
}

function jsonResult(data: unknown) {
  return { content: [{ type: 'text' as const, text: JSON.stringify(data, null, 2) }] }
}
