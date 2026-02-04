/**
 * Graphiti Knowledge Graph Viewer
 * D3.js force-directed graph visualization for Graphiti data
 * 
 * Features:
 * - Typed nodes (ScientificClaim, Evidence, ResearchGap, Mechanism)
 * - Typed edges (SUPPORTS, CONTRADICTS, BLOCKS, EXPLAINS)
 * - Confidence-based coloring
 * - Click-through navigation to documentation pages
 * - Hover tooltips with summaries
 * - Responsive and mobile-friendly
 * - Mini-graph mode: auto-filters to show local neighborhood of current node
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    width: 800,
    height: 600,
    miniHeight: 350,
    nodeRadius: {
      ScientificClaim: 14,
      Evidence: 10,
      Mechanism: 8,
      ResearchGap: 8,
      default: 10
    },
    colors: {
      confidence: {
        5: '#2e7d32',  // Green - Established
        4: '#1976d2',  // Blue - Strong
        3: '#f57c00',  // Orange - Promising
        2: '#d32f2f',  // Red - Preliminary
        1: '#7b1fa2'   // Purple - Speculative
      },
      type: {
        ScientificClaim: '#2e7d32',
        Evidence: '#1976d2',
        Mechanism: '#00897b',
        ResearchGap: '#d32f2f',
        default: '#757575'
      },
      edge: {
        SUPPORTS: '#4caf50',
        CONTRADICTS: '#f44336',
        BLOCKS: '#ff9800',
        EXPLAINS: '#2196f3',
        FOUNDATION_FOR: '#9c27b0',
        ENABLES: '#00bcd4',
        MECHANISM_FOR: '#00897b',
        default: '#9e9e9e'
      }
    },
    force: {
      charge: -300,
      linkDistance: 100,
      collide: 20
    },
    miniForce: {
      charge: -200,
      linkDistance: 80,
      collide: 15
    }
  };

  // Cache for full graph data
  let fullGraphData = null;

  /**
   * Initialize all graph viewers on the page
   */
  function init() {
    // Main graph container (shows full graph)
    const mainContainer = document.getElementById('graphiti-container');
    
    // Mini-graph containers (shows neighborhood of specified node)
    const miniContainers = document.querySelectorAll('.mini-graph');

    // Load full graph data once, then render all graphs
    loadFullGraphData().then(data => {
      if (!data) return;
      fullGraphData = data;

      // Render main graph
      if (mainContainer) {
        renderGraph(mainContainer, data, false, null);
      }

      // Render mini-graphs with filtered data
      miniContainers.forEach(container => {
        const nodeIdentifier = container.dataset.nodeId;
        const depth = parseInt(container.dataset.depth) || 1;
        
        if (nodeIdentifier) {
          // Find the node by various methods
          const centerNode = findNodeByIdentifier(data, nodeIdentifier);
          
          if (centerNode) {
            const neighborhood = extractNeighborhood(data, centerNode.id, depth);
            if (neighborhood.nodes.length > 0) {
              renderGraph(container, neighborhood, true, centerNode.id);
            } else {
              container.innerHTML = '<p style="text-align: center; color: var(--md-default-fg-color--light); padding: 1rem;">No connections found for this node.</p>';
            }
          } else {
            console.warn('Could not find node for identifier:', nodeIdentifier);
            container.innerHTML = '<p style="text-align: center; color: var(--md-default-fg-color--light); padding: 1rem;">Node not found in graph data.</p>';
          }
        }
      });
    });
  }

  /**
   * Find a node by various identifiers (UUID, slug, label, or partial match)
   * @param {Object} data - Full graph data
   * @param {string} identifier - Node identifier (UUID, slug, label, or keyword)
   * @returns {Object|null} - The matching node or null
   */
  function findNodeByIdentifier(data, identifier) {
    if (!identifier || !data.nodes) return null;
    
    const lowerIdentifier = identifier.toLowerCase().trim();
    
    // 1. Try exact UUID match
    let node = data.nodes.find(n => n.id === identifier);
    if (node) return node;
    
    // 2. Try exact slug match
    node = data.nodes.find(n => n.slug === identifier || n.slug === lowerIdentifier);
    if (node) return node;
    
    // 3. Try exact label match (case-insensitive)
    node = data.nodes.find(n => n.label && n.label.toLowerCase() === lowerIdentifier);
    if (node) return node;
    
    // 4. Try URL-based match (for claim pages)
    // Handle identifiers like "claim-2" or "02-social-connection"
    const claimMatch = identifier.match(/claim-?(\d+)/i);
    if (claimMatch) {
      const claimNum = claimMatch[1].padStart(2, '0');
      node = data.nodes.find(n => 
        n.url && n.url.includes(`claims/${claimNum}-`) ||
        n.markdown_url && n.markdown_url.includes(`claims/${claimNum}-`)
      );
      if (node) return node;
    }
    
    // 5. Try partial slug match
    node = data.nodes.find(n => n.slug && n.slug.includes(lowerIdentifier));
    if (node) return node;
    
    // 6. Try partial label match (contains)
    node = data.nodes.find(n => n.label && n.label.toLowerCase().includes(lowerIdentifier));
    if (node) return node;
    
    // 7. Try matching keywords in identifier against label
    const keywords = lowerIdentifier.split(/[-_\s]+/).filter(k => k.length > 2);
    if (keywords.length > 0) {
      node = data.nodes.find(n => {
        if (!n.label) return false;
        const labelLower = n.label.toLowerCase();
        return keywords.every(kw => labelLower.includes(kw));
      });
      if (node) return node;
      
      // Try matching most keywords
      node = data.nodes.find(n => {
        if (!n.label) return false;
        const labelLower = n.label.toLowerCase();
        const matchCount = keywords.filter(kw => labelLower.includes(kw)).length;
        return matchCount >= Math.ceil(keywords.length * 0.6); // 60% match
      });
      if (node) return node;
    }
    
    return null;
  }

  /**
   * Extract neighborhood subgraph around a center node
   * @param {Object} data - Full graph data
   * @param {string} centerNodeId - ID of the center node
   * @param {number} depth - How many hops from center (1 = direct connections, 2 = connections of connections)
   */
  function extractNeighborhood(data, centerNodeId, depth = 1) {
    const nodeIds = new Set([centerNodeId]);
    const edgeIds = new Set();

    // BFS to find nodes within depth
    let frontier = [centerNodeId];
    for (let d = 0; d < depth; d++) {
      const nextFrontier = [];
      for (const nodeId of frontier) {
        // Find all edges connected to this node
        for (const edge of data.edges) {
          const sourceId = typeof edge.source === 'object' ? edge.source.id : edge.source;
          const targetId = typeof edge.target === 'object' ? edge.target.id : edge.target;
          
          if (sourceId === nodeId || targetId === nodeId) {
            edgeIds.add(edge.id);
            const neighborId = sourceId === nodeId ? targetId : sourceId;
            if (!nodeIds.has(neighborId)) {
              nodeIds.add(neighborId);
              nextFrontier.push(neighborId);
            }
          }
        }
      }
      frontier = nextFrontier;
    }

    // Build filtered graph
    const nodes = data.nodes
      .filter(n => nodeIds.has(n.id))
      .map(n => ({
        ...n,
        highlight: n.id === centerNodeId  // Mark center node
      }));

    const edges = data.edges.filter(e => edgeIds.has(e.id));

    return { nodes, edges };
  }

  /**
   * Get base path for the site (handles GitHub Pages subdirectory vs root domain)
   */
  function getBasePath() {
    // Check for canonical link (set by MkDocs)
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      try {
        const url = new URL(canonical.href);
        // Check if this is a custom domain (no subdirectory) or GitHub Pages (with subdirectory)
        // GitHub Pages URLs look like: username.github.io/repo-name/page
        // Custom domain URLs look like: structuraloptimism.org/page
        
        // If the hostname contains 'github.io', extract the repo name as base path
        if (url.hostname.includes('github.io')) {
          const pathParts = url.pathname.split('/').filter(p => p);
          if (pathParts.length > 0) {
            return '/' + pathParts[0];
          }
        }
        // For custom domains, no base path needed
        return '';
      } catch (e) {
        console.warn('Could not parse canonical URL:', e);
      }
    }
    return '';
  }

  /**
   * Load full graph data from JSON
   */
  async function loadFullGraphData() {
    if (fullGraphData) return fullGraphData;

    const basePath = getBasePath();
    
    // Try multiple paths - GitHub Pages uses subdirectory as base
    const paths = [
      basePath + '/graph-data/full.json',  // With base path (GitHub Pages)
      'graph-data/full.json',               // Relative from current page
      '../graph-data/full.json',            // One level up
      '../../graph-data/full.json',         // Two levels up
      '/graph-data/full.json'               // From absolute root
    ];

    for (const path of paths) {
      try {
        const response = await fetch(path);
        if (response.ok) {
          console.log('Loaded graph data from:', path);
          return await response.json();
        }
      } catch (e) {
        console.log('Failed to load from:', path);
        continue;
      }
    }

    console.error('Could not load graph data from any path');
    return null;
  }

  /**
   * Resolve a node URL to an absolute path
   * @param {string} url - The URL from node data (may be relative)
   * @returns {string} - Resolved URL
   */
  function resolveNodeUrl(url) {
    if (!url) return null;
    
    // If already absolute, return as-is
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    const basePath = getBasePath();
    
    // Handle relative URLs like "../claims/02-social-connection-reduces-mortality/"
    // We need to resolve them relative to the site root
    
    // Remove leading ../ sequences and resolve
    let cleanUrl = url;
    while (cleanUrl.startsWith('../')) {
      cleanUrl = cleanUrl.substring(3);
    }
    
    // Ensure it starts with /
    if (!cleanUrl.startsWith('/')) {
      cleanUrl = '/' + cleanUrl;
    }
    
    // Add base path for GitHub Pages
    return basePath + cleanUrl;
  }

  /**
   * Render a graph in a container
   */
  function renderGraph(container, data, isMini, centerNodeId) {
    const rect = container.getBoundingClientRect();
    const width = rect.width || CONFIG.width;
    const height = isMini ? CONFIG.miniHeight : CONFIG.height;
    const forceConfig = isMini ? CONFIG.miniForce : CONFIG.force;

    // Clear container
    container.innerHTML = '';

    // Create SVG
    const svg = d3.select(container)
      .append('svg')
      .attr('width', '100%')
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');

    // Add zoom behavior
    const zoom = d3.zoom()
      .scaleExtent([0.3, 3])
      .on('zoom', (event) => {
        svg.select('g.graph-content').attr('transform', event.transform);
      });
    svg.call(zoom);

    // Create content group
    svg.append('g').attr('class', 'graph-content');

    // Create tooltip
    const tooltip = d3.select(container)
      .append('div')
      .attr('class', 'graph-tooltip')
      .style('opacity', 0);

    // Deep clone data to avoid mutation issues
    const clonedData = {
      nodes: data.nodes.map(n => ({ ...n })),
      edges: data.edges.map(e => ({ ...e }))
    };

    render(svg, tooltip, clonedData, width, height, forceConfig, isMini);
  }

  /**
   * Render the graph visualization
   */
  function render(svg, tooltip, data, width, height, forceConfig, isMini) {
    const g = svg.select('g.graph-content');
    const suffix = isMini ? '-mini-' + Math.random().toString(36).substr(2, 9) : '-main';

    // Create simulation
    const simulation = d3.forceSimulation(data.nodes)
      .force('link', d3.forceLink(data.edges)
        .id(d => d.id)
        .distance(forceConfig.linkDistance))
      .force('charge', d3.forceManyBody().strength(forceConfig.charge))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collide', d3.forceCollide().radius(forceConfig.collide));

    // Create arrow markers
    const defs = svg.append('defs');
    const edgeTypes = Object.keys(CONFIG.colors.edge);
    
    edgeTypes.forEach(type => {
      defs.append('marker')
        .attr('id', `arrow-${type}${suffix}`)
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 20)
        .attr('refY', 0)
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('orient', 'auto')
        .append('path')
        .attr('fill', CONFIG.colors.edge[type])
        .attr('d', 'M0,-5L10,0L0,5');
    });

    // Create edges
    const link = g.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(data.edges)
      .join('line')
      .attr('stroke', d => CONFIG.colors.edge[d.label] || CONFIG.colors.edge.default)
      .attr('stroke-width', isMini ? 1.5 : 2)
      .attr('stroke-opacity', 0.6)
      .attr('marker-end', d => `url(#arrow-${d.label || 'default'}${suffix})`);

    // Create nodes
    const node = g.append('g')
      .attr('class', 'nodes')
      .selectAll('g')
      .data(data.nodes)
      .join('g')
      .attr('class', d => `node ${d.highlight ? 'node--highlight' : ''}`)
      .call(drag(simulation));

    // Node circles
    node.append('circle')
      .attr('r', d => {
        const baseRadius = CONFIG.nodeRadius[d.type] || CONFIG.nodeRadius.default;
        return d.highlight ? baseRadius * 1.3 : (isMini ? baseRadius * 0.8 : baseRadius);
      })
      .attr('fill', d => getNodeColor(d))
      .attr('stroke', d => d.highlight ? '#ff9800' : '#fff')
      .attr('stroke-width', d => d.highlight ? 3 : 2)
      .style('cursor', d => d.url ? 'pointer' : 'default');

    // Node labels
    node.append('text')
      .attr('dx', d => {
        const baseRadius = CONFIG.nodeRadius[d.type] || CONFIG.nodeRadius.default;
        return (isMini ? baseRadius * 0.8 : baseRadius) + 4;
      })
      .attr('dy', 4)
      .attr('font-size', isMini ? 9 : 11)
      .attr('fill', 'currentColor')
      .attr('font-weight', d => d.highlight ? 'bold' : 'normal')
      .text(d => truncate(d.label, isMini ? 20 : 25));

    // Interactions
    node.on('mouseover', (event, d) => showTooltip(tooltip, event, d))
      .on('mouseout', () => hideTooltip(tooltip))
      .on('click', handleClick);

    // Update positions on tick
    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node.attr('transform', d => `translate(${d.x},${d.y})`);
    });
  }

  function getNodeColor(node) {
    if (node.confidence) {
      return CONFIG.colors.confidence[node.confidence] || CONFIG.colors.type.default;
    }
    return CONFIG.colors.type[node.type] || CONFIG.colors.type.default;
  }

  function drag(simulation) {
    return d3.drag()
      .on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on('drag', (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });
  }

  function showTooltip(tooltip, event, d) {
    const stars = d.confidence ? '★'.repeat(d.confidence) + '☆'.repeat(5 - d.confidence) : '';
    
    tooltip.transition().duration(200).style('opacity', 0.95);
    tooltip.html(`
      <strong>${d.label}</strong>
      ${d.type ? `<br><span class="type">${d.type}</span>` : ''}
      ${stars ? `<br><span class="confidence">${stars}</span>` : ''}
      ${d.summary ? `<br><span class="summary">${truncate(d.summary, 150)}</span>` : ''}
      ${d.url ? '<br><em>Click to view details</em>' : ''}
    `)
      .style('left', (event.pageX + 10) + 'px')
      .style('top', (event.pageY - 10) + 'px');
  }

  function hideTooltip(tooltip) {
    tooltip.transition().duration(500).style('opacity', 0);
  }

  function handleClick(event, d) {
    if (d.url) {
      // Resolve the URL properly for navigation
      const resolvedUrl = resolveNodeUrl(d.url);
      if (resolvedUrl) {
        window.location.href = resolvedUrl;
      }
    }
  }

  function truncate(text, maxLength) {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
