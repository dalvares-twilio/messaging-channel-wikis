# Activity Log

## [2026-04-05] init | Google RCS for Business Wiki

Initialized wiki with schema and directory structure.

## [2026-04-05] ingest | Webhooks

Source: RCS for Business - Google for Developers (webhooks guide)
Created: [webhooks](sources/webhooks.md), [message-verification](concepts/message-verification.md), [async-processing](concepts/async-processing.md)

## [2026-04-05] ingest | Create an Agent

Source: RCS for Business - Create an agent guide
Created: [create-agent](sources/create-agent.md), [agent-lifecycle](concepts/agent-lifecycle.md), [use-cases](concepts/use-cases.md), [billing-categories](concepts/billing-categories.md), [regional-endpoints](concepts/regional-endpoints.md)

## [2026-04-05] ingest | Edit Agent Information

Source: RCS for Business - Edit agent information guide
Created: [edit-agent-info](sources/edit-agent-info.md), [branding-guidelines](concepts/branding-guidelines.md)

## [2026-04-05] ingest | Manage Agents

Source: RCS for Business - Manage agents guide
Created: [manage-agents](sources/manage-agents.md)

## [2026-04-05] ingest | Set Up a Test Device

Source: RCS for Business - Test device guide
Created: [test-devices](sources/test-devices.md), [rcs-enablement](concepts/rcs-enablement.md)

## [2026-04-05] ingest | SMS Deep Links

Source: RCS for Business - Deep links guide
Created: [deep-links](sources/deep-links.md)

## [2026-04-05] ingest | Dialogflow Integration

Source: RCS for Business - Dialogflow integration guide
Created: [dialogflow-integration](sources/dialogflow-integration.md)

## [2026-04-05] entities | Initial Entity Pages

Created: [rbm-api](entities/rbm-api.md), [rbm-management-api](entities/rbm-management-api.md), [developer-console](entities/developer-console.md), [google-messages](entities/google-messages.md), [dialogflow](entities/dialogflow.md)

## [2026-04-05] assets | Image Attachments Downloaded

30 images downloaded to `raw/assets/`. Sources updated with local Obsidian-style image links (`![[image.png]]`). Includes:
- Logo guidelines and examples (do/dont patterns)
- Webhook processing diagrams (async vs sync)
- Developer Console screenshots
- Agent status and archive UI screenshots

## [2026-04-05] ingest | Batch Ingest — 18 New Sources

### Launch & Verification
- [verify-launch-overview](sources/verify-launch-overview.md) — launch process overview
- [brand-verification](sources/brand-verification.md) — brand verification workflow
- [launch-approval](sources/launch-approval.md) — prerequisites and approval process
- [list-carriers](sources/list-carriers.md) — carrier regions API

### Messaging
- [send-messages](sources/send-messages.md) — sending text, rich cards, media, TTL
- [receive-messages](sources/receive-messages.md) — handling user messages
- [revoke-messages](sources/revoke-messages.md) — message revocation
- [send-events](sources/send-events.md) — READ/IS_TYPING events
- [receive-events](sources/receive-events.md) — user and platform events
- [capability-checks](sources/capability-checks.md) — device and bulk capability checks

### Management API
- [management-api-overview](sources/management-api-overview.md) — API overview and auth
- [manage-brands-api](sources/manage-brands-api.md) — brand CRUD
- [manage-testers-api](sources/manage-testers-api.md) — tester management
- [manage-webhooks-api](sources/manage-webhooks-api.md) — webhook integration
- [sync-async-operations](sources/sync-async-operations.md) — sync vs async patterns

### Analytics
- [analytics-overview](sources/analytics-overview.md) — reputation, traffic limits
- [agent-analytics](sources/agent-analytics.md) — metrics and custom analytics

### New Concepts Created
- [carrier-launch](concepts/carrier-launch.md) — launch process, Google vs carrier-managed
- [message-expiration](concepts/message-expiration.md) — TTL, revocation, fallback
- [subscribe-unsubscribe](concepts/subscribe-unsubscribe.md) — opt-out/opt-in rules
- [analytics-reputation](concepts/analytics-reputation.md) — reputation score, traffic limits

## [2026-04-05] ingest | API Reference Documentation

Ingested 5 high-value API reference files, consolidated 24 method files:

### API Reference (new)
- [api-reference-overview](sources/api-reference-overview.md) — Business Communications API endpoints overview
- [api-resource-agents](sources/api-resource-agents.md) — Agent resource schema (16KB), all enums/fields
- [api-resource-integrations](sources/api-resource-integrations.md) — Webhook + Dialogflow integration schemas (15KB)
- [api-resource-partners](sources/api-resource-partners.md) — Partner resource schema (5KB)
- [manage-agents-extended](sources/manage-agents-extended.md) — Extended agent management guide with code examples

