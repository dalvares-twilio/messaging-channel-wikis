---
type: workflow
title: "Add Test Device"
trigger: "Pre-launch testing needed for RBM agent"
outcome: "Test device receiving messages from unlaunched agent"
prerequisites: [rcs-capable-device, google-messages-app]
estimated_time: "15-30 minutes"
tags: [testing, device, setup]
---

## Overview

Add a test device to receive messages from an unlaunched RBM agent. Required for development and QA before carrier launch.

## Prerequisites

- Android device with RCS capability
- Google Messages app installed (minimum version `messages.android_20241029_00`)
- Phone number of the test device

## Steps

1. **Verify RCS Status on Device**
   - Open Google Messages app
   - Tap ⋮ menu → **Settings**
   - Tap **RCS chats** (or **Chat features**)
   - Check **Status** = "Connected"
   
   If not connected, see [Enable RCS](https://support.google.com/messages/answer/7189714)

2. **Send Tester Invite** — From Developer Console or API
   
   **Developer Console:**
   - Navigate to agent → Devices
   - Enter phone number (E.164 format: `+15551234567`)
   - Click "Add"
   
   **API:**
   ```bash
   curl -X POST \
     "https://businesscommunications.googleapis.com/v1/brands/{brandId}/agents/{agentId}/testers" \
     -H "Authorization: Bearer $ACCESS_TOKEN" \
     -d '{"phoneNumber": "+15551234567"}'
   ```

3. **Accept Invite on Device**
   - Open Google Messages app
   - Look for notification or message from RBM platform
   - Accept the tester invitation
   - Invite status changes: PENDING → ACCEPTED

4. **Verify Test Message Delivery**
   - Send test message via API or Developer Console
   - Confirm message appears on device
   - Test reply flow back to your webhook

5. **Repeat for Additional Testers**
   - Add all QA team members
   - Each must individually accept their invite

## Verification

- [ ] RCS status "Connected" on device
- [ ] Tester invite status = "ACCEPTED" in Developer Console
- [ ] Test message delivered to device
- [ ] Reply from device received by webhook

## Troubleshooting

- **Issue**: `403 PERMISSION_DENIED` when sending message
  **Solution**: Device not RCS-enabled or tester invite not accepted. Check tester status via API.

- **Issue**: Invite status shows DECLINED
  **Solution**: Must remove tester first, then send new invite. Resending to DECLINED device without removal has no effect.

- **Issue**: `429 RESOURCE_EXHAUSTED`
  **Solution**: Exceeded 200 total tester invites. Remove unused testers before adding new ones.

## Related

- [rcs-enablement](../concepts/rcs-enablement.md)
- [agent-lifecycle](../concepts/agent-lifecycle.md)
- [configure-webhook](../workflows/configure-webhook.md)

## Sources

- [test-devices](../sources/test-devices.md)
- [manage-testers-api](../sources/manage-testers-api.md)
