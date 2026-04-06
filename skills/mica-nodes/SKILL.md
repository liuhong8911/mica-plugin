---
name: mica-nodes
version: 1.0.0
description: Check MVM node availability, energy costs, and cluster status
triggers:
  - node
  - cluster
  - energy
  - region
  - status
  - availability
tools:
  - mica_node_status
---

# MVM Node Status

Check the real-time status of MVM node clusters around the world — availability, energy source, cost per kWh, and current load.

## When to activate

- User asks about node availability or regions
- User wants to know energy sources or carbon impact
- Before routing compute to check current capacity
- When troubleshooting routing issues
