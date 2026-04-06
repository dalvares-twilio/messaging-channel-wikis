---
title: "Business phone numbers | Developer Documentation"
source: "https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
WhatsApp Business Platform

## Business phone numbers

This document describes WhatsApp business phone numbers, their requirements, management information, and unique features.

A valid business phone number must be registered before it can be used to send and receive messages via Cloud API. Registered numbers can still be used for everyday purposes, such as calling and text messages, but cannot be used with WhatsApp Messenger (“WhatsApp”).

Note that when you complete the steps in our [Get Started](https://developers.facebook.com/documentation/business-messaging/whatsapp/get-started) document, a **test** business phone number will be generated and registered for you automatically.

### Eligibility requirements

- owned by you
- have a country and area code (short codes are not supported)
- able to receive voice calls or SMS
- number should have [scaled capabilities⁠](https://www.facebook.com/business/help/595597942906808)

If you are registering a 1-800 number, see [1-800 and toll free numbers](#1-800-and-toll-free-numbers) for additional information.

### Registration methods

- **App Dashboard**: Complete the steps in our [Get Started](https://developers.facebook.com/documentation/business-messaging/whatsapp/get-started) document if you haven’t already, then use the [App Dashboard](https://developers.facebook.com/apps) > **WhatsApp** > **API Setup** panel to add a phone number.
- **Meta Business Suite**: You can register a business phone number when [using Meta Business Suite to create a WhatsApp Business Account](https://developers.facebook.com/documentation/business-messaging/whatsapp/whatsapp-business-accounts#create-a-waba-via-meta-business-suite).
- **WhatsApp Manager**: See our [How to connect your phone number to your WhatsApp Business Account⁠](https://www.facebook.com/business/help/456220311516626) help center article.
- **Embedded Signup**: If you are working with a solution partner, they will provide you with a link to Embedded Signup, which you can use to register a number.

**Note:** The methods above add a phone number to your WhatsApp Business Account and verify your ownership, but they do not register the number for Cloud API use. To complete registration, call the [register endpoint](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/registration#register). If you are a Solution Partner or Tech Provider using Embedded Signup, see [Registering business phone numbers](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/registering-phone-numbers#step-4--register-the-number).

## Business phone number types

This table categorizes phone number types and evaluates their suitability for receiving OTPs via SMS, international phone calls, and flash calls. It provides likelihood assessments for successful delivery based on number type and carrier characteristics. Additionally, it offers actionable recommendations for users to improve delivery success without changing their phone number type.

| Phone type | Description | SMS OTP | Voice OTP | Actions |
| --- | --- | --- | --- | --- |
| Mobile (recommended) | Assigned to mobile devices/SIMs | Standard | Standard | Enable International reception of SMS/Calls, ensure device is connected to Cellular Network, Grant App permissions |
| Fixed line | Assigned to physical locations (landline) | Not Recommended | Standard | Enable International reception of SMS/Calls, ensure line is ready for incoming calls and disable call forwarding or IVR features |
| Freephone | Toll-Free, recipient pays | Not Recommended | Standard | Ensure with Phone provider that the number is able to receive International SMS/Calls, check that line is ready for incoming calls and disable call forwarding or IVR features |
| Premium rate | Higher charges for special services | Not Recommended | Standard | Ensure with Phone provider that the number is able to receive International SMS/Calls, check that line is ready for incoming calls and disable call forwarding or IVR features |
| Shared cost | Cost shared between caller and recipient | Not Recommended | Not Recommended | Ensure with Phone provider that the number is able to receive International SMS/Calls, check that line is ready for incoming calls and disable call forwarding or IVR features |
| Universal access | Reachable globally for customer service | Not Recommended | Standard | Ensure with Phone provider that the number is able to receive International SMS/Calls, check that line is ready for incoming calls and disable call forwarding or IVR features |
| Personal number | Assigned to individuals, not tied to device | Not Recommended | Not Recommended | Ensure with Phone provider that the number is able to receive International SMS/Calls, check that line is ready for incoming calls and disable call forwarding or IVR features |
| VoIP | Internet telephony, not tied to physical line | Not Recommended | Standard | Confirm that the VoIP provider supports international SMS/calls for OTPs; check provisioning and account settings; keep app/service running and notifications enabled; ensure device is online and permissions granted |
| Inbound only | Only accept incoming calls/messages | Not Recommended | Standard | Ensure with Phone provider that the number is able to receive International SMS/Calls, check that line is ready for incoming calls and disable call forwarding or IVR features |
| Pager | Assigned to pagers (rare) | Not supported | Not supported | Not supported |
| M2M/IoT | Machine-to-machine, smart devices | Not Recommended | Not Recommended | Ensure device and SIM are allowed for incoming International SMS/calls |

## Status

Business phone numbers have a status, which reflects their quality rating and current [messaging limit](https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits). Business phone numbers must have a status of “connected” in order to send and receive messages via the API.

### Viewing status via WhatsApp Manager

### Getting status via API

Request the `status` field on your WhatsApp Business Phone Number ID. See the [GET /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api#Reading) reference for a list of returnable status values and their meanings.

#### Example request

```
curl 'https://graph.facebook.com/v25.0/106540352242922?fields=status' \
-H 'Authorization: Bearer EAAJB...'
```

#### Example response

```
{
  "status": "CONNECTED",
  "id": "106540352242922"
}
```

## Display names

You must provide display name information when registering a business phone number. The display name appears in your business phone number’s WhatsApp profile, and can also appear at the top of **individual chat** threads and the **chat list** if certain conditions are met. See our [Display names](https://developers.facebook.com/documentation/business-messaging/whatsapp/display-names) document to learn how display names work.

![[507127951_698062976515521_2852142619234157074_n 1.png|WhatsApp display name shown in chat thread]]

A business profile provides additional information about your business, such as its address, website, description, and so on. You can supply this information when registering your business phone number. See our [Business profiles](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-profiles) document to learn how business profiles work.

![[507476070_1379105613180336_7510619276605653298_n 1.png|Business profile information in WhatsApp]]

## Official Business Account status

Business phone numbers can gain Official Business Account (OBA) status. OBA numbers have a blue checkmark beside their name in the contacts view.

![[456954377_453386597161620_5745766558871976538_n.png|Official Business Account blue checkmark displayed in contacts view]]

See our [Official Business Account](https://developers.facebook.com/documentation/business-messaging/whatsapp/official-business-accounts) document to learn how to request OBA status for a business phone number.

## Two-step verification

You must set a two-step verification PIN when registering a business phone number. Your PIN is required when changing your PIN or deleting your phone number from the platform.

### Changing your PIN via WhatsApp Manager

You will need your current PIN to change your PIN via WhatsApp Manager. To change your PIN:

1. Navigate to [WhatsApp Manager⁠](https://business.facebook.com/latest/whatsapp_manager/) > **Account tools** > **Phone numbers**.
2. Select your business phone number.
3. Click the **Two-step verification** tab.
4. Click the **Change PIN** button and complete the flow.

If you don’t have your PIN, you can change your PIN using the API.

### Changing your PIN via API

Use the [POST /<WHATSAPP\_BUSINESS\_PHONE\_NUMBER\_ID>](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api#Updating) endpoint to set a new PIN.

#### Example request

```
curl 'https://graph.facebook.com/v25.0/106540352242922/' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "pin": "150954"
}'
```

#### Example response

```
{
  "success": true
}
```

### Disabling two-step verification

To disable two-step verification using WhatsApp Manager, follow the steps for changing your PIN, but click the **Turn off two-step verification** button as the final step instead. An email with a link will be sent to the email address associated with your business portfolio. Use the link to disable two-step verification. Once disabled, you can re-enable it by setting a new PIN.

Note that you cannot disable two-step verification using the API.

## 1-800 and toll free numbers

You may want to register a 1-800 or other toll free number on the platform. These numbers are usually behind an Interactive Voice Response (IVR) system. A WhatsApp registration call cannot navigate an IVR. Phone numbers behind an IVR system can be registered, but must be able to accept calls from international numbers and be able to redirect our SMS message or voice call to a real person.

1. WhatsApp shares with you 1 or 2 phone numbers that the registration call will come from.
2. Create an allow list for these numbers. If you are unable to create an allow list for these numbers, add the phone number to your WABA and open a Direct Support ticket asking for the registration call phone numbers and include the phone number you are trying to register in the ticket.
3. Redirect the registration call to an employee or a mailbox to capture the registration code.

Phone numbers behind an IVR system that are unable to receive registration calls are not supported.

New business portfolios are initially capped at 2 registered business phone numbers.

## Verify phone numbers

You need to verify the phone number you want to use to send messages to your customers. Phone numbers must be verified using a code sent via an SMS/voice call. The verification process can be done via Graph API calls specified below.

To verify a phone number using Graph API, make a `POST` request to `PHONE_NUMBER_ID/request_code`. In your call, include your chosen verification method and language.

| Endpoint | Authentication |
| --- | --- |
| `/PHONE_NUMBER_ID/request_code` | Authenticate yourself with a system user access token.  If you are requesting the code on behalf of another business, the access token needs to have Advanced Access to the `whatsapp_business_management` permission. |

### Parameters

| Name | Description |
| --- | --- |
| `code_method`  *string* | **Required.**  Chosen method for verification. Supported options:  - `SMS` - `VOICE` |
| `language`  *string* | **Required.**  The language’s two-character [language code](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages) code. For example: `"en"`. |

### Example request

```
curl -X POST 'https://graph.facebook.com/v25.0/106540352242922/request_code?code_method=SMS&language=en_US' \
-H 'Authorization: Bearer EAAJB...'
```

After the API call, you will receive your verification code via the method you selected. To finish the verification process, include your code in a `POST` request to `PHONE_NUMBER_ID/verify_code`.

| Endpoint | Authentication |
| --- | --- |
| `/PHONE_NUMBER_ID/verify_code` | Authenticate yourself with a system user access token.  If you are requesting the code on behalf of another business, the access token needs to have Advanced Access to the `whatsapp_business_management` permission. |

### Parameters

| Name | Description |
| --- | --- |
| `code`  *numeric string* | **Required.**  The code you received after calling `FROM_PHONE_NUMBER_ID/request_code`. |

### Example

```
curl -X POST \
  'https://graph.facebook.com/v25.0/FROM_PHONE_NUMBER_ID/verify_code' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -F 'code=000000'
```

A successful response looks like this:

```
{
  "success": true
}
```

## WhatsApp user phone number formats

Plus signs (`+`), hyphens (`-`), parenthesis (`(`,`)`), and spaces are supported in send message requests.

We highly recommend that you include both the plus sign and country calling code when sending a message to a customer. If the plus sign is omitted, your business phone number’s country calling code is prepended to the customer’s phone number. This can result in undelivered or misdelivered messages.

For example, if your business is in India (country calling code `91`) and you send a message to the following customer phone number in various formats:

| Number In Send Message Request | Number Message Delivered To | Outcome |
| --- | --- | --- |
| `+16315551234` | `+16315551234` | Correct number |
| `+1 (631) 555-1234` | `+16315551234` | Correct number |
| `(631) 555-1234` | `+916315551234` | Potentially wrong number |
| `1 (631) 555-1234` | `+9116315551234` | Potentially wrong number |

Note: For Brazil and Mexico, the extra added prefix of the phone number may be modified by the Cloud API. This is a standard behavior of the system and is not considered a bug.

## Identity change check

You may want Meta to verify a customer’s identity before delivering your message to them. You can have us do this by enabling the identity change check setting on your business phone number.

If a customer performs an action in WhatsApp that is considered an identity change, Meta generates a new identity hash for the user. To get this hash when messaging a customer, enable the identity change check setting on your business phone number. Once enabled, anytime the customer messages you, or you message the customer without an identity hash, [any incoming messages webhooks](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages#incoming-messages) or [status messages webhooks](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) will include their hash. You can then capture and store this hash for future use.

To use the hash, include it in a send message request. Meta compares the hash in the request to the customer’s current hash. If the hashes match, the message will be delivered. If there is a mismatch, it means the customer has changed their identity since you last messaged them and the message will not be delivered. Instead, you will receive a status messages webhook with error code `137000`, notifying you of the failure and mismatch.

When you receive a mismatched hash webhook, assume the customer’s phone number can no longer be trusted. To reestablish trust, verify the customer’s identity again using other, non-WhatsApp channels. Once you have reestablished trust, resend the failed message to the new identity (if any), without a hash. Then store the customer’s new hash included in the message status delivery webhook.

### Request syntax

Send a POST request to the **WhatsApp Business Phone Number > Settings** endpoint to enable or disable the identity change check setting.

`POST /<WHATSAPP_BUSINESS_PHONE_NUMBER>/settings`

### Post body

```
{
  "user_identity_change" : {
    "enable_identity_key_check": <ENABLE_IDENTITY_KEY_CHECK>
}
```

Set `<ENABLE_IDENTITY_KEY_CHECK>` to `true` to enable identity check, or `false` to disable it.

### Example enable request

```
curl 'https://graph.facebook.com/v25.0/106850078877666/settings' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "user_identity_change": {
    "enable_identity_key_check": true
  }
}'
```

### Example enable response

```
{
  "success": true
}
```

### Example send message with check

This example message would only be delivered if the `recipient_identity_key_hash` hash value matches the customer’s current hash.

```
curl 'https://graph.facebook.com/v25.0/106850078877666/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "recipient_identity_key_hash": "DF2lS5v2W6x=",
  "type": "text",
  "text": {
    "preview_url": false,
    "body": "Your latest statement is attached. See... "
  }
}'
```

### Webhooks

In incoming messages webhooks with a `contacts` object, such as the [text messages webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/text), the customer’s hash is assigned to the `identity_key_hash` property.

In outgoing messages webhooks ([status messages webhooks](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/status)), the customer’s hash is assigned to the `recipient_identity_key_hash` property in the `statuses` object.

## Get throughput level

Use the [WhatsApp Business Phone Number](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api#Reading) endpoint to get a phone number’s current [throughput level](https://developers.facebook.com/documentation/business-messaging/whatsapp/throughput):

`GET /<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>?fields=throughput`

## Get all phone numbers

To get a list of all phone numbers associated with a WhatsApp Business Account, send a GET request to the [WhatsApp Business Account > Phone Numbers](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api) endpoint.

In addition, phone numbers can be sorted in either ascending or descending order by `last_onboarded_time`, which is based on when the user completed onboarding for [Embedded Signup](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/overview). If not specified, the default order is descending.

### Request syntax

```
curl -X GET "https://graph.facebook.com/<API_VERSION>/<WABA_ID>/phone_numbers?access_token=<ACCESS_TOKEN>"
```

On success, a JSON object is returned with a list of all the business names, phone numbers, phone number IDs, and quality ratings associated with a business. Results are sorted by embedded signup completion date in descending order, with the most recently onboarded listed first.

### Example response

```
{
  "data": [
    {
      "verified_name": "Jasper's Market",
      "display_phone_number": "+1 631-555-5555",
      "id": "1906385232743451",
      "quality_rating": "GREEN"

    },
    {
      "verified_name": "Jasper's Ice Cream",
      "display_phone_number": "+1 631-555-5556",
      "id": "1913623884432103",
      "quality_rating": "NA"
    }
  ]
}
```

### Request syntax

```
curl -X GET "https://graph.facebook.com/<API_VERSION>/<WABA_ID>/phone_numbers?access_token=<SYSTEM_USER_ACCESS_TOKEN>]&sort=['last_onboarded_time_ascending']"
```

### Example response

On success, a JSON object is returned with a list of all the business names, phone numbers, phone number IDs, and quality ratings associated with a business. It is sorted based on when the user has completed embedded signup in ascending order, with the most recently onboarded listed last.

```
{
  "data": [
   {
      "verified_name": "Jasper's Ice Cream",
      "display_phone_number": "+1 631-555-5556",
      "id": "1913623884432103",
      "quality_rating": "NA"
    },
    {
      "verified_name": "Jasper's Market",
      "display_phone_number": "+1 631-555-5555",
      "id": "1906385232743451",
      "quality_rating": "GREEN"
    }
  ]
}
```

### Filter phone numbers

You can query phone numbers and filter them based on their `account_mode`. This filtering option is currently being tested in beta mode. Not all developers have access to it.

#### Parameters

| Name | Description |
| --- | --- |
| `field` | **Value:** `account_mode` |
| `operator` | **Value:** `EQUAL` |
| `value` | **Values:** `SANDBOX`, `LIVE` |

#### Request syntax

```
curl -i -X GET "https://graph.facebook.com/<API_VERSION>/<WABA_ID>/phone_numbers?filtering=[{"field":"account_mode","operator":"EQUAL","value":"SANDBOX"}]&access_token=<ACCESS_TOKEN>
```

### Example response

```
{
  "data": [
    {
      "id": "1972385232742141",
      "display_phone_number": "+1 631-555-1111",
      "verified_name": "John's Cake Shop",
      "quality_rating": "UNKNOWN"
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

## Get a single phone number

To get information about a phone number, send a GET request to the [WhatsApp Business Phone Number](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api) endpoint:

### Request syntax

```
GET https://graph.facebook.com/<API_VERSION>/<PHONE_NUMBER_ID>
```

### Sample request

```
curl \
'https://graph.facebook.com/v15.0/105954558954427/' \
-H 'Authorization: Bearer EAAFl...'
```

On success, a JSON object is returned with the business name, phone number, phone number ID, and quality rating for the phone number queried.

```
{
  "code_verification_status" : "VERIFIED",
  "display_phone_number" : "15555555555",
  "id" : "105954558954427",
  "quality_rating" : "GREEN",
  "verified_name" : "Support Number"
}
```

## Get display name status (beta)

Include `fields=name_status` as a query string parameter to get the status of a display name associated with a specific phone number. This field is currently in beta and not available to all developers.

### Sample request

```
curl \
'https://graph.facebook.com/v15.0/105954558954427?fields=name_status' \
-H 'Authorization: Bearer EAAFl...'
```

### Sample response

```
{
  "id" : "105954558954427",
  "name_status" : "AVAILABLE_WITHOUT_REVIEW"
}
```

The `name_status` value can be one of the following:

- `APPROVED`: The name has been approved.
- `AVAILABLE_WITHOUT_REVIEW`: The display name is ready to use without review.
- `DECLINED`: The name has not been approved.
- `EXPIRED`: The phone number’s certificate has expired and cannot be used to register the phone number for API use.
- `PENDING_REVIEW`: Your name request is under review.
- `NONE`: The phone number does not have a certificate and cannot be used to register the phone number for API use.

## Deleting business phone numbers

Only business portfolio admins can delete business phone numbers, and numbers can’t be deleted if they have been used to send paid messages within the last 30 days.

### Deleting business phone numbers via WhatsApp Manager

If your business phone number has a Connected status, you will need your two-step verification PIN to delete your number.

1. Load your business portfolio in the [WhatsApp Manager⁠](https://business.facebook.com/wa/manage/home/).
2. If it doesn’t automatically load the Phone numbers panel, navigate to **Account tools** (the toolbox icon) > **Phone numbers**.
3. Click the phone number’s trash can icon and complete the flow.

If the number has been used to send paid messages within the last 30 days, you will be redirected to the **Insights** panel, showing the date of the last paid message. You can delete the number 30 days from this date.

### Deleting business phone numbers via API

You cannot delete a business phone number via API.

## Migrating business phone numbers

You can [migrate phone numbers from one WABA to another](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/migrating-phone-numbers-among-solution-partners-via-embedded-signup).

## Conversational components

You can enable helpful message UI components to make it easier for WhatsApp users to interact with your business. See [Conversational components](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/conversational-components).

Did you find this page helpful?