# Activity Log

## [2026-04-05] init | Google RCS for Business Wiki

Initialized wiki with schema and directory structure.

## [2026-04-05] ingest | Webhooks

Source: RCS for Business - Google for Developers (webhooks guide)
Created: [[wiki/sources/webhooks]], [[wiki/concepts/message-verification]], [[wiki/concepts/async-processing]]

## [2026-04-05] ingest | Create an Agent

Source: RCS for Business - Create an agent guide
Created: [[wiki/sources/create-agent]], [[wiki/concepts/agent-lifecycle]], [[wiki/concepts/use-cases]], [[wiki/concepts/billing-categories]], [[wiki/concepts/regional-endpoints]]

## [2026-04-05] ingest | Edit Agent Information

Source: RCS for Business - Edit agent information guide
Created: [[wiki/sources/edit-agent-info]], [[wiki/concepts/branding-guidelines]]

## [2026-04-05] ingest | Manage Agents

Source: RCS for Business - Manage agents guide
Created: [[wiki/sources/manage-agents]]

## [2026-04-05] ingest | Set Up a Test Device

Source: RCS for Business - Test device guide
Created: [[wiki/sources/test-devices]], [[wiki/concepts/rcs-enablement]]

## [2026-04-05] ingest | SMS Deep Links

Source: RCS for Business - Deep links guide
Created: [[wiki/sources/deep-links]]

## [2026-04-05] ingest | Dialogflow Integration

Source: RCS for Business - Dialogflow integration guide
Created: [[wiki/sources/dialogflow-integration]]

## [2026-04-05] entities | Initial Entity Pages

Created: [[wiki/entities/rbm-api]], [[wiki/entities/rbm-management-api]], [[wiki/entities/developer-console]], [[wiki/entities/google-messages]], [[wiki/entities/dialogflow]]

## [2026-04-05] assets | Image Attachments Downloaded

30 images downloaded to `raw/assets/`. Sources updated with local Obsidian-style image links (`![[image.png]]`). Includes:
- Logo guidelines and examples (do/dont patterns)
- Webhook processing diagrams (async vs sync)
- Developer Console screenshots
- Agent status and archive UI screenshots

## [2026-04-05] ingest | Batch Ingest — 18 New Sources

### Launch & Verification
- [[wiki/sources/verify-launch-overview]] — launch process overview
- [[wiki/sources/brand-verification]] — brand verification workflow
- [[wiki/sources/launch-approval]] — prerequisites and approval process
- [[wiki/sources/list-carriers]] — carrier regions API

### Messaging
- [[wiki/sources/send-messages]] — sending text, rich cards, media, TTL
- [[wiki/sources/receive-messages]] — handling user messages
- [[wiki/sources/revoke-messages]] — message revocation
- [[wiki/sources/send-events]] — READ/IS_TYPING events
- [[wiki/sources/receive-events]] — user and platform events
- [[wiki/sources/capability-checks]] — device and bulk capability checks

### Management API
- [[wiki/sources/management-api-overview]] — API overview and auth
- [[wiki/sources/manage-brands-api]] — brand CRUD
- [[wiki/sources/manage-testers-api]] — tester management
- [[wiki/sources/manage-webhooks-api]] — webhook integration
- [[wiki/sources/sync-async-operations]] — sync vs async patterns

### Analytics
- [[wiki/sources/analytics-overview]] — reputation, traffic limits
- [[wiki/sources/agent-analytics]] — metrics and custom analytics

### New Concepts Created
- [[wiki/concepts/carrier-launch]] — launch process, Google vs carrier-managed
- [[wiki/concepts/message-expiration]] — TTL, revocation, fallback
- [[wiki/concepts/subscribe-unsubscribe]] — opt-out/opt-in rules
- [[wiki/concepts/analytics-reputation]] — reputation score, traffic limits

## [2026-04-05] ingest | API Reference Documentation

