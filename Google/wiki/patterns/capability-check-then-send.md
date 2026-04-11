---
type: pattern
title: "Capability Check Then Send"
applies_to: "Pre-send device validation and channel routing"
confidence: "high"
learned_from: "capability-checks source, capability-check-before-messaging query"
---

## Pattern

Check device RCS capability before sending to route messages appropriately: RCS for capable devices, immediate SMS fallback for 404 responses.

## When to Apply

- Before sending any RCS message to a new recipient
- Building multi-channel messaging flows (RCS + SMS)
- Optimizing delivery by avoiding doomed RCS attempts
- Large campaigns where pre-filtering saves resources

## When NOT to Apply

- Replying to user-initiated RCS conversations (already confirmed capable)
- Test devices (already validated during setup)
- When TTL-based fallback is acceptable without pre-check

## Recommended Flow

```
1. Check capability (single or bulk)
2. If capable -> Send RCS message with TTL
3. If 404 -> Fall back to SMS immediately
4. If TTL expires -> Fall back to SMS
```

## Single vs Bulk Check

| Check Type | Use When | Limitations |
|------------|----------|-------------|
| Single | Individual messages, real-time flows | One phone per request |
| Bulk | Campaigns (500-10K recipients) | No per-device features; cache-based |

## Examples

- Real-time OTP: Single capability check, then send RCS or SMS
- Marketing campaign: Bulk check to pre-filter RCS-capable list, send RCS to capable, SMS to rest

## API Response Handling

```
GET /v1/phones/{phone}/capabilities

200 OK + features -> Device supports RCS
404 NOT_FOUND   -> No RCS support or agent not launched on carrier
                   -> Do NOT retry, fall back immediately
```

## Important Notes

- Capability cache valid for 31 days
- Bulk check reads from cache (may have stale data)
- 404 does not distinguish between "no RCS" and "agent not launched"

## Related

- [message-expiration](../concepts/message-expiration.md)
- [ttl-by-message-urgency](../patterns/ttl-by-message-urgency.md)
- [error-recovery-by-code](../patterns/error-recovery-by-code.md)

## Sources

- [capability-checks](../sources/capability-checks.md)
- [capability-check-before-messaging](../queries/capability-check-before-messaging.md)
- [error-404-not-found-handling](../queries/error-404-not-found-handling.md)
