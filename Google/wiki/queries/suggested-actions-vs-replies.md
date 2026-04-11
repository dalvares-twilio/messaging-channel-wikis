---
type: query
title: "Suggested Actions vs Suggested Replies"
query: "When should I use suggested actions versus suggested replies in RCS messages?"
answered: 2026-04-10
tags: [messaging, suggestions, actions, replies, ux]
---

## Answer

Suggested replies and suggested actions serve different purposes in RCS conversations. Choose based on what outcome you want for the user.

### Suggested Replies

**Purpose**: User responds with a predefined message back to the agent.

**Use when**:
- You want to guide conversation flow
- Presenting multiple-choice options
- User needs to confirm/select something
- Next step is within the conversation

**Examples**:
- "Yes" / "No" / "Maybe later"
- "Small" / "Medium" / "Large"
- "Check balance" / "Make payment" / "Contact support"

**Technical**:
- Returns `postbackData` to your webhook
- User sees the reply text appear in chat
- Max 25 characters per suggestion
- Max 4 suggestions per message or card

### Suggested Actions

**Purpose**: Trigger an action outside the messaging app.

**Action types**:
| Action | Outcome |
|--------|---------|
| Dial phone | Opens phone dialer |
| Open URL | Opens web browser |
| View location | Opens maps app |
| Share location | User shares current location |
| Create calendar event | Opens calendar |

**Use when**:
- User needs to take action in another app
- Providing quick access to resources (website, phone)
- Enabling location-based services
- Scheduling appointments

**Examples**:
- "Call Support" (dial action)
- "Track Package" (open URL action)
- "Get Directions" (view location action)
- "Book Appointment" (calendar event action)

### Decision Matrix

| Need | Use |
|------|-----|
| Continue conversation | Suggested Reply |
| Exit to another app | Suggested Action |
| Collect user selection | Suggested Reply |
| Provide resource access | Suggested Action |
| Multi-step wizard | Suggested Reply |
| Appointment booking | Suggested Action (calendar) |

### Best Practices

1. **Mix strategically** - Combine replies and actions when appropriate
2. **Keep text short** - 25 character limit enforces conciseness
3. **Use postbackData** - Include machine-readable intent, not just display text
4. **Limit choices** - Max 4 per message; fewer is often better for UX

## Sources Consulted

- [send-messages](../sources/send-messages.md)
- [receive-messages](../sources/receive-messages.md)
- [rich-cards](../concepts/rich-cards.md)

## New Insights

- Documentation doesn't specify all available action types with full parameters
- Calendar event action parameters need further documentation
