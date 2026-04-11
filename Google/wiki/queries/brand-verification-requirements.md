---
type: query
title: "Brand Verification Requirements"
query: "What are the brand verification requirements for launching a Google RCS agent? Who needs to be contacted?"
answered: 2026-04-10
tags: [brand, verification, launch, compliance]
---

## Answer

Brand verification confirms that an authorized brand representative verifies agent information and the partner's right to manage the agent. It is a mandatory prerequisite before any carrier launch.

### When Verification is Required

- Required before **first launch submission**
- Submit **once per agent** (regardless of how many carriers you launch on)
- Happens **after** you submit the launch request (not before)

### Brand Contact Requirements

The **brand contact** must be:
- An employee of the brand (not the partner/developer)
- Have authority to verify agent information
- Able to respond to Google's verification email

### Supporting Documents

- Up to **5 PDF files**
- Max **50 MB each**
- Examples:
  - Authorization letter from brand
  - Contract between partner and brand
  - Business license
  - Brand registration documents

### Verification Process

1. Partner submits launch request via Developer Console or API
2. Google contacts brand POC at `rbm-support@google.com`
3. Brand contact verifies agent info and partner authority
4. Faster response = faster approval

### Google-Managed vs Carrier-Managed Verification

| Aspect | Google-Managed | Carrier-Managed |
|--------|----------------|-----------------|
| Who verifies | Google | Individual carriers |
| Frequency | Once, applies to all future Google-managed launches | May be contacted by each carrier separately |
| Timeline | 1-3 business days | Varies by carrier |

### Important Constraints

- **Cannot edit** verification info after submitting launch request
- Verification failure requires resubmission (see [verification-failure-handling](../queries/verification-failure-handling.md))

### Prerequisites for Launch Request

Before submitting for brand verification:
1. All agent information complete
2. Agent tested on test devices
3. STOP (opt-out) flow implemented
4. Agent preview video created (publicly accessible URL)

## Sources Consulted

- [brand-verification](../sources/brand-verification.md)
- [carrier-launch](../concepts/carrier-launch.md)
- [launch-approval](../sources/launch-approval.md)
- [agent-lifecycle](../concepts/agent-lifecycle.md)

## New Insights

- Verification info cannot be modified post-submission; must get it right first time
- No documented process for expediting verification
- Brand contact email requirements (work email vs personal) not specified
