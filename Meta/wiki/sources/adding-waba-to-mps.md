---
type: source
title: "Adding WABA to Multi-Partner Solution"
source_file: "[Adding a WABA to a Multi-Partner Solution.md](../../raw/Adding a WABA to a Multi-Partner Solution.md)"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/adding-waba-to-mps"
ingested: 2026-04-05
tags: [multi-partner-solutions, waba, migration]
---

## Summary

Solution Partners can designate existing WABAs as eligible for a Multi-Partner Solution, granting permissions to Tech Providers.

## Requirements

- WABA must have been onboarded by you
- WABA cannot already be part of an active solution
- Destination solution must be active

## Check Ownership

```
GET /<WABA_ID>?fields=ownership_type
```

Values: `ON_BEHALF_OF` (you own) or `CLIENT_OWNED` (customer owns)

## Step 1: Set Migration Intent

```
POST /<WABA_ID>/set_solution_migration_intent
{
  "solution_id": "<DESTINATION_MPS_ID>"
}
```

Returns: migration_intent_id

Sends confirmation request to WABA owner.

## Step 2: Customer Confirms

Customer accepts via Meta Business Suite > Settings > Requests > Received tab.

**Auto-confirm**: If not completed within 90 days, acceptance happens automatically.

## Related Concepts
- [solution-partners](../concepts/solution-partners.md)
