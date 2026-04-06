---
type: source
title: "Install Apps and Generate Tokens"
source_file: "[[raw/Install Apps and Generate Tokens.md]]"
source_url: "https://developers.facebook.com/docs/business-management-apis/system-users/install-apps-and-generate-tokens"
ingested: 2026-04-05
tags: [system-users, tokens, api]
---

## Summary

How to install apps on system users and generate, refresh, and revoke access tokens.

## Token Types

| Type | Lifetime | Refresh Needed |
|------|----------|----------------|
| Non-expiring | Never expires | No |
| Expiring | 60 days | Yes |

## Install App

```
POST /<SYSTEM_USER_ID>/applications
-F "business_app=<APP_ID>"
-F "access_token=<ADMIN_TOKEN>"
```

Both system user and app must belong to same Business Manager.

## Generate Access Token

```
POST /<SYSTEM_USER_ID>/access_tokens
-F "business_app=<APP_ID>"
-F "scope=<PERMISSIONS>"
-F "appsecret_proof=<HASH>"
-F "access_token=<ADMIN_TOKEN>"
```

For expiring token, add: `-F "set_token_expires_in_60_days=true"`

## WhatsApp-Relevant Scopes

- `whatsapp_business_management`
- `whatsapp_business_messaging`
- `business_management`

## Refresh Token (Expiring Only)

```
GET /oauth/access_token
?grant_type=fb_exchange_token
&client_id=<APP_ID>
&client_secret=<APP_SECRET>
&set_token_expires_in_60_days=true
&fb_exchange_token=<CURRENT_TOKEN>
```

Must refresh within 60 days or token is forfeited.

## Revoke Token

```
GET /oauth/revoke
?client_id=<APP_ID>
&client_secret=<APP_SECRET>
&revoke_token=<TOKEN_TO_REVOKE>
&access_token=<YOUR_TOKEN>
```

## Token Rotation (No Downtime)

1. Refresh token (old still works until expiry)
2. Deploy new token
3. Revoke old token

## Related Sources
- [[wiki/sources/create-retrieve-update-system-user]]
- [[wiki/sources/system-user-permissions]]
