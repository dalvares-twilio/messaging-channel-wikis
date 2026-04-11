---
type: concept
title: "Asynchronous Processing"
aliases: [webhook best practices, async webhooks]
sources: 1
---

## Overview

RBM webhooks must return `200 OK` immediately and process messages asynchronously. Synchronous processing risks timeouts and triggers the retry mechanism.

## Details

### Why Async?

- High message rates generate high webhook notification rates
- Synchronous processing can cause timeouts or `500` errors
- Non-200 responses trigger backoff/retry (up to 7 days)
- Failed agent webhooks impact delivery to **all** agents (shared queue)

### Failure Triggers

- DDoS protections blocking notifications
- Database connection pool exhaustion
- Upstream service failures
- Processing delays

### Retry Behavior

- Backoff interval increases up to 600 seconds maximum
- Retries continue for 7 days
- Message dropped after 7 days if still failing

### Shared Queue Impact

RBM uses one message queue per partner. When one agent's webhook fails:
- Other agents' webhooks continue during backoff
- But queued retry messages reduce overall throughput
- Eventually impacts all agents under the partner

### Best Practice

```
Request → Acknowledge (200 OK) → Queue for processing → Process async
```

**Do not** process within the webhook handler itself.

## Related

- [message-verification](../concepts/message-verification.md)

## Related Workflows

- [configure-webhook](../workflows/configure-webhook.md) — Set up secure async webhook

## Sources

- [webhooks](../sources/webhooks.md)
