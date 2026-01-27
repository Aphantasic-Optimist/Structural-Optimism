/**
 * Interactive Knowledge Graph Viewer
 * Uses Sigma.js for WebGL-accelerated graph rendering
 */

// Import from CDN
import Graph from 'https://cdn.jsdelivr.net/npm/graphology@0.25.4/+esm';
import Sigma from 'https://cdn.jsdelivr.net/npm/sigma@3.0.0-beta.29/+esm';
import { circular } from 'https://cdn.jsdelivr.net/npm/graphology-layout@0.6.1/+esm';
import forceAtlas2 from 'https://cdn.jsdelivr.net/npm/graphology-layout-forceatlas2@0.10.1/+esm';

// Configuration
const CONFIDENCE_COLORS = {
  5: '#2e7d32', // Green - Established
  4: '#1976d2', // Blue - Strong
  3: '#f57c00', // Orange - Promising
  2: '#d32f2f', // Red - Preliminary
  1: '#7b1fa2', // Purple - Speculative
};

// State
let graph = null;
let renderer = null;
let hoveredNode = null;
let selectedNode = null;

/**
 * Initialize the graph visualization
 */
async function initGraph() {
  const container = document.getElementById('graph-container');
  
  if (!container) {
    console.error('Graph container not found');
    return;
  }
  
  // Show loading state
  container.innerHTML = '<div class="graph-loading">Loading graph data...</div>';
  
  try {
    // Determine the correct path to graph data
    // When built by MkDocs, graph.md becomes /graph/ and graph-data is at /graph-data/
    const basePath = window.location.pathname.includes('/graph') 
      ? '../graph-data/full.json'  // From /graph/ to /graph-data/
      : './graph-data/full.json';   // From root
    
    // Load graph data
    const response = await fetch(basePath);
    if (!response.ok) {
      throw new Error(`Failed to load graph data: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.nodes || !data.edges) {
      throw new Error('Invalid graph data format');
    }
    
    // Create graph
    graph = new Graph();
    
    // Add nodes
    data.nodes.forEach(node => {
      const confidence = node.confidence || 5;
      graph.addNode(node.id, {
        label: node.label,
        type: node.type || 'Unknown',
        summary: node.summary || '',
        confidence: confidence,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 10,
        color: CONFIDENCE_COLORS[confidence] || '#666',
        originalColor: CONFIDENCE_COLORS[confidence] || '#666',
      });
    });
    
    // Add edges
    data.edges.forEach(edge => {
      if (graph.hasNode(edge.source) && graph.hasNode(edge.target)) {
        try {
          graph.addEdge(edge.source, edge.target, {
            label: edge.label || '',
            size: 2,
            color: '#999',
            originalColor: '#999',
          });
        } catch (e) {
          // Edge might already exist, skip
        }
      }
    });
    
    // Apply layout
    applyLayout();
    
    // Clear container
    container.innerHTML = '';
    
    // Create renderer
    renderer = new Sigma(graph, container, {
      renderEdgeLabels: false,
      enableEdgeEvents: true,
    });
    
    // Setup interactions
    setupInteractions();
    
    // Create UI controls
    createControls();
    
    console.log('Graph initialized:', graph.order, 'nodes,', graph.size, 'edges');
  } catch (error) {
    console.error('Failed to initialize graph:', error);
    showError(`Failed to load graph data: ${error.message}`);
  }
}

/**
 * Apply force-directed layout
 */
function applyLayout() {
  // Start with circular layout
  circular.assign(graph);
  
  // Apply force-directed layout
  const settings = forceAtlas2.inferSettings(graph);
  forceAtlas2.assign(graph, {
    iterations: 100,
    settings: {
      ...settings,
      gravity: 1,
      scalingRatio: 10,
      strongGravityMode: false,
      barnesHutOptimize: true,
    },
  });
}

/**
 * Setup mouse/touch interactions
 */
function setupInteractions() {
  // Node hover
  renderer.on('enterNode', ({ node }) => {
    hoveredNode = node;
    highlightNode(node);
  });
  
  renderer.on('leaveNode', () => {
    hoveredNode = null;
    if (!selectedNode) {
      resetHighlight();
    }
  });
  
  // Node click
  renderer.on('clickNode', ({ node }) => {
    selectedNode = node;
    showNodeDetails(node);
    highlightNode(node);
  });
  
  // Stage click (deselect)
  renderer.on('clickStage', () => {
    selectedNode = null;
    hideNodeDetails();
    resetHighlight();
  });
}

/**
 * Highlight a node and its neighbors
 */
function highlightNode(nodeId) {
  const neighbors = new Set(graph.neighbors(nodeId));
  neighbors.add(nodeId);
  
  graph.forEachNode((node, attrs) => {
    if (neighbors.has(node)) {
      graph.setNodeAttribute(node, 'color', attrs.originalColor);
      graph.setNodeAttribute(node, 'highlighted', true);
    } else {
      graph.setNodeAttribute(node, 'color', '#ddd');
      graph.setNodeAttribute(node, 'highlighted', false);
    }
  });
  
  graph.forEachEdge((edge, attrs, source, target) => {
    if (neighbors.has(source) && neighbors.has(target)) {
      graph.setEdgeAttribute(edge, 'color', '#333');
      graph.setEdgeAttribute(edge, 'size', 3);
    } else {
      graph.setEdgeAttribute(edge, 'color', '#eee');
      graph.setEdgeAttribute(edge, 'size', 1);
    }
  });
  
  renderer.refresh();
}

/**
 * Reset all highlighting
 */
function resetHighlight() {
  graph.forEachNode((node, attrs) => {
    graph.setNodeAttribute(node, 'color', attrs.originalColor);
    graph.setNodeAttribute(node, 'highlighted', false);
  });
  
  graph.forEachEdge((edge, attrs) => {
    graph.setEdgeAttribute(edge, 'color', attrs.originalColor || '#999');
    graph.setEdgeAttribute(edge, 'size', 2);
  });
  
  renderer.refresh();
}

/**
 * Show node details panel
 */
function showNodeDetails(nodeId) {
  const attrs = graph.getNodeAttributes(nodeId);
  let panel = document.getElementById('node-details');
  
  if (!panel) {
    panel = document.createElement('div');
    panel.id = 'node-details';
    panel.className = 'node-details';
    document.body.appendChild(panel);
  }
  
  const stars = '★'.repeat(attrs.confidence) + '☆'.repeat(5 - attrs.confidence);
  
  panel.innerHTML = `
    <div class="node-details-content">
      <button class="close-btn" onclick="window.hideNodeDetails()">&times;</button>
      <h3>${attrs.label}</h3>
      <div class="node-meta">
        <span class="node-type">${attrs.type}</span>
        <span class="node-confidence">${stars}</span>
      </div>
      <p>${attrs.summary || 'No summary available.'}</p>
      <div class="node-connections">
        <strong>Connected to ${graph.degree(nodeId)} nodes</strong>
      </div>
    </div>
  `;
  
  panel.classList.add('visible');
}

/**
 * Hide node details panel
 */
function hideNodeDetails() {
  const panel = document.getElementById('node-details');
  if (panel) {
    panel.classList.remove('visible');
  }
}

// Make hideNodeDetails globally accessible
window.hideNodeDetails = hideNodeDetails;

/**
 * Create UI controls
 */
function createControls() {
  const container = document.getElementById('graph-container');
  
  // Create controls panel
  const controls = document.createElement('div');
  controls.className = 'graph-controls';
  controls.innerHTML = `
    <div class="control-group">
      <label for="search-input">Search:</label>
      <input type="text" id="search-input" placeholder="Search nodes..." />
    </div>
    
    <div class="control-group">
      <button id="reset-view">Reset View</button>
      <button id="relayout">Re-layout</button>
    </div>
  `;
  
  container.parentElement.insertBefore(controls, container);
  
  // Setup control handlers
  setupControlHandlers();
}

/**
 * Setup control event handlers
 */
function setupControlHandlers() {
  // Search
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      
      graph.forEachNode((node, attrs) => {
        const matches = !searchTerm || 
          attrs.label.toLowerCase().includes(searchTerm) ||
          (attrs.summary && attrs.summary.toLowerCase().includes(searchTerm));
        
        graph.setNodeAttribute(node, 'hidden', !matches);
      });
      
      renderer.refresh();
    });
  }
  
  // Reset view
  const resetBtn = document.getElementById('reset-view');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      renderer.getCamera().setState({ x: 0.5, y: 0.5, ratio: 1 });
    });
  }
  
  // Re-layout
  const relayoutBtn = document.getElementById('relayout');
  if (relayoutBtn) {
    relayoutBtn.addEventListener('click', () => {
      applyLayout();
      renderer.refresh();
    });
  }
}

/**
 * Show error message
 */
function showError(message) {
  const container = document.getElementById('graph-container');
  container.innerHTML = `
    <div class="graph-error">
      <p>${message}</p>
    </div>
  `;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGraph);
} else {
  initGraph();
}
