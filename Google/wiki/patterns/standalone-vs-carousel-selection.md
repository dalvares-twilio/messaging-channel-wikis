---
type: pattern
title: "Standalone vs Carousel Selection"
applies_to: "Rich card message design"
confidence: "high"
learned_from: "send-messages, rich-cards concept, standalone-vs-carousel query"
---

## Pattern

Use standalone cards for single-item focus with one clear CTA; use carousels when users need to browse or choose between comparable options.

## When to Apply

- Designing rich card messages for product showcases, confirmations, or option selection
- Deciding between single card and multi-card carousel formats
- Optimizing user experience for different message intents

## When NOT to Apply

- Plain text messages with no visual content
- Time-sensitive OTP messages (use simple text)
- Very simple notifications where rich cards add no value

## Examples

**Standalone:**
- Order confirmation with tracking button
- Appointment reminder with reschedule option
- Single product recommendation
- Account balance with "Pay now" action

**Carousel:**
- Product catalog (2-10 items to browse)
- Flight/hotel options to compare
- Menu items to choose from
- Store locations nearby
- Plan tiers (Basic/Pro/Enterprise)

## Decision Tree

```
Is the user choosing between options?
  -> Yes -> Carousel
  -> No  -> Is there ONE thing you want them to act on?
            -> Yes -> Standalone
            -> No  -> Carousel
```

## Performance Note

Carousels require more cognitive effort (swipe and compare). If you have a clear recommendation, use standalone with that single option rather than overwhelming with choices.

## Related

- [rich-cards](../concepts/rich-cards.md)
- [media-height-selection](../patterns/media-height-selection.md)

## Sources

- [send-messages](../sources/send-messages.md)
- [standalone-vs-carousel](../queries/standalone-vs-carousel.md)
