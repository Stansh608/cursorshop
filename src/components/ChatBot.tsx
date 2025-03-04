"use client";

import { useState } from 'react';

interface Message {
  type: 'user' | 'bot';
  content: string;
}

interface ChatContext {
  lastTopic?: string;
  lastDestination?: string;
  userPreferences?: string[];
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: 'Hello! I\'m your StanTravels assistant. I can help you with:\n• Destination information\n• Travel tips and advice\n• Booking assistance\n• Weather and best times to visit\n• Local customs and culture\n\nWhat would you like to know?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [context, setContext] = useState<ChatContext>({});

  const destinations = {
    paris: {
      attractions: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral', 'Arc de Triomphe', 'Palace of Versailles'],
      bestTime: 'April to October',
      tips: ['Book museum tickets in advance', 'Use the Metro for transportation', 'Learn basic French phrases'],
      culture: 'Known for art, fashion, and cuisine'
    },
    tokyo: {
      attractions: ['Senso-ji Temple', 'Tokyo Skytree', 'Shibuya Crossing', 'Tsukiji Fish Market', 'Meiji Shrine'],
      bestTime: 'March to May (Cherry Blossom) or September to November',
      tips: ['Get a Suica card for transport', 'Learn basic Japanese etiquette', 'Visit temples early morning'],
      culture: 'Blend of traditional and modern Japanese culture'
    },
    'new york': {
      attractions: ['Central Park', 'Statue of Liberty', 'Times Square', 'Broadway', 'Empire State Building'],
      bestTime: 'April to June or September to November',
      tips: ['Get a MetroCard', 'Book Broadway shows early', 'Visit museums on free days'],
      culture: 'Melting pot of cultures and arts'
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      type: 'user',
      content: inputMessage
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Process the message and generate response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      setMessages(prev => [...prev, { type: 'bot', content: botResponse }]);
    }, 1000);
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Update context based on user message
    updateContext(lowerMessage);

    // Check for greetings
    if (lowerMessage.match(/^(hi|hello|hey|greetings)/)) {
      return 'Hello! How can I help you plan your next adventure today?';
    }

    // Check for specific destination queries
    for (const [dest, info] of Object.entries(destinations)) {
      if (lowerMessage.includes(dest)) {
        setContext(prev => ({ ...prev, lastDestination: dest }));
        
        // Handle specific queries about the destination
        if (lowerMessage.includes('attraction') || lowerMessage.includes('see') || lowerMessage.includes('visit')) {
          return `Top attractions in ${dest.charAt(0).toUpperCase() + dest.slice(1)}:\n${info.attractions.map(attr => `• ${attr}`).join('\n')}\n\nWould you like more details about any of these attractions?`;
        }
        if (lowerMessage.includes('time') || lowerMessage.includes('when')) {
          return `The best time to visit ${dest.charAt(0).toUpperCase() + dest.slice(1)} is ${info.bestTime}. This period offers the most pleasant weather and fewer crowds.`;
        }
        if (lowerMessage.includes('tip') || lowerMessage.includes('advice')) {
          return `Here are some tips for visiting ${dest.charAt(0).toUpperCase() + dest.slice(1)}:\n${info.tips.map(tip => `• ${tip}`).join('\n')}`;
        }
        if (lowerMessage.includes('culture') || lowerMessage.includes('custom')) {
          return `${dest.charAt(0).toUpperCase() + dest.slice(1)} is ${info.culture}. Would you like to know more about specific cultural aspects?`;
        }
        return `I can tell you about ${dest.charAt(0).toUpperCase() + dest.slice(1)}'s attractions, best time to visit, travel tips, or local culture. What interests you?`;
      }
    }

    // Handle general travel tips
    if (lowerMessage.includes('tip') || lowerMessage.includes('advice')) {
      return `Here are some essential travel tips:\n• Research your destination thoroughly\n• Keep important documents safe\n• Learn basic local phrases\n• Respect local customs and traditions\n• Pack light but bring essentials\n• Keep emergency contact numbers handy\n\nWould you like specific tips for any destination?`;
    }

    // Handle booking queries
    if (lowerMessage.includes('book') || lowerMessage.includes('reservation')) {
      return 'To make a booking, you can:\n• Use our contact form\n• Call us at +254 798 602 758\n• Email us at stanleymunene56@gmail.com\n\nWe\'ll help you plan your perfect trip!';
    }

    // Handle weather queries
    if (lowerMessage.includes('weather') || lowerMessage.includes('climate')) {
      if (context.lastDestination) {
        const dest = destinations[context.lastDestination as keyof typeof destinations];
        return `The best time to visit ${context.lastDestination} is ${dest.bestTime} for optimal weather conditions.`;
      }
      return 'Weather varies by destination. Which location would you like to know about?';
    }

    // Handle budget queries
    if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('budget')) {
      return 'Travel costs vary by destination and season. I can help you with:\n• Accommodation options\n• Transportation costs\n• Activity prices\n• Money-saving tips\n\nWhich destination are you interested in?';
    }

    // Handle safety queries
    if (lowerMessage.includes('safe') || lowerMessage.includes('security')) {
      return 'Safety is our top priority! Here are some general safety tips:\n• Keep your passport and valuables secure\n• Stay aware of your surroundings\n• Follow local safety guidelines\n• Keep emergency numbers handy\n• Travel insurance is recommended\n\nWould you like specific safety information for any destination?';
    }

    // Default response with suggestions
    return 'I can help you with:\n• Destination information\n• Travel tips and advice\n• Booking assistance\n• Weather and best times to visit\n• Local customs and culture\n\nWhat would you like to know?';
  };

  const updateContext = (message: string) => {
    // Update context based on the message content
    const newContext = { ...context };
    
    // Check for destination mentions
    for (const dest of Object.keys(destinations)) {
      if (message.includes(dest)) {
        newContext.lastDestination = dest;
      }
    }

    // Update last topic
    if (message.includes('weather') || message.includes('climate')) {
      newContext.lastTopic = 'weather';
    } else if (message.includes('tip') || message.includes('advice')) {
      newContext.lastTopic = 'tips';
    } else if (message.includes('book') || message.includes('reservation')) {
      newContext.lastTopic = 'booking';
    }

    setContext(newContext);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors duration-300"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`absolute bottom-16 right-0 w-96 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-300 transform ${
          isOpen 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        {/* Chat Header */}
        <div className="bg-blue-600 text-white p-4 rounded-t-lg">
          <h3 className="font-semibold">StanTravels Assistant</h3>
          <p className="text-sm text-blue-100">Ask me anything about travel!</p>
        </div>

        {/* Chat Messages */}
        <div className="h-[400px] overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 whitespace-pre-line ${
                  message.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="border-t bg-white">
          <form onSubmit={handleSendMessage} className="p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 