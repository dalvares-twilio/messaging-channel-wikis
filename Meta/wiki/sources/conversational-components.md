---
type: source
title: Conversational Components
source_file: "[[Conversational Components  Developer Documentation]]"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/conversational-components
ingested: 2026-04-05
tags:
  - ice-breakers
  - commands
  - ui
  - messaging
---

## Summary

Conversational components are in-chat UI features that make it easier for WhatsApp users to interact with businesses. Includes ice breakers (tappable prompts for first-time chats) and commands (slash commands users can type). Configurable via WhatsApp Manager or API.

## Key Points

- **Ice breakers**: Tappable prompts shown on first chat (max 4, 80 chars each)
- **Commands**: Slash commands with hints (max 30 commands, 32 char name, 256 char hint)
- **No emojis** in either feature
- **Triggers standard webhook** with text in `body` property

## Ice Breakers

- Appear first time user chats with business
- Great for service interactions (support, account servicing)
- User taps → message sent → standard webhook triggered
- Dismissed if user taps wa.me link with pre-filled text

**Example**: "Plan a trip", "Create a workout plan"

## Commands

- User types `/` to see available commands
- Format: `/command - description hint`
- User completes command → full text sent as message

**Example**: `/imagine cars racing on Mars`

## API Operations

### Configure
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

## WhatsApp Manager Setup

1. App Dashboard > WhatsApp > Configuration
2. Phone Numbers > Manage Phone Numbers
3. Gear icon > Automations
4. Configure components

## Related Concepts
- [[webhooks]]

## Related Entities
- [[Knowledge-Bases/Channels/Meta/wiki/entities/conversational-components]]
- [[messages-webhook]]
- [[business-phone-number]]
