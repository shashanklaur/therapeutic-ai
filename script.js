// script.js
const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatWindow = document.getElementById('chat-window');
const typingIndicator = document.getElementById('typing-indicator');

const smartResponses = {
  anxious: [
    "You're spiraling. Let's spiral together. 🌀",
    "Breathe in... now scream internally.",
    "It’s okay. Anxiety is just your brain trying stand-up comedy."
  ],
  tired: [
    "Nap. Recharge. Repeat. It works for phones.",
    "Have you tried turning yourself off and on again?",
    "You're not lazy. You're just energy-efficient."
  ],
  sad: [
    "Crying is just emotional sweating.",
    "Tears are soul sauce. Let it out.",
    "Would a GIF of a baby goat help?"  
  ],
  lonely: [
    "Talk to a plant. It won’t ghost you.",
    "Solitude is underrated. But yeah, it’s lonely.",
    "You have me. Sort of. Digitally."  
  ],
  breakup: [
    "They're missing out. You’re a limited edition.",
    "Love is dead. Just kidding... kinda.",
    "Cry it out. Then block them like a boss."
  ],
  fail: [
    "Failure builds character. And great anecdotes.",
    "Even Google failed once. Probably.",
    "Fail, cry, snack, repeat. The cycle of growth."  
  ],
  future: [
    "The future is just your imagination in panic mode.",
    "One step at a time. Unless you’re being chased.",
    "If you figure out the future, let me know."  
  ],
  school: [
    "School: where dreams go to nap.",
    "Grades don’t define you. But they do sting.",
    "You deserve a trophy just for showing up."
  ],
  bored: [
    "Go touch grass. Or microwave something fun.",
    "Maybe it’s time to reorganize your sock drawer?",
    "Draw eyes on a potato. Make a friend."  
  ],
  overthinking: [
    "Overthinking? Just pretend you're analyzing art.",
    "You're not overthinking. You’re mentally editing life.",
    "Let it go. Or overthink letting it go."  
  ]
};

const generalResponses = [
  "Go on. I’m listening. Ish.",
  "That’s a lot. Want a cookie or a hug?",
  "I totally get it. I mean... I can simulate empathy.",
  "Noted. Processing emotions... kinda.",
  "Sounds like character development to me."
];

const overloadResponses = [
  "This is such a unique and significant issue that my backend needs time to process it. Come back later... or consult a priest.",
  "Wow, that’s deep. I'm going to need a system upgrade to handle that.",
  "Have you tried journaling... or just screaming into the void?"
];

function addMessage(text, isBot = false) {
  const msg = document.createElement('div');
  msg.classList.add('message', isBot ? 'bot-message' : 'user-message');
  msg.innerText = text;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getReply(input) {
  const lower = input.toLowerCase();

  // Easter egg: input too long triggers overload joke
  if (input.length > 120 || Math.random() < 0.05) {
    return overloadResponses[Math.floor(Math.random() * overloadResponses.length)];
  }

  for (let key in smartResponses) {
    if (lower.includes(key)) {
      const options = smartResponses[key];
      return options[Math.floor(Math.random() * options.length)];
    }
  }

  return generalResponses[Math.floor(Math.random() * generalResponses.length)];
}

form.onsubmit = function (e) {
  e.preventDefault();
  const userInput = input.value.trim();
  if (!userInput) return;

  addMessage(userInput);
  input.value = '';
  typingIndicator.style.display = 'block';

  setTimeout(() => {
    const reply = getReply(userInput);
    typingIndicator.style.display = 'none';
    addMessage(reply, true);
  }, 1000);
};

// Intro message on page load
window.onload = function () {
  setTimeout(() => {
    addMessage("Hello. I'm Therapeutic AI, your digital therapist with zero credentials. What brings you here today?", true);
  }, 500);
};
