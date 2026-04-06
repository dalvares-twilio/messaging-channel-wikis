---
title: "Managing WhatsApp Business Accounts"
source: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/manage-accounts"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
WhatsApp Business Platform

This document describes common endpoints used to manage business customer WhatsApp Business Accounts.

After a business finishes the embedded signup flow, you can get the shared WABA ID using the returned `accessToken` with the [Debug Token](https://developers.facebook.com/docs/graph-api/reference/debug_token) endpoint. Include your [System User access token](https://developers.facebook.com/docs/marketing-api/system-users/install-apps-and-generate-tokens#generate-token) in a request header prepended with `Authorization: Bearer` for this API call.

### Request Syntax

```
GET https://graph.facebook.com/<API_VERSION>/debug_token
  ?input_token=<TOKEN_RETURNED_FROM_SIGNUP_FLOW>
```

### Sample Request

```
curl \
'https://graph.facebook.com/v25.0/debug_token?input_token=EAAFl...' \
-H 'Authorization: Bearer EAAJi...'
```

### Sample Response

```
{
  "data" : {
    "app_id" : "670843887433847",
    "application" : "JaspersMarket",
    "data_access_expires_at" : 1672092840,
    "expires_at" : 1665090000,
    "granular_scopes" : [
      {
        "scope" : "whatsapp_business_management",
        "target_ids" : [
          "102289599326934", // ID of newest WABA to grant app whatsapp_business_management
          "101569239400667"
        ]
      },
      {
        "scope" : "whatsapp_business_messaging",
        "target_ids" : [
          "102289599326934",
          "101569239400667"
        ]
      }
    ],
    "is_valid" : true,
    "scopes" : [
       "whatsapp_business_management",
       "whatsapp_business_messaging",
       "public_profile"
    ],
    "type" : "USER",
    "user_id" : "10222270944537964"
  }
}
```

Each object in the `granular_scopes` array identifies the IDs of every WABA that has granted your app a given permission (`scope`). IDs for the most recently onboarded WABAs appear first, so capture the first ID in the `target_ids` array for the `whatsapp_business_management` scope.

The `client_whatsapp_business_accounts` endpoint retrieves a list of all the WABAS assigned to/shared with your Business Manager account once the embedded signup flow is completed.

You can use this endpoint periodically to track the WABAs shared with you. This way you can see the difference and find the ones that were shared with you recently, as a fallback to the [Debug-Token endpoint](https://developers.facebook.com/docs/graph-api/reference/debug_token) approach described in the [WhatsApp Business Account Management guide](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/manage-accounts#shared-whatsapp-business-account-ids).

A list of the WABA fields that can be requested from this endpoint can be found in the [WhatsApp Business Account reference](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api#fields).

### Request Syntax

```
GET https://graph.facebook.com/<API_VERSION>/<BUSINESS_MANAGER_ACCOUNT_ID>/client_whatsapp_business_accounts
```

### Sample Request

```
curl \
'https://graph.facebook.com/v25.0/805021500648488/client_whatsapp_business_accounts/' \
-H 'Authorization: Bearer EAAJi...'
```

### Sample Response

```
{
  "data": [
    {
      "id": 1906385232743451,
      "name": "My WhatsApp Business Account",
      "currency": "USD",
      "timezone_id": "1",
      "message_template_namespace": "abcdefghijk_12lmnop"
    },
    {
      "id": 1972385232742141,
      "name": "My Regional Account",
      "currency": "INR",
      "timezone_id": "5",
      "message_template_namespace": "12abcdefghijk_34lmnop"
    }
  ],
  "paging": {
    "cursors": {
      "before": "abcdefghij",
      "after": "klmnopqr"
    }
  }
}
```

### Permissions

A Solution Partner has the following permissions in a shared WABA:

- Add phone numbers
- Create templates
- Send messages to customers
- Assign users to the account
- Access metrics
- View payment information

| Category | What can businesses see? |
| --- | --- |
| Insights | Messaging, cost, and quality state changes. |
| Quality | Quality statuses and ratings. |

| Category | What can businesses do? |
| --- | --- |
| Assets | Add and manage phone numbers and templates. |
| WABA management | Unshare WABA with a Solution Partner, delete WABA, and change settings. |
| Integration with other Meta products | Integrate with Ads that Click to WhatsApp. |

Solution Partners cannot disable what businesses are able to see or do or customize their views.

### Notifications

Solution Partners receive relevant notifications via webhooks and through Business Manager. Notifications are sent when:

- A business shares a WABA.
- Messaging limits or quality rating changes for a client’s WABA.
- When a phone number display name or a template is approved.

If the business leaves the Embedded Signup flow before they have successfully completed it, they may have shared the WABA but the phone number’s certificate may not ready, which means the number cannot be registered for API use. If this happens, please reach out to the business to help them complete the embedded signup flow.

## Get List of Owned WhatsApp Business Accounts

Use the `owned_whatsapp_business_accounts` endpoint to get a list of the WABAs that your business owns. For the request, use your system user’s access token.

### Request Syntax

```
GET https://graph.facebook.com/<API_VERSION>/<BUSINESS_MANAGER_ACCOUNT_ID>/owned_whatsapp_business_accounts
```

### Sample Request

```
curl \
'https://graph.facebook.com/v25.0/805021500648488/owned_whatsapp_business_accounts/' \
-H 'Authorization: Bearer EAAJi...'
```

### Sample Response

```
{
  "data": [
    {
      "id": 1906385232743451,
      "name": "My WhatsApp Business Account",
      "currency": "USD",
      "timezone_id": "1",
      "message_template_namespace": "abcdefghijk_12lmnop"
    },
    {
      "id": 1972385232742141,
      "name": "My Regional Account",
      "currency": "INR",
      "timezone_id": "5",
      "message_template_namespace": "12abcdefghijk_34lmnop"
    }
  ],
  "paging": {
    "cursors": {
      "before": "abcdefghij",
      "after": "klmnopqr"
    }
  }
}
```

## Filter WABAs by Creation Time

You can filter client and owned WhatsApp business accounts based on their creation time. For the request, you can use the parameters listed below.

### Request Syntax

```
GET https://graph.facebook.com/<API_VERSION>/<BUSINESS_MANAGER_ACCOUNT_ID>/owned_whatsapp_business_accounts
  ?filtering=<FILTERING>
```

The `filtering` value can be an array containing a single object comprised of the following properties:

### Filtering Object Properties

| Name | Description |
| --- | --- |
| `field` | Contains the field being used for filtering. Set to `creation_time`. |
| `operator` | Contains how you want to filter the accounts. Supported values:    - `LESS_THAN` - `GREATER_THAN` |
| `value` | A UNIX timestamp to be used in the filtering. |

### Sample Object

```
[
  {
    "field" : "creation_time",
    "operator" : "GREATER_THAN",
    "value" : "1604962813"
  }
]
```

### Sample Request

```
curl \
'https://graph.facebook.com/v25.0/805021500648488/owned_whatsapp_business_accounts' \
-H 'Authorization: Bearer EAAJi...' \
-H 'Content-Type: application/json' \
-d '[{"field":"creation_time","operator":"GREATER_THAN","value":"1604962813"}]'
```

### Sample Response

```
{
  "data": [
    {
      "id": "12312321312",
      "name": "test",
      "currency": "USD",
      "timezone_id": "1",
      "message_template_namespace": "46fe_814"
    }
  ],
  "paging": {
    "cursors": {
      "before": "QVFIUm9",
      "after": "QVFIUklX"
    },
    "next": "https://graph.facebook.com/v25.0/"
  }
}
```

## Sort WABAs by Creation Time

You can sort shared and owned WhatsApp Business Accounts based on their creation time.

### Request Syntax

```
GET https://graph.facebook.com/<API_VERSION>/<BUSINESS_MANAGER_ACCOUNT_ID>/owned_whatsapp_business_accounts
  ?sort=<SORT>
```

The `sort` value can be `creation_time_ascending` or `creation_time_descending`.

### Sample Request

```
curl \
'https://graph.facebook.com/v25.0/805021500648488/owned_whatsapp_business_accounts?sort=creation_time_ascending' \
-H 'Authorization: Bearer EAAJi...'
```

### Sample Response

```
{
  "data": [
    {
      "id": 1906385232743451,
      "name": "My WhatsApp Business Account",
      "currency": "USD",
      "timezone_id": "1",
      "message_template_namespace": "abcdefghijk_12lmnop"
    },
    {
      "id": 1972385232742141,
      "name": "My Regional Account",
      "currency": "INR",
      "timezone_id": "5",
      "message_template_namespace": "12abcdefghijk_34lmnop"
    }
  ],
  "paging": {
    "cursors": {
      "before": "abcdefghij",
      "after": "klmnopqr"
    }
  }
}
```

## Retrieve WABA Review Status

You can get a WhatsApp Business Account’s review status by requesting the `account_review_status` field.

### Request Syntax

```
GET https://graph.facebook.com/<API_VERSION>/<WABA_ID>
  ?fields=account_review_status
```

### Sample Request

```
curl \
'https://graph.facebook.com/v25.0/106526625562206?fields=account_review_status' \
-H 'Authorization: Bearer EAAJi...' \
```

### Sample Response

```
{
  "account_review_status": "APPROVED",
  "id": "1111111111111"
}
```

The `account_review_status` property can have one of the following values: `PENDING`, `APPROVED`, and `REJECTED`.

Did you find this page helpful?