---
type: query
title: "What is the difference between ice breakers and commands?"
asked: 2026-04-10
tags: [conversational-components, ice-breakers, commands, ui]
---

## Question

What is the difference between ice breakers and commands?

## Answer

Both are conversational components - in-chat UI features that help users interact with businesses.

### Ice Breakers

Tappable prompts shown when a user **first chats** with a business.

| Property | Details |
|----------|---------|
| When shown | First time user messages business |
| Appearance | Tappable buttons/prompts |
| Max count | 4 |
| Max length | 80 characters each |
| Emojis | Not supported |
| Best for | Service interactions, support, account servicing |

**Example prompts**: "Plan a trip", "Create a workout plan", "Book a flight"

**Behavior**: User taps -> message sent -> standard webhook triggered with text in `body` property.

**Note**: Ice breakers are dismissed if user taps a wa.me link with pre-filled text.

### Commands

Slash commands users can type anytime during conversation.

| Property | Details |
|----------|---------|
| When shown | User types `/` to see available commands |
| Format | `/command - description hint` |
| Max commands | 30 |
| Command name | 32 characters |
| Description | 256 characters |
| Emojis | Not supported |

**Example**: `/imagine cars racing on Mars`

**Behavior**: User completes command -> full text sent as message -> standard webhook triggered.

### API Configuration

```
POST /<PHONE_NUMBER_ID>/conversational_automation
{
  "commands": [
    {"command_name": "tickets", "command_description": "Book flight tickets"}
  ],
  "prompts": ["Book a flight", "Plan a vacation"]
}
```

### Get Current Config

```
GET /<PHONE_NUMBER_ID>?fields=conversational_automation
```

## References

- [conversational-components](../sources/conversational-components.md)
- [conversational-components](../entities/conversational-components.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/conversational-components