### Skipped (low value / duplicates)
- 24 individual method files (consolidated into resource pages)
- RCS for Business Google for Developers 1-4 (fragments)
- Small REST Resource files (<2KB)

## [2026-04-05] ingest | OTTM Implementation Details

Source: Twilio OTTM Google client code (internal/clients/google)
Created: [ottm-implementation](sources/ottm-implementation.md)

Key insights captured:
- Default values: NON_CONVERSATIONAL, MULTI_USE, EUROPE
- Image limits: logo 50KB, banner 200KB (jpeg/png only)
- Immutability: logoUri/heroUri locked after verification; billingConfig/agentUseCase/hostingRegion immutable
- Retry semantics: 401/5xx retry, 400/403/404/429 no-retry
- Questionnaire fields for launch requests
- Verification/Launch state enums
- API URL patterns and helper functions

## [2026-04-05] lint | Health Check

First wiki health check. Results:
- Orphaned pages: 0
- Missing links: 0
- Stale sources: 37 (intentionally skipped — consolidated or low-value)
- Inconsistencies: 0

Wiki is healthy. See [health](health.md) for full report.

## [2026-04-05] concept | Rich Cards

Created: [rich-cards](concepts/rich-cards.md)
- Standalone cards and carousels
- Card heights (Short/Medium/Tall)
- Component limits and payload size
- API structure example

## [2026-04-05] query | Standalone vs Carousel

Filed: [standalone-vs-carousel](queries/standalone-vs-carousel.md)
- Decision criteria for choosing card type
- Use case examples for each
- UX performance considerations

## [2026-04-05] output | LLM Wiki Workflow Presentation

Generated: `wiki/outputs/slides/llm-wiki-workflow/llm-wiki-workflow.pptx`
8 slides covering:
1. Title - LLM Wiki introduction
2. Problem vs Solution - RAG vs LLM Wiki
3. Architecture - raw/ → wiki/ → user
4. Three-Phase Workflow - Build, Use, Maintain
5. Wiki Structure - directory layout
6. Compounding Effect - knowledge accumulation
7. Division of Labor - human vs LLM roles
8. Key Takeaways - summary

## [2026-04-05] output | llm-wiki Skill Presentation

Generated: `wiki/outputs/slides/llm-wiki-skill/llm-wiki-skill.pptx`
8 slides covering:
1. Title - llm-wiki skill intro
2. What It Does - triggers and purpose
3. Skill Files - directory structure
4. Wiki Structure Created - init_wiki.py output
5. Operations - ingest, query, lint, output
6. Page Formats - source, concept, query, health
7. Usage Examples - common commands
8. Get Started - quick start guide

## [2026-04-05] schema | Added Workflow Type

Added `workflow` type to wiki for step-by-step runbooks:
- Created `wiki-types.yaml` with custom type definitions
- Updated `CLAUDE.md` with workflow page format and extraction hints
- Created `wiki/workflows/` directory

## [2026-04-05] workflows | Created 4 Workflow Pages

Extracted actionable runbooks from existing concepts:

- [create-launch-agent](workflows/create-launch-agent.md) — End-to-end agent setup and carrier launch
  - Sources: agent-lifecycle, carrier-launch, create-agent, launch-approval
- [configure-webhook](workflows/configure-webhook.md) — Async webhook with HMAC security
  - Sources: async-processing, message-verification, webhooks
- [add-test-device](workflows/add-test-device.md) — Test device setup for pre-launch
  - Sources: rcs-enablement, test-devices
- [setup-deep-links](workflows/setup-deep-links.md) — Deep links and QR codes for user acquisition
  - Sources: user-acquisition, deep-links

Updated 6 concept pages with "Related Workflows" links:
- agent-lifecycle, carrier-launch, async-processing, message-verification, rcs-enablement, user-acquisition

## [2026-04-05] lint | Health Check

Results:
- Orphaned pages: 0
- Missing links: 0
- Type validation: All 54 pages pass
- Workflows: 4 pages validated (title, trigger, outcome)

Wiki is healthy. See [health](health.md) for full report.

## [2026-04-09] ingest | API Resource Documentation — 5 New Pages

Source: Google Business Communications REST API Reference
Created:
- [api-resource-agent-launch](sources/api-resource-agent-launch.md) — AgentLaunch resource with questionnaire and region launch details
- [api-resource-agent-verification](sources/api-resource-agent-verification.md) — AgentVerification resource and VerificationState enum
- [api-resource-agent-verification-contact](sources/api-resource-agent-verification-contact.md) — Partner and brand contact details for verification
- [api-resource-verification-state](sources/api-resource-verification-state.md) — VerificationState enum values (UNSPECIFIED, UNVERIFIED, PENDING, VERIFIED, SUSPENDED_IN_GMB)
- [api-resource-phone](sources/api-resource-phone.md) — Phone number resource (E.164 format)

