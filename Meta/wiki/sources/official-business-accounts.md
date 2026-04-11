---
type: source
title: Official Business Accounts
source_file: "[Official Business Accounts  Developer Documentation](Official Business Accounts  Developer Documentation.md)"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/official-business-accounts
ingested: 2026-04-05
tags:
  - oba
  - verification
  - blue-checkmark
---

## Summary

An Official Business Account (OBA) is a verified business phone number that displays a blue checkmark in WhatsApp contacts. OBA status signifies the business is authentic and notable. Businesses can request OBA via WhatsApp Manager or API, with approval based on notability criteria.

## Key Points

- **Blue checkmark** displayed beside business name in contacts
- **Notability required**: Must be well-known, frequently searched brand
- **30-day wait** before reapplying if denied
- **Not granted to**: employees, test accounts, WhatsApp Business app numbers
- **Non-OBA numbers** don't appear in WhatsApp search results

## Eligibility Criteria

1. Comply with WhatsApp Business Messaging Policy
2. Registered on platform for at least 30 days
3. Represent a notable, well-known brand
4. Business portfolio verified through Business Verification
5. Two-step verification enabled on phone number
6. Display name approved

## Notability

- Based on presence in news articles from major publications
- Paid/promotional content not considered
- Previous OBA approvals don't guarantee approval for other numbers
- For sub-brands: use format `{{sub-brand}} by {{notable parent}}`

## Request Methods

### Via WhatsApp Manager
1. WhatsApp Manager > Overview > select phone number
2. Enable two-step verification
3. Click Submit Request, provide supporting links (up to 5)

### Via API
```
POST /<PHONE_NUMBER_ID>/official_business_account
```
Body includes: `supporting_links`, `business_website_url`, `parent_business_or_brand`, `primary_country_of_operation`

### Check Status
```
GET /<PHONE_NUMBER_ID>?fields=official_business_account
```
Returns `oba_status`: `NOT_STARTED`, `PENDING`, `APPROVED`, `REJECTED`

## Related Concepts
- [business-verification](business-verification.md)

## Related Entities
- [official-business-account](official-business-account.md)
- [whatsapp-business-account](whatsapp-business-account.md)
- [display-name](display-name.md)
