---
type: source
title: "Migrate Customer Off MPS via Meta Business Suite"
source_file: "[Migrating customers off of a Multi-Partner Solution using Meta Business Suite.md](../../raw/Migrating customers off of a Multi-Partner Solution using Meta Business Suite.md)"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/migrating-customers-off-solutions-via-meta-business-suite"
ingested: 2026-04-05
tags: [migration, multi-partner-solutions, mbs]
---

## Summary

Tech Providers can migrate customers off Multi-Partner Solutions using Meta Business Suite. No phone reverification needed.

## Requirements

- App approved for `whatsapp_business_management` permission

## Template Handling

- Templates duplicated to new WABA
- Only `APPROVED` + `GREEN` quality duplicated
- Quality ratings reset to `UNKNOWN`

## Steps

1. Disable two-step verification on phone number
2. Tag WABA: `POST /<WABA_ID>/set_solution_migration_intent` with `app_id`
3. Customer accepts via MBS > Requests > Received
4. Get migration status: `GET /<MIGRATION_INTENT_ID>` (must be `ACCEPTED`)
5. Get business token: `POST /<BUSINESS_ID>/system_user_access_tokens`
6. Subscribe to webhooks: `POST /<WABA_ID>/subscribed_apps`
7. Get connected phone ID: `GET /<WABA_ID>/phone_numbers?fields=status`
8. Migrate phone: `POST /<WABA_ID>/phone_numbers` with `migrate_phone_number: true`
9. Register phone: `POST /<PHONE_ID>/register`

## Customer Requirements

Must add payment method—cannot send templates until payment configured.

## Related Concepts
- [solution-partners](../concepts/solution-partners.md)
