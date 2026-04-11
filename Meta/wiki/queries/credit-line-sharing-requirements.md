---
type: query
title: "What are the requirements for sharing a credit line with a customer?"
asked: 2026-04-10
tags: [billing, credit-lines, solution-partners]
---

## Question

As a Solution Partner, what do I need to share my credit line with a customer's WABA?

## Answer

### Requirements

1. **System user access token** with appropriate permissions
2. **`business_management` permission** on the token
3. **Admin or Financial Editor role** on your business portfolio
4. **`MANAGE_BILLING` task** assigned to the system user (for granular permissions)

### Supported Currencies

Credit lines support these currencies:
- AUD (Australian Dollar)
- EUR (Euro)
- GBP (British Pound)
- IDR (Indonesian Rupiah)
- INR (Indian Rupee)
- USD (US Dollar)

### Simple Sharing Method

```
POST /<EXTENDED_CREDIT_LINE_ID>/whatsapp_credit_sharing_and_attach
?waba_currency=<CURRENCY>&waba_id=<WABA_ID>
```

### Important Warning

**Credit lines cannot be changed after attachment.** If you need to change the credit line, you must create a new WABA.

### Getting Your Credit Line ID

```
GET /<BUSINESS_ID>/extendedcredits
```

### Liability Note

As a Solution Partner, you are liable for **all spend** on your credit line by customers you've shared it with. Monitor usage carefully.

## References

- [managing-credit-lines](../sources/managing-credit-lines.md)
- [solution-partners](../concepts/solution-partners.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/share-and-revoke-credit-lines
