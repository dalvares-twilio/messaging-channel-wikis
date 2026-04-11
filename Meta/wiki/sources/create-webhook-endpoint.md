---
type: source
title: Create a Webhook Endpoint
source_file: "[Create a webhook endpoint](Create a webhook endpoint.md)"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/create-webhook-endpoint
ingested: 2026-04-05
tags:
  - webhooks
  - endpoint
  - security
  - implementation
---

## Summary

This document explains how to create a production-ready webhook endpoint on a public server. The endpoint must handle both GET requests (for verification) and POST requests (for receiving webhook payloads). It covers TLS/SSL requirements, the verification handshake, payload validation using HMAC-SHA256 signatures, and App Dashboard configuration.

## Key Points

- **TLS/SSL required**: Valid certificate, no self-signed certs
- **mTLS optional**: For added security, but must be enabled per-app
- **GET for verification**: Compare `hub.verify_token`, return `hub.challenge`
- **POST for payloads**: Validate `X-Hub-Signature-256`, respond with 200
- **Batching**: Up to 1000 updates per POST, but not guaranteed
- **Retries**: Failed POSTs retry immediately, then decreasing frequency for 36 hours
- **No historical API**: Must capture and store payloads yourself

## Verification Flow (GET Request)

```
GET <CALLBACK_URL>?hub.mode=subscribe&hub.challenge=<RANDOM>&hub.verify_token=<YOUR_TOKEN>
```

1. Compare `hub.verify_token` to your stored token
2. If match: respond `200` with `hub.challenge` value
3. If no match: respond `403` or any non-200

## Payload Validation (POST Request)

1. Compute HMAC-SHA256 of JSON body using your **app secret** as key
2. Compare to `X-Hub-Signature-256` header (after `sha256=` prefix)
3. If match: payload is authentic, process it
4. If no match: discard as invalid

## App Dashboard Configuration

![image](../../raw/assets/518348561_1679202599393717_3427225193188619311_n 1.png)

Navigate to **App Dashboard > WhatsApp > Configuration** and enter:
- **Callback URL**: Your endpoint URL
- **Verify token**: Your chosen verification string

## Related Concepts
- [webhook-verification](webhook-verification.md)
- [webhook-security](webhook-security.md)
- [webhooks](webhooks.md)

## Related Entities
- [get-verification-request](get-verification-request.md)
- [post-webhook-request](post-webhook-request.md)
