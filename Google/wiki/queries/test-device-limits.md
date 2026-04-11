---
type: query
title: "Test device invite limits"
query: "How many test devices can I add and what are the rate limits?"
answered: 2026-04-10
tags: [testing, devices, limits]
---

## Answer

### Tester Invite Limits

| Limit | Value |
|-------|-------|
| Invites per day | 20 |
| Total invites per agent | 200 |
| Error if exceeded | `429 RESOURCE_EXHAUSTED` |

### Important Notes

1. **Invites count against limit even if declined** - A DECLINED invite still counts toward the 200 total
2. **Removing testers frees up slots** - You can remove unused testers to make room
3. **Daily limit resets at UTC midnight** - Plan bulk tester onboarding accordingly

### Tester Lifecycle

```
Invite Sent → PENDING
  ↓
User accepts → ACCEPTED (device can receive messages)
  OR
User declines → DECLINED (cannot resend without removing first)
  ↓
Remove tester → Frees slot, stops future messages
```

### Managing Large QA Teams

If you need more than 200 testers:
- **Create multiple agents** for different test scenarios
- **Rotate testers** - remove inactive, add new as needed
- **Use bulk capability checks** for production testing (doesn't require invite)

### Invite Methods

**Developer Console:**
- Navigate to agent → Devices
- Enter phone number (E.164 format)
- Click "Add"

**Management API:**
```bash
curl -X POST \
  "https://businesscommunications.googleapis.com/v1/brands/{brandId}/agents/{agentId}/testers" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -d '{"phoneNumber": "+15551234567"}'
```

### Resending Invites

| Current Status | Resend Action |
|----------------|---------------|
| PENDING | No action (invite already sent) |
| ACCEPTED | No action (device already registered) |
| DECLINED | Must remove first, then re-invite |

## Sources Consulted

- [test-devices](../sources/test-devices.md)
- [manage-testers-api](../sources/manage-testers-api.md)
- [add-test-device](../workflows/add-test-device.md)

## New Insights

- API response for checking remaining invite quota not documented
- Could add pattern for "test device rotation for large teams"
