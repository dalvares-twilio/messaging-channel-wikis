---
type: source
title: "Embedded Signup Implementation"
source_file: "[Implementation  Developer Documentation.md](../../raw/Implementation  Developer Documentation.md)"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation"
ingested: 2026-04-05
tags: [embedded-signup, implementation, javascript]
---

## Summary

Technical guide for implementing Embedded Signup v4 using Facebook JavaScript SDK.

## Prerequisites

- Solution Partner or Tech Provider status
- SSL certificate on hosting server
- Subscribed to `account_update` webhook
- Line of credit (Solution Partners)

## Implementation Steps

### 1. Add Allowed Domains
In App Dashboard > Facebook Login > Settings:
- Enable Client OAuth login, Web OAuth login, HTTPS
- Add domains to Allowed Domains and Valid OAuth Redirect URIs

### 2. Create Facebook Login Configuration
Use template: "WhatsApp Embedded Signup Configuration With 60 Expiration Token"

### 3. Add Code to Website

**SDK Loading:**
```html
<script src="https://connect.facebook.net/en_US/sdk.js"></script>
```

**SDK Initialization:**
```javascript
FB.init({
  appId: '<APP_ID>',
  version: '<GRAPH_API_VERSION>'
});
```

**Session Logging Event Listener:**
Captures WABA ID, phone number ID, or abandonment screen.

**Response Callback:**
Captures exchangeable token code (30 second TTL).

**Launch Method:**
```javascript
FB.login(callback, {
  config_id: '<CONFIGURATION_ID>',
  response_type: 'code',
  override_default_response_type: true
});
```

## Event Types

| Event | Description |
|-------|-------------|
| `FINISH` | Standard Cloud API completion |
| `FINISH_ONLY_WABA` | Without phone number |
| `FINISH_WHATSAPP_BUSINESS_APP_ONBOARDING` | WA Business app number |
| `CANCEL` | User abandoned flow |

## Related Concepts
- [embedded-signup](../concepts/embedded-signup.md)
