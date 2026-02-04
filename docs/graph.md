---
title: Evidence Graph
description: Explore the knowledge graph of research evidence
---

# Evidence Graph

Explore the connections between research findings. Click any node to learn more.

<div id="graphiti-container" style="width: 100%; height: 600px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 8px; margin: 1rem 0;"></div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
(function() {
  var canonical = document.querySelector('link[rel="canonical"]');
  var basePath = '';
  if (canonical) {
    try {
      var url = new URL(canonical.href);
      if (url.hostname.includes('github.io')) {
        var parts = url.pathname.split('/').filter(function(p) { return p; });
        if (parts.length > 0) basePath = '/' + parts[0];
      }
    } catch(e) {}
  }
  
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = basePath + '/assets/stylesheets/graphiti-graph.css';
  document.head.appendChild(link);
  
  var script = document.createElement('script');
  script.src = basePath + '/assets/javascripts/graphiti-viewer.js';
  document.head.appendChild(script);
})();
</script>

---

## How to Read the Graph

**Node Colors (by confidence):**

| Color | Confidence | Meaning |
|-------|------------|---------|
| 🟢 Green | ★★★★★ | Established - replicated, peer-reviewed |
| 🔵 Blue | ★★★★☆ | Strong - replicated, minor gaps |
| 🟠 Orange | ★★★☆☆ | Promising - awaiting replication |
| 🔴 Red | ★★☆☆☆ | Preliminary - single study |
| 🟣 Purple | ★☆☆☆☆ | Speculative - theoretical only |

**Edge Types:**

- **SUPPORTS** - Evidence supporting a claim
- **CONTRADICTS** - Evidence against a claim
- **AFFECTS** - Causal or correlational relationship
- **BASED_ON** - Derived from source
- **PUBLISHED_IN** - Publication venue

---

## Explore by Category

- [Entities](entities/social-connection.md) - Core concepts and phenomena
- [Evidence](evidence/meta-analysis.md) - Research studies and findings
- [Mechanisms](mechanisms/cognitive-processing.md) - How things work
- [Researchers](researchers/holt-lunstad-et-al-2010.md) - Key contributors

---

*This graph is generated from our [Graphiti knowledge base](https://github.com/getzep/graphiti) and updated as new research is added.*
