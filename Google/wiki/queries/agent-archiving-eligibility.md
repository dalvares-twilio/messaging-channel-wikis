---
type: query
title: "Agent Archiving Eligibility by State"
query: "Which agent states are eligible for archiving, and which states cannot be archived?"
answered: 2026-04-10
tags: [archiving, agent-lifecycle, management, states]
---

## Answer

Agent archiving is a visibility management feature - it hides agents from the primary list but does NOT affect launch state or functionality. Eligibility depends on the agent's current state:

### Archiving Eligibility

| Agent State | Can Archive? | Reason |
|-------------|--------------|--------|
| **UNLAUNCHED** | Yes | Inactive, safe to hide |
| **SUSPENDED** | Yes | Inactive, safe to hide |
| **REJECTED** | Yes | Inactive, safe to hide |
| **PENDING** | No | Active launch process in progress |
| **LAUNCHED** | No | Actively serving users |

### Key Principles

1. **Visibility Only**: Archiving is purely cosmetic - it hides agents from the default list view, nothing more.

2. **Preserves Launch State**: An archived REJECTED agent remains REJECTED. Unarchiving restores visibility without changing state.

3. **No Deletion Alternative**: Since agents cannot be permanently deleted, archiving is the only way to declutter your agent list.

4. **Inactive Only**: Only agents that are NOT actively processing (no pending operations, not launched) can be archived.

### Why PENDING/LAUNCHED Cannot Be Archived

- **PENDING**: Launch approval is in progress. Archiving could cause confusion about active processes.
- **LAUNCHED**: Agent is live with real users. Archiving could lead to accidentally ignoring an active agent.

### Checking Archive Eligibility

Before archiving, verify the agent's `launchState` via:

- **Console**: Agent overview page shows current state
- **API**: `GET /v1/brands/{brandId}/agents/{agentId}` returns `rcsBusinessMessagingAgent.launchState`

## Sources Consulted

- [manage-agents](../sources/manage-agents.md)
- [agent-lifecycle](../concepts/agent-lifecycle.md)
- [api-resource-agents](../sources/api-resource-agents.md)

## New Insights

- Archive eligibility is implicitly tied to "inactive" states
- No API field directly indicates archive eligibility - must check launchState
- Archived agents remain accessible via API regardless of visibility in Console