## [2026-04-09] ingest | Partner Account Setup

Source: https://developers.google.com/business-communications/rcs-business-messaging/guides/get-started/partner-account
Created: [partner-account-setup](sources/partner-account-setup.md)

Key content:
- Partner account registration steps
- Partner-level webhook configuration (vs agent-level)
- Service account setup and key generation
- User roles: Owner, Manager, Reader
- Webhook validation flow and HMAC verification

## [2026-04-09] concept | AgentLaunchEvent

Created: [agent-launch-event](concepts/agent-launch-event.md)

Detailed platform event documentation including:
- Full Pub/Sub message wrapper structure
- Base64-decoded data field with all fields documented
- Launch state enum values and transitions
- Detection logic for webhook handler
- KYC status mapping for OTTM integration

Updated: [receive-events](sources/receive-events.md) — added link to new concept

## [2026-04-10] query | Verification Failure Handling

Query: "What happens when a Google RCS agent fails verification? What are the states and how can it be retried?"

Created: [verification-failure-handling](queries/verification-failure-handling.md)

Synthesized from 6 sources:
- [api-resource-verification-state](sources/api-resource-verification-state.md)
- [api-resource-agent-verification](sources/api-resource-agent-verification.md)
- [agent-lifecycle](concepts/agent-lifecycle.md)
- [carrier-launch](concepts/carrier-launch.md)
- [brand-verification](sources/brand-verification.md)
- [launch-approval](sources/launch-approval.md)

New insights identified (gaps for health.md):
- Rejection reasons not documented
- Appeal/retry process unclear
- GMB suspension recovery steps missing
- Carrier-managed rejection differences

## [2026-04-10] lint | Health Check

Updated health.md with:
- Current statistics (62 wiki pages, 49% coverage)
- New Suggested Questions section with 4 categories:
  - Under-documented concepts (3 questions)
  - Never-queried entities (3 questions)
  - Cross-domain gaps vs Meta (3 questions)
  - Contradictions/gaps to resolve (4 questions from recent query)
- Pattern candidates identified (3)
- Action items updated

## [2026-04-10] query | Batch Query Generation — 10 New Queries

Generated 10 practical Q&A queries across 5 topic areas:

### Rich Cards & Carousels
- [rich-card-height-selection](queries/rich-card-height-selection.md) — Media height decision criteria (Short/Medium/Tall)
- [carousel-card-limit](queries/carousel-card-limit.md) — Optimal card count by use case

### Testing with Test Devices
- [test-device-troubleshooting](queries/test-device-troubleshooting.md) — 403/429 errors, DECLINED status, diagnosis steps
- [test-device-limits](queries/test-device-limits.md) — 20/day, 200 total limits, tester lifecycle

### Analytics & Reputation
- [reputation-score-impact](queries/reputation-score-impact.md) — Traffic limits by reputation level, recovery strategies
- [custom-analytics-tracking](queries/custom-analytics-tracking.md) — Beyond Console metrics, webhook event tracking

### TTL & Message Expiration
- [ttl-otp-strategy](queries/ttl-otp-strategy.md) — 5-10 min TTL, fallback flow, traffic type
- [ttl-promotional-messages](queries/ttl-promotional-messages.md) — expireTime vs ttl, fallback decisions

### Deep Links & QR Codes
- [deep-link-fallback](queries/deep-link-fallback.md) — Format 1 vs Format 2, fallback behavior
- [qr-code-best-practices](queries/qr-code-best-practices.md) — Short URLs, pre-fill strategy, testing checklist

New insights identified across queries:
- Pattern candidates: "OTP delivery with multi-channel fallback", "TTL selection by message urgency", "Progressive disclosure for large option sets"
- Documentation gaps: reputation recovery timeline, image resolution by height, deep link analytics

## [2026-04-10] query | Second Batch Query Generation — 10 New Queries

Generated 10 additional practical Q&A queries focused on agent lifecycle, webhook security, use cases, billing, and regional endpoints:

### Agent Lifecycle & Configuration
- [agent-status-progression](queries/agent-status-progression.md) — Lifecycle stages (Incomplete→Launched) and field immutability points
- [agent-deletion-constraints](queries/agent-deletion-constraints.md) — Why agents can't be deleted, archiving rules by state
- [use-case-selection](queries/use-case-selection.md) — OTP vs Transactional vs Promotional vs Multi-use decision guide
- [billing-category-differences](queries/billing-category-differences.md) — Conversational vs Non-conversational billing model selection
- [regional-endpoint-selection](queries/regional-endpoint-selection.md) — NA/EU/APAC selection criteria, data residency, latency considerations

