---
type: source
title: "Receive Messages"
source_file: "[Receive messages    RCS for Business.md](../../raw/Receive messages    RCS for Business.md)"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/receive"
ingested: 2026-04-05
tags: [messaging, webhooks, user-input]
---

## Summary

Agents receive user messages and events through webhooks. Users can send text, suggestions, locations, and files. The agent decodes, processes based on business logic, and responds.

## Key Points

### Message Types from Users
1. **Text**: freeform responses
2. **Suggestion**: includes `postbackData` and text from tapped suggestion
3. **Location**: latitude/longitude values
4. **File**: URI and associated data (with thumbnail)

### Processing Flow
1. Identify message type
2. Process content (use postbackData for suggestions, NLU for text)
3. Fulfill business logic
4. Send response

### Best Practices
- Use meaningful `postbackData` for machine-readable intent
- Use NLU (like Dialogflow) for text message parsing
- Handle unknown input gracefully — prompt for clarification or offer suggestions
- Consider conversation context for location/file messages

### Events Received
- `DELIVERED`: message delivered to user
- `READ`: message read by user
- `IS_TYPING`: user is typing

### US Billing
- User messages include `richMessageClassification` field for billable event type

## Related Concepts

- [async-processing](../concepts/async-processing.md)

## Related Entities

- [rbm-api](../entities/rbm-api.md)
- [dialogflow](../entities/dialogflow.md)
