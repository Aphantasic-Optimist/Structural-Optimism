/**
 * Chatbot Knowledge Base
 * Keyword -> Response mappings
 */
window.CHATBOT_DATA = {
  welcome: "Hi! I can help you explore structural optimism. Try: proof, evidence, connection, solutions.",
  fallback: "Not sure about that. Try: proof, evidence, connection, love, solutions.",
  
  responses: {
    'hello': ["Hello! What would you like to know?", [["Start Here", "proof/simple/"]]],
    'hi': ["Hi! Ask about proof, evidence, or solutions.", [["Start Here", "proof/simple/"]]],
    'what is': ["Structural Optimism: Reality is structured toward integration. Social connection reduces mortality by 50%. Love is universal across 166 cultures.", [["Simple Proof", "proof/simple/"]]],
    'proof': ["Three levels: Simple (5 min), Evidence (20 min), Academic (1 hour).", [["Simple", "proof/simple/"], ["Evidence", "proof/evidence/"], ["Academic", "proof/academic/"]]],
    'evidence': ["Core: Holt-Lunstad meta-analysis (2.2M people, 50% mortality reduction), love in 166/166 cultures.", [["Evidence", "proof/evidence/"]]],
    'connection': ["Social connection reduces mortality by 50% - established science.", [["Full Claim", "claims/02-social-connection-reduces-mortality/"]]],
    'love': ["Love is universal - found in all 166 cultures studied.", [["Love Claim", "claims/03-love-is-universal/"]]],
    'mortality': ["Social connection reduces mortality ~50%. Holt-Lunstad 2010: 148 studies.", [["Full Claim", "claims/02-social-connection-reduces-mortality/"]]],
    'solution': ["We explore: distributed consciousness, data ownership, local AI, human agency.", [["Solutions", "solutions/"]]],
    'problem': ["Attention economy extracts consciousness. Algorithms optimize engagement, not connection.", [["Problem", "problem/"]]],
    'apply': ["Prioritize connection, recognize love as integration, align with reality.", [["Guide", "safety/integration-guide/"]]],
    'help': ["I help with: proof, evidence, claims, solutions, problems, application.", [["Start", "proof/simple/"]]]
  }
};
