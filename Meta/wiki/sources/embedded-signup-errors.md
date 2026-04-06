---
type: source
title: "Embedded Signup Flow Errors"
source_file: "[[raw/Embedded Signup Flow Errors.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/errors"
ingested: 2026-04-05
tags: [embedded-signup, errors, troubleshooting]
---

## Summary

Reference for errors that may occur during Embedded Signup flow.

## Abandoned Flow Steps

| Step Value | Screen |
|------------|--------|
| `BUSINESS_ACCOUNT_SELECTION` | Business portfolio |
| `WABA_PHONE_PROFILE_PICKER` | WABA selection |
| `WHATSAPP_BUSINESS_PROFILE_SETUP` | WABA creation |
| `PHONE_NUMBER_SETUP` | Phone number addition |
| `PHONE_NUMBER_VERIFICATION` | Phone verification |
| `PERMISSIONS` | Permissions review |

## Common Error Categories

### Business Account Limits
- Max businesses created
- Account too new
- Suspicious behavior flagged

### WABA Errors
- No admin permission
- Unverified business limit
- Policy compliance issues

### Phone Number Errors
- Max numbers reached
- Number already registered
- Invalid format
- Blocked number

### OTP Verification
- Too many attempts
- Code expired
- Invalid code

### Coexistence (WA Business App)
- Number not registered with WA Business
- Already shared with another partner
- Region not supported

### Rate Limiting
- Too many requests
- Suspicious behavior

## Related Concepts
- [[wiki/concepts/embedded-signup]]
