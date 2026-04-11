---
type: source
title: "Partner-led Business Verification"
source_file: "[Partner-led Business Verification  Developer Documentation.md](../../raw/Partner-led Business Verification  Developer Documentation.md)"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification"
ingested: 2026-04-05
tags: [verification, partners, onboarding]
---

## Summary

Solution Partners can submit business verification on behalf of onboarded customers. Decisions typically in 5 minutes vs days for self-verification.

## Requirements

- Select or Premier Solution Partner status
- System user access token with business_management permission
- Customer's business portfolio ID

## Limitations

- 3 submissions max per customer
- If all rejected, customer must self-verify

## Submit Verification

```
POST /<YOUR_BUSINESS_PORTFOLIO_ID>/self_certify_whatsapp_business
-F 'end_business_id="<CUSTOMER_BUSINESS_PORTFOLIO_ID>"'
-F 'business_documents[]=@"<DOCUMENT_PATH>"'
```

## Webhook Notification

`account_update` with `PARTNER_CLIENT_CERTIFICATION_STATUS_UPDATE`:
- `APPROVED` — Verified
- `FAILED` — Rejected (with rejection_reasons)

## Get Status

```
GET /<BUSINESS_PORTFOLIO_ID>/self_certified_whatsapp_business_submissions
```

## Turnaround Time

- Average: 5 minutes
- Maximum: 24 hours

## Related Concepts
- [business-verification](../concepts/business-verification.md)
- [solution-partners](../concepts/solution-partners.md)
