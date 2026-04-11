# Wiki Health Report
Last checked: 2026-04-10

## Orphaned Pages
- None found

## Missing Pages
- None found (all wiki links resolve)

## Stale Citations
- None — no sources have been superseded

## Stale Sources
Intentionally skipped (documented in log.md):
- 24 Method files — consolidated into `api-resource-agents`, `api-resource-integrations`
- 5 small REST Resource files — consolidated or <2KB
- 6 "RCS for Business Google for Developers" fragments — duplicates/incomplete

**Recommendation**: No action needed. Consolidation was intentional.

## Type Validation
All pages pass frontmatter validation:
- Sources: 36 pages with required fields (title, source_file, ingested)
- Concepts: 15 pages with required fields (title)
- Entities: 5 pages with required fields (title, entity_type)
- Queries: 2 pages with required fields (title, query, answered)
- Workflows: 4 pages with required fields (title, trigger, outcome)
- Patterns: 0 pages (directory created, awaiting content)

## Suggested Articles
Potential future additions:
- `suggested-actions` — Suggested replies/actions patterns
- `error-handling` — Common API errors and retry strategies
- `message-formatting` — Rich card formatting rules and limits

## Suggested Questions
Questions the wiki can't yet answer well — prompts for future exploration:

### Under-documented concepts (<3 sources)
- What are the specific rate limits for RBM API calls?
- How does Google handle message delivery failures at scale?
- What are the exact size limits for rich card media?

### Never-queried entities
- How does Dialogflow integration handle multi-turn conversations?
- What are the limits of the Developer Console vs API?
- How does the `google-messages` app handle RCS fallback to SMS?

### Cross-domain gaps (vs Meta wiki)
- How does Google RCS webhook security (HMAC-SHA512) compare to Meta's signature validation?
- What's the equivalent of Meta's WABA in Google's agent model?
- How do message delivery guarantees differ between platforms?

### Contradictions/gaps to resolve
- What specific errors cause agent REJECTED state? (identified in query 2026-04-10)
- Is there an appeal/retry process for rejected verification?
- How does GMB suspension recovery work step-by-step?
- How does carrier-managed rejection differ from Google-managed?

### Pattern candidates
- When to use Google-managed vs carrier-managed launch?
- How to structure webhook handlers for reliability?
- Best practices for agent branding and verification docs

## Inconsistencies
- None detected

## Statistics
| Category | Count |
|----------|-------|
| Raw sources | 73 |
| Source summaries | 36 |
| Concept pages | 15 |
| Entity pages | 5 |
| Query pages | 2 |
| Workflow pages | 4 |
| Pattern pages | 0 |
| **Total wiki pages** | 62 |
| Coverage ratio | 49% (intentional — low-value files skipped) |

## Action Items
- [x] Add workflow type support
- [x] Create initial workflow pages
- [x] Add patterns/ directory
- [x] Add Suggested Questions section
- [ ] Create first pattern page (launch strategy)
- [ ] Review wiki quarterly for stale information
- [ ] Investigate rejection/appeal process gaps
