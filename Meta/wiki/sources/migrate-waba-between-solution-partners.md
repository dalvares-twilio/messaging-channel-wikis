---
type: source
title: "Migrate WABA Between Solution Partners"
source_file: "[[raw/Migrating a WABA from one Solution Partner to another via Embedded Signup.md]]"
source_url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/migrating-wabas-among-solution-partners-via-embedded-signup"
ingested: 2026-04-05
tags: [migration, solution-partners, embedded-signup]
---

## Summary

Business customers can switch Solution Partners by unsharing WABA with current partner and resharing with new partner via Embedded Signup.

## Downtime Warning

Customer **cannot send messages** from unshare until new credit line is active on 1st of following month.

## Timing Restrictions

- Cannot share credit line last 3 days or first 4 days of any month
- Advise customers to start near end of month (but 3+ days before month end)

## Limitations

- Customer must own WABA (not On-Behalf-Of model)
- Credit line currency must match WABA currency
- Phone numbers must be re-registered

## Steps

1. **Customer**: Unshare WABA in MBS > Partners tab
2. **Customer**: Complete new partner's Embedded Signup (select existing WABA)
3. **Partner**: Get credentials from session log
4. **Partner**: Exchange token code for business token
5. **Partner**: Add system user to WABA (if using system token)
6. **Partner**: Share credit line

## Timeline Example

- Apr 20: Customer unshares (messaging blocked)
- Apr 21: Customer completes signup, partner shares credit line
- May 1: New credit line active, messaging resumes

## Related Concepts
- [[wiki/concepts/solution-partners]]
- [[wiki/concepts/embedded-signup]]
