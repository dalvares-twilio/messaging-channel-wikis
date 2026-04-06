---
type: source
title: "Manage Brands (API)"
source_file: "[[raw/Manage brands    RCS for Business.md]]"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/brands"
ingested: 2026-04-05
tags: [api, management, brands]
---

## Summary

All agents belong to a brand (business, organization, or group). Brands are organizational containers to help group related agents together. Must create brand before creating agent.

## Key Points

### Operations
- **Create**: `brands.create` — returns `name` (unique ID) and `displayName`
- **Retrieve**: `brands.get` — get brand by unique identifier
- **List**: `brands.list` — get all brands you've created
- **Rename**: `brands.patch` — change display name

### Brand Object
```json
{
  "name": "brands/17456b6b-65dc-4e35-b128-fd3047664ddf",
  "displayName": "My new brand"
}
```

## Related Concepts

- [[wiki/concepts/agent-lifecycle]]

## Related Entities

- [[wiki/entities/rbm-management-api]]
