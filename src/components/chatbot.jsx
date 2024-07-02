import React, { useState, useEffect } from "react";
import { Button, Input, IconButton } from "@material-tailwind/react";
import { ChatBubbleOvalLeftEllipsisIcon, XMarkIcon } from '@heroicons/react/24/outline';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const getBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      return {
        text: "Hi there! How can I help you today?",
        suggestions: ["How's the weather?", "I need help", "Tell me about you", "Make a reservation", "Suites"]
      };
    } else if (lowerCaseMessage.includes("weather")) {
      return {
        text: "The weather is sunny and warm today.",
        suggestions: ["Thank you", "I need help", "Tell me about you", "Room type"]
      };
    } else if (lowerCaseMessage.includes("help")) {
      return {
        text: "Sure, I'm here to help! What do you need assistance with?",
        suggestions: ["Tell me about you", "Thank you", "Make a reservation", "Make an enquiry", "Features"]
      };
    } else if (lowerCaseMessage.includes("thank you")) {
      return {
        text: "You're welcome! If you have any other questions, feel free to ask.",
        suggestions: ["Make an enquiry", "How's the weather?", "Make a reservation", "Room type"]
      };
    } else if (lowerCaseMessage.includes("about you")) {
      return {
        text: "ZION: Relax in style! Great rooms, friendly staff, fun things to do nearby. Stay at ZION!",
        suggestions: ["Thank you", "I need help", "Suites"]
      };
    } else if (lowerCaseMessage.includes("reservation")) {
      return {
        text: "Looking to book a room? Enter your travel dates and make a reservation on the reservation page.",
        suggestions: ["Thank you", "I need help", "Room type"]
      };
    } else if (lowerCaseMessage.includes("enquiry")) {
      return {
        text: "Your question needs admin attention. Please send your question.",
        suggestions: ["Thank you", "I need help", "Make a reservation"]
      };
    } else if (lowerCaseMessage.includes("suites")) {
      return {
        text: "We offer a variety of suites to suit your needs, including deluxe and premium options. Would you like more details?",
        suggestions: ["Thank you", "Make a reservation", "Room type"]
      };
    } else if (lowerCaseMessage.includes("room type")) {
      return {
        text: "We have several room types available: deluxe, executive, presidential, and starndard.You can find your room type in the home page?",
        suggestions: ["Thank you", "Make a reservation", "Features"]
      };
    } else if (lowerCaseMessage.includes("features")) {
      return {
        text: "Our rooms come with various features including free Wi-Fi, air conditioning, and room service. You can find our features in Suites page",
        suggestions: ["Thank you", "Make a reservation", "Suites"]
      };
    } else {
      return {
        text: "I'm not sure how to respond to that.",
        suggestions: ["How's the weather?", "I need help", "Make a reservation"]
      };
    }
  };

  const handleSendMessage = (message) => {
    if (message.trim()) {
      const userMessage = { text: message, isUser: true };
      setMessages([...messages, userMessage]);
      setInput("");
      setSuggestions([]);

      setTimeout(() => {
        const botResponse = getBotResponse(message);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse.text, isUser: false },
        ]);
        setSuggestions(botResponse.suggestions || []);
      }, 1000);
    }
  };

  const handleButtonClick = (suggestion) => {
    handleSendMessage(suggestion);
  };

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {isOpen ? (
        <div className="bg-white shadow-2xl rounded-2xl p-6 w-[30rem] h-[40rem] flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-800">ChatBot</h3>
            <IconButton color="red" onClick={() => setIsOpen(false)}>
              <XMarkIcon className="h-6 w-6" />
            </IconButton>
          </div>
          <div className="flex-grow overflow-y-auto mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`my-2 p-3 rounded-xl max-w-[80%] text-sm ${
                  message.isUser ? "bg-blue-600 text-white self-end" : "bg-gray-300 self-start"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <Input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow mr-2 text-sm"
            />
            <Button color="blue" onClick={() => handleSendMessage(input)} className="mt-2 text-sm">
              Send
            </Button>
          </div>
          <div className="flex flex-wrap mt-4">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                color="blue"
                onClick={() => handleButtonClick(suggestion)}
                className="m-1 text-sm"
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
      ) : (
        <IconButton color="blue" onClick={() => setIsOpen(true)}>
          <ChatBubbleOvalLeftEllipsisIcon className="h-10 w-10" />
        </IconButton>
      )}
    </div>
  );
};

export default ChatBot;
