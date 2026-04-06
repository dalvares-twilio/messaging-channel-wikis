---
title: "Method: testers.create  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/testers/create"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- An invite is sent to a phone number to add a user as a tester.
- The invited user must be RCS-enabled and reachable by the RBM platform.
- Users become testers after confirming their desire to do so through an RBM platform management agent message.
- There are daily and total limits on tester requests, exceeding which results in a `429 RESOURCE_EXHAUSTED` error.
- Adding a tester involves a POST request to `https://businesscommunications.googleapis.com/v1/testers` and requires the `https://www.googleapis.com/auth/businesscommunications` OAuth scope.

Sends an invite to a phone number to be added as a tester.

The invited user must be RCS-enabled and reachable by the RCS for Business platform. When an agent invites a user to become a tester, an RCS for Business platform management agent sends a message to the user asking for confirmation that she wants to be a tester of the agent. Once the user confirms, she becomes a tester.

An agent can send 20 tester requests each day with a total maximum of 200 tester requests. If you send tester requests above those limits, the RCS for Business platform returns a `429 RESOURCE_EXHAUSTED` response.

### HTTP request

`POST https://businesscommunications.googleapis.com/v1/testers`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/businesscommunications`

For more information, see the [OAuth 2.0 Overview](https://developers.google.com/identity/protocols/OAuth2).