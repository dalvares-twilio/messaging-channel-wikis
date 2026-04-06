---
title: "RCS for Business  |  Google for Developers"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/AgentVerification"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Agent verification information is represented in JSON format.
- Key fields include `name`, `verificationState`, and `agentVerificationContact`.
- `name` and `agentVerificationContact` are required fields.
- `verificationState` is an enum indicating the verification status.

Details about the verification information for an agent.

| JSON representation |
| --- |
| ``` {   "name": string,   "verificationState": enum (VerificationState),   "agentVerificationContact": {     object (AgentVerificationContact)   } } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The identifier for verification.</p></td></tr><tr><td><code>verificationState</code></td><td><p><code>enum (<code>VerificationState</code>)</code></p><p>The verification state.</p></td></tr><tr><td><code>agentVerificationContact</code></td><td><p><code>object (<code>AgentVerificationContact</code>)</code></p><p>Required. The contact details.</p></td></tr></tbody></table>

## VerificationState

The state of information verification.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>VERIFICATION_STATE_UNSPECIFIED</code></td><td>Unspecified state.</td></tr><tr><td><code>VERIFICATION_STATE_UNVERIFIED</code></td><td>Unverified state.</td></tr><tr><td><code>VERIFICATION_STATE_PENDING</code></td><td>Indicates that brand verification for Google-managed launches is in progress and awaiting completion. Carrier-managed launches use their own brand verification processes; consult the carrier's guidelines for status updates. For more information about Google-managed vs. carrier-managed launches, refer to the <a href="https://developers.google.com/business-communications/rcs-business-messaging/guides/launch#google-managed-vs.">documentation</a>.</td></tr><tr><td><code>VERIFICATION_STATE_VERIFIED</code></td><td>Verification complete.</td></tr><tr><td><code>VERIFICATION_STATE_SUSPENDED_IN_GMB</code></td><td><p>Indicates the associated Google My Business listing is no longer verified, a requirement for verification in Business Communications. Reverifying in Google My Business automatically reverifies here. Only applicable for locations.</p></td></tr></tbody></table>