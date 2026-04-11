---
type: query
title: "How do I configure slash commands for my WhatsApp Business number via API?"
asked: 2026-04-10
tags: [commands, conversational-components, api]
---

## Question

How do I configure slash commands for my WhatsApp Business number via API?

## Answer

Slash commands are configured via the `conversational_automation` endpoint on your phone number.

### Configure Commands via API

```
POST /<PHONE_NUMBER_ID>/conversational_automation
{
  "commands": [
    {"command_name": "tickets", "command_description": "Book flight tickets"},
    {"command_name": "help", "command_description": "Get support options"},
    {"command_name": "order", "command_description": "Check order status"}
  ]
}
```

### Command Limits

| Property | Limit |
|----------|-------|
| Max commands | 30 |
| Command name | 32 characters |
| Description/hint | 256 characters |
| Emojis | Not supported |

### Get Current Command Configuration

```
GET /<PHONE_NUMBER_ID>?fields=conversational_automation
```

### How Commands Work

1. User types `/` in the chat
2. Available commands appear as suggestions
3. User selects or completes the command
4. Full text is sent as a message
5. Standard `messages` webhook triggers with text in `body` property

### Command Format

Commands appear to users as:
```
/command - description hint
```

Example: `/imagine - Generate an AI image`

### Configure via WhatsApp Manager

Alternatively, configure through the UI:
1. App Dashboard > WhatsApp > Configuration
2. Phone Numbers > Manage Phone Numbers
3. Gear icon > Automations
4. Add/edit commands

### Combining Commands with Ice Breakers

You can configure both in the same request:

```
POST /<PHONE_NUMBER_ID>/conversational_automation
{
  "commands": [
    {"command_name": "help", "command_description": "Get support"}
  ],
  "prompts": ["Get started", "Talk to support"]
}
```

## References

- [conversational-components](../sources/conversational-components.md)
- [conversational-components](../entities/conversational-components.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/conversational-components
