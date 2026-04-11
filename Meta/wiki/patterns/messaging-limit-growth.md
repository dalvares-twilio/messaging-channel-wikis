---
type: pattern
title: "Messaging Limit Growth Strategy"
applies_to: "Growing from TIER_250 to TIER_UNLIMITED conversations"
confidence: "high"
learned_from: "messaging-limit-tiers query, messaging-limits concept"
---

## Pattern

Messaging limits increase automatically when phone status is CONNECTED, quality rating is Medium or High, and volume approaches current tier; focus on quality over quantity to unlock higher tiers.

## When to Apply

- Planning messaging volume ramp-up
- Troubleshooting why limits are not increasing
- Customer asks about reaching higher tiers

## Tier Progression

```
TIER_250 → TIER_2K → TIER_10K → TIER_100K → TIER_UNLIMITED
```

| Tier | Conversations/Day |
|------|-------------------|
| TIER_250 | 250 |
| TIER_2K | 2,000 |
| TIER_10K | 10,000 |
| TIER_100K | 100,000 |
| TIER_UNLIMITED | Unlimited |

## Requirements for Automatic Increase

All three conditions must be met:

1. **Phone number status = CONNECTED**
   - Not just added, must complete registration
   - Check via `GET /<PHONE_ID>?fields=status`

2. **Quality rating = Medium or High**
   - Based on user feedback, block rates
   - Low quality blocks increases

3. **Sufficient volume within current tier**
   - Must demonstrate usage near current limit
   - Gradual growth preferred over sudden spikes

## Growth Blockers

| Issue | Resolution |
|-------|------------|
| Status not CONNECTED | Complete registration |
| Quality rating LOW | Improve message quality, reduce blocks |
| Volume too low | Increase usage toward tier limit |
| Limit deferred | Check `account_alerts` webhook for reason |

## Monitoring Webhooks

| Webhook | Purpose |
|---------|---------|
| `business_capability_update` | Notifies when limits actually change |
| `account_alerts` | Notifies when increase denied/deferred |

Alert types for denied increases:
- `INCREASED_CAPABILITIES_ELIGIBILITY_DEFERRED` (WARNING or CRITICAL)

## When NOT to Apply

- New accounts (start at TIER_250, cannot skip)
- Low-volume use cases where TIER_250 is sufficient

## Examples

- Brand new business: Start at TIER_250, grow gradually
- Quality rating dropped to LOW: Pause growth, focus on improving templates
- Hit 80% of TIER_2K with HIGH quality: Expect automatic increase soon

## Related

- [messaging-limits](../concepts/messaging-limits.md)
- [phone-number-registration-decision](phone-number-registration-decision.md)

## Sources

- [business-capability-webhook-reference](../sources/business-capability-webhook-reference.md)
- [account-alerts-webhook-reference](../sources/account-alerts-webhook-reference.md)
