---
type: source
title: "Manage System Users"
source_file: "[Manage System Users  Developer Documentation.md](../../raw/Manage System Users  Developer Documentation.md)"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/manage-system-users"
ingested: 2026-04-05
tags: [system-users, permissions, management]
---

## Summary

System users enable programmatic management of shared WABAs.

## Retrieve System User IDs

```
GET /<WABA_ID>/system_users
```

## Add System User to WABA

Requires admin system user access token.

```
POST /<WABA_ID>/assigned_users
?user=<SYSTEM_USER_ID>&tasks=['<TASKS>']
```

## Permission Levels

| Permission | Description |
|------------|-------------|
| `MANAGE` | Admin access (full control) |
| `DEVELOP` | Developer access (standard permissions) |

## Granular Tasks

For Multi-Partner Solutions without `MESSAGING` permission:
- `DEVELOP`
- `MANAGE_TEMPLATES`
- `MANAGE_PHONE`
- `VIEW_COST`
- `MANAGE_EXTENSIONS`
- `VIEW_PHONE_ASSETS`
- `MANAGE_PHONE_ASSETS`
- `VIEW_TEMPLATES`
- `VIEW_INSIGHTS`
- `MANAGE_USERS`
- `MANAGE_BILLING` (required for credit line sharing)

## Retrieve Assigned Users

```
GET /<WABA_ID>/assigned_users?business=<WABA_ID>
```

## Related Concepts
- [solution-partners](../concepts/solution-partners.md)
