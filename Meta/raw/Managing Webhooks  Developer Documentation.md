---
title: "Managing Webhooks | Developer Documentation"
source: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/manage-webhooks"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
WhatsApp Business Platform

## Managing Webhooks

WhatsApp Business Accounts (WABAs) and their assets are objects in the Facebook Social Graph. When a trigger event occurs to one of those objects, Facebook sees it and sends a notification to the webhook URL specified in your Facebook App’s dashboard.

In the context of embedded signup, you can use webhooks to get notifications of changes to your WABAs, phone numbers, message templates, and messages sent to your phone numbers.

**You must [individually subscribe to every WABA](#subscribe-to-webhooks-on-a-business-customer-waba) for which you wish to receive webhooks.** After fetching the client’s WABA ID, subscribe your app to the ID in order to start receiving webhooks.

See [Webhooks](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview) for more information about webhooks and fields.

Use the [POST /<WABA\_ID>/subscribed\_apps](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/subscribed-apps-api#post-version-waba-id-subscribed-apps) endpoint to subscribe your app to webhooks on the business customer’s WABA. If you want the customer’s webhooks to be sent to a different callback URL than the one set on your app, you have multiple [webhook override](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/override) options.

### Request

```
curl -X POST 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/subscribed_apps' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

### Response

```
{
  "success": true
}
```

Repeat this process for any other WABAs for which you wish you receive webhooks notifications. Note that if you subscribe your app to webhooks for multiple WABAs, all webhooks notifications will be sent to the app’s callback URL specified in the **Webhooks** product panel of the App Dashboard, unless you [override webhooks](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/override).

## Get all subscriptions on a WABA

To get a list of apps subscribed to webhooks for a WABA, send a GET request to the `subscribed_apps` endpoint on the WABA:

### Request Syntax

```
GET https://graph.facebook.com/<API_VERSION>/<WABA_ID>/subscribed_apps
```

A successful response includes an array of apps that have subscribed to the WABA, with link, name, and id properties for each app.

### Sample Request

```
curl \
'https://graph.facebook.com/v25.0/102289599326934/subscribed_apps' \
-H 'Authorization: Bearer EAAJi...'
```

### Sample Response

```
{
  "data" : [
    {
      "whatsapp_business_api_data" : {
        "id" : "67084...",
        "link" : "https://www.facebook.com/games/?app_id=67084...",
        "name" : "Jaspers Market"
      }
    },
    {
      "whatsapp_business_api_data" : {
        "id" : "52565...",
        "link" : "https://www.facebook.com/games/?app_id=52565...",
        "name" : "Jaspers Fresh Finds"
      }
    }
  ]
}
```

To unsubscribe your app from webhooks for a WhatsApp Business Account, send a DELETE request to the `subscribed_apps` endpoint on the WABA.

### Request Syntax

```
DELETE https://graph.facebook.com/<API_VERSION>/<WABA_ID>/subscribed_apps
```

### Sample Request

```
curl -X DELETE \
'https://graph.facebook.com/v25.0/102289599326934/subscribed_apps' \
-H 'Authorization: Bearer EAAJi...'
```

### Sample Response

```
{
   "success" : true
}
```

## Overriding the callback URL

## Set up notifications

You can set up webhooks to send you notifications of changes to your subscribed WhatsApp Business Accounts. The types of notifications you can subscribe to are:

| Field name | Description |
| --- | --- |
| [account\_alerts](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_alerts) | The **account\_alerts** webhook notifies you of changes to a business phone number’s [messaging limit](https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits), [business profile](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#business-profiles), and [Official Business Account](https://developers.facebook.com/documentation/business-messaging/whatsapp/whatsapp-business-accounts#official-business-account) status. |
| [account\_review\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_review_update) | The **account\_review\_update** webhook notifies you when a WhatsApp Business Account has been reviewed against our policy guidelines. |
| [account\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_update) | The **account\_update** webhook notifies of changes to a WhatsApp Business Account’s [partner-led business verification](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification) submission, its [authentication-international rate](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/authentication-international-rates) eligibility, or primary business location, when it is shared with a [Solution Partner](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/overview), [policy or terms violations](https://developers.facebook.com/documentation/business-messaging/whatsapp/policy-enforcement), offboarding, reconnection, or when it is deleted. |
| [automatic\_events](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/automatic_events) | The **automatic\_events** webhook notifies you when we detect a purchase or lead event in a chat thread between you and a WhatsApp user who has messaged you via your Click to WhatsApp ad, if you have opted-in to [Automatic Events](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/automatic-events-api) reporting. |
| [business\_capability\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/business_capability_update) | The **business\_capability\_update** webhook notifies you of WhatsApp Business Account or business portfolio capability changes ([messaging limits](https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits#increasing-your-limit), [phone number limits](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#registered-number-cap), etc.). |
| [history](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/history) | The **history** webhook is used to synchronize the [WhatsApp Business app chat history](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) of a business customer onboarded by a solution provider. |
| [message\_template\_components\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/message_template_components_update) | The **message\_template\_components\_update** webhook notifies you of changes to a template’s components. |
| [message\_template\_quality\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/message_template_quality_update) | The **message\_template\_quality\_update** webhook notifies you of changes to a template’s [quality score](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-quality). |
| [message\_template\_status\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/message_template_status_update) | The **message\_template\_status\_update** webhook notifies you of changes to the status of an existing template. |
| [messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages) | The **messages** webhook describes messages sent from a WhatsApp user to a business and the status of messages sent by a business to a WhatsApp user. |
| [partner\_solutions](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/partner_solutions) | The **partner\_solutions webhook** describes changes to the status of a [Multi-Partner Solution](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions). |
| [payment\_configuration\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/payment_configuration_update) | The **payment\_configuration\_update** webhook notifies you of changes to payment configurations for [Payments API India](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/overview) and [Payments API Brazil](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/overview). |
| [phone\_number\_name\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/phone_number_name_update) | The **phone\_number\_name\_update** webhook notifies you of business phone number [display name verification](https://developers.facebook.com/documentation/business-messaging/whatsapp/display-names#display-name-verificationn) outcomes. |
| [phone\_number\_quality\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/phone_number_quality_update) | The **phone\_number\_quality\_update** webhook notifies you of changes to a business phone number’s [throughput level](https://developers.facebook.com/documentation/business-messaging/whatsapp/throughput). |
| [security](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/security) | The **security** webhook notifies you of changes to a business phone number’s security settings. |
| [smb\_app\_state\_sync](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/smb_app_state_sync) | The **smb\_app\_state\_sync** webhook is used for synchronizing contacts of [WhatsApp Business app users who have been onboarded](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) via a solution provider. |
| [smb\_message\_echoes](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/smb_message_echoes) | The **smb\_message\_echoes** webhook notifies you of messages sent via the WhatsApp Business app or a [companion (“linked”) device](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users#linked-devices) by a business customer who has been [onboarded to Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) via a solution provider. |
| [template\_category\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/template_category_update) | The **template\_category\_update** webhook notifies you of changes to template’s [category](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-categorization). |
| [user\_preferences](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/user_preferences) | The **user\_preferences** webhook notifies you of changes to a WhatsApp user’s [marketing message preferences](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates#user-preferences-for-marketing-messages). |

## Examples

### Onboarded business customer

An **account\_update** webhook is triggered with `event` set to `PARTNER_ADDED` when a business customer successfully completes the Embedded Signup flow.

#### Syntax

```
{
  "entry": [
    {
      "id": "<BUSINESS_PORTFOLIO_ID>",
      "time": <WEBHOOK_SENT_TIMESTAMP>,
      "changes": [
        {
          "value": {
            "event": "<EVENT>",
            "waba_info": {
              "waba_id": "<CUSTOMER_WABA_ID>",
              "owner_business_id": "<CUSTOMER_BUSINESS_PORTFOLIO_ID>"
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

#### Example

```
{
  "entry": [
    {
      "id": "35602282435505",
      "time": 1731617831,
      "changes": [
        {
          "value": {
            "event": "PARTNER_ADDED",
            "waba_info": {
              "waba_id": "495709166956424",
              "owner_business_id": "942647313864044"
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

### Phone Number Updates

#### Name Update Received

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "495709166956424",
      "time": 1731617831,
      "changes": [
        {
          "field": "phone_number_name_update",
          "value": {
            "display_phone_number": "124545784358810",
            "decision": "APPROVED",
            "requested_verified_name": "WhatsApp",
            "rejection_reason": null
          }
        }
      ]
    }
  ]
}
```

#### Quality Update Received

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "495709166956424",
      "time": 1731617831,
      "changes": [
        {
          "field": "phone_number_quality_update",
          "value": {
            "display_phone_number": "124545784358810",
            "event": "FLAGGED",
            "current_limit": "TIER_10K"
          }
        }
      ]
    }
  ]
}
```

### WABA Updates

#### Sandbox number upgraded to Verified Account

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "495709166956424",
      "time": 1731617831,
      "changes": [
        {
          "field": "account_update",
          "value": {
            "phone_number": "124545784358810",
            "event": "VERIFIED_ACCOUNT"
          }
        }
      ]
    }
  ]
}
```

#### WhatsApp Business Account Banned

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "495709166956424",
      "time": 1731617831,
      "changes": [
        {
          "field": "account_update",
          "value": {
            "event": "DISABLED_UPDATE"
            "ban_info": {
              "waba_ban_state": ["SCHEDULE_FOR_DISABLE", "DISABLE", "REINSTATE"],
              "waba_ban_date": "DATE"
            }
          }
        }
      ]
    }
  ]
}
```

#### WhatsApp Business Account Review Completed

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "495709166956424",
      "time": 1731617831,
      "changes": [
        {
          "field": "account_review_update",
          "value": {
            "decision": "APPROVED"
          }
        }
      ]
    }
  ]
}
```

### Message template updates

#### Approved

```
{
  "entry": [
    {
      "id": "495709166956424",
      "time": 1731617831,
      "changes": [
        {
          "value": {
            "event": "APPROVED",
            "message_template_id": 64244916695,
            "message_template_name": "Summer 20 Template",
            "message_template_language": "en_US",
            "reason": "NONE"
          },
          "field": "message_template_status_update"
        }
      ]
    }
  ],
  "object": "whatsapp_business_account"
}
```

### Partner client certification needed

An **account\_update** webhook with `event` set to `PARTNER_CLIENT_CERTIFICATION_NEEDED` is triggered when a business customer completes Embedded Signup that has been customized to [make the website field optional](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/website-optional).

```
{
  "entry": [
    {
      "id": "102289599326934",
      "time": 1731617831,
      "changes": [
        {
          "value": {
            "event": "PARTNER_CLIENT_CERTIFICATION_NEEDED",
            "partner_client_certification_needed_info": {
              "client_business_id": "942647313864044"
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

Did you find this page helpful?