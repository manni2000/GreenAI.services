import React, { useState } from "react";
import { X } from "lucide-react";
import greenCircle from "../img/chatbot.png";
import companyLogo from "../img/logo.png";

const Chatbox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
    { sender: "Bot", text: "How can we assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleToggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (text: string, sender = "User") => {
    if (text.trim()) {
      setMessages((prevMessages) => [...prevMessages, { sender, text }]);
      const lowerText = text.trim().toLowerCase();

      // Check for unknown messages to trigger fallback response
      if (
        !["about", "owners", "contact", "solutions", "team"].includes(lowerText)
      ) {
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              sender: "Bot",
              text: "Connecting admin, Thank you for the query!!",
            },
          ]);
        }, 500);
      }
    }
    setInput("");
  };

  const handleButtonResponse = (buttonType: string) => {
    let question = "";
    let botResponse = "";

    switch (buttonType) {
      case "about":
        question = "Let us know about GreenAI Services Pvt Ltd";
        botResponse = `GreenAI Services Pvt Ltd is a leader in Artificial Intelligence, dedicated to developing innovative solutions that drive transformation across industries. We specialize in Computer Vision, Chatbot Implementation, and AI in Education, delivering state-of-the-art technology that enhances business efficiency and user experiences.\n\nWebsite: www.greenai.services/\nIndustry: IT Services and IT Consulting\nCompany size: 11-50 employees\nHeadquarters: Kolkata, West Bengal\nFounded: 2024`;
        break;
      case "owners":
        question = "Who are the owners of GREENAI SERVICES?";
        botResponse = `PRASENJIT MAJUMDER, BERJIS MINOO DESAI, SIVARAMAKRISHNAN SRINIVASAN IYER, and RAJARSHI MUKHERJEE are the Directors of GREENAI SERVICES PRIVATE LIMITED.`;
        break;
      case "contact":
        question = "Contact Information";
        botResponse = `GreenAI Services Pvt Ltd\nKolkata, West Bengal, 700037, India\nPhone: +91 89819 41888\nEmail: education@greenai.services`;
        break;
      case "solutions":
        question = "Explore Our Solutions";
        botResponse = `Redirecting to solutions page...`;
        setTimeout(() => (window.location.href = "/services"), 1000);
        break;
      case "team":
        question = "Who are the team members?";
        botResponse = `Dipashree Pal, Sankhadeep, Alazo, and Manish Kumar are the team members of GreenAI Services Pvt Ltd.`;
        break;
      default:
        break;
    }

    if (question && botResponse) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "User", text: question },
      ]);
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "Bot", text: botResponse },
        ]);
      }, 500);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      {/* Chatbox Toggle */}
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
            1
          </span>
        </button>
      )}

      {/* Chatbox Content */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl p-4 w-full max-w-sm md:w-96 border border-gray-300 fixed bottom-0 right-0">
          {/* Header */}
          <div className="mb-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src={companyLogo} alt="Company Logo" className="w-8 h-8" />
              <h3 className="text-lg font-semibold text-gray-800">
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

          {/* Messages */}
          <div className="h-64 overflow-y-auto border rounded-lg p-3 mb-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-2 rounded-lg max-w-[75%] text-sm ${
                  msg.sender === "User"
                    ? "bg-green-100 mr-auto text-left"
                    : "bg-gray-200 ml-auto text-right"
                }`}
              >
                <span className="block font-bold mb-1 text-gray-700">
                  {msg.sender}
                </span>
                <span className="block text-gray-800 whitespace-pre-line">
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col space-y-2 mb-4">
            <button
              onClick={() => handleButtonResponse("about")}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 text-sm font-medium"
            >
              Let us know about GreenAI Services Pvt Ltd
            </button>
            <button
              onClick={() => handleButtonResponse("owners")}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 text-sm font-medium"
            >
              Who are the owners of GREENAI SERVICES?
            </button>
            <button
              onClick={() => handleButtonResponse("team")}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 text-sm font-medium"
            >
              Who are the team members?
            </button>
            <button
              onClick={() => handleButtonResponse("solutions")}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
            >
              Explore Our Solutions
            </button>
            <button
              onClick={() => handleButtonResponse("contact")}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 text-sm font-medium"
            >
              Contact Information
            </button>
          </div>

          {/* Input */}
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded-l-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Type your message..."
            />
            <button
              onClick={() => handleSendMessage(input)}
              className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700"
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
