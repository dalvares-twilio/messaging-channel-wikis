---
type: source
title: "Migrate WABA Between MPS via Meta Business Suite"
source_file: "[[raw/Migrating a WABA from one Multi-Partner Solution to another via Meta Business Suite.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/migrating-wabas-among-solutions-via-meta-business-suite"
ingested: 2026-04-05
tags: [migration, multi-partner-solutions, mbs]
---

## Summary

Migrate WABA between Multi-Partner Solutions using API + Meta Business Suite. Creates new WABA, duplicates templates, grants access to destination Solution Partner.

## Requirements

- Apps must be in same business portfolio
- Destination solution must be Active

## Template Handling

- Only `APPROVED` + `GREEN` quality duplicated
- May be re-rejected after categorization check
- Quality ratings reset to `UNKNOWN`

## Tech Provider Steps

1. Tag WABA: `POST /<WABA_ID>/set_solution_migration_intent`
2. Share migration_intent_id and phone number with Solution Partner
3. Disable two-step verification on phone number
4. Customer accepts via MBS > Requests > Received

## Solution Partner Steps

1. Get business token via `GET /<SOLUTION_ID>/access_token`
2. Check migration status: `GET /<MIGRATION_INTENT_ID>` (must be `ACCEPTED`)
3. Subscribe to webhooks: `POST /<WABA_ID>/subscribed_apps`
4. Share credit line: `POST /<CREDIT_LINE_ID>/whatsapp_credit_sharing_and_attach`
5. Migrate phone: `POST /<WABA_ID>/phone_numbers` with `migrate_phone_number: true`
6. Register phone: `POST /<PHONE_ID>/register`

## Related Concepts
- [[wiki/concepts/solution-partners]]
