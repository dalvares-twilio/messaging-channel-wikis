---
type: entity
title: "Subscribed Apps API"
entity_type: api
---

## Description

The `/<WABA_ID>/subscribed_apps` endpoint is used to:
- Subscribe your app to webhooks on a WhatsApp Business Account
- Set alternate callback URLs (overrides) for the WABA
- View current subscriptions and override settings
- Remove overrides

## Endpoints

### Subscribe / Set Override
```
POST /<WABA_ID>/subscribed_apps
```

**Body for override:**
```json
{
  "override_callback_uri": "https://your-alternate-endpoint.com/webhook",
  "verify_token": "your_verify_token"
}
```

**Body to remove override:**
(empty body — just subscribe without override parameters)

### Get Subscriptions
```
GET /<WABA_ID>/subscribed_apps
```

**Response:**
```json
{
  "data": [
    {
      "whatsapp_business_api_data": {
        "id": "670843887433847",
        "name": "Lucky Shrub"
      },
      "override_callback_uri": "https://my-alternate-callback.com/webhook"
    }
  ]
}
```

## Requirements

- App must already be subscribed to webhooks for the WABA
- Alternate endpoint must pass verification handshake
- Max URL length: 200 characters

## Related Concepts
- [[Knowledge-Bases/Channels/Meta/wiki/concepts/webhook-overrides]]
- [[webhooks]]

## Related Entities
- [[phone-number-webhook-config]]

## Sources
- [[Knowledge-Bases/Channels/Meta/wiki/sources/webhook-overrides]]
