# LLM Wiki Schema — Google RCS for Business

This schema governs how the LLM maintains this knowledge base.

## Directory Structure

```
Google/
├── CLAUDE.md          # This schema file
├── wiki-types.yaml    # Custom type definitions
├── raw/               # Immutable source documents (never modify)
│   └── assets/        # Downloaded images from sources
└── wiki/              # LLM-generated knowledge base
    ├── index.md       # Master catalog of all wiki pages
    ├── log.md         # Chronological activity log
    ├── overview.md    # High-level synthesis of the knowledge base
    ├── health.md      # Lint report (LLM-maintained)
    ├── sources/       # Summary pages for each ingested source
    ├── concepts/      # Topic and concept pages
    ├── entities/      # Entity pages (APIs, products, tools)
    ├── patterns/      # Reasoning patterns — "how you think" rules
    ├── workflows/     # Step-by-step process documentation
    ├── queries/       # Filed Q&A outputs
    └── outputs/       # Generated artifacts
        ├── slides/    # Marp presentations
        └── charts/    # Visualizations
```

## Core Principles

1. **Raw sources are immutable** — Never modify files in `raw/`. They are the source of truth.
2. **Wiki is LLM-owned** — The LLM writes and maintains all wiki content.
3. **Knowledge compounds** — Every ingest and query should strengthen the wiki.
4. **Cross-reference extensively** — Use `[[wiki links]]` to connect related concepts.
5. **Cite sources** — Reference raw sources with `[[raw/filename]]` links.

## Extraction Hints

When ingesting sources, use these hints to identify content for each type:

- **Workflow**: Extract when document describes a sequence of steps, setup process, or integration procedure

## Domain Context

This wiki covers **Google RCS for Business (RBM)** — Google's implementation of Rich Communication Services for business messaging. Key areas:

- Agent creation, configuration, and lifecycle management
- Webhook integration for receiving messages/events
- Testing with designated test devices
- Deep links for initiating conversations
- Dialogflow integration for NLU
- Regional deployment and billing models

## Page Formats

### Source Summary (`wiki/sources/`)
```markdown
---
type: source
title: "<Document Title>"
source_file: "[[raw/<filename>.md]]"
source_url: "<original URL>"
ingested: YYYY-MM-DD
version: 1                              # Increment for each new version
supersedes: "[[wiki/sources/<prev>]]"   # Only if v2+, link to previous version
superseded_by: "[[wiki/sources/<next>]]" # Added when newer version exists
tags: [<relevant-tags>]
---

## Summary
<2-3 paragraph summary>

## Key Points
- <bullets>

## Related Concepts
- [[wiki/concepts/<concept>]]

## Related Entities
- [[wiki/entities/<entity>]]
```

### Concept Page (`wiki/concepts/`)
```markdown
---
type: concept
title: "<Concept Name>"
aliases: [<alternate names>]
sources: <count>
---

## Overview
<explanation>

## Details
<deeper info>

## Related
- [[wiki/concepts/<related>]]
- [[wiki/entities/<related>]]

## Sources
- [[wiki/sources/<source>]]
```

### Entity Page (`wiki/entities/`)
```markdown
---
type: entity
title: "<Entity Name>"
entity_type: "<api|product|tool|service>"
---

## Description
<what it is>

## Usage
<how it's used>

## Related
- [[wiki/concepts/<concept>]]

## Sources
- [[wiki/sources/<source>]]
```

### Query Page (`wiki/queries/`)
```markdown
---
type: query
title: "<Question Summary>"
query: "<Original question asked>"
answered: YYYY-MM-DD
tags: [<relevant-tags>]
---

## Answer
<synthesized answer>

## Sources Consulted
- [[wiki/sources/<source>]]
- [[wiki/concepts/<concept>]]

## New Insights
<anything discovered not already in wiki — candidates for new pages>
```

### Workflow Page (`wiki/workflows/`)
```markdown
---
type: workflow
title: "<Workflow Name>"
trigger: "<What initiates this workflow>"
outcome: "<What is achieved>"
prerequisites: [<required setup>]
estimated_time: "<time estimate>"
tags: [<relevant-tags>]
---

## Overview
<brief description of what this workflow accomplishes>

## Prerequisites
- <required setup, permissions, or prior steps>

## Steps
1. **Step Name** — Description
   - Sub-step if needed
2. **Step Name** — Description
3. **Step Name** — Description

## Verification
<how to confirm the workflow succeeded>

## Troubleshooting
- **Issue**: <common problem>
  **Solution**: <how to fix>

## Related
- [[wiki/concepts/<concept>]]
- [[wiki/entities/<entity>]]

## Sources
- [[wiki/sources/<source>]]
```

