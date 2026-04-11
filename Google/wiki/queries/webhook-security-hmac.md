---
type: query
title: "Webhook Security with HMAC"
query: "How do I secure my RBM webhook? How does HMAC-SHA512 verification work?"
answered: 2026-04-10
tags: [webhooks, security, hmac, verification]
---

## Answer

RBM webhooks must be secured using HMAC-SHA512 signature verification. This prevents malicious actors from sending fake events to your webhook endpoint.

### Security Components

| Component | Purpose |
|-----------|---------|
| `clientToken` | Secret key you define during webhook setup |
| `X-Goog-Signature` | HMAC-SHA512 signature sent with each request |
| `secret` | One-time challenge value for initial webhook verification |

### Initial Webhook Verification

When you first configure a webhook, Google sends a verification request:

1. Google POSTs to your webhook URL with `clientToken` and `secret` parameters
2. Your server verifies `clientToken` matches your expected value
3. Respond with the `secret` value to prove you own the endpoint
4. Webhook is now verified and will receive events

### Ongoing Message Verification

For every webhook notification:

1. **Extract** the `X-Goog-Signature` header
2. **Compute** HMAC-SHA512 of the request body using `clientToken` as key
3. **Compare** computed signature with `X-Goog-Signature`
4. **Reject** if signatures don't match

### Implementation Example

```python
import hmac
import hashlib
import base64

def verify_signature(request_body, signature_header, client_token):
    # Compute expected signature
    computed = hmac.new(
        client_token.encode('utf-8'),
        request_body,
        hashlib.sha512
    ).digest()
    
    # Base64 encode
    expected_signature = base64.b64encode(computed).decode('utf-8')
    
    # Constant-time comparison
    return hmac.compare_digest(expected_signature, signature_header)
```

### Webhook Levels

Webhooks can be configured at two levels:

| Level | Scope | Precedence |
|-------|-------|------------|
| Partner webhook | All agents under partner | Lower |
| Agent webhook | Specific agent only | Higher (overrides partner) |

When both exist, **agent webhook takes precedence** for that specific agent.

### Configuration Methods

**Via Developer Console**:
1. Navigate to partner or agent settings
2. Configure webhook URL
3. Set `clientToken`
4. Complete verification challenge

**Via API**:
Use the Business Communications API to programmatically manage webhook configurations.

### Security Best Practices

1. **Strong clientToken**: Use cryptographically random string (32+ characters)
2. **HTTPS only**: Webhook URL must be HTTPS
3. **Constant-time comparison**: Prevent timing attacks
4. **Reject invalid signatures**: Return 401/403 for failed verification
5. **Log verification failures**: Monitor for attack attempts
6. **Rotate tokens periodically**: Update `clientToken` if compromised

### What to Reject

- Missing `X-Goog-Signature` header
- Invalid signature (computed != received)
- Replay attacks (consider adding timestamp validation)

## Sources Consulted

- [message-verification](../concepts/message-verification.md)
- [webhooks](../sources/webhooks.md)
- [configure-webhook](../workflows/configure-webhook.md)

## New Insights

- No built-in replay attack protection (timestamps not validated)
- Token rotation process not documented (may require webhook re-verification)
- Maximum clientToken length not specified
