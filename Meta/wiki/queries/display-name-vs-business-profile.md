---
type: query
title: "What is the difference between display name and business profile?"
asked: 2026-04-10
tags:
  - display-name
  - business-profile
  - phone-number
---

## Question

What is the difference between a display name and a business profile in WhatsApp Business, and how are they managed differently?

## Answer

Display name and business profile are two separate aspects of a phone number's identity on WhatsApp Business.

**Display Name:**
- The **business name** shown in chat threads and contact lists
- **Requires verification** by Meta before appearing in chats
- Set during phone number registration
- **Verification statuses:** `APPROVED`, `PENDING_REVIEW`, `DECLINED`
- Max **10 changes per 30 days**
- Must **re-register phone number** after display name approval

**Business Profile:**
- **Additional information** displayed on the profile page (address, email, website, etc.)
- **Does NOT require verification** to update
- Can be **edited anytime** via API or WhatsApp Manager
- Changes take effect immediately

**Comparison:**

| Aspect | Display Name | Business Profile |
|--------|--------------|------------------|
| Verification | Required | Not required |
| Change limit | 10/30 days | Unlimited |
| Re-registration | Required after approval | Not required |
| Visible in | Chat threads, contact lists | Profile page only |

**API Endpoints:**

Display name:
```
POST /<PHONE_NUMBER_ID>?new_display_name=<NAME>
GET /<PHONE_NUMBER_ID>?fields=verified_name,name_status
```

Business profile:
```
POST /<PHONE_NUMBER_ID>/whatsapp_business_profile
GET /<PHONE_NUMBER_ID>/whatsapp_business_profile?fields=about,address,description,email,websites,vertical
```

**Note:** Users can override your display name with their own contact label, but this only affects their personal view.

## References

- [display-names](../sources/display-names.md)
- [business-profiles](../sources/business-profiles.md)
- [display-name](../entities/display-name.md)
- [business-profile](../entities/business-profile.md)
- Source URL (display names): https://developers.facebook.com/documentation/business-messaging/whatsapp/display-names
- Source URL (business profiles): https://developers.facebook.com/documentation/business-messaging/whatsapp/business-profiles
