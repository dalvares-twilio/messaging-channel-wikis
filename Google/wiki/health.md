# Wiki Health Report
Last checked: 2026-04-05

## Orphaned Pages
- None found

## Missing Pages
- None found (all wiki links resolve)
- Note: `[[wiki/concepts/x]]` and `[[wiki/sources/x]]` in slide templates are placeholders, not broken links

## Stale Sources
Intentionally skipped (documented in log.md):
- 24 Method files — consolidated into `api-resource-agents`, `api-resource-integrations`
- 5 small REST Resource files — consolidated or <2KB
- 6 "RCS for Business Google for Developers" fragments — duplicates/incomplete

**Recommendation**: No action needed. Consolidation was intentional.

## Type Validation
All pages pass frontmatter validation:
- Sources: 30 pages with required fields (title, source_file, ingested)
- Concepts: 14 pages with required fields (title)
- Entities: 5 pages with required fields (title, entity_type)
- Queries: 1 page with required fields (title, query, answered)
- Workflows: 4 pages with required fields (title, trigger, outcome)

## Suggested Articles
No new pages needed. Current coverage is comprehensive.

Potential future additions:
- `suggested-actions` — Suggested replies/actions patterns
- `error-handling` — Common API errors and retry strategies

## Suggested Questions
Questions the wiki can't yet answer well — prompts for future exploration:

### Under-documented concepts (<3 sources)
- What are the specific rate limits for RBM API calls?
- How does Google handle message delivery failures at scale?

### Never-queried entities
- How does Dialogflow integration handle multi-turn conversations?
- What are the limits of the Developer Console vs API?

### Cross-domain gaps
- How does Google RCS webhook security compare to Meta's?
- What's the equivalent of Meta's WABA in Google's model?

### Contradictions to resolve
- None detected

## Inconsistencies
- None detected

## Statistics
| Category | Count |
|----------|-------|
| Raw sources | 67 |
| Source summaries | 30 |
| Concept pages | 14 |
| Entity pages | 5 |
| Query pages | 1 |
| Workflow pages | 4 |
| **Total wiki pages** | 58 |
| Coverage ratio | 45% (intentional — low-value files skipped) |

## Action Items
- [x] Add workflow type support
- [x] Create initial workflow pages
- [ ] Review wiki quarterly for stale information
