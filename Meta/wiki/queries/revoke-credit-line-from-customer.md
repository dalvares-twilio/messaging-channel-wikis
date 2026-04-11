---
type: query
title: "How do I revoke a credit line from a customer?"
asked: 2026-04-10
tags: [billing, credit-lines, solution-partners]
---

## Question

How do I revoke a credit line that I previously shared with a customer's WABA?

## Answer

Revoking a credit line requires a multi-step process:

### Step 1: Get Your Credit Line ID

```
GET /<BUSINESS_ID>/extendedcredits
```

### Step 2: Get Customer's Business Portfolio ID

You need to identify which customer business you're revoking from. Use the `owner_business_info` field when querying the WABA.

### Step 3: Get Allocation Config ID

Query the credit line to find the specific allocation config for this customer.

### Step 4: Delete the Allocation

```
DELETE /<ALLOCATION_CONFIG_ID>
```

### Verifying the Revocation

After revoking, verify by checking that the WABA's `primary_funding_id` no longer matches your `receiving_credential.id`.

### Before Revoking

Consider the implications:
- The customer's WABA will no longer be able to send paid messages
- They will need to set up their own payment method or attach to another credit line
- **Remember**: Credit lines cannot be re-attached to the same WABA - a new WABA would be required

## References

- [managing-credit-lines](../sources/managing-credit-lines.md)
- [solution-partners](../concepts/solution-partners.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/share-and-revoke-credit-lines
