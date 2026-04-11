---
type: pattern
title: "Error Recovery by HTTP Code"
applies_to: "API error handling and retry strategy"
confidence: "high"
learned_from: "ottm-implementation source, error-404-not-found-handling query"
---

## Pattern

Retry only transient errors (401, 5xx); treat client errors (400, 403, 404, 429) as terminal and fall back immediately to avoid wasting resources.

## When to Apply

- Implementing RCS message sending with error handling
- Building retry logic for API calls
- Deciding when to fall back to SMS

## When NOT to Apply

- Webhook handlers (different retry semantics)
- Management API operations (may have different retry guidance)

## Retry Classification

| HTTP Code | Retry? | Action |
|-----------|--------|--------|
| 200 | N/A | Success |
| 400 INVALID_ARGUMENT | No | Fix request (unsupported feature, payload limit) |
| 401 UNAUTHORIZED | Yes | Re-authenticate, retry |
| 403 FORBIDDEN | No | Permission issue, do not retry |
| 404 NOT_FOUND | No | No RCS support, fall back to SMS |
| 429 TOO_MANY_REQUESTS | No | Rate limited, back off (may retry later) |
| 5xx | Yes | Server error, retry with backoff |

## Examples

**404 Handling:**
```python
if response.status == 404:
    # Do NOT retry - device doesn't support RCS
    log_rcs_unreachable(phone)
    send_via_sms(phone, fallback_message)
```

**400 Handling:**
```python
if response.status == 400:
    # Check if feature unsupported
    if "RICHCARD_CAROUSEL" in error:
        # Send simpler message format
        send_text_only(phone, message)
```

**5xx Handling:**
```python
if response.status >= 500:
    # Retry with exponential backoff
    for attempt in range(3):
        sleep(2 ** attempt)
        response = retry_send()
        if response.status < 500:
            break
```

## 404 Causes

- Device doesn't support RCS messaging
- User has disabled RCS on their device
- Agent not launched on user's carrier
- Invalid phone number format

Note: 404 does not distinguish between these causes; all require fallback.

## Related

- [capability-check-then-send](../patterns/capability-check-then-send.md)
- [ttl-by-message-urgency](../patterns/ttl-by-message-urgency.md)

## Sources

- [ottm-implementation](../sources/ottm-implementation.md)
- [error-404-not-found-handling](../queries/error-404-not-found-handling.md)
- [error-400-invalid-argument-handling](../queries/error-400-invalid-argument-handling.md)
