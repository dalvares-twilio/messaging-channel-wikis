---
type: entity
title: "Local Storage"
entity_type: feature
---

## Description

Local storage enables data-at-rest to be stored in a specific geographic region for compliance purposes. Configured during phone number registration.

## Supported Regions

| Region | Country Codes |
|--------|---------------|
| APAC | AU, ID, IN, JP, SG, KR |
| Europe | DE, CH, GB |
| LATAM | BR |
| MEA | BH, ZA, AE |
| NORAM | CA |

## Configuration

### Enable During Registration
```
POST /<PHONE_NUMBER_ID>/register
{
  "messaging_product": "whatsapp",
  "pin": "123456",
  "data_localization_region": "DE"
}
```

### Change Region
Cannot change directly. Must:
1. Deregister the number
2. Re-register with new region code

### Disable
1. Deregister the number
2. Re-register without `data_localization_region` parameter

## Key Points

- Set via `data_localization_region` parameter
- 2-letter ISO 3166 country code
- Cannot be modified after registration
- Disabled when number is deregistered

## Related Entities
- [business-phone-number](business-phone-number.md)

## Sources
- [phone-number-registration](phone-number-registration.md)
