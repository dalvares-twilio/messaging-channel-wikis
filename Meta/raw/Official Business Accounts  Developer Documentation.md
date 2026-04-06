---
title: "Official Business Accounts | Developer Documentation"
source: "https://developers.facebook.com/documentation/business-messaging/whatsapp/official-business-accounts"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
WhatsApp Business Platform

## Official Business Accounts

An Official Business Account (“OBA”) is a business phone number owned by a business that has been verified as an authentic and notable brand according to specific [criteria](#eligibility). Official Business Account business phone numbers have a blue checkmark beside their name in the contacts view.

![[456954377_453386597161620_5745766558871976538_n 1.png]]

You can request OBA status for a business phone number using WhatsApp Manager or API. Once we’ve reviewed your request, you will receive a notification letting you know if your business phone has been granted OBA Number status or not. If your request is rejected, you can submit a new request after 30 days.

We do not grant OBA status to business employees, test accounts, and WhatsApp Business app phone numbers.

## Eligibility

To be eligible for OBA, the following criteria must be met:

- The business must comply with the [WhatsApp Business Messaging Policy⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Fbusiness.whatsapp.com%2Fpolicy%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExdzk4aWdSbU1aMnRFck9GbHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4r0UrZg6TjxKC658OJqy0j_itgwjGty0H7ArpkkSbBZP2BJ7wDL3UVR9XXLg_aem_qqMdlL6iFon0zFvTmrRm0A&h=AT4R8NzvfEcbGOdwEmA6Rb1qoUbbmT3_G25f9rz70CNcAhS7p3_cTiSqQQ8INrOm2oELw_UsS8qtsLO6gZKEHe7h1hhUvrGbT2LzuzM53_x4RmnI4RSjF8p3a6QGGgZJjss1s-CPgm4).
- The business must be registered on the WhatsApp Business Platform for at least 30 days.
- The business represents a [notable](#notability), well-known, and frequently searched for business, brand, or entity.
- The business portfolio that owns the number has been verified through [Business Verification⁠](https://www.facebook.com/business/help/2058515294227817).
- The business phone number has enabled [two-step verification](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#two-step-verification).
- The business phone number’s display name has been [approved](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#display-name-verification).

**Note:** If a business phone number is not an Official Business Account (OBA), it will not appear in search results when users search for it within the WhatsApp application. However, if a user adds the number to their contacts, the display name will appear in their search results. For improved discoverability, we recommend applying for OBA status.

## Notability

Notability requires a business to represent a well-known, often searched brand or entity. This should not be taken as a signal of the authenticity of the business.

Notability, on the other hand, reflects substantial presence in online news articles. Notability is assessed based on an account’s presence in news articles from publications with sizable audiences. We do not consider paid or promotional content as sources for review, including business or app listings.

![[457272592_1239953843829647_8265325653823058853_n.png]]

Additionally, previous OBA status approvals for other business phone numbers owned by a given Whatsapp Business Account do not guarantee approval for all business phone numbers owned by the WABA. If the WABA contains one main parent brand and the phone number associated with that brand meets notability requirements, we suggest updating the display names for the child brands as follows: {{sub-brand name}} by {{notable name}}

## Denied Requests

If your request has been denied, it means our team has carefully reviewed your account and determined that it is not eligible for OBA Number status at that time. Currently, these decisions cannot be appealed. You can continue to grow their business presence and wait 30 days before submitting another request.

![[457031264_766028162210302_4155505657500024802_n.png]]

In the meantime, this decision does not limit your ability to share your business details. Each business phone number also has a business profile which includes the profile picture, email, website, and business description. These are fields that you can edit at any time.

## Requesting OBA status via WhatsApp Manager

![[564126920_1339318217926829_3878332681973573854_n.jpg|Image]]
- Access [**WhatsApp Manager** ⁠](https://business.facebook.com/latest/whatsapp_manager/) > **Overview**, and click the business phone number:
![[456997811_1368661294090266_2491166291934528895_n.png]]
- Enable two-step verification if it isn’t enabled already.
![[456954365_532463442507497_4571397701593651380_n.png]]
- Click on the **Submit Request** button and fill out the form.
	- You can submit up to 5 supporting links especially from renowned publications (e.g., India Today, Economic times, Wall Street Journal, Reuters, Wikipedia, Business Insider) to show that the business is notable, which helps us determine notability.
		- Fields like Country(s) of operation, parent business or brand (esp. if it is a well known brand) and Primary language helps us to further understand your brand and eligibility for OBA.
![[457106823_1745186199576875_630331601567021999_n.png]]

## Requesting OBA status via API

Use the [POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>/official\_business\_account](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-official-business-account-status-api#Creating) endpoint to submit a request for OBA status for your business phone number.

### Example request

```
curl 'https://graph.facebook.com/v25.0/106540352242922/official_business_account' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "additional_supporting_information": "We are also featured in Planet Succulent and Prickly Digest",
  "business_website_url": "https://www.luckyshrub.com",
  "parent_business_or_brand": "Lucky Shrub LLC",
  "primary_country_of_operation": "United States of America",
  "primary_language": "English",
  "supporting_links": [
    "https://www.retailreview.com/gardening/2025/lucky-shrub",
    "https://www.faster-company.com/2025/online-nursies-are-making-green-waves",
    "https://www.succulentscene.com/2025/new-online-retailers",
    "https://www.pricklypages.com/2025/succullents/where-to-buy",
    "https://www.spinyliving.com/2025/latest-news"
  ]
}'
```

### Example response

```
{
  "success": true
}
```

Note that `true` does not indicate approval, only successful submission.

## Getting OBA status via API

Use the [GET /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-official-business-account-status-api#Reading) endpoint to request the `official_business_account` field on your business phone number to get the status of an OBA request.

### Example request

```
curl 'https://graph.facebook.com/v25.0/106540352242922?fields=official_business_account' \
-H 'Authorization: Bearer EAAJB...'
```

### Example response

```
{
  "official_business_account": {
    "oba_status": "NOT_STARTED"
  },
  "id": "106540352242922"
}
```

Did you find this page helpful?