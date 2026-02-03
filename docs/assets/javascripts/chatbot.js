/**
 * Chatbot Controller - Compassionate Matching
 */
(function() {
  var isOpen = false;
  var hasWelcomed = false;

  function findResponse(query) {
    var q = query.toLowerCase();
    var responses = window.CHATBOT_DATA.responses;
    
    // Check each keyword
    for (var key in responses) {
      if (responses.hasOwnProperty(key) && q.indexOf(key) !== -1) {
        return { text: responses[key][0], links: responses[key][1] };
      }
    }
    
    // Warm fallback - never dismissive
    return { text: window.CHATBOT_DATA.fallback, links: [] };
  }

  function handleInput() {
    var input = document.getElementById('chat-input');
    if (!input) return;
    var query = input.value.trim();
    if (!query) return;
    
    input.value = '';
    window.ChatbotUI.addMessage(query, true);
    window.ChatbotUI.showTyping();
    
    setTimeout(function() {
      var r = findResponse(query);
      window.ChatbotUI.addMessage(r.text, false, r.links);
    }, 500); // Slightly longer pause feels more human
  }

  function toggle() {
    isOpen = !isOpen;
    var container = document.getElementById('chat-container');
    if (container) container.style.display = isOpen ? 'flex' : 'none';
    
    if (isOpen && !hasWelcomed) {
      hasWelcomed = true;
      window.ChatbotUI.addMessage(window.CHATBOT_DATA.welcome, false, []);
    }
    
    if (isOpen) {
      var input = document.getElementById('chat-input');
      if (input) input.focus();
    }
  }

  function init() {
    var toggleBtn = window.ChatbotUI.createToggle();
    var container = window.ChatbotUI.createContainer();
    
    document.body.appendChild(toggleBtn);
    document.body.appendChild(container);
    
    toggleBtn.onclick = toggle;
    document.getElementById('chat-send').onclick = handleInput;
    document.getElementById('chat-input').onkeydown = function(e) {
      if (e.key === 'Enter') handleInput();
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
