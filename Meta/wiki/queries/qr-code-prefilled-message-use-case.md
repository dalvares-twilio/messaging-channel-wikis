---
type: query
title: "How do prefilled messages work with QR codes?"
asked: 2026-04-10
tags: [qr-codes, short-links, messaging]
---

## Question

How do QR codes with prefilled messages work, and what's a good use case for them?

## Answer

QR codes and short links can include a **prefilled message** (up to 140 characters) that automatically populates the chat input when a customer scans/clicks. The customer still needs to tap send.

### Use Cases

1. **Campaign tracking**: Different QR codes with messages like "Cyber Monday", "Store Visit NYC", "Magazine Ad Q2" let you identify which channel drove the conversation
2. **Language/region routing**: "Support - Spanish" vs "Support - English"
3. **Product inquiries**: "I'm interested in [Product Name]"

### Example API Call

```
POST /<PHONE_NUMBER_ID>/message_qrdls
{
  "prefilled_message": "Cyber Monday",
  "generate_qr_image": "SVG"
}
```

### Response

```json
{
  "code": "4O4YGZEG3RIVE1",
  "prefilled_message": "Cyber Monday",
  "deep_link_url": "https://wa.me/message/4O4YGZEG3RIVE1",
  "qr_image_url": "https://..."
}
```

### Best Practices

- Use SVG format for print materials (better quality)
- Don't customize QR code colors (affects readability)
- Create different codes for different marketing campaigns

**Note**: WhatsApp does not provide analytics on QR code scans for privacy reasons.

## References

- [qr-codes-short-links](../sources/qr-codes-short-links.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/qr-codes
