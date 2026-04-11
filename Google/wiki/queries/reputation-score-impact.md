---
type: query
title: "How reputation score affects messaging capacity"
query: "What is reputation score and how does it affect my agent's messaging capacity?"
answered: 2026-04-10
tags: [analytics, reputation, traffic-limits]
---

## Answer

Reputation score directly controls your agent's messaging capacity through traffic limits.

### Reputation Levels

| Level | Traffic Limit | Impact |
|-------|--------------|--------|
| **High** | 8 | Full messaging capacity |
| **Medium** | 4 | Reduced capacity (50%) |
| **Low** | 2 | Severely restricted (25%) |

### What Traffic Limit Means

Traffic limit = number of **initial messages to unique users** in a 28-day rolling window.

Example with traffic limit = 4:
- You can initiate conversations with 4 unique users per 28 days
- User-initiated conversations don't count against limit
- Replies in existing conversations don't count

### What Affects Reputation

**Negative signals:**
- User spam reports
- High unsubscribe rates
- Negative feedback

**Unsubscribe reasons tracked:**
- Spam
- Never signed up
- Too many messages
- No longer interested
- Other

### Monitoring Reputation

**Developer Console:**
- Analytics overview tab → Table sorted by reputation
- Underperforming agents highlighted
- Filter by country, use case
- Time range: 7 or 28 days

**Key metrics:**
- Spam trend: Up, Neutral, Down
- Unsubscribe breakdown by reason

### Recovering from Low Reputation

1. **Review unsubscribe reasons** - Address top complaint
2. **Reduce message frequency** - Quality over quantity
3. **Improve relevance** - Better targeting, user preferences
4. **Check opt-in flow** - Ensure users expect your messages
5. **Monitor spam trend** - Wait for "Down" trend before scaling

### Important Notes

- Reputation evaluated independently of selected time range (reflects sustained behavior)
- Data refreshes daily (UTC)
- Export to CSV available for detailed analysis

## Sources Consulted

- [analytics-reputation](../concepts/analytics-reputation.md)
- [analytics-overview](../sources/analytics-overview.md)
- [agent-analytics](../sources/agent-analytics.md)

## New Insights

- Timeline for reputation recovery not documented
- Specific thresholds (spam %, unsubscribe %) for each level not published
- Could add pattern: "Reputation recovery playbook"
