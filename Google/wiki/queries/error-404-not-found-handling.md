---
type: query
title: "404 NOT_FOUND Error Handling"
query: "What causes a 404 NOT_FOUND error when sending RCS messages and how do I handle it?"
answered: 2026-04-10
tags: [error-handling, messaging, api, fallback]
---

## Answer

A `404 NOT_FOUND` error when sending an RCS message indicates the recipient cannot receive RCS messages through your agent. This is a **non-retryable** error that requires fallback to an alternate channel.

### Causes

| Cause | Description |
|-------|-------------|
| No RCS support | Device doesn't support RCS messaging |
| RCS disabled | User has disabled RCS on their device |
| Agent not launched | Your agent isn't launched on the user's carrier |
| Invalid phone number | Number format incorrect or doesn't exist |

### Response Handling

```
HTTP 404 NOT_FOUND
{
  "error": {
    "code": 404,
    "message": "Requested entity was not found.",
    "status": "NOT_FOUND"
  }
}
```

### Handling Strategy

**DO NOT RETRY** - This error indicates a permanent (or semi-permanent) condition. Retrying wastes resources and delays fallback.

**Recommended flow**:

1. **Receive 404** - Message cannot be delivered via RCS
2. **Log for analytics** - Track RCS reachability rates
3. **Fallback immediately** - Route to SMS or alternate channel
4. **Cache status (optional)** - Consider caching unreachable status for that number temporarily

### Fallback Pattern

```
if (response.status === 404) {
  // Do NOT retry
  logRcsUnreachable(phoneNumber);
  await sendViaSms(phoneNumber, fallbackMessage);
}
```

### Prevention: Capability Check

Before sending, you can proactively check device capabilities:

```
GET /v1/phones/{phoneNumber}/capabilities
```

This returns whether the device supports RCS and specific features. Use this to:
- Route messages to the right channel upfront
- Avoid 404 errors entirely
- Build more reliable user experiences

### Retry Policy (OTTM Implementation)

Per Twilio's OTTM implementation:
- `404 NOT_FOUND`: **No retry** - treat as terminal failure
- Other retryable codes: `401`, `5xx`
- Other non-retryable: `400`, `403`, `429`

## Sources Consulted

- [send-messages](../sources/send-messages.md)
- [capability-checks](../sources/capability-checks.md)
- [ottm-implementation](../sources/ottm-implementation.md)

## New Insights

- Consider bulk capability checks for campaigns to pre-filter RCS-capable recipients
- 404 does not distinguish between "no RCS" and "agent not launched on carrier" - both require fallback
