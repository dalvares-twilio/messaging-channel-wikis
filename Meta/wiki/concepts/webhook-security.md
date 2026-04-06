---
type: concept
title: "Webhook Security"
aliases: [mTLS, signature validation, X-Hub-Signature-256]
sources: 2
---

## Overview

The WhatsApp Business Platform provides multiple security mechanisms to ensure webhook payloads are authentic and haven't been tampered with.

## Security Layers

### 1. TLS/SSL (Required)

Your webhook endpoint must have a valid TLS/SSL certificate:
- **Required**: Certificate from a trusted CA
- **Not supported**: Self-signed certificates

### 2. mTLS (Optional)

Mutual TLS provides bidirectional authentication:
- Your server verifies Meta's certificate
- Meta verifies your server's certificate
- Must be enabled per-application (not per-WABA or phone number)
- See Graph API's mTLS documentation for setup

### 3. Payload Signature Validation

Every POST request includes an `X-Hub-Signature-256` header containing an HMAC-SHA256 signature.

**Validation process:**
1. Get your **app secret** from App Dashboard
2. Compute HMAC-SHA256 of the raw JSON body using app secret as key
3. Compare your hash to header value (after `sha256=` prefix)
4. If match: payload is authentic
5. If no match: discard the payload

```
X-Hub-Signature-256: sha256=b63bb356dff0f1c24379efea2d6ef0b2e2040853339d1bcf13f9018790b1f7d2
```

### 4. IP Allowlisting (Alternative)

You can get Meta's webhook server IPs via:
```bash
whois -h whois.radb.net — '-i origin AS32934' | grep '^route' | awk '{print $2}' | sort
```

**Caveat**: IP addresses change periodically. mTLS is recommended instead.

## Best Practices

1. Always validate signatures on POST requests
2. Use mTLS if available in your infrastructure
3. Never accept payloads with invalid signatures
4. Store app secret securely (environment variable, secrets manager)

## Related Concepts
- [[webhooks]]
- [[webhook-verification]]

## Related Entities
- [[post-webhook-request]]

## Sources
- [[create-webhook-endpoint]]
- [[webhooks-overview]]
