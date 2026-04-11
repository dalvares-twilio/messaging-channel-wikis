---
type: source
title: "System User Permissions"
source_file: "[System User Permissions.md](../../raw/System User Permissions.md)"
source_url: "https://developers.facebook.com/docs/business-management-apis/system-users/guides/permissions"
ingested: 2026-04-05
tags: [system-users, permissions, api]
---

## Summary

Assign and retrieve system user permissions on ad accounts, pages, and proxied assets.

## Assign to Ad Account

```
POST /act_<AD_ACCOUNT_ID>/assigned_users
-F "user=<SYSTEM_USER_ID>"
-F "tasks=['MANAGE', 'ADVERTISE', 'ANALYZE']"
-F "business=<BUSINESS_ID>"
```

### Ad Account Tasks

| Task | Access Level |
|------|--------------|
| `MANAGE` | Full control |
| `ADVERTISE` | Create/edit ads |
| `ANALYZE` | View reports |

## Assign to Page

```
POST /<PAGE_ID>/assigned_users
-F "user=<SYSTEM_USER_ID>"
-F "tasks=['ADVERTISE', 'ANALYZE']"
```

### Page Tasks

| Task | Access Level |
|------|--------------|
| `MANAGE` | Full control |
| `CREATE_CONTENT` | Post content |
| `MODERATE` | Respond to comments |
| `ADVERTISE` | Create ads |
| `ANALYZE` | View insights |

## Retrieve Permissions

```
GET /<SYSTEM_USER_ID>?fields=email,assigned_ad_accounts,assigned_pages
```

## Proxied Assets

System users can access assets owned by other Business Managers if access has been granted between businesses.

## Related Sources
- [create-retrieve-update-system-user](../sources/create-retrieve-update-system-user.md)
- [manage-system-users](../sources/manage-system-users.md)
