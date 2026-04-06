---
type: entity
title: "Google Messages"
entity_type: product
---

## Description

Google's default messaging app for Android that supports RCS chats. Required on user devices to receive RBM agent messages.

## Usage

### For RBM Conversations

- Minimum version: `messages.android_20241029_00`
- RCS chats must be enabled
- Agent must be launched on user's carrier (or tester invite accepted)

### RCS Status Check

1. Open Messages
2. Go to **Messages settings**
3. Tap **RCS chats** or **Chat features**
4. Check **Status** value

### Enable RCS

[Instructions](https://support.google.com/messages/answer/7189714)

### Deep Link Behavior

SMS deep links (`sms:` URLs) open in Messages and can initiate RBM conversations if requirements are met.

## Related

- [[wiki/concepts/rcs-enablement]]
- [[wiki/entities/rbm-api]]

## Sources

- [[wiki/sources/test-devices]]
- [[wiki/sources/deep-links]]
