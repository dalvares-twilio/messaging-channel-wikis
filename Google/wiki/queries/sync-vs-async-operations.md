---
type: query
title: "Sync vs Async Operations in RBM"
query: "What operations in Google RCS are synchronous vs asynchronous? How should I handle message delivery confirmation?"
answered: 2026-04-10
tags: [sync, async, api, webhooks, delivery]
---

## Answer

RBM API interactions follow a synchronous request-response pattern at the HTTP level, but message delivery and many results are handled asynchronously through webhooks. Understanding this distinction is critical for reliable messaging.

### Synchronous Operations

The following return results in the HTTP response:

| Operation | What Response Means |
|-----------|---------------------|
| `phones.agentMessages.create` | Request received and valid (NOT delivered) |
| Capability check | Current device capabilities |
| Agent info update | Request accepted |
| Tester management | Operation completed |

### Asynchronous Results (via Webhook)

These results come later via webhook notifications:

| Event | Meaning |
|-------|---------|
| `DELIVERED` | Message delivered to device |
| `READ` | Message opened/acknowledged by user |
| `IS_TYPING` | User typing a response |
| `UNSUBSCRIBE` | User opted out |
| `SUBSCRIBE` | User opted back in |
| `TTL_EXPIRATION_REVOKED` | Message expired and revoked |
| `AgentLaunchEvent` | Launch state changed |

### Critical Insight: Message Sending

When you call `phones.agentMessages.create`:

1. **Synchronous response** (`200 OK`): Request is valid and accepted
2. **This does NOT mean delivered**: The message may still be queued
3. **Actual delivery** depends on:
   - Recipient online/offline status
   - Battery/network conditions
   - RCS enabled on device
4. **Delivery confirmation**: Only comes via `DELIVERED` webhook event

### Why This Matters

**Do NOT** treat the API response as delivery confirmation. Build your system to:

1. Send message via API
2. Store message state as "pending"
3. Update to "delivered" only when webhook receives `DELIVERED` event
4. Implement TTL for fallback handling

### Webhook Best Practices

Your webhook handler must return `200 OK` immediately and process asynchronously:

```
Webhook Request → Return 200 OK → Queue for processing → Process async
```

Why? Non-200 responses trigger:
- Backoff/retry mechanism (up to 600 seconds between retries)
- Retries continue for 7 days
- Failed webhooks impact ALL agents under the partner (shared queue)

### Agent Info Propagation

Even "synchronous" operations like agent info updates may have:
- Short propagation delay
- Not immediately visible to all systems
- Consider eventual consistency in your architecture

## Sources Consulted

- [sync-async-operations](../sources/sync-async-operations.md)
- [async-processing](../concepts/async-processing.md)
- [webhooks](../sources/webhooks.md)
- [receive-events](../sources/receive-events.md)

## New Insights

- No documented latency expectations for async operations
- Webhook failure impacts all agents under partner (shared queue architecture)
- Agent info propagation delay not quantified
