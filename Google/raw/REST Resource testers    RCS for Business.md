---
title: "REST Resource: testers  |  RCS for Business"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/testers"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Testers allow agents to interact with verified testers even before launch.
- A tester's JSON representation includes name, agentId, phoneNumber, and inviteStatus.
- Tester fields include `name` (unique identifier), `agentId`, `phoneNumber` (required in E.164 format), and read-only `inviteStatus`.
- InviteStatus can be UNSPECIFIED, PENDING, ACCEPTED, or DECLINED.
- Available methods for testers include create, delete, get, and list.

## Resource: Tester

A tester for the agent. The agent can interact with verified testers even if the agent has not yet launched.

| JSON representation |
| --- |
| ``` {   "name": string,   "agentId": string,   "phoneNumber": string,   "inviteStatus": enum (InviteStatus) } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Output only. ReadOnly. The unique identifier of the tester. This field should resolve to "testers/{E.164}" where {E.164} is the tester's phone number in E.164 format.</p></td></tr><tr><td><code>agentId</code></td><td><p><code>string</code></p><p>Agent ID.</p></td></tr><tr><td><code>phoneNumber</code></td><td><p><code>string</code></p><p>Required. The phone number of the tester in E.164 format.</p></td></tr><tr><td><code>inviteStatus</code></td><td><p><code>enum (<code>InviteStatus</code>)</code></p><p>Output only. The status of the invitation. Read-only. Returned by the platform.</p></td></tr></tbody></table>

## InviteStatus

Type of an invitation.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>INVITE_STATUS_UNSPECIFIED</code></td><td>Unspecified status.</td></tr><tr><td><code>PENDING</code></td><td>The user has not responded to the invite yet.</td></tr><tr><td><code>ACCEPTED</code></td><td>The user accepted the invitation to become a tester.</td></tr><tr><td><code>DECLINED</code></td><td>The user declined the invitation to become a tester.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Sends an invite to a phone number to be added as a tester.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a tester device.</td></tr><tr><td><h3>get</h3></td><td>Gets the invite status of a tester device.</td></tr><tr><td><h3>list</h3></td><td>List the invite statuses of tester devices.</td></tr></tbody></table>