---
type: source
title: "Analytics Overview"
source_file: "[[raw/Analytics overview    RCS for Business.md]]"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/guides/measure/analytics-overview"
ingested: 2026-04-05
tags: [analytics, reputation, monitoring]
---

## Summary

The Analytics overview in Developer Console provides summary view of all agents with key metrics like reputation and traffic limit. Data also available via Management API.

## Key Points

### Key Metrics
- **Reputation score**: High, Medium, or Low based on user feedback and spam reports
- **Traffic limit**: 2, 4, or 8 — number of initial messages to unique user in 28-day window
- **Spam trend**: Up, Neutral, Down (over selected time range)

### Unsubscribe Reasons
- Spam
- Never signed up
- Too many messages
- No longer interested
- Other
- Dashboard shows top reason and per-reason breakdown percentages

### Dashboard Features
- Table sorted by reputation to highlight underperforming agents
- Filter by country and use case
- Time range: last 7 or 28 days (reputation/traffic limit evaluated independently)
- Export to CSV

### Data Freshness
- Metrics updated every 24 hours
- Reflects data through previous calendar day

## Related Concepts

- [[wiki/concepts/analytics-reputation]]
- [[wiki/concepts/subscribe-unsubscribe]]

## Related Entities

- [[wiki/entities/developer-console]]
- [[wiki/entities/rbm-management-api]]
