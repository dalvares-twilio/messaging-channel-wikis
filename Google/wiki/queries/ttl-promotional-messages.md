---
type: query
title: "TTL strategy for promotional messages"
query: "How should I set TTL for promotional messages that have expiration dates?"
answered: 2026-04-10
tags: [ttl, promotional, expiration]
---

## Answer

Promotional messages require TTL aligned with offer validity, not arbitrary technical limits.

### TTL Strategy by Promotion Type

| Promotion Type | Recommended TTL | Rationale |
|----------------|-----------------|-----------|
| Flash sale (hours) | Sale end time | No value after sale ends |
| Daily deal | End of day (UTC) | Stale next day |
| Weekly offer | Offer expiration | Still valuable until expired |
| Event announcement | Event start time | Useless after event |
| Appointment reminder | Appointment time | Too late after |

### Using `expireTime` vs `ttl`

**`expireTime`** - Exact UTC timestamp when message expires
- Best for: Offers with fixed end dates
- Example: `"expireTime": "2026-04-15T23:59:59Z"`

**`ttl`** - Duration from send time
- Best for: Relative expiration (e.g., "24 hours from now")
- Example: `"ttl": "86400s"` (24 hours)

### Flow for Promotional Messages

```
1. Determine offer validity period
2. Set expireTime = offer_end_date OR ttl = time_until_offer_ends
3. Send message
4. If DELIVERED:
   → Success, user will see offer
5. If TTL_EXPIRATION_REVOKED:
   → Offer expired undelivered
   → Optional: Skip SMS fallback (low urgency)
   → Optional: Queue for next promotion
```

### Fallback Considerations

Unlike OTPs, promotional messages don't always need fallback:

| Scenario | Fallback? | Rationale |
|----------|-----------|-----------|
| High-value offer | Yes | Revenue justifies SMS cost |
| General announcement | No | Low urgency |
| Time-sensitive sale | Yes | Short window |
| Recurring promo | No | User will see next one |

### Longer TTL Considerations

**Maximum TTL: 15 days**

For longer campaigns:
- Messages queued up to **30 days** for offline devices
- Capability cache valid **31 days**
- Consider: Is a 2-week-old promo still relevant?

### Best Practices

1. **Align TTL with business value** - When is message worthless?
2. **Consider user experience** - Old promos create confusion
3. **Track TTL_EXPIRATION_REVOKED** - Measure undelivered promos
4. **Segment by engagement** - Shorter TTL for low-engagement users

### Example: Flash Sale

```json
{
  "contentMessage": {
    "text": "Flash sale! 50% off for next 4 hours only."
  },
  "ttl": "14400s",
  "trafficType": "PROMOTION"
}
```

## Sources Consulted

- [message-expiration](../concepts/message-expiration.md)
- [send-messages](../sources/send-messages.md)
- [revoke-messages](../sources/revoke-messages.md)

## New Insights

- Could add pattern: "TTL selection by message urgency"
- No guidance on re-engagement strategy for expired promos
- Analytics for TTL_EXPIRATION rate by campaign type not documented
