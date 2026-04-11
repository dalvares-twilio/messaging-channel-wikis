---
type: query
title: "Agent Deletion and Archiving"
query: "Can I delete an RBM agent, and what are my options for removing agents I no longer need?"
answered: 2026-04-10
tags: [agent-lifecycle, archiving, deletion]
---

## Answer

RBM agents **cannot be deleted** for security reasons. Archiving is the only option for agents you no longer need, and it's subject to state restrictions.

### Why No Deletion?

Google does not allow agent deletion to:
- Prevent security issues from abandoned phone numbers being reassigned
- Maintain audit trails for compliance
- Protect users from impersonation by reused agent identifiers

### Archiving Rules

You can only archive agents in certain states:

| Agent State | Can Archive? |
|-------------|--------------|
| UNLAUNCHED | Yes |
| SUSPENDED | Yes |
| REJECTED | Yes |
| PENDING | No |
| LAUNCHED | No |

### What Archiving Does

- Removes agent from visible list in Developer Console
- Agent stops being able to send/receive messages
- Historical data retained
- Cannot undo — archived agents cannot be unarchived

### If You Need to "Delete" a Launched Agent

1. **Contact Google Support** — Explain the situation
2. **Carrier de-registration** may be required
3. Support may be able to suspend the agent
4. Once suspended, it can be archived

### Common Scenarios

**Scenario: Test agent no longer needed**
- If UNLAUNCHED → Archive directly
- If LAUNCHED → Contact support first

**Scenario: Migrating to new agent**
- Create new agent with correct settings
- Launch new agent
- Contact support about old agent
- Old agent suspended → then archived

**Scenario: Reusing phone number for different brand**
- Cannot delete to free up the number
- Must coordinate with support for any phone number reassignment

### Implications for Planning

- **Choose settings carefully** — region, use case, billing category are difficult/impossible to change
- **Test thoroughly before launch** — post-launch changes are constrained
- **Plan for agent lifecycle** — build with long-term maintainability in mind

## Sources Consulted

- [agent-lifecycle](../concepts/agent-lifecycle.md)
- [manage-agents](../sources/manage-agents.md)
- [edit-agent-info](../sources/edit-agent-info.md)

## New Insights

Specific process for de-registering a launched agent is not documented. This would be a valuable pattern to capture if discovered.
