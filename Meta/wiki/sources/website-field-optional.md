---
type: source
title: "Website Field Optional"
source_file: "[Website field optional  Developer Documentation.md](../../raw/Website field optional  Developer Documentation.md)"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/website-optional"
ingested: 2026-04-05
tags: [embedded-signup, customization, verification]
---

## Summary

Partners approved for Partner-led Business Verification can make the website field optional in Embedded Signup's business portfolio screen.

## Behavior

Customer sees "My business does not have a website" checkbox. When checked and flow completed:
- Assets and token generated normally
- account_update webhook has `event: PARTNER_CLIENT_CERTIFICATION_NEEDED`

## Webhook Payload

```json
{
  "value": {
    "event": "PARTNER_CLIENT_CERTIFICATION_NEEDED",
    "partner_client_certification_needed_info": {
      "client_business_id": "<BUSINESS_ID>"
    }
  }
}
```

## Post-Completion

Partner must complete Partner-led Business Verification. Customer **cannot send messages** until verified.

## Related Sources
- [partner-led-verification](../sources/partner-led-verification.md)

## Related Concepts
- [embedded-signup](../concepts/embedded-signup.md)
