---
type: source
title: "System User API Call Examples"
source_file: "[System User API Call Examples.md](../../raw/System User API Call Examples.md)"
source_url: "https://developers.facebook.com/docs/business-management-apis/system-users/guides/api-calls"
ingested: 2026-04-05
tags: [system-users, api, examples]
---

## Summary

Examples of making automated API calls using system user tokens.

## Basic Pattern

Use system user token instead of user token — endpoint syntax unchanged:

```
GET /act_<AD_ACCOUNT_ID>/?access_token=<SYSTEM_USER_TOKEN>
```

## Marketing API

Standard Marketing API calls work with system user tokens for automated server-to-server operations.

## Pages API

Retrieve page access token using system user token:

```
GET /me/accounts?access_token=<SYSTEM_USER_TOKEN>
```

Response includes page access tokens with assigned tasks:

```json
{
  "data": [{
    "name": "Test App Page",
    "access_token": "<PAGE_ACCESS_TOKEN>",
    "tasks": ["ANALYZE"],
    "id": "<PAGE_ID>"
  }]
}
```

## Key Notes

- `me` refers to system user when using system user token
- Requires `pages_read_engagement` permission for page token retrieval
- Page endpoint calls unchanged — just use retrieved page token

## Related Sources
- [install-apps-generate-tokens](../sources/install-apps-generate-tokens.md)
- [system-user-permissions](../sources/system-user-permissions.md)
