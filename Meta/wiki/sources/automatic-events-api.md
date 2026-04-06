---
type: source
title: "Automatic Events API"
source_file: "[[raw/Automatic Events API  Developer Documentation.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/automatic-events-api"
ingested: 2026-04-05
tags: [webhooks, events, click-to-whatsapp, conversions]
---

## Summary

Opt-in feature that uses NLP to detect lead/purchase events in Click-to-WhatsApp conversations.

## Limitations

- Events won't appear in Meta surfaces until 2026
- Not available in EU, UK, or Japan

## Requirements

- Embedded Signup implemented
- Webhook server processing events

## Event Types

| Event | Trigger |
|-------|---------|
| `LeadSubmitted` | Lead gen activity detected |
| `Purchase` | Purchase with currency/value |

## Webhook Payload

```json
{
  "automatic_events": [{
    "id": "<MESSAGE_ID>",
    "event_name": "LeadSubmitted|Purchase",
    "timestamp": <TIMESTAMP>,
    "ctwa_clid": "<CLICK_ID>",
    "custom_data": {"currency": "USD", "value": 25000}
  }]
}
```

## Conversions API Integration

Report events via Conversions API with `action_source: business_messaging`.

## Enable/Disable

Business customers toggle via Meta Business Suite > WhatsApp accounts > Privacy and data sharing.

## Related Concepts
- [[wiki/concepts/webhooks]]
- [[wiki/concepts/embedded-signup]]
