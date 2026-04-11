---
type: query
title: "What is two-step verification and how do I set/reset the PIN?"
asked: 2026-04-10
tags: [2fa, security, pin, phone-numbers]
---

## Question

What is two-step verification and how do I set/reset the PIN?

## Answer

Two-step verification (2FA) is a security feature that adds protection to business phone numbers via a 6-digit PIN.

### When PIN is Required

- Registering a phone number for Cloud API
- Deregistering a phone number
- Deleting a phone number (if status is CONNECTED)
- Changing the PIN itself

### Setting the PIN via API

```
POST /<PHONE_NUMBER_ID>
{
  "pin": "<6_DIGIT_PIN>"
}
```

### Resetting the PIN via WhatsApp Manager

The PIN cannot be disabled via API. To reset:

1. Go to business.facebook.com/settings
2. Click WhatsApp Accounts > select your WABA
3. Click Settings > WhatsApp Manager
4. Find phone number > Settings
5. Two-step verification > Change PIN
6. Enter and confirm new PIN

### Security Webhook

The `security` webhook notifies of PIN changes and reset requests.

### Key Limitation

There is NO API endpoint to disable two-step verification - it must be done through WhatsApp Manager.

## References

- [two-step-verification](../sources/two-step-verification.md)
- [two-step-verification](../concepts/two-step-verification.md)
- [two-step-verification](../entities/two-step-verification.md)
- [security-webhook-reference](../sources/security-webhook-reference.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/two-step-verification
