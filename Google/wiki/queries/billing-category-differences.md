---
type: query
title: "Billing Category Differences"
query: "What's the difference between Conversational and Non-conversational billing categories, and how do I choose?"
answered: 2026-04-10
tags: [billing, agent-creation, pricing]
---

## Answer

RBM agents are assigned a billing category that reflects their interaction pattern with users. This affects how messaging costs are calculated.

### Two Categories

| Category | Interaction Pattern | Examples |
|----------|---------------------|----------|
| **Conversational** | Multi-turn conversations with users | Customer support, interactive services, chatbots |
| **Non-conversational** | One-way messages without frequent replies | Notifications, OTPs, alerts, delivery updates |

### Selection Criteria

**Choose Conversational when:**
- Users actively engage in back-and-forth dialogue
- Agent handles customer support queries
- Interactive services requiring user input
- Rich conversational experiences with suggestions and actions

**Choose Non-conversational when:**
- Primarily sending notifications/alerts
- OTP/authentication messages
- Delivery or status updates
- User replies are rare or not expected

### Mutability Constraints

| When | Can Change? |
|------|-------------|
| Before agent creation | Yes |
| After agent creation | No |
| After launch | Contact RCS for Business support team |

> **Warning**: Billing category can only be changed **before creating** the agent. Post-launch changes require contacting Google support.

### Cost Implications

- Billing model affects per-message or per-conversation pricing
- Choose based on expected interaction pattern to optimize costs
- Mismatch between billing category and actual usage may result in higher costs

## Sources Consulted

- [billing-categories](../concepts/billing-categories.md)
- [agent-lifecycle](../concepts/agent-lifecycle.md)
- [create-agent](../sources/create-agent.md)

## New Insights

The wiki does not detail specific pricing differences between categories. This may vary by region and carrier.
