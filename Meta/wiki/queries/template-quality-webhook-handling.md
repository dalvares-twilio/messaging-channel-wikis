---
type: query
title: "How should I handle template quality webhooks?"
asked: 2026-04-10
tags: [webhooks, templates, quality]
---

## Question

What is the template quality webhook, and how should I handle quality changes in my integration?

## Answer

The `message_template_quality_update` webhook notifies you when a template's quality score changes. This is critical for maintaining deliverability.

### Template Categories

Templates are classified into three categories:

- `MARKETING` - Promotional messages
- `UTILITY` - Transactional updates (orders, appointments, etc.)
- `AUTHENTICATION` - OTP and verification codes

### Quality Flow

Templates follow this quality lifecycle:

1. **Approved** - Template passes review
2. **Flagged** - Quality dropping, at risk
3. **Paused/Disabled** - Quality too low, temporarily or permanently stopped
4. **Reinstated** - Quality recovered

### Recommended Handling

| Event | Recommended Action |
|-------|-------------------|
| Quality drops to FLAGGED | Review template content and usage patterns; reduce send volume |
| Template PAUSED | Stop sending; analyze user feedback; prepare revised template |
| Template DISABLED | Create new template with improved messaging |
| Template REINSTATED | Can resume normal sending |

### Proactive Monitoring

Don't wait for webhooks - also monitor via Template Analytics:
- Track delivery rates
- Monitor read rates
- Watch for declining engagement

**Note**: Templates with poor user feedback (blocks, "spam" reports) will see quality degrade.

### Category Updates

The `template_category_update` webhook fires when Meta reclassifies your template (e.g., a UTILITY template is reclassified as MARKETING). This affects pricing and may require business logic updates.

## References

- [template-webhooks-reference](../sources/template-webhooks-reference.md)
- [analytics](../sources/analytics.md)
- [message-template-webhooks](../entities/message-template-webhooks.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/message_template_status_update
