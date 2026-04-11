---
type: source
title: "QR Codes and Short Links"
source_file: "[QR Codes and Short Links.md](../../raw/QR Codes and Short Links.md)"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/qr-codes"
ingested: 2026-04-05
tags: [qr-codes, short-links, messaging, api]
---

## Summary

WhatsApp QR codes and short links let customers start conversations without entering a phone number. Users scan QR codes or click short links to open a chat with prefilled messages.

## Key Points

- **Max 2,000** QR codes/short links per phone number
- **Prefilled message**: Up to 140 characters
- **No analytics** — privacy protection
- **Formats**: SVG (recommended) or PNG
- Short links mask the phone number

## API Operations

### Create QR Code
```
POST /<PHONE_NUMBER_ID>/message_qrdls
{
  "prefilled_message": "Cyber Monday",
  "generate_qr_image": "SVG"
}
```

**Response:**
```json
{
  "code": "4O4YGZEG3RIVE1",
  "prefilled_message": "Cyber Monday",
  "deep_link_url": "https://wa.me/message/4O4YGZEG3RIVE1",
  "qr_image_url": "https://..."
}
```

### List All
```
GET /<PHONE_NUMBER_ID>/message_qrdls
```

### Get Specific
```
GET /<PHONE_NUMBER_ID>/message_qrdls/<CODE>
```

### Update
```
POST /<PHONE_NUMBER_ID>/message_qrdls
{
  "code": "<CODE>",
  "prefilled_message": "New message"
}
```

### Delete
```
DELETE /<PHONE_NUMBER_ID>/message_qrdls/<CODE>
```

## User Experience

| Scenario | Behavior |
|----------|----------|
| Deleted code/link | "This QR code has expired" error |
| Blocked business | Prompt to unblock |
| Desktop browser | Desktop client launches (or install prompt) |

## Best Practices

- Use SVG for print quality
- Don't customize QR code colors (affects readability)
- Use different codes for different languages/locations

## Related Entities
- [qr-codes](../entities/qr-codes.md)
- [business-phone-number](../entities/business-phone-number.md)
