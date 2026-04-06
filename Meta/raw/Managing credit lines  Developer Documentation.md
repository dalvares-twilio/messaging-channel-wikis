---
title: "Managing credit lines | Developer Documentation"
source: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/share-and-revoke-credit-lines"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
WhatsApp Business Platform

## Managing credit lines

This document describes how Solution Partners can share and revoke lines of credit with onboarded business customers.

**Billing Liability Disclosure**

Business customers that you onboard through Embedded Signup must be granted access to your line of credit with Meta to pay for WhatsApp Business Platform access. This means that businesses pay you, and you receive an aggregated invoice to pay Meta.

You are the “Bill To Party” for all businesses sharing your credit line. You are liable for and will pay Meta for all WhatsApp Business Platform spend made by these businesses.

## Authentication and authorization

Nearly all credit line related endpoints require your system user access token. In addition, the system user who the token represents must have granted your app the **business\_management** permission, and must have been granted an **Admin** or **Financial Editor** role on your business portfolio.

## Get your credit line ID

Nearly all API calls related to credit lines require your credit line ID. Use the [GET /<BUSINESS\_ID>/extendedcredits](https://developers.facebook.com/docs/marketing-api/reference/business/extendedcredits#Reading) endpoint to get your business portfolio’s credit line ID.

### Request syntax

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_ID>/extendedcredits' \
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

### Request example

```
curl 'https://graph.facebook.com/v24.0/102289599326934/extendedcredits' \
-H 'Authorization: Bearer EAAJi...'
```

### Response

Upon success, the API will return the business portfolio’s extended credit line ID (“credit line ID”).

```
{
  "data": [
    {
      "id": "1972385232742146"
    }
  ]
}
```

## Sharing your credit line

We are currently testing new steps for sharing your credit line with onboarded business customers. These steps will eventually replace this step, so if you wish to implement these steps now, refer to the [Alternate method for sharing your credit line](#alternate-method-for-sharing-your-credit-line) below.

Use the [POST /<EXTENDED\_CREDIT\_LINE\_ID>/whatsapp\_credit\_sharing\_and\_attach](https://developers.facebook.com/docs/marketing-api/reference/extended-credit/whatsapp_credit_sharing_and_attach#Creating) endpoint to share your credit line with an onboarded business customer.

### Request syntax

```
curl -X POST 'https://graph.facebook.com/<API_VERSION>/<EXTENDED_CREDIT_LINE_ID>/whatsapp_credit_sharing_and_attach?waba_currency=<CUSTOMER_BUSINESS_CURRENCY>&waba_id=<CUSTOMER_WABA_ID>' \
-H 'Authorization: Bearer <SYSTEM_TOKEN>'
```

### Request parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<CUSTOMER_BUSINESS_CURRENCY>` | **Required.**  The business’s currency, as a three-letter currency code. Support values are:  - `AUD` - `EUR` - `GBP` - `IDR` - `INR` - `USD`  This currency is used for invoicing and corresponds to [pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing) rates. | `USD` |
| `<CUSTOMER_WABA_ID>` | **Required.**  The customer’s WABA ID. | `102290129340398` |
| `<EXTENDED_CREDIT_LINE_ID>` | **Required.**  Your extended credit line ID. | `1972385232742146` |
| `<SYSTEM_TOKEN>` | **Required.**  Your system token. | `EAAAN6tcBzAUBOZC82CW7iR2LiaZBwUHS4Y7FDtQxRUPy1PHZClDGZBZCgWdrTisgMjpFKiZAi1FBBQNO2IqZBAzdZAA16lmUs0XgRcCf6z1LLxQCgLXDEpg80d41UZBt1FKJZCqJFcTYXJvSMeHLvOdZwFyZBrV9ZPHZASSqxDZBUZASyFdzjiy2A1sippEsF4DVV5W2IlkOSr2LrMLuYoNMYBy8xQczzOKDOMccqHEZD` |

### Response

```
{
  "allocation_config_id": "58501441721238",
  "waba_id": "102290129340398"
}
```

### Response parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<ALLOCATION_CONFIGURATION_ID>` | The extended credit line’s allocation configuration ID.  Save this ID if you want to [verify](#verifying-shared-status) that your credit line has been shared with the customer. | `58501441721238` |
| `<CUSTOMER_WABA_ID>` | The customer’s WABA ID. | `102290129340398` |

## Alternate method for sharing your credit line

We are currently testing new steps for sharing your credit line with onboarded business customers. These steps are described below, and will eventually replace the [current method](#sharing-your-credit-line) for sharing your credit line with an onboarded customer.

### Step 1: Get your customer’s business portfolio ID

Use the [GET /<WABA\_ID>](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api#Reading) endpoint and request the `owner_business_info` field to get the business customer’s business portfolio ID.

#### Request syntax

```
curl --get 'https://graph.facebook.com/v21.0/<WABA_ID>?fields=owner_business_info' \
-H 'Authorization: Bearer <BUSINESS_TOKEN>'
```

#### Request parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<BUSINESS_TOKEN>` | **Required.**  The customer’s business token. | `EAAAN6tcBzAUBOwtDtTfmZCJ9n3FHpSDcDTH86ekf89XnnMZAtaitMUysPDE7LES3CXkA4MmbKCghdQeU1boHr0QZA05SShiILcoUy7ZAb2GE7hrUEpYHKLDuP2sYZCURkZCHGEvEGjScGLHzC4KDm8tq2slt4BsOQE1HHX8DzHahdT51MRDqBw0YaeZByrVFZkVAoVTxXUtuKgDDdrmJQXMnI4jqJYetsZCP1efj5ygGscZBm4OvvuCYB039ZAFlyNn` |
| `<WABA_ID>` | **Required.**  The customer’s WABA ID. | `102290129340398` |

#### Response syntax

```
{
  "owner_business_info": {
    "name": "<BUSINESS_PORTFOLIO_NAME>",
    "id": "<BUSINESS_PORTFOLIO_ID>"
  },
  "id": "<WABA_ID>"
}
```

#### Response parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<BUSINESS_PORTFOLIO_ID>` | The customer’s business portfolio ID. | `2729063490586005` |
| `<BUSINESS_PORTFOLIO_NAME>` | The customer’s business portfolio name. | `Wind & Wool` |
| `<WABA_ID>` | The customer’s WABA ID. | `102290129340398` |

Use the [POST /<EXTENDED\_CREDIT\_ID>/whatsapp\_credit\_sharing](https://developers.facebook.com/docs/marketing-api/reference/extended-credit/whatsapp_credit_sharing#Creating) endpoint and your **system token** to indicate your intent to share your credit line with the customer’s business portfolio.

#### Request syntax

```
curl -X POST 'https://graph.facebook.com/<API_VERSION>/<EXTENDED_CREDIT_LINE_ID>/whatsapp_credit_sharing?receiving_business_id=<BUSINESS_PORTFOLIO_ID>' \
-H 'Authorization: Bearer <SYSTEM_TOKEN>'
```

#### Request parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<EXTENDED_CREDIT_LINE_ID>` | **Required.**  Your extended credit line ID. | `5985499441566032` |
| `<BUSINESS_PORTFOLIO_ID>` | **Required.**  The customer’s business portfolio ID. | `2729063490586005` |
| `<SYSTEM_TOKEN>` | **Required.**  You system user access token. | `EAAAN6tcBzAUBOZC82CW7iR2LiaZBwUHS4Y7FDtQxRUPy1PHZClDGZBZCgWdrTisgMjpFKiZAi1FBBQNO2IqZBAzdZAA16lmUs0XgRcCf6z1LLxQCgLXDEpg80d41UZBt1FKJZCqJFcTYXJvSMeHLvOdZwFyZBrV9ZPHZASSqxDZBUZASyFdzjiy2A1sippEsF4DVV5W2IlkOSr2LrMLuYoNMYBy8xQczzOKDOMccqHEZD` |

#### Response example

```
"success": true,
  "allocation_config_id": "58501441721238"
}
```

#### Response parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<ALLOCATION_CONFIG_ID>` | The extended credit line’s allocation configuration ID. | `58501441721238` |

### Step 3: Attach your credit line to the customer’s WABA

Use the [POST /<EXTENDED\_CREDIT\_LINE\_ID>/whatsapp\_credit\_attach](https://developers.facebook.com/docs/marketing-api/reference/extended-credit/whatsapp_credit_attach) endpoint to attach your credit line to the customer’s WABA.

Note: Credit lines cannot be changed after being attached to a WABA. If the WABA needs a different credit line, a new WABA must be created and the new credit line can then be attached to it.

#### Request syntax

```
curl -X POST 'https://graph.facebook.com/v21.0/<EXTENDED_CREDIT_LINE_ID>/whatsapp_credit_attach?waba_currency=<WABA_CURRENCY>&waba_id=<WABA_ID>' \
-H 'Authorization: Bearer <BUSINESS_TOKEN>'
```

#### Request parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<BUSINESS_TOKEN>` | **Required.**  The customer’s business token. | `EAAAN6tcBzAUBOwtDtTfmZCJ9n3FHpSDcDTH86ekf89XnnMZAtaitMUysPDE7LES3CXkA4MmbKCghdQeU1boHr0QZA05SShiILcoUy7ZAb2GE7hrUEpYHKLDuP2sYZCURkZCHGEvEGjScGLHzC4KDm8tq2slt4BsOQE1HHX8DzHahdT51MRDqBw0YaeZByrVFZkVAoVTxXUtuKgDDdrmJQXMnI4jqJYetsZCP1efj5ygGscZBm4OvvuCYB039ZAFlyNn` |
| `<EXTENDED_CREDIT_LINE_ID>` | **Required.**  Your extended credit line ID. | `5985499441566032` |
| `<WABA_ID>` | **Required.**  The customer’s WABA ID. | `102290129340398` |
| `<WABA_CURRENCY>` | **Required.**  The customer’s business currency. | `USD` |

#### Response syntax

```
{
  "success": true,
  "waba_id": "<WABA_ID>",
  "allocation_config_id": "<ALLOCATION_CONFIG_ID>"
}
```

#### Response parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<ALLOCATION_CONFIG_ID>` | The extended credit line’s allocation configuration ID.  Save this ID if you want to [verify](#verifying-shared-status) that your credit line has been shared with the customer. | `58501441721238` |
| `<WABA_ID>` | The customer’s WABA ID. | `102290129340398` |

Your credit line should now be shared with the business customer. If you want to verify that it has in fact been shared, see [Verifying that your credit line has been shared with a customer](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/share-and-revoke-credit-lines#step-3--verify-credit-line-was-shared).

Perform the following queries if you want to make sure that your credit line has been shared with an onboarded business customer.

### Step 1: Get credit line’s receiving credential

Use the [GET /<EXTENDED\_CREDIT\_ALLOCATION\_ID>](https://developers.facebook.com/docs/graph-api/reference/extended-credit-allocation-config) endpoint to request the `receiving_credential` field on your extended credit allocation ID (returned when you [shared your credit line](#sharing-your-credit-line) with the business customer).

### Request syntax

```
curl 'https://graph.facebook.com/<API_VERSION>/<EXTENDED_CREDIT_ALLOCATION_ID>?fields=receiving_credential' \
-H 'Authorization: Bearer <SYSTEM_TOKEN>'
```

### Response syntax

```
{
  "receiving_credential": {
    "id": "<RECEIVING_CREDENTIAL_ID>"
  },
  "id": "<ALLOCATION_CONFIGURATION_ID>"
}
```

### Step 2: Get WABA’s primary funding ID

Use the [GET /<WABA>](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api#Reading) endpoint to request the `primary_funding_id` on the customer’s WABA ID.

### Request syntax

```
curl 'https://graph.facebook.com/v21.0/<CUSTOMER_WABA_ID>/?fields=primary_funding_id' \
-H 'Authorization: Bearer <CUSTOMER_BUSINESS_TOKEN>'
```

### Response syntax

```
{
  "primary_funding_id": "<PRIMARY_FUNDING_ID>",
  "id": "<CUSTOMER_WABA_ID>"
}
```

### Step 3: Compare IDs

Compare the receiving credential ID to the primary funding ID. If the values match, your credit line has been shared correctly with the business customer’s WABA.

These are the steps needed to remove the shared line of credit if you need to revoke access for any reason. You can revoke your credit line whenever you feel the need to and/or when your client removes you as a partner from their WhatsApp Business Account.

When you revoke a credit line from a customer’s account, that revocation applies to all WABAs that belong to the customer’s business **and** have been shared with you, the Solution Partner.

### Step 1: Get your credit line ID

#### Example request

```
curl -i -X GET "https://graph.facebook.com/v25.0/105954558954427/
  extendedcredits?fields=id,legal_entity_name&
  access_token=EAAFl..."
```

#### Example response

```
{
  "data": [
    {
      "id": "1972385232742146",   //Credit line ID
      "legal_entity_name": "Your Legal Entity",
    }
  ]
}
```

### Step 2: Get the customer’s business portfolio ID

If the WhatsApp Business Account is currently shared with the Solution Partner, get the client’s business ID from the shared WhatsApp Business Account.  
  

In the following example, use the ID for the assigned WhatsApp Business Account.  
  
Request:

```
curl -i -X GET "https://graph.facebook.com/v25.0/
  <WHATSAPP_BUSINESS_ACCOUNT_ID>?fields=owner_business_info&
  access_token=<ACCESS_TOKEN>"
```

```
{
  "owner_business_info": {
    "name": "Client Business Name",
    "id": "1972385232742147"
  },
}
```

If the WhatsApp Business Account was unshared with the Solution Partner or the client business removed the Solution Partner as a partner from the WhatsApp Business Account, you cannot access the client’s business ID from the above API call. See [Unshared WhatsApp Business Account](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/share-and-revoke-credit-lines#unshared-whatsapp-business-accounts) for information.

### Step 3: Get the customer’s credit sharing record

In the following example, use your credit line ID as the extended credit ID.

```
curl -i -X GET "https://graph.facebook.com/<API_VERSION>/<EXTENDED_CREDIT_ID>/
  owning_credit_allocation_configs?
  receiving_business_id=<CLIENT_BUSINESS_ID>&
  fields=id,receiving_business&
  access_token=<SYSTEM_USER_ACCESS_TOKEN>"
```

```
{
  "id": "1972385232742140", // Allocation config (i.e., credit sharing) id
  "receiving_business": {
    "name": "Client Business Name"
    "id": "1972385232742147"
  },
}
```

### Step 4: Revoke credit sharing

```
curl -i -X DELETE "https://graph.facebook.com/v25.0/
  {allocation-config-id}?
  access_token={system-user-access-token}"
```

```
{
  "success": true
}
```

### Step 5: Verify credit sharing was revoked (Optional)

```
curl -i -X GET "https://graph.facebook.com/v25.0/
  {allocation-config-id}?fields=receiving_business,request_status&
  access_token={system-user-access-token}"
```

```
{
  "receiving_business": {
    "name": "Customer Business Name",
    "id": "1972385232742147"
  },
  "request_status": "DELETED"
}
```

## Troubleshooting

If a business customer unshares their WABA with you, or removes you as a partner from their WhatsApp Business Account, you will not be able to get their business portfolio ID via API.

Instead, you can get their portfolio ID from the email notification that was sent to admins of the business portfolio, when the business customer removed you as a partner, or unshared their WABA.

Did you find this page helpful?