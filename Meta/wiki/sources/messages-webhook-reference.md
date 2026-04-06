---
type: source
title: "messages Webhook Reference"
source_file: "[[raw/messages webhook reference  Developer Documentation.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages"
ingested: 2026-04-05
tags: [webhooks, messages, reference, payload]
---

## Summary

The `messages` webhook field is the most important webhook — it covers both incoming messages from WhatsApp users and status updates for outgoing messages sent by businesses.

## Payload Types

### Incoming Messages
Identified by `messages` array in payload. Describes messages sent by users to businesses.

```json
{
  "value": {
    "contacts": [{"profile": {"name": "..."}, "wa_id": "..."}],
    "messages": [{"from": "...", "id": "...", "type": "text", "text": {"body": "..."}}]
  }
}
```

Message types vary — each has dedicated reference (text, image, audio, video, document, location, contacts, etc.).

### Outgoing Messages (Status)
Identified by `statuses` array. Describes message delivery status — sent, delivered, read.

```json
{
  "value": {
    "statuses": [{
      "id": "...",
      "status": "delivered",
      "recipient_id": "...",
      "conversation": {"id": "...", "origin": {"type": "service"}},
      "pricing": {"billable": true, "category": "service"}
    }]
  }
}
```

Each outgoing message can trigger up to 3 webhooks (sent → delivered → read).

## Error Locations

| Location | Description |
|----------|-------------|
| `entry.changes.value.errors` | System/app/account-level errors |
| `messages.errors` | Incoming message errors (type: `unsupported`) |
| `statuses.errors` | Outgoing message errors |

## Related Concepts
- [[wiki/concepts/webhooks]]
- [[wiki/concepts/webhook-fields]]

## Related Entities
- [[wiki/entities/messages-webhook]]

## Sources
- [[wiki/sources/webhooks-overview]]
