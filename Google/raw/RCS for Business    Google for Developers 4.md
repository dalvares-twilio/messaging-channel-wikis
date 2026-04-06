---
title: "RCS for Business  |  Google for Developers"
source: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/VerificationState"
author:
published:
created: 2026-04-05
description:
tags:
  - "clippings"
---
## Page Summary

- `VERIFICATION_STATE_UNSPECIFIED` indicates an unspecified state.
- `VERIFICATION_STATE_UNVERIFIED` indicates an unverified state.
- `VERIFICATION_STATE_PENDING` means brand verification is in progress, either Google-managed or carrier-managed.
- `VERIFICATION_STATE_VERIFIED` means verification is complete.
- `VERIFICATION_STATE_SUSPENDED_IN_GMB` means the Google My Business listing is no longer verified, requiring re-verification in GMB.

The state of information verification.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>VERIFICATION_STATE_UNSPECIFIED</code></td><td>Unspecified state.</td></tr><tr><td><code>VERIFICATION_STATE_UNVERIFIED</code></td><td>Unverified state.</td></tr><tr><td><code>VERIFICATION_STATE_PENDING</code></td><td>Indicates that brand verification for Google-managed launches is in progress and awaiting completion. Carrier-managed launches use their own brand verification processes; consult the carrier's guidelines for status updates. For more information about Google-managed vs. carrier-managed launches, refer to the <a href="https://developers.google.com/business-communications/rcs-business-messaging/guides/launch?model=xion#google-managed-vs.">documentation</a>.</td></tr><tr><td><code>VERIFICATION_STATE_VERIFIED</code></td><td>Verification complete.</td></tr><tr><td><code>VERIFICATION_STATE_SUSPENDED_IN_GMB</code></td><td>Indicates the associated Google My Business listing is no longer verified, a requirement for verification in Business Communications. Reverifying in Google My Business automatically reverifies here. Only applicable for locations.</td></tr></tbody></table>