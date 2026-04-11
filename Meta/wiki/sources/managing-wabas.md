---
type: source
title: "Managing WhatsApp Business Accounts"
source_file: "[Managing WhatsApp Business Accounts.md](../../raw/Managing WhatsApp Business Accounts.md)"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/manage-accounts"
ingested: 2026-04-05
tags: [waba, management, api]
---

## Summary

API endpoints for managing customer WABAs after Embedded Signup completion.

## Get Shared WABA ID

After signup, use Debug Token endpoint:
```
GET /debug_token?input_token=<TOKEN_FROM_SIGNUP>
```
WABA ID is first item in `granular_scopes[].target_ids` for `whatsapp_business_management`.

## List Client WABAs

```
GET /<BUSINESS_MANAGER_ID>/client_whatsapp_business_accounts
```

## List Owned WABAs

```
GET /<BUSINESS_MANAGER_ID>/owned_whatsapp_business_accounts
```

## Filter/Sort by Creation Time

- Filter: `?filtering=[{"field":"creation_time","operator":"GREATER_THAN","value":"<TIMESTAMP>"}]`
- Sort: `?sort=creation_time_ascending`

## Get Review Status

```
GET /<WABA_ID>?fields=account_review_status
```
Values: `PENDING`, `APPROVED`, `REJECTED`

## Solution Partner Permissions

- Add phone numbers
- Create templates
- Send messages
- Assign users
- Access metrics
- View payment info

## Related Entities
- [whatsapp-business-account](../entities/whatsapp-business-account.md)
