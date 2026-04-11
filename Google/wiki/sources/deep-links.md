---
type: source
title: "SMS Deep Links"
source_file: "[Start a conversation from an SMS deep link    RCS for Business.md](../../raw/Start a conversation from an SMS deep link    RCS for Business.md)"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/guides/build/deeplinks"
ingested: 2026-04-05
tags: [deep-links, sms, user-acquisition]
---

## Summary

Users can start conversations with RBM agents via SMS deep link URLs embedded in emails, websites, apps, or physical locations (QR codes). The URL must be embedded as button/link/QR — manual copy-paste doesn't work due to browser security.

## Key Points

- Three outcomes: **Success** (RBM conversation), **Fallback** (phone/shortcode), **Error** (help center link)
- Success requires: Google Messages installed (v20241029+), RCS enabled, agent launched on carrier
- **Format 1** (service ID only): `sms:bot%40botplatform.example.com`
  - No fallback support — shows error if RBM unavailable
- **Format 2** (phone + service ID): `sms:+15554443333?service_id=bot%40botplatform.example.com`
  - Supports fallback to phone number
- **Pre-filled message**: `&body=URL-encoded-text` parameter
- Formats defined in GSMA RCC.07 v.14.0, section 3.6.3.4
- **No support** for pre-filled suggested replies/actions (security)
- **Best practice**: use short links for QR codes (future-proofing, cleaner fallback)
- Developer Console has SMS link creator tool with QR generation

## Related Concepts

- [user-acquisition](../concepts/user-acquisition.md)

## Related Entities

- [developer-console](../entities/developer-console.md)
- [google-messages](../entities/google-messages.md)
