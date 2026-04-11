---
type: pattern
title: "Webhook Security Validation Checklist"
applies_to: "Securing webhook endpoints for WhatsApp Business Platform"
confidence: "high"
learned_from: "webhook-security-best-practices query, create-webhook-endpoint source"
---

## Pattern

Always implement signature validation as the primary security measure; add mTLS for defense in depth; never rely solely on IP allowlisting due to dynamic IP changes.

## When to Apply

- Setting up new webhook endpoints
- Security auditing existing webhook infrastructure
- Troubleshooting rejected or suspicious payloads

## Security Implementation Checklist

1. **TLS/SSL (Required)**
   - [ ] Valid certificate from trusted CA
   - [ ] Not self-signed
   - [ ] Not expired

2. **Signature Validation (Required for production)**
   - [ ] Store app secret securely (env var or secrets manager)
   - [ ] Compute HMAC-SHA256 of raw JSON body
   - [ ] Compare with `X-Hub-Signature-256` header (after `sha256=` prefix)
   - [ ] Reject payloads with invalid signatures
   - [ ] Log validation failures for monitoring

3. **mTLS (Recommended enhancement)**
   - [ ] Enable bidirectional certificate verification
   - [ ] Configure per-application (not per-WABA)
   - [ ] Preferred over IP allowlisting

4. **IP Allowlisting (Fallback only)**
   - [ ] Query Meta's AS32934 IP ranges
   - [ ] Schedule periodic refresh (IPs change)
   - [ ] Not recommended as primary security

## Priority Order

```
TLS/SSL (baseline) → Signature Validation (required) → mTLS (recommended) → IP Allowlisting (last resort)
```

## When NOT to Apply

- Test/development endpoints on localhost (use ngrok or Render)
- Webhook subscription management (uses different auth)

## Examples

- Production setup: TLS + Signature + mTLS
- Quick integration: TLS + Signature (minimum viable)
- Legacy system with IP filtering: TLS + Signature + IP (migrate to mTLS)

## Related

- [webhook-security](../concepts/webhook-security.md)
- [webhook-verification](../concepts/webhook-verification.md)

## Sources

- [create-webhook-endpoint](../sources/create-webhook-endpoint.md)
- [webhooks-overview](../sources/webhooks-overview.md)
