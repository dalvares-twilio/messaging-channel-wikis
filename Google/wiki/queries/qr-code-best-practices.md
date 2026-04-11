---
type: query
title: "QR code best practices for RCS"
query: "What are the best practices for using QR codes to drive RCS conversations?"
answered: 2026-04-10
tags: [qr-codes, deep-links, user-acquisition]
---

## Answer

QR codes convert physical touchpoints (stores, print, packaging) into RCS conversations. Here's how to do it right.

### QR Code Creation

**Using Developer Console:**
1. Navigate to agent → SMS Links
2. Enter deep link parameters
3. Download generated QR code

**Manual approach:**
1. Create deep link URL (use Format 2 with fallback)
2. Generate QR using any standard tool
3. Test scan with multiple devices

### Best Practice: Use Short URLs

**Why:**
- Cleaner QR code (less data = simpler pattern)
- Future-proof (can redirect if URL changes)
- Better fallback experience

**Instead of:**
```
sms:+15554443333?service_id=bot%40example.com&body=Track%20my%20order
```

**Use:**
```
https://acme.co/rcs-track → redirects to deep link
```

### URL Format for QR

Always use Format 2 with fallback:
```
sms:+15554443333?service_id=bot%40example.com&body=hello
```

Without fallback phone, non-RCS users see an error page.

### Pre-filled Message Strategy

The `body` parameter pre-fills a message for the user:

| Placement | Good Pre-fill | Why |
|-----------|---------------|-----|
| Product packaging | "Track order for [SKU]" | Clear intent |
| Store display | "I'm at [Location]" | Context |
| Receipt | "Help with order [ID]" | Relevant |
| Print ad | "Tell me about [Offer]" | Specific |

**Align pre-fill with:**
- User's likely intent at that touchpoint
- What your agent can actually help with
- Brand voice and tone

### Testing Checklist

- [ ] QR scannable from reasonable distance
- [ ] Works on RCS-enabled device → conversation starts
- [ ] Works on non-RCS device → SMS fallback works
- [ ] Pre-filled message appears correctly
- [ ] Multiple phone cameras (different apps) can scan

### Physical Placement Tips

| Location | Considerations |
|----------|----------------|
| Product packaging | Size vs scannability tradeoff |
| Store display | Lighting, distance, angle |
| Print materials | Paper quality, color contrast |
| Digital screens | Resolution, refresh rate |

### Error Scenarios to Plan For

1. **No camera app** - Consider nearby NFC as backup
2. **QR points to old URL** - Use short URL for updates
3. **User types URL manually** - Won't work (browser security)

### Limitations

- Cannot pre-fill suggested replies or actions (security restriction)
- Only plain text `body` parameter supported
- Manual copy-paste of URL doesn't work

## Sources Consulted

- [user-acquisition](../concepts/user-acquisition.md)
- [deep-links](../sources/deep-links.md)
- [setup-deep-links](../workflows/setup-deep-links.md)

## New Insights

- Could document QR code size recommendations by use case
- NFC alternative for RCS not documented
- Tracking/analytics for QR scans (via short URL) could be documented
