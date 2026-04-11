---
type: query
title: "What are the steps in the Embedded Signup flow?"
asked: 2026-04-10
tags: [embedded-signup, onboarding, flow]
---

## Question

What are the steps a business customer goes through during Embedded Signup?

## Answer

The Embedded Signup flow consists of 6 main steps:

1. **Authentication** — Customer authenticates with Facebook/Meta Business credentials
2. **Terms Acceptance** — Accepts terms of service (Cloud API, WhatsApp Business, Meta)
3. **App Access Grant** — Grants the partner's app access to WhatsApp assets
4. **Business Portfolio Selection** — Selects existing or creates new business portfolio and WABA
5. **Phone Number Verification** — Enters and verifies business phone number
6. **Display Name Entry** — Enters the display name for the phone number

Upon completion, the flow returns:
- WABA ID
- Business phone number ID
- Exchangeable token code (30-second TTL)

### Post-Completion Steps (Partner Responsibility)

1. Exchange code for customer-scoped business token
2. Register customer's phone number for Cloud API
3. Subscribe app to webhooks on customer's WABA
4. Share credit line (Solution Partners only)

## References

- [embedded-signup-overview](../sources/embedded-signup-overview.md)
- [embedded-signup-implementation](../sources/embedded-signup-implementation.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/overview
