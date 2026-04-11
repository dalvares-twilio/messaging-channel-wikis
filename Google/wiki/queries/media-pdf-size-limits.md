---
type: query
title: "Media and PDF Size Limits"
query: "What are the size limits for media and PDF attachments in RCS messages?"
answered: 2026-04-10
tags: [messaging, media, pdf, limits, attachments]
---

## Answer

RCS messages can include media files (images, GIFs, videos) and PDF documents with specific size constraints. Understanding these limits is critical for successful message delivery.

### Size Limits

| Component | Limit |
|-----------|-------|
| Overall AgentMessage | **250 KB** |
| Media/PDFs per message | **100 MiB total** |
| Logo image | **50 KB** |
| Hero/Banner image | **200 KB** |

### Message Structure Limits

The 250 KB AgentMessage limit includes:
- Message payload JSON
- Inline content (if any)
- Metadata

The 100 MiB limit is for referenced media (URLs), not inline content.

### Media Types

#### Images
- Common formats: JPEG, PNG, GIF
- Used in: standalone cards, carousels, direct media messages
- Recommendation: Optimize for mobile viewing (compress appropriately)

#### Videos
- Used in rich cards with media component
- Subject to 100 MiB limit
- Consider streaming URLs for large videos

#### PDFs
- Direct attachment support
- Subject to 100 MiB limit
- Useful for: invoices, tickets, receipts, documents

### Rich Card Media Heights

When using media in rich cards, specify height:

| Height | Size | Use Case |
|--------|------|----------|
| Short | 112 DP | Thumbnails, icons |
| Medium | 168 DP | Standard product images |
| Tall | 264 DP | Hero images, detailed visuals |

### Branding Image Limits

| Image | Dimensions | Max Size | Format |
|-------|------------|----------|--------|
| Logo | 224x224 px | 50 KB | JPEG, PNG |
| Hero/Banner | 1440x448 px | 200 KB | JPEG, PNG |

Note: Branding images become immutable after verification submission.

### Best Practices

1. **Optimize images** - Compress before sending; balance quality vs size
2. **Use appropriate resolution** - Mobile screens don't need 4K images
3. **Test delivery** - Large files may impact delivery time
4. **Host reliably** - Media URLs must be publicly accessible and stable
5. **Consider fallback** - SMS fallback cannot include rich media

### Media URL Requirements

- Must be publicly accessible (no auth required)
- HTTPS preferred
- Stable URLs (don't expire quickly)
- Fast response time for good UX

### Error Handling

If media exceeds limits:
- `400 INVALID_ARGUMENT` returned
- Message rejected entirely
- No partial delivery

If media URL is inaccessible:
- Delivery may fail
- Check URL accessibility before sending

### Example: Image in Rich Card

```json
{
  "contentMessage": {
    "richCard": {
      "standaloneCard": {
        "cardContent": {
          "media": {
            "height": "MEDIUM",
            "contentInfo": {
              "fileUrl": "https://example.com/product.jpg",
              "forceRefresh": false
            }
          },
          "title": "Product Name",
          "description": "Product description"
        }
      }
    }
  }
}
```

## Sources Consulted

- [send-messages](../sources/send-messages.md)
- [edit-agent-info](../sources/edit-agent-info.md)
- [rich-cards](../concepts/rich-cards.md)
- [branding-guidelines](../concepts/branding-guidelines.md)

## New Insights

- Video codec/format requirements not fully documented
- Media caching behavior on Google's side not specified
- Consider CDN for media hosting to ensure fast, reliable access
