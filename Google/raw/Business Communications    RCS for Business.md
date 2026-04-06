---
title: "Business Communications  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- The `businesscommunications.googleapis.com` service is used for Google Business Communications APIs, with client libraries recommended for interaction.
- A Discovery Document is available to describe the REST API and its capabilities.
- The base URL for the service endpoint is `https://businesscommunications.googleapis.com`.
- The API provides various REST resources including `analytics.agentPerformances`, `brands`, `brands.agents`, `brands.agents.integrations`, `partners`, `regions`, `surveyQuestions`, and `testers`, each with specific methods for managing related data and functionalities.
- The `brands.agents.delete` method is deprecated, indicating that agent deletion is no longer supported.

## Service: businesscommunications.googleapis.com

The following sections describe the service endpoint and other information you'll need to make requests to this service. For reference, see the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained).

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://businesscommunications.googleapis.com`

## REST Resource: v1.analytics.agentPerformances

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>list</code></td><td><code>GET /v1/analytics/agentPerformances</code><br>Lists agent performance data accessible to the caller.</td></tr></tbody></table>

## REST Resource: v1.brands

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/brands</code><br>Creates a new brand.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/{name=brands/*}</code><br>Deletes a brand.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/{name=brands/*}</code><br>Gets information about a brand.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/brands</code><br>Lists all the brands accessible to the user making the request.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/{brand.name=brands/*}</code><br>Updates information about a brand.</td></tr></tbody></table>

## REST Resource: v1.brands.agents

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/{parent=brands/*}/agents</code><br>Creates a new agent to represent a brand.</td></tr><tr><td><code>delete <br><b>(deprecated)</b></code></td><td><code>DELETE /v1/{name=brands/*/agents/*}</code><br>Deprecated: agent deletion is deprecated.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/{name=brands/*/agents/*}</code><br>Get information about an agent.</td></tr><tr><td><code>getLaunch</code></td><td><code>GET /v1/{name=brands/*/agents/*/launch}</code><br>Gets the launch information for an agent.</td></tr><tr><td><code>getVerification</code></td><td><code>GET /v1/{name=brands/*/agents/*/verification}</code><br>Gets the verification information for an agent.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/{parent=brands/*}/agents</code><br>Lists all the agents associated with a brand.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/{agent.name=brands/*/agents/*}</code><br>Updates information about an agent.</td></tr><tr><td><code>requestLaunch</code></td><td><code>POST /v1/{name=brands/*/agents/*}:requestLaunch</code><br>Begins the launch process for an agent.</td></tr><tr><td><code>requestVerification</code></td><td><code>POST /v1/{name=brands/*/agents/*}:requestVerification</code><br>Submits business verification information for an agent.</td></tr><tr><td><code>updateLaunch</code></td><td><code>PATCH /v1/{agentLaunch.name=brands/*/agents/*/launch}</code><br>Updates the launch information for an agent.</td></tr><tr><td><code>updateVerification</code></td><td><code>PATCH /v1/{agentVerification.name=brands/*/agents/*/verification}</code><br>Updates the verification state for an agent.</td></tr></tbody></table>

## REST Resource: v1.brands.agents.integrations

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/{parent=brands/*/agents/*}/integrations</code><br>Create an integration.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/{name=brands/*/agents/*/integrations/*}</code><br>Delete an integration.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/{name=brands/*/agents/*/integrations/*}</code><br>Get an integration.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/{parent=brands/*/agents/*}/integrations</code><br>List integrations.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/{integration.name=brands/*/agents/*/integrations/*}</code><br>Update an integration.</td></tr></tbody></table>

## REST Resource: v1.partners

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /v1/{name=partners/*}</code><br>Get the information about the partner.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/{partner.name=partners/*}</code><br>Updates the information for a partner.</td></tr></tbody></table>

## REST Resource: v1.regions

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>list</code></td><td><code>GET /v1/regions</code><br>Lists all RCS for Business regions.</td></tr></tbody></table>

## REST Resource: v1.testers

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/testers</code><br>Sends an invite to a phone number to be added as a tester.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/{name=testers/*}</code><br>Deletes a tester device.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/{name=testers/*}</code><br>Gets the invite status of a tester device.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/testers</code><br>List the invite statuses of tester devices.</td></tr></tbody></table>