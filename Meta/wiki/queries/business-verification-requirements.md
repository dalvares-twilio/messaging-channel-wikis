---
type: query
title: "What are the requirements for business verification on WhatsApp?"
asked: 2026-04-10
tags: [verification, business, oba, requirements]
---

## Question

What are the requirements for business verification on WhatsApp?

## Answer

Business verification involves verifying a business portfolio (formerly Business Manager) with Meta. There are two levels: basic business verification and Official Business Account (OBA) status.

### Basic Business Verification

Business portfolio verification is required for:
- Accessing certain platform features
- OBA eligibility
- Partner-led verification benefits

Status is returned via WABA API as `business_verification_status`:
- `verified` - verification complete
- `pending` - verification in progress

### Official Business Account (OBA) Requirements

To be eligible for the blue checkmark OBA status:

1. **Policy compliance**: Comply with WhatsApp Business Messaging Policy
2. **Platform tenure**: Registered on platform for at least 30 days
3. **Notability**: Represent a notable, well-known brand
4. **Business verification**: Business portfolio verified through Meta Business Verification
5. **Two-step verification**: Enabled on the phone number
6. **Display name**: Display name approved

### Notability Criteria

- Based on presence in news articles from major publications
- Paid/promotional content not considered
- Previous OBA approvals don't guarantee approval for other numbers
- Sub-brands: use format `{{sub-brand}} by {{notable parent}}`

### Partner-Led Verification

Solution Partners (Select or Premier) can submit verification on behalf of customers:
- Maximum 3 submissions per customer
- Average turnaround: 5 minutes (vs days for self-verification)
- If all rejected, customer must self-verify

### OBA Denial

- 30-day wait before reapplying if denied
- Not granted to: employees, test accounts, WhatsApp Business app numbers
- Non-OBA numbers don't appear in WhatsApp search results

## References

- [business-verification](../concepts/business-verification.md)
- [official-business-accounts](../sources/official-business-accounts.md)
- [partner-led-verification](../sources/partner-led-verification.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/official-business-accounts
