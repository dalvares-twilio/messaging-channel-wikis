---
type: query
title: "Regional Endpoint Selection"
query: "How do I choose the right regional endpoint for my RBM agent, and does it affect which carriers I can access?"
answered: 2026-04-10
tags: [regional-endpoints, data-residency, carriers]
---

## Answer

RBM agents operate from one of three regional endpoints. The region determines where the agent operates and stores data, but **does not restrict carrier access**.

### Three Regions

1. **North America** — US-based infrastructure
2. **Europe** — EU-based infrastructure  
3. **Asia Pacific** — APAC-based infrastructure

### Selection Criteria

| Consideration | Guidance |
|---------------|----------|
| **Regulations** | Choose based on applicable data residency requirements (GDPR for EU, etc.) |
| **Latency** | Choose closest region to your primary user base |
| **Carrier access** | **All regions have equal access to all carriers worldwide** |

### Proximity Recommendations

| Your Location | Recommended Region |
|---------------|-------------------|
| United States, Canada | North America |
| Latin America | North America |
| Western Europe | Europe |
| Africa, Middle East | Europe |
| Australia, New Zealand | Asia Pacific |
| East Asia, Southeast Asia | Asia Pacific |

### Critical Immutability Warning

> **Region cannot be changed after agent creation.** If you need a different region, you must create a new agent.

### Common Misconceptions

- Region does **NOT** limit which carriers you can launch on
- Region does **NOT** limit which countries you can message
- Region **ONLY** affects:
  - Data storage location
  - API latency from your servers
  - Regulatory compliance (data residency)

### OTTM Default

Twilio's OTTM implementation defaults to **EUROPE** region unless explicitly specified.

## Sources Consulted

- [regional-endpoints](../concepts/regional-endpoints.md)
- [create-agent](../sources/create-agent.md)
- [ottm-implementation](../sources/ottm-implementation.md)

## New Insights

None — regional endpoint documentation is clear in the wiki.
