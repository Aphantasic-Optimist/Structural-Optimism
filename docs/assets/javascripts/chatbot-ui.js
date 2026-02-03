/**
 * Chatbot UI Components
 * Creates and manages DOM elements
 */
window.ChatbotUI = {
  
  getBaseUrl: function() {
    var path = window.location.pathname;
    var idx = path.indexOf('Structural-Optimism');
    return idx !== -1 ? path.substring(0, idx + 19) + '/' : '/';
  },

  createToggle: function() {
    var btn = document.createElement('button');
    btn.id = 'chat-toggle';
    btn.className = 'chat-toggle';
    btn.setAttribute('aria-label', 'Open chat');
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>';
    return btn;
  },

  createContainer: function() {
    var div = document.createElement('div');
    div.id = 'chat-container';
    div.className = 'chat-container';
    div.style.display = 'none';
    div.innerHTML = 
      '<div class="chat-header">Structural Optimism Guide</div>' +
      '<div id="chat-messages" class="chat-messages"></div>' +
      '<div class="chat-input-area">' +
        '<input type="text" id="chat-input" class="chat-input" placeholder="Ask a question...">' +
        '<button id="chat-send" class="chat-send-btn">' +
          '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21L23 12 2 3 2 10l15 2-15 2z"/></svg>' +
        '</button>' +
      '</div>';
    return div;
  },

  addMessage: function(text, isUser, links) {
    var messages = document.getElementById('chat-messages');
    if (!messages) return;
    
    // Remove typing indicator
    var typing = messages.querySelector('.typing-indicator');
    if (typing) typing.remove();
    
    // Create message
    var msg = document.createElement('div');
    msg.className = 'chat-message ' + (isUser ? 'user' : 'bot');
    msg.textContent = text;
    
    // Add links
    if (links && links.length && !isUser) {
      var linksDiv = document.createElement('div');
      linksDiv.className = 'chat-links';
      var base = this.getBaseUrl();
      for (var i = 0; i < links.length; i++) {
        var a = document.createElement('a');
        a.href = base + links[i][1];
        a.className = 'chat-link';
        a.textContent = '→ ' + links[i][0];
        linksDiv.appendChild(a);
      }
      msg.appendChild(linksDiv);
    }
    
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  },

  showTyping: function() {
    var messages = document.getElementById('chat-messages');
    if (!messages) return;
    var typing = document.createElement('div');
    typing.className = 'typing-indicator';
    typing.innerHTML = '<span></span><span></span><span></span>';
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;
  }
};
