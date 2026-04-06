---
title: "Method: brands.agents.integrations.list  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents.integrations/list"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- To list integrations, you need to make an HTTP GET request to the specified URL using the agent's unique identifier as the parent parameter.
- The `pageSize` and `pageToken` query parameters are currently unsupported and will be ignored.
- The request body must be empty.
- The successful response body will contain a list of integration objects and a currently unsupported `nextPageToken`.

List integrations.

### HTTP request

`GET https://businesscommunications.googleapis.com/v1/{parent=brands/*/agents/*}/integrations`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>parent</code></td><td><p><code>string</code></p><p>Required. The unique identifier of the agent. If the brand identifier is "1234" and the agent identifier is "5678", this parameter resolves to "brands/1234/agents/5678".</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>Currently this field is unsupported because the number of agent-level integrations is too few for pagination to be needed. This field will be ignored if passed.</p><p>Specify the maximum number of results for the server to return. The server may further limit the maximum number of results returned per page. If the pageSize is 0, the server will decide how many results are returned.</p><p>Optional</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Currently this field is unsupported as the number of agent-level integrations is too few for pagination to be needed. This field will be ignored if passed.</p><p>The nextPageToken value returned from a previous List request, if any.</p><p>Optional</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response for integrations.list.

If successful, the response body contains data with the following structure:

| JSON representation |
| --- |
| ``` {   "integrations": [     {            }   ],   "nextPageToken": string } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>integrations[]</code></td><td><p>List of integrations.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Currently this field is unsupported because the number of agent-level integrations is too few for pagination to be needed.</p><p>The pagination token to retrieve the next page of results. If the value is "", it means no further results for the request.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).