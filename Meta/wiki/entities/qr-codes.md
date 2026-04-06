---
type: entity
title: "QR Codes and Short Links"
entity_type: feature
tags: [qr-codes, short-links, messaging]
---

## Definition

QR codes and short links let customers start WhatsApp conversations with a business without manually entering a phone number.

## Characteristics

- **Limit**: Max 2,000 QR codes/short links per phone number
- **Prefilled message**: Up to 140 characters
- **No analytics**: Privacy protection by design
- **Short links**: Mask the underlying phone number

## QR Code Formats

- **SVG**: Recommended for print quality
- **PNG**: Alternative format

## API Operations

| Operation | Endpoint |
|-----------|----------|
| Create | `POST /<PHONE_NUMBER_ID>/message_qrdls` |
| List all | `GET /<PHONE_NUMBER_ID>/message_qrdls` |
| Get specific | `GET /<PHONE_NUMBER_ID>/message_qrdls/<CODE>` |
| Update | `POST /<PHONE_NUMBER_ID>/message_qrdls` (with code) |
| Delete | `DELETE /<PHONE_NUMBER_ID>/message_qrdls/<CODE>` |

## Deep Link Format

```
https://wa.me/message/<CODE>
```

## User Experience

| Scenario | Behavior |
|----------|----------|
| Deleted code | "This QR code has expired" error |
| Blocked business | Prompt to unblock |
| Desktop browser | Desktop client launches (or install prompt) |

## Best Practices

- Use SVG for print materials
- Don't customize QR code colors (affects readability)
- Use different codes for different languages/locations

## Sources

- [[wiki/sources/qr-codes-short-links]]

## Related Entities

- [[wiki/entities/business-phone-number]]
