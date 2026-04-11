---
type: query
title: "Logo Dark Mode and Transparency"
query: "Why should I avoid transparency in my RCS agent logo, and how do I handle dark mode?"
answered: 2026-04-10
tags: [branding, logo, dark-mode, accessibility]
---

## Answer

RCS agent logos with transparent backgrounds cause visibility problems in dark mode. When users have dark themes enabled in Google Messages, transparent areas become dark, potentially obscuring logo elements.

### The Problem

- Transparent logos appear well on light backgrounds
- In dark mode, transparent areas turn dark
- Logo elements designed for light backgrounds become invisible or hard to see
- This degrades user trust and brand recognition

### Recommendations

1. **Avoid transparency entirely** - Use a solid background color for your logo
2. **Use white background if needed** - White provides consistent visibility across themes
3. **Design for circular cropping** - Logo is displayed as a 224px diameter circle
4. **Leave space at edges** - Position logo equidistant from all edges to account for cropping

### Technical Specs

| Spec | Requirement |
|------|-------------|
| Size | 224x224 px |
| Max file size | 50 KB |
| Display | Cropped to 224px circle |
| Format | JPEG or PNG recommended |

### Testing

Use the logo preview tool in the Developer Console to verify appearance before submission. Once verified, the logo cannot be changed without carrier approval.

## Sources Consulted

- [edit-agent-info](../sources/edit-agent-info.md)
- [branding-guidelines](../concepts/branding-guidelines.md)

## New Insights

- No explicit dark mode preview tool documented
- Testing across actual devices with different themes recommended before verification submission
