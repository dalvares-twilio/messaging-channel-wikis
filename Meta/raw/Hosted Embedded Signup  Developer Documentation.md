---
title: "Hosted Embedded Signup | Developer Documentation"
source: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/hosted-es"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
WhatsApp Business Platform

## Hosted Embedded Signup

![[557247008_1487309905743315_2332288243528054136_n.png]]

## Limitations

Hosted Embedded Signup (“Hosted ES”) can only be used to onboard business customers to Cloud API, and the flow cannot be customized.

## Requirements

- You must have completed the steps to become a Solution Partner or Tech Provider.
- If your app is for messaging, it must be able to send messages, manage templates, and have a properly configured production webhook endpoint.
- Your app must be subscribed to the [account\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_update) webhook.
- Solution Partners must have a line of credit.
- Your [system token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens).
- Your app secret.

If you don’t already have a Facebook Login for Business configuration, you must create one. A Facebook Login for Business configuration defines which permissions to request, and what additional information to collect, from business customers who access Embedded Signup.

Navigate to **Facebook Login for Business** > **Configurations** and click the **\+ Create configuration** button to access the configuration flow.

Use a name that will help you differentiate this configuration from any others you may create in the future. When completing the flow, be sure to select the WhatsApp Embedded Signup login variation:

![[556678416_1155934729723662_8909215200649973782_n.png]]

When choosing assets and permissions, select only those assets and permissions that you will actually need from your business customers.

![[556838067_777912301525569_1334774809437446260_n.png]]

For example, if you select the **Catalogs** asset but don’t actually need access to customer catalogs, your customers will likely abandon the flow at the catalog selection screen and ask you for clarification.

## Step 2: Get the Hosted ES URL

Navigate to the **WhatsApp** > **Quickstart** panel and click the **View onboarding** button.

![[556820792_1873904266492750_8998264804748617024_n.png]]

Locate the **Zero integration onboarding** card. The URL displayed in the card is the onboarding page URL:

![[556828984_1430417581383742_4223219994357738350_n.png]]

Click the **Copy button** to copy the URL to your clipboard. Map this URL to a button on your website or customer portal that, when clicked, opens the URL in a new browser window.

To see what this looks like, you can load the URL in a new browser window or tab, or click the blue “new window” icon, which does the same thing.

This onboarding page looks like this:

![[557247008_1487309905743315_2332288243528054136_n.png]]

Click the **Get started** button. This is the flow that business customers who click the button on your website or customer portal will see. Complete the flow if you wish.

## Step 3: Capture customer asset IDs

When a business customer completes the flow, an [account\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_update) webhook is triggered with `event` set to `PARTNER_ADDED`. Capture the customer’s WhatsApp Business Account ID and business portfolio ID from the webhook payload.

## Step 4: Generate an HMAC-SHA256 hash

Generate an HMAC-SHA256 hash of your app secret and system token.

### Bash example for Linux and macOS

```
echo -n "<SYSTEM_TOKEN>" | openssl dgst -sha256 -hmac "<APP_SECRET>"
```

- `<SYSTEM_TOKEN>` — Your system token.
- `<APP_SECRET>` — Your app secret ([**App Dashboard**](https://developers.facebook.com/apps) > **App settings** > **Basic**)

## Step 5: Get a business token

Use the [POST /<BUSINESS\_PORTFOLIO\_ID>/system\_user\_access\_tokens](https://developers.facebook.com/docs/marketing-api/reference/business/system_user_access_tokens#Creating) endpoint to get and capture the customer’s [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). (Target the customer’s business portfolio ID, not yours).

### Request syntax

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PORTFOLIO_ID>/system_user_access_tokens' \
-H 'Content-Type: application/x-www-form-urlencoded' \
-H 'Authorization: Bearer <SYSTEM_TOKEN>' \
-d 'appsecret_proof=<APPSECRET_PROOF>' \
-d 'fetch_only=true'
```

- `<API_VERSION>` — API version.
- `<APPSECRET_PROOF>` — HMAC-SHA256 hash of your app secret and system token.
- `<BUSINESS_PORTFOLIO_ID>` — Business customer’s business portfolio ID.
- `<SYSTEM_TOKEN>` — Your system token.

### Response syntax

```
{
  "access_token": "<BUSINESS_TOKEN>"
}
```

- `<BUSINESS_TOKEN>` — The business customer’s business token.

## Step 6: Get the customer’s business phone number ID

Use the [GET /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>/phone\_numbers](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api#Reading) endpoint to get and capture the business customer’s business phone number ID.

### Request syntax

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>/phone_numbers' \
-H 'Authorization: Bearer <BUSINESS_TOKEN>'
```

- `<API_VERSION>` — API version.
- `<BUSINESS_TOKEN>` — Business customer’s business token.
- `<WABA_ID>` — Business customer’s WhatsApp Business Account ID.

### Response syntax

```
{
  "data": [
    {
      "verified_name": "<VERIFIED_NAME>",
      "code_verification_status": "<CODE_VERIFICATION_STATUS>",
      "display_phone_number": "<DISPLAY_PHONE_NUMBER>",
      "quality_rating": "<QUALITY_RATING>",
      "platform_type": "<PLATFORM_TYPE>",
      "throughput": {
        "level": "<THROUGHPUT_LEVEL>"
      },
      "last_onboarded_time": "<LAST_ONBOARDED_TIME>",
      "webhook_configuration": {
        "application": "<WEBHOOK_CALLBACK_URL>"
      },
      "id": "<BUSINESS_PHONE_NUMBER_ID>"
    }
  ]
}
```

- `<BUSINESS_PHONE_NUMBER_ID>` — Business phone number ID.
- `<CODE_VERIFICATION_STATUS>` — Business phone number verification status.
- `<DISPLAY_PHONE_NUMBER>` — Business display phone number.
- `<LAST_ONBOARDED_TIME>` — Unix timestamp indicating when the number was added the business customer’s WhatsApp Business Account (essentially, when the customer successfully completed the flow.)
- `<PLATFORM_TYPE>` — Platform.
- `<QUALITY_RATING>` — Business phone number quality rating.
- `<THROUGHPUT_LEVEL>` — Throughput level.
- `<VERIFIED_NAME>` — Business phone number verified name.
- `<WEBHOOK_CALLBACK_URL>` — Webhook callback URL associated with the number.

## Step 7: Onboard the customer

Onboard the business customer by completing the steps in the appropriate onboarding guide below:

- [Onboarding business customers as a Tech Provider or Tech Partner](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-customers-as-a-tech-provider) (skip step 1)
- [Onboarding business customers as a Solution Partner](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-customers-as-a-solution-partner) (skip step 1)

Did you find this page helpful?