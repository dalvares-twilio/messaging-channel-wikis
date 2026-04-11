---
type: entity
title: "Display Name"
entity_type: phone-number-attribute
---

## Description

The display name is the business name shown in a phone number's WhatsApp profile. It must be set during registration and pass verification to appear in chat threads and lists.

## Verification Status

| Status | Meaning |
|--------|---------|
| `APPROVED` | Verified, shows in chats |
| `PENDING_REVIEW` | Under review |
| `DECLINED` | Rejected |

## Constraints

- **10 changes max** per 30-day period
- **14-day window** to re-register after approval
- Users can override with their own label

## API Reference

### Get Current Name
```
GET /<PHONE_NUMBER_ID>?fields=verified_name,name_status
```

### Update Name
```
POST /<PHONE_NUMBER_ID>?new_display_name=<NEW_NAME>
```

### Check Pending Update
```
GET /<PHONE_NUMBER_ID>?fields=new_display_name,new_name_status
```

### Re-register After Approval
```
POST /<PHONE_NUMBER_ID>/register
{
  "messaging_product": "whatsapp",
  "pin": "<2FA_PIN>"
}
```

## Update Workflow

1. Submit new name via API or WhatsApp Manager
2. Wait for `phone_number_name_update` webhook with `decision: APPROVED`
3. Re-register phone number
4. **Do not** re-register before approval

## Related Webhooks

- `phone_number_name_update` — verification outcomes

## Related Entities
- [business-profile](business-profile.md)
- [official-business-account](official-business-account.md)

## Sources
- [display-names](display-names.md)
