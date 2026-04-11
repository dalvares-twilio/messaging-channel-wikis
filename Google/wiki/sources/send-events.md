---
type: source
title: "Send Events"
source_file: "[Send events    RCS for Business.md](../../raw/Send events    RCS for Business.md)"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/guides/build/events/send-events"
ingested: 2026-04-05
tags: [events, api, user-experience]
---

## Summary

Agents send status events to users to simulate human interactions — read receipts and typing indicators that assure users their messages are being processed.

## Key Points

### READ Event
- Appears as read receipt for specific message
- Indicates message delivered and agent processing
- Persisted and stored for **30 days**
- Queued if user RCS-enabled but unreachable
- Returns `NOT_FOUND` (404) if RCS not enabled
- Requires `messageId` to reference specific message

### IS_TYPING Event
- Appears as typing indicator
- Expires after ~**20 seconds** or when new message arrives
- Can send multiple to reset expiration timer
- **Ephemeral** — not queued

## Related Concepts

- [async-processing](../concepts/async-processing.md)

## Related Entities

- [rbm-api](../entities/rbm-api.md)
