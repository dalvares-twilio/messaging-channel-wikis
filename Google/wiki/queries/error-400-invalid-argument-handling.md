---
type: query
title: "400 INVALID_ARGUMENT Error Handling"
query: "What causes a 400 INVALID_ARGUMENT error when sending RCS messages and how do I fix it?"
answered: 2026-04-10
tags: [error-handling, messaging, api, validation]
---

## Answer

A `400 INVALID_ARGUMENT` error indicates your message request contains invalid data or uses features the recipient's device doesn't support. This is a **non-retryable** error that requires fixing the request or falling back.

### Common Causes

| Cause | Example |
|-------|---------|
| Unsupported feature | Sending carousel to device that only supports basic RCS |
| Invalid phone format | Phone number not in E.164 format |
| Payload too large | Message exceeds 250 KB limit |
| Text too long | Text exceeds 3072 character limit |
| Invalid media URL | Media URL inaccessible or wrong format |
| Missing required field | Required message component missing |
| Invalid TTL | TTL longer than 15 days |

### Response Format

```
HTTP 400 BAD_REQUEST
{
  "error": {
    "code": 400,
    "message": "Request contains an invalid argument.",
    "status": "INVALID_ARGUMENT"
  }
}
```

### Feature-Based Errors

Some devices have limited RCS capabilities. A device may support:
- Text only (no rich cards)
- Rich cards but not carousels
- Basic media but not all formats

When you send a feature the device doesn't support, you get `400 INVALID_ARGUMENT`.

### Handling Strategy

**DO NOT RETRY** with the same request - it will fail again.

**Diagnostic steps**:

1. **Check capability first** - Use capability check API before sending
2. **Validate payload** - Ensure all size/length limits are met
3. **Verify phone format** - Must be E.164 (e.g., +14155551234)
4. **Check media accessibility** - Media URLs must be publicly accessible
5. **Review feature support** - Match message type to device capabilities

### Size Limits Reference

| Limit | Value |
|-------|-------|
| Overall AgentMessage | 250 KB |
| Text content | 3,072 characters |
| Media/PDFs per message | 100 MiB total |
| Suggestion text | 25 characters |
| Cards per carousel | 2-10 |

### Capability-Aware Sending Pattern

```
// 1. Check capabilities
capabilities = await getCapabilities(phoneNumber);

// 2. Select message type based on capabilities
if (capabilities.richCard && capabilities.carousel) {
  message = buildCarousel(products);
} else if (capabilities.richCard) {
  message = buildStandaloneCard(products[0]);
} else {
  message = buildTextMessage(productSummary);
}

// 3. Send appropriate message
await sendMessage(phoneNumber, message);
```

### Retry Policy (OTTM Implementation)

Per Twilio's OTTM implementation:
- `400 INVALID_ARGUMENT`: **No retry** - request is malformed
- Retryable codes: `401`, `5xx`
- Other non-retryable: `403`, `404`, `429`

## Sources Consulted

- [send-messages](../sources/send-messages.md)
- [capability-checks](../sources/capability-checks.md)
- [ottm-implementation](../sources/ottm-implementation.md)
- [rich-cards](../concepts/rich-cards.md)

## New Insights

- Error messages don't always specify which field is invalid
- Capability checks help prevent these errors proactively
- Consider graceful degradation: carousel -> standalone card -> text
