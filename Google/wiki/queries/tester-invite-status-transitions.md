---
type: query
title: "Tester Invite Status Transitions"
query: "What are the possible tester invite statuses and how do they transition?"
answered: 2026-04-10
tags: [testing, testers, invites, status, lifecycle]
---

## Answer

Tester invites progress through defined status states. Understanding these transitions is critical for diagnosing test device issues.

### Invite Statuses

| Status | Description | Can Message? |
|--------|-------------|--------------|
| **PENDING** | Invite sent, awaiting user action | No |
| **ACCEPTED** | User accepted the tester invite | Yes |
| **DECLINED** | User explicitly declined the invite | No |

### Status Transition Diagram

```
[Initial] 
    |
    v
 PENDING -----(user accepts)----> ACCEPTED
    |
    +-----(user declines)----> DECLINED
```

### Key Behaviors by Status

#### PENDING
- Invite sent to device but not yet actioned
- Device holder sees invite notification in Messages app
- Attempting to send messages returns `403 PERMISSION_DENIED`
- Invite remains PENDING until user action or deletion

#### ACCEPTED  
- Tester can receive messages from the unlaunched agent
- Status persists even if agent is later archived (testers remain)
- Resending invite to an ACCEPTED device: no action taken, status remains ACCEPTED

#### DECLINED
- User explicitly rejected the invite
- Cannot send messages - returns `403 PERMISSION_DENIED`
- **Cannot directly re-invite**: Must remove the tester first, then send a new invite
- Counts toward the 200 total invite limit until removed

### Resending to DECLINED Devices

This is a common gotcha:

```
# Wrong - will fail
POST /v1/testers (same phone) -> Error: tester exists

# Correct workflow
DELETE /v1/testers/{phoneNumber}?agentId={agentId}  # Remove declined tester
POST /v1/testers (same phone)                        # Send new invite
```

### Checking Invite Status

**Via API**:
```
GET /v1/{testerId}?agentId={agentId}
```

Returns:
```json
{
  "name": "testers/+14155551234",
  "inviteStatus": "ACCEPTED"
}
```

**Via Console**:
Navigate to Agent > Test devices to see all testers and their statuses.

## Sources Consulted

- [test-devices](../sources/test-devices.md)
- [manage-testers-api](../sources/manage-testers-api.md)
- [rcs-enablement](../concepts/rcs-enablement.md)

## New Insights

- DECLINED testers count toward the 200 limit until explicitly removed
- No "expire" status - invites remain PENDING indefinitely
- No documented way to know why a user declined
