---
type: concept
title: "Permissions"
aliases: [webhook permissions, access permissions]
sources: 1
---

## Overview

To receive webhooks from the WhatsApp Business Platform, your app needs specific permissions. The required permission depends on the webhook field type.

## Required Permissions

| Permission | Required For |
|------------|--------------|
| `whatsapp_business_messaging` | `messages` webhooks |
| `whatsapp_business_management` | All other webhooks |

## Granting Permissions

### Direct Developers

Use your **system user** to grant permissions when generating your system token.

### Solution Providers

If providing services to business customers:
1. Must be approved for **advanced access** via App Review
2. Business customers grant permissions during onboarding
3. Cannot receive webhooks until App Review approval

## Permission Scope

- Permissions are granted at the **app** level
- Apply to all WABAs the app is subscribed to
- Solution providers need per-customer onboarding

## Related Concepts
- [[webhooks]]
- [[webhook-fields]]

## Sources
- [[webhooks-overview]]
