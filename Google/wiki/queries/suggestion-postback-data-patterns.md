---
type: query
title: "Postback Data Best Practices"
query: "What are best practices for structuring postbackData in RCS suggested replies?"
answered: 2026-04-10
tags: [messaging, suggestions, postback-data, design-patterns]
---

## Answer

`postbackData` is the machine-readable identifier sent to your webhook when a user taps a suggested reply. Well-structured postbackData enables reliable intent detection and stateful conversation handling.

### Key Principle

> Use meaningful `postbackData` for machine-readable intent, not the display text.

The display text is for humans; postbackData is for your code.

### Recommended Patterns

#### Pattern 1: Action-Based

```
action=CONFIRM_ORDER
action=CANCEL_ORDER
action=VIEW_MENU
```

Simple, explicit action identifiers.

#### Pattern 2: Namespaced with Context

```
order:confirm:12345
order:cancel:12345
menu:view:main
```

Includes category, action, and optional entity ID.

#### Pattern 3: JSON-Encoded

```json
{"intent":"confirm_order","order_id":"12345","step":3}
```

Rich context for complex flows. Parse JSON in webhook handler.

### Anti-Patterns

| Bad Practice | Problem |
|--------------|---------|
| Using display text as postbackData | "Yes" is ambiguous - yes to what? |
| No context | `confirm` without knowing what is being confirmed |
| User-facing language | `Please confirm your order` is not machine-readable |
| Inconsistent format | Mixing patterns makes parsing fragile |

### Processing Flow

1. User taps suggested reply
2. Webhook receives message with `suggestionResponse` containing:
   - `text`: What user sees ("Confirm Order")
   - `postbackData`: Your identifier ("order:confirm:12345")
3. Parse postbackData to determine intent
4. Execute business logic
5. Send response

### Example Webhook Handling

```javascript
// Received message
{
  "suggestionResponse": {
    "text": "Confirm Order",
    "postbackData": "order:confirm:12345"
  }
}

// Processing
const [category, action, entityId] = postbackData.split(':');
if (category === 'order' && action === 'confirm') {
  await confirmOrder(entityId);
}
```

### Best Practices Summary

1. **Be explicit** - postbackData should unambiguously identify intent
2. **Include context** - Add entity IDs or state when needed
3. **Stay consistent** - Use one pattern across your agent
4. **Keep it short** - Not documented, but avoid unnecessary length
5. **Complement NLU** - Use Dialogflow for freeform text, postbackData for structured input

## Sources Consulted

- [receive-messages](../sources/receive-messages.md)
- [dialogflow-integration](../sources/dialogflow-integration.md)

## New Insights

- Max length for postbackData not documented in sources
- Consider using both postbackData and NLU: postbackData for suggestions, Dialogflow for freeform text
