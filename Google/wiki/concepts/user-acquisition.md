---
type: concept
title: "User Acquisition"
aliases: [deep links, conversation starters, QR codes]
sources: 1
---

## Overview

SMS deep links enable users to start RCS conversations from external touchpoints — emails, websites, apps, or physical locations via QR codes.

## Details

### URL Formats

**Format 1 (service ID only)**:
```
sms:bot%40botplatform.example.com?body=hello
```
- No fallback support
- Shows error if RCS unavailable

**Format 2 (phone + service ID)**:
```
sms:+15554443333?service_id=bot%40example.com&body=hello
```
- Supports fallback to phone number
- Graceful degradation if RCS unavailable

### Pre-filled Message
- `body` parameter with URL-encoded text
- User sees message ready to send
- Align with user intent and brand goals

### Outcomes
1. **Success**: RBM conversation starts (requires Google Messages, RCS enabled, agent launched on carrier)
2. **Fallback**: routes to phone number (if provided and success criteria not met)
3. **Error**: shows help center link (if no fallback and criteria not met)

### Best Practices
- Use short links for QR codes (future-proofing, cleaner fallback)
- Embed URLs as buttons/links/QR — manual copy-paste doesn't work (browser security)
- No pre-filled suggested replies/actions (security restriction)

### Tools
- Developer Console has SMS link creator with QR generation

## Related

- [[wiki/concepts/rcs-enablement]]

## Sources

- [[wiki/sources/deep-links]]
