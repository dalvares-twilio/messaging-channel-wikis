---
type: source
title: "Multi-Solution Conversations (MSC)"
source_file: "[How to use Multi-Solution Conversations (MSC).md](../../raw/How to use Multi-Solution Conversations (MSC).md)"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-solution-conversations"
ingested: 2026-04-05
tags: [multi-partner-solutions, messaging, phone-numbers]
---

## Summary

Allows businesses to use multiple partners on the **same phone number** with a unified chat thread. Currently in closed beta (GA mid-2026).

## Requirements

- Closed beta enrollment
- 1K+ message limit
- No WABA bans/restrictions

## How It Works

1. Business shares phone numbers via Embedded Signup
2. System creates new WABA shared with partner
3. Partner gains messaging/calling access

## Limitations

- Max 5 partners per WABA
- Only 1 partner can attach catalog
- All partners receive all incoming webhooks (no routing)
- Not supported: Coexistence, Groups API, Marketing Messages via Ads Manager

## Billing

Per-message pricing. Each partner billed for messages sent through their app.

## Asset Management

| Asset | Visibility |
|-------|------------|
| Templates | Partner-isolated (cannot see other partners') |
| Phone numbers | Shared across all partners |

## Violations

- Phone number violations: ban all WABAs across partners
- Template violations: only affect violating WABA
- Business portfolio bans: affect all WABAs

## Onboarding

Automatic via Embedded Signup v2+ for eligible businesses. No partner configuration needed.

## Related Concepts
- [solution-partners](../concepts/solution-partners.md)
- [embedded-signup](../concepts/embedded-signup.md)
