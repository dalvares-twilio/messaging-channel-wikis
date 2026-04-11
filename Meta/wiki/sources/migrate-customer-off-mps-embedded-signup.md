---
type: source
title: "Migrate Customer Off MPS via Embedded Signup"
source_file: "[Migrating customers off of a Multi-Partner Solution using Embedded Signup.md](../../raw/Migrating customers off of a Multi-Partner Solution using Embedded Signup.md)"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/migrating-customers-off-solutions-via-embedded-signup"
ingested: 2026-04-05
tags: [migration, multi-partner-solutions, embedded-signup]
---

## Summary

Tech Providers can migrate customers off Multi-Partner Solutions to operate independently using Embedded Signup. No phone reverification needed.

## Requirements

- App approved for `whatsapp_business_management` permission

## Template Handling

- Templates duplicated to new WABA if customer creates one
- Only `APPROVED` + `GREEN` quality duplicated
- Quality ratings reset to `UNKNOWN`

## Steps

1. Disable two-step verification on phone number
2. Tag WABA: `POST /<WABA_ID>/set_solution_migration_intent` with `app_id`
3. Customer completes Embedded Signup (enters existing phone number)
4. Exchange token code for business token
5. Subscribe to webhooks: `POST /<WABA_ID>/subscribed_apps`
6. Register phone: `POST /<PHONE_ID>/register`

## Customer Requirements

Customer must add payment method after migration—cannot send templates until payment configured.

## Related Concepts
- [solution-partners](../concepts/solution-partners.md)
- [embedded-signup](../concepts/embedded-signup.md)
