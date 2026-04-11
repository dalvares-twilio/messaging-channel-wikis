---
type: query
title: "Bulk Capability Check Usage"
query: "When should I use bulk capability check vs single device check? What are the limitations?"
answered: 2026-04-10
tags: [capabilities, bulk, api, performance]
---

## Answer

RBM provides two capability check methods: single device and bulk. Each serves different use cases with distinct tradeoffs.

### Single Device Check

**Use when**: Checking one user's capabilities before sending a message

**Returns**:
- Full list of supported features per device
- `RICHCARD_STANDALONE`, `RICHCARD_CAROUSEL`
- `ACTION_CREATE_CALENDAR_EVENT`, `ACTION_DIAL`, `ACTION_OPEN_URL`
- `ACTION_SHARE_LOCATION`, `ACTION_VIEW_LOCATION`
- `ACTION_OPEN_URL_IN_WEBVIEW`, `PDF_IN_RICH_CARDS`

**Requirements**:
- MSISDN connected to RCS within last 31 days
- Agent launched on user's carrier

**Errors**:
- `404`: User not RCS-reachable or agent not launched on carrier
- `400`: Would occur if sending unsupported features

### Bulk Capability Check

**Use when**: Segmenting large audience for RCS vs SMS campaigns

**Parameters**:
- 500-10,000 unique phone numbers per request
- Maximum 600 calls per minute

**Returns**:
- `reachableUsers` list (users on launched carriers)
- Sampling data for estimating total reachable users across all carriers

**Does NOT return**:
- Specific features per device
- Reason for unreachability

**Important limitation**: Results may not be current (reads from cache)

### Comparison Table

| Aspect | Single Check | Bulk Check |
|--------|--------------|------------|
| Volume | 1 number | 500-10,000 numbers |
| Features returned | Yes, per device | No |
| Rate limit | Not specified | 600/minute |
| Cache | Real-time | Cached |
| Use case | Pre-send validation | Campaign segmentation |

### When to Use Each

**Single Device Check**:
- Real-time messaging flows
- Feature-dependent message formatting
- High-value individual interactions
- When you need specific feature support

**Bulk Capability Check**:
- Campaign planning and segmentation
- Estimating RCS reach before launch
- Building audience lists
- Cost estimation (RCS vs SMS)

### Bulk Check Tool

Google provides a Java tool for bulk checks:
- Input: CSV file with phone numbers
- Output: CSV with reachability results
- Requirements: Maven 3.3.9+, Java 8

### Recommended Pattern for Campaigns

```
1. Bulk check to segment audience (RCS reachable vs not)
2. For RCS segment: send with TTL
3. For non-RCS segment: send SMS directly
4. Handle TTL expirations with SMS fallback
```

### Caching Implications

Bulk check uses cached data, meaning:
- Recently churned users may show as reachable
- Recently enabled users may not appear
- Best for planning, not real-time decisions
- Single check for real-time accuracy

## Sources Consulted

- [capability-checks](../sources/capability-checks.md)
- [rcs-enablement](../concepts/rcs-enablement.md)
- [message-expiration](../concepts/message-expiration.md)

## New Insights

- Cache freshness for bulk checks not documented
- No async bulk check API (all synchronous)
- Feature support varies by device, but bulk check cannot reveal this
