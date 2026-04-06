```
    __  ______________
   /  |/  /  _/ ____/   _
  / /|_/ // // /   / | / /
 / /  / // // /___/ |/ /
/_/  /_/___/\____/|___/
```

Save tokens. Cut inference costs. Route compute through MVM nodes on the cheapest available energy.

[![License: MIT](https://img.shields.io/badge/License-MIT-white.svg)](LICENSE)
[![MCP](https://img.shields.io/badge/MCP-compatible-blue.svg)](#)

---

## What is mica?

LLM inference is expensive. Running agents 24/7 burns tokens and energy. Mica fixes this by routing your compute-heavy tasks through MVM (Mica Virtual Machine) nodes — distributed across regions with the cheapest renewable energy on the planet.

Instead of paying full price for cloud compute at $0.10+/kWh, MVM routes your workloads to nodes running on Nordic hydroelectric ($0.02/kWh), Icelandic geothermal ($0.01/kWh), and Canadian hydro ($0.04/kWh). Same results, ~40% lower cost.

Mica runs as an MCP server plugin for Claude Code. When your agent needs to run inference, batch processing, or long-running tasks, it routes through MVM instead of standard cloud — saving tokens and money automatically.
