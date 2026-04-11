---
type: query
title: "What is the difference between a Solution Partner and a Tech Provider?"
asked: 2026-04-10
tags: [solution-partners, tech-providers, partners]
---

## Question

What is the difference between a Solution Partner and a Tech Provider on the WhatsApp Business Platform?

## Answer

The key difference is **billing responsibility**:

### Solution Partners

- **Share credit lines** with onboarded customers
- Partners are **liable for all spend** on their credit line
- Must have a line of credit before onboarding customers
- Customers do not need to add their own payment method
- Post-signup step: `POST /<CREDIT_LINE_ID>/whatsapp_credit_sharing_and_attach`

### Tech Providers

- **Do NOT share credit lines**
- Customers **pay directly** for their WhatsApp usage
- Must instruct customers to add payment method via WhatsApp Manager > Overview > Add payment method
- Cannot send template messages until customer configures payment

### Onboarding Steps Comparison

| Step | Solution Partner | Tech Provider |
|------|------------------|---------------|
| Exchange token | Yes | Yes |
| Subscribe webhooks | Yes | Yes |
| Share credit line | **Yes** | No |
| Register phone | Yes | Yes |
| Customer adds payment | No | **Yes** |

### Multi-Partner Solutions

Tech Providers can partner with Solution Partners in Multi-Partner Solutions (MPS), where the Solution Partner handles billing and the Tech Provider provides the technical integration.

## References

- [onboarding-solution-partner](../sources/onboarding-solution-partner.md)
- [onboarding-tech-provider](../sources/onboarding-tech-provider.md)
- [managing-credit-lines](../sources/managing-credit-lines.md)
- [solution-partners](../concepts/solution-partners.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-customers-as-a-solution-partner
