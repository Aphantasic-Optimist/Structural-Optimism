# Assets Directory

This directory contains all static assets for the Structural Optimism website.

## Structure

```
assets/
├── citations/         # Citation and reference files
├── diagrams/          # Diagrams and flowcharts
├── images/            # Images and graphics
├── graph/             # Interactive graph visualization
│   ├── graph-viewer.js    # Main visualization code
│   ├── graph.css          # Visualization styles
│   ├── README.md          # Technical documentation
│   └── index.md           # Overview
└── README.md          # This file
```

## Folders

### citations/
Academic citations, references, and bibliography files.

### diagrams/
Visual diagrams explaining concepts, frameworks, and relationships.

### images/
General images, logos, icons, and graphics used throughout the site.

### graph/
**Interactive knowledge graph visualization** using Sigma.js.

Features:
- WebGL-accelerated rendering (10,000+ nodes)
- Interactive exploration (click, hover, zoom, pan)
- Search and filtering
- Force-directed layout
- Dark mode support
- Mobile-responsive

See `graph/README.md` for technical details.

## Usage

### In Markdown Files

**Images:**
```markdown
![Alt text](assets/images/filename.png)
```

**Diagrams:**
```markdown
![Diagram description](assets/diagrams/filename.svg)
```

**Graph Visualization:**
```markdown
<div id="graph-container"></div>
<link rel="stylesheet" href="assets/graph/graph.css">
<script type="module" src="assets/graph/graph-viewer.js"></script>
```

### In CSS

```css
background-image: url('../assets/images/filename.png');
```

## File Naming Conventions

- Use lowercase with hyphens: `my-file-name.png`
- Be descriptive: `l0-l5-framework-diagram.svg`
- Include version if needed: `logo-v2.png`

## Optimization

- **Images:** Optimize with tools like ImageOptim, TinyPNG
- **SVGs:** Minify with SVGO
- **JavaScript:** Already optimized (ES modules from CDN)
- **CSS:** Minified by MkDocs build process

## Adding New Assets

1. Place file in appropriate subfolder
2. Use descriptive filename
3. Optimize file size
4. Reference in markdown/CSS
5. Test in both light and dark modes

## Accessibility

All assets should follow accessibility guidelines:

- **Images:** Include descriptive alt text
- **Diagrams:** Provide text descriptions
- **Interactive elements:** Keyboard navigation support
- **Colors:** Sufficient contrast ratios

## Performance

- Keep images under 500KB when possible
- Use SVG for diagrams (scalable, small file size)
- Lazy load large images
- Use CDN for external dependencies

---

**Last Updated:** January 23, 2026  
**Status:** Organized and documented
