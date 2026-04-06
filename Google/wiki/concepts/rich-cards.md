---
type: concept
title: "Rich Cards"
aliases: [rich card, standalone card, carousel, card carousel]
sources: 2
---

## Overview

Rich cards combine media, text, and interactive suggestions into a single visual message unit. They're ideal for presenting related information (e.g., a product with image, name, price) and guiding users with clear next steps.

## Components

| Component | Required | Notes |
|-----------|----------|-------|
| Media | No | Image, GIF, or video |
| Title | No | Header text |
| Description | No | Body text |
| Suggestions | No | Max 4 (replies or actions) |

**Constraint**: At least one of media, title, or description must be present.

## Card Types

### Standalone Card

Single card with vertical or horizontal orientation.

```
┌─────────────────┐
│     [Image]     │
├─────────────────┤
│ Title           │
│ Description     │
├─────────────────┤
│ [Button] [Button] │
└─────────────────┘
```

### Carousel

Horizontal scrolling set of 2-10 cards. Users swipe to browse options.

```
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Card 1  │ │ Card 2  │ │ Card 3  │ →
└─────────┘ └─────────┘ └─────────┘
```

## Card Heights

Media in rich cards must fit one of three heights:

| Height | Size |
|--------|------|
| Short | 112 DP |
| Medium | 168 DP |
| Tall | 264 DP |

Cards have min height 112 DP, max height 344 DP. If content is smaller, whitespace fills the gap.

## Limits

| Limit | Value |
|-------|-------|
| Total payload | 250 KB |
| Suggestions per card | 4 |
| Cards per carousel | 2-10 |
| Suggestion text | 25 characters |

## Thumbnail Alignment

For standalone cards, thumbnails can be aligned:
- `LEFT` — Image on left, text on right
- `RIGHT` — Image on right, text on left

## Use Cases

- **Product showcase** — Image + name + price + "Buy now" action
- **Location cards** — Map thumbnail + address + "Get directions"
- **Content preview** — Article image + headline + "Read more"
- **Multi-option selection** — Carousel of choices (plans, products, dates)

## API Structure

```json
{
  "contentMessage": {
    "richCard": {
      "standaloneCard": {
        "cardOrientation": "VERTICAL",
        "thumbnailImageAlignment": "RIGHT",
        "cardContent": {
          "title": "Card Title",
          "description": "Card description",
          "media": {
            "height": "MEDIUM",
            "contentInfo": {
              "fileUrl": "https://example.com/image.jpg"
            }
          },
          "suggestions": [...]
        }
      }
    }
  }
}
```

## Related

- [[wiki/concepts/message-expiration]] — TTL applies to rich cards too
- [[wiki/concepts/async-processing]] — Delivery is async

## Sources

- [[wiki/sources/send-messages]]
- [[wiki/sources/capability-checks]]