### Health Report (`wiki/health.md`)
```markdown
# Wiki Health Report
Last checked: YYYY-MM-DD

## Orphaned Pages
- (pages with no inbound links)

## Missing Pages
- (pages referenced but don't exist)

## Stale Sources
- (raw files without wiki summaries)

## Suggested Articles
- (concepts mentioned 3+ times without dedicated page)

## Inconsistencies
- (conflicting claims across pages)

## Action Items
- [ ] Item 1
```

### Marp Slides (`wiki/outputs/slides/`)
```markdown
---
marp: true
theme: default
title: "<Title>"
generated: YYYY-MM-DD
sources: [<wiki pages used>]
---

# Slide Title
- Content from wiki

---

# Next Slide
```

### Charts (`wiki/outputs/charts/`)

Generate via matplotlib/Python, save PNG to `wiki/outputs/charts/<name>.png`.
Reference in wiki pages: `![[wiki/outputs/charts/<name>.png]]`

## Workflows

### Ingest Source
1. Read `wiki-types.yaml` for type definitions and extraction hints
2. Read the source document completely
3. Create a summary page in `wiki/sources/`
4. Identify concepts — create or update pages in `wiki/concepts/`
5. Identify entities — create or update pages in `wiki/entities/`
6. Identify workflows (step-by-step processes) — create pages in `wiki/workflows/`
7. Update `wiki/index.md` with new pages
8. Update `wiki/overview.md` if the synthesis changes
9. Append entry to `wiki/log.md`

### Answer Query
1. Read `wiki/index.md` to find relevant pages
2. Read relevant wiki pages
3. **Trust the wiki** — it's already compiled, cross-referenced knowledge
4. Synthesize answer with citations (`[[wiki/sources/...]]`)
5. **Check for superseded sources:** If any cited source has `superseded_by` field, include warning
6. **ALWAYS file to `wiki/queries/<slug>.md`** — every query strengthens the wiki
7. Update `wiki/index.md` with query entry
8. Append to `wiki/log.md`: `## [YYYY-MM-DD] query | <Question Summary>`

## Query Response Philosophy

**Trust the compiled wiki.** Per Karpathy's philosophy, knowledge is compiled once into the wiki — don't re-derive on every query. The wiki IS the verified knowledge.

### When to verify with subagent (optional, not default)

Dispatch a verification subagent ONLY when:
- Answer requires synthesis across **3+ sources** with potential conflicts
- User explicitly requests **proof/citation** for a specific claim
- Answer feels **uncertain or contradictory**
- Dealing with **time-sensitive information** that may be stale

### Always required (no subagent needed)

1. **Include source URL** — from `source_url` frontmatter
2. **Cite wiki pages** — `[[wiki/sources/...]]` links
3. **Separate quotes from synthesis** — blockquotes for direct quotes
4. **Include References section** — wiki pages, original URL, Slack/contact

### Lint/Health Check
1. Check for:
   - Orphan pages (no inbound links)
   - Missing pages (referenced but don't exist)
   - **Stale citations** (pages citing sources with `superseded_by` field)
   - Contradictions between pages
   - Stale sources (raw files without wiki summaries)
   - Suggested articles (concepts mentioned 3+ times without page)
2. Generate **suggested questions** (concepts with <3 sources, entities never queried)
3. Write results to `wiki/health.md`
4. Append to `wiki/log.md`: `## [YYYY-MM-DD] lint | Health Check`

### Generate Output
1. Identify wiki content for output (slides, chart, report)
2. Generate artifact in appropriate format
3. Save to `wiki/outputs/<type>/<name>.<ext>`
4. Optionally link from relevant wiki pages
5. Append to `wiki/log.md`: `## [YYYY-MM-DD] output | <Output Name>`

## Conventions

- **Dates**: ISO format (YYYY-MM-DD)
- **Links**: Relative wiki links `[[wiki/path/page]]`
- **Tags**: lowercase, hyphenated
- **Filenames**: kebab-case for all wiki files
