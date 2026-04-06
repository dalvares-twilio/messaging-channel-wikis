---
title: "Migrating a WABA from one Multi-Partner Solution to another via Meta Business Suite"
source: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/migrating-wabas-among-solutions-via-meta-business-suite"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
WhatsApp Business Platform

You can use the API and the Meta Business Suite’s **Business settings** panel to migrate a business customer’s WhatsApp Business Account (WABA) from one [Multi-Partner Solution](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions) (the “source solution”) to another (the “destination solution”).

As part of this process, a new WhatsApp Business Account (WABA) will be created for the business customer, templates within the source WABA will be duplicated in the destination WABA, and access to the WABA and its assets will be granted to the destination solution’s Solution Partner.

Note that both you and the destination solution’s Solution Partner must perform one or more API requests to complete the process.

## Requirements

Your app (or apps, if you are using separate apps) used to create or accept each solution must be associated with the same business portfolio, and the destination solution must be in an active state.

## Templates

Templates are automatically duplicated in the destination WABA and initially granted the same status as their source counterparts.

After duplication however, templates are re-checked to ensure they are correctly categorized according to our [guidelines](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing). This may result in some duplicated templates having their `status` set to `REJECTED`.

Only templates with both a `status` of `APPROVED` and `quality_score` of `GREEN` are eligible for duplication. If the destination WABA cannot accommodate all of the new templates, we will duplicate as many as we can until the destination WABA’s template limit has been reached. Unduplicated templates must be re-created and submitted for approval if they are to be used by the destination WABA.

Note that **template quality ratings are not duplicated**. All duplicated templates will start with an `UNKNOWN` rating. This rating will remain for the first 24 hours, after which a new rating will be generated if sufficient data is available.

## Billing

Messages delivered before migration is complete are charged to the old Solution Partner. Undelivered messages sent before migration is complete will be charged to the old Solution Partner if they are delivered after migration is complete.

Messages delivered after migration is complete are charged to the business customer.

## Tech Provider steps

### Step 1: Tag the customer’s WABA for migration

