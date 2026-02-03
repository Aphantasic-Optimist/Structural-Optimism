---
title: Translation Guide
description: Help make Structural Optimism accessible in multiple languages
tags:
  - translations
  - internationalization
  - accessibility
---

# Translation Guide

Help make Structural Optimism accessible to non-English speakers by contributing translations.

## Why Translations Matter

### Universal Access

- Ideas should be accessible to everyone
- Language shouldn't be a barrier to understanding
- Cross-cultural perspectives enrich the framework
- Global collaboration strengthens evidence base

### Cultural Context

- Different languages reveal different nuances
- Cultural perspectives add depth
- Local examples make concepts clearer
- Diverse voices improve rigor

## Languages Needed

### High Priority

Languages with large speaker populations:

- **Spanish** (español)
- **Mandarin Chinese** (中文)
- **Hindi** (हिन्दी)
- **Arabic** (العربية)
- **Portuguese** (português)
- **French** (français)
- **German** (Deutsch)
- **Japanese** (日本語)
- **Russian** (русский)

### All Languages Welcome

We welcome translations into any language, including:

- Regional languages
- Indigenous languages
- Sign languages (video translations)
- Constructed languages (for accessibility)

## What to Translate

### Priority Order

1. **Simple Proof** - The core argument (highest priority)
2. **Home Page** - Overview and navigation
3. **Evidence Summary** - Research and mechanisms
4. **Contribute Pages** - How to participate
5. **Academic Proof** - Complete philosophical proof
6. **About Pages** - Project information

### Translation Scope

**Required:**
- Main content text
- Navigation labels
- Page titles and descriptions
- Key terminology

**Optional:**
- Code examples (if language-specific)
- Image captions
- Alt text
- Metadata

## How to Contribute Translations

### Option 1: GitHub Pull Request (Recommended)

1. **Fork the repository** on GitHub
2. **Create translation file** with language suffix:
   - For home page: `docs/index.[lang].md` (e.g., `index.es.md`)
   - For other pages: `docs/proof/simple.[lang].md`
3. **Translate content** maintaining structure and formatting
4. **Test locally** (optional):
   ```bash
   pip install -r requirements.txt
   mkdocs serve
   ```
5. **Submit pull request** with description of what was translated
6. **Respond to review feedback** from maintainers

### Option 2: Translation Files

1. **Download English source files** from GitHub
2. **Translate in your preferred editor** (keep Markdown formatting)
3. **Add language suffix** to filename (e.g., `index.es.md`)
4. **Submit via GitHub issue** or email with translated files attached
5. We'll integrate the translations for you

### Option 3: Collaborative Translation

1. **Join translation team** for your language in GitHub Discussions
2. **Coordinate with other translators** to avoid duplicate work
3. **Use shared terminology glossary** for consistency
4. **Review each other's work** before submission
5. **Submit as team** with coordinated pull request

## Translation Guidelines

### Accuracy First

- Preserve meaning over literal translation
- Maintain scientific accuracy
- Keep confidence ratings (★ system)
- Preserve citations and links

### Cultural Adaptation

- Use culturally appropriate examples
- Adapt idioms and metaphors
- Consider local context
- Maintain universal accessibility

### Consistency

- Use consistent terminology
- Follow language-specific style guides
- Maintain formatting
- Preserve structure

### Quality Standards

- Native or fluent speaker level
- Scientific/academic writing ability
- Peer review by second translator
- Regular updates as English version changes

## File Structure

### MkDocs i18n Plugin Structure

This site uses the `mkdocs-static-i18n` plugin with **suffix structure**. Translation files use language suffixes:

```
docs/
├── index.md              # English (default)
├── index.es.md           # Spanish translation
├── index.fr.md           # French translation
├── index.de.md           # German translation
├── index.zh.md           # Chinese translation
├── level1/
│   ├── index.md          # English
│   ├── index.es.md       # Spanish
│   ├── index.fr.md       # French
│   └── ...
└── contribute/
    ├── index.md          # English
    ├── index.es.md       # Spanish
    └── ...
```

### Supported Languages

Currently configured languages:

- **English (en)** - Default language
- **Spanish (es)** - Español
- **French (fr)** - Français
- **German (de)** - Deutsch
- **Chinese (zh)** - 中文

To add a new language, submit a pull request updating `mkdocs.yml` with the language configuration.

### Language Codes

Use ISO 639-1 codes:

- `en` - English
- `es` - Spanish
- `zh` - Chinese
- `hi` - Hindi
- `ar` - Arabic
- `pt` - Portuguese
- `fr` - French
- `de` - German
- `ja` - Japanese
- `ru` - Russian

### File Naming

Translation files use the suffix pattern:

```
index.md          # English (default)
index.es.md       # Spanish translation
index.fr.md       # French translation
index.de.md       # German translation
index.zh.md       # Chinese translation
```

**Important**: Keep the same base filename, only add the language suffix before `.md`.

## Translation Template

### Frontmatter

