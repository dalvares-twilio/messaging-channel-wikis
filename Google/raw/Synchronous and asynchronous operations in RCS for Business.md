---
title: "Synchronous and asynchronous operations in RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/synchronous-asynchronous-operations"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- RBM API interactions generally use a synchronous request-response pattern at the HTTP level, but the results of many API calls, especially message delivery, are handled asynchronously via webhooks.
- While the `phones.agentMessages.create` API request is processed synchronously, the actual delivery of the message to the end user is asynchronous and can be affected by recipient status and network conditions.
- You should rely on asynchronous webhook events to track message delivery status updates, such as delivery and read receipts, rather than expecting immediate confirmation from the `phones.agentMessages.create` response.
- Most other HTTP-based RBM APIs also operate synchronously for the request-response, but the resulting actions may involve asynchronous processes with potential propagation delays.
- Asynchronous events like incoming user messages, delivery/read receipts, conversation events, and message expiration/revocation events are delivered to your webhook endpoint.

This document clarifies how the RCS for Business platform handles message sending and other API interactions, distinguishing between synchronous and asynchronous operations.

RBM API interactions generally follow a synchronous request-response pattern at the HTTP level. However, the results of many API calls, especially message delivery, are handled asynchronously through webhooks. Refer to the following sections for details.

## Message sending: Synchronous request, asynchronous delivery

The [`phones.agentMessages.create`](https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones.agentMessages/create) API request is processed **synchronously** from the API perspective. When you make an HTTP request to the RCS for Business platform, the server responds almost immediately with a standard HTTP status code (like `200 OK` or an error) to indicate whether the request was received and is valid.

However, the actual delivery of the message to the end user is processed **asynchronously**. The following factors can affect this process:

- **Recipient status**: The user might be offline, have an empty battery, or not have RCS enabled.
- **Network conditions**: Carrier network issues can delay or prevent message delivery.

The RCS for Business platform provides message delivery status updates (like delivery receipts and read receipts) asynchronously through [webhooks](https://developers.google.com/business-communications/rcs-business-messaging/guides/integrate/webhooks). Therefore, while the initial API request is synchronous, you should rely on asynchronous webhook [events](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/events#agent-generated_events) to track message delivery. Don't expect immediate confirmation of delivery status from the [`phones.agentMessages.create`](https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones.agentMessages/create) response.

Most other HTTP-based RBM APIs also operate with a synchronous request-response model. These APIs provide an immediate HTTP response that indicates the status of the request (success or error). However, while the request is synchronous, the actions resulting from the request might involve asynchronous processes. For example, a successful response to an API call to update agent information doesn't mean the update is instantly reflected everywhere; there might be a short propagation delay.

## Webhook endpoint: Asynchronous events

The following [events](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/events#agent-generated_events) are delivered asynchronously to your [webhook](https://developers.google.com/business-communications/rcs-business-messaging/guides/integrate/webhooks) endpoint:

- **Incoming user messages**: The RCS for Business platform pushes incoming user messages to your webhook endpoint. Be sure to [verify incoming messages](https://developers.google.com/business-communications/rcs-business-messaging/guides/integrate/webhooks#verify_incoming_messages).
- **Delivery and read receipts**: Notifications of message delivery and read status are sent through webhooks.
- **Conversation events**: Some conversation-related events, such as typing indicators, are sent through webhooks.
- **Message expiration and revocation events**: The RCS for Business platform sends events to confirm whether an expired message was successfully revoked.[Previous](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/capabilities)

[Capability checks](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/capabilities)