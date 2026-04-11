---
type: query
title: "Offline Message Queuing Behavior"
query: "What happens when I send an RCS message to an offline recipient? How long is it queued?"
answered: 2026-04-10
tags: [messaging, queuing, offline, delivery]
---

## Answer

When you send an RCS message to an offline recipient, the platform accepts and queues the message for up to **30 days**. The API returns success immediately even though the recipient hasn't received the message yet.

### Behavior Summary

| Event | What Happens |
|-------|--------------|
| Send to offline user | API returns `200 OK` |
| Platform behavior | Message queued for delivery |
| Queue duration | Up to **30 days** |
| User comes online | Message delivered automatically |
| After 30 days | Undelivered message **deleted** |

### Key Implications

1. **API success ≠ delivery** - A `200 OK` means the platform accepted the message, not that it was delivered
2. **No immediate delivery confirmation** - You must wait for the `DELIVERED` webhook event
3. **Stale content risk** - Messages sent weeks ago may be outdated when finally delivered
4. **Fallback timing** - Don't rely on the 30-day queue for time-sensitive messages

### Managing Offline Scenarios

#### Use TTL for Time-Sensitive Messages

Set `ttl` or `expireTime` to prevent stale delivery:

```json
{
  "contentMessage": { "text": "Your OTP is 123456" },
  "ttl": "300s"  // Expire after 5 minutes
}
```

When TTL expires:
- Message is automatically revoked
- You receive `TTL_EXPIRATION_REVOKED` notification
- Trigger SMS fallback

#### TTL Guidelines by Message Type

| Message Type | Recommended TTL |
|--------------|-----------------|
| OTP | 5-10 minutes |
| Appointment reminder | Hours before appointment |
| Promotional (dated offer) | Offer expiration date |
| Transactional (time-sensitive) | Business-appropriate window |
| General notification | Consider if fallback needed |

### Delivery Notification Flow

1. **Message sent** - `200 OK` returned
2. **User comes online** - Platform delivers message
3. **Delivery confirmed** - `DELIVERED` event sent to webhook
4. **User reads** - `READ` event sent to webhook

### 30-Day Queue vs TTL

| Scenario | 30-Day Queue | With TTL |
|----------|--------------|----------|
| User offline 2 days | Delivered day 3 | Delivered if < TTL |
| User offline 35 days | Message deleted | Revoked at TTL, fallback triggered |
| OTP message | Dangerous - stale OTP | Safe - expired before delivery |
| Marketing blast | May deliver weeks later | Controlled delivery window |

### Best Practices

1. **Always set TTL** for time-sensitive content
2. **Monitor `DELIVERED` events** to track actual delivery
3. **Implement fallback** for critical messages
4. **Consider capability check first** - Don't queue to non-RCS users

## Sources Consulted

- [send-messages](../sources/send-messages.md)
- [revoke-messages](../sources/revoke-messages.md)
- [message-expiration](../concepts/message-expiration.md)

## New Insights

- 30-day queue is platform behavior, not configurable
- No notification when message is deleted after 30 days (vs TTL which notifies)
- Consider this queue duration when designing message content
