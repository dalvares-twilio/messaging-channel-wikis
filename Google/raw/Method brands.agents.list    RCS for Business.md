---
title: "Method: brands.agents.list  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/list"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- This method lists all agents associated with a brand.
- The HTTP request uses a GET method with the specified URL structure.
- The `parent` parameter in the URL identifies the brand or RBM carrier.
- The response body contains a list of agent objects and a pagination token.

Lists all the agents associated with a brand.

### HTTP request

`GET https://businesscommunications.googleapis.com/v1/{parent=brands/*}/agents`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The unique identifier of the brand. If the brand identifier is "1234", this parameter resolves to "brands/1234". The brand identifier must be "-" to return all agents for an RCS for Business carrier.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Specify the maximum number of results to be returned by the server. The server may further constrain the maximum number of results returned in a single page. If the pageSize is 0, the server will decide the number of results to be returned.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The nextPageToken value returned from a previous List request, if any.</p></td></tr><tr><td><code>launchStateFilter</code></td><td><p>Optional. Only return agents with this launch state. Works only when used by carriers.</p></td></tr><tr><td><code>includeLaunchData</code></td><td><p><code>boolean</code></p><p>If true, launch data (without questionnaire) is included in the agent response. Works only when used by carriers.</p></td></tr><tr><td><code>includeHidden</code></td><td><p><code>boolean</code></p><p>Optional. Includes hidden agents in the response.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

A list of agents.

If successful, the response body contains data with the following structure:

| JSON representation |
| --- |
| ``` {   "agents": [     {            }   ],   "nextPageToken": string } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>agents[]</code></td><td><p>List of agent information.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>The pagination token to retrieve the next page of results. If the value is "", it means no further results for the request.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).