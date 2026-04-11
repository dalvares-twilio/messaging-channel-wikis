---
type: query
title: "TLS/SSL Requirements for Webhooks"
query: "What are the TLS/SSL requirements for a WhatsApp webhook endpoint?"
answered: 2026-04-10
tags: [webhooks, security, tls, ssl, certificates]
---

## Answer

WhatsApp Business Platform has strict TLS/SSL requirements for webhook endpoints:

### Required: Valid TLS/SSL Certificate

- Your webhook endpoint **must** use HTTPS
- Certificate must be from a **trusted Certificate Authority (CA)**
- **Self-signed certificates are NOT supported**

### Optional: mTLS (Mutual TLS)

For enhanced security, you can enable mTLS:

**How mTLS works:**
- Your server verifies Meta's certificate (standard TLS)
- Meta also verifies your server's certificate (mutual)

**Configuration:**
- Must be enabled per-application (not per-WABA or phone number)
- See Graph API's mTLS documentation for setup details

**When to use mTLS:**
- High-security requirements
- Regulated industries
- When IP allowlisting is impractical

### Certificate Requirements

| Requirement | Status |
|-------------|--------|
| HTTPS (TLS 1.2+) | Required |
| Trusted CA certificate | Required |
| Self-signed certificate | Not supported |
| mTLS | Optional |

### Common Issues

1. **Expired certificate** - Ensure auto-renewal is configured
2. **Incomplete certificate chain** - Include intermediate certificates
3. **Wrong domain** - Certificate must match your callback URL domain
4. **Protocol mismatch** - Use TLS 1.2 or higher

### Alternative: IP Allowlisting

If mTLS isn't available, you can allowlist Meta's IP ranges:
```bash
whois -h whois.radb.net -- '-i origin AS32934' | grep '^route' | awk '{print $2}' | sort
```

**Caveat**: IP addresses change periodically, so mTLS is preferred.

### Testing Your Certificate

Before configuring your webhook:
1. Use SSL Labs (ssllabs.com/ssltest) to verify your certificate
2. Check for chain issues, protocol support, and cipher suites
3. Ensure certificate isn't expiring soon

## Sources Consulted
- [create-webhook-endpoint](../sources/create-webhook-endpoint.md)
- [webhook-security](../concepts/webhook-security.md)
- [webhooks-overview](../sources/webhooks-overview.md)

## New Insights
None - TLS requirements are well documented. Key insight: mTLS is preferred over IP allowlisting for added security.
