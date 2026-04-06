---
title: "Send events  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/guides/build/events/send-events"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
Your agent sends status events to the user's device to simulate human interactions. For users, these events display as read receipts or typing indicators, assuring them that their messages are being processed.

For full formatting and value options, see the [`phones.agentEvents`](https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones.agentEvents) reference.

For details on webhook events that your agent receives from the RBM platform, see [Receive events](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/events/receive-events).

## Agent sends a READ event

To users, this event appears as a read receipt for a specific message. It lets the user know that the RBM platform delivered their message and the agent is processing it.

`READ` events are persisted and stored for 30 days. If the user has RCS enabled but is unreachable, the event is queued. If they don't have RCS enabled, the RCS for Business platform returns a `NOT_FOUND` (HTTP 404) error.

The following code sends a `READ` event for a message with a matching `messageId`.

```
curl -X POST "https://REGION-rcsbusinessmessaging.googleapis.com/v1/phones/PHONE_NUMBER/agentEvents?eventId=EVENT_ID&agentId=AGENT_ID" \
-H "Content-Type: application/json" \
-H "User-Agent: curl/rcs-business-messaging" \
-H "\`oauth2l header --json PATH_TO_SERVICE_ACCOUNT_KEY rcsbusinessmessaging\`" \
-d "{
  'eventType': 'READ',
  'messageId': 'MESSAGE_ID'
}"
```

```
// Reference to RBM API helper
const rbmApiHelper = require('@google/rcsbusinessmessaging');

// Send the device an event to indicate that messageId has been read
rbmApiHelper.sendReadMessage('+12223334444', messageId);
```
This code is an excerpt from an [RBM sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).

```
import com.google.rbm.RbmApiHelper;
…

// Create an instance of the RBM API helper
RbmApiHelper rbmApiHelper = new RbmApiHelper();

// Send the device an event to indicate that messageId has been read
rbmApiHelper.sendReadMessage(messageId, "+12223334444");
```
This code is an excerpt from an [RBM sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).

```
# Reference to RBM Python client helper and messaging object structure
from rcs_business_messaging import rbm_service

# Send the device an event to indicate that message_id was read
rbm_service.send_read_event('+12223334444', message_id)
```
This code is an excerpt from an [RBM sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).

```
using RCSBusinessMessaging;
…

// Create an instance of the RBM API helper
RbmApiHelper rbmApiHelper = new RbmApiHelper(credentialsFileLocation,
                                                 projectId);

// Send the device an event to indicate that messageId has been read
rbmApiHelper.SendReadMessage(messageId, "+12223334444");
```
This code is an excerpt from an [RBM sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).

## Agent sends an IS\_TYPING event

To users, this event appears as a typing indicator and lets them know that your agent is composing a message. The typing indicator expires after a short time (approximately 20 seconds) or when the user's device receives a new message from your agent. Your agent can send multiple `IS_TYPING` events to reset the typing indicator's expiration timer.

`IS_TYPING` events are ephemeral and not queued.

The following code sends an `IS_TYPING` event.

```
curl -X POST "https://REGION-rcsbusinessmessaging.googleapis.com/v1/phones/PHONE_NUMBER/agentEvents?eventId=EVENT_ID&agentId=AGENT_ID" \
-H "Content-Type: application/json" \
-H "User-Agent: curl/rcs-business-messaging" \
-H "\`oauth2l header --json PATH_TO_SERVICE_ACCOUNT_KEY rcsbusinessmessaging\`" \
-d "{
  'eventType': 'IS_TYPING',
}"
```

```
// Reference to RBM API helper
const rbmApiHelper = require('@google/rcsbusinessmessaging');

// Send the device an event to indicate that the agent is typing
rbmApiHelper.sendIsTypingMessage('+12223334444', function() {
    console.log('Typing event sent!');
});
```
This code is an excerpt from an [RBM sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).

```
import com.google.rbm.RbmApiHelper;
…

// Create an instance of the RBM API helper
RbmApiHelper rbmApiHelper = new RbmApiHelper();

// Send the device an event to indicate that the agent is typing
rbmApiHelper.sendIsTypingMessage("+12223334444");
```
This code is an excerpt from an [RBM sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).

```
# Reference to RBM Python client helper and messaging object structure
from rcs_business_messaging import rbm_service

# Send the device an event to indicate that the agent is typing
rbm_service.send_is_typing_event('+12223334444')
```
This code is an excerpt from an [RBM sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).

```
using RCSBusinessMessaging;
…

// Create an instance of the RBM API helper
RbmApiHelper rbmApiHelper = new RbmApiHelper(credentialsFileLocation,
                                                 projectId);

// Send the device an event to indicate that the agent is typing
rbmApiHelper.SendIsTypingMessage(messageId, "+12223334444");
```
This code is an excerpt from an [RBM sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).[Previous](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/receive)

[Receive messages](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/receive)[Next](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/events/receive-events)

[Receive events](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/events/receive-events)