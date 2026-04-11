---
type: source
title: "Capability Checks"
source_file: "[Capability checks    RCS for Business.md](../../raw/Capability checks    RCS for Business.md)"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/guides/build/capabilities"
ingested: 2026-04-05
tags: [capabilities, devices, api]
---

## Summary

Capability checks let agents determine if a user's device supports RCS and which features it supports. This enables tailoring conversations to device capabilities or falling back to SMS/MMS.

## Key Points

### Single Device Check
- Returns list of supported features (rich cards, actions, etc.)
- **Requires**: MSISDN connected to RCS service within last 31 days
- 404 errors if: user not RCS-reachable, or agent not launched on their carrier
- 400 error if sending unsupported features

### Features Returned
- `RICHCARD_STANDALONE`, `RICHCARD_CAROUSEL`
- `ACTION_CREATE_CALENDAR_EVENT`, `ACTION_DIAL`, `ACTION_OPEN_URL`
- `ACTION_SHARE_LOCATION`, `ACTION_VIEW_LOCATION`
- `ACTION_OPEN_URL_IN_WEBVIEW`, `PDF_IN_RICH_CARDS`

### Bulk Capability Check
- 500–10,000 unique phone numbers per request
- Max 600 calls/minute
- Returns `reachableUsers` list (on launched carriers)
- Includes sampling for estimating total reachable users across all carriers
- **Does not** return specific features per device
- Results may not be current (reads from cache)

### Offline Queuing
- Messages queued up to **31 days** for offline devices
- Delivered when device comes back online

### Bulk Capability Check Script
- Java tool for CSV input/output
- Requires Maven 3.3.9+, Java 8

## Related Concepts

- [rcs-enablement](../concepts/rcs-enablement.md)

## Related Entities

- [rbm-api](../entities/rbm-api.md)
