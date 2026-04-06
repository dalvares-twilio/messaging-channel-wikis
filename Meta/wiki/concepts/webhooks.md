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
2. You subscribe to specific [[webhook-fields|webhook fields]] via the App Dashboard
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
4. Subscribe to desired [[webhook-fields|fields]]

## Related Concepts
- [[webhook-fields]] — subscribable event types
- [[webhook-verification]] — handshake process
- [[webhook-security]] — TLS, mTLS, signature validation
- [[Knowledge-Bases/Channels/Meta/wiki/concepts/webhook-overrides]] — alternate callback URLs
- [[permissions]] — required permissions

## Sources
- [[webhooks-overview]]
- [[create-webhook-endpoint]]
- [[create-test-webhook-endpoint]]
- [[Knowledge-Bases/Channels/Meta/wiki/sources/webhook-overrides]]
