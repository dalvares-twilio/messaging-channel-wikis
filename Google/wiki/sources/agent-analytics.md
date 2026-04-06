---
type: source
title: "Agent Analytics"
source_file: "[[raw/Agent analytics    RCS for Business.md]]"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/guides/measure"
ingested: 2026-04-05
tags: [analytics, metrics, monitoring]
---

## Summary

Track message and conversation metrics via Developer Console or custom analytics. Console provides sent/delivered/read metrics; custom analytics enable deeper insights.

## Key Points

### Console Metrics
- **Sent**: messages sent by agent
- **Delivered**: messages delivered to users
- **Read**: messages read by users
- Refreshes each morning (UTC timezone)
- Grouped by message **sent date**
- **8-day backfill window** for delivered/read events

### Backfill Example
- Message sent Jan 1, delivered Jan 1 → Sent+Delivered for Jan 1
- Message read Jan 2 → Read metric for Jan 1 increases
- Message read Jan 10 (outside 8-day window) → not reported

### Custom Analytics Options
- **Messages sent**: track `messageId` for correlation
- **Delivery receipts**: `DELIVERED` events
- **Read receipts**: `READ` events
- **User engagement**: `IS_TYPING` events, response counts, time between read and response
- **Interaction type**: track `postbackData` for suggestions, monitor response formats (files, locations, text)
- **Agent responsiveness**: time to respond to user messages

### Viewing Analytics
1. Open Developer Console → click agent
2. Navigate to Analytics
3. Specify time scale, dates, metrics
4. Export as CSV available

## Related Concepts

- [[wiki/concepts/analytics-reputation]]

## Related Entities

- [[wiki/entities/developer-console]]
