---
marp: true
theme: default
paginate: true
header: 'LLM Wiki | WhatsApp Business Platform'
footer: 'Twilio Sender Management'
---

# LLM-Powered Knowledge Base
## WhatsApp Business Platform Documentation

**Problem:** Meta's WhatsApp docs are sprawling, fragmented, and hard to query
**Solution:** An AI-maintained knowledge base with instant, cited answers

---

# The Challenge

- **65+ source documents** across webhooks, accounts, partners, migrations
- Engineers spend **hours** finding answers in scattered docs
- Knowledge leaves when engineers leave
- No single source of truth with provenance

---

# What We Built

```
raw/                    # Immutable source documents (65 files)
    └── *.md            # Clipped from Meta developer docs

wiki/                   # LLM-maintained knowledge base
    ├── sources/        # 65 summarized source pages
    ├── concepts/       # 15 topic pages
    ├── entities/       # 20 API/resource pages
    ├── index.md        # Master catalog
    └── overview.md     # High-level synthesis
```

---

# By The Numbers

| Metric | Value |
|--------|-------|
| Source documents ingested | **65** |
| Concept pages | **15** |
| Entity pages | **20** |
| Cross-references | **100+** |
| Time to answer complex query | **< 30 seconds** |

---

# Topic Coverage

- Webhooks (all 14 field types)
- Embedded Signup (complete)
- Solution Partners & Tech Providers
- Multi-Partner Solutions
- WABA Migrations
- System User Management
- Phone Number Registration
- Credit Line Sharing
- Analytics APIs
- Usernames/BSUIDs (2026)

---

# Demo: Instant Answers

**Q: "How do I check system user permissions?"**

```
GET /<WABA_ID>/assigned_users?business=<BUSINESS_ID>
```

Returns tasks: `MANAGE`, `DEVELOP`, `MANAGE_TEMPLATES`, etc.

Source: manage-system-users.md
URL: developers.facebook.com/.../manage-system-users

---

# Demo: Exact Citations

**Q: "What's the 14-day registration requirement?"**

> A phone number **must** be registered up to 14 days after 
> going through the Embedded Signup flow.

**Source:** `raw/Business customer phone numbers.md` (line 79)
**URL:** developers.facebook.com/.../manage-phone-numbers

---

# Demo: Complex Workflows

**Q: "How do credit lines work?"**

1. Get credit line ID: `GET /<BUSINESS_ID>/extendedcredits`
2. Share: `POST /<CREDIT_ID>/whatsapp_credit_sharing_and_attach`
3. Verify: Compare `receiving_credential.id` with `primary_funding_id`
4. Revoke: `DELETE /<ALLOCATION_CONFIG_ID>`

**Constraint:** Cannot change after attachment — new WABA required

---

# Self-Maintaining

**Lint checks:**
- Broken links detection
- Orphan page identification
- Missing concept alerts
- Statistics validation

**Activity log:** Every operation tracked with timestamps

---

# Architecture

```
CLAUDE.md              # Schema governing LLM behavior
    │
    ├── Ingest workflow    → Read raw, create wiki pages
    ├── Query workflow     → Search index, synthesize answer
    └── Lint workflow      → Health check, fix issues
```

**Key principle:** Raw sources immutable. Wiki is LLM-owned.

---

# Value Delivered

| Before | After |
|--------|-------|
| Hours searching docs | Seconds to answer |
| Knowledge in heads | Knowledge in wiki |
| No citations | Every fact has source |
| Manual maintenance | Self-maintaining |
| Single engineer | Team-scalable |

---

# Future Potential

- **Extend to other channels:** RCS, SMS, Voice
- **Onboarding accelerator:** New engineers query wiki day 1
- **API change tracking:** Diff new docs against wiki
- **Integration with support:** Link DS tickets to wiki pages

---

# Reusable Pattern

This architecture can be applied to **any vendor documentation**:

1. Clip docs to `raw/`
2. Define schema in `CLAUDE.md`
3. Let LLM build and maintain `wiki/`
4. Query with natural language

**Open for adoption across Twilio teams.**

---

# Summary

**Built:** LLM-powered knowledge base for WhatsApp Business Platform

**Impact:** 
- 65 docs → queryable in seconds
- Complex APIs → instant answers with citations
- Tribal knowledge → persistent, team-accessible

**Next:** Extend pattern to other channel integrations

---

# Questions?

**Demo available:** Query the wiki live

**Artifacts:**
- `wiki/overview.md` — Current state
- `wiki/log.md` — Activity history  
- `CLAUDE.md` — Architecture schema
