---
title: Social connection
description: Social connection
---

# Social connection

**Type:** Entity  
**Confidence:** ★★★☆☆ Promising

---

## Evidence Graph

<div class="mini-graph" data-node-id="social-connection" data-depth="2"></div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
(function() {
  // Get base path - empty for custom domains, /repo-name for GitHub Pages
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

## Summary

Social connection reduces all-cause mortality by ~50% (Holt-Lunstad et al. 2010, 300K+ participants). Neural mechanism: social interaction → oxytocin → VTA dopamine → nucleus accumbens → reward loop.

---

## Timeline

**Added to Knowledge Graph:** 2026-02-04 13:25 UTC  
**Valid Since:** 2026-02-04  

---

## Relationships

### Supported By

- **EXPLAINS**: [neural mechanism](../mechanisms/neural-mechanism.md)  
  *The neural mechanism explains why social connection feels rewarding*
  📚 Mentioned in 1 episode(s)


### Supports

- **REDUCES**: [All-cause mortality](all-cause-mortality.md)  
  *Social connection reduces all-cause mortality by approximately 50%*
  📚 Mentioned in 1 episode(s)

- **BASED_ON**: [Meta-analysis](../evidence/meta-analysis.md)  
  *The finding about social connection reducing mortality is based on a meta-analysis*
  📚 Mentioned in 1 episode(s)

- **CREATES**: [positive feedback loop](positive-feedback-loop.md)  
  *Social connection creates a positive feedback loop through the neural pathway mechanism*
  📅 Valid since: 2026-02-04
  📚 Mentioned in 1 episode(s)


---

## Explore Further

[View in Knowledge Graph](../graph.md) to see all connections and explore related concepts.

---

*This page was auto-generated from the knowledge graph.*  
*Last updated: 2026-02-04*
