---
type: source
title: "Partner-initiated WABA Creation"
source_file: "[Partner-initiated WABA creation  Developer Documentation.md](../../raw/Partner-initiated WABA creation  Developer Documentation.md)"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/partner-initiated-waba-creation"
ingested: 2026-04-05
tags: [waba, onboarding, solution-partners]
---

## Summary

Alternative to Embedded Signup: Solution Partners initiate WABA creation via Meta Business Suite. Customer reviews and accepts in their own MBS.

## Flow

1. Partner: MBS > Settings > WhatsApp accounts > Add > Request new account for client
2. Customer receives invitation (90-day expiry)
3. Customer accepts, optionally adds phone number
4. Partner listens for `PARTNER_ADDED` or `PARTNER_APP_INSTALLED` webhook
5. Partner adds phone number if needed
6. Partner shares credit line via API

## Key Constraints

- Must use system token (not business token)
- Cannot share credit line during flow—must use API after
- Customer cannot add own payment method

## Adding Phone Numbers

- Via WhatsApp Manager UI
- Via API: `POST /<WABA_ID>/phone_numbers`

## Multi-Partner Solutions

After onboarding, direct customer to MPS-configured Embedded Signup or use API to add WABA to MPS.

## WABA Sharing Model

Customer-owned WABA created via Embedded Signup with business token access.

## Deprecation Note

On-Behalf-Of ownership model is deprecated.

## Related Concepts
- [solution-partners](../concepts/solution-partners.md)
- [embedded-signup](../concepts/embedded-signup.md)
