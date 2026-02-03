/**
 * Chatbot UI - Warm and Simple
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
    btn.setAttribute('aria-label', 'Talk to someone');
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
    return btn;
  },

  createContainer: function() {
    var div = document.createElement('div');
    div.id = 'chat-container';
    div.className = 'chat-container';
    div.style.display = 'none';
    div.innerHTML = 
      '<div class="chat-header">You are worthy of love ❤️</div>' +
      '<div id="chat-messages" class="chat-messages"></div>' +
      '<div class="chat-input-area">' +
        '<input type="text" id="chat-input" class="chat-input" placeholder="How are you feeling?">' +
        '<button id="chat-send" class="chat-send-btn">' +
          '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21L23 12 2 3 2 10l15 2-15 2z"/></svg>' +
        '</button>' +
      '</div>';
    return div;
  },

  addMessage: function(text, isUser, links) {
    var messages = document.getElementById('chat-messages');
    if (!messages) return;
    
    var typing = messages.querySelector('.typing-indicator');
    if (typing) typing.remove();
    
    var msg = document.createElement('div');
    msg.className = 'chat-message ' + (isUser ? 'user' : 'bot');
    msg.textContent = text;
    
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
