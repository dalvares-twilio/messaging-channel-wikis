---
type: query
title: "Do system user access tokens expire?"
asked: 2026-04-10
tags: [system-users, tokens, authentication]
---

## Question

Do system user access tokens expire? How do I handle token rotation without downtime?

## Answer

System user access tokens come in two types:

| Token Type | Lifetime | Refresh Needed |
|------------|----------|----------------|
| Non-expiring | Never expires | No |
| Expiring | 60 days | Yes |

### Generating Expiring Tokens

Add this parameter when generating:
```
-F "set_token_expires_in_60_days=true"
```

### Refreshing Expiring Tokens

```
GET /oauth/access_token
?grant_type=fb_exchange_token
&client_id=<APP_ID>
&client_secret=<APP_SECRET>
&set_token_expires_in_60_days=true
&fb_exchange_token=<CURRENT_TOKEN>
```

**Important**: Must refresh within 60 days or the token is permanently forfeited.

### Zero-Downtime Token Rotation

1. **Refresh token** - old token still works until its expiry
2. **Deploy new token** - update your application
3. **Revoke old token** - clean up

### Revoking Tokens

```
GET /oauth/revoke
?client_id=<APP_ID>
&client_secret=<APP_SECRET>
&revoke_token=<TOKEN_TO_REVOKE>
&access_token=<YOUR_TOKEN>
```

### Invalidating All Tokens

If you need to invalidate ALL tokens for a system user (e.g., security incident):

```
DELETE /<SYSTEM_USER_ID>/access_tokens
```

Note: You cannot delete a system user, but you can invalidate all their tokens.

## References

- [install-apps-generate-tokens](../sources/install-apps-generate-tokens.md)
- [create-retrieve-update-system-user](../sources/create-retrieve-update-system-user.md)
- Source URL: https://developers.facebook.com/docs/business-management-apis/system-users/install-apps-and-generate-tokens
