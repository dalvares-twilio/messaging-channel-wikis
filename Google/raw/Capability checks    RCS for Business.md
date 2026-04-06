---
title: "Capability checks  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/guides/build/capabilities"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Check a user's device capabilities to tailor the conversation to the device's features.
- If a device is not RCS-capable, you can communicate via other services like SMS/MMS.
- Capability checks return a list of features a device supports, provided the MSISDN has connected to the RCS service within the last 31 days.
- Bulk capability checks estimate the number of RBM-reachable users but do not indicate specific device features.
- Messages are queued for up to 31 days and delivered when the device comes back online.

To check if a user's device is RCS-enabled and capable of communicating with an RBM agent, you can request the device's capabilities. Identifying which features a device supports, if any, allows your agent to tailor the conversation to the device's capabilities and avoid presenting interactions that are difficult or impossible for the user to complete.

If a user's device isn't capable of receiving RCS messages at all, you can communicate with the user through other services, such as SMS/MMS.

## Check device capabilities

The following code sends a capability check and waits for a response. For formatting and value options, see [`getCapabilities`](https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones/getCapabilities).

```
curl -X GET "https://REGION-rcsbusinessmessaging.googleapis.com/v1/phones/PHONE_NUMBER/capabilities?requestId=REQUEST_ID&agentId=AGENT_ID" \
-H "Content-Type: application/json" \
-H "User-Agent: curl/rcs-business-messaging" \
-H "\`oauth2l header --json PATH_TO_SERVICE_ACCOUNT_KEY rcsbusinessmessaging\`"
```

```
// Reference to RBM API helper
const rbmApiHelper = require('@google/rcsbusinessmessaging');

// Send a capability check to the device
rbmApiHelper.checkCapability('+12223334444', function(response) {
   // Print capabilities of the device
   console.log(response);
});
```
This code is an excerpt from an [RBM sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).

```
import com.google.rbm.RbmApiHelper;
…

// Create an instance of the RBM API helper
RbmApiHelper rbmApiHelper = new RbmApiHelper();

// Check the capabilities of the device
boolean capability = rbmApiHelper.getCapability("+12223334444");
```
This code is an excerpt from an [RBM sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).

```
# Reference to RBM Python client helper
from rcs_business_messaging import rbm_service

# Send the tester invite to a device
response = rbm_service.make_cap_request('+12223334444')
```
This code is an excerpt from an [RBM sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).

```
using RCSBusinessMessaging;
…

// Create an instance of the RBM API helper
RbmApiHelper rbmApiHelper = new RbmApiHelper(credentialsFileLocation,
                                             projectId);

// Register the device as a tester
Capabilities capabilities = rbmApiHelper.GetCapability("+12223334444");
```
This code is an excerpt from an [RBM sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).

### Capability response

