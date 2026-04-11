---
type: query
title: "How do I register a phone number for Cloud API?"
asked: 2026-04-10
tags: [registration, cloud-api, phone-numbers]
---

## Question

How do I register a phone number for Cloud API?

## Answer

Registering a phone number for Cloud API is a three-step process:

### 1. Add Phone Number to WABA

Add the phone number to your WhatsApp Business Account using one of these methods:
- App Dashboard
- Meta Business Suite
- WhatsApp Manager
- Embedded Signup

**Note**: Adding a number does NOT register it for Cloud API use.

### 2. Verify Ownership

Receive verification code via SMS or voice call:
```
POST /<PHONE_NUMBER_ID>/request_code
```
Then submit the code:
```
POST /<PHONE_NUMBER_ID>/verify_code
```

### 3. Register via API

Call the register endpoint (this is the only way to register):
```
POST /<PHONE_NUMBER_ID>/register
{
  "messaging_product": "whatsapp",
  "pin": "<6_DIGIT_PIN>"
}
```

**Important**: Registration can ONLY be done via API - not through WhatsApp Manager or App Dashboard.

### Rate Limits

- 10 registration requests per phone number per 72 hours
- Re-registration required after display name change approval

## References

- [phone-number-registration](../sources/phone-number-registration.md)
- [business-phone-numbers](../sources/business-phone-numbers.md)
- [phone-number-management](../concepts/phone-number-management.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/registration
