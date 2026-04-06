---
type: source
title: "account_update Webhook Reference"
source_file: "[[raw/account_update webhook reference  Developer Documentation.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_update"
ingested: 2026-04-05
tags: [webhooks, account, reference, payload]
---

## Summary

The `account_update` webhook notifies of WABA-level changes including partner verification, policy violations, restrictions, pricing tier updates, and offboarding/reconnection events.

## Event Types

| Event | Description |
|-------|-------------|
| `ACCOUNT_DELETED` | WABA was deleted |
| `ACCOUNT_RESTRICTION` | WABA restricted due to policy violations |
| `ACCOUNT_VIOLATION` | WABA violated Meta policies |
| `ACCOUNT_OFFBOARDED` | WABA offboarded (device change/reregistration) |
| `ACCOUNT_RECONNECTED` | WABA reconnected after offboarding |
| `PARTNER_ADDED` | WABA shared with Solution Partner |
| `PARTNER_REMOVED` | WABA unshared with Solution Partner |
| `PARTNER_APP_INSTALLED` | Business granted app permissions |
| `PARTNER_APP_UNINSTALLED` | Business deauthenticated app |
| `PARTNER_CLIENT_CERTIFICATION_STATUS_UPDATE` | Partner-led verification status |
| `DISABLED_UPDATE` | WABA ban state changed |
| `VOLUME_BASED_PRICING_TIER_UPDATE` | Pricing tier updated |
| `AUTH_INTL_PRICE_ELIGIBILITY_UPDATE` | Auth-intl rate eligibility |
| `BUSINESS_PRIMARY_LOCATION_COUNTRY_UPDATE` | Primary location set |

## Restriction Types

| Restriction | Effect |
|-------------|--------|
| `RESTRICTED_BIZ_INITIATED_MESSAGING` | Cannot initiate conversations |
| `RESTRICTED_CUSTOMER_INITIATED_MESSAGING` | Cannot respond to customers |
| `RESTRICTED_ADD_PHONE_NUMBER_ACTION` | Cannot add new phone numbers |
| `RESTRICTED_UTILITY_TEMPLATES` | Cannot create utility templates |

## Violation Types

See policy enforcement documentation for values like `ADULT`, `ALCOHOL`, `SCAM`, etc.

## Related Concepts
- [[wiki/concepts/webhooks]]
- [[wiki/concepts/webhook-fields]]

## Related Entities
- [[wiki/entities/whatsapp-business-account]]
