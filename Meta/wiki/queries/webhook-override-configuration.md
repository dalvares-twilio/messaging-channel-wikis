---
type: query
title: "Webhook Override Configuration"
query: "How do I configure webhook overrides to route webhooks to different callback URLs for specific WABAs or phone numbers?"
answered: 2026-04-10
tags: [webhooks, overrides, callback-url, routing]
---

## Answer

Webhook overrides allow you to designate alternate callback URLs instead of your app's default. Overrides can be set at two levels with this routing priority:

**Routing Priority:** Phone number override > WABA override > App default

### WABA-Level Override

**Set override:**
```
POST /<WABA_ID>/subscribed_apps
{
  "override_callback_uri": "https://your-alternate-endpoint.com/webhook",
  "verify_token": "your_verify_token"
}
```

**Get override:**
```
GET /<WABA_ID>/subscribed_apps
```

**Delete override:**
```
POST /<WABA_ID>/subscribed_apps
(empty body - re-subscribe without override)
```

### Phone Number-Level Override

**Set override:**
```
POST /<PHONE_NUMBER_ID>
{
  "webhook_configuration": {
    "override_callback_uri": "https://your-alternate-endpoint.com/webhook",
    "verify_token": "your_verify_token"
  }
}
```

**Get override:**
```
GET /<PHONE_NUMBER_ID>?fields=webhook_configuration
```

**Delete override:**
```
POST /<PHONE_NUMBER_ID>
{
  "webhook_configuration": {
    "override_callback_uri": ""
  }
}
```

### Important Constraints

- **Max URL length**: 200 characters
- **Verification required**: Alternate endpoints must pass the same verification handshake
- **App must be subscribed**: to webhooks on the WABA first

### Supported Fields for Override
Only these fields support overrides:
- `messages`, `message_echoes`, `calls`, `consumer_profile`
- `messaging_handovers`, `group_*` fields
- `smb_message_echoes`, `smb_app_state_sync`
- `history`, `account_settings_update`

**Not supported**: Template webhooks and account-level webhooks (`account_update`, `account_review_update`, `account_alerts`) always go to app default.

### Use Cases
- **Testing**: Route test phone numbers to a dev endpoint
- **Solution providers**: Unique endpoints per customer
- **Gradual migration**: Route specific numbers during transition

## Sources Consulted
- [webhook-overrides](../concepts/webhook-overrides.md)
- [webhook-overrides](../sources/webhook-overrides.md)
- [subscribed-apps-api](../entities/subscribed-apps-api.md)
- [phone-number-webhook-config](../entities/phone-number-webhook-config.md)

## New Insights
None - override configuration is well documented. Key insight: not all webhook fields support overrides.
