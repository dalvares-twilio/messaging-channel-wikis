---
type: query
title: "What events trigger the account_update webhook?"
asked: 2026-04-10
tags: [webhooks, account, violations, restrictions]
---

## Question

What events trigger the account_update webhook?

## Answer

The `account_update` webhook notifies of WABA-level changes including partner events, policy violations, restrictions, and pricing updates.

### Event Types

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

### Restriction Types

When `ACCOUNT_RESTRICTION` occurs, the payload includes the restriction type:

| Restriction | Effect |
|-------------|--------|
| `RESTRICTED_BIZ_INITIATED_MESSAGING` | Cannot initiate conversations |
| `RESTRICTED_CUSTOMER_INITIATED_MESSAGING` | Cannot respond to customers |
| `RESTRICTED_ADD_PHONE_NUMBER_ACTION` | Cannot add new phone numbers |
| `RESTRICTED_UTILITY_TEMPLATES` | Cannot create utility templates |

### Violation Types

When `ACCOUNT_VIOLATION` occurs, the payload indicates violation categories such as `ADULT`, `ALCOHOL`, `SCAM`, etc. See Meta's policy enforcement documentation for the full list.

## References

- [account-update-webhook-reference](../sources/account-update-webhook-reference.md)
- [whatsapp-business-account](../entities/whatsapp-business-account.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_update
