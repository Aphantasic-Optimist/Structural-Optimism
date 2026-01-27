---
title: Knowledge Graph
description: Explore the evidence and claims visually
---

# Knowledge Graph

Explore the relationships between claims, evidence, and mechanisms in our knowledge graph. This visualization is powered by data from our Graphiti knowledge base.

<div class="graph-controls">
  <button onclick="location.reload()">Reset View</button>
</div>

<div id="graphiti-container"></div>

## Legend

<div class="graph-legend">
  <div class="graph-legend-section">
    <h4>Confidence Levels</h4>
    <div class="graph-legend-items">
      <span class="legend-item"><span class="legend-dot" style="background: #2e7d32;"></span> ★★★★★ Established</span>
      <span class="legend-item"><span class="legend-dot" style="background: #1976d2;"></span> ★★★★☆ Strong</span>
      <span class="legend-item"><span class="legend-dot" style="background: #f57c00;"></span> ★★★☆☆ Promising</span>
      <span class="legend-item"><span class="legend-dot" style="background: #d32f2f;"></span> ★★☆☆☆ Preliminary</span>
    </div>
  </div>
  
  <div class="graph-legend-section">
    <h4>Relationships</h4>
    <div class="graph-legend-items">
      <span class="legend-item"><span class="legend-line" style="background: #4caf50;"></span> SUPPORTS</span>
      <span class="legend-item"><span class="legend-line" style="background: #f44336;"></span> CONTRADICTS</span>
      <span class="legend-item"><span class="legend-line" style="background: #ff9800;"></span> BLOCKS</span>
      <span class="legend-item"><span class="legend-line" style="background: #2196f3;"></span> EXPLAINS</span>
    </div>
  </div>
</div>

## How to Use

- **Drag** nodes to rearrange the layout
- **Scroll** to zoom in/out
- **Hover** over nodes to see details
- **Click** a node to navigate to its documentation page

## About This Graph

This graph represents the core claims and evidence of Structural Optimism:

- **Green nodes** are established claims with strong evidence (★★★★★)
- **Blue nodes** are supporting evidence from peer-reviewed research
- **Arrows** show relationships: what supports what, what explains what

The data is exported from our [Graphiti knowledge graph](https://github.com/getzep/graphiti), which tracks:

- Scientific claims with confidence ratings
- Evidence from peer-reviewed studies
- Mechanisms that explain the effects
- Research gaps that need investigation

---

**Explore the evidence. Follow the connections. See how it all fits together.** ✨

<link rel="stylesheet" href="../assets/stylesheets/graphiti-graph.css">
<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="../assets/javascripts/graphiti-viewer.js"></script>
