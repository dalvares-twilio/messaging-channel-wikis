---
title: "Adding a WABA to a Multi-Partner Solution"
source: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/adding-waba-to-mps"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
WhatsApp Business Platform

If you are a Solution Partner and are part of an active [multi-partner solution](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions), you can designate a WABA as *eligible* for the solution (the “destination solution”). This sends a Business Manager request to the business customer who owns the WABA. The customer can then use the Business Manager to accept and confirm the request.

Confirmation associates the WABA with the destination solution, thereby granting permissions (already defined on the destination solution) to any Tech Providers who are part of it.

If you’re unsure of the WABA’s ownership model, request the `ownership_type` field on the WABA ID. A value of `ON_BEHALF_OF` indicates you own the WABA, while `CLIENT_OWNED` indicates that your business customer owns the WABA.

## Requirements

- The WABA must have been onboarded by you.
- The WABA cannot already be part of an existing active solution.
- The destination solution must be in an active state.

## Step 1: Designate the WABA as solution eligible

Use the [POST /<WHATSAPP\_BUSINESS\_ACCOUNT>/set\_solution\_migration\_intent](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/set-solution-migration-intent-api#Creating) endpoint to tag the business customer’s WABA for migration. This generates a [migration intent](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/migration-intent-api), which indicates your intent to migrate the WABA.

### Request

```
curl 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/set_solution_migration_intent' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <BUSINESS_TOKEN>' \
-d '
{
  "solution_id": "<DESTINATION_MULTI-PARTNER_SOLUTION_ID>"
}'
```

### Response

```
{
  "id": "<MIGRATION_INTENT_ID>"
}
```

In addition, a confirmation request will be sent to the business customer who owns the WABA.

## Step 2: Instruct the customer to confirm

Instruct your business customer to use the Meta Business Suite to accept and confirm the solution partner access request.

You can send the customer the following instructions:

1. *Go to [https://business.facebook.com/settings/requests/⁠](https://business.facebook.com/settings/requests/) and log into your account.*
2. *If you have multiple business portfolios, you will be presented with all of them. Click the portfolio that contains your WABA.*
3. *In the Received tab, locate the request and complete the flow.*
![[462915752_507468075535116_983106198479012193_n.png]]

Note that if your customer does not complete this step within 90 days, acceptance and confirmation will happen automatically.

Did you find this page helpful?