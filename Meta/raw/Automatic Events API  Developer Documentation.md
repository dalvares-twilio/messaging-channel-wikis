---
title: "Automatic Events API | Developer Documentation"
source: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/automatic-events-api"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
WhatsApp Business Platform

## Automatic Events API

![[503425036_1029531339304862_7305936950282438326_n.png|Embedded Signup opt-in screen for automatic event identification]]

If a business customer opts in, Meta use a combination of regex and natural language processing to analyze the customer’s new message threads originating from Click-to-WhatsApp ads. If our analysis determines that a lead gen or purchase event occurred, an [automatic\_events](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/automatic_events) webhook is triggered, describing the event. You can then report the event for the customer using the [Conversions API](https://developers.facebook.com/docs/marketing-api/conversions-api) so the customer can use it on a Meta surface (in 2026, see [Limitations](#limitations) below).

## Limitations

- Automatic event identification is a new feature. Your business customers won’t see or use automatic events reported via Conversions API in Meta surfaces until 2026. However, you can surface this information to your customers using your own solution before then. This allows them to gain a deeper understanding of their own customers’ needs, preferences, and ad performance.
- Automatic event identification is not available to business customers in the European Union, United Kingdom, or Japan.

## Requirements

- You have already [implemented](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation) Embedded Signup and are able to onboard business customers who complete the flow.
- Your [webhook server](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/create-webhook-endpoint) is successfully processing webhooks.

## Setup

Automatic event identification is available as an opt-in feature to all business customers automatically. To receive event notifications, you must subscribe your app to the **automatic\_events** webhook field. However, as soon as you do this, you may begin receiving these webhooks before you can process them. Therefore, complete these steps using a test app before moving your code to production and subscribing your production app to the webhook field.

### Step 2: Adjust your webhook callback

Adjust your webhook callback code so that it can successfully process **automatic\_events** webhook payloads.

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "automatic_events": [
              {
                "id": "<WHATSAPP_MESSAGE_ID>",
                "event_name": "LeadSubmitted",
                "timestamp": <WEBHOOK_TRIGGER_TIMESTAMP>,
                "ctwa_clid": "<CLICK_ID>"
              }
            ]
          },
          "field": "automatic_events"
        }
      ]
    }
  ]
}
```

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "102290129340398",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "15550783881",
              "phone_number_id": "106540352242922"
            },
            "automatic_events": [
              {
                "id": "wamid.HBgLMTIwNjY3NzQ3OTgVAgASGBQzQUY3MDVCQzFBODE5ODU4MUZEOQA=",
                "event_name": "LeadSubmitted",
                "timestamp": 1749069089,
                "ctwa_clid": "Afc3nYt4TTydumlFFsatFz8bR2yHCtVA92Veu_zDE4DgAI-QqCwM6eC3-K3lTGHRiLxRTVXFEsdyKQQSa-2obZyuGBq_EYypt_OwbMihBV0pbUoRmrGnEjwFTHop-Px0TfA"
              }
            ]
          },
          "field": "automatic_events"
        }
      ]
    }
  ]
}
```

#### Purchase event structure

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"
            },
            "automatic_events": [
              {
                "id": "<WHATSAPP_MESSAGE_ID>",
                "event_name": "Purchase",
                "timestamp": <WEBHOOK_TRIGGER_TIMESTAMP>,
                "ctwa_clid": "<CLICK_ID>",
                "custom_data": {
                  "currency": "<CURRENCY_CODE>",
                  "value": <AMOUNT>
                }
              }
            ]
          },
          "field": "automatic_events"
        }
      ]
    }
  ]
}
```

#### Purchase event example

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "102290129340398",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "15550783881",
              "phone_number_id": "106540352242922"
            },
            "automatic_events": [
              {
                "id": "wamid.HBgLMTIwNjY3NzQ3OTgVAgARGBIwRkU4NDI5Nzk3RjZDMzE2RUMA",
                "event_name": "Purchase",
                "timestamp": 1749069131,
                "ctwa_clid": "Afc3nYt4TTydumlFFsatFz8bR2yHCtVA92Veu_zDE4DgAI-QqCwM6eC3-K3lTGHRiLxRTVXFEsdyKQQSa-2obZyuGBq_EYypt_OwbMihBV0pbUoRmrGnEjwFTHop-Px0TfA",
                "custom_data": {
                  "currency": "USD",
                  "value": 25000
                }
              }
            ]
          },
          "field": "automatic_events"
        }
      ]
    }
  ]
}
```

### Step 3: Trigger webhooks

1. Access your test implementation of Embedded Signup.
2. Authenticate the flow using a business that has a Click-to-WhatsApp ad already configured.
3. In the [Business Asset Creation Screen](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow#business-asset-creation-screen), check the **Instruct Meta to automatically identify order and lead events** checkbox, and complete the flow.
4. Access the Click-to-WhatsApp ad and click it to send a message to the business.
5. Use the business to reply to the message with one of the strings below (must be exact).
- **For a purchase event:** *Your tracking number is AB123456789BR*
- **For a lead gen event:** *I am interested in learning more about the product*

After you have triggered both **automatic\_events** webhook payloads, confirm that your webhook callback has processed each webhook according to your business needs.

### Step 4: Report each event using Conversions API (optional)

You can optionally report each event using the [Conversions API](https://developers.facebook.com/docs/marketing-api/conversions-api/business-messaging). Include any relevant values from the event webhook, as appropriate.

See [Send events via Conversions API](https://developers.facebook.com/docs/marketing-api/conversions-api/business-messaging#send-events-via-the-conversions-api-2) for additional information about reporting events.

```
curl 'https://graph.facebook.com/<API_VERSION>/<DATASET_ID>/events' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "data": [
    {
      "event_name": "LeadSubmitted",
      "event_time": <WEBHOOK_TRIGGER_TIMESTAMP>,
      "action_source": "business_messaging",
      "messaging_channel": "whatsapp",
      "user_data": {
        "ctwa_clid": "<CLICK_ID>"
      },
      "messaging_outcome_data": {
        "outcome_type": "automatic_events"
      }
    }
  ]
}
'
```

#### Purchase event syntax

```
curl 'https://graph.facebook.com/<API_VERSION>/<DATASET_ID>/events' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "data": [
    {
      "event_name": "Purchase",
      "event_time": <WEBHOOK_TRIGGER_TIMESTAMP>,
      "action_source": "business_messaging",
      "messaging_channel": "whatsapp",
      "user_data": {
        "ctwa_clid": "<CLICK_ID>"
      },
      "custom_data": {
        "currency": "<CURRENCY_CODE>",
        "value": <AMOUNT>
      },
      "messaging_outcome_data": {
        "outcome_type": "automatic_events"
      }
    }
  ]
}
'
```

## Enabling and disabling via Meta Business Suite

Business customers who have already been onboarded via Embedded Signup can enable automatic event identification using Meta Business Suite.

![[503429874_596845240111750_4726469615509960636_n.png|A WhatsApp Business Account selected in the Meta Business Suite's settings panel, with the summary tab showing checkboxes for opting in.]]

If a business customer who you have already onboarded wants to enable this feature, you can send them these instructions:

1. Access Meta Business Suite at [https://business.facebook.com⁠](https://business.facebook.com/).
2. Navigate to **Settings** > **Accounts** > **WhatsApp accounts** and click your WhatsApp Business Account.
3. Scroll down to **Privacy and data sharing** in the **Summary** tab.
4. Use the “ **Automatically identify**... “ toggles to enable or disable automatic event identification as desired.

Did you find this page helpful?