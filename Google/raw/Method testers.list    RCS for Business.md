---
title: "Method: testers.list  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/testers/list"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Use a `GET` request to `https://businesscommunications.googleapis.com/v1/testers` with the agent ID as a query parameter to list the invite statuses of tester devices.
- The request body should be empty.
- The response body contains a list of tester objects with their invite statuses.
- The request requires the `https://www.googleapis.com/auth/businesscommunications` OAuth scope for authorization.

List the invite statuses of tester devices.

### HTTP request

`GET https://businesscommunications.googleapis.com/v1/testers`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>agentId</code></td><td><p><code>string</code></p><p>Agent ID.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response for testers.list.

If successful, the response body contains data with the following structure:

| JSON representation |
| --- |
| ``` {   "testers": [     {            }   ] } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>testers[]</code></td><td><p>List of testers.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).