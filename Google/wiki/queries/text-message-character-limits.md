---
type: query
title: "Text Message Character Limits"
query: "What are the character limits for RCS text messages, and how do multi-byte characters affect them?"
answered: 2026-04-10
tags: [messaging, text, limits, unicode]
---

## Answer

RCS text messages have different limits depending on the message type. Understanding these limits - especially for multi-byte characters like emojis - is critical for proper message composition.

### Character Limits

| Message Type | Limit |
|--------------|-------|
| Rich text message | **3,072 characters** |
| Basic message (SMS-like) | **160 UTF-8 characters** |
| Suggestion text | **25 characters** |

### Multi-Byte Character Impact

Multi-byte characters (emojis, non-Latin scripts) consume more than one character position:

| Character Type | UTF-8 Bytes | Counts As |
|----------------|-------------|-----------|
| ASCII (a-z, 0-9) | 1 byte | 1 character |
| Extended Latin (e, n) | 2 bytes | 2+ characters |
| CJK (Chinese, Japanese, Korean) | 3 bytes | 3+ characters |
| Emoji (basic) | 4 bytes | 4+ characters |
| Emoji (with skin tone) | 8+ bytes | 8+ characters |
| Emoji (family/complex) | 12+ bytes | 12+ characters |

### Example: Basic Message (160 limit)

```
// This message is OVER the limit due to emoji byte count
"Your order is ready! Pick up at Store #42."  // 41 chars visible
// But add emojis...
"Your order is ready! Pick up at Store #42."  // 41 + 4 (pizza) + 4 (package) = 49+ bytes
```

### Practical Implications

#### For Basic Messages (160 chars)

- Treat as **160 bytes**, not 160 visible characters
- One emoji can consume 2-12+ of your 160-byte budget
- Use emojis sparingly or not at all in SMS-like basic messages
- Test with actual byte counting, not visual character count

#### For Rich Messages (3,072 chars)

- More generous limit accommodates emojis
- Still count bytes for accuracy
- Rich cards have separate limits for title/description

### Byte Counting Example (JavaScript)

```javascript
function getByteLength(str) {
  return new Blob([str]).size;
}

const message = "Hello World!";  // 12 bytes
const emojiMessage = "Hello World!";  // 16+ bytes

console.log(getByteLength(message));       // 12
console.log(getByteLength(emojiMessage));  // 16+
```

### Best Practices

1. **Count bytes, not characters** - Use byte-counting functions
2. **Test with emojis** - Verify limits with actual multi-byte content
3. **Use rich messages for emoji-heavy content** - 3,072 chars is more forgiving
4. **Truncate safely** - Don't split multi-byte characters when truncating
5. **Consider localization** - CJK text uses 3 bytes per character

### Fallback Considerations

When falling back to SMS:
- SMS limits are even more restrictive (160 chars standard, 70 for Unicode)
- Emojis trigger UCS-2 encoding, reducing SMS limit to 70 chars
- Consider stripping emojis for SMS fallback

## Sources Consulted

- [send-messages](../sources/send-messages.md)
- [rich-cards](../concepts/rich-cards.md)

## New Insights

- Exact byte-counting algorithm not specified (UTF-8 assumed)
- Title/description limits for rich cards not separately documented
- Consider building a message validator that accounts for multi-byte characters
