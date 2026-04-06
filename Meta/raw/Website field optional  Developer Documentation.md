---
title: "Website field optional | Developer Documentation"
source: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/website-optional"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
WhatsApp Business Platform

## Website field optional

By default, the website field is required in the [business portfolio screen](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow#business-portfolio-screen). If you have been approved for [Partner-led Business Verification](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification) however, the website field will become optional and will be accompanied by a **My business does not have a website or profile page** checkbox:

![[467331606_2133248890410157_3569145607260288812_n 1.png]]

When a business customer checks this box and completes the flow, the customer’s WhatsApp assets and exchangeable token code will be generated and returned in a [message event](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) and [JavaScript response](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation#response-callback), as usual.

However, the [account\_update webhook](#webhook) that’s triggered when the customer completes the flow will have `event` set to `PARTNER_CLIENT_CERTIFICATION_NEEDED`, which indicates that you must verify their business as part of the onboarding process.

Onboard the customer as you normally would, and when you’re done, complete the steps described in our [Partner-led Business Verification](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification) document to verify their business. **The customer will not be able to send messages until their business is verified.**

- [Onboarding business customers as a Solution Provider](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-customers-as-a-solution-partner)
- [Onboarding business customers as a Tech Provider](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-customers-as-a-tech-provider)

## Webhook

When a business customer successfully completes the flow, an **account\_update** webhook will be triggered with `event` set to `PARTNER_CLIENT_CERTIFICATION_NEEDED`.

```
{
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "time": <WEBHOOK_SENT_TIMESTAMP>,
      "changes": [
        {
          "value": {
            "event": "PARTNER_CLIENT_CERTIFICATION_NEEDED",
            "partner_client_certification_needed_info": {
              "client_business_id": "<CUSTOMER_BUSINESS_PORTFOLIO_ID>"
            }
          },
          "field": "account_update"
        }
      ]
    }
  ],
  "object": "whatsapp_business_account"
}
```

When you receive this webhook, onboard the customer as you normally would, then complete the steps described in the [Partner-led Business Verification](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification) document to verify the customer’s business.

Did you find this page helpful?