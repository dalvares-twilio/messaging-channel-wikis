---
type: concept
title: "Agent Lifecycle"
aliases: [agent status, agent states]
sources: 4
---

## Overview

RBM agents progress through defined lifecycle stages from creation to launch. Understanding this lifecycle is critical because certain configurations become immutable at specific stages.

## Details

### Status Progression

1. **Incomplete** — Agent created with initial details (brand, name, region, billing, use case). Additional info needed for launch.
2. **Ready for launch** — All agent and verification details provided. Launch questionnaire/carrier selection pending.
3. **Launch pending** — Submitted for launch, awaiting final approval.
4. **Launched** — Live on at least one carrier.

### Immutability Points

| Field | When Locked |
|-------|-------------|
| Hosting region | At creation |
| Use case | After launch submission |
| Billing category | After launch (contact support to change) |
| Agent info | After verification submission |

### Additional States (for archiving)

- **UNLAUNCHED** — Can be archived
- **SUSPENDED** — Can be archived
- **REJECTED** — Can be archived
- **PENDING** — Cannot be archived
- **LAUNCHED** — Cannot be archived

### Key Constraints

- Agents **cannot be deleted** — only archived for visibility management
- Post-launch edits require carrier approval
- Test devices required for pre-launch testing

## Related

- [[wiki/concepts/use-cases]]
- [[wiki/concepts/billing-categories]]
- [[wiki/concepts/regional-endpoints]]

## Sources

- [[wiki/sources/create-agent]]
- [[wiki/sources/edit-agent-info]]
- [[wiki/sources/manage-agents]]
- [[wiki/sources/test-devices]]
