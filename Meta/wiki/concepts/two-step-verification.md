---
type: concept
title: "Two-Step Verification"
tags: [security, 2fa, pin]
---

## Definition

Two-step verification (2FA) adds a layer of security to business phone numbers by requiring a 6-digit PIN for sensitive operations like registration and deregistration.

## Key Operations

- **Set PIN** — Enable 2FA with a new PIN
- **Change PIN** — Update existing PIN
- **Reset PIN** — Disable 2FA (requires email verification)

## When PIN is Required

- Registering a phone number
- Deregistering a phone number
- Performing sensitive account operations

## Related Webhooks

- `security` — Notifies of PIN changes and reset requests

## Related Entities

- [[wiki/entities/two-step-verification]]

## Sources

- [[wiki/sources/two-step-verification]]
- [[wiki/sources/security-webhook-reference]]
