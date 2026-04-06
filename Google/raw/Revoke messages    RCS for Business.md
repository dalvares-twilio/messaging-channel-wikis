---
title: "Revoke messages  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/revoke"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Agents can revoke sent but undelivered messages to prevent them from going stale.
- Messages can be revoked by sending a revocation request or setting a message expiration.
- Revocation can rarely fail, and in such cases, checking for a delivered event and sending a new revocation request or using an alternate channel like SMS is recommended for timely delivery.

Your agent can revoke a message that has been sent but not yet delivered. It's best to revoke undelivered messages before they go stale. The timing depends on your agent's use case. For example, you might revoke an OTP message after ten minutes but revoke a promotional message on a specific expiration date. For timely message delivery, be sure to revoke messages in time for you to send them by an alternate route like SMS.

There are two ways to revoke a message:

- [Send a revocation request](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/revoke#example) to trigger the revocation. The 200 OK response confirms that the message was revoked and deleted from the user's queue. A 404 Not Found response means the revocation attempt has failed because the message was delivered.
- [Set a message expiration](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/send#expire) to automatically revoke the message at the appropriate time. The RBM platform notifies your agent when the message has expired and confirms whether or not it was successfully revoked. See [Server-generated events](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/events#server-generated_events) for more information.

Revocation could fail on rare occasions. For example, your agent may attempt to revoke a message while the RBM platform is in the process of delivering it. If revocation fails, check for a [`DELIVERED` event](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/events#delivered) at your webhook. If the message hasn't been delivered, you can send a new [revocation request](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/revoke#example) and then route the message to an alternate channel like SMS for timely delivery.

## Example

The following code sends a revocation request. For formatting and value information, see [`phones.agentMessages.delete`](https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones.agentMessages/delete).

```
curl -X DELETE "https://REGION-rcsbusinessmessaging.googleapis.com/v1/phones/PHONE_NUMBER/agentMessages/MESSAGE_ID?agentId=AGENT_ID" \
-H "Content-Type: application/json" \
-H "User-Agent: curl/rcs-business-messaging" \
-H "\`oauth2l header --json PATH_TO_SERVICE_ACCOUNT_KEY rcsbusinessmessaging\`"
```

```
// Reference to RBM API helper
const rbmApiHelper = require('@google/rcsbusinessmessaging');

// Stop the message associated with messageId from being delivered
rbmApiHelper.revokeMessage('+12223334444', messageId, function(err, response) {
   console.log(response);
});
```
This code is an excerpt from an [RBM sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).

```
import com.google.rbm.RbmApiHelper;
…

try {
   // Create an instance of the RBM API helper
   RbmApiHelper rbmApiHelper = new RbmApiHelper();

   // Stop the message associated with messageId from being delivered
   rbmApiHelper.revokeMessage(messageId, "+12223334444");
} catch(Exception e) {
   e.printStackTrace();
}
```
This code is an excerpt from an [RBM sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).

```
# Reference to RBM Python client helper and messaging object structure
from rcs_business_messaging import rbm_service

# Stop the message associated with message_id from being delivered
rbm_service.revoke('+12223334444', message_id)
```
This code is an excerpt from an [RBM sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).

```
using RCSBusinessMessaging;
…

// Create an instance of the RBM API helper
RbmApiHelper rbmApiHelper = new RbmApiHelper(credentialsFileLocation,
                                                 projectId);

// Stop the message associated with messageId from being delivered
rbmApiHelper.RevokeMessage(messageId, "+12223334444");
```
This code is an excerpt from an [RBM sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).[Previous](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/send)

[Send messages](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/send)[Next](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/receive)

[Receive messages](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/receive)