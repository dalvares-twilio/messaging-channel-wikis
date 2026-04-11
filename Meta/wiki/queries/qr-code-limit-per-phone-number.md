---
type: query
title: "What is the maximum number of QR codes per phone number?"
asked: 2026-04-10
tags: [qr-codes, limits, phone-numbers]
---

## Question

What is the maximum number of QR codes and short links I can create per WhatsApp Business phone number?

## Answer

You can create a **maximum of 2,000 QR codes and short links per phone number**.

Each QR code/short link can include a prefilled message of up to **140 characters**. The QR codes can be generated in SVG (recommended for print quality) or PNG format.

### Key Details

- The 2,000 limit is combined for both QR codes and short links
- Short links mask the underlying phone number for privacy
- QR codes do not provide analytics due to privacy protection
- When a QR code is deleted, users scanning it will see "This QR code has expired"

### API Endpoint

```
POST /<PHONE_NUMBER_ID>/message_qrdls
```

## References

- [qr-codes-short-links](../sources/qr-codes-short-links.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/qr-codes
