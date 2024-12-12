import React, { useState } from "react";
import { X } from "lucide-react";
import greenCircle from "../img/chatbot.png";
import companyLogo from "../img/logo.png";

const Chatbox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
    { sender: "System", text: "Chatbot is not live!!" },
  ]);
  const [input, setInput] = useState("");

  const handleToggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage = { sender: "User", text: input };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput("");

      const botResponse = await fetchResponse(input.trim());
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "Bot", text: botResponse },
      ]);
    }
  };

  const fetchResponse = async (query: string): Promise<string> => {
    try {
      const response = await fetch("https://api.example.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response");
      }

      const data = await response.json();
      return data.reply || "Sorry, I couldn't fetch a response.";
    } catch (error) {
      console.error("Error fetching response:", error);
      return "An error occurred. Please try again later.";
    }
  };

  const unreadMessages = !isOpen ? 1 : 0;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <div className="relative">
        {!isOpen && (
          <button
            onClick={handleToggleChatbox}
            className="relative w-16 h-16 rounded-full focus:outline-none transition-transform transform hover:scale-110"
          >
            <img
              src={greenCircle}
              alt="Chat"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
              {unreadMessages}
            </span>
          </button>
        )}
      </div>

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl p-4 mt-2 w-full max-w-md md:w-96 border border-gray-300 fixed bottom-0 right-0 md:bottom-auto md:right-auto md:relative">
          <div className="mb-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src={companyLogo} alt="Company Logo" className="w-8 h-8" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                Welcome to GreenAI Services
              </h3>
            </div>
            <button
              onClick={handleToggleChatbox}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-gray-600 text-sm mb-4 animate-grow">
            Hi there! I'm here to assist you. Ask me anything or let us know how
            we can help you today?
          </p>

          <div className="h-64 overflow-y-auto border rounded-lg p-3 mb-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-2 rounded-lg max-w-[75%] ${
                  msg.sender === "User"
                    ? "bg-green-100 self-end text-right"
                    : msg.sender === "System"
                    ? "bg-yellow-100 text-center"
                    : "bg-gray-200 self-start text-left"
                }`}
              >
                <span className="block text-sm font-bold text-gray-700 mb-1">
                  {msg.sender}
                </span>
                <span className="block text-gray-800">{msg.text}</span>
              </div>
            ))}
          </div>

          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded-l-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-green-600 text-white px-4 py-2 rounded-r-lg focus:outline-none hover:bg-green-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
