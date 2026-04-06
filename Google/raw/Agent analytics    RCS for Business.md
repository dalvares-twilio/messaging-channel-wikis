---
title: "Agent analytics  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/guides/measure"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- You can track message and conversation metrics for your agent in the Business Communications Developer Console or by developing your own analytics.
- The Business Communications Developer Console reports metrics for sent, delivered, and read messages, refreshing daily in UTC.
- Metrics in the console are grouped by the message's sent date, with an eight-day backfill window for delivered and read events.
- You can view and export agent analytics from the Business Communications Developer Console by selecting your agent and navigating to the Analytics section.
- For more detailed or customized analytics, you can capture your own data by tracking events and attributes like messages sent, delivery and read receipts, user engagement, interaction types, and agent responsiveness.

After your agent starts sending messages, you can track metrics for your agent's messages and conversations. The Business Communications Developer Console reports analytics of sent messages, and you can develop your own analytics by tracking events and other attributes of your agent's conversations.

## Analytics in the Business Communications Developer Console

The Business Communications Developer Console supports three metrics surrounding agent messages:

- **Sent**: The number of messages sent by an agent.
- **Delivered**: The number of messages successfully delivered to users.
- **Read**: The number of messages read by users.

The console refreshes metrics each morning and timestamps all metrics in the UTC (+0) timezone.

All metrics are grouped by messages sent in a given day, meaning that all events associated with a message (**Sent**, **Delivered**, **Read**) appear on the date (in UTC) that the agent sent the message. If a **Delivered** or **Read** event occurs on a subsequent day, the metrics are backfilled to the associated message's **Sent** date. The console backfills analytics for eight days.

For example, if an agent sends a message on January 1st, and the user's device receives it on January 1st, the **Sent** and **Delivered** metrics for January 1st both increase by one when the metrics refresh the next day. If the user reads the message on January 2nd, the **Read** metric for January 1st (the date the agent sent the message) increases by one when the metrics refresh the next day. However, if the user instead reads the message on January 10th, which is outside the eight-day backfill window, the **Read** metric for January 1st doesn't increase, and the **Read** event isn't otherwise reported.

### View agent analytics

1. Open the [Business Communications Developer Console](https://business-communications.cloud.google.com/?utm_source=/business-communications/rcs-business-messaging/guides/measure&utm_medium=devsite&utm_campaign=rcs-business-messaging), sign in with your RBM Google account, and click your agent.
2. In the left navigation, click **Analytics**.
3. Specify the time scale, start date, and end date for your data.
4. Specify the metrics you want to view.

To export the current analytics as a CSV file, open the menu in the analytics pane, then click **Export data**.

## Measuring your own analytics

If you have different analytics preferences or require more in-depth information than is available in the Business Communications Developer Console, you can capture your own analytics data.

Data capture and storage requirements vary by organization and use-case. Follow all policies and regulations that you are subject to.

Here are some metrics that you might capture:

- **Messages sent**. Capture details each time your agent [sends a message](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/send). Tracking the `messageId` lets you associate a message with the subsequent events and responses.
- **Delivery receipts**. Capture [`DELIVERED`](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/events#delivered) events.
- **Read receipts**. Capture [`READ`](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/events#user_reads_agent_message) events.
- **User engagement**. Capture [`IS_TYPING`](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/events#user_starts_typing) events, the number of user responses, and the time difference between `READ` events and the following user responses.
- **Interaction type**. Identify how users respond to your messages. Use meaningful `postbackData` to track suggested [replies](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/send#replies) and [actions](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/send#actions), and monitor [response formats](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/receive#examples) to identify if users send files, locations, or plain text messages.
- **Agent responsiveness**. Capture how long it takes your agent to respond to user messages.

With your analytics captured, you can parse and organize them however best suits your business needs.[Previous](https://developers.google.com/business-communications/rcs-business-messaging/guides/measure/analytics-overview)

[Analytics overview](https://developers.google.com/business-communications/rcs-business-messaging/guides/measure/analytics-overview)