---
type: source
title: "Synchronous and Asynchronous Operations"
source_file: "[[raw/Synchronous and asynchronous operations in RCS for Business.md]]"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/synchronous-asynchronous-operations"
ingested: 2026-04-05
tags: [api, architecture, webhooks]
---

## Summary

RBM API interactions follow a synchronous request-response pattern at HTTP level, but message delivery and many results are handled asynchronously through webhooks.

## Key Points

### Message Sending
- `phones.agentMessages.create`: **synchronous** HTTP request
- Response indicates request received and valid
- **Actual delivery**: asynchronous
  - Affected by: recipient status (offline, battery, RCS disabled), network conditions
- Rely on webhook events for delivery status, not API response

### Other HTTP APIs
- Request-response is synchronous
- Resulting actions may be asynchronous
- Example: agent info update may have short propagation delay

### Asynchronous Webhook Events
- Incoming user messages
- Delivery and read receipts
- Conversation events (typing indicators)
- Message expiration and revocation events

## Related Concepts

- [[wiki/concepts/async-processing]]

## Related Entities

- [[wiki/entities/rbm-api]]
