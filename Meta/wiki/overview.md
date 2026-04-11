# Meta WhatsApp Business Platform — Knowledge Base Overview

This knowledge base covers Meta's WhatsApp Business Platform, based on official developer documentation.

## Core Topics

### 1. Webhooks
Real-time notifications from the platform covering messages, account changes, templates, and phone number updates. See [webhooks](webhooks.md).

### 2. Business Accounts
WABAs are the fundamental container for businesses on the platform. Each WABA holds phone numbers, templates, and configurations. See [whatsapp-business-account](whatsapp-business-account.md).

### 3. Phone Number Management
Business phone numbers require registration for Cloud API use. They have profiles, display names, 2FA, and can achieve OBA status. See [phone-number-management](phone-number-management.md), [business-phone-number](business-phone-number.md).

### 4. User Identification (Coming 2026)
BSUIDs and usernames are new identifiers enabling messaging without phone numbers. See [user-identification](user-identification.md), [bsuid](bsuid.md).

## Key Concepts

| Concept | Description |
|---------|-------------|
| [webhooks](webhooks.md) | HTTP callbacks delivering event notifications |
| [webhook-fields](webhook-fields.md) | Subscribable event types (messages, templates, account updates) |
| [webhook-verification](webhook-verification.md) | GET request handshake to verify endpoint ownership |
| [webhook-security](webhook-security.md) | TLS/SSL, mTLS, and signature validation |
| [webhook-overrides](concepts/webhook-overrides.md) | Alternate callback URLs per WABA or phone number |
| [permissions](permissions.md) | Required permissions for receiving webhooks |
| [business-verification](business-verification.md) | Meta business portfolio verification |
| [user-identification](user-identification.md) | BSUIDs, usernames, phone number visibility |
| [phone-number-management](phone-number-management.md) | Phone number lifecycle — add, verify, register |
| [embedded-signup](embedded-signup.md) | Onboard businesses via solution partners |
| [messaging-limits](messaging-limits.md) | Daily conversation limits per business |
| [solution-partners](solution-partners.md) | Third-party integration providers |
| [marketing-messages](marketing-messages.md) | Promotional templates and user opt-out |
| [two-step-verification](two-step-verification.md) | 6-digit PIN security for phone numbers |
| [payments-api](payments-api.md) | In-chat payments (India/Brazil) |

## Key Entities

| Entity | Type | Description |
|--------|------|-------------|
| [whatsapp-business-account](whatsapp-business-account.md) | account | Container for phone numbers and templates |
| [official-business-account](official-business-account.md) | status | Blue checkmark verification |
| [display-name](display-name.md) | attribute | Verified business name |
| [business-profile](business-profile.md) | attribute | Profile info (address, email, website) |
| [bsuid](bsuid.md) | identifier | Business-scoped user ID |
| [messages-webhook](messages-webhook.md) | webhook-field | Incoming/outgoing message events |
| [contact-book](contact-book.md) | feature | Meta-hosted user contact storage |
| [business-phone-number](business-phone-number.md) | resource | Core messaging identity |
| [conversational-components](entities/conversational-components.md) | feature | Ice breakers and slash commands |

## Platform Hierarchy

```
Meta Business Suite (Portfolio)
    └── WhatsApp Business Account (WABA)
            ├── Business Phone Number(s)
            │       ├── Display Name
            │       ├── Business Profile
            │       └── OBA Status (optional)
            └── Message Templates (max 250)
```

## Upcoming Changes (2026)

| Date | Change |
|------|--------|
| April 2026 | BSUIDs appear in webhooks |
| May 2026 | APIs support BSUIDs |
| Late 2026 | Usernames feature launches |

## Source Documents

| Source | Key Content |
|--------|-------------|
| [webhooks-overview](webhooks-overview.md) | Complete webhook field reference |
| [webhook-overrides](sources/webhook-overrides.md) | API for alternate callback URLs |
| [create-webhook-endpoint](create-webhook-endpoint.md) | Production endpoint setup |
| [create-test-webhook-endpoint](create-test-webhook-endpoint.md) | Render-based test endpoint |
| [whatsapp-business-accounts](whatsapp-business-accounts.md) | WABA creation, limits, sharing |
| [official-business-accounts](official-business-accounts.md) | OBA eligibility, notability |
| [business-profiles](business-profiles.md) | Profile fields, API |
| [display-names](display-names.md) | Display name verification workflow |
| [business-scoped-user-ids](business-scoped-user-ids.md) | BSUIDs, usernames, contact book |
| [business-phone-numbers](business-phone-numbers.md) | Phone number types, status, identity check |
| [conversational-components](sources/conversational-components.md) | Ice breakers, commands UI |
| [phone-number-registration](phone-number-registration.md) | Register/deregister, local storage |
| [two-step-verification](sources/two-step-verification.md) | 2FA PIN setup |

## Current State

- **Sources ingested**: 65
- **Concepts**: 15
- **Entities**: 20
- **Last updated**: 2026-04-05
- **Coverage**: Webhooks (all fields), accounts, phone numbers, registration, 2FA, conversational UI, QR codes, payments, embedded signup (complete), solution partners, tech providers, multi-partner solutions, migrations, analytics
- **Gaps**: Message templates (creation/management), media handling, conversation billing
