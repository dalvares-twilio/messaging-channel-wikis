---
title: "Manage testers  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/testers"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
All agents belong to a brand (business, organization, or group). Before you create an agent, you first need to create a brand. Brands are purely organizational, to help you group related agents together.

## Add a tester to an agent

```
curl -v -X POST "https://businesscommunications.googleapis.com/v1/testers" \
  -H "Content-Type: application/json" \
  -H "User-Agent: curl/business-messaging" \
  -H "\`oauth2l header --json rbm-developer-service-account-credentials.json businesscommunications\`" \
  -d "{
    'agentId': '$AGENT_ID',
    'phoneNumber': '$MSISDN'
  }"
```
This code is an excerpt from our [RBM Management API sample](https://github.com/rcs-business-messaging/rcs-for-business-curl/blob/main/business-communications-api/rbm-management-api-samples/createTester.sh).

```
endpoint_url = (BASE_ENDPOINT + 'testers')

body = {
  "agentId": agentId,
  "phoneNumber": msisdn
}

response = authed_session.post(endpoint_url, data=json.dumps(body))
```
This code is an excerpt from our [RBM Management API sample](https://github.com/rcs-business-messaging/rcs-for-business-python/blob/main/business-communications-api/rbm-management-api-samples/TesterOperations.py).

## List the testers of an agent

```
curl -v -X GET "https://businesscommunications.googleapis.com/v1/testers?agentId=$AGENT_ID" \
  -H "User-Agent: curl/business-messaging" \
  -H "\`oauth2l header --json rbm-developer-service-account-credentials.json businesscommunications\`"
```
This code is an excerpt from our [RBM Management API sample](https://github.com/rcs-business-messaging/rcs-for-business-curl/blob/main/business-communications-api/rbm-management-api-samples/listTesters.sh).

```
endpoint_url = (BASE_ENDPOINT +
  'testers?' +
  'agentId=' + agentId)

response = authed_session.get(endpoint_url)
```
This code is an excerpt from our [RBM Management API sample](https://github.com/rcs-business-messaging/rcs-for-business-python/blob/main/business-communications-api/rbm-management-api-samples/TesterOperations.py).

## Retrieve the status of a tester

```
curl -v -X GET "https://businesscommunications.googleapis.com/v1/$TESTER_ID?agentId=$AGENT_ID" \
  -H "User-Agent: curl/business-messaging" \
  -H "\`oauth2l header --json rbm-developer-service-account-credentials.json businesscommunications\`"
```
This code is an excerpt from our [RBM Management API sample](https://github.com/rcs-business-messaging/rcs-for-business-curl/blob/main/business-communications-api/rbm-management-api-samples/getTester.sh).

```
endpoint_url = (BASE_ENDPOINT +
  testerId +
  '?agentId=' + agentId)

response = authed_session.get(endpoint_url)
```
This code is an excerpt from our [RBM Management API sample](https://github.com/rcs-business-messaging/rcs-for-business-python/blob/main/business-communications-api/rbm-management-api-samples/TesterOperations.py).

## Delete a tester

```
curl -v -X DELETE "https://businesscommunications.googleapis.com/v1/$TESTER_ID?agentId=$AGENT_ID" \
  -H "User-Agent: curl/business-messaging" \
  -H "\`oauth2l header --json rbm-developer-service-account-credentials.json businesscommunications\`"
```
This code is an excerpt from our [RBM Management API sample](https://github.com/rcs-business-messaging/rcs-for-business-curl/blob/main/business-communications-api/rbm-management-api-samples/deleteTester.sh).

```
endpoint_url = (BASE_ENDPOINT +
  testerId +
  '?agentId=' + agentId)

response = authed_session.delete(endpoint_url)
```
This code is an excerpt from our [RBM Management API sample](https://github.com/rcs-business-messaging/rcs-for-business-python/blob/main/business-communications-api/rbm-management-api-samples/TesterOperations.py).[Previous](https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/agents)

[Manage agents](https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/agents)[Next](https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/webhooks)

[Manage webhooks](https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/webhooks)