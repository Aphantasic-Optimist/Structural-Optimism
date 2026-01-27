---
title: Knowledge Graph
description: Explore the evidence and claims visually
---

# Knowledge Graph

Explore the relationships between claims, evidence, and mechanisms in our knowledge graph.

<div class="graph-controls">
  <button onclick="location.reload()">Reset View</button>
</div>

<div id="graphiti-container"></div>

---

## How to Use the Graph

### Navigation
- **Drag** nodes to rearrange the layout
- **Scroll** to zoom in/out  
- **Hover** over nodes to see summaries
- **Click** a node to navigate to its documentation page

### Understanding the Visualization

**Node Colors** indicate confidence levels:
- 🟢 **Green** - ★★★★★ Established (replicated, peer-reviewed)
- 🔵 **Blue** - ★★★★☆ Strong (replicated, minor gaps)
- 🟠 **Orange** - ★★★☆☆ Promising (awaiting replication)
- 🔴 **Red** - ★★☆☆☆ Preliminary (single study)
- 🟣 **Purple** - ★☆☆☆☆ Speculative (theoretical)

**Node Types:**
- **ScientificClaim** - Verified claims with evidence ratings
- **Evidence** - Supporting/contradicting evidence from studies
- **Mechanism** - Biological/physical mechanisms that explain effects
- **ResearchGap** - Known gaps that need investigation

**Edge Types** show relationships:
- **SUPPORTS** - Evidence supports a claim
- **CONTRADICTS** - Evidence contradicts a claim
- **EXPLAINS** - Mechanism explains how something works
- **BLOCKS** - Gap prevents full understanding

---

## Legend

<div class="graph-legend">
  <div class="graph-legend-section">
    <h4>Confidence Levels</h4>
    <div class="graph-legend-items">
      <span class="legend-item"><span class="legend-dot" style="background: #2e7d32;"></span> ★★★★★ Established</span>
      <span class="legend-item"><span class="legend-dot" style="background: #1976d2;"></span> ★★★★☆ Strong</span>
      <span class="legend-item"><span class="legend-dot" style="background: #f57c00;"></span> ★★★☆☆ Promising</span>
      <span class="legend-item"><span class="legend-dot" style="background: #d32f2f;"></span> ★★☆☆☆ Preliminary</span>
      <span class="legend-item"><span class="legend-dot" style="background: #9c27b0;"></span> ★☆☆☆☆ Speculative</span>
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

---

## What You're Seeing

This graph represents the core claims and evidence of Structural Optimism:

**Current data includes:**
- 21 nodes (claims, evidence, mechanisms, gaps)
- 24 relationships showing how they connect
- Real data from our Graphiti knowledge graph

**Key claims visualized:**
- Social connection reduces mortality (★★★★★)
- Love is universal across cultures (★★★★★)
- Integration creates complexity (★★★★☆)
- Alignment enables flourishing (★★★★☆)

**Evidence sources:**
- Holt-Lunstad et al. 2010 meta-analysis (308,849 participants)
- Cogitate Consortium 2025 consciousness studies
- Cross-cultural research on love and connection

---

## About the Knowledge Graph

The data is exported from our [Graphiti knowledge graph](https://github.com/getzep/graphiti), which tracks:

- **Scientific claims** with confidence ratings (★ to ★★★★★)
- **Evidence** from peer-reviewed studies
- **Mechanisms** that explain the effects
- **Research gaps** that need investigation
- **Temporal changes** - what we believed when

### How It's Built

1. **Research** → We verify findings through peer-reviewed sources
2. **Graphiti** → Findings are added to the knowledge graph
3. **Export** → Graph data is exported to JSON
4. **Visualization** → D3.js renders the interactive graph

### Auto-Updates

When new research is added to Graphiti, run:
```bash
python tools/website/export-from-graphiti.py
```

The graph automatically updates with the latest findings.

---

## Explore Further

- [View Claims](claims/) - Detailed pages for each claim
- [View Evidence](evidence/) - Research sources and studies
- [Methodology](academic/methodology.md) - How we evaluate evidence
- [Open Questions](academic/gaps/open-questions.md) - What we don't know yet

---

**Explore the evidence. Follow the connections. See how it all fits together.** ✨

<link rel="stylesheet" href="../assets/stylesheets/graphiti-graph.css">
<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="../assets/javascripts/graphiti-viewer.js"></script>
