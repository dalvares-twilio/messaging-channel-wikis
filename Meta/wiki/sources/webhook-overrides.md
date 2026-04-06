---
type: source
title: Webhook Overrides | Developer Documentation
source_file: "[[Webhook overrides  Developer Documentation]]"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/override
ingested: 2026-04-05
tags:
  - webhooks
  - overrides
  - callback-url
  - api
---

## Summary

Webhook overrides allow you to designate alternate callback URLs for specific WhatsApp Business Accounts (WABAs) or individual business phone numbers, instead of using your app's default callback URL. This is useful for testing, or for solution providers who need unique endpoints per customer.

The routing priority is: phone number override > WABA override > app default.

## Key Points

- **Override scope**: Can be set at WABA level or phone number level
- **Supported fields only**: Not all webhook fields support overrides
- **Verification required**: Alternate endpoints must pass the same verification handshake
- **Max URL length**: 200 characters

## Supported Webhook Fields for Override

- `messages`
- `message_echoes`
- `calls`
- `consumer_profile`
- `messaging_handovers`
- `group_lifecycle_update`
- `group_participants_update`
- `group_settings_update`
- `group_status_update`
- `smb_message_echoes`
- `smb_app_state_sync`
- `history`
- `account_settings_update`

**Not supported**: Template webhooks and account-level webhooks (`account_update`, `account_review_update`, `account_alerts`) always go to app default.

## API Operations

### WABA Override
- **Set**: `POST /<WABA_ID>/subscribed_apps` with `override_callback_uri` and `verify_token`
- **Get**: `GET /<WABA_ID>/subscribed_apps` — returns `override_callback_uri` in response
- **Delete**: `POST /<WABA_ID>/subscribed_apps` with no body (re-subscribe without override)

### Phone Number Override
- **Set**: `POST /<PHONE_NUMBER_ID>` with `webhook_configuration` object
- **Get**: `GET /<PHONE_NUMBER_ID>?fields=webhook_configuration`
- **Delete**: `POST /<PHONE_NUMBER_ID>` with `override_callback_uri` set to empty string

## Related Concepts
- [[webhooks]]
- [[Knowledge-Bases/Channels/Meta/wiki/concepts/webhook-overrides]]

## Related Entities
- [[subscribed-apps-api]]
- [[phone-number-webhook-config]]
