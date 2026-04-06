---
title: "message_template_quality_update webhook reference | Developer Documentation"
source: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/message_template_quality_update"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
WhatsApp Business Platform

## message\_template\_quality\_update webhook reference

This reference describes trigger events and payload contents for the WhatsApp Business Account `message_template_quality_update` webhook.

The **message\_template\_quality\_update** webhook notifies you of changes to a template’s [quality score](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-quality).

## Triggers

- A template’s quality score changes.

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
            "previous_quality_score": "<PREVIOUS_QUALITY_SCORE>",
            "new_quality_score": "<NEW_QUALITY_SCORE>",
            "message_template_id": <TEMPLATE_ID>,
            "message_template_name": "<TEMPLATE_NAME>",
            "message_template_language": "<TEMPLATE_LANGUAGE_AND_LOCALE_CODE>"
          },
          "field": "message_template_status_update"
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
| `<NEW_QUALITY_SCORE>`  *String* | New template [quality score](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-quality).  Values can be:  `GREEN` — Indicates high quality.  `RED` — Indicates low quality.  `YELLOW` — Indicates medium quality.  `UNKNOWN` — Indicates quality pending. | `GREEN` |
| `<PREVIOUS_QUALITY_SCORE>`  *String* | Previous template [quality score](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-quality).  Values can be:  `GREEN` — Indicates high quality.  `RED` — Indicates low quality.  `YELLOW` — Indicates medium quality.  `UNKNOWN` — Indicates quality pending. | `YELLOW` |
| `<TEMPLATE_ID>`  *Integer* | Template ID. | `806312974732579` |
| `<TEMPLATE_NAME>`  *String* | Template name. | `welcome_template` |
| `<TEMPLATE_LANGUAGE_AND_LOCALE_CODE>`  *String* | Template [language and locale](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages) code. | `en-US` |
| `<WEBHOOK_TRIGGER_TIMESTAMP>`  *Integer* | Unix timestamp indicating when the webhook was triggered. | `1739321024` |
| `<WHATSAPP_BUSINESS_ACCOUNT_ID>`  *String* | WhatsApp Business Account ID. | `102290129340398` |

## Example

```
{
  "entry": [
    {
      "id": "102290129340398",
      "time": 1674864290,
      "changes": [
        {
          "value": {
            "previous_quality_score": "GREEN",
            "new_quality_score": "YELLOW",
            "message_template_id": 806312974732579,
            "message_template_name": "welcome_template",
            "message_template_language": "en-US"
          },
          "field": "message_template_status_update"
        }
      ]
    }
  ],
  "object": "whatsapp_business_account"
}
```

Did you find this page helpful?