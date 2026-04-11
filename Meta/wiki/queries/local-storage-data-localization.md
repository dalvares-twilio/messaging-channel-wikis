---
type: query
title: "How do I enable local storage (data localization) for a phone number?"
asked: 2026-04-10
tags: [local-storage, data-localization, compliance, registration]
---

## Question

How do I enable local storage (data localization) for a phone number?

## Answer

Local storage enables data-at-rest to be stored in a specific geographic region for compliance purposes. It is configured during phone number registration.

### Supported Regions

| Region | Country Codes |
|--------|---------------|
| APAC | AU, ID, IN, JP, SG, KR |
| Europe | DE, CH, GB |
| LATAM | BR |
| MEA | BH, ZA, AE |
| NORAM | CA |

### Enable During Registration

Include the `data_localization_region` parameter when registering:

```
POST /<PHONE_NUMBER_ID>/register
{
  "messaging_product": "whatsapp",
  "pin": "123456",
  "data_localization_region": "DE"
}
```

The value must be a 2-letter ISO 3166 country code from a supported region.

### Change Local Storage Region

You **cannot change the region directly**. To change:

1. Deregister the phone number
2. Re-register with the new region code

### Disable Local Storage

1. Deregister the phone number
2. Re-register **without** the `data_localization_region` parameter

### Key Points

- Region is locked after registration
- Deregistration disables local storage
- Same 10 requests per 72 hours rate limit applies

## References

- [phone-number-registration](../sources/phone-number-registration.md)
- [local-storage](../entities/local-storage.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/registration
