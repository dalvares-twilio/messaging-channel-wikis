---
type: query
title: "How does a customer migrate their WABA from one Solution Partner to another?"
asked: 2026-04-10
tags: [migration, solution-partners, waba]
---

## Question

How can a business customer switch from one Solution Partner to another while keeping their WABA?

## Answer

### Important Warning

> **Downtime**: Customer **cannot send messages** from the time they unshare the WABA until the new credit line becomes active on the 1st of the following month.

### Timing Restrictions

- Cannot share credit line in the **last 3 days** or **first 4 days** of any month
- Advise customers to start near end of month (but 3+ days before month end)

### Prerequisites

- Customer must **own the WABA** (not On-Behalf-Of model)
- Credit line currency must match WABA currency
- Phone numbers must be re-registered after migration

### Migration Steps

#### Customer Steps

1. **Unshare WABA** in Meta Business Suite > Partners tab
2. **Complete new partner's Embedded Signup** (select existing WABA)

#### New Partner Steps

3. Get credentials from session log (WABA ID, phone number ID, token code)
4. Exchange token code for business token
5. Add system user to WABA (if using system token)
6. Share credit line: `POST /<CREDIT_LINE_ID>/whatsapp_credit_sharing_and_attach`
7. Re-register phone number

### Timeline Example

| Date | Action | Status |
|------|--------|--------|
| Apr 20 | Customer unshares WABA | Messaging blocked |
| Apr 21 | Customer completes signup, partner shares credit | Waiting |
| May 1 | New credit line active | Messaging resumes |

## References

- [migrate-waba-between-solution-partners](../sources/migrate-waba-between-solution-partners.md)
- [managing-credit-lines](../sources/managing-credit-lines.md)
- [solution-partners](../concepts/solution-partners.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/migrating-wabas-among-solution-partners-via-embedded-signup
