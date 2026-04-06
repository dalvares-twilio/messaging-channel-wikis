# Messaging Channel Wikis

Knowledge base for messaging channel integrations (Google RCS, Meta WhatsApp/Messenger).

## Structure

```
├── Google/          # Google RCS Business Messaging
│   ├── raw/         # Raw documentation scraped from source
│   └── wiki/        # Processed wiki content
│       ├── concepts/    # Core concepts and explanations
│       ├── entities/    # API entities and data models
│       ├── sources/     # Source references
│       └── outputs/     # Generated artifacts (charts, slides)
│
├── Meta/            # Meta (WhatsApp, Messenger)
│   ├── raw/         # Raw documentation scraped from source
│   └── wiki/        # Processed wiki content
│       ├── concepts/    # Core concepts and explanations
│       ├── entities/    # API entities and data models
│       └── sources/     # Source references
```

## Wiki Files

Each channel wiki contains:
- `index.md` - Main entry point with topic links
- `overview.md` - High-level summary of the channel
- `log.md` - Processing and update history
- `health.md` - Wiki health metrics (Google only)

## Usage

This repo is designed to work with Obsidian for local browsing and the `llm-wiki` skill for AI-assisted querying.

## Channels

| Channel | Status | Docs |
|---------|--------|------|
| Google RCS | Active | [wiki/index.md](Google/wiki/index.md) |
| Meta (WhatsApp/Messenger) | Active | [wiki/index.md](Meta/wiki/index.md) |
