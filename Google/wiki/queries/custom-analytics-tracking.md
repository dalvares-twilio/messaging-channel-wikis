---
type: query
title: "Building custom analytics for RCS"
query: "What custom analytics can I track beyond the Developer Console metrics?"
answered: 2026-04-10
tags: [analytics, metrics, custom]
---

## Answer

Beyond Console's sent/delivered/read metrics, you can build custom analytics by tracking webhook events and message metadata.

### Console vs Custom Analytics

| Metric | Console | Custom Required |
|--------|---------|-----------------|
| Messages sent | Yes | - |
| Delivered | Yes | - |
| Read | Yes | - |
| Response time | No | Yes |
| Interaction type | No | Yes |
| Suggestion clicks | No | Yes |
| Conversion | No | Yes |

### Custom Analytics Options

**1. Message Correlation**
- Track `messageId` in your system
- Correlate with delivery/read events
- Calculate delivery rates by message type

**2. Engagement Metrics**
- `IS_TYPING` events - User started typing
- Response counts per conversation
- Time between READ and response

**3. Interaction Analysis**
- Track `postbackData` from suggestions
- Categorize by interaction type:
  - Suggested replies clicked
  - Actions triggered (dial, open URL, calendar)
  - Text responses vs button clicks

**4. Response Formats**
- Track what users send back:
  - Text messages
  - Files/media
  - Location shares

**5. Agent Performance**
- Time to respond to user messages
- Automated vs human handoff rates
- Resolution rates

### Implementation Approach

```
1. Webhook receives event
2. Extract relevant fields:
   - messageId
   - eventType (DELIVERED, READ, etc.)
   - postbackData (for suggestions)
   - timestamp
3. Store in analytics database
4. Build dashboards/reports
```

### Console Limitations to Know

- 8-day backfill window for delivered/read events
- Daily refresh (UTC timezone)
- No real-time data
- Grouped by message sent date (not delivery date)

### Example: Tracking Suggestion Engagement

```json
// When user clicks suggestion with postbackData
{
  "senderPhoneNumber": "+15551234567",
  "suggestionResponse": {
    "postbackData": "product_123_buy",
    "text": "Buy Now"
  }
}

// Your analytics can then track:
// - Which products get most "Buy Now" clicks
// - Conversion rates by product
// - Suggestion engagement by card position
```

## Sources Consulted

- [agent-analytics](../sources/agent-analytics.md)
- [analytics-reputation](../concepts/analytics-reputation.md)
- [receive-messages](../sources/receive-messages.md)

## New Insights

- Could document recommended analytics schema for RCS
- Benchmark engagement rates not published by Google
- A/B testing framework for message content not documented
