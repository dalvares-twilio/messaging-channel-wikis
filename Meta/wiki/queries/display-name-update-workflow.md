---
type: query
title: "How do I update a display name on WhatsApp Business?"
asked: 2026-04-10
tags:
  - display-name
  - verification
  - workflow
---

## Question

What is the correct workflow to update a display name for a WhatsApp Business phone number?

## Answer

Updating a display name requires a verification process. Here is the complete workflow:

**Step 1: Submit the new display name**
```
POST /<PHONE_NUMBER_ID>?new_display_name=<NEW_NAME>
```
Or via WhatsApp Manager UI.

**Step 2: Wait for verification**
- Meta reviews the new name
- Wait for `phone_number_name_update` webhook with `decision: APPROVED`

**Step 3: Re-register the phone number**
```
POST /<PHONE_NUMBER_ID>/register
{
  "messaging_product": "whatsapp",
  "pin": "<2FA_PIN>"
}
```

**Important constraints:**
- **Do NOT re-register before approval** (has no effect)
- Maximum **10 changes per 30-day period**
- **14-day window** to re-register after approval

**Check pending update status:**
```
GET /<PHONE_NUMBER_ID>?fields=new_display_name,new_name_status
```

**Verification statuses:**
- `APPROVED` — Name verified, appears in chats
- `PENDING_REVIEW` — Awaiting review
- `DECLINED` — Rejected, must resubmit

## References

- [display-names](../sources/display-names.md)
- [display-name](../entities/display-name.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/display-names
