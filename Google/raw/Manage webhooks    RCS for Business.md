---
title: "Manage webhooks  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/guides/management-api/webhooks"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Webhooks are URLs where the RBM platform posts messages and events.
- Agents created through the RBM Management API use a single partner-level webhook by default, configured in the Business Communications Developer Console.
- You can use the RBM Management API to configure agent-level webhooks for agents with distinct behavior.
- Creating a webhook integration involves defining a URL and validation token, following validation steps, and calling the `createWebhookIntegration` method.
- You can retrieve, look up details of, or remove an agent's webhook integrations using the RBM Management API.

All agents created through the RBM Management API use a single webhook for notifications by default. This [partner-level webhook](https://developers.google.com/business-communications/rcs-business-messaging/guides/get-started/partner-account#configure_your_partner_webhook) is configured in the Business Communications Developer Console and it applies to all agents within your partner account.

Alternatively, you can use the RBM Management API to configure [agent-level webhooks](https://developers.google.com/business-communications/rcs-business-messaging/guides/integrate/webhooks#configure_an_agent_webhook). This may be a good option if you manage multiple agents with distinct behavior.

Code snippets on this page are taken from the [Java samples](https://github.com/rcs-business-messaging/rbm-api-examples/tree/master/java/rbm-mgmt-api) and [Node.js samples](https://github.com/rcs-business-messaging/rbm-api-examples/tree/master/nodejs/rbm-mgmt-api).

## Create a webhook integration

To add an agent webhook integration, first define the URL for your webhook and define a validation token. Then configure the webhook to follow the [validation steps](https://developers.google.com/business-communications/rcs-business-messaging/guides/integrate/webhooks#configure_an_agent_webhook). Once configured, call the `createWebhookIntegration` method with the URL and token values. If that call succeeds, you can proceed with [verifying and handling incoming messages](https://developers.google.com/business-communications/rcs-business-messaging/guides/integrate/webhooks#verify_incoming_messages).

For more details, see [`brands.agents.integrations`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents.integrations#resource:-integration) and [`brands.agents.integrations.create`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents.integrations/create).

```
const businessCommunicationsApiHelper =
  require('@google/rbm-businesscommunications');

const privateKey =
  require('../../resources/businesscommunications-service-account-credentials.json');

businessCommunicationsApiHelper.initBusinessCommunucationsApi(privateKey);

const url = 'https://myrbmserviceendpoint.somewhere.com/callback';

const token = '123456';

businessCommunicationsApiHelper
  .createWebhookIntegration(agent.name, url, token)
  .then((response) => {
    console.log(JSON.stringify(response.data, null, 2));
  }).catch((err) => {
    console.log(err);
  }
);
```

This code returns the new webhook object:

```
{
  "name": "brands/40bd963f-ff92-425c-b273-8f0892d2d017/agents/my_new_agent_hfaoplpu_agent/integrations/4efdb82f-fd6d-4ba4-8ea3-f2f4a60d1547",
  "status": "ENABLED",
  "agentWebhookIntegration": {
    "webhookUri": "https://myrbmserviceendpoint.somewhere.com/callback"
  }
}
```

## Look up an agent's webhook integrations

You can retrieve a list of all the webhook integrations belonging to an agent. In practice, an RBM agent only ever has a single webhook integration. For more details, see [`brands.agents.integrations.list`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents.integrations/list).

```
const businessCommunicationsApiHelper =
  require('@google/rbm-businesscommunications');

const privateKey =
  require('../../resources/businesscommunications-service-account-credentials.json');

businessCommunicationsApiHelper.initBusinessCommunucationsApi(privateKey);

businessCommunicationsApiHelper
  .listAgentIntegrations(agent.name)
  .then((response) => {
    console.log(JSON.stringify(response.data, null, 2));
    datastore.saveJsonData('integrations', response.data);
  }).catch((err) => {
    console.log(err);
  });
```

This code returns a list of the agent's webhook integrations:

```
{
  "integrations": [
    {
      "name": "brands/40bd963f-ff92-425c-b273-8f0892d2d017/agents/my_new_agent_hfaoplpu_agent/integrations/4efdb82f-fd6d-4ba4-8ea3-f2f4a60d1547",
      "status": "ENABLED",
      "agentWebhookIntegration": {
        "webhookUri": "https://myrbmserviceendpoint.somewhere.com/callback"
      }
    }
  ]
}
```

## Look up details of an integration

You can retrieve integration details if you have the reference to an integration. For more details, see [`brands.agents.integrations.get`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents.integrations/get).

```
const businessCommunicationsApiHelper =
  require('@google/rbm-businesscommunications');

const privateKey =
  require('../../resources/businesscommunications-service-account-credentials.json');

businessCommunicationsApiHelper.initBusinessCommunucationsApi(privateKey);

businessCommunicationsApiHelper
  .getAgentIntegration(integrations.integrations[0].name)
  .then((response) => {
    console.log(JSON.stringify(response.data, null, 2));
  }).catch((err) => {
    console.log(err);
  });
```

This code returns the webhook integration details:

```
{
  "name": "brands/40bd963f-ff92-425c-b273-8f0892d2d017/agents/my_new_agent_hfaoplpu_agent/integrations/4efdb82f-fd6d-4ba4-8ea3-f2f4a60d1547",
  "status": "ENABLED",
  "agentWebhookIntegration": {
    "webhookUri": "https://myrbmserviceendpoint.somewhere.com/callback"
  }
}
```

## Remove a webhook

You can remove a webhook from an agent using its reference. For more details, see [`brands.agents.integrations.delete`](https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents.integrations/delete).

```
const businessCommunicationsApiHelper =
  require('@google/rbm-businesscommunications');

const privateKey =
  require('../../resources/businesscommunications-service-account-credentials.json');

businessCommunicationsApiHelper.initBusinessCommunucationsApi(privateKey);

businessCommunicationsApiHelper
  .deleteAgentIntegration(integrations.integrations[0].name)
  .then((response) => {
    console.log(JSON.stringify(response.data, null, 2));
  }).catch((err) => {
    console.log(err);
  });
```

An empty object is returned:

```
{}
```