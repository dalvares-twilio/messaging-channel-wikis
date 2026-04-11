---
type: pattern
title: "Google-Managed Launch Preference"
applies_to: "Carrier launch strategy and timeline planning"
confidence: "high"
learned_from: "carrier-launch concept, google-managed-vs-carrier-managed query"
---

## Pattern

Prefer Google-managed launch for faster time-to-market (1-3 days) and standardized process; use carrier-managed only when required by carrier availability or special billing needs.

## When to Apply

- Planning RCS agent launch across multiple carriers
- Estimating launch timeline for stakeholders
- Deciding whether to pursue direct carrier relationships

## When NOT to Apply

- Target carrier is not in Google-managed program
- Special billing arrangements or carrier-specific features required
- Existing carrier relationship that provides advantages

## Comparison

| Aspect | Google-Managed | Carrier-Managed |
|--------|----------------|-----------------|
| Verification | Google handles | Each carrier separately |
| Timeline | 1-3 business days | Weeks to months |
| Agreement | Via RBM platform | Direct contract required |
| Billing | Standard RBM | Carrier-specific |
| Brand verification | Once for all future launches | May repeat per carrier |

## How to Identify Carrier Type

**Via Developer Console:**
- Info icon present = Carrier-managed (contact directly)
- No icon = Google-managed

**Via API:**
```json
regions.list -> managementType: "GOOGLE_MANAGED" or "CARRIER_MANAGED"
```

## Examples

- US launch: Check if AT&T, Verizon, T-Mobile are Google-managed; proceed via Console
- Enterprise with existing Vodafone contract: May prefer carrier-managed to leverage relationship
- Multi-region launch: Use Google-managed where available, carrier-managed for gaps

## Planning Considerations

- Google-managed carrier list grows over time (check periodically)
- Brand verification via Google applies to all future Google-managed launches
- Carrier-managed timelines are highly variable (plan buffer)

## Related

- [carrier-launch](../concepts/carrier-launch.md)
- [agent-lifecycle](../concepts/agent-lifecycle.md)
- [regional-endpoint-selection](../patterns/regional-endpoint-selection.md)

## Sources

- [verify-launch-overview](../sources/verify-launch-overview.md)
- [list-carriers](../sources/list-carriers.md)
- [google-managed-vs-carrier-managed](../queries/google-managed-vs-carrier-managed.md)
