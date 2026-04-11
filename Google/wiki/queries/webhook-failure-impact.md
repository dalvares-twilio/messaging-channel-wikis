---
type: query
title: "Webhook Failure Impact and Recovery"
query: "What happens when my RBM webhook fails? How does it impact other agents and how do I recover?"
answered: 2026-04-10
tags: [webhooks, reliability, recovery, retry]
---

## Answer

Webhook failures in RBM have cascading impacts due to the shared queue architecture. Understanding failure behavior is critical for maintaining reliable message delivery across all your agents.

### Failure Triggers

Your webhook may fail due to:
- DDoS protections blocking RBM notifications
- Database connection pool exhaustion
- Upstream service failures
- Processing delays causing timeouts
- Network issues

### Retry Behavior

When your webhook returns non-200 status:

1. **Immediate retry** with backoff
2. **Backoff interval increases** up to 600 seconds maximum
3. **Retries continue for 7 days**
4. **Message dropped** after 7 days if still failing

### Critical: Shared Queue Impact

RBM uses **one message queue per partner**. When one agent's webhook fails:

1. Other agents' webhooks continue during backoff interval
2. But queued retry messages reduce overall throughput
3. Eventually impacts delivery to **all agents** under the partner
4. The more agents you have, the higher the blast radius

### Why Async Processing is Mandatory

The shared queue impact is why webhook best practices mandate:

```
Request → Acknowledge (200 OK) → Queue internally → Process async
```

**Never process within the webhook handler itself.**

### Recovery Strategy

1. **Return 200 OK immediately** regardless of processing outcome
2. Queue messages in your own system (Redis, SQS, etc.)
3. Process asynchronously with your own retry logic
4. Monitor queue depth and webhook latency

### Handling Processing Failures

If your async processing fails:
- You've already returned 200 OK, so RBM won't retry
- Implement your own dead letter queue
- Log failures for investigation
- Consider idempotency for replay

### Monitoring Recommendations

Track these metrics:
- Webhook response latency (should be <100ms for 200 OK)
- Internal queue depth
- Processing success/failure rate
- 5xx error rate from your endpoint

## Sources Consulted

- [async-processing](../concepts/async-processing.md)
- [webhooks](../sources/webhooks.md)
- [sync-async-operations](../sources/sync-async-operations.md)

## New Insights

- Shared queue architecture means one bad agent affects all agents
- 7-day retry window is both a safety net and a risk (queue buildup)
- No documented way to check current queue depth or backoff status
