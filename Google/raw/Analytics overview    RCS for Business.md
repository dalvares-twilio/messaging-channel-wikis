---
title: "Analytics overview  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/guides/measure/analytics-overview"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- The Analytics overview in the Business Communications Developer Console provides a summary of agent performance, including reputation and traffic limit.
- Agent reputation is categorized as High, Medium, or Low based on user feedback and spam reports.
- An agent's traffic limit, which is the number of initial messages that can be sent to a unique user in a 28-day window, is determined by its reputation score.
- The Analytics overview table can be filtered by country and use case, and the data can be exported as a CSV file.

In the [Business Communications Developer Console](https://business-communications.cloud.google.com/console/partner-console), the **Analytics overview** tab provides RBM partners with a summary view of all their agents. It includes key agent metrics, such as reputation and traffic limit (if applicable). This data is also available through the [Management API](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/analytics.agentPerformances/list).

## How to access the Analytics overview

1. Open the [Business Communications Developer Console](https://business-communications.cloud.google.com/console/partner-console).
2. Click the **Analytics overview** tab from the home page.

You'll see a table showing performance metrics for each agent. The table is initially sorted by reputation to highlight underperforming agents.

## Key metrics explained

### Reputation score

The **reputation score** reflects an agent's performance based on user feedback and spam reports. For a detailed explanation of the reputation score, see [Agent use cases and business rules](https://developers.google.com/business-communications/rcs-business-messaging/guides/learn/agent-use-cases#reputation-score).

### Traffic limit

RCS for Business agents are subject to traffic limits that restrict the number of messages they can send. These limits are based on the agent's reputation and the region they operate in.

For a detailed explanation of these limits and the specific rules for each reputation level, see [Agent use cases and business rules](https://developers.google.com/business-communications/rcs-business-messaging/guides/learn/agent-use-cases#businessrules).

### Spam trend

The **spam trend** indicates if the agent's spam rate is trending up, down, or is neutral over the selected time range (last 7 or 28 days).

### Unsubscribe reasons

An unsubscribe reason is the cause a user gives for unsubscribing from an agent's messages. This information is collected and shown in the Analytics overview to help partners understand why users are unsubscribing. The reasons include:

- **Spam**
- **Never signed up**
- **Too many messages**
- **No longer interested**
- **Other**

**Top Unsubscribe reason:** Shows the most common reason for unsubscribing, along with its percentage relative to all unsubscribe events.

**Unsubscribe reason breakdown:** Individual columns for each reason (for example, "Too many messages"), each showing its respective percentage of total unsubscribes.

- **Example:** "Unsubscribe reason: Never signed up 20%" means that 20% of the users who unsubscribed selected "Never signed up" as the reason.

### Time periods and data freshness

- **Daily data**: Metrics are updated every 24 hours, typically reflecting data up through the previous calendar day.

## Using the dashboard

The dashboard table includes:

- **Agent name**
- **Agent ID**
- **Country**
- **Use case**
- **Reputation** (High, Medium, Low)
- **Traffic limit** (2, 4, or 8)
- **Spam trend** (Up, Neutral, Down)
- **Top Unsubscribe reason**
- **Unsubscribe reason: Spam**
- **Unsubscribe reason: Never signed up**
- **Unsubscribe reason: Too many messages**
- **Unsubscribe reason: No longer interested**
- **Unsubscribe reason: Other**

Sort the table by reputation to quickly find underperforming agents.

### Filter by country and use case

Use the **Filter** menu to:

- Filter by country if your agents are registered in multiple regions.
- Filter by **use case** (for example, promotional) to focus on specific types of agent traffic.

### Select a time range

Apply the selected time range (last 7 or 28 days) to all metrics columns except Reputation and Traffic limit. These two metrics are evaluated independently of the time range to reflect sustained, long-term behavior.

### Export data

Click **Export** to download a CSV file containing the current filtered dataset.[Next](https://developers.google.com/business-communications/rcs-business-messaging/guides/measure)

[Agent analytics](https://developers.google.com/business-communications/rcs-business-messaging/guides/measure)