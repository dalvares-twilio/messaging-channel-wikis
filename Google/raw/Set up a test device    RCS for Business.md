---
title: "Set up a test device  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/guides/build/test"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Unlaunched agents can only communicate with designated test devices.
- Test devices must be RCS-enabled and you can check their status in Messages settings.
- To become a tester, an RCS-enabled device must accept a tester invite sent via Console or API.
- You can send up to 20 tester invites per day with a total limit of 200.
- The invite status of test devices can be checked in the Business Communications Developer Console or through the API.

Until you [launch](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch/launch-approval) your agent, it can only communicate with designated test devices. This lets you test your agent internally to prevent accidental early access to end-users.

To communicate with an RBM agent, a test device needs to be RCS-enabled. Note that some Android devices don't have RCS enabled by default. To check your device's RCS status, see [Check the RCS status of your device](#check-rcs).

Agents can send a maximum of 20 tester invites per day, with a total limit of 200 invites.

## Check the RCS status of your device

1. In the Messages app, navigate to **Messages settings**.
2. Tap **RCS chats**. If you can't find "RCS chats", tap **Chat features**.
3. Find the **Status** value.

If your device isn't RCS-enabled, [enable RCS](#enable-rcs) by configuring your device with pre-release versions of the Messages and Carrier Services apps.

If your device is RCS-enabled, you can send a [tester invite](#tester-request). When the device accepts the invite, it can start messaging with your unlaunched agent.

## Enable RCS on your device

To enable RCS on an Android device, [turn on RCS chats in the Messages app](https://support.google.com/messages/answer/7189714?&ref_topic=9459217&sjid=4666643179640476654-AP).

When RCS is active on your device, you're ready to send a [tester invite](#tester-request).

## Send a tester invite

To invite an RCS-enabled device to become a tester, you send a tester invite. When the device accepts the invite, your agent can send messages, events, and requests to the device.

If the device isn't RCS-enabled, hasn't responded to the tester invite, or declines the invite, your agent will receive a `403 PERMISSION_DENIED` error when it attempts to communicate with the device.

To send a tester invite with the Business Communications Developer Console:

1. Open the [Business Communications Developer Console](https://business-communications.cloud.google.com/?utm_source=/business-communications/rcs-business-messaging/guides/build/test&utm_medium=devsite&utm_campaign=rcs-business-messaging), sign in with your RBM Google Account, and click your agent.
2. On the left menu, select **Devices**.
3. Add a test device to the **Test devices list** by entering the device's phone number, including the country code and the area code. To add multiple phone numbers, separate them with commas.

When a device is added to the list, an invitation is sent. The user sees the invitation message on their device and has the option to either accept or decline it.

The **Test devices list** details the tester invite status for each device that you invite to test your agent.

To send a tester invite with the RBM Management API:

- Use the following code. For formatting and value options, see [`testers`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/testers).
```
curl -X POST "https://businesscommunications.googleapis.com/v1/testers" \
-H "Content-Type: application/json" \
-H "User-Agent: curl/rcs-business-messaging" \
-H "\`oauth2l header --json PATH_TO_SERVICE_ACCOUNT_KEY businesscommunications\`" \
-d '{"phone_number": "PHONE_NUMBER", "agentId": "AGENT_ID"}'
```

```
// Reference to RBM API helper
const rbmApiHelper = require('@google/rcsbusinessmessaging');

// Send the tester invite to the device
rbmApiHelper.sendTesterInvite('+12223334444', function(response) {
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

   // Register the device as a tester
   rbmApiHelper.registerTester("+12223334444");
} catch(Exception e) {
   e.printStackTrace();
}
```
This code is an excerpt from an [RBM sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).

```
# Reference to RBM Python client helper
from rcs_business_messaging import rbm_service

# Send the tester invite to a device
rbm_service.invite_tester('+12223334444')
```
This code is an excerpt from an [RBM sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).

```
using RCSBusinessMessaging;
…

// Create an instance of the RBM API helper
RbmApiHelper rbmApiHelper = new RbmApiHelper(credentialsFileLocation,
                                             projectId);

// Register the device as a tester
rbmApiHelper.RegisterTester("+12223334444");
```
This code is an excerpt from an [RBM sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).

If you send more than 200 invites, the RBM platform returns the `429 RESOURCE_EXHAUSTED` error code in response.

### Resend a tester invite

If needed, you can resend a tester invite. The result depends on the device's current [invite status](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/testers#invitestatus).

| **Device status** | **Result** |
| --- | --- |
| `PENDING` | Tester invite is sent to the device. |
| `ACCEPTED` | Tester invite is not sent to the device, which maintains its `ACCEPTED` status. |
| `DECLINED` | Tester invite is declined. You must [remove the test device](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/test#remove) first, before resending an invite. Otherwise, the request fails. |

After the device accepts the tester invite, it becomes a designated test device for your agent. You can send [messages](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/messages/send), [events](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/events), and [capability checks](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/capabilities) to the device to test your agent's functionality and workflows.

## Get the invite status of a test device

When you invite a tester, they can either accept or decline the invite on their device. You can query the API for the device's [invite status](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/testers#invitestatus).

To get the invite status of a test device with the Business Communications Developer Console:

1. Open the [Business Communications Developer Console](https://business-communications.cloud.google.com/?utm_source=/business-communications/rcs-business-messaging/guides/build/test&utm_medium=devsite&utm_campaign=rcs-business-messaging), sign in with your RBM Google Account, and click your agent.
2. On the left menu, select **Devices**.
3. Add a test device to the **Test devices list** by entering the device's phone number, including the country code and the area code. To add multiple phone numbers, separate them with commas.

When a test device is added to the list, you can check its status in the **Status** column.

To get the invite status of a test device with the RBM Management API:

- Use the following code. For formatting and value options, see [`testers`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/testers).
```
curl -X GET "https://businesscommunications.googleapis.com/v1/testers/PHONE_NUMBER?agentId=AGENT_ID" \
-H "Content-Type: application/json" \
-H "User-Agent: curl/rcs-business-messaging" \
-H "\`oauth2l header --json PATH_TO_SERVICE_ACCOUNT_KEY businesscommunications\`"
```

## Get the status of all test devices

You can query the [invite status](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/testers#invitestatus) of all the devices that you invited to be testers.

To check the invite status of all test devices with the Business Communications Developer Console:

1. Open the [Business Communications Developer Console](https://business-communications.cloud.google.com/?utm_source=/business-communications/rcs-business-messaging/guides/build/test&utm_medium=devsite&utm_campaign=rcs-business-messaging), sign in with your RBM Google Account, and click your agent.
2. On the left menu, select **Devices**.
3. Add a test device to the **Test devices list** by entering the device's phone number, including the country code and the area code. To add multiple phone numbers, separate them with commas.

When a test device is added to the list, you can check its status in the **Status** column.

To check the invite status of all test devices with the RBM Management API:

- Use the following code. For formatting and value options, see [`testers`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/testers).
```
curl -X GET "https://businesscommunications.googleapis.com/v1/testers?agentId=AGENT_ID" \
-H "Content-Type: application/json" \
-H "User-Agent: curl/rcs-business-messaging" \
-H "\`oauth2l header --json PATH_TO_SERVICE_ACCOUNT_KEY businesscommunications\`"
```

## Remove a test device

When you remove a test device, the device can no longer receive messages from your unlaunched agent. The RBM platform doesn't delete messages sent by your agent that are in transit to or stored on the test device.

To remove a test device with the Business Communications Developer Console:

1. Open the [Business Communications Developer Console](https://business-communications.cloud.google.com/?utm_source=/business-communications/rcs-business-messaging/guides/build/test&utm_medium=devsite&utm_campaign=rcs-business-messaging), sign in with your RBM Google Account, and click your agent.
2. On the left menu, select **Devices**.
3. Select the device in **Test devices list** and click the menu.
4. Click **Remove device**.

To remove a test device with the RBM Management API:

- Use the following code. For formatting and value options, see [`testers`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/testers).
```
curl -X DELETE "https://businesscommunications.googleapis.com/v1/testers/PHONE_NUMBER?agentId=AGENT_ID" \
-H "Content-Type: application/json" \
-H "User-Agent: curl/rcs-business-messaging" \
-H "\`oauth2l header --json PATH_TO_SERVICE_ACCOUNT_KEY businesscommunications\`"
```[Previous](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/agents/manage-agents)

[Manage agents](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/agents/manage-agents)[Next](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/deeplinks)

[Deep links](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/deeplinks)