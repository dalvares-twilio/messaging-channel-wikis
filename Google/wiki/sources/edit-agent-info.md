---
type: source
title: "Edit Agent Information"
source_file: "[Edit agent information    RCS for Business.md](../../raw/Edit agent information    RCS for Business.md)"
source_url: "https://developers.google.com/business-communications/rcs-business-messaging/guides/build/agents/edit-agent-information"
ingested: 2026-04-05
tags: [agents, configuration, branding]
---

## Summary

After creating an agent, you must define its information before submitting for verification and launch. This includes display name, description, brand color, logo, hero image, contact details, and legal URLs.

Agent status progresses through: Incomplete → Ready for launch → Launch pending → Launched. Critical restriction: **you cannot edit agent info after verification is submitted**.

## Key Points

- Agent info required before verification/launch submission
- Edit via Developer Console or RBM Management API
- **Status stages**: Incomplete, Ready for launch, Launch pending, Launched
- **Cannot edit after verification submission**
- **Display name**: typically brand name
- **Color**: minimum 4.5:1 contrast ratio to white (accessibility)
- **Logo**: 224x224 px, ≤50 kB, displayed as 224px circle
- **Banner/Hero**: 1440x448 px (45:14 ratio), ≤200 kB
- **Contact**: at least one of phone, email, or website required
- **Privacy/ToS URLs**: required for launch
- Logo tips: leave space for circular cropping, avoid transparency (dark mode issues)
- Post-launch changes require carrier approval and lead time

## Related Concepts

- [agent-lifecycle](../concepts/agent-lifecycle.md)
- [branding-guidelines](../concepts/branding-guidelines.md)

## Related Entities

- [developer-console](../entities/developer-console.md)
- [rbm-management-api](../entities/rbm-management-api.md)
