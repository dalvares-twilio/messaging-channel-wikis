---
title: "Migrating customers off of a Multi-Partner Solution using Embedded Signup"
source: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/migrating-customers-off-solutions-via-embedded-signup"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
WhatsApp Business Platform

If you are a Tech Provider, you can migrate a business customer off of a [Multi-Partner Solution](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions) by tagging their WhatsApp Business Account (“WABA”) for migration and instructing them to use [your implementation of Embedded Signup](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation) to review and accept the request. Once migrated, you can provide messaging services to the customer independently.

Migrating a customer off of a solution via Embedded Signup does not require business phone number reverification, so any downtime due to reverification is eliminated.

Note that as part of the process, your business customer may choose to create a new WABA. If they do, templates from their old (“source”) WABA will be duplicated in their new destination WABA. See [Templates](#templates) below for an explanation of template duplication behavior.

## Requirements

Your app must already be approved for advanced access for the **whatsapp\_business\_management** permission

## Templates

Templates are automatically duplicated in the destination WABA and initially granted the same status as their source counterparts.

After duplication however, templates are re-checked to ensure they are correctly categorized according to our [guidelines](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing). This may result in some duplicated templates having their `status` set to `REJECTED`.

Only templates with both a `status` of `APPROVED` and `quality_score` of `GREEN` are eligible for duplication. If the destination WABA cannot accommodate all of the new templates, we will duplicate as many as we can until the destination WABA’s template limit has been reached. Unduplicated templates must be re-created and submitted for approval if they are to be used by the destination WABA.

Note that **template quality ratings are not duplicated**. All duplicated templates will start with an `UNKNOWN` rating. This rating will remain for the first 24 hours, after which a new rating will be generated if sufficient data is available.

## Billing

Messages delivered before migration is complete are charged to the old Solution Partner. Undelivered messages sent before migration is complete will be charged to the old Solution Partner if they are delivered after migration is complete.

Messages delivered after migration is complete are charged to the business customer.

## Step 1: Disable two-step verification on the business phone number

If you have access to the business customer’s WABA in WhatsApp Manager, disable two-step verification on the business phone number associated with their WABA.

Alternatively, you can instruct the business customer to do this on their own. You can provide them with these instructions:

1. *Access WhatsApp Manager at [https://business.facebook.com/latest/whatsapp\_manager/⁠](https://business.facebook.com/latest/whatsapp_manager/).*
2. *Navigate to **Account tools** > **Phone numbers**, and click the phone number’s settings (gear) icon. If you don’t see your business phone number, click **Overview** in the menu on the left, then locate the number and click it.*
3. *Click the **Two-step verification** tab.*
4. *Click the **Turn off two-step verification** button and complete the flow.*

## Step 2: Tag the customer’s WABA for migration

Use the [POST /<WHATSAPP\_BUSINESS\_ACCOUNT>/set\_solution\_migration\_intent](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/set-solution-migration-intent-api#Creating) endpoint to tag the business customer’s WABA for migration. This generates a [migration intent](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/migration-intent-api), which indicates your intent to migrate the WABA.

#### Request

```
curl 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/set_solution_migration_intent' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <BUSINESS_TOKEN>' \
-d '
{
  "app_id": "<YOUR_APP_ID>"
}'
```

#### Response

```
{
  "id": "<MIGRATION_INTENT_ID>"
}
```

Send the business customer a link to your implementation of Embedded Signup and to instruct them to complete the flow in order to accept the request and add a payment method.

You can provide the business customer with these instructions:

1. *In the [business portfolio screen](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow#business-portfolio-screen), enter your existing business portfolio name.*
2. *In the [WABA selection screen](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow#business-asset-selection-screen), use the **Choose a WhatsApp Business Account** dropdown menu to create a new WhatsApp Business Account (WABA), or choose an existing one.*
3. *In the same screen, use the **Create or Select a WhatsApp Business Profile** dropdown menu to enter or select your existing business phone number’s display name.*
4. *In the [phone number addition](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow#phone-number-addition-screen) screen, enter your existing business phone number. This should trigger a warning that the number is going to be shared with your Tech Provider.*

Until the business customer adds a payment method, they will be unable to use your app to send template messages to their own customers, so instruct the business customer to add a payment method after completing the flow.

## Step 4: Exchange the token code for a business token

Use the **GET /oauth/access\_token** endpoint to exchange the token code [returned](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener) by Embedded Signup for a business integration system user access token (“business token”).

### Request

```
curl --get 'https://graph.facebook.com/v21.0/oauth/access_token' \
-d 'client_id=<APP_ID>' \
-d 'client_secret=<APP_SECRET>' \
-d 'code=<CODE>'
```

### Response

```
<BUSINESS_TOKEN>
```

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

Use the [POST /<BUSINESS\_PHONE\_NUMBER\_ID>/register](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/registration#register) endpoint to register the customer’s business phone number for use with Cloud API.

#### Request

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/register' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <BUSINESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "pin": "<DESIRED_PIN>"
}'
```

#### Response

```
{
  "success": true
}
```

Did you find this page helpful?