---
type: query
title: "Verification Failure Handling"
query: "What happens when a Google RCS agent fails verification? What are the states and how can it be retried?"
answered: 2026-04-10
tags: [verification, agent-lifecycle, troubleshooting]
---

## Answer

### Verification States

The `VerificationState` enum tracks verification progress:

| State | Meaning |
|-------|---------|
| `VERIFICATION_STATE_UNVERIFIED` | Not yet verified |
| `VERIFICATION_STATE_PENDING` | Verification in progress (Google-managed) |
| `VERIFICATION_STATE_VERIFIED` | Verification complete |
| `VERIFICATION_STATE_SUSPENDED_IN_GMB` | GMB listing no longer verified (location agents only) |

### Agent-Level Rejection

- Agents can enter `REJECTED` state at the agent lifecycle level
- Rejected agents **can be archived** but **cannot be deleted**
- Verification info **cannot be edited** after submitting launch request

### Retry Path

1. **If verification pending/failed**: Cannot edit verification info post-submission
2. **If GMB suspended**: Reverifying in GMB automatically reverifies in Business Communications
3. **If rejected**: **Unknown** — sources don't document retry process (see New Insights)

### Brand Approval Process

- Google-managed launches: brand POC receives email from `rbm-support@google.com`
- Response is **required** — faster response = faster approval
- Once verified, applies to **all future Google-managed launches**

## Sources Consulted

- [api-resource-verification-state](../sources/api-resource-verification-state.md)
- [api-resource-agent-verification](../sources/api-resource-agent-verification.md)
- [agent-lifecycle](../concepts/agent-lifecycle.md)
- [carrier-launch](../concepts/carrier-launch.md)
- [brand-verification](../sources/brand-verification.md)
- [launch-approval](../sources/launch-approval.md)

## New Insights

Gaps discovered that warrant future investigation:

1. **Rejection reasons not documented** — What specific errors cause REJECTED state?
2. **Appeal/retry process unclear** — Can rejected verification be appealed without creating new agent?
3. **GMB suspension recovery** — Detailed steps for reverifying a suspended GMB listing
4. **Carrier-managed rejection** — How does rejection differ for carrier-managed launches?

These gaps should be added to `health.md` Suggested Questions.
