---
type: entity
title: "Two-Step Verification"
entity_type: security-feature
---

## Description

Two-step verification (2FA) is a security feature requiring a 6-digit PIN for sensitive phone number operations. Required when registering numbers for Cloud API.

## PIN Requirements

- 6 digits exactly
- Set during registration or via API
- Required for: registration, PIN change, number deletion

## API Reference

### Set/Change PIN
```
POST /<PHONE_NUMBER_ID>
{
  "pin": "123456"
}
```

**Note**: No API endpoint to disable 2FA — must use WhatsApp Manager.

## WhatsApp Manager Operations

### Change PIN
1. WhatsApp Manager > Account tools > Phone numbers
2. Select number > Two-step verification tab
3. Change PIN

### Disable 2FA
1. Follow change PIN steps
2. Click "Turn off two-step verification"
3. Confirm via email link

## When PIN is Required

- Registering phone number for Cloud API
- Changing 2FA PIN
- Deleting phone number from platform

## Related Entities
- [business-phone-number](business-phone-number.md)

## Sources
- [two-step-verification](../sources/two-step-verification.md)
- [business-phone-numbers](business-phone-numbers.md)
