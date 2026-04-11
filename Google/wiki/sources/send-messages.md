---
type: source
title: "Send Messages"
source_file: "[Send messages    RCS for Business.md](../../raw/Send messages    RCS for Business.md)"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/send"
ingested: 2026-04-05
tags: [messaging, api, content-types]
---

## Summary

RBM agents send messages via the RCS Business Messaging API. Messages can include text, rich cards, media/PDFs, suggested replies, and suggested actions. The platform handles offline queuing and provides expiration/revocation mechanisms.

## Key Points

### Error Handling
- `404 NOT_FOUND`: device doesn't support RCS, RCS disabled, or agent not launched on carrier
- `400 INVALID_ARGUMENT`: message features not supported by device

### Offline Recipients
- Platform accepts message and returns `200 OK`
- Queued and retried for **30 days**
- Undelivered messages deleted after 30 days

### Message Expiration
- `expireTime`: exact UTC time when message expires
- `ttl`: time to live duration
- Max: **15 days** after submission
- Recommended minimum: **10 seconds**
- Triggers automatic revocation and fallback

### TTL Notifications
- `DELIVERED`: message reached user (ignore any subsequent TTL notifications)
- `TTL_EXPIRATION_REVOKED`: message revoked, treat as undelivered
- Other TTL status: inconclusive — use fallback for critical messages

### Message Traffic Types
- `AUTHENTICATION`: OTPs
- `TRANSACTION`: confirmations, receipts, booking details
- `PROMOTION`: offers, discounts, announcements
- `SERVICEREQUEST`: user-requested services
- `ACKNOWLEDGEMENT`: unsubscribe confirmations
- Multi-use agents **must** set traffic type explicitly

### Size Limits
- Overall `AgentMessage`: **250 KB**
- Text: **3072 characters**
- Media/PDFs: **100 MiB** total per message

### Basic Message (SMS conversion)
- Up to 160 UTF-8 characters
- Multi-byte characters (emoji) count as 2-4+ characters

## Related Concepts

- [message-expiration](../concepts/message-expiration.md)

## Related Entities

- [rbm-api](../entities/rbm-api.md)
