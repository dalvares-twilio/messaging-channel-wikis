---
type: query
title: "TTL strategy for OTP messages"
query: "What TTL should I set for OTP messages and how should I handle expiration?"
answered: 2026-04-10
tags: [ttl, otp, fallback]
---

## Answer

OTPs require aggressive TTL settings to ensure timely delivery or rapid fallback.

### Recommended TTL for OTPs

| Parameter | Recommended Value |
|-----------|-------------------|
| TTL | **5-10 minutes** |
| Minimum safe | 10 seconds (avoid race conditions) |
| Maximum allowed | 15 days (but never for OTPs) |

### Why Short TTL for OTPs

1. **Security** - OTPs lose value over time
2. **UX** - Users expect immediate delivery
3. **Fallback timing** - Need time to send SMS backup
4. **Fraud prevention** - Stale OTPs increase risk

### TTL Flow for OTPs

```
1. Send OTP via RCS with TTL = 10 minutes
2. If DELIVERED event received:
   → Success, ignore subsequent TTL notifications
3. If TTL_EXPIRATION_REVOKED received:
   → Treat as undelivered
   → Trigger SMS fallback immediately
4. If no event and TTL elapsed:
   → Trigger SMS fallback
```

### Fallback Strategy

```
Time 0:00 - Send OTP via RCS (TTL = 10 min)
Time 0:10 - Check for DELIVERED event
  → Not delivered? Continue waiting
Time 10:00 - TTL expires
  → TTL_EXPIRATION_REVOKED received
  → Send OTP via SMS immediately
```

### Important Notes

**TTL Notifications:**
- `DELIVERED` - Message reached user (success)
- `TTL_EXPIRATION_REVOKED` - Revoked successfully (fallback)
- Other TTL status - Inconclusive, treat as failed for OTPs

**Manual Revocation Option:**
- `phones.agentMessages.delete` API
- Use if business logic requires earlier revocation
- `200 OK` = revoked, `404` = already delivered or in transit

### Anti-Patterns

**Don't do this:**
- TTL > 30 minutes for OTPs (defeats purpose)
- No fallback mechanism (single point of failure)
- Ignoring TTL_EXPIRATION_REVOKED (user never gets OTP)

### Message Traffic Type

For OTP messages, set traffic type explicitly:
```json
{
  "trafficType": "AUTHENTICATION"
}
```

## Sources Consulted

- [message-expiration](../concepts/message-expiration.md)
- [send-messages](../sources/send-messages.md)
- [revoke-messages](../sources/revoke-messages.md)

## New Insights

- Could add pattern: "OTP delivery with multi-channel fallback"
- Timing between TTL expiration and webhook notification not documented
- No guidance on retry timing for SMS fallback
