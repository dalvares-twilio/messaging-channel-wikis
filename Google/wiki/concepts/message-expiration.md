---
type: concept
title: "Message Expiration"
aliases: [TTL, time to live, message revocation]
sources: 3
---

## Overview

Message expiration allows agents to set a time limit for message delivery. If not delivered within the TTL, the message is automatically revoked, enabling fallback strategies.

## Details

### Setting Expiration
- `expireTime`: exact UTC time when message expires
- `ttl`: duration before expiration
- **Max**: 15 days after submission
- **Recommended min**: 10 seconds (to avoid race conditions)

### TTL Behavior
1. Message sent with TTL
2. If delivered before expiration → `DELIVERED` notification
3. If not delivered before expiration → automatic revocation attempt
4. Revocation result sent to webhook

### Notifications

| Notification | Meaning | Action |
|--------------|---------|--------|
| `DELIVERED` | Message reached user | Success, ignore subsequent TTL notifications |
| `TTL_EXPIRATION_REVOKED` | Revoked successfully | Treat as undelivered, trigger fallback |
| Other TTL status | Inconclusive | Critical messages → fallback; non-critical → optional |

### Use Cases
- **OTP**: short TTL (~10 min), fallback to SMS
- **Fraud alerts**: short TTL, must reach user quickly
- **Promotions**: longer TTL, expiration date-based
- **Appointments**: expire after appointment date

### Manual Revocation
- `phones.agentMessages.delete` API
- `200 OK`: revoked
- `404 Not Found`: already delivered or in transit

### Offline Queuing
- Messages queued up to **30 days** (general)
- Capability cache valid for **31 days**

## Related

- [async-processing](../concepts/async-processing.md)

## Sources

- [send-messages](../sources/send-messages.md)
- [revoke-messages](../sources/revoke-messages.md)
- [receive-events](../sources/receive-events.md)
