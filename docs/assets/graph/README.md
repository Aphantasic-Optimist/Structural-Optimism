# Interactive Graph Visualization

## Overview

The interactive knowledge graph uses **Sigma.js** for WebGL-accelerated rendering, allowing smooth exploration of thousands of nodes and edges.

## Features

✅ **Implemented:**
- WebGL-accelerated rendering (handles 10,000+ nodes)
- Interactive exploration (click, hover, zoom, pan)
- Node highlighting on hover/click
- Search functionality
- Force-directed layout (ForceAtlas2)
- Responsive design (mobile-friendly)
- Dark mode support
- Accessibility features

🔄 **Coming Soon:**
- Confidence level filtering
- Node type filtering
- Multiple layout algorithms
- Temporal visualization
- Export functionality

## Technical Stack

- **Sigma.js 3.0** - WebGL graph renderer
- **Graphology** - Graph data structure
- **ForceAtlas2** - Force-directed layout algorithm
- **ES Modules** - Modern JavaScript (no build step needed!)

## Files

- `graph-viewer.js` - Main visualization code
- `../../stylesheets/graph.css` - Styling
- `../../graph-data/full.json` - Graph data
- `../../index.md` - Home page (contains graph)

## Usage

The visualization is automatically initialized when the graph page loads. No manual setup required!

### Controls

- **Click** a node to see details
- **Hover** to highlight connections
- **Drag** to pan around
- **Scroll** to zoom in/out
- **Search** to find specific nodes
- **Reset View** button to center camera
- **Re-layout** button to recompute positions

### Data Format

The graph expects JSON data in this format:

```json
{
  "nodes": [
    {
      "id": "unique-id",
      "label": "Node Label",
      "type": "ScientificClaim",
      "summary": "Description...",
      "confidence": 5
    }
  ],
  "edges": [
    {
      "source": "node-id-1",
      "target": "node-id-2",
      "label": "SUPPORTS"
    }
  ]
}
```

## Color Coding

Nodes are colored by confidence level:

- 🟢 **Green** (★★★★★) - Established science
- 🔵 **Blue** (★★★★☆) - Strong evidence
- 🟠 **Orange** (★★★☆☆) - Promising evidence
- 🔴 **Red** (★★☆☆☆) - Preliminary evidence
- 🟣 **Purple** (★☆☆☆☆) - Speculative

## Performance

- **Rendering:** WebGL-accelerated (60 FPS)
- **Layout:** Computed once on load
- **Interactions:** Event-driven (no polling)
- **Memory:** Efficient graph data structure

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development

To modify the visualization:

1. Edit `graph-viewer.js` for behavior changes
2. Edit `../../stylesheets/graph.css` for styling
3. Rebuild the site: `mkdocs build`
4. Test locally: `mkdocs serve`

## Troubleshooting

**Graph not loading?**
- Check browser console for errors
- Verify `graph-data/full.json` exists
- Check network tab for failed requests

**Performance issues?**
- Reduce number of nodes (filter in data generation)
- Disable edge rendering for large graphs
- Use simpler layout algorithm

**Styling issues?**
- Check `graph.css` is loaded
- Verify dark mode variables
- Test in different browsers

## Future Enhancements

- [ ] Advanced filtering (confidence, type, date)
- [ ] Multiple layout algorithms (hierarchical, circular)
- [ ] Temporal slider (see graph evolution)
- [ ] Export views as images
- [ ] Keyboard navigation
- [ ] Touch gestures (pinch-to-zoom)
- [ ] Minimap for large graphs
- [ ] Clustering for dense areas

## Credits

- **Sigma.js** - https://www.sigmajs.org/
- **Graphology** - https://graphology.github.io/
- **ForceAtlas2** - https://github.com/gephi/gephi/wiki/Force-Atlas-2

---

**Last Updated:** January 23, 2026  
**Status:** Core features implemented, ready for testing
