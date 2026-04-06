---
type: concept
title: "Messaging Limits"
tags: [limits, throughput, conversations]
---

## Definition

Messaging limits control how many unique customers a business can message within a 24-hour period. Limits are set at the business portfolio level and can be increased based on quality and volume.

## Limit Tiers

| Tier | Conversations/Day |
|------|-------------------|
| TIER_250 | 250 |
| TIER_2K | 2,000 |
| TIER_10K | 10,000 |
| TIER_100K | 100,000 |
| TIER_UNLIMITED | Unlimited |

## Increasing Limits

Limits increase automatically when:
- Phone number status is **Connected**
- Phone number quality rating is **Medium** or **High**
- Sufficient messaging volume within current tier

## Related Webhooks

- `business_capability_update` — Notifies of limit changes
- `account_alerts` — Notifies when limit increase is denied/deferred

## Sources

- [[wiki/sources/business-capability-webhook-reference]]
- [[wiki/sources/account-alerts-webhook-reference]]
