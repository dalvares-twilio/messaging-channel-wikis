---
type: source
title: "Meta Pixel Tracking"
source_file: "[Tracking with the Meta Pixel.md](../../raw/Tracking with the Meta Pixel.md)"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/pixel-tracking"
ingested: 2026-04-05
tags: [analytics, tracking, embedded-signup]
---

## Summary

Track Embedded Signup button clicks and conversions using Meta Pixel JavaScript snippet.

## Setup

Include PageView event with app ID and feature parameter:

```javascript
fbq('init', '<PIXEL_ID>');
fbq('track', 'PageView', {
  appId: '<APP_ID>',
  feature: 'whatsapp_embedded_signup'
});
```

## Use Case

Measure how many page visitors clicked signup vs. successfully converted.

## Related Concepts
- [embedded-signup](../concepts/embedded-signup.md)
