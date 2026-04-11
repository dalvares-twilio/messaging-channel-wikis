---
type: query
title: "Use Case Selection Guide"
query: "How do I choose the right use case for my RBM agent (OTP, Transactional, Promotional, or Multi-use)?"
answered: 2026-04-10
tags: [use-cases, agent-creation, compliance]
---

## Answer

Every RBM agent must have a predefined use case that categorizes its messaging purpose. This is a critical decision because **use case cannot be changed after launch submission**.

### Four Use Cases

| Use Case | Purpose | Example Messages |
|----------|---------|------------------|
| **OTP** | One-time passwords for authentication | Login codes, transaction confirmations |
| **Transactional** | Notifications about existing services | Shipping updates, purchase confirmations, fraud alerts |
| **Promotional** | Marketing to drive engagement/sales | Discounts, new product announcements, campaigns |
| **Multi-use** | Combines transactional and promotional | Account notification followed by discount offer |

### Selection Criteria

**Choose OTP when:**
- Primary purpose is authentication codes
- Short-lived, time-sensitive messages
- Security-focused communications

**Choose Transactional when:**
- Sending updates about user's existing services/products
- Notifications triggered by user actions
- No marketing content included

**Choose Promotional when:**
- Marketing messages to drive awareness or sales
- Applicable to new or existing customers
- Discount offers, announcements, campaigns

**Choose Multi-use when:**
- Need to mix transactional and promotional content
- Example: "Your order shipped" + "Get 10% off next order"
- **Important**: Multi-use agents must set traffic type explicitly on each message

### Business Rules

- Each use case has specific rules about permitted message content
- Rules vary by country — check country-specific documentation before launch
- Violations can impact reputation score and carrier approval

### Immutability Warning

> Use case becomes **immutable after launch submission**. If you need a different use case, you must create a new agent.

## Sources Consulted

- [use-cases](../concepts/use-cases.md)
- [billing-categories](../concepts/billing-categories.md)
- [create-agent](../sources/create-agent.md)
- [send-messages](../sources/send-messages.md)

## New Insights

None — use case documentation is comprehensive in the wiki.