Translation files should include frontmatter with translation metadata:

```yaml
---
title: La Prueba Más Simple para el Optimismo
description: Tres hechos, una conclusión - la realidad está estructurada hacia la integración
tags:
  - simple
  - proof
  - evidence
---
```

**Note**: The i18n plugin automatically handles language detection from the filename suffix, so you don't need to specify `language:` in frontmatter.

### Content Structure

Maintain heading hierarchy:

```markdown
# Título Principal

## Subtítulo

### Sub-subtítulo

Contenido traducido...
```

### Links

Internal links work the same in all languages - the i18n plugin automatically routes to the correct language version:

```markdown
<!-- Works in all languages -->
See [Evidence Summary](../proof/evidence.md)
Ver [Resumen de Evidencia](../proof/evidence.md)
Voir [Résumé des Preuves](../proof/evidence.md)
```

Keep external links unchanged:

```markdown
<!-- Keep as-is -->
[Wang et al. 2023](https://doi.org/10.1038/...)
```

### Language Selector

The i18n plugin automatically adds a language selector to the site. Users can switch between available translations at any time.

## Key Terminology

### Core Concepts

Translate consistently:

| English | Spanish | Chinese | French |
|---------|---------|---------|--------|
| Structural Optimism | Optimismo Estructural | 结构乐观主义 | Optimisme Structurel |
| Integration | Integración | 整合 | Intégration |
| Consciousness | Consciencia | 意识 | Conscience |
| Evidence | Evidencia | 证据 | Preuve |

### Technical Terms

Some terms may be kept in English if no good translation exists:

- Quantum coherence
- Default Mode Network (DMN)
- Integrated Information Theory (IIT)

**Note**: Add explanatory notes for technical terms.

### Confidence Ratings

Keep star system, translate labels:

| English | Spanish | Chinese | French |
|---------|---------|---------|--------|
| Established | Establecido | 已确立 | Établi |
| Strong | Fuerte | 强 | Fort |
| Promising | Prometedor | 有前景 | Prometteur |
| Preliminary | Preliminar | 初步 | Préliminaire |
| Speculative | Especulativo | 推测性 | Spéculatif |

## Translation Tools

### Recommended Tools

- **DeepL**: High-quality machine translation (starting point only)
- **Google Translate**: Quick reference
- **Translation Memory**: Maintain consistency
- **Glossaries**: Track terminology decisions

### Quality Assurance

- **Back-translation**: Translate back to English to check accuracy
- **Peer review**: Have another translator review
- **Native speaker check**: Verify naturalness
- **Technical review**: Verify scientific accuracy

## Translation Process

### 1. Preparation

- Read English version thoroughly
- Understand scientific concepts
- Research terminology in target language
- Set up translation environment

### 2. First Draft

- Translate content maintaining meaning
- Note difficult passages
- Mark terms needing review
- Preserve formatting

### 3. Review

- Check accuracy against original
- Verify terminology consistency
- Ensure natural flow
- Validate scientific content

### 4. Peer Review

- Another translator reviews
- Feedback incorporated
- Disagreements discussed
- Consensus reached

### 5. Submission

- Submit via pull request
- Respond to maintainer feedback
- Make requested changes
- Final approval

### 6. Maintenance

- Update when English version changes
- Respond to reader feedback
- Improve based on usage
- Coordinate with translation team

## Recognition

Translators are recognized through:

### Attribution

- Listed in translation credits
- Acknowledged in translated pages
- Included in project contributors
- Cited in academic outputs (if desired)

### Translator Page

Each language has a translator credits page:

```markdown
# Traductores / Translators

Esta traducción fue realizada por:
This translation was made by:

- [Translator Name] - Simple Proof, Evidence Summary
- [Translator Name] - Academic Proof, Claims
- [Translator Name] - Contribute pages
```

### Anonymous Translation

Translators can contribute anonymously:

- Use pseudonym or "Anonymous Translator"
- Follow [anonymous contribution guidelines](anonymous.md)
- Still receive recognition (if desired)

## Translation Teams

### Joining a Team

If a translation team exists for your language:

1. Contact team coordinator
2. Review existing translations
3. Claim sections to translate
4. Coordinate with team members
5. Participate in reviews

### Starting a Team

To start a new language team:

1. Announce in [GitHub Discussions](https://github.com/[username]/structural-optimism/discussions)
2. Recruit other translators
3. Set up coordination system
4. Establish terminology glossary
5. Begin translating

## Questions?

- **About translation process**: Open an issue on [GitHub](https://github.com/Aphantasic-Optimist/Structural-Optimism/issues)
- **About specific terms**: Ask in [GitHub Discussions](https://github.com/Aphantasic-Optimist/Structural-Optimism/discussions)
- **General questions**: Use GitHub issues or discussions

---

**Thank you for helping make Structural Optimism accessible to speakers of all languages!** 🌍✨

**Remember**: Good translation is not just converting words - it's conveying meaning, preserving accuracy, and making ideas accessible across cultures.
