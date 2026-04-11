---
type: source
title: Business Profiles
source_file: "[Business profiles  Developer Documentation](Business profiles  Developer Documentation.md)"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-profiles
ingested: 2026-04-05
tags:
  - profile
  - business-info
  - phone-number
---

## Summary

Business profiles display additional information about a business phone number in WhatsApp, including address, website, email, and description. Profiles can be configured during phone number registration or updated later via WhatsApp Manager or API.

## Key Points

- Profile visible to WhatsApp users viewing business contact
- Editable anytime via WhatsApp Manager or API
- Separate from display name (which requires verification)

## Profile Fields

| Field | Description |
|-------|-------------|
| `about` | Short tagline |
| `address` | Business address |
| `description` | Longer business description |
| `email` | Contact email |
| `profile_picture_url` | Profile image URL |
| `websites` | Array of website URLs |
| `vertical` | Business category (e.g., `RETAIL`) |

## API Operations

### Get Profile
```
GET /<PHONE_NUMBER_ID>/whatsapp_business_profile?fields=about,address,description,email,profile_picture_url,websites,vertical
```

### Update Profile
```
POST /<PHONE_NUMBER_ID>/whatsapp_business_profile
```
Body: JSON with fields to update

## WhatsApp Manager

1. WhatsApp Manager > Account tools > Phone numbers
2. Select phone number
3. Click Profile tab
4. Edit fields as needed

## Related Concepts
- [phone-number-management](phone-number-management.md)

## Related Entities
- [business-profile](business-profile.md)
- [display-name](display-name.md)
- [whatsapp-business-account](whatsapp-business-account.md)
