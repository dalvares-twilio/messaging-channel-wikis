---
type: source
title: "Bypassing Phone Number Addition Screen"
source_file: "[[raw/Bypassing the phone number addition screen.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/bypass-phone-addition"
ingested: 2026-04-05
tags: [embedded-signup, customization, phone-numbers]
---

## Summary

Skip phone number addition and verification screens in Embedded Signup. Requires programmatic phone registration afterward.

## Configuration

```javascript
FB.login(callback, {
  config_id: '<CONFIG_ID>',
  response_type: 'code',
  override_default_response_type: true,
  extras: {
    setup: {},
    featureType: 'only_waba_sharing',
    sessionInfoVersion: '3',
  }
});
```

## Completion Event

```json
{
  "data": {
    "waba_id": "<WABA_ID>"
  },
  "type": "WA_EMBEDDED_SIGNUP",
  "event": "FINISH_ONLY_WABA",
  "version": 3
}
```

## Post-Completion

Must programmatically create and register phone number via API.

## Related Concepts
- [[wiki/concepts/embedded-signup]]
