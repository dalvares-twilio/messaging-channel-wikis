---
type: concept
title: "RCS Enablement"
aliases: [RCS status, RCS chats]
sources: 1
---

## Overview

For devices to communicate with RBM agents, they must have RCS enabled. This is a prerequisite for both testing and production messaging.

## Details

### Check RCS Status

1. Open Messages app
2. Navigate to **Messages settings**
3. Tap **RCS chats** (or **Chat features**)
4. Find **Status** value

### Enable RCS

[Turn on RCS chats in Messages app](https://support.google.com/messages/answer/7189714)

### Requirements for RBM Conversation

For successful agent communication, device needs:
1. Google Messages installed (minimum version `messages.android_20241029_00`)
2. RCS chats enabled in Messages
3. Agent launched on user's carrier (or tester invite accepted for unlaunched agents)

### Tester Invites

- Device must accept tester invite before unlaunched agent can message it
- Invite statuses: PENDING, ACCEPTED, DECLINED
- If not RCS-enabled or invite not accepted: `403 PERMISSION_DENIED`

## Related

- [[wiki/concepts/agent-lifecycle]]

## Related Workflows

- [[wiki/workflows/add-test-device]] — Add and configure test devices

## Sources

- [[wiki/sources/test-devices]]
