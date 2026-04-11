---
type: pattern
title: "Embedded Signup Method Selection"
applies_to: "Partner onboarding implementation decisions"
confidence: "high"
learned_from: "hosted-vs-standard-embedded-signup query, embedded-signup-overview source"
---

## Pattern

Choose Hosted Embedded Signup when development resources are limited and no customization is needed; choose Standard Embedded Signup when you need pre-filling, custom flows, or high-volume onboarding.

## When to Apply

- Evaluating partner onboarding implementation approach
- Planning development effort for customer acquisition
- Deciding whether to invest in SDK integration

## Decision Matrix

| Criteria | Choose Hosted | Choose Standard |
|----------|---------------|-----------------|
| Development resources | Limited | Available |
| Time to market | Critical | Flexible |
| Volume expectations | Low-medium | High |
| Need pre-verified numbers | No | Yes |
| Need pre-fill business data | No | Yes |
| Skip screens in flow | No | Yes |
| On-Premises API support | Not needed | Required |

## When NOT to Apply

- Direct API integrators not using solution partner model
- Businesses creating WABAs via App Dashboard or MBS
- Existing WABAs being migrated (use migration patterns instead)

## Examples

- Startup with 1 developer, 10 expected signups/month: Hosted ES
- Enterprise platform onboarding 500 businesses/month with CRM integration: Standard ES with pre-fill
- Partner offering pre-purchased phone numbers: Standard ES with preVerifiedPhone

## Related

- [embedded-signup](../concepts/embedded-signup.md)
- [partner-type-selection](partner-type-selection.md)

## Sources

- [hosted-embedded-signup](../sources/hosted-embedded-signup.md)
- [embedded-signup-implementation](../sources/embedded-signup-implementation.md)
- [pre-filling-screens](../sources/pre-filling-screens.md)
