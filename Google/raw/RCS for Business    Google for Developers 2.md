---
title: "RCS for Business  |  Google for Developers"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/AgentVerificationContact"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- Verification contact details require specific information about the partner and a brand representative.
- Required fields include the partner's name and email, the brand contact's name and email, and the brand's website URL.
- These details are necessary to verify the accuracy of launch information and the partner's representation of the brand.

Verification contact details for an agent.

| JSON representation |
| --- |
| ``` {   "partnerName": string,   "partnerEmailAddress": string,   "brandContactName": string,   "brandContactEmailAddress": string,   "brandWebsiteUrl": string } ``` |

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>partnerName</code></td><td><p><code>string</code></p><p>Required. The name of the partner requesting the verification.</p></td></tr><tr><td><code>partnerEmailAddress</code></td><td><p><code>string</code></p><p>Required. The email address of the partner.</p></td></tr><tr><td><code>brandContactName</code></td><td><p><code>string</code></p><p>Required. Name of a brand representative who can verify the accuracy of the launch details and that the partner represents the brand.</p></td></tr><tr><td><code>brandContactEmailAddress</code></td><td><p><code>string</code></p><p>Required. The email address of the brand representative.</p></td></tr><tr><td><code>brandWebsiteUrl</code></td><td><p><code>string</code></p><p>Required. The public website of the brand to verify the domain.</p></td></tr></tbody></table>