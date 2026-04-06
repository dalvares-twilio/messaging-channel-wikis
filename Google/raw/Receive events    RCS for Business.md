---
title: "Receive events  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/guides/build/events/receive-events"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
Your agent receives webhook events from the RBM platform, notifying you of both user interactions and platform-level updates.

These events are categorized by their origin:

- [User events](#user-events): Notifications sent from a user's device to your agent, signaling an interaction with your agent.
- [Platform events](#platform-events): Notifications about agent launch state changes and message expirations sent by the RBM platform.

For details on status events that your agent sends to the user's device, see [Send events](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/events/send-events).

For details on how to handle user messages, such as text, files, locations, and others, see [Receive messages](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/receive).

## User events

User events are notifications from the user's device that report message status or subscription changes (i.e., the user has [unsubscribed](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/events/receive-events#unsubscribe) or [resubscribed](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/events/receive-events#resubscribe) in Google Messages).

For full formatting and value options, see the [`UserEvent`](https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/UserEvent) reference.

### User receives agent message

This event indicates that a message has been successfully delivered to the user's device.

```
{
  "senderPhoneNumber": "PHONE_NUMBER",
  "eventType": "DELIVERED",
  "eventId": "EVENT_ID",
  "messageId": "MESSAGE_ID",
  "agentId": "AGENT_ID"
}
```

### User reads agent message

This event indicates that a message has been opened or acknowledged.

```
{
  "senderPhoneNumber": "PHONE_NUMBER",
  "eventType": "READ",
  "eventId": "EVENT_ID",
  "messageId": "MESSAGE_ID",
  "agentId": "AGENT_ID"
}
```

### User starts typing

This event indicates that a user is typing a response.

```
{
  "senderPhoneNumber": "PHONE_NUMBER",
  "eventType": "IS_TYPING",
  "eventId": "EVENT_ID",
  "agentId": "AGENT_ID"
}
```

### User taps a suggested action

When a user taps a suggested action, your agent receives an event with the action's postback data.

```
{
  "senderPhoneNumber": "PHONE_NUMBER",
  "eventId": "EVENT_ID",
  "agentId": "AGENT_ID",
  "suggestionResponse": {
    "postbackData": "postback_1234"
  }
}
```

### User unsubscribes from the conversation

This event indicates that the user has unsubscribed from receiving non-essential messages, such as promotions, from your agent and the business it represents. Users trigger this event by unsubscribing from the RBM conversation in Google Messages.

Here's an example of the JSON payload:

```
{
  "senderPhoneNumber": "PHONE_NUMBER",
  "eventType": "UNSUBSCRIBE",
  "eventId": "EVENT_ID",
  "agentId": "AGENT_ID"
}
```

#### How unsubscribe works

- An **Unsubscribe** option is always available within the chat menu. For promotional and multi-use agents, this option also appears directly in the chat after a certain number of unread messages (specific rules vary by country).
- Selecting **Unsubscribe** triggers two simultaneous actions: Google Messages sends a country-specific keyword (for example, "STOP") to your agent, and the RBM platform sends an `UNSUBSCRIBE` event to your webhook.
	The keyword is determined by the two-letter country code of the user's phone number. The following table lists the keywords for each supported country.
	| Country (country code) | Unsubscribe keyword |
	| --- | --- |
	| United States (US), India (IN), United Kingdom (GB), Germany (DE) | STOP |
	| Spain (ES), Mexico (MX) | BAJA |
	| France (FR) | STOP |
	| Brazil (BR) | parar |
- After the user unsubscribes, the conversation remains in their inbox unless reported as spam, in which case it moves to the **Spam & blocked** folder.
- To identify policy and business rule violations, Google monitors message patterns after a user unsubscribes.

#### Business rules

- As the RBM partner who manages this conversation, it's your responsibility to comply with the user's request to unsubscribe.
- If you can't perform the unsubscription within the message thread, you must immediately send a message of acknowledgement with a direct link to the website or app where users can manage their subscription preferences.
- After the user unsubscribes, sending non-essential messages is prohibited.
- Essential messages are still permitted. These include:
	- Authentications, such as one-time passwords (OTPs)
		- Notifications about a specific service the user has requested and consented to
		- Confirmation of the user's unsubscribe request, with information to further manage their communications preferences

#### Example

If a user unsubscribes from an airline agent whose use case is [multi-use](https://developers.google.com/business-communications/rcs-business-messaging/guides/learn/what-are-use-cases#multiuse), you must stop sending marketing messages. However, you may send flight updates if the user has provided explicit consent to receive updates for that specific flight.

#### Unsubscribe reasons

When a user unsubscribes from your agent, they can select a reason from the following options:

- Spam
- Never signed up
- Too many messages
- No longer interested
- Other

Unsubscribe reasons are shown in the [Analytics overview](https://developers.google.com/business-communications/rcs-business-messaging/guides/measure/analytics-overview#unsubscribe-reasons) to help partners understand why users are unsubscribing.

### User resubscribes to the conversation

This event indicates that a user wants to receive messages from your agent again, including non-essential content like promotions. Users can trigger this event by resubscribing to a conversation they previously unsubscribed from in Google Messages.

Here's an example of the JSON payload:

```
{
  "senderPhoneNumber": "PHONE_NUMBER",
  "eventType": "SUBSCRIBE",
  "eventId": "EVENT_ID",
  "agentId": "AGENT_ID"
}
```

#### How resubscribe works

- A **Subscribe** option, available from both the chat menu and an in-chat link, allows users to resubscribe to a conversation they had unsubscribed from.
- Selecting **Subscribe** triggers two simultaneous actions: Google Messages sends a country-specific keyword (for example, "START") to your agent, and the RBM platform sends a SUBSCRIBE event to your webhook. The specific keyword is determined by the two-letter country code of the user's phone number. The following table lists the keywords for each supported country.
	| Country (country code) | Subscribe keyword |
	| --- | --- |
	| United States (US), India (IN), United Kingdom (GB), Germany (DE) | START |
	| Spain (ES), Mexico (MX) | ALTA |
	| France (FR) | Démarrer |
	| Brazil (BR) | começar |

#### Business rules

- As the RBM partner who manages this conversation, it's your responsibility to comply with the user's request to resubscribe.
- Resubscription applies to all message types, including non-essential content like promotions.
- If a user messages your business after unsubscribing, this can be considered a resubscribe request.
- If a user resubscribes outside the messaging channel (for example, on your website), it's your responsibility as RBM partner to update their status and resume sending messages accordingly.

## Platform events

The RBM platform sends platform events to notify your agent about changes to the agent's launch state or [message expirations](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/send#expire).

### Agent launch state has changed

The RBM platform sends an `AgentLaunchEvent` for every change to your agent's launch status. For example, when your agent's state changes from `PENDING` to `LAUNCHED`. The event is delivered as a Pub/Sub message. To differentiate this from other events, check the `message.attributes.type` path for the value `agent_launch_event`.

#### Webhook configuration

You can use your partner-level or agent-level [webhook](https://developers.google.com/business-communications/rcs-business-messaging/guides/integrate/webhooks) to receive these notifications.

#### Prerequisites

- [Configure your webhook](https://developers.google.com/business-communications/rcs-business-messaging/guides/integrate/webhooks#configure_an_agent_webhook) for RBM messaging (this is a requirement for receiving user messages and user events).
- To differentiate between [user events](#user-events) and agent launch state events, check the `message.attributes.type` path for the value `agent_launch_event`.

#### Event payload structure

The [`AgentLaunchEvent`](https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/AgentLaunchEvent) is delivered as a Pub/Sub message. Here's an example:

```
{
  "message": {
    "attributes": {
      "business_id": "rbm-chatbot-id@rbm.goog",
      "event_type": "REJECTED",
      "product": "RBM",
      "project_number": "3338881441851",
      "type": "agent_launch_event"
    },
    "data": "....BASE64-encoded-JSON-with-notification...",
    "messageId": "14150481888479752",
    "message_id": "14150481888479752",
    "publishTime": "2025-03-05T18:50:21.88Z",
    "publish_time": "2025-03-05T18:50:21.88Z"
  },
  "subscription": "projects/rbm-partner-gcp/subscriptions/rbm-sub"
}
```

The [`AgentLaunchEvent.LaunchState`](https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/AgentLaunchEvent#LaunchState) field in the event payload indicates the agent's new launch state. Here are the possible values:

| Value | Agent launch state | Details |
| --- | --- | --- |
| `PENDING` | Pending | The request has been sent to a carrier for review. |
| `LAUNCHED` | Launched | Messages are allowed on a given carrier. |
| `REJECTED` | Rejected on a given carrier | The rejection reason is specified in the comment. |
| `SUSPENDED` | Suspended on a given carrier | The suspension reason is specified in the comment. |
| `UNLAUNCHED` | Unlaunched | Editing is allowed for agents that have been unlaunched from all carriers. |

The data field contains a Base64-encoded JSON object with the launch state details. Here's an example of the decoded JSON:

```
{
      "eventId": "rbm-chatbot-id/0a7ed168-676e-4a56-b422-b23434",
      "agentId": "rbm-chatbot-id@rbm.goog",
      "botDisplayName": "RBM Welcome Bot 7 - RBM Chatbot name",
      "brandId": "bd38fbff-392a-437b-a6f2-7f2e43745b56",
      "brandDisplayName": "Chatbots brand",
      "regionId": "/v1/regions/fi-rcs",
      "oldLaunchState": "PENDING",
      "newLaunchState": "REJECTED",
      "actingParty": "rbm-support@google.com",
      "comment": "Carrier has rejected the launch: policy violation",
      "sendTime": "2025-03-05T18:50:19.386436Z"
    }
```

### Carrier-initiated launch state changes

These are allowed transitions that are typically handled by Carriers during the review and enforcement process:

| Old launch state | New launch state | Trigger action |
| --- | --- | --- |
| `PENDING` | `LAUNCHED` | Approve a launch request. |
| `PENDING` | `REJECTED` | Reject a launch request. |
| `LAUNCHED` | `SUSPENDED` | Suspend for enforcement/admin reasons. |
| `SUSPENDED` | `LAUNCHED` | Restore an agent to active status. |
| `SUSPENDED` | `UNLAUNCHED` | Terminate an agent. |

### Partner-initiated launch state changes

These are allowed transitions that are typically handled by Partners:

| Old launch state | New launch state | Trigger action |
| --- | --- | --- |
| `UNSPECIFIED` | `PENDING` | Submit for review. |
| `UNLAUNCHED` | `PENDING` | Submit for review. |
| `REJECTED` | `PENDING` | Resubmit for review. |

### Message has expired; revocation succeeded

This event indicates that the message's time to live (TTL) has expired and the message was successfully revoked. This is a good trigger for your fallback messaging strategy.

For full formatting and value options, see the [`ServerEvent`](https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/ServerEvent) reference.

```
{
  "phoneNumber": "[phone number]" ,
  "messageId": "[RCS message ID]",
  "agentId": [bot ID],
  "eventType": "TTL_EXPIRATION_REVOKED",
  "eventId": "[unique ID]",
  "sendTime": "[time stamp]"
}
```

### Message has expired; revocation failed

This event indicates that the message's TTL has expired, but it was not successfully revoked.

For full formatting and value options, see the [`ServerEvent`](https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/ServerEvent) reference.

```
{
  "phoneNumber": "[phone number]",
  "messageId": "[RCS message ID]",
  "agentId": "[bot ID]",
  "eventType": "TTL_EXPIRATION_REVOKE_FAILED",
  "eventId": "[unique ID]",
  "sendTime": "[time stamp]"
}
```

Message delivery is not guaranteed.

- If the message was delivered, you'll receive a `DELIVERED` event at your webhook.
- If the message was not delivered, use the revoke API to [send a revocation request](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/revoke#example).

If the message is time-sensitive, like an OTP or a fraud alert, it's best to send the message through an alternate channel like SMS even if this results in duplicate messages to the user.[Previous](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/events/send-events)

[Send events](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/events/send-events)[Next](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/capabilities)

[Capability checks](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/capabilities)