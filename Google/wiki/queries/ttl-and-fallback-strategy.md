---
type: query
title: "TTL and SMS Fallback Strategy"
query: "How do I set up TTL for RCS messages and implement SMS fallback? What TTL values should I use?"
answered: 2026-04-10
tags: [ttl, fallback, sms, expiration, reliability]
---

## Answer

Message expiration (TTL) allows agents to set time limits for delivery. Combined with expiration notifications, this enables reliable SMS fallback for time-sensitive messages.

### Setting TTL

Two options for specifying expiration:

| Field | Format | Example |
|-------|--------|---------|
| `expireTime` | Exact UTC timestamp | `2026-04-10T15:00:00Z` |
| `ttl` | Duration | `600s` (10 minutes) |

### TTL Limits

- **Maximum**: 15 days after submission
- **Recommended minimum**: 10 seconds (to avoid race conditions)
- **Offline queue**: Messages queued up to 30 days regardless of TTL

### Recommended TTL by Use Case

| Use Case | TTL | Rationale |
|----------|-----|-----------|
| OTP/Authentication | 5-10 minutes | Must be timely; user waiting |
| Fraud alerts | 5-15 minutes | Urgency critical |
| Booking confirmation | 1-4 hours | User expects prompt notification |
| Appointment reminder | 24 hours | Day-of relevance |
| Promotional | 3-7 days | Offer validity period |

### Fallback Strategy Flow

```
1. Send RCS message with TTL
2. Wait for webhook notification
3. Handle notification:
   - DELIVERED → Success, no fallback needed
   - TTL_EXPIRATION_REVOKED → Trigger SMS fallback
   - Other TTL status → For critical messages, fallback anyway
```

### TTL Notifications Explained

| Notification | Meaning | Action |
|--------------|---------|--------|
| `DELIVERED` | Reached user before expiration | Success; ignore any subsequent TTL notifications |
| `TTL_EXPIRATION_REVOKED` | Expired and successfully revoked | Treat as undelivered; send SMS |
| Other TTL status | Inconclusive | Critical messages: fallback; Non-critical: optional |

### Important: Race Conditions

If `DELIVERED` arrives after `TTL_EXPIRATION_REVOKED`:
- The `DELIVERED` notification wins
- Do not send SMS if you already saw `DELIVERED`
- Track state per message to avoid double-delivery

### Manual Revocation

For messages you want to cancel before TTL:

```
DELETE phones.agentMessages
```

Responses:
- `200 OK`: Successfully revoked
- `404 Not Found`: Already delivered or in transit

### Implementation Pattern

```python
# Pseudo-code
def send_with_fallback(phone, content, ttl_seconds):
    msg_id = send_rcs(phone, content, ttl=ttl_seconds)
    store_pending(msg_id, phone, content)
    
def handle_webhook(event):
    msg_id = event.message_id
    if event.type == "DELIVERED":
        mark_delivered(msg_id)
    elif event.type == "TTL_EXPIRATION_REVOKED":
        if not is_delivered(msg_id):
            send_sms_fallback(msg_id)
```

## Sources Consulted

- [message-expiration](../concepts/message-expiration.md)
- [send-messages](../sources/send-messages.md)
- [revoke-messages](../sources/revoke-messages.md)
- [receive-events](../sources/receive-events.md)

## New Insights

- Race condition handling between DELIVERED and TTL notifications not well documented
- No built-in SMS fallback; requires separate SMS provider integration
- "Other TTL status" states not enumerated in documentation
