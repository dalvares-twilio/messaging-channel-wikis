---
type: query
title: "How do I track template button clicks?"
asked: 2026-04-10
tags: [analytics, templates, buttons, tracking]
---

## Question

Can I track when users click buttons in my WhatsApp message templates? How do I enable this?

## Answer

Yes, you can track button clicks via **Template Analytics**. This includes both URL buttons and quick reply buttons.

### Enabling Template Analytics

You must explicitly enable analytics for each template:

```
is_enabled_for_insights=true
```

### Available Metrics

Template analytics provides:
- Sent count
- Delivered count
- Read count
- Button click tracking (URL and quick reply)
- Cost metrics:
  - `amount_spent`
  - `cost_per_delivered`
  - `cost_per_url_button_click`

### Limitations

1. **Template category**: Button analytics only available for **MARKETING** and **UTILITY** templates (not AUTHENTICATION)
2. **Regional exclusions**: WABAs in EU, UK, and Japan are excluded from template analytics
3. **Lookback**: Template analytics data is only available for **90 days** (vs 1 year for other analytics)

### API Endpoint

```
GET /<WABA_ID>/template_analytics
```

## References

- [analytics](../sources/analytics.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/analytics
