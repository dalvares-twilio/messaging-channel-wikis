---
type: source
title: "Create, Retrieve, and Update System Users"
source_file: "[[raw/Create, Retrieve, and Update a System User.md]]"
source_url: "https://developers.facebook.com/docs/business-management-apis/system-users/create-retrieve-update"
ingested: 2026-04-05
tags: [system-users, api, management]
---

## Summary

API endpoints to create, retrieve, update system users and invalidate their access tokens.

## Create System User

```
POST /<BUSINESS_ID>/system_users
-F "name=<NAME>"
-F "role=ADMIN|EMPLOYEE"
-F "access_token=<ADMIN_TOKEN>"
```

Returns app-scoped system user ID.

## Retrieve System Users

```
GET /<BUSINESS_ID>/system_users?access_token=<ADMIN_TOKEN>
```

Returns list of all system users including admin system users.

## Update System User

```
POST /<BUSINESS_ID>/system_users
-F "system_user_id=<ID>"
-F "name=<NEW_NAME>"
```

Only name can be changed.

## Invalidate Access Tokens

```
DELETE /<SYSTEM_USER_ID>/access_tokens
```

Cannot delete system user, but can invalidate all tokens. Generate new tokens afterward.

## Key Notes

- System user can only be granted role on app if both belong to same business
- Use app-scoped ID for API calls, not canonical ID from Business Manager UI
- First system user creation requires real admin user's access token

## Related Sources
- [[wiki/sources/install-apps-generate-tokens]]
- [[wiki/sources/system-user-permissions]]

## Related Concepts
- [[wiki/concepts/solution-partners]]
