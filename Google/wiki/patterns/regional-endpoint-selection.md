---
type: pattern
title: "Regional Endpoint Selection"
applies_to: "Agent creation and data residency compliance"
confidence: "high"
learned_from: "regional-endpoints concept, regional-endpoint-selection query"
---

## Pattern

Select regional endpoint based on data residency requirements first (GDPR -> Europe), then latency to primary user base; region does NOT affect carrier access.

## When to Apply

- Creating a new RCS agent
- Planning for regulatory compliance (GDPR, data sovereignty)
- Optimizing API latency for your infrastructure

## When NOT to Apply

- Existing agents (region is immutable after creation)
- Decisions about which carriers to launch on (all regions access all carriers)

## Selection Criteria (Priority Order)

1. **Regulatory requirements** - GDPR mandates EU region for EU user data
2. **Latency** - Choose region closest to your backend servers
3. **Carrier access** - NOT a factor (all regions have equal carrier access)

## Region Recommendations by Location

| Your Location | Recommended Region |
|---------------|-------------------|
| United States, Canada | North America |
| Latin America | North America |
| Western Europe | Europe |
| Africa, Middle East | Europe |
| Australia, New Zealand | Asia Pacific |
| East Asia, Southeast Asia | Asia Pacific |

## Examples

- EU-based brand with GDPR requirements: **Europe** (mandatory)
- US startup targeting global users: **North America** (latency to US servers)
- Australian company: **Asia Pacific** (latency optimization)
- Twilio OTTM default: **Europe** (unless explicitly specified)

## Common Misconceptions

- Region does NOT limit which carriers you can launch on
- Region does NOT limit which countries you can message
- Region ONLY affects data storage location and API latency

## Critical Warning

> **Region cannot be changed after agent creation.** If you need a different region, you must create a new agent.

## Related

- [agent-lifecycle](../concepts/agent-lifecycle.md)
- [google-managed-launch-preference](../patterns/google-managed-launch-preference.md)

## Sources

- [regional-endpoints](../concepts/regional-endpoints.md)
- [create-agent](../sources/create-agent.md)
- [regional-endpoint-selection](../queries/regional-endpoint-selection.md)
- [ottm-implementation](../sources/ottm-implementation.md)
