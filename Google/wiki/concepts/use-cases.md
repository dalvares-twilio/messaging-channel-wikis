---
type: concept
title: "Use Cases"
aliases: [agent use case, message categories]
sources: 1
---

## Overview

Every RBM agent must have a predefined use case that categorizes its messaging purpose. The use case determines which business rules apply for message content and cannot be changed after launch submission.

## Details

### Four Use Cases

1. **OTP** — One-time passwords for secure authentication or transaction confirmation
2. **Transactional** — Notifications, updates, alerts about customer's existing services/products (suspicious activity, purchase confirmations, shipping notifications)
3. **Promotional** — Sales, marketing messages to new/existing customers for awareness, engagement, sales
4. **Multi-use** — Combines transactional and promotional (e.g., account notification followed by discount offer)

### Business Rules

Each use case has specific rules about permitted message content. Rules vary by country — check country-specific documentation before launch submission.

### Selection Guidance

- Single-purpose agents: match use case to primary function
- Mixed messaging: use Multi-use
- Consider user experience and compliance requirements

## Related

- [agent-lifecycle](../concepts/agent-lifecycle.md)
- [billing-categories](../concepts/billing-categories.md)

## Sources

- [create-agent](../sources/create-agent.md)