Ingested 5 high-value API reference files, consolidated 24 method files:

### API Reference (new)
- [[wiki/sources/api-reference-overview]] — Business Communications API endpoints overview
- [[wiki/sources/api-resource-agents]] — Agent resource schema (16KB), all enums/fields
- [[wiki/sources/api-resource-integrations]] — Webhook + Dialogflow integration schemas (15KB)
- [[wiki/sources/api-resource-partners]] — Partner resource schema (5KB)
- [[wiki/sources/manage-agents-extended]] — Extended agent management guide with code examples

### Skipped (low value / duplicates)
- 24 individual method files (consolidated into resource pages)
- RCS for Business Google for Developers 1-4 (fragments)
- Small REST Resource files (<2KB)

## [2026-04-05] ingest | OTTM Implementation Details

Source: Twilio OTTM Google client code (internal/clients/google)
Created: [[wiki/sources/ottm-implementation]]

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

Wiki is healthy. See [[wiki/health]] for full report.

## [2026-04-05] concept | Rich Cards

Created: [[wiki/concepts/rich-cards]]
- Standalone cards and carousels
- Card heights (Short/Medium/Tall)
- Component limits and payload size
- API structure example

## [2026-04-05] query | Standalone vs Carousel

Filed: [[wiki/queries/standalone-vs-carousel]]
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

- [[wiki/workflows/create-launch-agent]] — End-to-end agent setup and carrier launch
  - Sources: agent-lifecycle, carrier-launch, create-agent, launch-approval
- [[wiki/workflows/configure-webhook]] — Async webhook with HMAC security
  - Sources: async-processing, message-verification, webhooks
- [[wiki/workflows/add-test-device]] — Test device setup for pre-launch
  - Sources: rcs-enablement, test-devices
- [[wiki/workflows/setup-deep-links]] — Deep links and QR codes for user acquisition
  - Sources: user-acquisition, deep-links

Updated 6 concept pages with "Related Workflows" links:
- agent-lifecycle, carrier-launch, async-processing, message-verification, rcs-enablement, user-acquisition

## [2026-04-05] lint | Health Check

Results:
- Orphaned pages: 0
- Missing links: 0
- Type validation: All 54 pages pass
- Workflows: 4 pages validated (title, trigger, outcome)

Wiki is healthy. See [[wiki/health]] for full report.

## [2026-04-09] ingest | API Resource Documentation — 5 New Pages

Source: Google Business Communications REST API Reference
Created:
- [[wiki/sources/api-resource-agent-launch]] — AgentLaunch resource with questionnaire and region launch details
- [[wiki/sources/api-resource-agent-verification]] — AgentVerification resource and VerificationState enum
- [[wiki/sources/api-resource-agent-verification-contact]] — Partner and brand contact details for verification
- [[wiki/sources/api-resource-verification-state]] — VerificationState enum values (UNSPECIFIED, UNVERIFIED, PENDING, VERIFIED, SUSPENDED_IN_GMB)
- [[wiki/sources/api-resource-phone]] — Phone number resource (E.164 format)

## [2026-04-09] ingest | Partner Account Setup

Source: https://developers.google.com/business-communications/rcs-business-messaging/guides/get-started/partner-account
Created: [[wiki/sources/partner-account-setup]]

Key content:
- Partner account registration steps
- Partner-level webhook configuration (vs agent-level)
- Service account setup and key generation
- User roles: Owner, Manager, Reader
- Webhook validation flow and HMAC verification

## [2026-04-09] concept | AgentLaunchEvent

Created: [[wiki/concepts/agent-launch-event]]

Detailed platform event documentation including:
- Full Pub/Sub message wrapper structure
- Base64-decoded data field with all fields documented
- Launch state enum values and transitions
- Detection logic for webhook handler
- KYC status mapping for OTTM integration

Updated: [[wiki/sources/receive-events]] — added link to new concept
