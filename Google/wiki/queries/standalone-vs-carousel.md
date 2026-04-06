---
type: query
title: "When to use standalone vs carousel"
query: "When should I use standalone vs carousel?"
answered: 2026-04-05
tags: [rich-cards, messaging, ux]
---

## Answer

| Use Standalone When | Use Carousel When |
|---------------------|-------------------|
| Single item focus (order confirmation, receipt) | Multiple comparable options (products, plans) |
| One clear call-to-action | User needs to browse/choose |
| Detailed info about one thing | Overview of several things |
| Sequential conversation flow | Presenting alternatives |

### Standalone Examples
- Order confirmation with tracking button
- Appointment reminder with reschedule option
- Single product recommendation
- Account balance with "Pay now" action

### Carousel Examples
- Product catalog (2-10 items to browse)
- Flight/hotel options to compare
- Menu items to choose from
- Store locations nearby
- Plan tiers (Basic/Pro/Enterprise)

### Decision Rule

```
Is the user choosing between options?
  → Yes → Carousel
  → No  → Standalone

Is there ONE thing you want them to act on?
  → Yes → Standalone
  → No  → Carousel
```

### Performance Note

Carousels require more cognitive effort — users must swipe and compare. If you have a clear recommendation, use standalone with that single option rather than overwhelming with choices.

## Sources Consulted

- [[wiki/concepts/rich-cards]]
- [[wiki/sources/send-messages]]

## New Insights

- Could add `ux-guidelines` concept page for messaging best practices
- Carousel engagement/conversion data would strengthen this guidance
