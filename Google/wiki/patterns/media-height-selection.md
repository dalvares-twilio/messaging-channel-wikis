---
type: pattern
title: "Media Height Selection"
applies_to: "Rich card visual design"
confidence: "high"
learned_from: "rich-cards concept, rich-card-height-selection query"
---

## Pattern

Choose media height based on visual importance: Short for supplementary thumbnails, Medium for balanced text+image, Tall for hero images where visual IS the message.

## When to Apply

- Designing rich card messages with images or video
- Balancing visual prominence with text content
- Optimizing card appearance for different message types

## When NOT to Apply

- Text-only cards (no media height needed)
- Cards where media is purely decorative

## Height Options

| Height | Size | Best For |
|--------|------|----------|
| **Short** | 112 DP | Thumbnails, icons, compact previews |
| **Medium** | 168 DP | Product images, balanced content |
| **Tall** | 264 DP | Hero images, visual-first messaging |

## Decision Tree

```
Is the visual the main content?
  -> Yes -> Tall (264 DP)
  -> No  -> Is text equally important?
            -> Yes -> Medium (168 DP)
            -> No  -> Short (112 DP)
```

## Examples

**Short (112 DP):**
- Location pin in a directions card
- Small product thumbnail with detailed text
- App icon next to download prompt
- List items in a carousel

**Medium (168 DP):**
- Product showcase with name and price
- Article preview with headline
- Restaurant menu item with description
- Standard promotional content

**Tall (264 DP):**
- Fashion product full image
- Real estate listing photo
- Travel destination hero shot
- Event poster/banner

## Technical Notes

- Card min height: 112 DP, max height: 344 DP
- If content smaller than height, whitespace fills gap
- Overall payload limit: 250 KB (affects image quality)
- Consider compression for tall images to stay within limits

## Related

- [rich-cards](../concepts/rich-cards.md)
- [standalone-vs-carousel-selection](../patterns/standalone-vs-carousel-selection.md)

## Sources

- [send-messages](../sources/send-messages.md)
- [rich-card-height-selection](../queries/rich-card-height-selection.md)
