---
title: "security webhook reference | Developer Documentation"
source: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/security"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
WhatsApp Business Platform

## security webhook reference

This reference describes trigger events and payload contents for the WhatsApp Business Account **security** webhook.

The **security** webhook notifies you of changes to a business phone number’s security settings.

## Triggers

- A Meta Business Suite user clicks the **Turn off two-step verification** button in [WhatsApp Manager⁠](https://business.facebook.com/latest/whatsapp_manager/).
- A Meta Business Suite user completes the instructions in the **WhatsApp Two-Step Verification Reset** email to turn off two-step verification.
- A Meta Business Suite user changes or enables the business phone number PIN using [WhatsApp Manager⁠](https://business.facebook.com/latest/whatsapp_manager/).

## Syntax

```
{
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "time": <WEBHOOK_TRIGGER_TIMESTAMP>,
      "changes": [
        {
          "value": {
            "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
            "event": "<EVENT>",
            "requester": "<META_BUSINESS_SUITE_USER_ID>"
          },
          "field": "security"
        }
      ]
    }
  ],
  "object": "whatsapp_business_account"
}
```

## Parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<BUSINESS_DISPLAY_PHONE_NUMBER>`  *String* | Business display phone number. | `15550783881` |
| `<EVENT>`  String |  | `PIN_RESET_REQUEST` |
| `<META_BUSINESS_SUITE_USER_ID>`  String |  | `61555822107539` |
| `<WEBHOOK_TRIGGER_TIMESTAMP>`  *Integer* | Unix timestamp indicating when the webhook was triggered. | `1739321024` |
| `<WHATSAPP_BUSINESS_ACCOUNT_ID>`  *String* | WhatsApp Business Account ID. | `102290129340398` |

## Example

```
{
  "entry": [
    {
      "id": "102290129340398",
      "time": 1748811473,
      "changes": [
        {
          "value": {
            "display_phone_number": "15550783881",
            "event": "PIN_RESET_REQUEST",
            "requester": "61555822107539"
          },
          "field": "security"
        }
      ]
    }
  ],
  "object": "whatsapp_business_account"
}
```

Did you find this page helpful?