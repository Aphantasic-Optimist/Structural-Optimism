/**
 * Self-Love Guide
 * A decision tree for practicing self-compassion while doubting
 * Not AI - just human words, linked together
 */
(function() {
  'use strict';

  // The journey - each node has text and choices that lead to other nodes
  var NODES = {
    start: {
      text: "Hey. Take a breath. You clicked the heart, which means some part of you is reaching out. That's brave.",
      choices: [
        ["I'm struggling right now", "struggling"],
        ["I'm just curious", "curious"],
        ["I don't know why I clicked", "dontknow"]
      ]
    },

    // Entry branches
    struggling: {
      text: "I hear you. Struggling is human. You don't have to fix anything right now. Just be here.",
      choices: [
        ["I feel lonely", "lonely"],
        ["I feel not good enough", "notgoodenough"],
        ["I feel anxious or scared", "anxious"],
        ["I feel hopeless", "hopeless"],
        ["Something else", "somethingelse"]
      ]
    },
    curious: {
      text: "Curiosity is beautiful. This is a simple guide - no AI, just words linked together - to help practice self-compassion. Even while doubting.",
      choices: [
        ["What is self-love anyway?", "whatisselflove"],
        ["I'm skeptical this can help", "skeptical"],
        ["Actually, I am struggling", "struggling"]
      ]
    },
    dontknow: {
      text: "That's okay. You don't need a reason. Sometimes we reach out before we know why. Trust that impulse.",
      choices: [
        ["I guess I'm not feeling great", "struggling"],
        ["I'm actually doing okay", "doingokay"],
        ["I'm just exploring", "curious"]
      ]
    },

    // Core feeling branches
    lonely: {
      text: "Loneliness hurts - literally. Your body knows connection matters. But here's the thing: you reaching out right now? That's connection. That takes courage.",
      choices: [
        ["But I'm alone right now", "alonerightnow"],
        ["I feel like no one understands me", "nooneunderstands"],
        ["I push people away", "pushaway"],
        ["← Back", "struggling"]
      ]
    },
    notgoodenough: {
      text: "That voice telling you you're not enough? It's lying. You don't have to earn your worth. You have it already, just by existing.",
      choices: [
        ["But I keep failing", "keepfailing"],
        ["Everyone else seems to have it together", "everyoneelse"],
        ["I don't believe that", "dontbelieve"],
        ["← Back", "struggling"]
      ]
    },
    anxious: {
      text: "Anxiety is your body trying to protect you. It means you care about something. Thank it, then remind yourself: you're safe right now, in this moment.",
      choices: [
        ["I can't stop worrying", "cantstopworrying"],
        ["I feel overwhelmed", "overwhelmed"],
        ["What if things go wrong?", "whatifwrong"],
        ["← Back", "struggling"]
      ]
    },
    hopeless: {
      text: "When hope feels far away, that's when it matters most to hear: you are worthy of love. Not because you've earned it. Because you exist. Hold on.",
      choices: [
        ["I've felt this way for a long time", "longtime"],
        ["What's the point?", "whatsthepoint"],
        ["I need something to hold onto", "holdonto"],
        ["← Back", "struggling"]
      ]
    },
    somethingelse: {
      text: "Whatever you're feeling, it's valid. You don't have to name it perfectly. Just being here, acknowledging something is hard - that's enough.",
      choices: [
        ["I feel numb", "numb"],
        ["I'm angry", "angry"],
        ["I'm tired of trying", "tired"],
        ["I've done things I regret", "regret"],
        ["← Back", "struggling"]
      ]
    },

    // Deeper branches - lonely
    alonerightnow: {
      text: "Being alone and being lonely aren't the same thing. But right now, you're reading words someone wrote hoping to help a stranger. That's a thread of connection.",
      choices: [
        ["That actually helps a little", "helpslittle"],
        ["I still feel alone", "stillalone"],
        ["← Back", "lonely"]
      ]
    },
    nooneunderstands: {
      text: "Feeling misunderstood is painful. But here's a secret: everyone feels this sometimes. The person who made this site? Deeply flawed, often misunderstood. Still worthy of love. So are you.",
      choices: [
        ["How can you say that without knowing me?", "howcanyousay"],
        ["I want to believe that", "wanttobelieve"],
        ["← Back", "lonely"]
      ]
    },
    pushaway: {
      text: "Pushing people away is often protection. You learned it for a reason. But you can also learn new patterns. One small step at a time. No rush.",
      choices: [
        ["I'm scared of getting hurt", "scaredofhurt"],
        ["I don't know how to connect", "dontknowconnect"],
        ["← Back", "lonely"]
      ]
    },

    // Deeper branches - not good enough
    keepfailing: {
      text: "Failing means you tried. That's not weakness - that's courage. The only real failure is never trying at all. And you're here, trying right now.",
      choices: [
        ["But I keep making the same mistakes", "samemistakes"],
        ["I'm tired of trying", "tired"],
        ["← Back", "notgoodenough"]
      ]
    },
    everyoneelse: {
      text: "Social media lies. Everyone is struggling with something. The people who look like they have it together? They're comparing themselves to others too.",
      choices: [
        ["I know, but it still hurts", "stillhurts"],
        ["Maybe I'm just worse at life", "worseatlife"],
        ["← Back", "notgoodenough"]
      ]
    },
    dontbelieve: {
      text: "You don't have to believe it yet. Self-love isn't a switch you flip. It's a practice. Some days you'll doubt. That's okay. The doubt doesn't disqualify you.",
      choices: [
        ["How do I practice it?", "howpractice"],
        ["I've tried and it doesn't work", "triednowork"],
        ["← Back", "notgoodenough"]
      ]
    },

    // Deeper branches - anxious
    cantstopworrying: {
      text: "The mind loves to spin. Try this: name 5 things you can see right now. Just notice them. This moment is okay. You're okay in this moment.",
      choices: [
        ["Okay, I did that", "didgrounding"],
        ["My mind won't stop", "mindwontstop"],
        ["← Back", "anxious"]
      ]
    },
    overwhelmed: {
      text: "When everything feels like too much, zoom in. What's one tiny thing you could do? Not fix everything. Just one small thing. That's enough.",
      choices: [
        ["I don't even know where to start", "wheretostart"],
        ["Even small things feel hard", "smallthingshard"],
        ["← Back", "anxious"]
      ]
    },
    whatifwrong: {
      text: "What if things go right? Your brain is trying to protect you by imagining danger. But it's not always accurate. Right now, in this moment, you're okay.",
      choices: [
        ["But bad things have happened before", "badbefore"],
        ["I can't control the future", "cantcontrol"],
        ["← Back", "anxious"]
      ]
    },

    // Deeper branches - hopeless
    longtime: {
      text: "Carrying this for a long time is exhausting. You've been so strong. It's okay to be tired. But please - if this is really heavy, reach out to someone who can help.",
      choices: [
        ["I don't want to burden anyone", "dontburden"],
        ["I've tried getting help", "triedhelp"],
        ["Show me resources", "resources"],
        ["← Back", "hopeless"]
      ]
    },
    whatsthepoint: {
      text: "The point isn't some grand purpose. It's small moments. A breath. A kind word. This moment right now. You being here, reading this - that's a point.",
      choices: [
        ["That feels too small", "toosmall"],
        ["I want more than small moments", "wantmore"],
        ["← Back", "hopeless"]
      ]
    },
    holdonto: {
      text: "Hold onto this: you matter. Not because of what you do. Because you exist. The universe spent 13.8 billion years making you. You're not an accident.",
      choices: [
        ["I needed to hear that", "neededtohear"],
        ["I'm not sure I believe it", "notsurebelieve"],
        ["← Back", "hopeless"]
      ]
    },

    // Resolution nodes - gentle landings
    helpslittle: {
      text: "Good. Little helps add up. You don't need a big breakthrough. Just small moments of okay. This was one of them.",
      choices: [
        ["What else might help?", "whatelsemighthelp"],
        ["I want to start over", "start"],
        ["I'm ready to close this", "closing"]
      ]
    },
    stillalone: {
      text: "The feeling is real, even if the thought isn't fully true. Be gentle with yourself. Loneliness is hard. You're allowed to feel it without fixing it.",
      choices: [
        ["What can I do?", "whatcanido"],
        ["← Back", "alonerightnow"]
      ]
    },
    howcanyousay: {
      text: "Because worthiness isn't earned. It's not based on your achievements or how well people know you. You're worthy because you're here, alive, trying. That's enough.",
      choices: [
        ["I want to believe that", "wanttobelieve"],
        ["← Back", "nooneunderstands"]
      ]
    },
    wanttobelieve: {
      text: "Wanting to believe is the first step. You don't have to be certain. Just open. That openness is already self-love in action.",
      choices: [
        ["What's next?", "whatsnext"],
        ["I want to start over", "start"],
        ["← Back", "start"]
      ]
    },

    // Practical nodes
    whatelsemighthelp: {
      text: "Small things: a glass of water, a walk outside, texting someone, writing down one thing you're grateful for. Not to fix everything. Just to be kind to yourself.",
      choices: [
        ["I'll try one of those", "tryone"],
        ["That feels too hard right now", "toohard"],
        ["← Back", "helpslittle"]
      ]
    },
    whatcanido: {
      text: "Right now? Just breathe. Later? Maybe reach out to one person. Send a text. Make a small connection. You don't have to solve loneliness today.",
      choices: [
        ["Okay", "okay"],
        ["← Back", "stillalone"]
      ]
    },
    howpractice: {
      text: "Start tiny. When you notice self-criticism, pause. Ask: would I say this to a friend? If not, try softer words. It feels fake at first. That's normal.",
      choices: [
        ["I'll try", "illtry"],
        ["It feels too hard", "toohard"],
        ["← Back", "dontbelieve"]
      ]
    },
    whatsnext: {
      text: "There's no next. Just this moment, then the next one. You came here, you explored, you practiced a tiny bit of self-compassion. That's enough for now.",
      choices: [
        ["Thank you", "thankyou"],
        ["I want to explore more", "start"],
        ["I'm ready to close this", "closing"]
      ]
    },

    // Skeptic branch
    skeptical: {
      text: "Good. Skepticism is healthy. This is just words on a screen. It can't fix anything. But maybe it can offer a moment of gentleness. That's all.",
      choices: [
        ["Okay, I'll give it a chance", "struggling"],
        ["What's the point of this?", "pointofthis"],
        ["← Back", "curious"]
      ]
    },
    pointofthis: {
      text: "The point is practice. Self-love isn't a destination. It's small moments of choosing kindness toward yourself. This is one of those moments.",
      choices: [
        ["Fine, I'll try", "struggling"],
        ["I'm still skeptical", "stillskeptical"],
        ["← Back", "skeptical"]
      ]
    },
    stillskeptical: {
      text: "That's okay. You can be skeptical and still worthy of love. The two aren't opposites. Doubt all you want. You still matter.",
      choices: [
        ["...okay", "okay"],
        ["← Back", "start"]
      ]
    },

    // What is self-love
    whatisselflove: {
      text: "Self-love isn't bubble baths and affirmations (though those are fine). It's treating yourself with the same kindness you'd offer a friend. Especially when you're struggling.",
      choices: [
        ["I'm not good at that", "notgoodatthat"],
        ["That sounds selfish", "soundsselfish"],
        ["← Back", "curious"]
      ]
    },
    notgoodatthat: {
      text: "Most people aren't. We're taught to be hard on ourselves. But you can learn. It's a practice, not a talent. And you're practicing right now.",
      choices: [
        ["How do I practice?", "howpractice"],
        ["← Back", "whatisselflove"]
      ]
    },
    soundsselfish: {
      text: "It's not. You can't pour from an empty cup. Being kind to yourself gives you more to offer others. Self-love and loving others aren't opposites.",
      choices: [
        ["I never thought of it that way", "neverthought"],
        ["← Back", "whatisselflove"]
      ]
    },
    neverthought: {
      text: "New perspectives take time to settle. You don't have to accept it fully. Just let it sit. See how it feels.",
      choices: [
        ["Okay", "okay"],
        ["← Back", "start"]
      ]
    },

    // Doing okay branch
    doingokay: {
      text: "That's wonderful. You don't have to be struggling to practice self-compassion. It's good maintenance, like stretching.",
      choices: [
        ["What can I do when I'm okay?", "whenokay"],
        ["Actually, I'm not fully okay", "struggling"],
        ["← Back", "dontknow"]
      ]
    },
    whenokay: {
      text: "Notice the okay-ness. Don't rush past it. Say to yourself: 'Right now, I'm okay.' Let that be enough. Store it up for harder days.",
      choices: [
        ["That's nice", "thatsnice"],
        ["← Back", "doingokay"]
      ]
    },
    thatsnice: {
      text: "It is. You deserve nice moments. Not because you earned them. Because you're here.",
      choices: [
        ["Thank you", "thankyou"],
        ["← Back", "start"]
      ]
    },

    // Additional deeper nodes
    samemistakes: {
      text: "Patterns are hard to break. But noticing them is the first step. You noticed. That's progress, even if it doesn't feel like it.",
      choices: [
        ["I guess that's true", "guesstrue"],
        ["← Back", "keepfailing"]
      ]
    },
    stillhurts: {
      text: "Yes. Knowing something intellectually doesn't stop it from hurting. Feel the hurt. It's valid. And you're still worthy of love while feeling it.",
      choices: [
        ["Okay", "okay"],
        ["← Back", "everyoneelse"]
      ]
    },
    worseatlife: {
      text: "There's no scoreboard. Life isn't a competition. You're on your own path, with your own challenges. Comparing is a trap.",
      choices: [
        ["I know, but...", "iknowbut"],
        ["← Back", "everyoneelse"]
      ]
    },
    iknowbut: {
      text: "The 'but' is where the work is. You know the truth. The feelings haven't caught up yet. That's okay. Be patient with yourself.",
      choices: [
        ["I'll try", "illtry"],
        ["← Back", "worseatlife"]
      ]
    },
    triednowork: {
      text: "Maybe it wasn't the right time. Maybe you needed different words. Or maybe it planted a seed that hasn't sprouted yet. Don't give up.",
      choices: [
        ["Okay", "okay"],
        ["← Back", "dontbelieve"]
      ]
    },
    didgrounding: {
      text: "Good. That's a skill. When anxiety spins, ground yourself in the present. This moment. This breath. You can always come back here.",
      choices: [
        ["That helped", "thathelped"],
        ["← Back", "cantstopworrying"]
      ]
    },
    mindwontstop: {
      text: "Minds do that. You don't have to stop the thoughts. Just notice them. 'There's that thought again.' You're not your thoughts. You're the one noticing them.",
      choices: [
        ["I'll try that", "illtry"],
        ["← Back", "cantstopworrying"]
      ]
    },
    wheretostart: {
      text: "Start with the next breath. Then the next. That's it. You don't have to see the whole path. Just the next step.",
      choices: [
        ["Okay", "okay"],
        ["← Back", "overwhelmed"]
      ]
    },
    smallthingshard: {
      text: "Then do smaller. Can you take one breath? That's enough. Some days survival is the achievement. You're still here. That counts.",
      choices: [
        ["I took a breath", "tookabreath"],
        ["← Back", "overwhelmed"]
      ]
    },
    tookabreath: {
      text: "You did it. One breath. That's self-care. That's enough for right now.",
      choices: [
        ["Okay", "okay"],
        ["← Back", "start"]
      ]
    },
    badbefore: {
      text: "Yes. Bad things happen. And you survived them. You're here. That resilience is real, even when it doesn't feel like strength.",
      choices: [
        ["I don't feel strong", "dontfeelstrong"],
        ["← Back", "whatifwrong"]
      ]
    },
    dontfeelstrong: {
      text: "Strength doesn't always feel strong. Sometimes it's just getting through the day. You've done that. You're doing it now.",
      choices: [
        ["Okay", "okay"],
        ["← Back", "badbefore"]
      ]
    },
    cantcontrol: {
      text: "You're right. You can't. But you can control this moment. This breath. Being kind to yourself right now. That's enough.",
      choices: [
        ["Okay", "okay"],
        ["← Back", "whatifwrong"]
      ]
    },
    dontburden: {
      text: "You're not a burden. People who care about you want to help. Asking for help is brave, not weak. You'd help a friend, right?",
      choices: [
        ["I guess so", "guessso"],
        ["← Back", "longtime"]
      ]
    },
    guessso: {
      text: "Then let someone help you. You deserve the same kindness you'd give others.",
      choices: [
        ["Okay", "okay"],
        ["Show me resources", "resources"],
        ["← Back", "dontburden"]
      ]
    },
    triedhelp: {
      text: "Sometimes it takes multiple tries to find the right help. Don't give up. The right support is out there. You deserve to find it.",
      choices: [
        ["Okay", "okay"],
        ["Show me resources", "resources"],
        ["← Back", "longtime"]
      ]
    },
    toosmall: {
      text: "Small moments are all we have. Big meaning is made of small moments stacked together. This one counts too.",
      choices: [
        ["I'll try to see it that way", "illtry"],
        ["← Back", "whatsthepoint"]
      ]
    },
    wantmore: {
      text: "That wanting is good. It means you're alive, reaching for something. But don't miss the small moments while chasing big ones.",
      choices: [
        ["Okay", "okay"],
        ["← Back", "whatsthepoint"]
      ]
    },
    neededtohear: {
      text: "I'm glad. Come back whenever you need to hear it again. You matter. Always.",
      choices: [
        ["Thank you", "thankyou"],
        ["← Back", "start"]
      ]
    },
    notsurebelieve: {
      text: "You don't have to be sure. Belief isn't required. Just stay open to the possibility. That's enough.",
      choices: [
        ["Okay", "okay"],
        ["← Back", "holdonto"]
      ]
    },

    // Other feeling branches
    numb: {
      text: "Numbness is often protection. Your mind is giving you a break from feeling too much. It won't last forever. Be gentle with yourself.",
      choices: [
        ["I've been numb for a while", "numbwhile"],
        ["← Back", "somethingelse"]
      ]
    },
    numbwhile: {
      text: "Long numbness might need more support than words on a screen. Consider reaching out to someone - a friend, a counselor. You deserve to feel again.",
      choices: [
        ["Okay", "okay"],
        ["Show me resources", "resources"],
        ["← Back", "numb"]
      ]
    },
    angry: {
      text: "Anger often protects something tender underneath. It's okay to feel it. What might it be protecting?",
      choices: [
        ["I don't know", "dontknowanger"],
        ["I'm angry at myself", "angryatself"],
        ["← Back", "somethingelse"]
      ]
    },
    dontknowanger: {
      text: "That's okay. You don't have to analyze it. Just notice it. Anger is information. It's telling you something matters.",
      choices: [
        ["Okay", "okay"],
        ["← Back", "angry"]
      ]
    },
    angryatself: {
      text: "Self-anger is often self-protection gone wrong. What if you tried curiosity instead? 'Why did I do that?' instead of 'I'm so stupid.'",
      choices: [
        ["I'll try", "illtry"],
        ["← Back", "angry"]
      ]
    },
    tired: {
      text: "Tired of trying is real. Rest is not giving up. Sometimes the bravest thing is to stop pushing and just be.",
      choices: [
        ["I feel guilty resting", "guiltyresting"],
        ["I don't know how to rest", "dontknowrest"],
        ["← Back", "somethingelse"]
      ]
    },
    guiltyresting: {
      text: "Rest isn't earned. You don't have to be productive to deserve a break. Your worth isn't measured in output.",
      choices: [
        ["That's hard to accept", "hardtoaccept"],
        ["← Back", "tired"]
      ]
    },
    hardtoaccept: {
      text: "Most good things are. Let it sit. You don't have to accept it today. Just consider it.",
      choices: [
        ["Okay", "okay"],
        ["← Back", "guiltyresting"]
      ]
    },
    dontknowrest: {
      text: "Rest can be small. Staring out a window. A few deep breaths. Not doing anything for five minutes. It doesn't have to be a vacation.",
      choices: [
        ["I can try that", "illtry"],
        ["← Back", "tired"]
      ]
    },

    // Regret and guilt branch
    regret: {
      text: "Regret means you've grown. The person who did those things isn't quite the same person sitting here now. That's not an excuse - it's hope.",
      choices: [
        ["But I really hurt people", "hurtpeople"],
        ["I keep making the same mistakes", "samemistakes"],
        ["I feel like a bad person", "badperson"],
        ["← Back", "somethingelse"]
      ]
    },
    hurtpeople: {
      text: "That's real. And it matters that you recognize it. Gandhi was racist in his youth. MLK plagiarized. Jefferson enslaved people. They were wrong. They also contributed good. Both are true.",
      choices: [
        ["But I'm not Gandhi", "notgandhi"],
        ["Can I really be forgiven?", "canforgive"],
        ["← Back", "regret"]
      ]
    },
    notgandhi: {
      text: "No one is asking you to be. The point is: flawed people can still be worthy of love. Can still do good. Can still grow. Including you.",
      choices: [
        ["I want to believe that", "wanttobelieve"],
        ["← Back", "hurtpeople"]
      ]
    },
    canforgive: {
      text: "Forgiveness isn't about deserving. It's about releasing. You can make amends where possible, learn from mistakes, and still be worthy of love. Those aren't contradictions.",
      choices: [
        ["How do I make amends?", "makeamends"],
        ["I don't think I can forgive myself", "cantforgiveself"],
        ["← Back", "hurtpeople"]
      ]
    },
    makeamends: {
      text: "Where you can: apologize sincerely, change behavior, make it right. Where you can't: learn, grow, do better going forward. That's all any of us can do.",
      choices: [
        ["Okay", "okay"],
        ["← Back", "canforgive"]
      ]
    },
    cantforgiveself: {
      text: "Self-forgiveness is hard. Maybe start smaller: can you accept that you're human? That humans make mistakes? That you're trying to be better? That's enough for now.",
      choices: [
        ["I'll try", "illtry"],
        ["← Back", "canforgive"]
      ]
    },
    badperson: {
      text: "Good people do bad things. Bad people do good things. 'Good person' and 'bad person' are too simple. You're a person who has done harm and is capable of doing good. Both.",
      choices: [
        ["I sleepwalked into it", "sleepwalked"],
        ["I knew it was wrong", "knewwrong"],
        ["← Back", "regret"]
      ]
    },
    sleepwalked: {
      text: "Society conditions us. We absorb beliefs without questioning them. Waking up is painful - you see what you did while asleep. But waking up is also the first step to doing better.",
      choices: [
        ["That helps", "helpslittle"],
        ["Read about moral exemplars", "exemplarslink"],
        ["← Back", "badperson"]
      ]
    },
    knewwrong: {
      text: "That's harder. But even knowing and doing wrong doesn't make you irredeemable. It makes you human. The question is: what now? You're here. That's a start.",
      choices: [
        ["What now?", "whatnow"],
        ["← Back", "badperson"]
      ]
    },
    whatnow: {
      text: "Now: be gentle with yourself while holding yourself accountable. Make amends where you can. Do better going forward. And accept that you're worthy of love even while growing.",
      choices: [
        ["Okay", "okay"],
        ["← Back", "knewwrong"]
      ]
    },
    exemplarslink: {
      text: "We have a page about moral exemplars - Gandhi, MLK, Einstein, and others. Great ideas from flawed people. It might help to see you're not alone in being imperfect.",
      choices: [
        ["Take me there", "openexemplars"],
        ["Maybe later", "okay"],
        ["← Back", "sleepwalked"]
      ]
    },
    openexemplars: {
      text: "Opening the moral exemplars page for you. Remember: if we required moral perfection from our teachers, we would have no teachers. Including ourselves.",
      choices: [
        ["Thank you", "thankyouexemplars"],
        ["← Back", "start"]
      ]
    },

    scaredofhurt: {
      text: "That fear makes sense. You've been hurt before. But walls that protect you also isolate you. Maybe one small opening?",
      choices: [
        ["That's scary", "thatsscary"],
        ["← Back", "pushaway"]
      ]
    },
    thatsscary: {
      text: "Yes. Courage isn't the absence of fear. It's acting despite it. One tiny step. You don't have to be fearless.",
      choices: [
        ["Okay", "okay"],
        ["← Back", "scaredofhurt"]
      ]
    },
    dontknowconnect: {
      text: "Connection can be small. A smile at a stranger. A text to an old friend. Saying 'how are you?' and actually listening. Start tiny.",
      choices: [
        ["I can try that", "illtry"],
        ["← Back", "pushaway"]
      ]
    },

    // Shared resolution nodes
    toohard: {
      text: "That's okay. Some days everything is too hard. On those days, just existing is enough. You're doing it. That counts.",
      choices: [
        ["Okay", "okay"],
        ["← Back", "start"]
      ]
    },
    tryone: {
      text: "Good. One small thing. That's self-love in action. You're practicing right now.",
      choices: [
        ["Thank you", "thankyou"],
        ["← Back", "start"]
      ]
    },
    illtry: {
      text: "That's all anyone can do. Try. Not perfectly. Just try. You're already doing it.",
      choices: [
        ["Okay", "okay"],
        ["← Back", "start"]
      ]
    },
    guesstrue: {
      text: "It is. Progress often doesn't feel like progress. But you're moving. Trust that.",
      choices: [
        ["Okay", "okay"],
        ["← Back", "start"]
      ]
    },
    thathelped: {
      text: "Good. Remember this tool. It's always available. Ground yourself in the present whenever you need to.",
      choices: [
        ["Thank you", "thankyou"],
        ["← Back", "start"]
      ]
    },
    okay: {
      text: "Okay is good. You don't need more than okay right now. Take care of yourself.",
      choices: [
        ["Start over", "start"],
        ["Close this", "closing"]
      ]
    },
    thankyou: {
      text: "You're welcome. And thank you - for being here, for trying, for being you. Come back anytime.",
      choices: [
        ["Start over", "start"],
        ["Close this", "closing"]
      ]
    },
    thankyouexemplars: {
      text: "You're welcome. The page should be opening. Remember: you're worthy of love, even while growing. Come back anytime.",
      choices: [
        ["Start over", "start"],
        ["Close this", "closing"]
      ]
    },
    closing: {
      text: "Take care of yourself. You're worthy of love - not someday, but right now. Come back whenever you need to. ❤️",
      choices: [
        ["Start over", "start"]
      ]
    },

    // Resources
    resources: {
      text: "If you're struggling, please reach out: Crisis Text Line (text HOME to 741741), National Suicide Prevention Lifeline (988), or talk to someone you trust. You deserve support.",
      choices: [
        ["Thank you", "thankyou"],
        ["← Back", "start"]
      ]
    }
  };

  var isOpen = false;
  var currentNode = 'start';

  function getBaseUrl() {
    var path = window.location.pathname;
    var idx = path.indexOf('Structural-Optimism');
    return idx !== -1 ? path.substring(0, idx + 19) + '/' : '/';
  }

  function renderNode(nodeId) {
    currentNode = nodeId;
    var node = NODES[nodeId];
    if (!node) return;

    var content = document.getElementById('guide-content');
    if (!content) return;

    var html = '<p class="guide-text">' + node.text + '</p>';
    html += '<div class="guide-choices">';
    for (var i = 0; i < node.choices.length; i++) {
      var choice = node.choices[i];
      html += '<button class="guide-choice" data-target="' + choice[1] + '">' + choice[0] + '</button>';
    }
    html += '</div>';

    content.innerHTML = html;

    // Add click handlers
    var buttons = content.querySelectorAll('.guide-choice');
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].onclick = function() {
        var target = this.getAttribute('data-target');
        if (target === 'closing') {
          toggle();
        } else if (target === 'openexemplars' || target === 'thankyouexemplars') {
          window.open(getBaseUrl() + 'philosophy/moral-exemplars/', '_blank');
          renderNode(target);
        } else {
          renderNode(target);
        }
      };
    }
  }

  function toggle() {
    isOpen = !isOpen;
    var container = document.getElementById('guide-container');
    var toggleBtn = document.getElementById('guide-toggle');
    
    if (container) {
      container.classList.toggle('open', isOpen);
    }
    if (toggleBtn) {
      toggleBtn.classList.toggle('active', isOpen);
    }
    
    if (isOpen) {
      renderNode('start');
    }
  }

  function createUI() {
    // Toggle button (heart)
    var toggleBtn = document.createElement('button');
    toggleBtn.id = 'guide-toggle';
    toggleBtn.className = 'chat-toggle';
    toggleBtn.setAttribute('aria-label', 'Open self-love guide');
    toggleBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
    toggleBtn.onclick = toggle;

    // Container
    var container = document.createElement('div');
    container.id = 'guide-container';
    container.className = 'chat-container';
    container.innerHTML = 
      '<div class="chat-header">Self-Love Guide ❤️</div>' +
      '<div class="guide-notice">Not AI. Just a simple path through self-doubt toward self-compassion.</div>' +
      '<div id="guide-content" class="guide-content"></div>';

    document.body.appendChild(toggleBtn);
    document.body.appendChild(container);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createUI);
  } else {
    createUI();
  }
})();
