---
type: source
title: "Migrate WABA Between MPS via Embedded Signup"
source_file: "[[raw/Migrating a WABA from one Multi-Partner Solution to another via Embedded Signup.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/migrating-wabas-among-solutions-via-embedded-signup"
ingested: 2026-04-05
tags: [migration, multi-partner-solutions, embedded-signup]
---

## Summary

Tech Providers can migrate customer WABAs between Multi-Partner Solutions using API + Embedded Signup. Creates new WABA, duplicates templates, grants access to destination Solution Partner.

## Requirements

- Source and destination apps in same business portfolio
- Destination solution must be Active

## Template Handling

- Only `APPROVED` + `GREEN` quality templates duplicated
- Re-checked for categorization (may become `REJECTED`)
- Quality ratings reset to `UNKNOWN` for 24 hours

## Billing

- Pre-migration messages: charged to old Solution Partner
- Post-migration messages: charged to business customer

## Tech Provider Steps

### Step 1: Tag WABA for Migration

```
POST /<WABA_ID>/set_solution_migration_intent
{
  "solution_id": "<DESTINATION_MPS_ID>"
}
```

### Step 2: Disable Two-Step Verification

Customer must disable 2FA on phone number via WhatsApp Manager.

### Step 3: Customer Completes Embedded Signup

Customer uses destination Solution Partner's Embedded Signup with existing business portfolio, creates new WABA, enters existing phone number (triggers migration warning).

## Solution Partner Steps

Provide Embedded Signup link configured with MPS ID. Onboard customer normally upon completion.

## Related Concepts
- [[wiki/concepts/solution-partners]]
- [[wiki/concepts/embedded-signup]]
