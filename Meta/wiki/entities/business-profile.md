---
type: entity
title: "Business Profile"
entity_type: phone-number-attribute
---

## Description

The business profile contains additional information displayed on a phone number's WhatsApp profile page, including address, website, email, and description.

## Profile Fields

| Field | Type | Description |
|-------|------|-------------|
| `about` | string | Short tagline |
| `address` | string | Business address |
| `description` | string | Longer description |
| `email` | string | Contact email |
| `profile_picture_url` | string | Profile image URL |
| `profile_picture_handle` | string | For setting new image |
| `websites` | array | Website URLs |
| `vertical` | enum | Business category |

## Vertical Values

`RETAIL`, `PROFESSIONAL_SERVICES`, `ENTERTAINMENT`, `TRAVEL`, `AUTOMOTIVE`, `BEAUTY`, `EDUCATION`, `FINANCE`, `FOOD_AND_GROCERY`, `GOVERNMENT`, `HOTEL`, `NON_PROFIT`, `RESTAURANT`, `OTHER`

## API Reference

### Get Profile
```
GET /<PHONE_NUMBER_ID>/whatsapp_business_profile?fields=about,address,description,email,profile_picture_url,websites,vertical
```

### Update Profile
```
POST /<PHONE_NUMBER_ID>/whatsapp_business_profile
{
  "about": "...",
  "address": "...",
  "description": "...",
  "email": "...",
  "vertical": "RETAIL",
  "websites": ["https://..."]
}
```

## WhatsApp Manager

1. WhatsApp Manager > Account tools > Phone numbers
2. Select phone number > Profile tab
3. Edit fields

## Related Entities
- [display-name](display-name.md)
- [whatsapp-business-account](whatsapp-business-account.md)

## Sources
- [business-profiles](business-profiles.md)
