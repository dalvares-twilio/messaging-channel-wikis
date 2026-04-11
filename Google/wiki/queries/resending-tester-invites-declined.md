---
type: query
title: "Resending Tester Invites to Declined Devices"
query: "How do I resend a tester invite to a device that previously declined?"
answered: 2026-04-10
tags: [testing, testers, invites, declined, troubleshooting]
---

## Answer

Resending an invite to a device that previously declined requires a two-step process: first remove the declined tester, then send a new invite.

### Why You Can't Directly Re-invite

When a device declines a tester invite:
- The tester record exists with status `DECLINED`
- Creating a new tester for the same phone number fails (duplicate)
- The existing `DECLINED` status blocks further messaging

### Correct Workflow

#### Step 1: Remove the Declined Tester

**Via API**:
```bash
DELETE https://businesscommunications.googleapis.com/v1/testers/{phoneNumber}?agentId={agentId}
```

Example:
```bash
curl -X DELETE \
  "https://businesscommunications.googleapis.com/v1/testers/%2B14155551234?agentId=my-agent-id" \
  -H "Authorization: Bearer {token}"
```

Note: Phone number must be URL-encoded (`+` becomes `%2B`).

**Via Console**:
1. Navigate to Agent > Test devices
2. Find the declined tester
3. Click Remove/Delete action

#### Step 2: Send New Invite

**Via API**:
```bash
POST https://businesscommunications.googleapis.com/v1/testers
```
```json
{
  "agentId": "my-agent-id",
  "phoneNumber": "+14155551234"
}
```

**Via Console**:
1. Navigate to Agent > Test devices
2. Click Add tester
3. Enter phone number
4. Send invite

### Important Considerations

1. **Counts Toward Limits**: Both the old declined invite and the new invite count toward your limits:
   - 20 invites per day
   - 200 total invites per agent
   - Removing a tester frees up a slot in the 200 total

2. **User Experience**: Before re-inviting, consider:
   - Why did they decline? (accidental vs intentional)
   - Contact them first to explain the invite

3. **Timing**: New invite is sent immediately after the POST call

### Contrast with ACCEPTED Status

For comparison, behavior differs by status:

| Current Status | Resend Attempt | Result |
|---------------|----------------|--------|
| DECLINED | Direct POST | Error (duplicate) |
| DECLINED | DELETE then POST | New invite sent (correct) |
| ACCEPTED | POST | No action (stays ACCEPTED) |
| PENDING | POST | No action (stays PENDING) |

### Error Messages

| Scenario | Error |
|----------|-------|
| POST to existing tester | `400 ALREADY_EXISTS` or similar |
| Message to DECLINED tester | `403 PERMISSION_DENIED` |

## Sources Consulted

- [test-devices](../sources/test-devices.md)
- [manage-testers-api](../sources/manage-testers-api.md)
- [rcs-enablement](../concepts/rcs-enablement.md)

## New Insights

- No "force reinvite" option - must always delete first
- Declined testers consume quota until explicitly removed
- Console UI may not make the delete-then-add workflow obvious
