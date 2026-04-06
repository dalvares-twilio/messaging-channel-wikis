# Meta WhatsApp Business Platform — Knowledge Base Overview

This knowledge base covers Meta's WhatsApp Business Platform, based on official developer documentation.

## Core Topics

### 1. Webhooks
Real-time notifications from the platform covering messages, account changes, templates, and phone number updates. See [[webhooks]].

### 2. Business Accounts
WABAs are the fundamental container for businesses on the platform. Each WABA holds phone numbers, templates, and configurations. See [[whatsapp-business-account]].

### 3. Phone Number Management
Business phone numbers require registration for Cloud API use. They have profiles, display names, 2FA, and can achieve OBA status. See [[phone-number-management]], [[business-phone-number]].

### 4. User Identification (Coming 2026)
BSUIDs and usernames are new identifiers enabling messaging without phone numbers. See [[user-identification]], [[bsuid]].

## Key Concepts

| Concept | Description |
|---------|-------------|
| [[webhooks]] | HTTP callbacks delivering event notifications |
| [[webhook-fields]] | Subscribable event types (messages, templates, account updates) |
| [[webhook-verification]] | GET request handshake to verify endpoint ownership |
| [[webhook-security]] | TLS/SSL, mTLS, and signature validation |
| [[Knowledge-Bases/Channels/Meta/wiki/concepts/webhook-overrides]] | Alternate callback URLs per WABA or phone number |
| [[permissions]] | Required permissions for receiving webhooks |
| [[business-verification]] | Meta business portfolio verification |
| [[user-identification]] | BSUIDs, usernames, phone number visibility |
| [[phone-number-management]] | Phone number lifecycle — add, verify, register |
| [[embedded-signup]] | Onboard businesses via solution partners |
| [[messaging-limits]] | Daily conversation limits per business |
| [[solution-partners]] | Third-party integration providers |
| [[marketing-messages]] | Promotional templates and user opt-out |
| [[two-step-verification]] | 6-digit PIN security for phone numbers |
| [[payments-api]] | In-chat payments (India/Brazil) |

## Key Entities

| Entity | Type | Description |
|--------|------|-------------|
| [[whatsapp-business-account]] | account | Container for phone numbers and templates |
| [[official-business-account]] | status | Blue checkmark verification |
| [[display-name]] | attribute | Verified business name |
| [[business-profile]] | attribute | Profile info (address, email, website) |
| [[bsuid]] | identifier | Business-scoped user ID |
| [[messages-webhook]] | webhook-field | Incoming/outgoing message events |
| [[contact-book]] | feature | Meta-hosted user contact storage |
| [[business-phone-number]] | resource | Core messaging identity |
| [[Knowledge-Bases/Channels/Meta/wiki/entities/conversational-components]] | feature | Ice breakers and slash commands |

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
| [[webhooks-overview]] | Complete webhook field reference |
| [[Knowledge-Bases/Channels/Meta/wiki/sources/webhook-overrides]] | API for alternate callback URLs |
| [[create-webhook-endpoint]] | Production endpoint setup |
| [[create-test-webhook-endpoint]] | Render-based test endpoint |
| [[whatsapp-business-accounts]] | WABA creation, limits, sharing |
| [[official-business-accounts]] | OBA eligibility, notability |
| [[business-profiles]] | Profile fields, API |
| [[display-names]] | Display name verification workflow |
| [[business-scoped-user-ids]] | BSUIDs, usernames, contact book |
| [[business-phone-numbers]] | Phone number types, status, identity check |
| [[Knowledge-Bases/Channels/Meta/wiki/sources/conversational-components]] | Ice breakers, commands UI |
| [[phone-number-registration]] | Register/deregister, local storage |
| [[Knowledge-Bases/Channels/Meta/wiki/sources/two-step-verification]] | 2FA PIN setup |

## Current State

- **Sources ingested**: 65
- **Concepts**: 15
- **Entities**: 20
- **Last updated**: 2026-04-05
- **Coverage**: Webhooks (all fields), accounts, phone numbers, registration, 2FA, conversational UI, QR codes, payments, embedded signup (complete), solution partners, tech providers, multi-partner solutions, migrations, analytics
- **Gaps**: Message templates (creation/management), media handling, conversation billing
