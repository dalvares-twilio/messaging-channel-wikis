---
type: query
title: "What are the messaging limit tiers on WhatsApp Business Platform?"
asked: 2026-04-10
tags: [limits, tiers, conversations, capacity]
---

## Question

What are the messaging limit tiers on WhatsApp Business Platform?

## Answer

Messaging limits control how many unique customers a business can message within a 24-hour period. Limits are set at the business portfolio level.

### Limit Tiers

| Tier | Conversations/Day |
|------|-------------------|
| TIER_250 | 250 |
| TIER_2K | 2,000 |
| TIER_10K | 10,000 |
| TIER_100K | 100,000 |
| TIER_UNLIMITED | Unlimited |

### Automatic Limit Increases

Limits increase automatically when all these conditions are met:
- Phone number status is **Connected**
- Phone number quality rating is **Medium** or **High**
- Sufficient messaging volume within current tier

### Limit Increase Denied/Deferred

If a limit increase is denied or deferred, you receive an `account_alerts` webhook with:
- Alert type: `INCREASED_CAPABILITIES_ELIGIBILITY_DEFERRED`
- Alert severity: `WARNING` or `CRITICAL`

### Related Webhooks

| Webhook | Purpose |
|---------|---------|
| `business_capability_update` | Notifies when limits actually change |
| `account_alerts` | Notifies when limit increase is denied/deferred |

### Best Practices

1. Monitor quality rating to maintain increase eligibility
2. Subscribe to `business_capability_update` webhook for limit changes
3. Subscribe to `account_alerts` for denied/deferred notifications
4. Grow volume gradually to trigger automatic increases
5. Maintain high message quality to avoid downgrades

## References

- [messaging-limits](../concepts/messaging-limits.md)
- [business-capability-webhook-reference](../sources/business-capability-webhook-reference.md)
- [account-alerts-webhook-reference](../sources/account-alerts-webhook-reference.md)
