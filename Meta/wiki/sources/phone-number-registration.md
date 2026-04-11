---
type: source
title: Register a Business Phone Number
source_file: "[Register a Business Phone Number](Register a Business Phone Number.md)"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/registration
ingested: 2026-04-05
tags:
  - registration
  - api
  - phone-numbers
  - local-storage
---

## Summary

Guide to registering business phone numbers for Cloud API use. Registration can only be done via API (not WhatsApp Manager or App Dashboard). Covers the register endpoint, local storage options, rate limits, and deregistration.

## Key Points

- **API only** — cannot register via WhatsApp Manager or App Dashboard
- **Rate limit**: 10 requests per number per 72 hours
- **Required for Cloud API** — adding number to WABA is not enough
- **Re-registration required** after display name change approval

## Registration Workflow

1. **Add** phone number to WABA via WhatsApp Manager
2. **Verify** ownership via WhatsApp Manager
3. **Register** via API call to register endpoint

## Register Endpoint

```
POST /<PHONE_NUMBER_ID>/register
{
  "messaging_product": "whatsapp",
  "pin": "<6_DIGIT_PIN>"
}
```

### Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `messaging_product` | Yes | Always `"whatsapp"` |
| `pin` | Yes | 6-digit 2FA PIN (existing or new) |
| `data_localization_region` | No | 2-letter country code for local storage |

## Local Storage Regions

| Region | Countries |
|--------|-----------|
| APAC | AU, ID, IN, JP, SG, KR |
| Europe | DE, CH, GB |
| LATAM | BR |
| MEA | BH, ZA, AE |
| NORAM | CA |

**Note**: Cannot change local storage directly — must deregister and re-register.

## Deregister Endpoint

```
POST /<PHONE_NUMBER_ID>/deregister
```

- Makes number unusable with Cloud API
- Disables local storage
- Does NOT delete number or message history
- Same 10 request / 72 hour limit

## Related Concepts
- [phone-number-management](phone-number-management.md)

## Related Entities
- [business-phone-number](business-phone-number.md)
- [two-step-verification](../entities/two-step-verification.md)
- [local-storage](local-storage.md)
