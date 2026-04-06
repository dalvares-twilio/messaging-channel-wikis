---
title: "smb_message_echoes webhook reference | Developer Documentation"
source: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/smb_message_echoes"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
WhatsApp Business Platform

## smb\_message\_echoes webhook reference

This reference describes trigger events and payload contents for the WhatsApp Business Account **smb\_message\_echoes** webhook.

The **smb\_message\_echoes** webhook notifies you of messages sent via the WhatsApp Business app or a [companion (“linked”) device](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users#linked-devices) by a business customer who has been [onboarded to Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) via a solution provider.

## Triggers

- A business customer with a WhatsApp Business app phone number, who has been [onboarded by a solution provider](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users), sends a message using the WhatsApp Business app or a [companion device](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users#linked-devices) to a WhatsApp user or another business.

## Syntax

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
            "message_echoes": [
              {
                "from": "<BUSINESS_DISPLAY_PHONE_NUMBER>",
                "to": "<WHATSAPP_USER_PHONE_NUMBER>",
                "id": "<WHATSAPP_MESSAGE_ID>",
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",
                "type": "<MESSAGE_TYPE>",
                "<MESSAGE_TYPE>": {
                  <MESSAGE_CONTENTS>
                }
              }
            ]
          },
          "field": "smb_message_echoes"
        }
      ]
    }
  ]
}
```

## Parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<BUSINESS_DISPLAY_PHONE_NUMBER>`  *String* | Business display phone number. | `15550783881` |
| `<BUSINESS_PHONE_NUMBER_ID>`  *String* | Business phone number ID. | `106540352242922` |
| `<MESSAGE_CONTENTS>`  *Object* | An object describing the message’s contents.  This value will vary based on the message `type`, as well as the contents of the message.  For example, if a business sends an `image` message without a caption, the object would not include the `caption` property.  See [Sending messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages) for examples of payloads for each message type. | `{"body":"Here's the info you requested! https://www.meta.com/quest/quest-3/"}` |
| `<MESSAGE_TYPE>`  *String* | [Message type](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages). Note that this placeholder appears twice in the syntax above, as it serves as a placeholder for the `type` property’s value and its matching property name. | `text` |
| `<WEBHOOK_TRIGGER_TIMESTAMP>`  *Integer* | Unix timestamp indicating when the webhook was triggered. | `1739321024` |
| `<WHATSAPP_BUSINESS_ACCOUNT_ID>`  *String* | The business customer’s WhatsApp Business Account ID. | `102290129340398` |
| `<WHATSAPP_MESSAGE_ID>`  *String* | WhatsApp message ID. | `wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | WhatsApp user phone number. This is the same value returned by the API as the `input` value when sending a message to a WhatsApp user. Note that a WhatsApp user’s phone number and ID may not always match. | `+16505551234` |

## Example

This example payload describes a text message (`type` is `text`) sent to a WhatsApp user by a business customer using the WhatsApp Business app.

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
            "message_echoes": [
              {
                "from": "15550783881",
                "to": "16505551234",
                "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBIyNDlBOEI5QUQ4NDc0N0FCNjMA",
                "timestamp": "1739321024",
                "type": "text",
                "text": {
                  "body": "Here's the info you requested! https://www.meta.com/quest/quest-3/"
                }
              }
            ]
          },
          "field": "smb_message_echoes"
        }
      ]
    }
  ]
}
```

Did you find this page helpful?