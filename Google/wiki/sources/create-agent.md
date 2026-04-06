---
type: source
title: "Create an Agent"
source_file: "[[raw/Create an agent    RCS for Business.md]]"
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

- [[wiki/concepts/agent-lifecycle]]
- [[wiki/concepts/use-cases]]
- [[wiki/concepts/billing-categories]]
- [[wiki/concepts/regional-endpoints]]

## Related Entities

- [[wiki/entities/rbm-api]]
- [[wiki/entities/developer-console]]
