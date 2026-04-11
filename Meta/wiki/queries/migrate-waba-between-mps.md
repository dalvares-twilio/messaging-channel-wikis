---
type: query
title: "How do I migrate a WABA between Multi-Partner Solutions?"
asked: 2026-04-10
tags: [migration, multi-partner-solutions, waba]
---

## Question

How can a Tech Provider migrate a customer's WABA from one Multi-Partner Solution to another?

## Answer

Tech Providers can migrate customer WABAs between MPS using the API and Embedded Signup. This creates a **new WABA**, duplicates templates, and grants access to the destination Solution Partner.

### Requirements

- Source and destination apps must be in the **same business portfolio**
- Destination solution must be **Active**

### Template Handling

- Only `APPROVED` + `GREEN` quality templates are duplicated
- Templates are re-checked for categorization (may become `REJECTED`)
- Quality ratings reset to `UNKNOWN` for 24 hours

### Billing Impact

- **Pre-migration** messages: charged to old Solution Partner
- **Post-migration** messages: charged to business customer (until new credit line attached)

### Tech Provider Steps

#### Step 1: Tag WABA for Migration

```http
POST /<WABA_ID>/set_solution_migration_intent
{
  "solution_id": "<DESTINATION_MPS_ID>"
}
```

#### Step 2: Disable Two-Step Verification

Customer must disable 2FA on phone number via WhatsApp Manager.

#### Step 3: Customer Completes Embedded Signup

Customer uses destination Solution Partner's Embedded Signup:
- Uses existing business portfolio
- Creates new WABA
- Enters existing phone number (triggers migration warning)

### Solution Partner Steps

1. Provide Embedded Signup link configured with MPS ID
2. Onboard customer normally upon completion

## References

- [migrate-waba-between-mps-embedded-signup](../sources/migrate-waba-between-mps-embedded-signup.md)
- [multi-partner-solutions](../sources/multi-partner-solutions.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/migrating-wabas-among-solutions-via-embedded-signup
