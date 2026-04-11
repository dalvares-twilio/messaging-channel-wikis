---
type: source
title: Two-Step Verification
source_file: "[Two-Step Verification  Developer Documentation](Two-Step Verification  Developer Documentation.md)"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/two-step-verification
ingested: 2026-04-05
tags:
  - security
  - 2fa
  - pin
  - phone-numbers
---

## Summary

Two-step verification (2FA) adds security to business phone numbers via a 6-digit PIN. Required when registering numbers and for certain operations like deleting numbers. Can be set via API but cannot be disabled via API.

## Key Points

- **6-digit PIN** required
- **Required for registration**
- **No API endpoint to disable** — must use WhatsApp Manager
- **PIN needed for**: registration, PIN change, number deletion

## Set PIN via API

```
POST /<PHONE_NUMBER_ID>
{
  "pin": "<6_DIGIT_PIN>"
}
```

## Reset PIN via WhatsApp Manager

1. Go to business.facebook.com/settings
2. Click WhatsApp Accounts > select WABA
3. Click Settings > WhatsApp Manager
4. Find phone number > Settings
5. Two-step verification > Change PIN
6. Enter and confirm new PIN

## Related Concepts
- [webhook-security](webhook-security.md)

## Related Entities
- [two-step-verification](../entities/two-step-verification.md)
- [business-phone-number](business-phone-number.md)
