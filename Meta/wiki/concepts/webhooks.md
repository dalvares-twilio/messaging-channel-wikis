---
type: concept
title: "Webhooks"
aliases: [webhook, callback, HTTP callback]
sources: 4
---

## Overview

Webhooks are HTTP requests containing JSON payloads sent from Meta's servers to a server you designate. They are the primary mechanism for receiving real-time notifications from the WhatsApp Business Platform.

## How They Work

1. You create and configure a webhook endpoint on your server
2. You subscribe to specific [webhook-fields|webhook fields](webhook-fields|webhook fields.md) via the App Dashboard
3. When events occur, Meta sends HTTP POST requests to your endpoint
4. Your server validates and processes the payload, responding with HTTP 200

## Delivery Characteristics

| Property | Value |
|----------|-------|
| Max payload size | 3 MB |
| Retry duration | Up to 7 days on failure |
| Batching | Up to 1000 updates per POST (not guaranteed) |
| Protocol | HTTPS (TLS/SSL required) |
| Optional security | mTLS support |

## Webhook Flow

```
Event Triggered → Meta Server → POST to Callback URL → Your Server
                                ↑
                                └── X-Hub-Signature-256 header for validation
```

## Configuration

Webhooks are configured in the **App Dashboard > WhatsApp > Configuration** panel:
1. Set **Callback URL** (your endpoint)
2. Set **Verify token** (your secret string)
3. Meta sends GET request to verify
4. Subscribe to desired [webhook-fields|fields](webhook-fields|fields.md)

## Related Concepts
- [webhook-fields](webhook-fields.md) — subscribable event types
- [webhook-verification](webhook-verification.md) — handshake process
- [webhook-security](webhook-security.md) — TLS, mTLS, signature validation
- [webhook-overrides](../concepts/webhook-overrides.md) — alternate callback URLs
- [permissions](permissions.md) — required permissions

## Sources
- [webhooks-overview](webhooks-overview.md)
- [create-webhook-endpoint](create-webhook-endpoint.md)
- [create-test-webhook-endpoint](create-test-webhook-endpoint.md)
- [webhook-overrides](../sources/webhook-overrides.md)
