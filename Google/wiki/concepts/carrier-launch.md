---
type: concept
title: "Carrier Launch"
aliases: [launch process, carrier approval, Google-managed launch, carrier-managed launch]
sources: 4
---

## Overview

Launching an RBM agent involves brand verification and approval by Google, carriers, or both. The process varies depending on whether carriers are Google-managed or carrier-managed.

## Details

### Launch Process
1. **Brand verification**: authorized brand rep confirms agent info and partner's right to manage
2. **Launch approval**: review of agent assets by Google/carriers
3. **Activation**: agent can reach RBM users on approved carrier networks (~30 minutes after approval)

### Google-Managed vs Carrier-Managed

| Aspect | Google-Managed | Carrier-Managed |
|--------|----------------|-----------------|
| Verification | Google handles | Carrier handles |
| Approval | Google handles | Carrier handles |
| Timeline | 1-3 business days | Varies by carrier |
| Agreement | Via RBM platform | Direct contract required |
| Billing | Standard | Carrier-specific |

### Prerequisites
- All agent information complete
- Agent tested
- STOP (opt-out) flow implemented
- Agent preview video (publicly accessible)

### Brand Approval Email
- Google-managed: `rbm-support@google.com` emails brand POC
- Response **required** — faster = faster approval
- Once verified, applies to all future Google-managed launches

### Identifying Carrier Type
- Developer Console → Launch → Select carriers
- Info icon = carrier-managed (additional requirements, contact directly)
- No icon = Google-managed

### Regions API
- `regions.list` returns available carriers
- `managementType`: `GOOGLE_MANAGED` or `CARRIER_MANAGED`
- Carrier list maintained by RBM Support, grows over time

## Related

- [[wiki/concepts/agent-lifecycle]]
- [[wiki/concepts/use-cases]]

## Sources

- [[wiki/sources/verify-launch-overview]]
- [[wiki/sources/brand-verification]]
- [[wiki/sources/launch-approval]]
- [[wiki/sources/list-carriers]]
