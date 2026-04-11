---
type: query
title: "Unarchiving an Agent Workflow"
query: "How do I unarchive a Google RCS agent, and what happens when I do?"
answered: 2026-04-10
tags: [archiving, unarchiving, agent-lifecycle, management]
---

## Answer

Unarchiving restores an agent's visibility in the Console without changing its launch state or configuration.

### Unarchive Process

#### Via Developer Console

1. **Access Archived Agents**: In the Agents list, filter by "Archived" status
2. **Locate Agent**: Find the archived agent in the filtered list
3. **Unarchive**: Hover over the agent row and click the Unarchive icon, or open the Agent overview and use the Unarchive action
4. **Confirm**: Agent immediately reappears in the default agent list

#### Bulk Unarchive

1. Filter to show Archived agents
2. Select multiple agents (up to 100)
3. Click bulk Unarchive action
4. All selected agents become visible

### What Happens When You Unarchive

| Aspect | Effect |
|--------|--------|
| **Visibility** | Agent appears in default agent list |
| **Launch State** | Unchanged (remains UNLAUNCHED, REJECTED, or SUSPENDED) |
| **Configuration** | All settings preserved exactly as before archiving |
| **Test Devices** | Previously added testers remain associated |
| **Webhooks** | Webhook configuration unchanged |
| **Analytics** | Historical data preserved and accessible |

### Key Points

1. **Instant Operation**: Unarchiving is immediate - no approval or processing time

2. **No State Change**: If an agent was REJECTED when archived, it remains REJECTED after unarchiving. You would still need to address the rejection reason and resubmit.

3. **Reversible**: You can archive and unarchive the same agent unlimited times

4. **No API Endpoint**: Archiving/unarchiving operations are Console-only features based on available documentation

### Use Cases for Unarchiving

- **Resume Development**: Unarchive a paused project to continue work
- **Review Rejected Agent**: Unarchive to investigate rejection and prepare resubmission
- **Reactivate Suspended Agent**: Make visible to address suspension issues
- **Audit**: Temporarily unarchive for compliance review

## Sources Consulted

- [manage-agents](../sources/manage-agents.md)
- [agent-lifecycle](../concepts/agent-lifecycle.md)

## New Insights

- No API documentation for archive/unarchive operations suggests Console-only
- Unarchiving doesn't trigger any notifications or webhooks
- No "last archived" timestamp visible in Console
