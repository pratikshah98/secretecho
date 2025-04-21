const responses = [
    "That's interesting! Tell me more.",
    "I’m always here to chat! 😊",
    "Why do you think that is?",
    "Sounds like a good idea!",
    "Could you explain it a bit more?",
    "Let’s explore that thought together.",
    "That’s something worth thinking about.",
    "I'm curious what you think next."
  ];
  
  exports.getAIResponse = () => {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  };
  