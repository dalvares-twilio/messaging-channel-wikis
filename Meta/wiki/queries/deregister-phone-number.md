---
type: query
title: "How do I deregister a phone number and what happens when I do?"
asked: 2026-04-10
tags: [deregistration, phone-numbers, cloud-api]
---

## Question

How do I deregister a phone number and what happens when I do?

## Answer

Deregistering a phone number removes it from Cloud API use but does not delete it from your WABA.

### Deregister Endpoint

```
POST /<PHONE_NUMBER_ID>/deregister
```

No request body is required.

### What Happens When You Deregister

| Effect | Description |
|--------|-------------|
| Cloud API access | Number becomes unusable with Cloud API |
| Local storage | Disabled if previously enabled |
| Phone number | **NOT deleted** - remains in WABA |
| Message history | **NOT deleted** - preserved |
| Regular calls/SMS | Still work (the actual phone line is unaffected) |

### Rate Limits

Same as registration: **10 requests per phone number per 72 hours**

### Use Cases for Deregistration

1. **Change local storage region** - Must deregister, then re-register with new region
2. **Disable local storage** - Deregister, then re-register without region parameter
3. **Migrate number** - Prepare for migration to different provider
4. **Temporary suspension** - Stop API messaging temporarily

### Re-registration

After deregistering, you can re-register the same number by calling the register endpoint again with a valid 2FA PIN.

## References

- [phone-number-registration](../sources/phone-number-registration.md)
- [phone-number-management](../concepts/phone-number-management.md)
- [local-storage](../entities/local-storage.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/registration
