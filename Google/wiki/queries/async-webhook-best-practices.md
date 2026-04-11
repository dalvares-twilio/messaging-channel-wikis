---
type: query
title: "Async Webhook Best Practices"
query: "Why must RBM webhooks process messages asynchronously, and what happens if they don't?"
answered: 2026-04-10
tags: [webhook, async, reliability, best-practices]
---

## Answer

RBM webhooks must return `200 OK` immediately and process messages asynchronously. Synchronous processing risks timeouts, triggers aggressive retries, and can impact message delivery across all your agents.

### Why Async Is Required

1. **High throughput** — High message rates generate high webhook notification rates
2. **Timeout risk** — Synchronous processing can cause timeouts or `500` errors
3. **Retry storm** — Non-200 responses trigger backoff/retry mechanism
4. **Shared queue impact** — Failed webhooks for one agent affect **all** agents under your partner account

### What Happens Without Async

| Scenario | Consequence |
|----------|-------------|
| Slow response (>few seconds) | Request times out, retry triggered |
| 500 error | Immediate retry with exponential backoff |
| Sustained failures | Messages queued up to 7 days |
| 7+ days failure | **Messages dropped permanently** |

### Retry Behavior

- Backoff interval increases up to **600 seconds maximum**
- Retries continue for **7 days**
- Message dropped after 7 days if still failing
- Shared queue means one agent's failures reduce throughput for all agents

### Common Failure Triggers

- DDoS protections blocking webhook notifications
- Database connection pool exhaustion
- Upstream service failures
- Processing delays in webhook handler

### Correct Pattern

```
Request → Acknowledge (200 OK) → Queue for processing → Process async

POST /rbm/webhook
  → Validate signature
  → Acknowledge immediately (200 OK)
  → Push to message queue (SQS, Pub/Sub, RabbitMQ)
  → Return

Queue Worker (separate process)
  → Pull from queue
  → Process message
  → Handle business logic
```

### Performance Target

- Webhook should return 200 OK within **100ms**
- Never perform database queries in webhook handler
- Never call external APIs in webhook handler

## Sources Consulted

- [async-processing](../concepts/async-processing.md)
- [webhooks](../sources/webhooks.md)
- [configure-webhook](../workflows/configure-webhook.md)

## New Insights

None — async processing requirements are well documented in the wiki.
