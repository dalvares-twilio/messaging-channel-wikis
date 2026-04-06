# Wiki Index

Master catalog of all pages in this knowledge base.

---

## Overview

- [[overview]] — High-level synthesis of the knowledge base

## Sources

| Page | Summary |
|------|---------|
| [[webhooks-overview]] | Main webhook reference — fields, permissions, delivery |
| [[Knowledge-Bases/Channels/Meta/wiki/sources/webhook-overrides]] | Alternate callback URL configuration via API |
| [[create-webhook-endpoint]] | Production endpoint setup — TLS, verification, signature validation |
| [[create-test-webhook-endpoint]] | Test endpoint using Render + Node.js |
| [[whatsapp-business-accounts]] | WABA creation, limits, partner sharing, webhooks |
| [[official-business-accounts]] | OBA blue checkmark, eligibility, notability criteria |
| [[business-profiles]] | Phone number profile fields, API operations |
| [[display-names]] | Display name verification, update workflow |
| [[business-scoped-user-ids]] | BSUIDs, usernames, contact book (launching 2026) |
| [[business-phone-numbers]] | Phone number types, status, verification, identity check |
| [[Knowledge-Bases/Channels/Meta/wiki/sources/conversational-components]] | Ice breakers, commands — in-chat UI features |
| [[phone-number-registration]] | Register/deregister endpoints, local storage |
| [[Knowledge-Bases/Channels/Meta/wiki/sources/two-step-verification]] | 2FA PIN setup and reset |
| [[messages-webhook-reference]] | Messages webhook payload structures |
| [[account-update-webhook-reference]] | WABA-level changes, violations, restrictions |
| [[account-alerts-webhook-reference]] | OBA status, messaging limits alerts |
| [[account-review-webhook-reference]] | WABA policy review outcomes |
| [[template-webhooks-reference]] | Template status, quality, components, category |
| [[phone-number-webhooks-reference]] | Throughput, display name update webhooks |
| [[business-capability-webhook-reference]] | Messaging and phone number limit changes |
| [[history-webhook-reference]] | WhatsApp Business app chat history sync |
| [[partner-solutions-webhook-reference]] | Multi-partner solution status changes |
| [[payment-config-webhook-reference]] | Payment gateway configuration (India/Brazil) |
| [[security-webhook-reference]] | Two-step verification and PIN changes |
| [[smb-state-sync-webhook-reference]] | Contact sync for WA Business app users |
| [[smb-message-echoes-webhook-reference]] | Messages sent via WA Business app |
| [[user-preferences-webhook-reference]] | Marketing message opt-in/opt-out |
| [[qr-codes-short-links]] | QR codes and short links API |
| [[embedded-signup-overview]] | Main Embedded Signup flow and concepts |
| [[hosted-embedded-signup]] | Zero-integration hosted onboarding option |
| [[analytics]] | Analytics APIs — messaging, conversation, pricing, template |
| [[multi-partner-solutions]] | Joint Solution Partner + Tech Provider management |
| [[onboarding-solution-partner]] | Solution Partner onboarding steps |
| [[onboarding-tech-provider]] | Tech Provider onboarding steps |
| [[cloud-api-flow]] | Default Embedded Signup screens walkthrough |
| [[embedded-signup-implementation]] | JavaScript SDK implementation |
| [[pre-filling-screens]] | Pre-fill data to bypass screens |
| [[embedded-signup-errors]] | Error codes and troubleshooting |
| [[partner-led-verification]] | Partner business verification process |
| [[managing-webhooks]] | Webhook subscription management |
| [[managing-wabas]] | WABA API management endpoints |
| [[managing-credit-lines]] | Credit line sharing/revoking |
| [[pre-verified-phone-numbers]] | Pre-verified number workflow |
| [[manage-system-users]] | System user permissions |
| [[automatic-events-api]] | NLP-detected lead/purchase events |
| [[app-only-install]] | Business token-only Embedded Signup |
| [[partner-initiated-waba-creation]] | MBS-initiated WABA creation |
| [[meta-pixel-tracking]] | Track Embedded Signup conversions |
| [[business-customer-phone-numbers]] | Partner phone number management |
| [[registering-business-phone-numbers]] | Programmatic phone registration |
| [[adding-waba-to-mps]] | Add existing WABA to MPS |
| [[bypassing-phone-number-screen]] | Skip phone addition in signup |
| [[customizing-default-flow]] | Overview of signup customizations |
| [[multi-solution-conversations]] | Same phone number across partners (beta) |
| [[website-field-optional]] | Optional website for verification |
| [[mps-embedded-creation]] | Embedded MPS creation button |
| [[migrate-waba-between-mps-embedded-signup]] | WABA migration between MPS via signup |
| [[migrate-waba-between-mps-mbs]] | WABA migration between MPS via MBS |
| [[migrate-waba-between-solution-partners]] | Switch Solution Partners |
| [[migrate-customer-off-mps-embedded-signup]] | Off-board from MPS via signup |
| [[migrate-customer-off-mps-mbs]] | Off-board from MPS via MBS |
| [[create-retrieve-update-system-user]] | Create, retrieve, update system users via API |
| [[install-apps-generate-tokens]] | Install apps, generate/refresh/revoke tokens |
| [[system-user-permissions]] | Assign permissions to ad accounts, pages |
| [[system-user-api-calls]] | API call examples with system user tokens |

