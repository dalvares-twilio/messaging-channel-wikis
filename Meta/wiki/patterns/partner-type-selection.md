---
type: pattern
title: "Partner Type Selection"
applies_to: "Deciding between Solution Partner and Tech Provider roles"
confidence: "high"
learned_from: "solution-partner-vs-tech-provider query, onboarding-solution-partner source"
---

## Pattern

Choose Solution Partner when you can handle billing responsibility; choose Tech Provider when you want technical integration only; use Multi-Partner Solution (MPS) when Tech Provider needs Solution Partner for billing.

## When to Apply

- Starting as a WhatsApp Business Platform partner
- Evaluating revenue model for messaging services
- Deciding on billing relationship with customers

## Decision Tree

```
Can you handle billing for customer WhatsApp spend?
├── Yes → Solution Partner
│   └── Requires: Line of credit before onboarding
└── No → Tech Provider
    └── Can partner with someone who handles billing?
        ├── Yes → Multi-Partner Solution (Tech Provider + Solution Partner)
        │   └── Benefit: 200 customers/7 days vs 10 for standalone
        └── No → Tech Provider (customers pay Meta directly)
```

## Key Differences

| Aspect | Solution Partner | Tech Provider |
|--------|------------------|---------------|
| Credit line sharing | Required | Not applicable |
| Billing liability | Partner liable | Customer pays directly |
| Customer payment setup | Not needed | Required (WhatsApp Manager) |
| Template messages | Immediate | After customer adds payment |
| Onboarding limit | 10/7 days (solo), 200/7 days (MPS) | 10/7 days (solo), 200/7 days (MPS) |

## When NOT to Apply

- Businesses integrating for own use (not reselling)
- Existing partners evaluating role change (migration patterns apply)

## Examples

- CPaaS platform with existing billing: Solution Partner
- Pure-play messaging platform, no billing system: Tech Provider in MPS
- CRM vendor adding WhatsApp channel: Tech Provider (customers pay directly)

## Related

- [solution-partners](../concepts/solution-partners.md)
- [mps-architecture-decision](mps-architecture-decision.md)
- [embedded-signup-method-selection](embedded-signup-method-selection.md)

## Sources

- [onboarding-solution-partner](../sources/onboarding-solution-partner.md)
- [onboarding-tech-provider](../sources/onboarding-tech-provider.md)
- [multi-partner-solutions](../sources/multi-partner-solutions.md)
