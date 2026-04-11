---
type: source
title: "Hosted Embedded Signup"
source_file: "[Hosted Embedded Signup  Developer Documentation.md](../../raw/Hosted Embedded Signup  Developer Documentation.md)"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/hosted-es"
ingested: 2026-04-05
tags: [embedded-signup, hosted, onboarding]
---

## Summary

Hosted Embedded Signup ("Hosted ES") is a zero-integration option for onboarding business customers. Meta hosts the signup page; partners just link to it.

## Limitations

- Cloud API only
- Flow cannot be customized

## Requirements

- Solution Partner or Tech Provider status
- App must send messages, manage templates, have production webhook
- App subscribed to `account_update` webhook
- Solution Partners need line of credit

## Steps

1. Create Facebook Login for Business configuration
2. Get Hosted ES URL from App Dashboard > WhatsApp > Quickstart
3. Capture customer asset IDs from `account_update` webhook (PARTNER_ADDED event)
4. Generate HMAC-SHA256 hash of app secret and system token
5. Get business token via POST /<BUSINESS_PORTFOLIO_ID>/system_user_access_tokens
6. Get customer's phone number ID via GET /<WABA_ID>/phone_numbers
7. Complete onboarding steps (register phone, share credit line)

## Related Concepts
- [embedded-signup](../concepts/embedded-signup.md)

## Related Sources
- [embedded-signup-overview](../sources/embedded-signup-overview.md)
