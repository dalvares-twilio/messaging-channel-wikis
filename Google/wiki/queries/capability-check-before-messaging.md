---
type: query
title: "Capability Checks Before Messaging"
query: "How do I check if a device supports RCS before sending a message? What happens if I skip the capability check?"
answered: 2026-04-10
tags: [capabilities, devices, fallback, api]
---

## Answer

Capability checks determine if a user's device supports RCS and which features it supports. This enables tailoring messages to device capabilities or falling back to SMS/MMS.

### Single Device Capability Check

The capability check API returns the list of supported features for a single device:

**Supported Features**:
- `RICHCARD_STANDALONE` - standalone rich cards
- `RICHCARD_CAROUSEL` - carousel cards
- `ACTION_CREATE_CALENDAR_EVENT`
- `ACTION_DIAL`
- `ACTION_OPEN_URL`
- `ACTION_SHARE_LOCATION`
- `ACTION_VIEW_LOCATION`
- `ACTION_OPEN_URL_IN_WEBVIEW`
- `PDF_IN_RICH_CARDS`

**Requirements**:
- MSISDN must have connected to RCS service within last **31 days**
- Agent must be launched on the user's carrier

### What Happens If You Skip Capability Checks

| Scenario | Error Code | Meaning |
|----------|------------|---------|
| Device doesn't support RCS | `404 NOT_FOUND` | RCS disabled or unsupported |
| Agent not launched on carrier | `404 NOT_FOUND` | Carrier not approved |
| Sending unsupported features | `400 INVALID_ARGUMENT` | Feature not supported by device |

### Bulk Capability Check

For large-scale operations, use the bulk capability check:

- **Volume**: 500-10,000 unique phone numbers per request
- **Rate limit**: 600 calls/minute
- **Returns**: `reachableUsers` list (users on launched carriers)
- **Limitation**: Does not return specific features per device
- **Note**: Results may not be current (reads from cache)

### Offline Device Handling

If a device is offline:
- Messages are queued for up to **31 days**
- Delivered when device comes back online
- Capability cache valid for 31 days

### Recommended Pattern

```
1. Check capability (single or bulk)
2. If capable → send RCS message with TTL
3. If 404 → fall back to SMS immediately
4. If TTL expires → fall back to SMS
```

### TTL for Fallback

Set appropriate TTL based on message urgency:
- **OTP/Authentication**: 10 minutes, then SMS fallback
- **Transactional**: 1-24 hours depending on urgency
- **Promotional**: longer TTL, date-based expiration

## Sources Consulted

- [capability-checks](../sources/capability-checks.md)
- [rcs-enablement](../concepts/rcs-enablement.md)
- [message-expiration](../concepts/message-expiration.md)
- [send-messages](../sources/send-messages.md)

## New Insights

- Bulk check doesn't return per-device features, only reachability
- Cache-based results may lead to false positives for recently churned users
- No synchronous feature check available at send time
