---
type: source
title: "Managing Credit Lines"
source_file: "[[raw/Managing credit lines  Developer Documentation.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/share-and-revoke-credit-lines"
ingested: 2026-04-05
tags: [billing, credit-lines, solution-partners]
---

## Summary

Solution Partners share credit lines with onboarded customers. Partners are liable for all spend on their credit line.

## Requirements

- System user access token
- business_management permission
- Admin or Financial Editor role on business portfolio

## Get Credit Line ID

```
GET /<BUSINESS_ID>/extendedcredits
```

## Share Credit Line (Simple Method)

```
POST /<EXTENDED_CREDIT_LINE_ID>/whatsapp_credit_sharing_and_attach
?waba_currency=<CURRENCY>&waba_id=<WABA_ID>
```

Supported currencies: AUD, EUR, GBP, IDR, INR, USD

## Share Credit Line (Alternate Method)

1. Get customer business portfolio ID via `owner_business_info` field
2. Share intent: `POST /<CREDIT_ID>/whatsapp_credit_sharing`
3. Attach: `POST /<CREDIT_ID>/whatsapp_credit_attach`

**Note**: Credit lines cannot be changed after attachment. New WABA required.

## Verify Sharing

Compare `receiving_credential.id` with WABA's `primary_funding_id`.

## Revoke Credit Line

1. Get credit line ID
2. Get customer business portfolio ID
3. Get allocation config ID
4. Delete: `DELETE /<ALLOCATION_CONFIG_ID>`

## Related Concepts
- [[wiki/concepts/solution-partners]]
