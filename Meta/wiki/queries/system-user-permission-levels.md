---
type: query
title: "What permission levels can system users have on a WABA?"
asked: 2026-04-10
tags: [system-users, permissions, waba]
---

## Question

What are the different permission levels for system users on a WhatsApp Business Account, and what can each level do?

## Answer

System users can have two main permission levels on a WABA:

### Basic Permission Levels

| Permission | Description |
|------------|-------------|
| `MANAGE` | Admin access with full control |
| `DEVELOP` | Developer access with standard permissions |

### Granular Tasks (Multi-Partner Solutions)

For Multi-Partner Solutions where the system user doesn't have `MESSAGING` permission, you can assign granular tasks:

| Task | Description |
|------|-------------|
| `DEVELOP` | Basic development access |
| `MANAGE_TEMPLATES` | Create/edit message templates |
| `MANAGE_PHONE` | Manage phone numbers |
| `VIEW_COST` | View cost/billing data |
| `MANAGE_EXTENSIONS` | Manage extensions |
| `VIEW_PHONE_ASSETS` | View phone assets |
| `MANAGE_PHONE_ASSETS` | Manage phone assets |
| `VIEW_TEMPLATES` | View templates (read-only) |
| `VIEW_INSIGHTS` | View analytics/insights |
| `MANAGE_USERS` | Manage user access |
| `MANAGE_BILLING` | Required for credit line sharing |

### API to Add System User

```
POST /<WABA_ID>/assigned_users
?user=<SYSTEM_USER_ID>&tasks=['MANAGE']
```

Requires an admin system user access token.

## References

- [manage-system-users](../sources/manage-system-users.md)
- [system-user-permissions](../sources/system-user-permissions.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/manage-system-users
