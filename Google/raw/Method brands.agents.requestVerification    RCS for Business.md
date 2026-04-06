---
title: "Method: brands.agents.requestVerification  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/requestVerification"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- The API endpoint `requestVerification` is used to submit business verification information for an agent.
- Only one verification request can be active at a time for an agent.
- Verification is only performed after a launch is requested.
- The request requires the agent's unique identifier and verification contact details.

Submits business verification information for an agent. Depending on the carrier(s) selected at launch, either the carrier(s) or Google will contact the brand for verification. Only 1 instance of verification is allowed at any given time.

### HTTP request

`POST https://businesscommunications.googleapis.com/v1/{name=brands/*/agents/*}:requestVerification`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The unique identifier of the brand and agent.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

| JSON representation |
| --- |
| ``` {   "agentVerificationContact": {     object (AgentVerificationContact)   } } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>agentVerificationContact</code></td><td><p><code>object (<code>AgentVerificationContact</code>)</code></p><p>Required. Verification contact details for the agent.</p></td></tr></tbody></table>

### Response body

If successful, the response body contains an instance of `AgentVerification`.

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).