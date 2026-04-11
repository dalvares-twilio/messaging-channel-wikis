---
type: query
title: "What fields can be set in a WhatsApp business profile?"
asked: 2026-04-10
tags:
  - business-profile
  - phone-number
  - configuration
---

## Question

What information fields can be configured in a WhatsApp Business profile, and how do I update them via API?

## Answer

Business profiles contain additional information displayed on a phone number's WhatsApp profile page.

**Available Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `about` | string | Short tagline |
| `address` | string | Business address |
| `description` | string | Longer business description |
| `email` | string | Contact email |
| `profile_picture_url` | string | Profile image URL (read-only) |
| `profile_picture_handle` | string | For setting new image |
| `websites` | array | Website URLs |
| `vertical` | enum | Business category |

**Vertical (category) options:**
`RETAIL`, `PROFESSIONAL_SERVICES`, `ENTERTAINMENT`, `TRAVEL`, `AUTOMOTIVE`, `BEAUTY`, `EDUCATION`, `FINANCE`, `FOOD_AND_GROCERY`, `GOVERNMENT`, `HOTEL`, `NON_PROFIT`, `RESTAURANT`, `OTHER`

**Get profile via API:**
```
GET /<PHONE_NUMBER_ID>/whatsapp_business_profile?fields=about,address,description,email,profile_picture_url,websites,vertical
```

**Update profile via API:**
```
POST /<PHONE_NUMBER_ID>/whatsapp_business_profile
{
  "about": "Your tagline",
  "address": "123 Main St",
  "description": "Full description...",
  "email": "contact@example.com",
  "vertical": "RETAIL",
  "websites": ["https://example.com"]
}
```

**Note:** Business profile fields can be edited anytime without verification, unlike display names which require verification.

## References

- [business-profiles](../sources/business-profiles.md)
- [business-profile](../entities/business-profile.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-profiles
