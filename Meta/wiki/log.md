# Activity Log

Chronological record of wiki operations.

---

## [2026-04-05] init | Wiki System Created
- Created CLAUDE.md schema
- Created wiki directory structure
- Initialized index.md, log.md, overview.md

## [2026-04-05] ingest | Webhooks Developer Documentation
- Created [webhooks-overview](webhooks-overview.md)
- Created concepts: [webhooks](webhooks.md), [webhook-fields](webhook-fields.md), [permissions](permissions.md)
- Created entities: [messages-webhook](messages-webhook.md), [account-alerts-webhook](account-alerts-webhook.md), [message-template-webhooks](message-template-webhooks.md)

## [2026-04-05] ingest | Webhook Overrides Developer Documentation
- Created [webhook-overrides](sources/webhook-overrides.md)
- Created/updated: [webhook-overrides](concepts/webhook-overrides.md)
- Created entities: [subscribed-apps-api](subscribed-apps-api.md), [phone-number-webhook-config](phone-number-webhook-config.md)

## [2026-04-05] ingest | Create a Webhook Endpoint
- Created [create-webhook-endpoint](create-webhook-endpoint.md)
- Created/updated: [webhook-verification](webhook-verification.md), [webhook-security](webhook-security.md)
- Created entities: [get-verification-request](get-verification-request.md), [post-webhook-request](post-webhook-request.md)

## [2026-04-05] ingest | Create a Test Webhook Endpoint
- Created [create-test-webhook-endpoint](create-test-webhook-endpoint.md)
- Updated: [webhook-verification](webhook-verification.md)
- Created entities: [render-deployment](render-deployment.md)

## [2026-04-05] ingest | WhatsApp Business Accounts
- Created [whatsapp-business-accounts](whatsapp-business-accounts.md)
- Created entities: [whatsapp-business-account](whatsapp-business-account.md), [meta-business-suite](meta-business-suite.md)

## [2026-04-05] ingest | Official Business Accounts
- Created [official-business-accounts](official-business-accounts.md)
- Created concepts: [business-verification](business-verification.md)
- Created entities: [official-business-account](official-business-account.md)

## [2026-04-05] ingest | Business Profiles
- Created [business-profiles](business-profiles.md)
- Created entities: [business-profile](business-profile.md)

## [2026-04-05] ingest | Display Names
- Created [display-names](display-names.md)
- Created entities: [display-name](display-name.md)

## [2026-04-05] ingest | Business-scoped User IDs
- Created [business-scoped-user-ids](business-scoped-user-ids.md)
- Created concepts: [user-identification](user-identification.md)
- Created entities: [bsuid](bsuid.md), [contact-book](contact-book.md)

## [2026-04-05] ingest | Business Phone Numbers
- Created [business-phone-numbers](business-phone-numbers.md)
- Created concepts: [phone-number-management](phone-number-management.md)
- Created entities: [business-phone-number](business-phone-number.md)

## [2026-04-05] ingest | Conversational Components
- Created [conversational-components](sources/conversational-components.md)
- Created entities: [conversational-components](entities/conversational-components.md)

## [2026-04-05] ingest | Register a Business Phone Number
- Created [phone-number-registration](phone-number-registration.md)
- Created entities: [local-storage](local-storage.md)

## [2026-04-05] ingest | Two-Step Verification
- Created [two-step-verification](sources/two-step-verification.md)
- Created entities: [two-step-verification](entities/two-step-verification.md)

## [2026-04-05] ingest | Webhook References Batch
- Created [messages-webhook-reference](messages-webhook-reference.md) - Messages webhook payload structures
- Created [account-update-webhook-reference](account-update-webhook-reference.md) - WABA-level changes, violations
- Created [account-alerts-webhook-reference](account-alerts-webhook-reference.md) - OBA status, messaging limit alerts
- Created [account-review-webhook-reference](account-review-webhook-reference.md) - WABA policy review outcomes
- Created [template-webhooks-reference](template-webhooks-reference.md) - Template lifecycle webhooks
- Created [phone-number-webhooks-reference](phone-number-webhooks-reference.md) - Throughput and display name webhooks
- Created [business-capability-webhook-reference](business-capability-webhook-reference.md) - Messaging/phone limits
- Created [history-webhook-reference](history-webhook-reference.md) - Chat history sync for onboarded users
- Created [partner-solutions-webhook-reference](partner-solutions-webhook-reference.md) - Multi-partner solution status
- Created [payment-config-webhook-reference](payment-config-webhook-reference.md) - Payment gateway config (India/Brazil)
- Created [security-webhook-reference](security-webhook-reference.md) - Two-step verification webhooks
- Created [smb-state-sync-webhook-reference](smb-state-sync-webhook-reference.md) - Contact sync
- Created [smb-message-echoes-webhook-reference](smb-message-echoes-webhook-reference.md) - WA Business app message echoes
- Created [user-preferences-webhook-reference](user-preferences-webhook-reference.md) - Marketing message preferences

## [2026-04-05] ingest | QR Codes and Short Links
- Created [qr-codes-short-links](qr-codes-short-links.md)
- Created entities: [qr-codes](qr-codes.md)

## [2026-04-05] lint | Fix Broken Links
- Created [embedded-signup](embedded-signup.md) — Onboarding via solution partners
- Created [messaging-limits](messaging-limits.md) — Daily conversation limits
- Created [solution-partners](solution-partners.md) — Third-party providers
- Created [marketing-messages](marketing-messages.md) — Promotional templates, opt-out
- Created [two-step-verification](two-step-verification.md) — 6-digit PIN security
- Created [payments-api](payments-api.md) — In-chat payments (India/Brazil)
- Updated overview.md and index.md statistics

## [2026-04-05] ingest | Solution Partner & Embedded Signup Batch
- Created 33 new source pages covering:
  - Embedded Signup: overview, hosted, implementation, cloud-api-flow, pre-filling, errors, customizations
  - Solution Partners: onboarding, tech providers, partner-led verification, partner-initiated WABA creation
  - Multi-Partner Solutions: overview, embedded creation, adding WABAs to MPS
  - Multi-Solution Conversations (MSC): beta feature for shared phone numbers
  - Phone Management: business customer numbers, registration, pre-verified numbers, bypassing screens
  - Account Management: managing WABAs, webhooks, credit lines, system users
  - Migrations: WABA between MPS (ES/MBS), between Solution Partners, off-boarding from MPS (ES/MBS)
  - Analytics: all analytics APIs
  - Tracking: Meta Pixel, automatic events API
- Updated index.md and overview.md (28 → 61 sources)

## [2026-04-05] ingest | System User Documentation
- Created [create-retrieve-update-system-user](create-retrieve-update-system-user.md) — Create, retrieve, update system users via API
- Created [install-apps-generate-tokens](install-apps-generate-tokens.md) — Install apps, generate/refresh/revoke access tokens
- Created [system-user-permissions](system-user-permissions.md) — Assign permissions to ad accounts, pages, proxied assets
- Created [system-user-api-calls](system-user-api-calls.md) — API call examples with system user tokens
- Updated index.md and overview.md (61 → 65 sources)

## [2026-04-10] query | QR Codes and Short Links - Limits
- Filed [qr-code-limit-per-phone-number](qr-code-limit-per-phone-number.md) — Max 2,000 QR codes/short links per phone number

## [2026-04-10] query | QR Codes and Short Links - Prefilled Messages
- Filed [qr-code-prefilled-message-use-case](qr-code-prefilled-message-use-case.md) — Prefilled messages for campaign tracking

## [2026-04-10] query | Analytics - Lookback Windows
- Filed [analytics-lookback-window](analytics-lookback-window.md) — 1 year for messaging/conversation, 90 days for templates

## [2026-04-10] query | Analytics - Template Button Clicks
- Filed [template-analytics-button-clicks](template-analytics-button-clicks.md) — Enable is_enabled_for_insights, MARKETING/UTILITY only

## [2026-04-10] query | System Users - Permission Levels
- Filed [system-user-permission-levels](system-user-permission-levels.md) — MANAGE vs DEVELOP, granular tasks for MPS

## [2026-04-10] query | System Users - Token Expiration
- Filed [system-user-token-expiration](system-user-token-expiration.md) — Non-expiring vs 60-day tokens, rotation process

## [2026-04-10] query | Credit Lines - Sharing Requirements
- Filed [credit-line-sharing-requirements](credit-line-sharing-requirements.md) — Requirements and supported currencies

## [2026-04-10] query | Credit Lines - Revocation
- Filed [revoke-credit-line-from-customer](revoke-credit-line-from-customer.md) — Multi-step revocation process

## [2026-04-10] query | Template Webhooks - Status Events
- Filed [template-status-webhook-events](template-status-webhook-events.md) — APPROVED, REJECTED, DISABLED, etc.

## [2026-04-10] query | Template Webhooks - Quality Handling
- Filed [template-quality-webhook-handling](template-quality-webhook-handling.md) — Quality lifecycle and recommended actions

## [2026-04-10] query | WABA Limits and Constraints
- Filed [waba-limits-and-constraints](waba-limits-and-constraints.md) — Max 20 WABAs per account, 250 templates, 2-20 phone numbers

## [2026-04-10] query | OBA Eligibility Requirements
- Filed [oba-eligibility-requirements](oba-eligibility-requirements.md) — Policy compliance, 30-day tenure, notability, business verification

## [2026-04-10] query | Display Name Update Workflow
- Filed [display-name-update-workflow](display-name-update-workflow.md) — Submit, wait for verification, re-register after approval

## [2026-04-10] query | Business Profile Fields
- Filed [business-profile-fields](business-profile-fields.md) — About, address, description, email, websites, vertical

## [2026-04-10] query | BSUID Format and Usage
- Filed [bsuid-format-and-usage](bsuid-format-and-usage.md) — Country code prefix, 128 chars, unique per portfolio+user

## [2026-04-10] query | WABA Creation Methods
- Filed [waba-creation-methods](waba-creation-methods.md) — App Dashboard, Solution Provider, Meta Business Suite

## [2026-04-10] query | OBA Request via API
- Filed [oba-request-via-api](oba-request-via-api.md) — POST endpoint, supporting links, status values

## [2026-04-10] query | Contact Book and Phone Visibility
- Filed [contact-book-phone-visibility](contact-book-phone-visibility.md) — 30-day lookback, contact book storage, username impact

## [2026-04-10] query | Business Verification and WABA Status
- Filed [business-verification-waba-status](business-verification-waba-status.md) — Check via API, required for OBA eligibility

## [2026-04-10] query | Display Name vs Business Profile
- Filed [display-name-vs-business-profile](display-name-vs-business-profile.md) — Verification required vs immediate, different update flows

## [2026-04-10] query | Account Alerts Webhook Types
- Filed [account-alerts-webhook-types](account-alerts-webhook-types.md) — OBA_APPROVED, OBA_REJECTED, PROFILE_PICTURE_LOST, limit deferred

## [2026-04-10] query | Account Update Webhook Events
- Filed [account-update-webhook-events](account-update-webhook-events.md) — WABA violations, restrictions, partner events, pricing updates

## [2026-04-10] query | Account Review Webhook Decisions
- Filed [account-review-webhook-decisions](account-review-webhook-decisions.md) — APPROVED, REJECTED, PENDING, DEFERRED outcomes

## [2026-04-10] query | Business Verification Requirements
- Filed [business-verification-requirements](business-verification-requirements.md) — Portfolio verification, OBA eligibility, partner-led option

## [2026-04-10] query | Pre-verified Phone Numbers Workflow
- Filed [pre-verified-phone-numbers-workflow](pre-verified-phone-numbers-workflow.md) — 3-step API flow, 90-day limits, sharing with partners

## [2026-04-10] query | Marketing Message Opt-out Handling
- Filed [marketing-message-opt-out-handling](marketing-message-opt-out-handling.md) — user_preferences webhook, stop/resume values

## [2026-04-10] query | Payments API Supported Regions
- Filed [payments-api-supported-regions](payments-api-supported-regions.md) — India (Razorpay, PayU, BillDesk, Zaakpay), Brazil

## [2026-04-10] query | Messaging Limit Tiers
- Filed [messaging-limit-tiers](messaging-limit-tiers.md) — 250 to UNLIMITED tiers, automatic increase criteria

## [2026-04-10] query | Partner-led Verification Process
- Filed [partner-led-verification-process](partner-led-verification-process.md) — 5-minute turnaround, 3 attempts max, API workflow

## [2026-04-10] query | OBA Application Process
- Filed [oba-application-process](oba-application-process.md) — WhatsApp Manager and API methods, status values

## [2026-04-10] query | Webhook Signature Validation
- Filed [how-to-validate-webhook-signatures](how-to-validate-webhook-signatures.md) — HMAC-SHA256 validation with app secret

## [2026-04-10] query | Webhook Verification Handshake
- Filed [webhook-verification-handshake](webhook-verification-handshake.md) — GET request flow with hub.mode, hub.challenge, hub.verify_token

## [2026-04-10] query | Webhook Security Best Practices
- Filed [webhook-security-best-practices](webhook-security-best-practices.md) — TLS/SSL, mTLS, signature validation, IP allowlisting

## [2026-04-10] query | Available Webhook Fields
- Filed [available-webhook-fields](available-webhook-fields.md) — Complete list of subscribable webhook events by category

## [2026-04-10] query | Webhook Override Configuration
- Filed [webhook-override-configuration](webhook-override-configuration.md) — WABA and phone number level override API operations

## [2026-04-10] query | Messages Webhook Payload Structure
- Filed [messages-webhook-payload-structure](messages-webhook-payload-structure.md) — Incoming messages and status update payload formats

## [2026-04-10] query | Webhook Retry Behavior
- Filed [webhook-retry-behavior](webhook-retry-behavior.md) — Retry strategy, 7-day window, duplicate handling

## [2026-04-10] query | Webhook Permissions
- Filed [webhook-permissions-required](webhook-permissions-required.md) — whatsapp_business_messaging vs whatsapp_business_management

## [2026-04-10] query | Webhook Fields Supporting Overrides
- Filed [which-webhook-fields-support-overrides](which-webhook-fields-support-overrides.md) — Message-related fields support overrides, admin/template fields do not

## [2026-04-10] query | TLS/SSL Requirements for Webhooks
- Filed [tls-ssl-requirements-for-webhooks](tls-ssl-requirements-for-webhooks.md) — Valid CA certificate required, self-signed not supported

## [2026-04-10] query | Embedded Signup Flow Steps
- Filed [embedded-signup-flow-steps](embedded-signup-flow-steps.md) — 6-step onboarding flow and post-completion requirements

## [2026-04-10] query | Solution Partner vs Tech Provider
- Filed [solution-partner-vs-tech-provider](solution-partner-vs-tech-provider.md) — Billing responsibility, credit line sharing differences

## [2026-04-10] query | What is Multi-Partner Solution (MPS)
- Filed [what-is-multi-partner-solution](what-is-multi-partner-solution.md) — Joint management by Solution Partner + Tech Provider

## [2026-04-10] query | MPS Setup Steps
- Filed [mps-setup-steps](mps-setup-steps.md) — Webhooks, App Dashboard creation, partner acceptance, Embedded Signup config