Use the [POST /<WHATSAPP\_BUSINESS\_ACCOUNT>/set\_solution\_migration\_intent](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/set-solution-migration-intent-api#Creating) endpoint to tag the business customer’s WABA for migration. This generates a [migration intent](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/migration-intent-api), which indicates your intent to migrate the WABA.

#### Request

```
curl 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/set_solution_migration_intent' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <BUSINESS_TOKEN>' \
-d '
{
  "solution_id": "<DESTINATION_MULTI-PARTNER_SOLUTION_ID>"
}'
```

#### Response

```
{
  "id": "<MIGRATION_INTENT_ID>"
}
```

### Step 2: Send the migration intent ID and phone number to be migrated to your Solution Partner

Send the migration intent ID you just captured to the Solution Partner of your destination solution. They will need this ID to determine if the customer has accepted the migration request.

In addition to this, share the phone number on the old WABA that you want migrated to the new WABA. This will be used in step 5 of the solution partner steps below.

### Step 3: Disable two-step verification on the business phone number

If you have access to the business customer’s WABA in WhatsApp Manager, disable two-step verification on the business phone number associated with their WABA.

Alternatively, instruct the business customer to do this on their own. You can provide them with these instructions:

1. *Access WhatsApp Manager at [https://business.facebook.com/latest/whatsapp\_manager/⁠](https://business.facebook.com/latest/whatsapp_manager/).*
2. *Navigate to **Account tools** > **Phone numbers**, and click the phone number’s settings (gear) icon. If you don’t see your business phone number, click **Overview** in the menu on the left, then locate the number and click it.*
3. *Click the **Two-step verification** tab.*
4. *Click the **Turn off two-step verification** button and complete the flow.*

### Step 4: Instruct the customer to accept the request

Instruct the customer to use the Meta Business Suite to review and accept the request. You can provide them with these instructions:

1. *Access Meta Business Suite’s **Business settings** panel at [https://business.facebook.com/settings/⁠](https://business.facebook.com/settings/).*
2. *Navigate to **Requests** > **Received**.*
3. *Locate the request and click the **Review** button.*
4. *Complete the flow.*
![[468478543_895393666016721_7634462766366671655_n.png]]

When the customer completes this step, an [account\_update webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/manage-webhooks#onboarded-business-customer) indicating that a customer has been onboarded will be triggered and sent to both you and the destination solution’s Solution Partner.

Note that an email from **WhatsApp for Business** (notification@facebookmail.com) will also be sent to anyone who has admin access on the WABA, requesting review and acceptance of the request. The button in the email just loads the Business settings panel in a new window, so any WABA admin can review and accept the request.

## Solution Partner steps

### Step 1: Get the customer’s business token

Use the [GET /<SOLUTION\_ID>/access\_token](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/access-token-api#Reading) endpoint and request the `business_id` parameter to get an onboarded business customer’s [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens).

#### Request

```
curl 'https://graph.facebook.com/<API_VERSION>/<SOLUTION_ID>/access_token?business_id=<CUSTOMER_BUSINESS_PORTFOLIO_ID>' \
-H 'Authorization: Bearer <SYSTEM_TOKEN>'
```

The customer’s business portfolio ID is included in the [account\_update webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/manage-webhooks#onboarded-business-customer) triggered when the customer accepts the migration intent.

#### Response

```
{
  "data": [
    {
      "access_token": "<CUSTOMER_BUSINESS_TOKEN>"
    }
  ]
}
```

### Step 2: Get the status of the migration intent

Use the [GET /<SOLUTION\_MIGRATION\_INTENT\_ID>](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/migration-intent-api#Reading) endpoint to get the status of the migration intent that the Tech Provider created. Your Tech Provider should provide you with this ID.

#### Request

```
curl 'https://graph.facebook.com/<API_VERSION>/<MIGRATION_INTENT_ID>' \
-H 'Authorization: Bearer <BUSINESS_TOKEN>'
```

#### Response

```
{
  "solution": {
    "name": "<DESTINATION_SOLUTION_NAME>",
    "status": "<DESTINATION_SOLUTION_STATUS>",
    "status_for_pending_request": "<DESTINATION_SOLUTION_PENDING_REQUEST_STATUS>",
    "id": "<DESTINATION_SOLUTION_ID>"
  },
  "status": "<MIGRATION_INTENT_STATUS>",
  "destination_waba": {
    "id": "<BUSINESS_CUSTOMER_WABA_ID>",
    "name": "<BUSINESS_CUSTOMER_WABA_NAME>",
    "currency": "<BUSINESS_CUSTOMER_WABA_CURRENCY>",
    "timezone_id": "<BUSINESS_CUSTOMER_WABA_TIMEZONE>",
    "business_type": "ent",
    "message_template_namespace": "<BUSINESS_CUSTOMER_WABA_TEMPLATE_NAMESPACE>"
  },
  "id": "<MIGRATION_INTENT_ID>"
}
```

If `<MIGRATION_INTENT_STATUS>` is `ACCEPTED`, it means the customer has reviewed and accepted the migration intent and you can proceed to the next step. **If it’s any other value, do not proceed.**

Note that when a customer accepts the migration intent in the Meta Business Suite, an [account\_update webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/manage-webhooks#onboarded-business-customer) is triggered with `status` set to `PARTNER_ADDED`. Although the webhook won’t tell if the customer onboarded via the Meta Business Suite, you may wish to perform this query when you get one of these webhooks.

Use the [POST /<WABA\_ID>/subscribed\_apps](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/subscribed-apps-api#post-version-waba-id-subscribed-apps) endpoint to subscribe your app to webhooks on the business customer’s WABA. If you want the customer’s webhooks to be sent to a different callback URL than the one set on your app, you have multiple [webhook override](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/override) options.

Note that `<WABA_ID>` should be the customer’s **destination** WABA ID.

#### Request

```
curl -X POST 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/subscribed_apps' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

#### Response

```
{
  "success": true
}
```

We are currently testing new steps for sharing your credit line with onboarded business customers. These steps will eventually replace this step, so if you wish to implement these steps now, see [Alternate method for sharing your credit line](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/share-and-revoke-credit-lines#alternate-method-for-sharing-your-credit-line).

Use the [POST /<EXTENDED\_CREDIT\_LINE\_ID>/whatsapp\_credit\_sharing\_and\_attach](https://developers.facebook.com/docs/marketing-api/reference/extended-credit/whatsapp_credit_sharing_and_attach#Creating) endpoint to share your credit line with an onboarded business customer.

#### Request

```
curl -X POST 'https://graph.facebook.com/<API_VERSION>/<EXTENDED_CREDIT_LINE_ID>/whatsapp_credit_sharing_and_attach?waba_currency=<CUSTOMER_BUSINESS_CURRENCY>&waba_id=<CUSTOMER_WABA_ID>' \
-H 'Authorization: Bearer <SYSTEM_TOKEN>'
```

Note that `<CUSTOMER_WABA_ID>` should be the customer’s **destination** WABA ID.

#### Response

```
{
  "allocation_config_id": "<ALLOCATION_CONFIGURATION_ID>",
  "waba_id": "<CUSTOMER_WABA_ID>"
}
```

### Step 5: Migrate the customer’s phone number to their new WABA

Use the [POST /<WABA\_ID>/phone\_numbers](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api#Creating) endpoint to migrate the customer’s business phone number to the destination WABA. You should have received this from the Tech Provider in Step 2 of the Tech Provider steps.

Note that `<WABA_ID>` should be the customer’s **destination** WABA ID.

#### Request

```
curl 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/phone_numbers' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <BUSINESS_TOKEN>' \
-d '
{
  "migrate_phone_number": true,
  "cc": "<BUSINESS_PHONE_NUMBER_COUNTRY_CALLING_CODE>",
  "phone_number": "<BUSINESS_PHONE_NUMBER_WITHOUT_COUNTRY_CODE>"
}'
```

#### Response

```
{
  "id": "<BUSINESS_PHONE_NUMBER_ID>"
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