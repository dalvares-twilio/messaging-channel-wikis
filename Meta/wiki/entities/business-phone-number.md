---
type: entity
title: "Business Phone Number"
entity_type: resource
---

## Description

A business phone number is the core messaging identity on the WhatsApp Business Platform. Numbers must be registered to send/receive messages via Cloud API. Each number has associated attributes like display name, business profile, and optional OBA status.

## Eligibility Requirements

- Owned by you
- Has country and area code (short codes not supported)
- Can receive voice calls or SMS
- Has scaled capabilities

## Status Values

| Status | Meaning |
|--------|---------|
| `CONNECTED` | Ready to send/receive messages |
| `DISCONNECTED` | Not active |
| `FLAGGED` | Quality issues |
| `RESTRICTED` | Limited functionality |

## Key Attributes

| Attribute | Description |
|-----------|-------------|
| `display_phone_number` | Formatted phone number |
| `verified_name` | Display name |
| `name_status` | Display name verification status |
| `quality_rating` | GREEN, YELLOW, RED |
| `status` | Connection status |
| `throughput` | Messages per second limit |

## API Reference

### Get Phone Number Info
```
GET /<PHONE_NUMBER_ID>?fields=verified_name,status,quality_rating
```

### Get All Numbers in WABA
```
GET /<WABA_ID>/phone_numbers
```

### Verify Ownership
```
POST /<PHONE_NUMBER_ID>/request_code?code_method=SMS&language=en
POST /<PHONE_NUMBER_ID>/verify_code?code=<CODE>
```

### Register for Cloud API
```
POST /<PHONE_NUMBER_ID>/register
```

## Limits

- Max 2 numbers per portfolio initially (up to 20)
- 10 registration requests per 72 hours
- Cannot delete via API (WhatsApp Manager only)
- Cannot delete if paid messages sent within 30 days

## Related Concepts
- [[phone-number-management]]

## Related Entities
- [[display-name]]
- [[business-profile]]
- [[Knowledge-Bases/Channels/Meta/wiki/entities/two-step-verification]]
- [[whatsapp-business-account]]

## Sources
- [[business-phone-numbers]]
- [[phone-number-registration]]
