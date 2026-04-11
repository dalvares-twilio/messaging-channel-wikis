---
type: source
title: Business Phone Numbers
source_file: "[Business phone numbers  Developer Documentation](Business phone numbers  Developer Documentation.md)"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers
ingested: 2026-04-05
tags:
  - phone-numbers
  - registration
  - verification
  - api
---

## Summary

Comprehensive guide to WhatsApp business phone numbers covering eligibility, registration methods, phone number types, status, verification, identity checks, and management. Business phone numbers must be registered before use with Cloud API and can still be used for regular calls/SMS but not WhatsApp Messenger.

## Key Points

- **Must be registered** for Cloud API use
- **Eligibility**: Owned by you, have country/area code, can receive voice/SMS
- **Short codes not supported**
- **Max 2 numbers initially** per business portfolio (can increase to 20)
- **Status must be "CONNECTED"** to send/receive messages

## Phone Number Types

| Type | SMS OTP | Voice OTP | Recommendation |
|------|---------|-----------|----------------|
| Mobile | Standard | Standard | Recommended |
| Fixed line | Not recommended | Standard | Enable intl calls |
| Freephone/Toll-free | Not recommended | Standard | Check intl support |
| VoIP | Not recommended | Standard | Confirm provider support |
| Pager | Not supported | Not supported | Not supported |

## Registration Methods

1. **App Dashboard** — via API Setup panel
2. **Meta Business Suite** — during WABA creation
3. **WhatsApp Manager** — connect phone number
4. **Embedded Signup** — via solution provider

**Note**: These methods add the number but don't register for Cloud API. Must call register endpoint.

## Key API Operations

| Operation | Endpoint |
|-----------|----------|
| Get status | `GET /<PHONE_ID>?fields=status` |
| Verify number | `POST /<PHONE_ID>/request_code`, then `POST /<PHONE_ID>/verify_code` |
| Get all numbers | `GET /<WABA_ID>/phone_numbers` |
| Get throughput | `GET /<PHONE_ID>?fields=throughput` |
| Delete | WhatsApp Manager only (not via API) |

## Identity Change Check

Optional security feature to verify customer identity before message delivery:
- Enable via `POST /<PHONE_ID>/settings` with `user_identity_change.enable_identity_key_check`
- Include `recipient_identity_key_hash` in send requests
- Mismatch returns error `137000`

## Related Concepts
- [phone-number-management](phone-number-management.md)

## Related Entities
- [business-phone-number](business-phone-number.md)
- [display-name](display-name.md)
- [business-profile](business-profile.md)
- [two-step-verification](../entities/two-step-verification.md)
