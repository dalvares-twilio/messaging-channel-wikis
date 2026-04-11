---
type: pattern
title: "Async Webhook Processing"
applies_to: "Webhook handler implementation"
confidence: "high"
learned_from: "async-processing concept, async-webhook-best-practices query"
---

## Pattern

Return 200 OK immediately from webhook handlers; queue messages for async processing to avoid timeouts, retry storms, and shared queue impact across agents.

## When to Apply

- Implementing RBM webhook handlers
- Processing any inbound messages or events from Google
- Building reliable message processing pipelines

## When NOT to Apply

- Test/development webhooks with low volume
- Webhook signature validation (must be sync before queuing)

## Required Architecture

```
Request -> Validate signature -> Acknowledge (200 OK) -> Queue -> Return

Queue Worker (separate process):
  -> Pull from queue
  -> Process message
  -> Handle business logic
```

## Performance Target

- Webhook should return 200 OK within **100ms**
- Never perform database queries in webhook handler
- Never call external APIs in webhook handler

## What Happens Without Async

| Scenario | Consequence |
|----------|-------------|
| Slow response (>few seconds) | Request times out, retry triggered |
| 500 error | Immediate retry with exponential backoff |
| Sustained failures | Messages queued up to 7 days |
| 7+ days failure | **Messages dropped permanently** |

## Retry Behavior

- Backoff interval increases up to **600 seconds maximum**
- Retries continue for **7 days**
- **Shared queue**: one agent's failures reduce throughput for ALL agents under your partner account

## Examples

**Correct:**
```python
def webhook_handler(request):
    if not verify_hmac(request):
        return Response(401)
    
    # Acknowledge immediately
    queue.push(request.body)
    return Response(200)
```

**Incorrect:**
```python
def webhook_handler(request):
    # DON'T DO THIS
    db.save(request.body)
    external_api.call(request.body)
    return Response(200)  # Too late!
```

## Common Failure Triggers

- DDoS protections blocking webhook notifications
- Database connection pool exhaustion
- Upstream service failures
- Processing delays in webhook handler

## Related

- [message-verification](../concepts/message-verification.md)
- [error-recovery-by-code](../patterns/error-recovery-by-code.md)

## Sources

- [async-processing](../concepts/async-processing.md)
- [webhooks](../sources/webhooks.md)
- [async-webhook-best-practices](../queries/async-webhook-best-practices.md)
