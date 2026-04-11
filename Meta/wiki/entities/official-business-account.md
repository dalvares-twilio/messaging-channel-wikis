---
type: entity
title: "Official Business Account (OBA)"
entity_type: verification-status
---

## Description

Official Business Account (OBA) status grants a blue checkmark to verified, notable business phone numbers. OBA numbers appear in WhatsApp search results; non-OBA numbers do not.

## Visual Indicator

Blue checkmark beside business name in WhatsApp contacts view.

## Eligibility Requirements

1. Comply with WhatsApp Business Messaging Policy
2. Registered on platform 30+ days
3. Notable, well-known brand
4. Business portfolio verified
5. Two-step verification enabled
6. Display name approved

## Status Values

| Status | Meaning |
|--------|---------|
| `NOT_STARTED` | No request submitted |
| `PENDING` | Under review |
| `APPROVED` | OBA granted |
| `REJECTED` | Denied (30-day wait to reapply) |

## API Reference

### Request OBA
```
POST /<PHONE_NUMBER_ID>/official_business_account
{
  "supporting_links": ["url1", "url2"],
  "business_website_url": "https://...",
  "parent_business_or_brand": "...",
  "primary_country_of_operation": "..."
}
```

### Check Status
```
GET /<PHONE_NUMBER_ID>?fields=official_business_account
```

## Notability Tips

- Provide up to 5 supporting links from major publications
- For sub-brands: `{{sub-brand}} by {{notable parent}}`
- Paid/promotional content not considered

## Related Concepts
- [business-verification](business-verification.md)

## Related Entities
- [whatsapp-business-account](whatsapp-business-account.md)
- [display-name](display-name.md)

## Sources
- [official-business-accounts](official-business-accounts.md)
