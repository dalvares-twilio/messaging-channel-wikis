---
type: query
title: "What decision values does the account_review_update webhook return?"
asked: 2026-04-10
tags: [webhooks, review, waba, policy]
---

## Question

What decision values does the account_review_update webhook return?

## Answer

The `account_review_update` webhook notifies when Meta completes a WABA policy review. The decision field contains one of the following values:

### Decision Values

| Value | Description | Can Use APIs? |
|-------|-------------|---------------|
| `APPROVED` | WABA approved and ready for use | Yes |
| `REJECTED` | Doesn't meet policy requirements | No |
| `PENDING` | Review decision still pending | Limited |
| `DEFERRED` | Decision deferred | No |

### When It Triggers

The webhook fires when:
- A new WABA is approved after initial review
- A WABA is rejected for policy violations
- A decision is deferred pending additional information
- Review status changes from pending to a final decision

### What to Do

- **APPROVED**: Full platform access granted, proceed with messaging
- **REJECTED**: Review Meta's Business Messaging Policy, address issues, may need to create new WABA
- **PENDING**: Wait for review completion, limited functionality
- **DEFERRED**: Additional information may be required, cannot use APIs until resolved

## References

- [account-review-webhook-reference](../sources/account-review-webhook-reference.md)
- [whatsapp-business-account](../entities/whatsapp-business-account.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_review_update
