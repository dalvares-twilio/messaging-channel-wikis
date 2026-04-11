---
type: source
title: "Set Up a Test Device"
source_file: "[Set up a test device    RCS for Business.md](../../raw/Set up a test device    RCS for Business.md)"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/guides/build/test"
ingested: 2026-04-05
tags: [testing, devices, development]
---
	
## Summary

Unlaunched agents can only communicate with designated test devices. This prevents accidental early access to end-users during development. Test devices must be RCS-enabled and accept a tester invite.

## Key Points

- Unlaunched agents → test devices only
- Device must be RCS-enabled (check in Messages → RCS chats → Status)
- Enable RCS: turn on RCS chats in Messages app
- **Tester invites**: max 20/day, 200 total limit
- Invite via Developer Console or RBM Management API
- **Invite statuses**: PENDING, ACCEPTED, DECLINED
- `403 PERMISSION_DENIED` if device not RCS-enabled or invite not accepted
- Resending to ACCEPTED device: no action (keeps status)
- Resending to DECLINED device: must remove first, then re-invite
- `429 RESOURCE_EXHAUSTED` if exceed 200 invites
- Removing test device stops future messages but doesn't delete in-transit/stored messages

## Related Concepts

- [agent-lifecycle](../concepts/agent-lifecycle.md)
- [rcs-enablement](../concepts/rcs-enablement.md)

## Related Entities

- [rbm-api](../entities/rbm-api.md)
- [developer-console](../entities/developer-console.md)
- [google-messages](../entities/google-messages.md)
