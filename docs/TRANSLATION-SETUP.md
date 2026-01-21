# Translation Setup Documentation

This document describes the technical setup for the translation system using `mkdocs-static-i18n`.

## Plugin Configuration

### Installation

The i18n plugin is included in `requirements.txt`:

```bash
pip install mkdocs-static-i18n>=1.2.0
```

### Configuration in mkdocs.yml

```yaml
plugins:
  - i18n:
      docs_structure: suffix
      fallback_to_default: true
      reconfigure_material: true
      reconfigure_search: true
      languages:
        - locale: en
          default: true
          name: English
          build: true
        - locale: es
          name: Español
          build: true
          nav_translations:
            # Navigation translations here
        # Additional languages...
```

## Configuration Options

### docs_structure: suffix

Files use language suffixes instead of separate directories:

- `index.md` - English (default)
- `index.es.md` - Spanish
- `index.fr.md` - French

**Advantages:**
- Easier to see which pages have translations
- Simpler file management
- Clear relationship between original and translation

### fallback_to_default: true

If a translation doesn't exist, the plugin falls back to the default (English) version. This ensures:

- No broken links
- Partial translations are useful
- Gradual translation progress is supported

### reconfigure_material: true

Automatically configures Material theme for i18n:

- Language selector in header
- Proper language metadata
- RTL support for Arabic, Hebrew, etc.

### reconfigure_search: true

Configures search plugin for each language:

- Separate search index per language
- Language-specific stemming
- Better search results

## Adding a New Language

### 1. Update mkdocs.yml

Add language configuration to the `languages` list:

```yaml
- locale: pt
  name: Português
  build: true
  nav_translations:
    Home: Início
    Level 1 - Simple: Nível 1 - Simples
    # ... other navigation items
```

### 2. Create Translation Files

Create files with the language suffix:

```
docs/index.pt.md
docs/level1/index.pt.md
docs/contribute/index.pt.md
```

### 3. Test Locally

```bash
mkdocs serve
```

Visit `http://localhost:8000/pt/` to see the Portuguese version.

### 4. Build and Deploy

```bash
mkdocs build
```

The build process creates separate directories for each language in `site/`:

```
site/
├── en/
├── es/
├── fr/
├── pt/
└── index.html (redirects to default language)
```

## Navigation Translations

### Purpose

Navigation translations ensure menu items appear in the correct language:

```yaml
nav_translations:
  Home: Inicio              # Spanish
  Contribute: Contribuir
  About: Acerca de
```

### Required Translations

Translate all top-level navigation items:

- Home
- Level 1 - Simple
- Level 2 - Intermediate
- Level 3 - Advanced
- Level 4 - Analysis
- Level 5 - Academic
- Contribute
- Safety
- Academic
- About

### Sub-navigation

Sub-navigation items are automatically translated if the page exists:

- If `docs/level1/getting-started.es.md` exists, it appears in Spanish nav
- If it doesn't exist, the English version is linked (fallback)

## File Naming Convention

### Pattern

```
[basename].[locale].md
```

### Examples

| English | Spanish | French | German | Chinese |
|---------|---------|--------|--------|---------|
| `index.md` | `index.es.md` | `index.fr.md` | `index.de.md` | `index.zh.md` |
| `getting-started.md` | `getting-started.es.md` | `getting-started.fr.md` | `getting-started.de.md` | `getting-started.zh.md` |

### Important Rules

1. **Keep base filename identical** - Only add language suffix
2. **Use ISO 639-1 codes** - Two-letter language codes
3. **Maintain directory structure** - Translations go in same directory as original
4. **No spaces in filenames** - Use hyphens instead

## Language Selector

### Automatic Integration

The i18n plugin automatically adds a language selector to the Material theme header.

### Behavior

- Shows all configured languages
- Highlights current language
- Switches to same page in selected language
- Falls back to home page if translation doesn't exist

### Customization

To customize the language selector appearance, add CSS to `docs/stylesheets/extra.css`:

```css
/* Language selector styling */
.md-select__inner {
  /* Custom styles */
}
```

## Search Configuration

### Per-Language Search

Each language gets its own search index:

- English: Uses English stemming
- Spanish: Uses Spanish stemming
- French: Uses French stemming
- etc.

### Search Quality

Language-specific search provides:

- Better relevance
- Proper word stemming
- Language-specific stop words
- Improved user experience

## Build Process

### Development

```bash
mkdocs serve
```

- Builds all languages
- Hot-reloads on changes
- Available at `http://localhost:8000/`

### Production

```bash
mkdocs build
```

- Generates static site in `site/`
- Creates language-specific directories
- Optimizes for deployment

### GitHub Actions

The deployment workflow automatically builds all languages:

```yaml
- name: Build site
  run: mkdocs build
```

No special configuration needed - the i18n plugin handles everything.

## Translation Status

### Tracking Progress

To track translation progress, you can:

1. **Check file existence**: List all `*.es.md` files
2. **Use git**: Track translation commits
3. **Create status page**: Document which pages are translated

### Example Status Check

```bash
# Count English pages
find docs -name "*.md" -not -name "*.*.md" | wc -l

# Count Spanish translations
find docs -name "*.es.md" | wc -l

# Calculate percentage
# (Spanish / English) * 100
```

## Troubleshooting

### Translation Not Appearing

**Check:**
1. File has correct suffix (e.g., `.es.md`)
2. File is in correct directory
3. Language is configured in `mkdocs.yml`
4. Build was successful (`mkdocs build`)

### Language Selector Not Showing

**Check:**
1. `reconfigure_material: true` is set
2. Multiple languages are configured
3. Material theme is properly installed
4. Browser cache is cleared

### Search Not Working in Translation

**Check:**
1. `reconfigure_search: true` is set
2. Search plugin is enabled
3. Language has content to index
4. Build completed successfully

### Links Broken in Translation

**Check:**
1. Internal links use relative paths
2. Target page exists or fallback is enabled
3. Link syntax is correct Markdown
4. No hardcoded language codes in URLs

## Best Practices

### 1. Start with High-Priority Pages

Translate in this order:
1. Home page (`index.md`)
2. Level 1 content
3. Contribute pages
4. Other levels

### 2. Maintain Consistency

- Use translation memory
- Create terminology glossary
- Review existing translations
- Coordinate with other translators

### 3. Test Thoroughly

- Build locally before submitting
- Check all links work
- Verify formatting is correct
- Test language selector

### 4. Document Changes

- Note what was translated in commit message
- Update translation status if tracking
- Mention any terminology decisions
- Link to related issues/PRs

## Resources

### Documentation

- [mkdocs-static-i18n docs](https://github.com/ultrabug/mkdocs-static-i18n)
- [Material for MkDocs i18n](https://squidfunk.github.io/mkdocs-material/setup/changing-the-language/)
- [ISO 639-1 language codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

### Tools

- [DeepL](https://www.deepl.com/) - High-quality machine translation
- [Poedit](https://poedit.net/) - Translation editor
- [OmegaT](https://omegat.org/) - Translation memory tool

### Community

- [GitHub Discussions](https://github.com/structuraloptimist/structural-optimism/discussions) - Ask questions
- [Translation Guide](contribute/translations.md) - For contributors
- [Contributing Guide](../CONTRIBUTING.md) - General contribution info

---

**Last Updated**: 2026-01-21

**Maintainer**: Structural Optimism Team
