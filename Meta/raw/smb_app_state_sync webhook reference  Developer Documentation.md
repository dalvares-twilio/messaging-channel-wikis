---
title: "smb_app_state_sync webhook reference | Developer Documentation"
source: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/smb_app_state_sync"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
WhatsApp Business Platform

## smb\_app\_state\_sync webhook reference

This reference describes trigger events and payload contents for the WhatsApp Business Account **smb\_app\_state\_sync** webhook.

The **smb\_app\_state\_sync** webhook is used for synchronizing contacts of [WhatsApp Business app users who have been onboarded](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) via a solution provider.

## Triggers

- A solution provider [synchronizes the WhatsApp Business app contacts](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users#step-1--initiate-contacts-synchronization) of a business customer with a WhatsApp Business app phone number who the provider has [onboarded](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users).
- A business customer with a WhatsApp Business app phone number who has been [onboarded](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) by a solution provider adds a contact to their WhatsApp Business app [contacts⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F1270784217226727%2F%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExUkVpSjFNc0dTbVdXWUhVWHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4lv7KwJ5_ip5ajAzSSX-x5mEKUNMEKKZby4TtQS1e83iGl76RlyAx_3CjSXw_aem_h9bgnoIgY58c4_FYieDcvg&h=AT6ugBFZdYNQ2o56LlyHESZz3MRwt8i6Y4eSI2QJWl_UKLrWSNhevlI80JNyqFEqolefRxT82lbv-KD_hS0Sp5Tj5XwN_HWPaos82MJcy8YHwZGhIpeUiwb_lW5D6qc-Up3hOWEuLNc).
- A business customer with a WhatsApp Business app phone number who has been [onboarded](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) by a solution provider removes a contact from their WhatsApp Business app [contacts⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F1270784217226727%2F%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExUkVpSjFNc0dTbVdXWUhVWHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4Pvau5A83dFTw-S2hS8wmExoyklHPaIb_PCBmDowTlm1znv_B9E1T7SqanOQ_aem_pYUNOpa1uGYQqiu9hr3HFA&h=AT6ugBFZdYNQ2o56LlyHESZz3MRwt8i6Y4eSI2QJWl_UKLrWSNhevlI80JNyqFEqolefRxT82lbv-KD_hS0Sp5Tj5XwN_HWPaos82MJcy8YHwZGhIpeUiwb_lW5D6qc-Up3hOWEuLNc).
- A business customer with a WhatsApp Business app phone number who has been [onboarded](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) by a solution provider edits a contact in their WhatsApp Business app [contacts⁠](https://l.facebook.com/l.php?u=https%3A%2F%2Ffaq.whatsapp.com%2F1270784217226727%2F%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExUkVpSjFNc0dTbVdXWUhVWHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4Pvau5A83dFTw-S2hS8wmExoyklHPaIb_PCBmDowTlm1znv_B9E1T7SqanOQ_aem_pYUNOpa1uGYQqiu9hr3HFA&h=AT6ugBFZdYNQ2o56LlyHESZz3MRwt8i6Y4eSI2QJWl_UKLrWSNhevlI80JNyqFEqolefRxT82lbv-KD_hS0Sp5Tj5XwN_HWPaos82MJcy8YHwZGhIpeUiwb_lW5D6qc-Up3hOWEuLNc).

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
            "state_sync": [
              {
                "type": "contact",
                "contact": {
                  "full_name": "<CONTACT_FULL_NAME>",
                  "first_name": "<CONTACT_FIRST_NAME>",
                  "phone_number": "<CONTACT_PHONE_NUMBER>"
                },
                "action": "<ACTION>",
                "metadata": {
                  "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>"
                }
              },
              <!-- Additional contacts would follow, if any -->
            ]
          },
          "field": "smb_app_state_sync"
        }
      ]
    }
  ]
}
```

## Parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<ACTION>`  *String* | Indicates if the business customer added, edited, or deleted a contact from their WhatsApp Business app phone address book.  Values can be:  `add` — Indicates the WhatsApp Business app user added or edited a contact.  `remove` — Indicates the WhatsApp Business app user removed a contact. | `add` |
| `<BUSINESS_DISPLAY_PHONE_NUMBER>`  *String* | Business display phone number. | `15550783881` |
| `<BUSINESS_PHONE_NUMBER_ID>`  *String* | Business phone number ID. | `106540352242922` |
| `<CONTACT_FIRST_NAME>`  *String* | The contact’s first name, as it appears in the business customer’s WhatsApp Business app phone address book.  Not included when the business customer removes a contact from their WhatsApp Business app phone address book. | `Pablo` |
| `<CONTACT_FULL_NAME>`  *String* | The contact’s full name, as it appears in the business customer’s WhatsApp Business app phone address book.  Not included when the business customer removes a contact from their WhatsApp Business app phone address book. | `Pablo Morales` |
| `<CONTACT_PHONE_NUMBER>` *String* | The contact’s WhatsApp phone number. | `16505551234` |
| `<WEBHOOK_TRIGGER_TIMESTAMP>`  *Integer* | Unix timestamp indicating when the webhook was triggered. | `1739321024` |
| `<WHATSAPP_BUSINESS_ACCOUNT_ID>`  *String* | WhatsApp Business Account ID. | `102290129340398` |

## Example

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
            "state_sync": [
              {
                "type": "contact",
                "contact": {
                  "full_name": "Pablo Morales",
                  "first_name": "Pablo",
                  "phone_number": "16505551234"
                },
                "action": "add",
                "metadata": {
                  "timestamp": "1739321024"
                }
              }
            ]
          },
          "field": "smb_app_state_sync"
        }
      ]
    }
  ]
}
```

Did you find this page helpful?