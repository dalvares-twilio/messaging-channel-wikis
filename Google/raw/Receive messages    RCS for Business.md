---
title: "Receive messages  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/receive"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- RBM agents receive messages and events through a webhook, allowing them to decode, process, and respond to user interactions.
- Users can send various types of messages, including text, suggestions, locations, and files, all of which your agent needs to handle.
- Handling incoming messages generally involves identifying the message type, processing its content based on business logic, and then sending a response.
- Agents also receive notifications for message delivery and read events, as well as when a user is typing.

RBM agents receive messages and events through a [webhook](https://developers.google.com/business-communications/rcs-business-messaging/guides/integrate/webhooks). When a user sends a message to your agent, Google's RBM service sends the message to your configured webhook. Your agent can then decode the message, process it, and issue a response to the user.

![The user sends a message to the agent](https://developers.google.com/static/business-communications/rcs-business-messaging/guides/images/rbm-architecture-diagram-receive.png)

Users can send whatever text, locations, or files that their RCS client allows. Your agent needs to handle any text, locations, or files the user might send, as well as any error states that those messages might trigger.

## Handle incoming messages

How your agent handles and responds to messages from users is highly dependent on your business logic. Generally, however, the steps to respond to a user message are consistent.

### Step 1: Identify the type of message the user sent

Users can send four types of messages:

- [Text](#text) messages are freeform responses.
- [Suggestion](#suggestion) messages include the postback data and text of the suggested action or suggested reply that the user tapped.
- [Location](#location) messages include latitude and longitude values.
- [File](#file) messages include the URI for a file and associated data.

### Step 2: Process the message content

The user message's content should guide your agent's logic and next response in the conversation.

The easiest way to identify user intent is with postback data from a suggested reply or suggested action. Regardless of the text associated with the suggestion, the postback data is machine-readable.

If a user sends a text message, your agent might parse the response for supported keywords or use NLU (such as [Dialogflow](https://dialogflow.com/)) to process the user's message and identify a path forward.

Location and file messages don't include text or postback data, so your agent should consider the context of the conversation and recent messages before responding.

If your agent doesn't know how to respond to the user's message, it should respond with an error state and try to continue the conversation by prompting the user for additional information, by asking for input in a different way, or by presenting suggested replies and suggested actions that the agent knows how to respond to.

Once your agent identifies the correct response to the user's message, it gathers necessary information from your infrastructure and engages with other systems as necessary to fulfill the business logic for the interaction.

### Step 4: Respond to the user

After the agent fulfills the business logic for the interaction, it [sends another message](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/send) and continues the conversation with the user.

## Examples

The following code shows how your agent receives messages. For formatting and value information, see [UserMessage](https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/UserMessage).

**Note**: For US traffic, user messages and taps on suggested actions are subject to the US billing model classifications. When your agent receives these events, they'll include the `richMessageClassification` field, which determines the billable event type. See the [US billing model](https://developers.google.com/business-communications/rcs-business-messaging/carriers/billing/us-billing-model) guide for classification details.

### Agent receives text

```
{
  "agentId": "AGENT_ID",
  "senderPhoneNumber": "PHONE_NUMBER",
  "messageId": "MESSAGE_ID",
  "sendTime": "2018-12-31T15:01:23.045123456Z",
  "text": "Hello, world!"
}
```

### Agent receives a message from a suggestion

```
{
  "agentId": "AGENT_ID",
  "senderPhoneNumber": "PHONE_NUMBER",
  "messageId": "MESSAGE_ID",
  "sendTime": "2018-12-31T15:01:23.045123456Z",
  "suggestionResponse": {
    "postbackData": "suggestion_1",
    "text": "Suggestion #1"
  }
}
```

### Agent receives a location

```
{
  "agentId": "AGENT_ID",
  "senderPhoneNumber": "PHONE_NUMBER",
  "messageId": "MESSAGE_ID",
  "sendTime": "2018-12-31T15:01:23.045123456Z",
  "location": {
    "latitude": 37.422000,
    "longitude": -122.084056
  }
}
```

### Agent receives a file

```
{
  "agentId": "AGENT_ID",
  "senderPhoneNumber": "PHONE_NUMBER",
  "messageId": "MESSAGE_ID",
  "sendTime": "2018-12-31T15:01:23.045123456Z",
  "userFile": {
    "thumbnail": {
      "mimeType": "image/jpeg",
      "fileSizeBytes": 1280,
      "fileUri": "https://storage.googleapis.com/copper_test/77ddb795-24ad-4607-96ae-b08b4d86406a/d2dcc67ab888d34ee272899c020b13402856f81597228322079eb007e8c8",
      "fileName": "4_animated.jpeg"
    },
    "payload": {
      "mimeType": "image/gif",
      "fileSizeBytes": 127806,
      "fileUri": "https://storage.googleapis.com/copper_test/77ddb795-24ad-4607-96ae-b08b4d86406a/d2dcc67ab888d34ee272899c020b13402856f81597228322079eb007e8c9",
      "fileName": "4_animated.gif"
    }
  }
}
```

## Handle incoming events

Your agent receives notifications when the messages it sends to users are delivered and read.

The following code shows how your agent receives messages. For formatting and value information, see [UserEvent](https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/UserEvent).

### Message delivered to user

```
{
  "agentId": "AGENT_ID",
  "senderPhoneNumber": "PHONE_NUMBER",
  "messageId": "MESSAGE_ID",
  "eventId": "EVENT_ID",
  "sendTime": "2018-12-31T15:01:23.045123456Z",
  "eventType": "DELIVERED"
}
```

### Message read by user

```
{
  "agentId": "AGENT_ID",
  "senderPhoneNumber": "PHONE_NUMBER",
  "messageId": "MESSAGE_ID",
  "eventId": "EVENT_ID",
  "sendTime": "2018-12-31T15:01:23.045123456Z",
  "eventType": "READ"
}
```

### User is typing

```
{
  "senderPhoneNumber": "PHONE_NUMBER",
  "eventType": "IS_TYPING",
  "eventId": "EVENT_ID",
  "sendTime": "2018-12-31T15:01:23.045123456Z",
  "agentId": "AGENT_ID"
}
```[Previous](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/revoke)

[Revoke messages](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/revoke)[Next](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/events/send-events)

[Send events](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/events/send-events)