---
type: query
title: "How to Validate Webhook Signatures"
query: "How do I validate the HMAC-SHA256 signature on incoming WhatsApp webhook payloads?"
answered: 2026-04-10
tags: [webhooks, security, hmac, signature-validation]
---

## Answer

To validate webhook signatures on incoming WhatsApp Business Platform payloads:

1. **Retrieve your app secret** from the Meta App Dashboard
2. **Extract the signature** from the `X-Hub-Signature-256` header (format: `sha256=<hash>`)
3. **Compute HMAC-SHA256** of the raw JSON request body using your app secret as the key
4. **Compare** your computed hash to the hash in the header (after stripping the `sha256=` prefix)
5. **If match**: payload is authentic, process it
6. **If no match**: discard the payload as invalid

Example header:
```
X-Hub-Signature-256: sha256=b63bb356dff0f1c24379efea2d6ef0b2e2040853339d1bcf13f9018790b1f7d2
```

**Best practices:**
- Always validate signatures on every POST request
- Store your app secret securely (environment variable or secrets manager)
- Never accept payloads with invalid signatures
- Use constant-time comparison to prevent timing attacks

## Sources Consulted
- [create-webhook-endpoint](../sources/create-webhook-endpoint.md)
- [webhook-security](../concepts/webhook-security.md)

## New Insights
None - this is well documented in existing sources. The validation process is straightforward HMAC-SHA256 using the app secret as the key.
