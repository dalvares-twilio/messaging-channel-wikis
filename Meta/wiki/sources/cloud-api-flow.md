---
type: source
title: "Cloud API Flow"
source_file: "[Cloud API flow  Developer Documentation.md](../../raw/Cloud API flow  Developer Documentation.md)"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow"
ingested: 2026-04-05
tags: [embedded-signup, flow, screens]
---

## Summary

Describes the default screens business customers see during Embedded Signup v4. Pre-filled data can bypass many screens.

## Screen Sequence

1. **Authentication** — Facebook/Meta Business Suite login
2. **Authorization** — Data permissions consent
3. **Business Asset Selection** — Select existing portfolio/WABA
4. **Business Asset Creation** — Create new portfolio/WABA
5. **Phone Number Addition** — Enter phone number, choose verification method
6. **Phone Number Verification** — Enter verification code
7. **Permissions Review** — Summary of granted permissions
8. **Success** — Assets created, triggers message event with IDs

## Key Data Returned

On clicking Finish:
- WABA ID
- Business phone number ID
- Exchangeable token code

## Related Concepts
- [embedded-signup](../concepts/embedded-signup.md)

## Related Sources
- [embedded-signup-overview](../sources/embedded-signup-overview.md)
