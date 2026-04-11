---
type: query
title: "What phone number types are supported for WhatsApp Business?"
asked: 2026-04-10
tags: [phone-numbers, registration, verification]
---

## Question

What phone number types are supported for WhatsApp Business?

## Answer

WhatsApp Business supports several phone number types with varying verification options.

### Phone Number Type Support

| Type | SMS OTP | Voice OTP | Recommendation |
|------|---------|-----------|----------------|
| **Mobile** | Standard | Standard | **Recommended** |
| **Fixed line** | Not recommended | Standard | Enable international calls |
| **Freephone/Toll-free** | Not recommended | Standard | Check international support |
| **VoIP** | Not recommended | Standard | Confirm provider support |
| **Pager** | Not supported | Not supported | Not supported |
| **Short codes** | - | - | **Not supported** |

### Eligibility Requirements

A phone number must:
- Be owned by you (or your business)
- Have a valid country and area code
- Be able to receive voice calls or SMS

### Verification Methods

- **SMS OTP**: Send code via SMS to the number
- **Voice OTP**: Receive automated call with spoken code

For fixed line, toll-free, and VoIP numbers, voice OTP is the standard method since SMS may not be reliably supported.

### Key Limits

| Limit | Value |
|-------|-------|
| Initial numbers per portfolio | 2 |
| Maximum numbers per portfolio | 20 |

## References

- [business-phone-numbers](../sources/business-phone-numbers.md)
- [phone-number-management](../concepts/phone-number-management.md)
- [business-phone-number](../entities/business-phone-number.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers
