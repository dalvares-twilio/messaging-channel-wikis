---
type: entity
title: "messages Webhook Field"
entity_type: webhook-field
---

## Description

The `messages` webhook field is the most important webhook subscription for WhatsApp Business Platform. It notifies you of:
- Incoming messages from WhatsApp users to your business
- Status updates for messages sent by your business to WhatsApp users

## Payload Example

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

## Permission Required

`whatsapp_business_messaging`

## Override Support

Yes — supports [webhook-overrides|callback overrides](../concepts/webhook-overrides|callback overrides.md) at WABA and phone number level.

## Usage

1. Subscribe to `messages` field in App Dashboard
2. Handle incoming message payloads
3. Handle message status updates (sent, delivered, read, failed)

## Related Concepts
- [webhooks](webhooks.md)
- [webhook-fields](webhook-fields.md)
- [permissions](permissions.md)

## Related Entities
- [post-webhook-request](post-webhook-request.md)

## Sources
- [webhooks-overview](webhooks-overview.md)
