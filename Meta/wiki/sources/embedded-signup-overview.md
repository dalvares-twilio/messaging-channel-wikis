---
type: source
title: "Embedded Signup Overview"
source_file: "[Embedded Signup  Developer Documentation.md](../../raw/Embedded Signup  Developer Documentation.md)"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/overview"
ingested: 2026-04-05
tags: [embedded-signup, onboarding, authentication]
---

## Summary

Embedded Signup is a desktop/mobile-compatible interface for onboarding business customers to WhatsApp Business Platform. It leverages Facebook Login for Business and JavaScript SDK.

## Flow Steps

1. Customer authenticates with Facebook/Meta Business credentials
2. Accepts terms of service (Cloud API, WhatsApp Business, Meta)
3. Grants app access to WhatsApp assets
4. Selects/creates business portfolio and WABA
5. Enters and verifies business phone number
6. Enters display name

## Returns on Completion

- WABA ID
- Business phone number ID
- Exchangeable token code

## Post-Completion Steps

1. Exchange code for customer-scoped business token
2. Register customer's phone number for Cloud API
3. Subscribe app to webhooks on customer's WABA
4. Share credit line (Solution Partners only)

## Limits

- **Onboarding**: 10 new customers per rolling 7-day window
- **Phone numbers**: Cloud API only, standard messaging limits
- **555 numbers**: Up to 2 per customer (US +1 555 area code, auto-verified)

## Sandbox Testing

- Valid for 30 days
- Cannot send/receive real messages
- Claim via App Dashboard > WhatsApp > Quickstart

## Localization

Available in 30 languages, auto-triggered by user's Facebook language.

## Related Concepts
- [embedded-signup](../concepts/embedded-signup.md)
- [solution-partners](../concepts/solution-partners.md)

## Related Entities
- [whatsapp-business-account](../entities/whatsapp-business-account.md)
