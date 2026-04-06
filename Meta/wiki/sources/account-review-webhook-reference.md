---
type: source
title: "account_review_update Webhook Reference"
source_file: "[[raw/account_review_update webhook reference  Developer Documentation.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_review_update"
ingested: 2026-04-05
tags: [webhooks, account, review, reference]
---

## Summary

The `account_review_update` webhook notifies of WABA policy review outcomes.

## Triggers

- WABA approved
- WABA rejected
- Decision deferred or awaiting more info

## Decision Values

| Value | Description |
|-------|-------------|
| `APPROVED` | WABA approved and ready for use |
| `REJECTED` | Doesn't meet policy requirements |
| `PENDING` | Review decision still pending |
| `DEFERRED` | Decision deferred, cannot use APIs |

## Related Concepts
- [[wiki/concepts/webhooks]]

## Related Entities
- [[wiki/entities/whatsapp-business-account]]
