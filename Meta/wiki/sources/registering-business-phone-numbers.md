---
type: source
title: "Registering Business Phone Numbers"
source_file: "[Registering business phone numbers.md](../../raw/Registering business phone numbers.md)"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/registering-phone-numbers"
ingested: 2026-04-05
tags: [phone-numbers, registration, api]
---

## Summary

Programmatic 4-step process to register phone numbers on WABAs. Embedded Signup performs steps 1-3 automatically unless phone number screen is bypassed.

## Step 1: Create Phone Number

```
POST /<WABA_ID>/phone_numbers
{
  "cc": "<COUNTRY_CODE>",
  "phone_number": "<NUMBER>",
  "verified_name": "<NAME>"
}
```

Returns: Phone number ID

## Step 2: Request Verification Code

```
POST /<PHONE_NUMBER_ID>/request_code
?code_method=SMS|VOICE&language=en_US
```

## Step 3: Verify Number

```
POST /<PHONE_NUMBER_ID>/verify_code?code=<CODE>
```

Code format: digits only (no hyphen)

## Step 4: Register for API Use

```
POST /<PHONE_NUMBER_ID>/register
{
  "messaging_product": "whatsapp",
  "pin": "<6_DIGIT_PIN>"
}
```

PIN becomes two-step verification PIN if not already set.

## Key Notes

- Embedded Signup handles steps 1-3 automatically
- Only step 4 required after normal Embedded Signup completion
- All 4 steps needed if phone number screen bypassed

## Related Concepts
- [embedded-signup](../concepts/embedded-signup.md)
- [two-step-verification](../concepts/two-step-verification.md)
