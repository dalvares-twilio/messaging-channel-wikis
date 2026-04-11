---
type: concept
title: "Webhook Overrides"
aliases: [alternate callback URL, callback override]
sources: 1
---

## Overview

Webhook overrides allow you to designate alternate callback URLs for webhooks, instead of using your app's default callback URL. Overrides can be set at two levels:
- **WABA level**: Applies to all phone numbers under that WABA
- **Phone number level**: Applies to a specific business phone number

## Routing Priority

When a webhook is triggered, the system checks in this order:

1. **Phone number override** — if set, webhooks go here
2. **WABA override** — if phone has no override, check WABA
3. **App default** — fallback if neither override is set

## Use Cases

- **Testing**: Route test phone numbers to a dev endpoint
- **Solution providers**: Unique endpoints per customer
- **Gradual migration**: Route specific numbers during transition

## Supported Fields

Only these webhook fields support overrides:
- `messages`, `message_echoes`, `calls`
- `consumer_profile`, `messaging_handovers`
- `group_*` fields (lifecycle, participants, settings, status)
- `smb_message_echoes`, `smb_app_state_sync`
- `history`, `account_settings_update`

**Not supported**: Template webhooks and account-level webhooks always go to app default.

## Requirements

- App must be subscribed to webhooks on the WABA
- Alternate endpoint must pass verification handshake
- Max URL length: 200 characters

## API Reference

| Operation | Endpoint |
|-----------|----------|
| Set WABA override | `POST /<WABA_ID>/subscribed_apps` |
| Get WABA override | `GET /<WABA_ID>/subscribed_apps` |
| Delete WABA override | `POST /<WABA_ID>/subscribed_apps` (empty body) |
| Set phone override | `POST /<PHONE_ID>` with `webhook_configuration` |
| Get phone override | `GET /<PHONE_ID>?fields=webhook_configuration` |
| Delete phone override | `POST /<PHONE_ID>` with empty `override_callback_uri` |

## Related Concepts
- [webhooks](webhooks.md)
- [webhook-fields](webhook-fields.md)
- [webhook-verification](webhook-verification.md)

## Related Entities
- [subscribed-apps-api](subscribed-apps-api.md)
- [phone-number-webhook-config](phone-number-webhook-config.md)

## Sources
- [webhook-overrides](../sources/webhook-overrides.md)
