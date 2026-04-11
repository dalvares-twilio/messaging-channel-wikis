---
type: query
title: "How to choose rich card media height"
query: "What media height should I use for rich cards (Short, Medium, Tall)?"
answered: 2026-04-10
tags: [rich-cards, media, ux]
---

## Answer

Rich card media heights control the visual prominence of images/videos:

| Height | Size | Best For |
|--------|------|----------|
| **Short** | 112 DP | Thumbnails, icons, compact previews |
| **Medium** | 168 DP | Product images, balanced content |
| **Tall** | 264 DP | Hero images, visual-first messaging |

### Decision Criteria

**Use Short (112 DP) when:**
- Image is supplementary, not the focus
- Card is text-heavy with supporting visual
- Compact display needed (e.g., list item in carousel)
- Location pins or simple icons

**Use Medium (168 DP) when:**
- Balanced text and visual content
- Product showcases where text matters equally
- Standard promotional content
- Article previews

**Use Tall (264 DP) when:**
- Image IS the message (hero banners)
- High-impact visual needed (fashion, real estate)
- Minimal text accompanies image
- Immersive experience desired

### Technical Notes

- Card min height: 112 DP, max height: 344 DP
- If content is smaller than height, whitespace fills the gap
- Overall payload limit: 250 KB (affects image quality decisions)
- Thumbnail alignment (LEFT/RIGHT) available for standalone cards

### Rule of Thumb

```
Is the visual the main content?
  → Yes → Tall
  → No  → Is text equally important?
          → Yes → Medium
          → No  → Short
```

## Sources Consulted

- [rich-cards](../concepts/rich-cards.md)
- [send-messages](../sources/send-messages.md)

## New Insights

- No guidance exists on image compression/quality for different heights
- Could document image resolution recommendations per height
