---
type: query
title: "What are the stages in the phone number lifecycle?"
asked: 2026-04-10
tags: [phone-numbers, lifecycle, management]
---

## Question

What are the stages in the phone number lifecycle?

## Answer

The phone number lifecycle on WhatsApp Business Platform follows these stages:

### Lifecycle Flow

```
Add to WABA -> Verify Ownership -> Register for Cloud API -> Configure -> Use -> Delete
```

### 1. Add to WABA

Add the phone number to your WhatsApp Business Account via:
- App Dashboard
- Meta Business Suite
- WhatsApp Manager
- Embedded Signup

### 2. Verify Ownership

Prove you own the number by receiving a code via SMS or voice call.
- Request code: `POST /<PHONE_ID>/request_code`
- Submit code: `POST /<PHONE_ID>/verify_code`

### 3. Register for Cloud API

Call the register endpoint to enable messaging:
```
POST /<PHONE_NUMBER_ID>/register
```
This step is REQUIRED - adding to WABA alone is not enough.

### 4. Configure

After registration, configure the number:
- Set display name
- Configure business profile
- Enable two-step verification
- Set up conversational components (ice breakers, commands)
- Request OBA (Official Business Account) status

### 5. Use

Send and receive messages. Status must be "CONNECTED".

### 6. Delete

Delete via WhatsApp Manager only (not via API).

**Deletion restrictions**:
- Cannot delete if paid messages sent within 30 days
- Requires 2FA PIN if status is CONNECTED

## References

- [phone-number-management](../concepts/phone-number-management.md)
- [business-phone-numbers](../sources/business-phone-numbers.md)
- [phone-number-registration](../sources/phone-number-registration.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers
