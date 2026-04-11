# LLM Wiki Schema — Meta WhatsApp Business Platform

This schema governs how the LLM maintains this knowledge base about Meta's WhatsApp Business Platform documentation.

## Directory Structure

```
Meta/
├── CLAUDE.md          # This schema file
├── raw/               # Immutable source documents (never modify)
│   ├── assets/        # Downloaded images from sources
│   └── *.md           # Clipped articles and documents
└── wiki/              # LLM-generated knowledge base
    ├── index.md       # Master catalog of all wiki pages
    ├── log.md         # Chronological activity log
    ├── overview.md    # High-level synthesis of the knowledge base
    ├── health.md      # Lint report (LLM-maintained)
    ├── sources/       # Summary pages for each ingested source
    ├── concepts/      # Topic and concept pages
    ├── entities/      # Entity pages (APIs, endpoints, fields, etc.)
    └── patterns/      # Reasoning patterns — "how you think" rules
```

## Core Principles

1. **Raw sources are immutable** — Never modify files in `raw/`. They are the source of truth.
2. **Wiki is LLM-owned** — The LLM writes and maintains all wiki content. User reads, LLM writes.
3. **Knowledge compounds** — Every ingest and query should strengthen the wiki.
4. **Cross-reference extensively** — Use `[[wiki links]]` to connect related concepts.
5. **Cite sources** — Reference raw sources with `[[raw/filename.md]]` links.

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
<2-3 paragraph summary of key content>

## Key Points
- <bullet points of important information>

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
sources: [<count of sources mentioning this>]
---

## Overview
<explanation of the concept>

## Details
<deeper information>

## Related
- [[wiki/concepts/<related-concept>]]
- [[wiki/entities/<related-entity>]]

## Sources
- [[wiki/sources/<source>]]
```

### Entity Page (`wiki/entities/`)
```markdown
---
type: entity
title: "<Entity Name>"
entity_type: "<api|endpoint|field|parameter|service>"
---

## Description
<what this entity is>

## Usage
<how it's used>

## Related
- [[wiki/concepts/<concept>]]
- [[wiki/entities/<entity>]]

## Sources
- [[wiki/sources/<source>]]
```

### Pattern Page (`wiki/patterns/`)
```markdown
---
type: pattern
title: "<Pattern Name>"
applies_to: "<domain or situation>"
confidence: "<high|medium|low>"
learned_from: "<source or experience>"
---

## Pattern
<the rule or heuristic in one sentence>

## When to Apply
<situations where this pattern helps>

## When NOT to Apply
<exceptions, edge cases>

## Examples
- <example 1>
- <example 2>

## Related
- [[wiki/concepts/<concept>]]
- [[wiki/patterns/<related-pattern>]]

## Sources
- [[wiki/sources/<source>]]
```

## Workflows

### Ingest Source
1. Read the source document completely
2. Create a summary page in `wiki/sources/`
3. Identify concepts — create or update pages in `wiki/concepts/`
4. Identify entities — create or update pages in `wiki/entities/`
5. Update `wiki/index.md` with new pages
6. Update `wiki/overview.md` if the synthesis changes
7. Append entry to `wiki/log.md`

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
1. Check for orphan pages (no inbound links)
2. Check for mentioned but missing pages
3. Check for **stale citations** (pages citing sources with `superseded_by` field)
4. Check for contradictions between pages
5. Identify gaps that new sources could fill
6. Generate **suggested questions** (concepts with <3 sources, entities never queried)
7. Write results to `wiki/health.md`
8. Append to `wiki/log.md`: `## [YYYY-MM-DD] lint | Health Check`

## Image References

When referencing images from raw sources, use Obsidian-style links:
```
![[raw/assets/filename.png]]
```

## Conventions

- **Dates**: Use ISO format (YYYY-MM-DD)
- **Links**: Use relative wiki links `[[wiki/path/page]]`
- **Tags**: Use lowercase, hyphenated tags
- **Filenames**: Use kebab-case for all wiki files
