---
type: query
title: "How does partner-led business verification work?"
asked: 2026-04-10
tags: [verification, partners, onboarding, certification]
---

## Question

How does partner-led business verification work?

## Answer

Solution Partners can submit business verification on behalf of their onboarded customers, significantly reducing verification time.

### Requirements

- **Partner status**: Select or Premier Solution Partner
- **Permission**: System user access token with `business_management` permission
- **Customer data**: Customer's business portfolio ID and supporting documents

### Key Advantage

| Method | Typical Turnaround |
|--------|-------------------|
| Self-verification | Days |
| Partner-led verification | ~5 minutes (max 24 hours) |

### Limitations

- Maximum 3 submissions per customer
- If all 3 are rejected, customer must self-verify

### API Workflow

#### Submit Verification

```
POST /<YOUR_BUSINESS_PORTFOLIO_ID>/self_certify_whatsapp_business
-F 'end_business_id="<CUSTOMER_BUSINESS_PORTFOLIO_ID>"'
-F 'business_documents[]=@"<DOCUMENT_PATH>"'
```

#### Check Status

```
GET /<BUSINESS_PORTFOLIO_ID>/self_certified_whatsapp_business_submissions
```

### Webhook Notification

The `account_update` webhook fires with event `PARTNER_CLIENT_CERTIFICATION_STATUS_UPDATE`:

| Status | Meaning |
|--------|---------|
| `APPROVED` | Verification successful |
| `FAILED` | Rejected (includes `rejection_reasons`) |

### Process Flow

1. Customer completes Embedded Signup with your app
2. You submit verification request with business documents
3. Meta reviews (typically 5 minutes)
4. `account_update` webhook fires with result
5. If approved, customer's business portfolio is verified
6. If rejected, review reasons and resubmit (up to 3 total attempts)

## References

- [partner-led-verification](../sources/partner-led-verification.md)
- [account-update-webhook-reference](../sources/account-update-webhook-reference.md)
- [business-verification](../concepts/business-verification.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification
