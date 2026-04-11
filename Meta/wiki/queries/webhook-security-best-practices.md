---
type: query
title: "Webhook Security Best Practices"
query: "What are the security best practices for WhatsApp webhook endpoints?"
answered: 2026-04-10
tags: [webhooks, security, best-practices, mtls, tls]
---

## Answer

The WhatsApp Business Platform provides multiple security layers. Here are the best practices:

### 1. TLS/SSL (Required)
- Your endpoint **must** have a valid TLS/SSL certificate from a trusted CA
- Self-signed certificates are **not supported**

### 2. mTLS (Optional, Recommended)
Mutual TLS provides bidirectional authentication:
- Your server verifies Meta's certificate
- Meta verifies your server's certificate
- Must be enabled per-application (not per-WABA or phone number)
- Preferred over IP allowlisting

### 3. Always Validate Payload Signatures
- Compute HMAC-SHA256 of the raw JSON body using your app secret
- Compare to `X-Hub-Signature-256` header value
- **Never accept payloads with invalid signatures**

### 4. App Secret Management
- Store app secret securely (environment variable, secrets manager)
- Never commit app secret to source control
- Rotate if compromised

### 5. IP Allowlisting (Alternative to mTLS)
You can query Meta's IP ranges:
```bash
whois -h whois.radb.net -- '-i origin AS32934' | grep '^route' | awk '{print $2}' | sort
```
**Caveat**: IP addresses change periodically. mTLS is recommended instead.

### 6. Respond Quickly
- Return HTTP 200 promptly to acknowledge receipt
- Process payload asynchronously to avoid timeouts
- Failed responses trigger retries for up to 7 days

### Security Priority Order
1. TLS/SSL (required baseline)
2. Signature validation (required for POST)
3. mTLS (recommended enhancement)
4. IP allowlisting (fallback, less reliable)

## Sources Consulted
- [webhook-security](../concepts/webhook-security.md)
- [create-webhook-endpoint](../sources/create-webhook-endpoint.md)
- [webhooks-overview](../sources/webhooks-overview.md)

## New Insights
None - security practices are well documented. Key insight: mTLS is preferred over IP allowlisting due to dynamic IP changes.
