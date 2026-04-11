---
type: query
title: "Hero Image Logo Overlap Design"
query: "How should I design the RCS agent hero/banner image to account for the logo overlap?"
answered: 2026-04-10
tags: [branding, hero-image, banner, design]
---

## Answer

The RCS agent logo partially overlaps the hero (banner) image in the messaging interface. This overlap must be factored into your hero image design to avoid visual conflicts.

### Design Considerations

1. **Logo position**: The logo sits partially over the bottom-left area of the hero image
2. **Safe zone**: Keep important visual elements away from the overlap area
3. **Aspect ratio**: Must be exactly 45:14 (1440x448 px) - incorrect ratios cause cropping issues
4. **Visual continuity**: Design the hero to complement (not compete with) the logo

### Specifications

| Spec | Requirement |
|------|-------------|
| Dimensions | 1440 x 448 px |
| Aspect ratio | 45:14 |
| Max file size | 200 KB |
| Format | JPEG or PNG |

### Best Practices

1. **Use subtle backgrounds** - Patterns, gradients, or muted imagery work best
2. **Avoid text in overlap zone** - Any text or critical graphics may be obscured
3. **Test with actual logo** - Use the Developer Console preview to verify appearance
4. **Consider brand colors** - Hero should complement (not clash with) your brand color

### Templates

Google provides official templates:
- Rectangle hero template: [PNG](https://developers.google.com/static/business-communications/images/logo-guidelines/template-hero-rectangle.png) / [SVG](https://developers.google.com/static/business-communications/images/logo-guidelines/template-hero-rectangle.svg)

### Immutability Warning

Like the logo, the hero image becomes immutable after verification is submitted. Post-launch changes require carrier approval and have significant lead times.

## Sources Consulted

- [edit-agent-info](../sources/edit-agent-info.md)
- [branding-guidelines](../concepts/branding-guidelines.md)

## New Insights

- Exact overlap position not documented - recommend using templates for guidance
- Developer Console preview essential for verifying visual harmony
