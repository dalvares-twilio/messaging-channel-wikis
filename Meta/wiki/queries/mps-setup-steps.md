---
type: query
title: "How do I set up a Multi-Partner Solution?"
asked: 2026-04-10
tags: [multi-partner-solutions, setup, partners]
---

## Question

What are the steps to set up a Multi-Partner Solution between a Solution Partner and Tech Provider?

## Answer

### Prerequisites

- Both parties must be approved partners (Solution Partner and Tech Provider)
- Solution Partner must have an active credit line
- Both must be subscribed to relevant webhooks

### Setup Steps

#### 1. Determine Solution Details

Coordinate with your partner on:
- Solution name and description
- Which party handles which responsibilities
- Customer onboarding flow

#### 2. Subscribe to Webhooks

Both parties should subscribe to:
- `account_update` — Partner added/removed events
- `partner_solutions` — Solution status changes

#### 3. Create the Solution

Navigate to App Dashboard > WhatsApp > Partner Solutions and create a new solution.

#### 4. Partner Acceptance

The invited partner accepts via:
- App Dashboard, or
- API: `POST /<SOLUTION_ID>/accept`

#### 5. Configure Embedded Signup

Add the `solutionID` to your Embedded Signup configuration:

```javascript
FB.login(callback, {
  config_id: '<CONFIG_ID>',
  extras: {
    setup: {
      solutionID: '<MPS_SOLUTION_ID>'
    }
  }
});
```

#### 6. Monitor Partner Events

Listen for `PARTNER_ADDED` webhook events to know when customers complete onboarding.

### Managing Solutions

- Edit/deactivate via App Dashboard or API
- Deactivation requires partner acceptance
- Get solutions: `GET /<APP_ID>/whatsapp_business_solutions`

## References

- [multi-partner-solutions](../sources/multi-partner-solutions.md)
- [embedded-signup-implementation](../sources/embedded-signup-implementation.md)
- Source URL: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions
