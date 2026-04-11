# Wiki Index

Master catalog of all pages in this knowledge base.

---

## Overview

- [overview](overview.md) — High-level synthesis of the knowledge base

## Sources

| Page | Summary |
|------|---------|
| [webhooks-overview](webhooks-overview.md) | Main webhook reference — fields, permissions, delivery |
| [webhook-overrides](sources/webhook-overrides.md) | Alternate callback URL configuration via API |
| [create-webhook-endpoint](create-webhook-endpoint.md) | Production endpoint setup — TLS, verification, signature validation |
| [create-test-webhook-endpoint](create-test-webhook-endpoint.md) | Test endpoint using Render + Node.js |
| [whatsapp-business-accounts](whatsapp-business-accounts.md) | WABA creation, limits, partner sharing, webhooks |
| [official-business-accounts](official-business-accounts.md) | OBA blue checkmark, eligibility, notability criteria |
| [business-profiles](business-profiles.md) | Phone number profile fields, API operations |
| [display-names](display-names.md) | Display name verification, update workflow |
| [business-scoped-user-ids](business-scoped-user-ids.md) | BSUIDs, usernames, contact book (launching 2026) |
| [business-phone-numbers](business-phone-numbers.md) | Phone number types, status, verification, identity check |
| [conversational-components](sources/conversational-components.md) | Ice breakers, commands — in-chat UI features |
| [phone-number-registration](phone-number-registration.md) | Register/deregister endpoints, local storage |
| [two-step-verification](sources/two-step-verification.md) | 2FA PIN setup and reset |
| [messages-webhook-reference](messages-webhook-reference.md) | Messages webhook payload structures |
| [account-update-webhook-reference](account-update-webhook-reference.md) | WABA-level changes, violations, restrictions |
| [account-alerts-webhook-reference](account-alerts-webhook-reference.md) | OBA status, messaging limits alerts |
| [account-review-webhook-reference](account-review-webhook-reference.md) | WABA policy review outcomes |
| [template-webhooks-reference](template-webhooks-reference.md) | Template status, quality, components, category |
| [phone-number-webhooks-reference](phone-number-webhooks-reference.md) | Throughput, display name update webhooks |
| [business-capability-webhook-reference](business-capability-webhook-reference.md) | Messaging and phone number limit changes |
| [history-webhook-reference](history-webhook-reference.md) | WhatsApp Business app chat history sync |
| [partner-solutions-webhook-reference](partner-solutions-webhook-reference.md) | Multi-partner solution status changes |
| [payment-config-webhook-reference](payment-config-webhook-reference.md) | Payment gateway configuration (India/Brazil) |
| [security-webhook-reference](security-webhook-reference.md) | Two-step verification and PIN changes |
| [smb-state-sync-webhook-reference](smb-state-sync-webhook-reference.md) | Contact sync for WA Business app users |
| [smb-message-echoes-webhook-reference](smb-message-echoes-webhook-reference.md) | Messages sent via WA Business app |
| [user-preferences-webhook-reference](user-preferences-webhook-reference.md) | Marketing message opt-in/opt-out |
| [qr-codes-short-links](qr-codes-short-links.md) | QR codes and short links API |
| [embedded-signup-overview](embedded-signup-overview.md) | Main Embedded Signup flow and concepts |
| [hosted-embedded-signup](hosted-embedded-signup.md) | Zero-integration hosted onboarding option |
| [analytics](analytics.md) | Analytics APIs — messaging, conversation, pricing, template |
| [multi-partner-solutions](multi-partner-solutions.md) | Joint Solution Partner + Tech Provider management |
| [onboarding-solution-partner](onboarding-solution-partner.md) | Solution Partner onboarding steps |
| [onboarding-tech-provider](onboarding-tech-provider.md) | Tech Provider onboarding steps |
| [cloud-api-flow](cloud-api-flow.md) | Default Embedded Signup screens walkthrough |
| [embedded-signup-implementation](embedded-signup-implementation.md) | JavaScript SDK implementation |
| [pre-filling-screens](pre-filling-screens.md) | Pre-fill data to bypass screens |
| [embedded-signup-errors](embedded-signup-errors.md) | Error codes and troubleshooting |
| [partner-led-verification](partner-led-verification.md) | Partner business verification process |
| [managing-webhooks](managing-webhooks.md) | Webhook subscription management |
| [managing-wabas](managing-wabas.md) | WABA API management endpoints |
| [managing-credit-lines](managing-credit-lines.md) | Credit line sharing/revoking |
| [pre-verified-phone-numbers](pre-verified-phone-numbers.md) | Pre-verified number workflow |
| [manage-system-users](manage-system-users.md) | System user permissions |
| [automatic-events-api](automatic-events-api.md) | NLP-detected lead/purchase events |
| [app-only-install](app-only-install.md) | Business token-only Embedded Signup |
| [partner-initiated-waba-creation](partner-initiated-waba-creation.md) | MBS-initiated WABA creation |
| [meta-pixel-tracking](meta-pixel-tracking.md) | Track Embedded Signup conversions |
| [business-customer-phone-numbers](business-customer-phone-numbers.md) | Partner phone number management |
| [registering-business-phone-numbers](registering-business-phone-numbers.md) | Programmatic phone registration |
| [adding-waba-to-mps](adding-waba-to-mps.md) | Add existing WABA to MPS |
| [bypassing-phone-number-screen](bypassing-phone-number-screen.md) | Skip phone addition in signup |
| [customizing-default-flow](customizing-default-flow.md) | Overview of signup customizations |
| [multi-solution-conversations](multi-solution-conversations.md) | Same phone number across partners (beta) |
| [website-field-optional](website-field-optional.md) | Optional website for verification |
| [mps-embedded-creation](mps-embedded-creation.md) | Embedded MPS creation button |
| [migrate-waba-between-mps-embedded-signup](migrate-waba-between-mps-embedded-signup.md) | WABA migration between MPS via signup |
| [migrate-waba-between-mps-mbs](migrate-waba-between-mps-mbs.md) | WABA migration between MPS via MBS |
| [migrate-waba-between-solution-partners](migrate-waba-between-solution-partners.md) | Switch Solution Partners |
| [migrate-customer-off-mps-embedded-signup](migrate-customer-off-mps-embedded-signup.md) | Off-board from MPS via signup |
| [migrate-customer-off-mps-mbs](migrate-customer-off-mps-mbs.md) | Off-board from MPS via MBS |
| [create-retrieve-update-system-user](create-retrieve-update-system-user.md) | Create, retrieve, update system users via API |
| [install-apps-generate-tokens](install-apps-generate-tokens.md) | Install apps, generate/refresh/revoke tokens |
| [system-user-permissions](system-user-permissions.md) | Assign permissions to ad accounts, pages |
| [system-user-api-calls](system-user-api-calls.md) | API call examples with system user tokens |

## Concepts

| Page | Summary |
|------|---------|
| [webhooks](webhooks.md) | Core concept — HTTP callbacks from Meta |
| [webhook-fields](webhook-fields.md) | Subscribable event types (messages, templates, etc.) |
| [webhook-verification](webhook-verification.md) | GET handshake to verify endpoint ownership |
| [webhook-security](webhook-security.md) | TLS, mTLS, signature validation |
| [webhook-overrides](concepts/webhook-overrides.md) | Alternate callback URLs per WABA/phone |
| [permissions](permissions.md) | Required permissions for receiving webhooks |
| [business-verification](business-verification.md) | Meta business portfolio verification process |
| [user-identification](user-identification.md) | BSUIDs, usernames, phone number visibility |
| [phone-number-management](phone-number-management.md) | Phone number lifecycle — add, verify, register, configure |
| [embedded-signup](embedded-signup.md) | Onboard businesses via solution partners |
| [messaging-limits](messaging-limits.md) | Daily conversation limits per business |
| [solution-partners](solution-partners.md) | Third-party integration providers |
| [marketing-messages](marketing-messages.md) | Promotional templates and user opt-out |
| [two-step-verification](two-step-verification.md) | 6-digit PIN security for phone numbers |
| [payments-api](payments-api.md) | In-chat payments (India/Brazil) |

## Entities

| Page | Type | Summary |
|------|------|---------|
| [messages-webhook](messages-webhook.md) | webhook-field | Incoming messages and status updates |
| [account-alerts-webhook](account-alerts-webhook.md) | webhook-field | Messaging limits, business profile, OBA status |
| [message-template-webhooks](message-template-webhooks.md) | webhook-field | Template status, quality, components, category |
| [subscribed-apps-api](subscribed-apps-api.md) | api | WABA webhook subscription and override API |
| [phone-number-webhook-config](phone-number-webhook-config.md) | api | Phone-level webhook override configuration |
| [get-verification-request](get-verification-request.md) | request | Meta's verification handshake format |
| [post-webhook-request](post-webhook-request.md) | request | Webhook payload delivery format |
| [render-deployment](render-deployment.md) | service | Test endpoint hosting platform |
| [whatsapp-business-account](whatsapp-business-account.md) | account | WABA — container for phone numbers and templates |
| [official-business-account](official-business-account.md) | verification-status | OBA blue checkmark status |
| [display-name](display-name.md) | phone-number-attribute | Verified business name for phone number |
| [business-profile](business-profile.md) | phone-number-attribute | Profile info (address, email, website) |
| [bsuid](bsuid.md) | identifier | Business-scoped user ID for messaging |
| [contact-book](contact-book.md) | feature | Meta-hosted user contact storage |
| [meta-business-suite](meta-business-suite.md) | platform | Web platform for managing business assets |
| [business-phone-number](business-phone-number.md) | resource | Core messaging identity on the platform |
| [two-step-verification](entities/two-step-verification.md) | security-feature | 6-digit PIN for sensitive operations |
| [conversational-components](entities/conversational-components.md) | feature | Ice breakers and commands UI |
| [local-storage](local-storage.md) | feature | Data-at-rest geographic localization |
| [qr-codes](qr-codes.md) | feature | QR codes and short links for starting conversations |

---

## Queries

| Page | Question |
|------|----------|
| [qr-code-limit-per-phone-number](qr-code-limit-per-phone-number.md) | What is the maximum number of QR codes per phone number? |
| [qr-code-prefilled-message-use-case](qr-code-prefilled-message-use-case.md) | How do prefilled messages work with QR codes? |
| [analytics-lookback-window](analytics-lookback-window.md) | What are the lookback windows for WhatsApp analytics? |
| [template-analytics-button-clicks](template-analytics-button-clicks.md) | How do I track template button clicks? |
| [system-user-permission-levels](system-user-permission-levels.md) | What permission levels can system users have on a WABA? |
| [system-user-token-expiration](system-user-token-expiration.md) | Do system user access tokens expire? |
| [credit-line-sharing-requirements](credit-line-sharing-requirements.md) | What are the requirements for sharing a credit line? |
| [revoke-credit-line-from-customer](revoke-credit-line-from-customer.md) | How do I revoke a credit line from a customer? |
| [template-status-webhook-events](template-status-webhook-events.md) | What template status events can I receive via webhook? |
| [template-quality-webhook-handling](template-quality-webhook-handling.md) | How should I handle template quality webhooks? |
| [waba-limits-and-constraints](waba-limits-and-constraints.md) | What are the limits on WhatsApp Business Accounts? |
| [oba-eligibility-requirements](oba-eligibility-requirements.md) | What are the requirements to get an Official Business Account? |
| [display-name-update-workflow](display-name-update-workflow.md) | How do I update a display name on WhatsApp Business? |
| [business-profile-fields](business-profile-fields.md) | What fields can be set in a WhatsApp business profile? |
| [bsuid-format-and-usage](bsuid-format-and-usage.md) | What are BSUIDs and how do they work? |
| [waba-creation-methods](waba-creation-methods.md) | What are the different ways to create a WABA? |
| [contact-book-phone-visibility](contact-book-phone-visibility.md) | When will phone numbers be visible with BSUIDs? |
| [business-verification-waba-status](business-verification-waba-status.md) | How do I check business verification status? |
| [display-name-vs-business-profile](display-name-vs-business-profile.md) | What is the difference between display name and business profile? |
| [account-alerts-webhook-types](account-alerts-webhook-types.md) | What alert types does the account_alerts webhook send? |
| [account-update-webhook-events](account-update-webhook-events.md) | What events trigger the account_update webhook? |
| [account-review-webhook-decisions](account-review-webhook-decisions.md) | What decision values does the account_review_update webhook return? |
| [business-verification-requirements](business-verification-requirements.md) | What are the requirements for business verification on WhatsApp? |
| [pre-verified-phone-numbers-workflow](pre-verified-phone-numbers-workflow.md) | How do pre-verified phone numbers work in Embedded Signup? |
| [marketing-message-opt-out-handling](marketing-message-opt-out-handling.md) | How do I handle marketing message opt-outs on WhatsApp? |
| [payments-api-supported-regions](payments-api-supported-regions.md) | Which regions and payment gateways does the WhatsApp Payments API support? |
| [messaging-limit-tiers](messaging-limit-tiers.md) | What are the messaging limit tiers on WhatsApp Business Platform? |
| [partner-led-verification-process](partner-led-verification-process.md) | How does partner-led business verification work? |
| [oba-application-process](oba-application-process.md) | How do I apply for Official Business Account (OBA) status? |
| [embedded-signup-flow-steps](embedded-signup-flow-steps.md) | What are the steps in the Embedded Signup flow? |
| [solution-partner-vs-tech-provider](solution-partner-vs-tech-provider.md) | What is the difference between a Solution Partner and a Tech Provider? |
| [what-is-multi-partner-solution](what-is-multi-partner-solution.md) | What is a Multi-Partner Solution (MPS)? |
| [mps-setup-steps](mps-setup-steps.md) | How do I set up a Multi-Partner Solution? |
| [migrate-waba-between-solution-partners](migrate-waba-between-solution-partners.md) | How does a customer migrate their WABA from one Solution Partner to another? |
| [migrate-waba-between-mps](migrate-waba-between-mps.md) | How do I migrate a WABA between Multi-Partner Solutions? |
| [add-existing-waba-to-mps](add-existing-waba-to-mps.md) | How do I add an existing WABA to a Multi-Partner Solution? |
| [hosted-vs-standard-embedded-signup](hosted-vs-standard-embedded-signup.md) | What is the difference between Hosted and Standard Embedded Signup? |
| [pre-fill-embedded-signup-screens](pre-fill-embedded-signup-screens.md) | How do I pre-fill or skip screens in Embedded Signup? |
| [offboard-customer-from-mps](offboard-customer-from-mps.md) | How do I migrate a customer off a Multi-Partner Solution? |
| [how-to-validate-webhook-signatures](how-to-validate-webhook-signatures.md) | How do I validate HMAC-SHA256 signatures on webhook payloads? |
| [webhook-verification-handshake](webhook-verification-handshake.md) | How does the webhook verification handshake work? |
| [webhook-security-best-practices](webhook-security-best-practices.md) | What are the security best practices for webhook endpoints? |
| [available-webhook-fields](available-webhook-fields.md) | What webhook fields can I subscribe to? |
| [webhook-override-configuration](webhook-override-configuration.md) | How do I configure webhook overrides for alternate callback URLs? |
| [messages-webhook-payload-structure](messages-webhook-payload-structure.md) | What is the structure of the messages webhook payload? |
| [webhook-retry-behavior](webhook-retry-behavior.md) | What happens when my webhook endpoint fails to respond? |
| [webhook-permissions-required](webhook-permissions-required.md) | What permissions do I need to receive webhooks? |
| [which-webhook-fields-support-overrides](which-webhook-fields-support-overrides.md) | Which webhook fields can be routed to alternate callback URLs? |
| [tls-ssl-requirements-for-webhooks](tls-ssl-requirements-for-webhooks.md) | What are the TLS/SSL requirements for webhook endpoints? |
| [how-to-register-phone-number-cloud-api](how-to-register-phone-number-cloud-api.md) | How do I register a phone number for Cloud API? |
| [what-is-two-step-verification-pin](what-is-two-step-verification-pin.md) | What is two-step verification and how do I set/reset the PIN? |
| [phone-number-lifecycle-stages](phone-number-lifecycle-stages.md) | What are the stages in the phone number lifecycle? |
| [ice-breakers-vs-commands](ice-breakers-vs-commands.md) | What is the difference between ice breakers and commands? |
| [phone-number-types-supported](phone-number-types-supported.md) | What phone number types are supported for WhatsApp Business? |
| [local-storage-data-localization](local-storage-data-localization.md) | How do I enable local storage (data localization) for a phone number? |
| [deregister-phone-number](deregister-phone-number.md) | How do I deregister a phone number and what happens when I do? |
| [phone-number-status-connected](phone-number-status-connected.md) | What does phone number status CONNECTED mean and why is it important? |
| [configure-commands-api](configure-commands-api.md) | How do I configure slash commands for my WhatsApp Business number via API? |

---

## Statistics

- **Sources**: 65
- **Concepts**: 15
- **Entities**: 20
- **Queries: 58
- **Last updated**: 2026-04-10
