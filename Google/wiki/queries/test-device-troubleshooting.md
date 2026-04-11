---
type: query
title: "Troubleshooting test device setup"
query: "Why can't I send messages to my test device? Common errors and fixes."
answered: 2026-04-10
tags: [testing, devices, troubleshooting]
---

## Answer

Test device issues typically fall into three categories: RCS not enabled, invite not accepted, or rate limits exceeded.

### Error: `403 PERMISSION_DENIED`

**Causes:**
1. Device RCS not enabled
2. Tester invite not accepted (still PENDING or DECLINED)
3. Agent not launched on carrier (for launched agents)

**Diagnosis & Fix:**

```
Step 1: Check device RCS status
  → Open Messages → Settings → RCS chats → Status
  → Must show "Connected"
  → If not: enable RCS chats, wait for connection

Step 2: Check tester invite status via API or Console
  → PENDING: User needs to accept invite in Messages app
  → DECLINED: Remove tester, then re-invite
  → ACCEPTED: Proceed to Step 3

Step 3: Verify agent-tester association
  → Confirm correct agent ID used
  → Confirm phone number in E.164 format (+15551234567)
```

### Error: `429 RESOURCE_EXHAUSTED`

**Cause:** Exceeded tester limits

**Limits:**
- 20 invites per day
- 200 total invites per agent

**Fix:** Remove unused testers before adding new ones

### Error: Invite Shows DECLINED

**Issue:** Cannot resend to DECLINED device directly

**Fix:** 
1. Remove tester via API: `DELETE /testers/{testerId}`
2. Send fresh invite
3. User must explicitly accept

### Error: Messages Not Appearing

**Checklist:**
- [ ] RCS status = "Connected" on device
- [ ] Tester status = "ACCEPTED" in Console
- [ ] Google Messages app version >= `messages.android_20241029_00`
- [ ] Webhook receiving delivery events (for troubleshooting)

### Note on Removing Testers

Removing a test device:
- Stops future messages to that device
- Does NOT delete in-transit or stored messages
- Device may still receive messages already queued

## Sources Consulted

- [test-devices](../sources/test-devices.md)
- [add-test-device](../workflows/add-test-device.md)
- [rcs-enablement](../concepts/rcs-enablement.md)

## New Insights

- Could document exact webhook error payloads for each failure case
- tester status via Management API response format not documented
