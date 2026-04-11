---
type: query
title: "How do I add an existing WABA to a Multi-Partner Solution?"
asked: 2026-04-10
tags: [multi-partner-solutions, waba, partners]
---

## Question

How can a Solution Partner add an already-onboarded WABA to a Multi-Partner Solution?

## Answer

Solution Partners can designate existing WABAs as eligible for a Multi-Partner Solution, granting permissions to Tech Providers.

### Requirements

- WABA must have been **onboarded by you** (the Solution Partner)
- WABA **cannot already be part of an active solution**
- Destination solution must be **active**

### Step 1: Check WABA Ownership

```http
GET /<WABA_ID>?fields=ownership_type
```

Returns:
- `ON_BEHALF_OF` — You own the WABA
- `CLIENT_OWNED` — Customer owns the WABA

### Step 2: Set Migration Intent

```http
POST /<WABA_ID>/set_solution_migration_intent
{
  "solution_id": "<DESTINATION_MPS_ID>"
}
```

Returns a `migration_intent_id`.

This sends a confirmation request to the WABA owner.

### Step 3: Customer Confirms

Customer accepts via:

**Meta Business Suite > Settings > Requests > Received tab**

### Auto-Confirmation

If not completed within **90 days**, acceptance happens automatically.

## References

- [adding-waba-to-mps](../sources/adding-waba-to-mps.md)
- [multi-partner-solutions](../sources/multi-partner-solutions.md)
- [solution-partners](../concepts/solution-partners.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/adding-waba-to-mps
