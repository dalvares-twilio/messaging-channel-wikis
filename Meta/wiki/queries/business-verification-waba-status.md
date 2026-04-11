---
type: query
title: "How do I check if my business portfolio is verified for WABA?"
asked: 2026-04-10
tags:
  - business-verification
  - waba
  - api
---

## Question

How do I check the business verification status of my WhatsApp Business Account, and why does it matter?

## Answer

Business verification status can be checked via the WABA API and is important for several platform features.

**Check verification status:**
```
GET /<WABA_ID>?fields=business_verification_status
```

**Status values:**
- `verified` — Business verification complete
- `pending` — Verification in progress
- Other values indicate issues requiring attention

**Why business verification matters:**

1. **OBA Eligibility** — Required for Official Business Account (blue checkmark) status
2. **Messaging Limits** — May affect your messaging tier/limits
3. **Feature Access** — Some platform features require verified businesses

**Full WABA info query:**
```
GET /<WABA_ID>?fields=name,status,currency,country,business_verification_status
```

**Related WABA properties:**
| Field | Description |
|-------|-------------|
| `name` | WABA display name |
| `status` | Account status (`ACTIVE`, `INACTIVE`, etc.) |
| `currency` | Payment currency (locked after credit line) |
| `country` | Country code |
| `business_verification_status` | Verification state |

**Note:** WABA currency and time zone are locked once a credit line is attached, and WABAs cannot be migrated between businesses after credit line attachment.

## References

- [whatsapp-business-accounts](../sources/whatsapp-business-accounts.md)
- [official-business-accounts](../sources/official-business-accounts.md)
- [business-verification](../concepts/business-verification.md)
- [whatsapp-business-account](../entities/whatsapp-business-account.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/whatsapp-business-accounts
