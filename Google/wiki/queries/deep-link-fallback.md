---
type: query
title: "Deep link fallback behavior"
query: "What happens when a user clicks an RCS deep link but doesn't have RCS enabled?"
answered: 2026-04-10
tags: [deep-links, fallback, user-acquisition]
---

## Answer

Deep link behavior depends on URL format and user's device capabilities.

### Three Possible Outcomes

| Outcome | When It Happens | User Experience |
|---------|-----------------|-----------------|
| **Success** | All requirements met | RCS conversation opens |
| **Fallback** | RCS unavailable, phone in URL | SMS to phone number |
| **Error** | RCS unavailable, no fallback | Help center link shown |

### Success Requirements

All of these must be true:
1. Google Messages installed (v20241029+)
2. RCS enabled in Messages settings
3. Agent launched on user's carrier

### URL Format Comparison

**Format 1: Service ID only (NO fallback)**
```
sms:bot%40botplatform.example.com?body=hello
```
- If RCS unavailable → **Error page shown**
- Use only when RCS is guaranteed

**Format 2: Phone + Service ID (WITH fallback)**
```
sms:+15554443333?service_id=bot%40example.com&body=hello
```
- If RCS unavailable → **Falls back to SMS**
- **Recommended for production**

### Fallback Flow

```
User clicks deep link
  ↓
Check: Google Messages installed?
  → No → Fallback to phone (if provided) or Error
  ↓
Check: RCS enabled?
  → No → Fallback to phone (if provided) or Error
  ↓
Check: Agent launched on carrier?
  → No → Fallback to phone (if provided) or Error
  ↓
Success → RCS conversation starts
```

### Best Practices

1. **Always use Format 2** for production links
2. **Include fallback phone number** for graceful degradation
3. **Test on non-RCS device** to verify fallback works
4. **Use short URLs for QR codes** - cleaner, future-proof

### Server-Side Fallback Alternative

For web links, consider server-side device detection:
1. Detect device capabilities server-side
2. Route RCS-capable to deep link
3. Route others to SMS/web flow

This gives more control than relying on URL fallback.

### Common Pitfall

**Manual copy-paste doesn't work**

URLs must be embedded as:
- Clickable button
- Hyperlink
- QR code

Browser security blocks manual URL copy-paste into Messages.

## Sources Consulted

- [user-acquisition](../concepts/user-acquisition.md)
- [deep-links](../sources/deep-links.md)
- [setup-deep-links](../workflows/setup-deep-links.md)

## New Insights

- Could document server-side device detection approaches
- Fallback SMS content is just the `body` parameter - no rich formatting
- Analytics for deep link success vs fallback rates not documented
