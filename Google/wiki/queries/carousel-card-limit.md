---
type: query
title: "How many cards should I use in a carousel"
query: "What is the optimal number of cards in a carousel?"
answered: 2026-04-10
tags: [rich-cards, carousel, ux]
---

## Answer

Carousels support **2-10 cards**, but optimal count depends on use case:

### Limits

| Constraint | Value |
|------------|-------|
| Minimum cards | 2 |
| Maximum cards | 10 |
| Suggestions per card | 4 max |
| Total payload | 250 KB |

### Optimal Card Counts by Use Case

| Use Case | Recommended | Rationale |
|----------|-------------|-----------|
| Product options | 3-5 | Users compare without fatigue |
| Plan tiers | 3 | Classic Good/Better/Best pattern |
| Store locations | 3-4 | Nearest options, not entire list |
| Menu items | 4-6 | Scannable selection |
| Flight/hotel results | 5-7 | Enough variety, not overwhelming |

### Best Practices

1. **Lead with best option** - Most users don't swipe past card 3-4
2. **Consistent structure** - Same fields across all cards for easy comparison
3. **Unique CTAs** - Each card should have distinct action (not all "Learn more")
4. **Progressive disclosure** - If 10 items, consider "View all" action instead

### Performance Considerations

- Each additional card increases cognitive load
- Users must swipe to see options - many won't
- **3-5 cards** is the sweet spot for engagement
- Beyond 6 cards, consider filtering or "Top picks" approach

### When to Use Full 10

- Browsing/discovery flows where variety is the value
- Image galleries (minimal text per card)
- User explicitly asked to see "all options"

## Sources Consulted

- [rich-cards](../concepts/rich-cards.md)
- [standalone-vs-carousel](../queries/standalone-vs-carousel.md)

## New Insights

- Carousel engagement data (drop-off per card position) would inform optimal counts
- Could add pattern: "Progressive disclosure for large option sets"
