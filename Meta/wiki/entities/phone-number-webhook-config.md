---
type: entity
title: "Phone Number Webhook Configuration"
entity_type: api
---

## Description

The `webhook_configuration` field on business phone numbers allows you to set alternate callback URLs at the individual phone number level. This provides more granular control than WABA-level overrides.

## Endpoints

### Set Override
```
POST /<BUSINESS_PHONE_NUMBER_ID>
```

**Body:**
```json
{
  "webhook_configuration": {
    "override_callback_uri": "https://my-phone-callback.com/webhook",
    "verify_token": "my_verify_token"
  }
}
```

### Get Configuration
```
GET /<BUSINESS_PHONE_NUMBER_ID>?fields=webhook_configuration
```

**Response:**
```json
{
  "webhook_configuration": {
    "phone_number": "https://my-phone-callback.com/webhook",
    "whatsapp_business_account": "https://my-waba-callback.com/webhook",
    "application": "https://my-app-default.com/webhook"
  },
  "id": "106540352242922"
}
```

The response shows all three levels:
- `phone_number`: Override for this specific number
- `whatsapp_business_account`: WABA-level override (if set)
- `application`: App's default callback URL

### Delete Override
```
POST /<BUSINESS_PHONE_NUMBER_ID>
```

**Body:**
```json
{
  "webhook_configuration": {
    "override_callback_uri": ""
  }
}
```

## Requirements

- Max URL length: 200 characters
- Endpoint must pass verification handshake

## Related Concepts
- [[Knowledge-Bases/Channels/Meta/wiki/concepts/webhook-overrides]]

## Related Entities
- [[subscribed-apps-api]]

## Sources
- [[Knowledge-Bases/Channels/Meta/wiki/sources/webhook-overrides]]
