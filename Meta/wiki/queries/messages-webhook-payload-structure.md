---
type: query
title: "Messages Webhook Payload Structure"
query: "What is the structure of the messages webhook payload for incoming messages and status updates?"
answered: 2026-04-10
tags: [webhooks, messages, payload, structure]
---

## Answer

The `messages` webhook field delivers two types of payloads: incoming messages from users and status updates for outgoing messages.

### Incoming Message Payload

Identified by the presence of `messages` array:

```json
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "102290129340398",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "15550783881",
              "phone_number_id": "106540352242922"
            },
            "contacts": [
              {
                "profile": { "name": "Sheena Nelson" },
                "wa_id": "16505551234"
              }
            ],
            "messages": [
              {
                "from": "16505551234",
                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTRBNjU5OUFFRTAzODEwMTQ0RgA=",
                "timestamp": "1749416383",
                "type": "text",
                "text": { "body": "Does it come in another color?" }
              }
            ]
          },
          "field": "messages"
        }
      ]
    }
  ]
}
```

**Key fields:**
- `entry[].id` - WABA ID
- `metadata.phone_number_id` - Your business phone number ID
- `contacts[].wa_id` - User's WhatsApp ID
- `messages[].type` - Message type (text, image, audio, video, document, location, contacts, etc.)

### Outgoing Message Status Payload

Identified by the presence of `statuses` array:

```json
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "changes": [
        {
          "value": {
            "statuses": [
              {
                "id": "wamid.xxx",
                "status": "delivered",
                "recipient_id": "16505551234",
                "conversation": {
                  "id": "CONVERSATION_ID",
                  "origin": { "type": "service" }
                },
                "pricing": {
                  "billable": true,
                  "category": "service"
                }
              }
            ]
          },
          "field": "messages"
        }
      ]
    }
  ]
}
```

**Status values:** `sent` -> `delivered` -> `read`

Each outgoing message can trigger up to 3 webhooks (one for each status transition).

### Error Locations

| Location | Description |
|----------|-------------|
| `entry.changes.value.errors` | System/app/account-level errors |
| `messages.errors` | Incoming message errors (type: `unsupported`) |
| `statuses.errors` | Outgoing message errors |

### Batching

Up to 1000 updates can be batched per POST request, but batching is not guaranteed.

## Sources Consulted
- [messages-webhook-reference](../sources/messages-webhook-reference.md)
- [messages-webhook](../entities/messages-webhook.md)
- [webhook-fields](../concepts/webhook-fields.md)

## New Insights
None - payload structures are well documented. Key insight: always check for both `messages` and `statuses` arrays to distinguish incoming vs status webhooks.
