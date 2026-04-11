---
type: pattern
title: "MPS Architecture Decision"
applies_to: "Deciding when and how to use Multi-Partner Solutions"
confidence: "high"
learned_from: "what-is-multi-partner-solution query, multi-partner-solutions source"
---

## Pattern

Use Multi-Partner Solution when a Tech Provider needs billing infrastructure from a Solution Partner; evaluate single-partner vs MPS based on volume needs (200 vs 10 customers per 7 days) and operational complexity.

## When to Apply

- Tech Provider evaluating go-to-market strategy
- Solution Partner considering partnership expansion
- Evaluating scaling constraints for customer onboarding

## Decision Framework

```
Are you a Tech Provider without billing capability?
├── Yes → MPS likely beneficial
│   └── Do you expect >10 new customers per 7 days?
│       ├── Yes → MPS strongly recommended (200/7 days limit)
│       └── No → Evaluate complexity vs benefit
└── No (Solution Partner) → Consider MPS if:
    └── You want to partner with specialized Tech Providers
        └── Extends your reach without technical investment
```

## MPS Benefits

| Benefit | Impact |
|---------|--------|
| Higher onboarding limit | 200 vs 10 customers per 7-day window |
| Shared expertise | Tech + billing specialization |
| Customers use shared credit line | No payment setup friction |

## MPS Complexity Costs

- Two-party coordination required
- Solution status lifecycle management (Draft, Pending, Active, etc.)
- Partner acceptance workflow
- Webhook setup for both partners
- Deactivation requires partner agreement

## Solution States to Monitor

| State | Action Required |
|-------|-----------------|
| Draft | Send to partner |
| Pending | Wait for acceptance |
| Active | Ready to onboard |
| Pending deactivation | Wait for partner approval |
| Deactivated | Cannot onboard |
| Inactive | Partner declined |

## When NOT to Apply

- Already a Solution Partner with billing capability and <10 customers/week
- Need to start onboarding immediately (MPS setup takes time)
- Partner relationship unreliable

## Examples

- WhatsApp-focused startup, no billing: Partner with established Solution Partner
- Regional ISV with CRM integration: MPS with CPaaS partner for billing
- Enterprise messaging platform with billing: Solution Partner (no MPS needed)

## Related

- [solution-partners](../concepts/solution-partners.md)
- [partner-type-selection](partner-type-selection.md)
- [embedded-signup-method-selection](embedded-signup-method-selection.md)

## Sources

- [multi-partner-solutions](../sources/multi-partner-solutions.md)
- [partner-solutions-webhook-reference](../sources/partner-solutions-webhook-reference.md)