## Concepts

| Page | Summary |
|------|---------|
| [[webhooks]] | Core concept — HTTP callbacks from Meta |
| [[webhook-fields]] | Subscribable event types (messages, templates, etc.) |
| [[webhook-verification]] | GET handshake to verify endpoint ownership |
| [[webhook-security]] | TLS, mTLS, signature validation |
| [[Knowledge-Bases/Channels/Meta/wiki/concepts/webhook-overrides]] | Alternate callback URLs per WABA/phone |
| [[permissions]] | Required permissions for receiving webhooks |
| [[business-verification]] | Meta business portfolio verification process |
| [[user-identification]] | BSUIDs, usernames, phone number visibility |
| [[phone-number-management]] | Phone number lifecycle — add, verify, register, configure |
| [[embedded-signup]] | Onboard businesses via solution partners |
| [[messaging-limits]] | Daily conversation limits per business |
| [[solution-partners]] | Third-party integration providers |
| [[marketing-messages]] | Promotional templates and user opt-out |
| [[two-step-verification]] | 6-digit PIN security for phone numbers |
| [[payments-api]] | In-chat payments (India/Brazil) |

## Entities

| Page | Type | Summary |
|------|------|---------|
| [[messages-webhook]] | webhook-field | Incoming messages and status updates |
| [[account-alerts-webhook]] | webhook-field | Messaging limits, business profile, OBA status |
| [[message-template-webhooks]] | webhook-field | Template status, quality, components, category |
| [[subscribed-apps-api]] | api | WABA webhook subscription and override API |
| [[phone-number-webhook-config]] | api | Phone-level webhook override configuration |
| [[get-verification-request]] | request | Meta's verification handshake format |
| [[post-webhook-request]] | request | Webhook payload delivery format |
| [[render-deployment]] | service | Test endpoint hosting platform |
| [[whatsapp-business-account]] | account | WABA — container for phone numbers and templates |
| [[official-business-account]] | verification-status | OBA blue checkmark status |
| [[display-name]] | phone-number-attribute | Verified business name for phone number |
| [[business-profile]] | phone-number-attribute | Profile info (address, email, website) |
| [[bsuid]] | identifier | Business-scoped user ID for messaging |
| [[contact-book]] | feature | Meta-hosted user contact storage |
| [[meta-business-suite]] | platform | Web platform for managing business assets |
| [[business-phone-number]] | resource | Core messaging identity on the platform |
| [[Knowledge-Bases/Channels/Meta/wiki/entities/two-step-verification]] | security-feature | 6-digit PIN for sensitive operations |
| [[Knowledge-Bases/Channels/Meta/wiki/entities/conversational-components]] | feature | Ice breakers and commands UI |
| [[local-storage]] | feature | Data-at-rest geographic localization |
| [[qr-codes]] | feature | QR codes and short links for starting conversations |

---

## Statistics

- **Sources**: 65
- **Concepts**: 15
- **Entities**: 20
- **Last updated**: 2026-04-05
