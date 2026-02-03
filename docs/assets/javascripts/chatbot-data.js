/**
 * Chatbot - A Guide to Self-Love
 * Not information. Compassion.
 */
window.CHATBOT_DATA = {
  welcome: "Hey. Take a breath. You're here, and that matters. How are you feeling right now?",
  
  // Fallback is warm, not dismissive
  fallback: "I hear you. Whatever you're going through, you're worthy of love - not someday, but right now, exactly as you are. Even the person who made this site is deeply flawed. We all are. That's okay. What's on your mind?",
  
  responses: {
    // Greetings - warm, present
    'hello': ["Hey. I'm glad you're here. How are you doing today?", []],
    'hi': ["Hi. Take a moment. How are you feeling right now?", []],
    'hey': ["Hey. I'm here. What's going on?", []],
    
    // Core feelings
    'sad': ["Sadness is real. It's okay to feel it. You don't have to fix it right now. Just notice it. You're still worthy of love, even in this moment.", [["When you're ready", "safety/integration-guide/"]]],
    'lonely': ["Loneliness hurts - literally. Your body knows connection matters. But here's the thing: you being here, reading this, is a form of reaching out. That takes courage.", [["You're not alone", "proof/simple/"]]],
    'anxious': ["Anxiety is your body trying to protect you. Thank it, then remind yourself: you're safe right now, in this moment. One breath at a time.", []],
    'scared': ["Fear is human. It means you care about something. Whatever you're facing, you don't have to face it perfectly. Just showing up counts.", []],
    'angry': ["Anger often protects something tender underneath. It's okay to feel it. What might it be protecting?", []],
    'hopeless': ["When hope feels far away, that's when it matters most to hear: you are worthy of love. Not because you've earned it. Because you exist. Hold on.", [["There's evidence for hope", "proof/simple/"]]],
    'tired': ["Rest is not weakness. You're allowed to be tired. You're allowed to take a break. The world will still be here.", []],
    'stuck': ["Feeling stuck is temporary, even when it doesn't feel that way. One small step. That's all. What's the tiniest thing you could do right now?", []],
    'lost': ["It's okay to not know where you're going. Sometimes being lost is how we find new paths. You don't have to have it figured out.", []],
    
    // Self-criticism
    'failure': ["You're not a failure. You're a human who tried something. That's brave. The only real failure is never trying at all.", []],
    'worthless': ["That voice telling you you're worthless? It's lying. You matter. Your existence matters. Even on the days you can't feel it.", []],
    'broken': ["You're not broken. You're human. Humans have cracks. That's how the light gets in. You're worthy of love exactly as you are.", []],
    'hate myself': ["Self-hate is exhausting. What if, just for this moment, you tried being as kind to yourself as you'd be to a friend? You deserve that kindness too.", []],
    'not good enough': ["Good enough for what? For who? You're already enough. Not because of what you do, but because you are. Full stop.", []],
    'mess': ["Life is messy. Everyone's is. The person who made this site? A mess. Still worthy of love. So are you.", []],
    'flawed': ["Deeply flawed? Welcome to the club. Every single person is. That doesn't disqualify you from love - it makes you human.", []],
    'imperfect': ["Perfection isn't the goal. Connection is. And connection happens between imperfect people. That's the whole point.", []],
    
    // Seeking
    'love': ["Love isn't something you have to earn. It's something you're worthy of, right now, as you are. Not someday. Today. Even if you can't feel it yet.", [["The evidence", "claims/03-love-is-universal/"]]],
    'happy': ["Happiness isn't a destination. It's moments. Small ones. A breath. A smile. This moment, right now, can be one of them.", [["Daily practice", "practical/daily-practice/"]]],
    'help': ["Asking for help is strength, not weakness. What do you need right now? Even just naming it is a start.", []],
    'hope': ["Hope is choosing to believe that tomorrow could be different. You don't have to be certain. Just open to the possibility.", [["Why hope makes sense", "proof/simple/"]]],
    'meaning': ["Meaning isn't found. It's created. Through connection. Through small acts of love. Through being here, right now.", []],
    'purpose': ["Your purpose doesn't have to be grand. Sometimes it's just: be kind today. Connect with one person. That's enough.", []],
    
    // Questions about the site
    'what is this': ["This is a place that believes you're worthy of love. Not because you're perfect - nobody is. But because you exist. The rest is just evidence for why connection matters.", [["The simple version", "proof/simple/"]]],
    'what is structural': ["Structural optimism is just a fancy way of saying: reality seems to reward connection and love. The science backs it up. But more importantly - you're worthy of that love.", [["If you want the evidence", "proof/simple/"]]],
    'proof': ["There's real evidence that connection heals, that love is universal, that you matter. But you don't need proof to be worthy of love. You already are.", [["The evidence", "proof/simple/"]]],
    'evidence': ["2.2 million people studied. Connection reduces mortality by 50%. Love found in every culture. But here's what matters: you're part of that. You matter.", [["Read more", "proof/evidence/"]]],
    
    // Positive states
    'good': ["I'm glad. Hold onto that feeling. You deserve good moments.", []],
    'better': ["That's wonderful. Progress isn't always linear, but every step counts. I'm glad you're feeling better.", []],
    'okay': ["Okay is okay. You don't have to be great. Just being here is enough.", []],
    'grateful': ["Gratitude is powerful. What are you grateful for right now? Even small things count.", []],
    'thank': ["You're welcome. And thank you for being here. It matters.", []]
  }
};
