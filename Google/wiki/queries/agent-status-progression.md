---
type: query
title: "Agent Status Progression and Immutability"
query: "What are the different agent statuses in Google RCS, and when do fields become immutable?"
answered: 2026-04-10
tags: [agent-lifecycle, immutability, launch]
---

## Answer

RBM agents progress through four main lifecycle stages, with specific fields becoming immutable at defined points:

### Status Progression

1. **Incomplete** — Agent created with initial details (brand, name, region, billing, use case). Additional info needed for launch.
2. **Ready for launch** — All agent and verification details provided. Launch questionnaire and carrier selection pending.
3. **Launch pending** — Submitted for launch, awaiting final approval from Google or carrier.
4. **Launched** — Live on at least one carrier and able to message production users.

### Immutability Points

| Field | When Locked | Can Change? |
|-------|-------------|-------------|
| Hosting region | At creation | Never |
| Use case | After launch submission | Create new agent |
| Billing category | After launch | Contact support |
| Agent info (logo, description, contact) | After verification submission | Must re-verify |

### Additional States for Archiving

Agents can be archived only in certain states:
- **UNLAUNCHED** — Can be archived
- **SUSPENDED** — Can be archived  
- **REJECTED** — Can be archived
- **PENDING** — Cannot be archived
- **LAUNCHED** — Cannot be archived

### Key Constraints

- Agents **cannot be deleted** — only archived for visibility management
- Post-launch edits require carrier approval
- Test devices required for pre-launch testing

## Sources Consulted

- [agent-lifecycle](../concepts/agent-lifecycle.md)
- [create-agent](../sources/create-agent.md)
- [edit-agent-info](../sources/edit-agent-info.md)
- [manage-agents](../sources/manage-agents.md)

## New Insights

None — this information is well documented in the wiki.
