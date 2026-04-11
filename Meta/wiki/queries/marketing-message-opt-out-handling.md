---
type: query
title: "How do I handle marketing message opt-outs on WhatsApp?"
asked: 2026-04-10
tags: [marketing, opt-out, preferences, webhooks]
---

## Question

How do I handle marketing message opt-outs on WhatsApp?

## Answer

WhatsApp users can opt out of receiving marketing messages from specific businesses. The platform notifies you via the `user_preferences` webhook when users change their preferences.

### User Preference Actions

| Action | Preference Value | Description |
|--------|------------------|-------------|
| Stop | `stop` | User opted out of marketing messages |
| Resume | `resume` | User opted back in to marketing messages |

### Webhook Payload Fields

| Field | Description |
|-------|-------------|
| `wa_id` | WhatsApp user ID (phone number) |
| `category` | Always `marketing_messages` |
| `value` | `stop` or `resume` |
| `detail` | Human-readable description |

### Template Categories

Marketing is one of three template categories:
- `MARKETING` - Promotional content (subject to opt-out)
- `UTILITY` - Transactional/service updates (not affected by marketing opt-out)
- `AUTHENTICATION` - Verification codes (not affected by marketing opt-out)

### Best Practices

1. **Subscribe to `user_preferences` webhook** - Ensure your app receives opt-out notifications
2. **Update your contact database** - Mark users who opted out
3. **Respect preferences immediately** - Do not send marketing templates to opted-out users
4. **Track opt-back-ins** - Users can resume marketing messages later
5. **Utility messages unaffected** - You can still send transactional updates

### Important Notes

- Opt-out applies only to MARKETING template category
- Users opt out at the business level (per WABA/phone number)
- Continuing to send marketing messages to opted-out users may affect quality rating
- The `user_preferences` webhook is the only way to receive opt-out notifications

## References

- [marketing-messages](../concepts/marketing-messages.md)
- [user-preferences-webhook-reference](../sources/user-preferences-webhook-reference.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/user_preferences
