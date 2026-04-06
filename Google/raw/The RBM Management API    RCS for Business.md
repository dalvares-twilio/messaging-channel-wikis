---
title: "The RBM Management API  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/overview"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- The RBM Management API replicates the capabilities of the RBM Developer Console and is useful for aggregators and partners.
- This REST API allows developers to programmatically create and edit RBM agents, upload assets, and submit agents for verification and launch.
- The API is exposed as RCS extensions to Google's Business Communications API and requires authentication using a Service Account.
- Sample code in Java and Node.js, and client libraries in Csharp, Java, and Node.js are available to simplify development.
- The workflow for creating and launching an agent includes creating a brand and agent, submitting for verification and launch, and checking the status.

The RBM Management API replicates the capabilities of the [RBM Developer Console](https://developers.google.com/business-communications/rcs-business-messaging/guides/build/agents). This API is especially useful for aggregators and partners who operate their own campaign platforms and want to seamlessly integrate RBM as a channel.

The RBM Management API is a REST API that allows developers to programmatically do the following:

- Create and edit RBM agent definitions and upload assets.
- Submit RBM agents for verification and launch.
- Retrieve verification and launch information.

The RBM Management API is exposed as RCS extensions to Google's [Business Communications API](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest).

## Authentication credentials

Any RBM developer can access the RBM Management API. When calling the API, you authenticate using a [Service Account](https://developers.google.com/business-communications/rcs-business-messaging/guides/get-started/partner-account#set_up_service_account_to_authenticate_api_calls) you have created in the [Developer Console](https://business-communications.cloud.google.com/console/partner-console/partner/service-account).

Your Service Account key is used to authenticate with the Google OAuth2 server to obtain an access token which is then used to call the RBM Management API. You can read more about this process in the [Service Account Authentication](https://developers.google.com/identity/protocols/oauth2/service-account) page.

The oauth scope for this API is `businesscommunications`.

These code snippets demonstrate how to use Google's public libraries for authentication.

When using curl, you can authenticate by generating an authorization bearer token from your Service Account key using the [oauth2l](https://github.com/google/oauth2l) tool.
```
-H "\`oauth2l header --json rbm-developer-service-account-credentials.json businesscommunications\`"
```

```
from google.auth.transport.requests import AuthorizedSession
from google.oauth2 import service_account

BASE_ENDPOINT = 'https://businesscommunications.googleapis.com/v1/'

SCOPES = ['https://www.googleapis.com/auth/businesscommunications']

credentials = service_account.Credentials.from_service_account_file(
  './rbm-developer-service-account-credentials.json',
  scopes = SCOPES)

authed_session = AuthorizedSession(credentials)
```
This code is an excerpt from our [RBM Management API sample](https://github.com/rcs-business-messaging/rcs-for-business-python/blob/main/business-communications-api/rbm-management-api-samples/BusinessComms.py).

We strongly advise developers not to implement authentication themselves given the complexity of implementing token expiry and refresh.

## Sample code

To better understand how to use the RBM Management API, download the sample code in a range of languages:

- Download [cURL samples](https://github.com/rcs-business-messaging/rcs-for-business-curl)
- Download [Python samples](https://github.com/rcs-business-messaging/rcs-for-business-python)
- Download [Java samples](https://github.com/rcs-business-messaging/rbm-api-examples/tree/master/java/rbm-mgmt-api)
- Download [Node.js samples](https://github.com/rcs-business-messaging/rbm-api-examples/tree/master/nodejs/rbm-mgmt-api)

## Client libraries

Client libraries handle authentication and API marshalling and unmarshalling to simplify your development. They are published in multiple languages:

- [Csharp](https://github.com/rcs-business-messaging/rbm-api-examples/tree/master/csharp/business-communications/business-communications-api)
- [Java](https://github.com/rcs-business-messaging/rbm-api-examples/tree/master/java/business-communications/business-communications-api)
- [Node.js](https://github.com/rcs-business-messaging/rbm-api-examples/tree/master/nodejs/business-communications/business-communications-api)

## Workflow

To create and launch an agent with the RBM Management API, follow these steps:

1. Create a brand.
2. Create an agent in the brand.
3. Add testers to the agent so you can validate the user experience.
4. Submit the agent for verification.
5. Submit the agent for launch with one or more carriers.
6. Check the launch status.[Next](https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/regions)

[List carriers (regions)](https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/regions)