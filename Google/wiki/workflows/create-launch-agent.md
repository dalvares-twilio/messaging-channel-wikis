---
type: workflow
title: "Create and Launch RBM Agent"
trigger: "New RCS channel needed for a brand"
outcome: "Agent live on target carrier networks"
prerequisites: [brand-verification-contact, test-device]
estimated_time: "1-4 weeks (varies by carrier type)"
tags: [agent, launch, setup]
---

## Overview

Step-by-step process to create an RBM agent and launch it on carrier networks. Includes critical immutability warnings at each stage.

## Prerequisites

- Brand point-of-contact email (for verification)
- RCS-enabled test device
- Agent preview video (publicly accessible URL)
- STOP/opt-out flow implemented in your application

## Steps

1. **Create Agent** — Developer Console → Create new agent
   - Set **hosting region** (NA, EU, APAC) — *immutable after creation*
   - Set **billing category** (Conversational/Non-conversational)
   - Set **use case** (OTP, Transactional, Promotional, Multi-use) — *immutable after launch submission*
   - Associate with brand

2. **Configure Agent Info** — Add branding and contact details
   - Logo: 224x224 px, ≤50 kB, avoid transparency
   - Hero image (optional): 1440x448 px, ≤200 kB
   - Description, contact info, privacy policy URL
   - *Info becomes immutable after verification submission*

3. **Add Test Devices** — See [[wiki/workflows/add-test-device]]
   - Invite testers by phone number
   - Wait for invite acceptance
   - Verify test messages work

4. **Submit Brand Verification**
   - Google-managed carriers: `rbm-support@google.com` contacts your brand POC
   - Carrier-managed: Contact carrier directly
   - Brand POC must respond to verification email
   - *Agent info locked after this step*

5. **Complete Launch Questionnaire**
   - Select target carriers
   - Identify carrier type: info icon = carrier-managed (requires direct contract)
   - Provide agent preview video URL

6. **Await Approval**
   - Google-managed: 1-3 business days
   - Carrier-managed: Varies by carrier
   - Monitor Developer Console for status updates

7. **Verify Launch**
   - Agent status = "Launched"
   - Send test message to non-tester device on target carrier
   - Confirm delivery within ~30 minutes of approval

## Verification

- [ ] Agent status shows "Launched" in Developer Console
- [ ] Test message delivered to production device (not tester)
- [ ] Webhook receiving events from production users

## Troubleshooting

- **Issue**: Can't change use case
  **Solution**: Use case cannot be changed after launch submission. Must create new agent with correct use case.

- **Issue**: Can't change hosting region
  **Solution**: Region is immutable at creation. Must create new agent in correct region.

- **Issue**: Need to delete agent
  **Solution**: Agents cannot be deleted for security reasons. Contact support if needed.

## Related

- [[wiki/concepts/agent-lifecycle]]
- [[wiki/concepts/carrier-launch]]
- [[wiki/concepts/use-cases]]
- [[wiki/concepts/billing-categories]]
- [[wiki/concepts/branding-guidelines]]

## Sources

- [[wiki/sources/create-agent]]
- [[wiki/sources/verify-launch-overview]]
- [[wiki/sources/brand-verification]]
- [[wiki/sources/launch-approval]]