### Launch Process
- [google-vs-carrier-managed-launch](queries/google-vs-carrier-managed-launch.md) — Key differences in verification, timeline, and requirements

### Webhook Security
- [hmac-sha512-verification](queries/hmac-sha512-verification.md) — Step-by-step HMAC verification with code example
- [async-webhook-best-practices](queries/async-webhook-best-practices.md) — Why sync processing fails, retry storms, shared queue impact

### Message Delivery
- [message-ttl-and-fallback](queries/message-ttl-and-fallback.md) — TTL by use case, notification interpretation, SMS fallback strategy

### Compliance
- [stop-keyword-handling](queries/stop-keyword-handling.md) — Country-specific keywords, post-unsubscribe rules, compliance monitoring

Topics covered:
1. Agent lifecycle and immutability (heavily requested by engineers)
2. Webhook security (HMAC-SHA512 verification)
3. Message verification best practices
4. Use cases and billing categories
5. Regional endpoints and data residency

Index updated: Queries section reorganized into 8 categories, count updated to 22.

## [2026-04-10] query | Third Batch Query Generation — 10 New Queries

Generated 10 additional practical Q&A queries focused on Dialogflow integration, subscribe/unsubscribe handling, capability checks, brand verification, and sync vs async operations:

### Dialogflow Integration
- [dialogflow-integration-patterns](queries/dialogflow-integration-patterns.md) — NLU integration architecture, open-source module, async processing considerations

### Subscribe/Unsubscribe Handling
- [stop-start-handling](queries/stop-start-handling.md) — Country-specific STOP/START keywords, post-unsubscribe rules, essential vs non-essential messages

### Capability Checks
- [capability-check-before-messaging](queries/capability-check-before-messaging.md) — Single device check features, error codes, offline queuing, fallback pattern
- [bulk-capability-check-usage](queries/bulk-capability-check-usage.md) — Bulk vs single check comparison, use cases, caching implications

### Brand Verification
- [brand-verification-requirements](queries/brand-verification-requirements.md) — Brand contact requirements, supporting documents, Google-managed vs carrier-managed verification

### Sync vs Async Operations
- [sync-vs-async-operations](queries/sync-vs-async-operations.md) — HTTP sync vs webhook async, message delivery confirmation, webhook best practices
- [webhook-failure-impact](queries/webhook-failure-impact.md) — Shared queue architecture, retry behavior, recovery strategy
- [ttl-and-fallback-strategy](queries/ttl-and-fallback-strategy.md) — TTL configuration by use case, notification handling, race conditions

### Launch Process
- [google-managed-vs-carrier-managed](queries/google-managed-vs-carrier-managed.md) — Launch type identification via Console and API, process differences

### Security
- [webhook-security-hmac](queries/webhook-security-hmac.md) — HMAC-SHA512 implementation, initial verification, ongoing message verification

### Messaging
- [message-traffic-types](queries/message-traffic-types.md) — Traffic type requirements for multi-use agents, compliance implications

Topics covered:
1. Dialogflow NLU integration patterns
2. STOP/START keyword handling by country
3. Capability check strategies (single vs bulk)
4. Brand verification prerequisites
5. Sync vs async operation patterns

New insights identified across queries:
- Documentation gaps: Dialogflow CX vs ES differences, cache freshness for bulk checks, replay attack protection
- Pattern candidates: "capability-check-then-send", "TTL race condition handling", "async webhook with internal queue"

Index updated: Queries section expanded to 11 categories, count updated to 32.

## [2026-04-10] cleanup | Duplicate Query Consolidation

Reviewed queries and removed 4 duplicates created by parallel batch generation:

| Removed | Kept (More Comprehensive) |
|---------|---------------------------|
| `google-vs-carrier-managed-launch.md` | `google-managed-vs-carrier-managed.md` |
| `hmac-sha512-verification.md` | `webhook-security-hmac.md` |
| `stop-start-handling.md` | `stop-keyword-handling.md` |
| `message-ttl-and-fallback.md` | `ttl-and-fallback-strategy.md` |

Index updated: Query count reduced from 33 to 29.

## [2026-04-10] fix | Convert Wikilinks to Markdown Links

Converted all Obsidian wikilinks to standard markdown links for GitHub compatibility:
- 498 `[[wiki/type/name]]` → `[name](type/name.md)` or `[name](../type/name.md)`
- 36 `[[raw/filename]]` → `[filename](../../raw/filename)`

Links now render correctly on GitHub.
