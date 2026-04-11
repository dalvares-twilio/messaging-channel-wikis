---
type: query
title: "Bulk Archiving Operations and Limits"
query: "How do I archive multiple agents at once, and what are the limits?"
answered: 2026-04-10
tags: [archiving, bulk-operations, management, console]
---

## Answer

The Developer Console supports bulk archiving operations for managing large numbers of agents efficiently.

### Bulk Archive Process

1. **Navigate**: Go to the Agents list in Developer Console
2. **Select Agents**: Check the selection box for each agent to archive (up to 100)
3. **Apply Action**: Click the Archive action in the bulk actions toolbar
4. **Confirm**: Review and confirm the operation

### Limits

| Limit | Value | Notes |
|-------|-------|-------|
| Max agents per bulk operation | **100** | Select up to 100 agents at once |
| Eligibility check | Per-agent | Each agent must be in an archivable state |

### Handling Partial Failures

When bulk archiving includes ineligible agents (PENDING or LAUNCHED):

- **Success/Failure Breakdown**: Console shows how many succeeded vs failed
- **Failure Reasons**: Each failed agent shows why it couldn't be archived
- **Atomic Per-Agent**: Eligible agents are archived even if others fail

### Example Scenario

Selecting 50 agents where 3 are LAUNCHED:
- 47 agents archived successfully
- 3 agents remain unarchived with "Cannot archive LAUNCHED agent" message

### Bulk Unarchive

The same process works for unarchiving:
1. Filter agents by "Archived" status
2. Select archived agents (up to 100)
3. Apply Unarchive action
4. All selected agents become visible again

### Best Practices

- **Filter First**: Use status filters to select only eligible agents
- **Review Selection**: Verify agent states before bulk operations
- **Document**: Note which agents were archived for future reference (Console doesn't provide archive history)

## Sources Consulted

- [manage-agents](../sources/manage-agents.md)
- [developer-console](../entities/developer-console.md)

## New Insights

- No API endpoint documented for bulk archive operations - Console only feature
- Archive history/audit log not available
- Partial failures don't rollback successful archives
