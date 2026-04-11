---
type: pattern
title: "TTL Selection by Message Urgency"
applies_to: "Message expiration and SMS fallback strategy"
confidence: "high"
learned_from: "message-expiration concept, ttl-and-fallback-strategy query, ottm-implementation"
---

## Pattern

Set TTL proportional to message urgency: short (5-15 min) for authentication/alerts, medium (1-24 hours) for transactional, long (3-7 days) for promotional messages.

## When to Apply

- Sending any RCS message where delivery timing matters
- Implementing SMS fallback for time-sensitive communications
- Balancing RCS delivery attempts with fallback urgency

## When NOT to Apply

- Test messages during development (can use any TTL)
- Messages where late delivery is acceptable (can omit TTL)
- Internal system messages not requiring fallback

## TTL Recommendations by Use Case

| Use Case | TTL | Rationale |
|----------|-----|-----------|
| OTP/Authentication | 5-10 minutes | User waiting; code has short validity |
| Fraud alerts | 5-15 minutes | Urgency critical for security |
| Booking confirmation | 1-4 hours | User expects prompt notification |
| Appointment reminder | 24 hours | Day-of relevance |
| Promotional | 3-7 days | Tied to offer validity period |

## Fallback Flow

```
1. Send RCS message with TTL
2. Wait for webhook notification
3. Handle notification:
   - DELIVERED -> Success, no fallback
   - TTL_EXPIRATION_REVOKED -> Trigger SMS fallback
   - Other TTL status -> For critical messages, fallback anyway
```

## Examples

- OTP: `ttl: "600s"` (10 minutes), fallback to SMS immediately on expiration
- Shipping update: `ttl: "14400s"` (4 hours), fallback to SMS
- Flash sale: `expireTime: "2026-04-15T23:59:00Z"` tied to sale end date

## Race Condition Handling

If `DELIVERED` arrives after `TTL_EXPIRATION_REVOKED`:
- The `DELIVERED` notification wins
- Track state per message to avoid double-delivery

## Related

- [message-expiration](../concepts/message-expiration.md)
- [capability-check-then-send](../patterns/capability-check-then-send.md)

## Sources

- [send-messages](../sources/send-messages.md)
- [revoke-messages](../sources/revoke-messages.md)
- [ttl-and-fallback-strategy](../queries/ttl-and-fallback-strategy.md)
- [ottm-implementation](../sources/ottm-implementation.md)
