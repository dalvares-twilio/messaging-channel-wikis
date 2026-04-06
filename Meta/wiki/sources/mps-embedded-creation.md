---
type: source
title: "Multi-Partner Solution — Embedded Creation"
source_file: "[[raw/Multi-Partner Solution — Embedded creation.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solution-embedded-creation"
ingested: 2026-04-05
tags: [multi-partner-solutions, embedded-signup, api]
---

## Summary

Solution Partners can create Multi-Partner Solutions via embedded JavaScript button instead of App Dashboard. Tech Providers click button to grant permission, then Solution Partner uses API to create solution.

## Requirements

- Facebook Login for Business configured
- App approved for `manage_app_solution` permission

## Flow

1. Tech Provider clicks embedded button, selects apps
2. User access token returned to Solution Partner
3. Solution Partner calls APIs to create and accept solution

## Step 1: Grant App Permission

System user must have `manage_app_solution` permission via Meta Business Suite > System Users.

## Step 2: Embedded Button

```javascript
FB.login(callback, { scope: "manage_app_solution" });
```

Returns `authResponse.accessToken` on success.

## Step 3: Get App Details

```
GET /me/application_details
Authorization: Bearer <TECH_PROVIDER_TOKEN>
```

## Step 4: Create Solution

```
POST /<APP_ID>/whatsapp_business_solution
{
  "owner_permissions": ["MESSAGING"],
  "partner_app_id": "<SOLUTION_PARTNER_APP_ID>",
  "partner_permissions": ["MESSAGING"],
  "solution_name": "<NAME>"
}
```

## Step 5: Accept Solution

```
POST /<SOLUTION_ID>/accept
Authorization: Bearer <SYSTEM_USER_TOKEN>
```

## Related Concepts
- [[wiki/concepts/solution-partners]]
