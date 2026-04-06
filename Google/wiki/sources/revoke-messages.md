---
type: source
title: "Revoke Messages"
source_file: "[[raw/Revoke messages    RCS for Business.md]]"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/revoke"
ingested: 2026-04-05
tags: [messaging, api, fallback]
---

## Summary

Agents can revoke sent but undelivered messages to prevent stale content from reaching users. This supports fallback strategies by allowing timely rerouting via SMS.

## Key Points

### Two Revocation Methods
1. **Revocation request**: `phones.agentMessages.delete` API call
   - `200 OK`: message revoked, deleted from queue
   - `404 Not Found`: revocation failed (likely already delivered)
2. **Message expiration**: set `ttl` or `expireTime` for automatic revocation

### Use Cases
- OTP messages: revoke after ~10 minutes
- Promotional messages: revoke on expiration date
- Time-sensitive content: revoke in time for SMS fallback

### Failure Handling
- Revocation can fail if delivery in progress
- Check for `DELIVERED` event at webhook
- If not delivered, send new revocation request
- Route to alternate channel (SMS) for timely delivery

## Related Concepts

- [[wiki/concepts/message-expiration]]
- [[wiki/concepts/async-processing]]

## Related Entities

- [[wiki/entities/rbm-api]]
