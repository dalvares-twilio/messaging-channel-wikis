---
type: query
title: "How do I migrate a customer off a Multi-Partner Solution?"
asked: 2026-04-10
tags: [migration, multi-partner-solutions, offboarding]
---

## Question

How can a Tech Provider migrate a customer off a Multi-Partner Solution so they operate independently?

## Answer

Tech Providers can migrate customers off MPS to operate independently using Embedded Signup. The phone number does **not** need to be re-verified.

### Requirements

- App must be approved for `whatsapp_business_management` permission

### Template Handling

- Templates are duplicated to new WABA if customer creates one
- Only `APPROVED` + `GREEN` quality templates are duplicated
- Quality ratings reset to `UNKNOWN`

### Migration Steps

#### Step 1: Disable Two-Step Verification

Customer must disable 2FA on the phone number via WhatsApp Manager.

#### Step 2: Tag WABA for Migration

```http
POST /<WABA_ID>/set_solution_migration_intent
{
  "app_id": "<YOUR_APP_ID>"
}
```

Note: Use `app_id` instead of `solution_id` when migrating off MPS.

#### Step 3: Customer Completes Embedded Signup

Customer enters their existing phone number in your Embedded Signup flow.

#### Step 4: Exchange Token

```http
GET /oauth/access_token
  ?client_id=<APP_ID>
  &client_secret=<APP_SECRET>
  &code=<CODE>
```

#### Step 5: Subscribe to Webhooks

```http
POST /<WABA_ID>/subscribed_apps
Authorization: Bearer <BUSINESS_TOKEN>
```

#### Step 6: Register Phone Number

```http
POST /<PHONE_ID>/register
{
  "messaging_product": "whatsapp",
  "pin": "<6_DIGIT_PIN>"
}
```

### Customer Requirements

> **Important**: Customer must add a payment method after migration. They cannot send template messages until payment is configured.

WhatsApp Manager > Overview > Add payment method

## References

- [migrate-customer-off-mps-embedded-signup](../sources/migrate-customer-off-mps-embedded-signup.md)
- [multi-partner-solutions](../sources/multi-partner-solutions.md)
- [solution-partners](../concepts/solution-partners.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/migrating-customers-off-solutions-via-embedded-signup
