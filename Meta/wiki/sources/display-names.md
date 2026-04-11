---
type: source
title: Display Names
source_file: "[Display names  Developer Documentation](Display names  Developer Documentation.md)"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/display-names
ingested: 2026-04-05
tags:
  - display-name
  - verification
  - phone-number
---

## Summary

Display names are required when registering a business phone number and appear in the WhatsApp profile. Names must pass verification to appear in chat threads and chat lists. Display names can be updated up to 10 times per 30 days, with re-registration required after approval.

## Key Points

- **Required** at phone number registration
- **Verification** determines if name shows in chat threads
- **10 changes max** per 30-day period
- **14-day window** to re-register after approval
- User-edited names override display name in their view

## Verification Status

| Status | Meaning |
|--------|---------|
| `APPROVED` | Name verified, appears in chats |
| `PENDING_REVIEW` | Awaiting review |
| `DECLINED` | Rejected, must resubmit |

## API Operations

### Get Display Name
```
GET /<PHONE_NUMBER_ID>?fields=verified_name,name_status
```

### Update Display Name
```
POST /<PHONE_NUMBER_ID>?new_display_name=<NAME>
```

### Check Update Status
```
GET /<PHONE_NUMBER_ID>?fields=new_display_name,new_name_status
```

## Update Workflow

1. Submit new display name via API or WhatsApp Manager
2. Wait for `phone_number_name_update` webhook with `decision: APPROVED`
3. Re-register phone number: `POST /<PHONE_NUMBER_ID>/register`
4. **Important**: Don't re-register before approval (has no effect)

## Webhooks

- `phone_number_name_update` — notifies of verification outcomes

## Related Concepts
- [webhook-fields](webhook-fields.md)

## Related Entities
- [display-name](display-name.md)
- [business-profile](business-profile.md)
