---
type: query
title: "Google-Managed vs Carrier-Managed Launch"
query: "What is the difference between Google-managed and carrier-managed launch? How do I know which type a carrier is?"
answered: 2026-04-10
tags: [launch, carriers, google-managed, carrier-managed]
---

## Answer

Google RCS agents can be launched on carriers through two paths: Google-managed (simplified) or carrier-managed (direct contract). The launch type affects verification, timeline, and ongoing relationship.

### Key Differences

| Aspect | Google-Managed | Carrier-Managed |
|--------|----------------|-----------------|
| **Verification** | Google handles | Each carrier handles separately |
| **Approval** | Google handles | Carrier handles |
| **Timeline** | 1-3 business days | Varies by carrier |
| **Agreement** | Via RBM platform | Direct contract required |
| **Billing** | Standard RBM billing | Carrier-specific billing |
| **Brand verification** | Once, applies to all future Google-managed launches | May be contacted by each carrier |

### Identifying Carrier Type

**Via Developer Console**:
1. Navigate to Launch section
2. Select carriers
3. Look for info icon next to carrier name:
   - **Info icon present** = Carrier-managed (additional requirements, contact directly)
   - **No icon** = Google-managed

**Via API**:
Use `regions.list` endpoint:
```json
{
  "regions": [
    {
      "name": "regions/us-att",
      "managementType": "GOOGLE_MANAGED"
    },
    {
      "name": "regions/de-vodafone",
      "managementType": "CARRIER_MANAGED"
    }
  ]
}
```

### Google-Managed Launch Process

1. Submit launch request via Console or API
2. Google emails brand contact for verification
3. Brand responds to verification email
4. Google reviews agent assets
5. Approval typically 1-3 business days
6. Agent active on carrier ~30 minutes after approval

### Carrier-Managed Launch Process

1. Contact carrier directly
2. Negotiate contract and terms
3. Complete carrier's verification process
4. Submit launch request via Console or API
5. Carrier reviews and approves
6. Timeline varies by carrier

### When to Choose Each

**Google-Managed** (preferred for most cases):
- Faster time to market
- Standardized process
- No direct carrier relationship needed
- Works for most major carriers

**Carrier-Managed** (when required):
- Carrier not in Google-managed program
- Special billing arrangements needed
- Carrier-specific features required
- Existing carrier relationship to leverage

### Brand Verification Implications

- **Google-managed**: Verified once by Google, applies to all future Google-managed launches for that agent
- **Carrier-managed**: Each carrier may contact brand separately for verification

### Carrier List Growth

The list of Google-managed carriers is maintained by RBM Support and grows over time. Check `regions.list` API periodically for new supported carriers.

## Sources Consulted

- [carrier-launch](../concepts/carrier-launch.md)
- [verify-launch-overview](../sources/verify-launch-overview.md)
- [list-carriers](../sources/list-carriers.md)
- [brand-verification](../sources/brand-verification.md)

## New Insights

- No public list of all Google-managed vs carrier-managed carriers
- Timeline for carrier-managed launches highly variable (weeks to months)
- Switching from carrier-managed to Google-managed not documented
