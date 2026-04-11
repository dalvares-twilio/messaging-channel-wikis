---
type: source
title: "Create an Agent"
source_file: "[Create an agent    RCS for Business.md](../../raw/Create an agent    RCS for Business.md)"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/guides/build/agents"
ingested: 2026-04-05
tags: [agents, setup, configuration]
---

## Summary

RBM agents are programmatic entities representing brands that send messages to users via RCS-enabled messaging apps (iMessage, Google Messages). Messages appear with branding, logo, description, and contact info.

Creating an agent requires specifying: brand, agent name, hosting region, billing category, and use case. These decisions have varying permanence — region and use case cannot be changed after creation/launch.

## Key Points

- Agents use RCS Business Messaging API to communicate with users
- Create via Developer Console or Business Communications API
- **Cannot delete agents** for security reasons — contact support if needed
- Three hosting regions: North America, Europe, Asia Pacific (choose by regulation/proximity)
- Region determines data storage location; all regions access all carriers equally
- **Billing categories**: Conversational (multi-turn) vs Non-conversational (one-way)
- **Use cases**: OTP, Transactional, Promotional, Multi-use
- Use case determines business rules for message content
- Service account key required for API authentication

## Related Concepts

- [agent-lifecycle](../concepts/agent-lifecycle.md)
- [use-cases](../concepts/use-cases.md)
- [billing-categories](../concepts/billing-categories.md)
- [regional-endpoints](../concepts/regional-endpoints.md)

## Related Entities

- [rbm-api](../entities/rbm-api.md)
- [developer-console](../entities/developer-console.md)
