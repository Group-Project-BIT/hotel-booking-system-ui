import React, { useState } from "react";
import { Button, Input, IconButton } from "@material-tailwind/react";
import { ChatBubbleOvalLeftEllipsisIcon, XMarkIcon } from '@heroicons/react/24/outline';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const getBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      return "Hi there! How can I help you today?";
    } else if (lowerCaseMessage.includes("weather")) {
      return "The weather is sunny and warm today.";
    } else if (lowerCaseMessage.includes("help")) {
      return "Sure, I'm here to help! What do you need assistance with?";
    } else if (lowerCaseMessage.includes("thank you")) {
      return "You're welcome! If you have any other questions, feel free to ask.";
    } else {
      return "I'm not sure how to respond to that.";
    }
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage = { text: input, isUser: true };
      setMessages([...messages, userMessage]);
      setInput("");

      setTimeout(() => {
        const botResponse = getBotResponse(input);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, isUser: false },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {isOpen ? (
        <div className="bg-white shadow-2xl rounded-2xl p-6 w-96 h-[32rem] flex flex-col">
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
                className={`my-2 p-3 rounded-xl max-w-[80%] ${
                  message.isUser ? "bg-blue-600 text-white self-end" : "bg-gray-300 self-start"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="flex">
            <Input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow mr-2"
            />
            <Button color="blue" onClick={handleSendMessage}>
              Send
            </Button>
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
