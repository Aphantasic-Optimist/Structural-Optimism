/**
 * Structural Optimism Chatbot
 * 
 * A keyword-based guide that helps users navigate structural optimism content.
 * This is a proof of concept: useful guidance without AI, just good algorithms.
 * 
 * Philosophy: Simple systems can be profoundly helpful when designed with care.
 */

(function() {
  'use strict';

  // Expanded knowledge base - maps keywords to responses and links
  const knowledgeBase = {
    // === CORE CONCEPTS ===
    'structural optimism': {
      response: "Structural optimism recognizes that reality is structured toward integration. Not naive optimism (everything will be fine) or nihilism (nothing matters), but the observation that the universe's architecture favors connection over isolation, cooperation over fragmentation.",
      links: [
        { text: 'The Simple Proof (5 min)', url: 'proof/simple/' },
        { text: 'Full Evidence (20 min)', url: 'proof/evidence/' }
      ]
    },
    'what is this': {
      response: "This is Structural Optimism - an evidence-based philosophical framework proving that reality is structured toward integration. Connection helps us survive (2.2M people studied). We experience connection as good (love). The universe rewards what helps us with what feels good.",
      links: [
        { text: 'Start with the Simple Proof', url: 'proof/simple/' },
        { text: 'Explore the Evidence', url: 'proof/evidence/' }
      ]
    },
    'integration': {
      response: "Integration is how separate things combine to create something more complex. Atoms → molecules → cells → organisms → societies. This is reality's fundamental pattern. Complexity emerges through cooperative integration, not competition.",
      links: [
        { text: 'Integration Creates Complexity', url: 'claims/01-integration-creates-complexity/' },
        { text: 'L0-L5 Framework', url: 'explorations/l0-l5-framework/' }
      ]
    },
    'love': {
      response: "Love is how we experience integration. When we connect deeply, we participate in the same process that creates all complexity. This isn't metaphor - love appears in 166 of 166 cultures studied, always described as connection or union.",
      links: [
        { text: 'Love is Universal', url: 'claims/03-love-is-universal/' },
        { text: 'Emotional Integration', url: 'explorations/emotional-integration-theory/' }
      ]
    },
    'me and we': {
      response: "ME AND WE is our core principle: integration without dissolution. You don't lose yourself in connection - you become more yourself through it. Healthy integration preserves individual identity while creating something greater together.",
      links: [
        { text: 'Integration Guide', url: 'safety/integration-guide/' },
        { text: 'What Must Remain Human', url: 'solutions/what-must-remain-human/' }
      ]
    },

    // === EVIDENCE & PROOF ===
    'evidence': {
      response: "Every claim is backed by peer-reviewed research. Core evidence: Holt-Lunstad meta-analysis (2.2M people, 50% mortality reduction), Jankowiak & Fischer (love in 166/166 cultures), and studies on religious community and health.",
      links: [
        { text: 'Full Evidence Page', url: 'proof/evidence/' },
        { text: 'Methodology', url: 'academic/methodology/' }
      ]
    },
    'mortality': {
      response: "Social connection reduces mortality by ~50%. Holt-Lunstad et al. (2010) meta-analysis: 148 studies, 308,849 participants. Effect size (OR 1.50) comparable to quitting smoking, larger than obesity or physical inactivity.",
      links: [
        { text: 'Social Connection Reduces Mortality', url: 'claims/02-social-connection-reduces-mortality/' },
        { text: 'Biological Pathways', url: 'evidence/mechanisms/biological-pathways/' }
      ]
    },
    'proof': {
      response: "Three levels: Simple (5 min) - core argument in plain language. Evidence (20 min) - detailed citations and data. Academic (1 hour) - full scholarly treatment. Start wherever feels right!",
      links: [
        { text: 'Simple Proof (5 min)', url: 'proof/simple/' },
        { text: 'Evidence Proof (20 min)', url: 'proof/evidence/' },
        { text: 'Academic Proof (1 hour)', url: 'proof/academic/' }
      ]
    },
    'study': {
      response: "Our core claims are based on massive studies: 2.2 million people for social connection-mortality link, 166 cultures for love universality, 89,000 people for religious community-health connection. All peer-reviewed.",
      links: [
        { text: 'Evidence Page', url: 'proof/evidence/' },
        { text: 'Methodology', url: 'academic/methodology/' }
      ]
    },
    'research': {
      response: "We use peer-reviewed research with confidence ratings (★ to ★★★★★). Core claims are established (★★★★★). Exploratory theories are marked as speculative (★★☆☆☆). We show our work and welcome corrections.",
      links: [
        { text: 'Confidence Ratings', url: 'academic/meta/confidence-ratings/' },
        { text: 'Request Research', url: 'contribute/research-requests/' }
      ]
    },

    // === THEORY & EXPLORATIONS ===
    'l0-l5': {
      response: "L0-L5 describes consciousness integration levels: L0 (quantum substrate), L0.5 (quantum-classical interface), L1 (biological), L2 (neural), L3 (cognitive), L4 (social), L5 (phenomenological). This is exploratory theory (★★☆☆☆), not established fact.",
      links: [
        { text: 'L0-L5 Framework', url: 'explorations/l0-l5-framework/' },
        { text: 'Quantum-Classical Interface', url: 'explorations/quantum-classical-interface/' }
      ]
    },
    'consciousness': {
      response: "We explore consciousness through integration. The L0-L5 framework is speculative - how consciousness might emerge through integration layers. Note: this is exploratory (★★☆☆☆), not established like our core claims (★★★★★).",
      links: [
        { text: 'L0-L5 Framework', url: 'explorations/l0-l5-framework/' },
        { text: 'Open Questions', url: 'academic/gaps/open-questions/' }
      ]
    },
    'quantum': {
      response: "Quantum aspects are speculative (★★☆☆☆). We explore whether quantum coherence might play a role in consciousness, but this is NOT established science. Core claims about social connection and love are established (★★★★★) and don't depend on quantum theories.",
      links: [
        { text: 'Quantum-Classical Interface', url: 'explorations/quantum-classical-interface/' },
        { text: 'Confidence Ratings', url: 'academic/meta/confidence-ratings/' }
      ]
    },
    'theory': {
      response: "We distinguish established claims (★★★★★) from exploratory theory (★★☆☆☆). Core claims about social connection and love are established. L0-L5 framework and quantum theories are explorations - interesting but unproven.",
      links: [
        { text: 'Explorations', url: 'explorations/' },
        { text: 'Confidence Ratings', url: 'academic/meta/confidence-ratings/' }
      ]
    },
    'emotional': {
      response: "Emotional Integration Theory explains how dopamine-serotonin balance configures our perception and action. Stanford 2024 research validates the DA/5HT 'accelerator-brake' mechanism. This is grounded neuroscience (★★★★☆).",
      links: [
        { text: 'Emotional Integration', url: 'explorations/emotional-integration-theory/' },
        { text: 'Biological Pathways', url: 'evidence/mechanisms/biological-pathways/' }
      ]
    },

    // === PRACTICAL APPLICATION ===
    'how': {
      response: "Practically: prioritize genuine connection over isolation, recognize love as alignment with reality's structure, understand meaning comes from integration. See our safety guide for important considerations.",
      links: [
        { text: 'Integration Guide', url: 'safety/integration-guide/' },
        { text: 'What Must Remain Human', url: 'solutions/what-must-remain-human/' }
      ]
    },
    'apply': {
      response: "To apply structural optimism: 1) Connection is not optional - it's how we survive and thrive. 2) Love is integration, not just emotion. 3) Align choices with reality's structure. See our integration guide.",
      links: [
        { text: 'Integration Guide', url: 'safety/integration-guide/' },
        { text: 'Alignment Enables Flourishing', url: 'claims/04-alignment-enables-flourishing/' }
      ]
    },
    'meaning': {
      response: "Meaning comes from integration - connecting with others, with ideas, with reality's structure. We don't find meaning; we create it through connection. This is structural optimism's practical core.",
      links: [
        { text: 'Simple Proof', url: 'proof/simple/' },
        { text: 'Integration Guide', url: 'safety/integration-guide/' }
      ]
    },
    'happiness': {
      response: "Research shows happiness leads to success (not just the reverse). Happy people have better health, relationships, and outcomes. This supports structural optimism: positive emotional states align us with reality's integrative structure.",
      links: [
        { text: 'Alignment Enables Flourishing', url: 'claims/04-alignment-enables-flourishing/' },
        { text: 'Emotional Integration', url: 'explorations/emotional-integration-theory/' }
      ]
    },
    'flourish': {
      response: "Flourishing comes from alignment with reality's structure. When we integrate - connect, cooperate, love - we align with how the universe works. This isn't wishful thinking; it's what the evidence shows.",
      links: [
        { text: 'Alignment Enables Flourishing', url: 'claims/04-alignment-enables-flourishing/' },
        { text: 'Evidence Page', url: 'proof/evidence/' }
      ]
    },

    // === SKEPTICISM & CRITICISM ===
    'skeptic': {
      response: "Healthy skepticism is welcome! We publish falsification criteria for every claim. We distinguish established facts (★★★★★) from speculative theory (★☆☆☆☆). Core claims are based on massive epidemiological data.",
      links: [
        { text: 'Falsification Criteria', url: 'academic/meta/falsification-criteria/' },
        { text: 'Methodology', url: 'academic/methodology/' }
      ]
    },
    'wrong': {
      response: "We could be wrong! That's why we publish falsification criteria. If you find contradicting evidence, please submit it. We correct errors immediately and show our work. Truth matters more than being right.",
      links: [
        { text: 'Propose Corrections', url: 'contribute/corrections/' },
        { text: 'Falsification Criteria', url: 'academic/meta/falsification-criteria/' }
      ]
    },
    'criticism': {
      response: "We welcome criticism and peer review. Our academic section includes methodology, confidence ratings, and open questions. Specific critiques can be submitted through our contribution system.",
      links: [
        { text: 'Peer Review', url: 'academic/peer-review/' },
        { text: 'Propose Corrections', url: 'contribute/corrections/' }
      ]
    },
    'falsif': {
      response: "Every claim has falsification criteria - what would disprove it. For example, if social connection consistently led to worse health outcomes, our core claim would be falsified. We take falsifiability seriously.",
      links: [
        { text: 'Falsification Criteria', url: 'academic/meta/falsification-criteria/' },
        { text: 'Methodology', url: 'academic/methodology/' }
      ]
    },
    'bias': {
      response: "We actively seek contradicting evidence and publish our methodology. Confidence ratings (★ system) help distinguish established facts from speculation. We welcome corrections and show our reasoning.",
      links: [
        { text: 'Methodology', url: 'academic/methodology/' },
        { text: 'Propose Corrections', url: 'contribute/corrections/' }
      ]
    },

    // === PROBLEMS & SOLUTIONS ===
    'problem': {
      response: "We analyze structural instabilities - systems working against integration. The 'consciousness extraction economy' and recommendation algorithms can fragment connection. We also explore solutions.",
      links: [
        { text: 'Structural Instability', url: 'instability/' },
        { text: 'Solution Possibilities', url: 'solutions/' }
      ]
    },
    'algorithm': {
      response: "Recommendation algorithms can fragment consciousness by optimizing for engagement over connection. We analyze this in 'Consciousness Extraction Economy' and explore solutions in our distributed consciousness model.",
      links: [
        { text: 'Consciousness Extraction Economy', url: 'instability/consciousness-extraction-economy/' },
        { text: 'Distributed Consciousness Model', url: 'solutions/distributed-consciousness-model/' }
      ]
    },
    'social media': {
      response: "Social media platforms often optimize for engagement (dopamine hits) rather than genuine connection. This can fragment consciousness and work against integration. We explore alternatives in our solutions section.",
      links: [
        { text: 'Consciousness Extraction Economy', url: 'instability/consciousness-extraction-economy/' },
        { text: 'Distributed Consciousness Model', url: 'solutions/distributed-consciousness-model/' }
      ]
    },
    'solution': {
      response: "We explore structural solutions: distributed consciousness models, data ownership (SOLID protocol), local AI, and preserving human agency. The goal is technology that serves integration, not extraction.",
      links: [
        { text: 'Solution Possibilities', url: 'solutions/' },
        { text: 'Distributed Consciousness Model', url: 'solutions/distributed-consciousness-model/' }
      ]
    },
    'wall-e': {
      response: "WALL-E shows a future where humans became passive consumers. We explore how to prevent this - keeping humans as active creators, not just consumers of AI-generated content. Agency must remain human.",
      links: [
        { text: 'Preventing WALL-E', url: 'solutions/preventing-wall-e/' },
        { text: 'What Must Remain Human', url: 'solutions/what-must-remain-human/' }
      ]
    },
    'ai': {
      response: "AI should augment human capability, not replace human agency. We explore how to keep humans as active creators while using AI as a tool. The goal is integration, not replacement.",
      links: [
        { text: 'Preventing WALL-E', url: 'solutions/preventing-wall-e/' },
        { text: 'What Must Remain Human', url: 'solutions/what-must-remain-human/' }
      ]
    },
    'technology': {
      response: "Technology can serve integration or extraction. We explore how to build systems that enhance human connection rather than fragment it. Data ownership, local AI, and human agency are key.",
      links: [
        { text: 'Distributed Consciousness Model', url: 'solutions/distributed-consciousness-model/' },
        { text: 'Economic Transition', url: 'solutions/economic-transition/' }
      ]
    },
    'economy': {
      response: "The current attention economy extracts consciousness for profit. We explore alternatives: data ownership, local AI, and economic models that reward integration rather than extraction.",
      links: [
        { text: 'Economic Transition', url: 'solutions/economic-transition/' },
        { text: 'Consciousness Extraction Economy', url: 'instability/consciousness-extraction-economy/' }
      ]
    },

    // === CONTRIBUTION & COMMUNITY ===
    'contribute': {
      response: "You can contribute by: submitting evidence (supporting or contradicting), proposing corrections, requesting research on gaps, or helping with translations. All contributions are reviewed and credited.",
      links: [
        { text: 'Submit Evidence', url: 'contribute/evidence/' },
        { text: 'Propose Corrections', url: 'contribute/corrections/' },
        { text: 'Request Research', url: 'contribute/research-requests/' }
      ]
    },
    'anonymous': {
      response: "Your ideas matter, not your identity. We support anonymous contributions via gitGost for those who fear repercussions or prefer to focus on evidence over authority.",
      links: [
        { text: 'Contributing Guide', url: 'CONTRIBUTING/' },
        { text: 'Submit Evidence', url: 'contribute/evidence/' }
      ]
    },
    'cite': {
      response: "This work has a Zenodo DOI for academic citation. We provide APA, MLA, Chicago, and BibTeX formats. See our academic section for citation information.",
      links: [
        { text: 'Academic Resources', url: 'academic/' },
        { text: 'Peer Review', url: 'academic/peer-review/' }
      ]
    },

    // === SAFETY ===
    'safety': {
      response: "Important: philosophical frameworks can be destabilizing. If you're experiencing distress, please reach out to mental health resources. Our integration guide includes safety considerations.",
      links: [
        { text: 'Safety Information', url: 'safety/' },
        { text: 'Integration Guide', url: 'safety/integration-guide/' }
      ]
    },
    'mental health': {
      response: "If you're struggling, please reach out to mental health resources. Philosophy can be destabilizing. Our safety section includes considerations for engaging with these ideas responsibly.",
      links: [
        { text: 'Safety Information', url: 'safety/' },
        { text: 'Integration Guide', url: 'safety/integration-guide/' }
      ]
    },
    'distress': {
      response: "If you're experiencing distress, please reach out to mental health professionals. These ideas are meant to help, not harm. Take care of yourself first.",
      links: [
        { text: 'Safety Information', url: 'safety/' }
      ]
    },

    // === NAVIGATION HELP ===
    'help': {
      response: "I can help you navigate! Ask about: the core proof, specific claims (integration, love, mortality), L0-L5 theory, how to apply these ideas, problems and solutions, or how to contribute.",
      links: [
        { text: 'Start with the Simple Proof', url: 'proof/simple/' },
        { text: 'Explore All Claims', url: 'claims/' }
      ]
    },
    'start': {
      response: "Start with the Simple Proof (5 minutes) - it presents the core argument in plain language. From there, you can explore evidence, claims, or explorations based on your interests.",
      links: [
        { text: 'Simple Proof (5 min)', url: 'proof/simple/' },
        { text: 'All Claims', url: 'claims/' }
      ]
    },
    'beginner': {
      response: "Welcome! Start with the Simple Proof (5 min) for the core argument. Then explore the Evidence page for supporting research. Take your time - these ideas are meant to be digested slowly.",
      links: [
        { text: 'Simple Proof (5 min)', url: 'proof/simple/' },
        { text: 'Evidence (20 min)', url: 'proof/evidence/' }
      ]
    },
    'overview': {
      response: "Structural Optimism: Reality is structured toward integration. Evidence: social connection reduces mortality 50%, love is universal (166 cultures). Implication: align with reality's structure through connection.",
      links: [
        { text: 'Simple Proof', url: 'proof/simple/' },
        { text: 'All Claims', url: 'claims/' }
      ]
    },

    // === SPECIFIC CLAIMS ===
    'complexity': {
      response: "Integration creates complexity - this is the first core claim. Atoms integrate into molecules, cells into organisms, individuals into societies. Complexity emerges through cooperative integration.",
      links: [
        { text: 'Integration Creates Complexity', url: 'claims/01-integration-creates-complexity/' }
      ]
    },
    'connection': {
      response: "Social connection reduces mortality by 50% - this is established science (★★★★★). The effect is comparable to quitting smoking and larger than obesity or physical inactivity.",
      links: [
        { text: 'Social Connection Reduces Mortality', url: 'claims/02-social-connection-reduces-mortality/' },
        { text: 'Biological Pathways', url: 'evidence/mechanisms/biological-pathways/' }
      ]
    },
    'universal': {
      response: "Love is universal - found in 166 of 166 cultures studied (Jankowiak & Fischer 1992). Always described as a form of connection or union. This is established science (★★★★★).",
      links: [
        { text: 'Love is Universal', url: 'claims/03-love-is-universal/' }
      ]
    },
    'alignment': {
      response: "Alignment enables flourishing - when we align with reality's integrative structure, we thrive. This is supported by research on happiness, social connection, and health outcomes.",
      links: [
        { text: 'Alignment Enables Flourishing', url: 'claims/04-alignment-enables-flourishing/' }
      ]
    },

    // === PHILOSOPHICAL CONTEXT ===
    'nihilism': {
      response: "We're not nihilists. We accept that life has no cosmic meaning, but observe that reality IS structured toward integration. Meaning comes from connection, not from the universe having a plan.",
      links: [
        { text: 'Simple Proof', url: 'proof/simple/' },
        { text: 'Academic Proof', url: 'proof/academic/' }
      ]
    },
    'naive': {
      response: "We're not naive optimists. We don't believe everything will be fine or that the universe has a plan. We observe that reality's structure favors integration - and we can align with that.",
      links: [
        { text: 'Simple Proof', url: 'proof/simple/' },
        { text: 'Evidence', url: 'proof/evidence/' }
      ]
    },
    'absurd': {
      response: "Like Camus, we accept the absurd - life has no inherent meaning. But we observe that reality is structured toward integration. We create meaning through connection, not despite meaninglessness but because of it.",
      links: [
        { text: 'Academic Proof', url: 'proof/academic/' },
        { text: 'Simple Proof', url: 'proof/simple/' }
      ]
    },
    'existential': {
      response: "Structural optimism is compatible with existentialism. We accept that we must create our own meaning. We observe that reality's structure suggests HOW to create meaning: through integration and connection.",
      links: [
        { text: 'Academic Proof', url: 'proof/academic/' },
        { text: 'Integration Guide', url: 'safety/integration-guide/' }
      ]
    },
    'religion': {
      response: "Religious community reduces mortality (89K people studied). We don't claim religion is true, but observe that religious community provides integration benefits. The mechanism is connection, not belief.",
      links: [
        { text: 'Evidence Page', url: 'proof/evidence/' },
        { text: 'Biological Pathways', url: 'evidence/mechanisms/biological-pathways/' }
      ]
    },

    // === CONFIDENCE RATINGS ===
    'star': {
      response: "We use ★ ratings for confidence: ★★★★★ = Established (replicated, peer-reviewed). ★★★★☆ = Strong. ★★★☆☆ = Promising. ★★☆☆☆ = Preliminary. ★☆☆☆☆ = Speculative. Core claims are ★★★★★.",
      links: [
        { text: 'Confidence Ratings', url: 'academic/meta/confidence-ratings/' },
        { text: 'Methodology', url: 'academic/methodology/' }
      ]
    },
    'confidence': {
      response: "Confidence ratings help distinguish established facts from speculation. Core claims (social connection, love universality) are ★★★★★. Exploratory theories (L0-L5, quantum) are ★★☆☆☆.",
      links: [
        { text: 'Confidence Ratings', url: 'academic/meta/confidence-ratings/' },
        { text: 'Methodology', url: 'academic/methodology/' }
      ]
    },
    'speculative': {
      response: "Speculative content (★☆☆☆☆ to ★★☆☆☆) is clearly marked. L0-L5 framework and quantum theories are explorations, not established science. Core claims about social connection are established (★★★★★).",
      links: [
        { text: 'Explorations', url: 'explorations/' },
        { text: 'Confidence Ratings', url: 'academic/meta/confidence-ratings/' }
      ]
    }
  };


  // Quick action suggestions
  const quickActions = [
    { text: "What is this?", query: "what is this" },
    { text: "Show me proof", query: "proof" },
    { text: "Core claims", query: "evidence" },
    { text: "How to apply", query: "apply" },
    { text: "Problems & solutions", query: "solution" }
  ];

  // Default response when no match found
  const defaultResponse = {
    response: "I'm not sure about that specific topic. I can help with: the core proof, claims (integration, love, mortality), L0-L5 theory, practical application, problems and solutions, or how to contribute. What interests you?",
    links: [
      { text: 'Start with the Simple Proof', url: 'proof/simple/' },
      { text: 'Browse All Claims', url: 'claims/' },
      { text: 'Explore Solutions', url: 'solutions/' }
    ]
  };

  // Welcome message
  const welcomeMessage = {
    response: "Hi! I'm here to help you explore structural optimism - the evidence-based observation that reality is structured toward integration. Ask me anything, or try the quick actions below!",
    links: []
  };

  // State
  let isOpen = false;
  let messages = [];

  // Get base URL for links
  function getBaseUrl() {
    const path = window.location.pathname;
    const match = path.match(/^(.*?\/(?:Structural-Optimism\/)?)/);
    return match ? match[1] : '/';
  }

  // Find best matching response - improved matching algorithm
  function findResponse(query) {
    const lowerQuery = query.toLowerCase();
    
    // Direct keyword match (highest priority)
    for (const [keyword, data] of Object.entries(knowledgeBase)) {
      if (lowerQuery.includes(keyword)) {
        return data;
      }
    }
    
    // Word-by-word partial matching
    const words = lowerQuery.split(/\s+/).filter(w => w.length >= 3);
    let bestMatch = null;
    let bestScore = 0;
    
    for (const word of words) {
      for (const [keyword, data] of Object.entries(knowledgeBase)) {
        const keywordWords = keyword.split(/\s+/);
        for (const kw of keywordWords) {
          // Check if word starts with keyword or keyword starts with word
          if (kw.startsWith(word) || word.startsWith(kw)) {
            const score = Math.min(word.length, kw.length);
            if (score > bestScore) {
              bestScore = score;
              bestMatch = data;
            }
          }
        }
      }
    }
    
    return bestMatch || defaultResponse;
  }

  // Create message HTML
  function createMessageHTML(text, isUser, links = []) {
    const baseUrl = getBaseUrl();
    let html = `<div class="chat-message ${isUser ? 'user' : 'bot'}">${escapeHtml(text)}`;
    
    if (links.length > 0) {
      html += '<div class="chat-links">';
      for (const link of links) {
        const fullUrl = link.url.startsWith('http') ? link.url : baseUrl + link.url;
        html += `<a href="${fullUrl}" class="chat-link">→ ${escapeHtml(link.text)}</a>`;
      }
      html += '</div>';
    }
    
    html += '</div>';
    return html;
  }

  // Escape HTML to prevent XSS
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Add message to chat
  function addMessage(text, isUser, links = []) {
    const messagesContainer = document.querySelector('.chat-messages');
    if (!messagesContainer) return;
    
    const typing = messagesContainer.querySelector('.typing-indicator');
    if (typing) typing.remove();
    
    messagesContainer.insertAdjacentHTML('beforeend', createMessageHTML(text, isUser, links));
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    messages.push({ text, isUser, links });
  }

  // Show typing indicator
  function showTyping() {
    const messagesContainer = document.querySelector('.chat-messages');
    if (!messagesContainer) return;
    
    messagesContainer.insertAdjacentHTML('beforeend', `
      <div class="typing-indicator">
        <span></span><span></span><span></span>
      </div>
    `);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }


  // Handle user input
  function handleInput(query) {
    if (!query.trim()) return;
    
    addMessage(query, true);
    showTyping();
    
    setTimeout(() => {
      const response = findResponse(query);
      addMessage(response.response, false, response.links);
    }, 400 + Math.random() * 400);
  }

  // Handle quick action click
  function handleQuickAction(query) {
    const input = document.querySelector('.chat-input');
    if (input) input.value = '';
    handleInput(query);
  }

  // Toggle chat open/closed
  function toggleChat() {
    isOpen = !isOpen;
    const container = document.querySelector('.chat-container');
    const toggle = document.querySelector('.chat-toggle');
    
    if (container) container.classList.toggle('open', isOpen);
    if (toggle) {
      toggle.classList.toggle('active', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
    }
    
    if (isOpen) {
      const input = document.querySelector('.chat-input');
      if (input) setTimeout(() => input.focus(), 300);
      
      if (messages.length === 0) {
        setTimeout(() => addMessage(welcomeMessage.response, false, welcomeMessage.links), 300);
      }
    }
  }

  // Create chat UI
  function createChatUI() {
    const container = document.createElement('div');
    container.className = 'chat-container';
    container.setAttribute('role', 'dialog');
    container.setAttribute('aria-label', 'Chat assistant');
    container.innerHTML = `
      <div class="chat-header">
        <div class="chat-header-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div class="chat-header-text">
          <h3>Structural Optimism Guide</h3>
          <p>Ask me anything about the proof</p>
        </div>
      </div>
      <div class="chat-messages" role="log" aria-live="polite"></div>
      <div class="chat-quick-actions">
        ${quickActions.map(action => 
          `<button class="quick-action-btn" data-query="${escapeHtml(action.query)}">${escapeHtml(action.text)}</button>`
        ).join('')}
      </div>
      <div class="chat-input-area">
        <textarea class="chat-input" placeholder="Ask a question..." rows="1" aria-label="Type your question"></textarea>
        <button class="chat-send-btn" aria-label="Send message">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </button>
      </div>
    `;
    
    const toggle = document.createElement('button');
    toggle.className = 'chat-toggle';
    toggle.setAttribute('aria-label', 'Open chat assistant');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = `
      <svg class="chat-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
      </svg>
      <svg class="close-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
    `;
    
    document.body.appendChild(container);
    document.body.appendChild(toggle);
    
    toggle.addEventListener('click', toggleChat);
    
    container.querySelectorAll('.quick-action-btn').forEach(btn => {
      btn.addEventListener('click', () => handleQuickAction(btn.dataset.query));
    });
    
    const input = container.querySelector('.chat-input');
    const sendBtn = container.querySelector('.chat-send-btn');
    
    sendBtn.addEventListener('click', () => {
      handleInput(input.value);
      input.value = '';
      input.style.height = 'auto';
    });
    
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleInput(input.value);
        input.value = '';
        input.style.height = 'auto';
      }
    });
    
    input.addEventListener('input', () => {
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 100) + 'px';
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) toggleChat();
    });
  }

  // Initialize
  function init() {
    if (window.matchMedia('print').matches) return;
    createChatUI();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
