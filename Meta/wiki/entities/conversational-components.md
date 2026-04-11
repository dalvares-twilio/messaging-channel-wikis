---
type: entity
title: "Conversational Components"
entity_type: feature
---

## Description

Conversational components are in-chat UI features that make it easier for WhatsApp users to interact with businesses. Includes ice breakers and commands.

## Ice Breakers

Tappable prompts shown first time user chats with business.

| Property | Limit |
|----------|-------|
| Max count | 4 |
| Max length | 80 characters |
| Emojis | Not supported |

**Use case**: Service interactions, support, account servicing

## Commands

Slash commands users type to trigger actions.

| Property | Limit |
|----------|-------|
| Max commands | 30 |
| Command name | 32 characters |
| Description/hint | 256 characters |
| Emojis | Not supported |

**Format**: `/command - description hint`

## API Reference

### Configure
```
POST /<PHONE_NUMBER_ID>/conversational_automation
{
  "commands": [{"command_name": "...", "command_description": "..."}],
  "prompts": ["...", "..."]
}
```

### Get Configuration
```
GET /<PHONE_NUMBER_ID>?fields=conversational_automation
```

## Webhook Behavior

Both ice breakers and commands trigger standard `messages` webhook with text in `body` property.

## Related Entities
- [business-phone-number](business-phone-number.md)
- [messages-webhook](messages-webhook.md)

## Sources
- [conversational-components](../sources/conversational-components.md)
