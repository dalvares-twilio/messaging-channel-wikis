---
type: query
title: "How do I apply for Official Business Account (OBA) status?"
asked: 2026-04-10
tags: [oba, verification, blue-checkmark, application]
---

## Question

How do I apply for Official Business Account (OBA) status?

## Answer

Official Business Account (OBA) status grants a blue checkmark beside your business name in WhatsApp contacts, signifying authenticity and notability.

### Prerequisites

Before applying, ensure:
1. Comply with WhatsApp Business Messaging Policy
2. Registered on platform for at least 30 days
3. Business portfolio verified through Meta Business Verification
4. Two-step verification enabled on the phone number
5. Display name approved
6. Business is notable and well-known

### Method 1: Via WhatsApp Manager

1. Navigate to WhatsApp Manager > Overview
2. Select the phone number
3. Enable two-step verification
4. Click "Submit Request"
5. Provide supporting links (up to 5)

### Method 2: Via API

```
POST /<PHONE_NUMBER_ID>/official_business_account
```

Request body includes:
- `supporting_links` - URLs proving notability
- `business_website_url` - Official website
- `parent_business_or_brand` - If sub-brand
- `primary_country_of_operation` - Main market

### Check Application Status

```
GET /<PHONE_NUMBER_ID>?fields=official_business_account
```

Returns `oba_status`:
| Status | Meaning |
|--------|---------|
| `NOT_STARTED` | No application submitted |
| `PENDING` | Application under review |
| `APPROVED` | OBA granted (blue checkmark) |
| `REJECTED` | Application denied |

### Notability Criteria

- Presence in news articles from major publications
- Paid/promotional content does not count
- Previous OBA approvals don't guarantee new approvals
- Sub-brands: use format `{{sub-brand}} by {{notable parent}}`

### Important Notes

- **30-day wait** before reapplying if denied
- **Not granted to**: employees, test accounts, WhatsApp Business app numbers
- **Non-OBA numbers** don't appear in WhatsApp search results
- Monitor `account_alerts` webhook for `OBA_APPROVED` or `OBA_REJECTED`

## References

- [official-business-accounts](../sources/official-business-accounts.md)
- [account-alerts-webhook-reference](../sources/account-alerts-webhook-reference.md)
- [official-business-account](../entities/official-business-account.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/official-business-accounts
