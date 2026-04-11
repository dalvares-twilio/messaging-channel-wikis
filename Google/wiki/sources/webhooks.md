---
type: source
title: "Webhooks"
source_file: "[RCS for Business    Google for Developers.md](../../raw/RCS for Business    Google for Developers.md)"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/guides/integrate/webhooks"
ingested: 2026-04-05
tags: [webhooks, integration, security]
---

## Summary

Webhooks are partner-specified URL endpoints where the RBM platform sends messages and events via HTTPS POST requests. They enable real-time communication between user devices and your backend systems.

Webhooks can be configured at two levels: partner-level (applies to all agents) or agent-level (individual agents with distinct behavior). When both exist, agent webhooks take precedence for their specific agent.

Security is critical — incoming messages must be verified using HMAC-SHA512 with the `clientToken` and comparing against the `X-Goog-Signature` header.

## Key Points

- Webhook URL receives HTTPS POST requests with message/event data
- Partner webhooks apply to all agents; agent webhooks override for specific agents
- Configure via Business Communications Developer Console or API
- Must verify webhook by responding with `secret` value when `clientToken` matches
- Verify incoming messages using SHA512 HMAC with `clientToken` as key
- Design for **asynchronous processing** — return `200 OK` immediately, process later
- Non-200 responses trigger backoff/retry mechanism (up to 7 days)
- Failed webhooks for one agent can impact delivery to other agents (shared queue)
- 600 second max retry interval

## Related Concepts

- [message-verification](../concepts/message-verification.md)
- [async-processing](../concepts/async-processing.md)

## Related Entities

- [rbm-api](../entities/rbm-api.md)
- [developer-console](../entities/developer-console.md)
