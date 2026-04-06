---
title: "Business profiles | Developer Documentation"
source: "https://developers.facebook.com/documentation/business-messaging/whatsapp/business-profiles"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
WhatsApp Business Platform

## Business profiles

Your business phone number’s profile displays additional information such as address, website, and description. You can add this information when registering your phone number or update it later via WhatsApp Manager or API.

![[507476070_1379105613180336_7510619276605653298_n.png|Screenshot of a WhatsApp business profile displaying company information]]

To view or update your business profile via WhatsApp Manager:

1. Navigate to [WhatsApp Manager⁠](https://business.facebook.com/latest/whatsapp_manager/) > **Account tools** > **Phone numbers**.
2. Select your business phone number.
3. Click the **Profile** tab to view your current profile.
4. Use the form to set new profile values.

Use the [GET /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/whatsapp\_business\_profile](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-profile-api#Reading) endpoint to request specific business profile fields:

### Example request

```
curl 'https://graph.facebook.com/v25.0/106540352242922/whatsapp_business_profile?fields=about,address,description,email,profile_picture_url,websites,vertical' \
-H 'Authorization: Bearer EAAJB...'
```

### Example response

```
{
  "data": [
    {
      "about": "Succulent specialists!",
      "address": "1 Hacker Way, Menlo Park, CA 94025",
      "description": "At Lucky Shrub, we specialize in providing a...",
      "email": "lucky@luckyshrub.com",
      "profile_picture_url": "https://pps.whatsapp.net/v/t61.24...",
      "websites": [
        "https://www.luckyshrub.com/"
      ],
      "vertical": "RETAIL",
      "messaging_product": "whatsapp"
    }
  ]
}
```

Use the [POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/whatsapp\_business\_profile](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-profile-api#Updating) endpoint to update specific business profile fields:

### Example request

```
curl 'https://graph.facebook.com/v25.0/106540352242922/whatsapp_business_profile' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
--data-raw '
{
  "about": "Succulent specialists!",
  "address": "1 Hacker Way, Menlo Park, CA 94025",
  "description": "At Lucky Shrub, we specialize in providing a diverse range of high-quality succulents to suit your needs. From rare and exotic varieties to timeless classics, our collection has something for everyone.",
  "email": "lucky@luckyshrub.com",
  "messaging_product": "whatsapp",
  "profile_picture_handle": "4::aW...",
  "vertical": "RETAIL",
  "websites": "[\n  \"https://www.luckyshrub.com\"\n]"
}'
```

### Example response

```
{
  "success": true
}
```

Did you find this page helpful?