## [2026-04-10] query | Migrate WABA Between Solution Partners
- Filed [migrate-waba-between-solution-partners](migrate-waba-between-solution-partners.md) — Downtime warning, timing restrictions, step-by-step process

## [2026-04-10] query | Migrate WABA Between MPS
- Filed [migrate-waba-between-mps](migrate-waba-between-mps.md) — API tagging, 2FA disable, new WABA creation, template handling

## [2026-04-10] query | Add Existing WABA to MPS
- Filed [add-existing-waba-to-mps](add-existing-waba-to-mps.md) — set_solution_migration_intent API, 90-day auto-confirm

## [2026-04-10] query | Hosted vs Standard Embedded Signup
- Filed [hosted-vs-standard-embedded-signup](hosted-vs-standard-embedded-signup.md) — Zero-integration vs customizable, feature comparison

## [2026-04-10] query | Pre-fill Embedded Signup Screens
- Filed [pre-fill-embedded-signup-screens](pre-fill-embedded-signup-screens.md) — Business, phone, WABA objects in extras.setup

## [2026-04-10] query | Offboard Customer from MPS
- Filed [offboard-customer-from-mps](offboard-customer-from-mps.md) — Migration to independent operation, payment method requirement

## [2026-04-10] query | Phone Number Registration for Cloud API
- Filed [how-to-register-phone-number-cloud-api](how-to-register-phone-number-cloud-api.md) — 3-step process: add to WABA, verify, register via API

## [2026-04-10] query | Two-Step Verification PIN Setup/Reset
- Filed [what-is-two-step-verification-pin](what-is-two-step-verification-pin.md) — 6-digit PIN required for registration, reset via WhatsApp Manager

## [2026-04-10] query | Messaging Limit Tiers and Increases
- Filed [messaging-limit-tiers-explained](messaging-limit-tiers-explained.md) — 5 tiers from 250 to UNLIMITED, auto-increase criteria

## [2026-04-10] query | Phone Number Lifecycle Stages
- Filed [phone-number-lifecycle-stages](phone-number-lifecycle-stages.md) — Add, verify, register, configure, use, delete workflow

## [2026-04-10] query | Ice Breakers vs Commands
- Filed [ice-breakers-vs-commands](ice-breakers-vs-commands.md) — Ice breakers on first chat (max 4), commands anytime (max 30)

## [2026-04-10] query | Supported Phone Number Types
- Filed [phone-number-types-supported](phone-number-types-supported.md) — Mobile recommended, fixed/toll-free/VoIP voice only, short codes not supported

## [2026-04-10] query | Local Storage Data Localization
- Filed [local-storage-data-localization](local-storage-data-localization.md) — Configure during registration, cannot change without deregister/re-register

## [2026-04-10] query | Deregistering a Phone Number
- Filed [deregister-phone-number](deregister-phone-number.md) — Disables Cloud API, local storage; preserves number and history

## [2026-04-10] query | Phone Number CONNECTED Status
- Filed [phone-number-status-connected](phone-number-status-connected.md) — Required for messaging and limit increases

## [2026-04-10] query | Configuring Slash Commands via API
- Filed [configure-commands-api](configure-commands-api.md) — POST to conversational_automation endpoint, max 30 commands

## [2026-04-10] cleanup | Duplicate Query Consolidation

Removed 2 duplicate queries:
- `messaging-limit-tiers-explained.md` (merged into `messaging-limit-tiers.md`)
- `oba-request-via-api.md` (merged into `oba-application-process.md`)

Query count: 60 → 58

## [2026-04-10] fix | Convert Wikilinks to Markdown Links

Converted all Obsidian wikilinks to standard markdown links for GitHub compatibility:
- 848 wikilinks converted to `[name](path.md)` format
- 7 image embeds converted to `![image](path)` format

Links now render correctly on GitHub.