After running a capability check, the RBM platform returns a JSON-formatted list of [features](https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones/getCapabilities#Feature) that the specified device supports.

```
{
  "features": [
    "RICHCARD_STANDALONE",
    "RICHCARD_CAROUSEL",
    "ACTION_CREATE_CALENDAR_EVENT",
    "ACTION_DIAL",
    "ACTION_OPEN_URL",
    "ACTION_SHARE_LOCATION",
    "ACTION_VIEW_LOCATION",
    "ACTION_OPEN_URL_IN_WEBVIEW",
    "PDF_IN_RICH_CARDS"
  ]
}
```

The request returns either a response or an error.

A successful response is returned *only* if the MSISDN (phone number) has connected to the RCS service within the last 31 days. This means the user's device has checked in with our RCS server within that timeframe. Online and RCS-enabled devices check in every 1-4 hours on average.

If a user moves their SIM card to a different RCS-capable device, the previous device association is removed, and a new one is created, updating the device's capabilities in the RCS service.

If a SIM card is placed in a device where RCS is disabled by a carrier or manufacturer, or the SIM card remains unused, the RCS service will still attempt to deliver messages to the previously associated device for up to 31 days.

Here's what causes 404 errors:

- The user isn't reachable by RBM–for example, if their device doesn't support RCS.
- The user has RCS, but your agent isn't launched on their mobile network.

### Offline queuing

Messages are queued for up to 31 days and delivered when the device comes back online. This means that even if a device goes offline for an extended period (up to 31 days), queued messages will still be delivered upon reconnection, as long as the MSISDN has connected to the RCS service within the last 31 days.

## Bulk capability checks

To estimate the number of RBM-reachable users, do a bulk capability check. Bulk checks indicate whether a phone number is reachable but not which [features](https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones/getCapabilities#Feature) a phone number supports.

For each bulk capability check, you must provide 500–10,000 unique phone numbers. To check more numbers, perform multiple checks. You can make up to 600 calls per minute. Use the [Bulk Capability Check Script](#bulk-tool) to use CSV files as an input format. Bulk checks read from the capabilities cache, which is updated by clients organically using RCS. Agents do not request each device's capabilities directly. For this reason, results may not be current.

Bulk capability checks return a list of the numbers your agent can reach on carriers where it is launched, as well as estimates for the total number of reachable users across all carriers. See [Bulk capability check response](#bulk-response).

### Estimate total reachable users

While bulk check [responses](#bulk-response) include a list of phone numbers that are immediately reachable on your agent's launched carriers (`reachableUsers`), responses also include two values that can help you estimate the total number of reachable users across all carriers.

#### How it works

When your agent performs a bulk capability check, RBM randomly samples ~75% of those numbers to check all carriers (reported in `totalRandomSampleUserCount`). RBM also returns the count of RBM-reachable numbers from the random sample, regardless of carrier launch status (`reachableRandomSampleUserCount`). By dividing `reachableRandomSampleUserCount` by `totalRandomSampleUserCount`, you can estimate the percentage of numbers your agent could reach if it were launched on all carriers.

For example, if you specify 5,000 phone numbers in the bulk capability check, and RBM randomly samples ~75% of the specified numbers, `totalRandomSampleUserCount` may be `3750`. If `reachableRandomSampleUserCount` is `3000`, then 80% of sampled numbers were reachable.

#### Account for random sampling

Testing random samples can lead to variances in percentages. To account for the effects of random sampling, run bulk capability checks with larger amounts of phone numbers. You might also perform checks with the same batches of numbers multiple times and then average the results to normalize the random sampling behavior.

### Send a bulk capability check

The following code sends a bulk capability check and waits for a response. For formatting and value options, see [`users.batchGet`](https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/users/batchGet).

Phone numbers must be in the E.164 format (for example, "+12223334444"), and the list must contain 500 to 10,000 unique phone numbers.

```
curl -X POST "https://REGION-rcsbusinessmessaging.googleapis.com/v1/users:batchGet?agentId=AGENT_ID \
-H "Content-Type: application/json" \
-H "User-Agent: curl/rcs-business-messaging" \
-H "\`oauth2l header --json PATH_TO_SERVICE_ACCOUNT_KEY rcsbusinessmessaging\`" \
-d '{
  "users": [
    "PHONE_NUMBER",
  ]
}'
```

```
// Reference to RBM API helper
const rbmApiHelper = require('@google/rcsbusinessmessaging');

// Specify phone numbers
let phoneNumbers = ['+12223334444', '+12223334444'];

// Perform a bulk capability check
rbmApiHelper.getUsers(phone_numbers, function(response) {
   // Print the bulk capability check response
   console.log(response);
});
```
This code uses the [RBM sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).

```
import com.google.rbm.RbmApiHelper;
…

// Create an instance of the RBM API helper
RbmApiHelper rbmApiHelper = new RbmApiHelper();

// Perform a bulk capability check
BatchGetUsersResponse batchGetUsersResponse = rbmApiHelper.getUsers(Arrays.asList("+12223334444", "+12223334444"));
```
This code uses the [RBM sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).

```
# Reference to RBM Python client helper
from rcs_business_messaging import rbm_service

# Perform a bulk capability check
response = rbm_service.make_batch_cap_request(['+12223334444', '+12223334444'])
```
This code uses the [RBM sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).

```
using RCSBusinessMessaging;
…

// Create an instance of the RBM API helper
RbmApiHelper rbmApiHelper = new RbmApiHelper(credentialsFileLocation,
                                             projectId);

// Perform a bulk capability check
BatchGetUsersResponse batchGetUsersResponse = rbmApiHelper.GetUsers(new List({"+12223334444", "+12223334444"}));
```
This code uses the [RBM sample agent](https://developers.google.com/business-communications/rcs-business-messaging/samples).

### Bulk capability check response

After running a bulk capability check, RBM returns a JSON-formatted response.

```
{
  "reachableUsers": [
    "PHONE_NUMBER"
  ],
  "totalRandomSampleUserCount": "COUNT_OF_SAMPLE",
  "reachableRandomSampleUserCount": "REACHABLE_FROM_SAMPLE"
}
```

| Field | Description |
| --- | --- |
| `reachableUsers` | A list of reachable users on the agent's launched carriers. |
| `totalRandomSampleUserCount` | The count of a random sample of specified numbers. Typically ~75% of the specified numbers. |
| `reachableRandomSampleUserCount` | The count of numbers from the random sample that are RBM-reachable across all carriers, regardless of which carriers the agent is launched on. This count is used to provide a rough estimate of the total number of reachable users across all carriers. |
| `reachableUsersMap` | Output only. Map of carrier ID to a list of reachable users on that carrier. This field is only populated for US phone numbers. |

## Tool: Bulk Capability Check Script

The Buck Capability Check Script ([Sign in to download](https://accounts.google.com/ServiceLogin?continue=https://developers.google.com/_d/return%3Fcontinue%3Dhttps%253A%252F%252Fdevelopers.google.com%252Fbusiness-communications%252Frcs-business-messaging%252Fguides%252Fbuild%252Fcapabilities)) performs bulk capability checks using CSV files as input and output formats. The script parses the CSV file of MSISDNs and uses the RBM SDK to check the capabilities of every listed device.

A virtual machine of 2 CPUs and 4GB of RAM running the script with 500 threads can reach approximately 1K QPS, but overall QPS depends on the machine used, the country of the devices, the regional configuration of your agent, and the API endpoint used.

### Prerequisites

Before using the tool to perform a bulk capability check, get the following:

- The path to a CSV file with MSISDNs to perform capability checks on
- The path to your agent's service account key on your development machine

Additionally, you need the following software installed on your development machine:

- [Apache Maven](http://maven.apache.org/) 3.3.9 or greater
- [Java 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

### Set up

To set up your development machine for a bulk capability check, do the following:

1. Download and extract the Bulk Capability Check Script ([Sign in to download](https://accounts.google.com/ServiceLogin?continue=https://developers.google.com/_d/return%3Fcontinue%3Dhttps%253A%252F%252Fdevelopers.google.com%252Fbusiness-communications%252Frcs-business-messaging%252Fguides%252Fbuild%252Fcapabilities)).
2. Follow the steps in the README.

### Run a bulk capability check

To run a bulk check, follow these steps:

1. In a terminal, navigate to the script's root directory.
2. Run the following commands:
	```
	export MAVEN_OPTS="-Xms1024m -Xmx3000m"
	mvn compile && mvn exec:java -Dexec.args="AGENT_ID INPUT_FILE OUTPUT_FILE NUM_OF_THREADS START_INDEX END_INDEX"
	```
	Replace variables with values you've identified.
	| Replace | With | Example |
	| --- | --- | --- |
	| AGENT\_ID | ID of the RCS for Business agent. | `welcome-bot` |
	| INPUT\_FILE | The path to the input CSV file. | `input.csv` |
	| OUTPUT\_FILE | The path to the output CSV file. | `output.csv` |
	| NUM\_OF\_THREADS | The number of threads to dedicate to capability checks. | `500` |
	| START\_INDEX | Optional. The value in the CSV file to begin running checks against. | `5` |
	| END\_INDEX | Optional. The value in the CSV file to end checks after. | `500` |
3. When the script completes, open the output CSV file to view the results.