---
type: concept
title: "Analytics & Reputation"
aliases: [reputation score, traffic limit, spam rate]
sources: 2
---

## Overview

RBM tracks agent performance metrics including reputation score, traffic limits, and spam trends. Poor reputation results in reduced messaging capacity.

## Details

### Reputation Score
- **High**, **Medium**, or **Low**
- Based on user feedback and spam reports
- Evaluated independently of time range (sustained behavior)

### Traffic Limit
- Number of initial messages to unique user in 28-day window
- Values: **2**, **4**, or **8** depending on reputation
- Restricts messaging capacity for poor performers

### Spam Trend
- Up, Neutral, or Down
- Tracked over selected time range (7 or 28 days)
- Indicates direction of spam rate change

### Console Metrics
- **Sent**: messages sent by agent
- **Delivered**: messages delivered to users  
- **Read**: messages read by users
- 8-day backfill window for delivered/read events
- Daily refresh (UTC)

### Custom Analytics Options
- Track `messageId` for correlation
- Monitor delivery/read events
- Track `IS_TYPING` and response times
- Analyze interaction types via `postbackData`
- Measure agent responsiveness

### Dashboard Access
- Developer Console → Analytics overview tab
- Table sorted by reputation (underperformers highlighted)
- Filter by country, use case
- Export to CSV

## Related

- [[wiki/concepts/subscribe-unsubscribe]]
- [[wiki/concepts/use-cases]]

## Sources

- [[wiki/sources/analytics-overview]]
- [[wiki/sources/agent-analytics]]
