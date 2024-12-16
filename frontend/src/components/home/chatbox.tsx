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

      if (
        !["about", "owners", "team", "solutions", "contact"].includes(lowerText)
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
        question = "About GreenAI Services Pvt Ltd";
        botResponse = `GreenAI Services Pvt Ltd is a leader in Artificial Intelligence, dedicated to developing innovative solutions that drive transformation across industries.\n\nWebsite: www.greenai.services\nHeadquarters: Kolkata, West Bengal\nFounded: 2024`;
        break;
      case "owners":
        question = "Owners of GREENAI SERVICES?";
        botResponse = `The owners are:\n- PRASENJIT MAJUMDER\n- BERJIS MINOO DESAI\n- SIVARAMAKRISHNAN SRINIVASAN IYER\n- RAJARSHI MUKHERJEE`;
        break;
      case "team":
        question = "Team members?";
        botResponse = `The team members are:\n- Dipashree Pal\n- Sankhadeep\n- Alazo\n- Manish Kumar`;
        break;
      case "solutions":
        question = "Explore Our Solutions";
        botResponse = `Redirecting to solutions page...`;
        setTimeout(() => (window.location.href = "/services"), 1000);
        break;
      case "contact":
        question = "Contact Information";
        botResponse = `Contact us at:\nGreenAI Services Pvt Ltd\nKolkata, West Bengal, 700037\nPhone: +91 89819 41888\nEmail: reach@greenai.services`;
        break;
      default:
        break;
    }

    if (question && botResponse) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "User", text: question },
        { sender: "Bot", text: botResponse },
      ]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      {/* Chatbox Toggle */}
      {!isOpen && (
        <button
          onClick={handleToggleChatbox}
          className="relative w-12 h-12 md:w-16 md:h-16 rounded-full focus:outline-none transition-transform transform hover:scale-110"
        >
          <img
            src={greenCircle}
            alt="Chat"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full">
            1
          </span>
        </button>
      )}

      {/* Chatbox Content */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl p-3 w-72 md:w-96 max-h-[75vh] flex flex-col border border-gray-300 fixed bottom-0 right-0">
          {/* Header */}
          <div className="mb-2 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src={companyLogo} alt="Company Logo" className="w-6 h-6" />
              <h3 className="text-sm md:text-lg font-semibold text-gray-800">
                Welcome to GreenAI Services
              </h3>
            </div>
            <button
              onClick={handleToggleChatbox}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto border rounded-lg p-2 mb-2 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-1 my-1 rounded-lg max-w-[75%] text-xs md:text-sm ${
                  msg.sender === "User"
                    ? "bg-green-100 mr-auto text-left"
                    : "bg-gray-200 ml-auto text-right"
                }`}
              >
                <span className="block font-bold mb-0.5 text-gray-700">
                  {msg.sender}
                </span>
                <span className="block text-gray-800 whitespace-pre-line">
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons with Scroll */}
          <div className="flex-1 overflow-y-auto space-y-1 mb-2">
            <button
              onClick={() => handleButtonResponse("about")}
              className="w-full px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-700 text-xs md:text-sm font-medium"
            >
              About GreenAI Services Pvt Ltd
            </button>
            <button
              onClick={() => handleButtonResponse("owners")}
              className="w-full px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-700 text-xs md:text-sm font-medium"
            >
              Owners of GREENAI SERVICES?
            </button>
            <button
              onClick={() => handleButtonResponse("team")}
              className="w-full px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-700 text-xs md:text-sm font-medium"
            >
              Team members?
            </button>
            <button
              onClick={() => handleButtonResponse("solutions")}
              className="w-full px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-700 text-xs md:text-sm font-medium"
            >
              Explore Our Solutions
            </button>
            <button
              onClick={() => handleButtonResponse("contact")}
              className="w-full px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-700 text-xs md:text-sm font-medium"
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
              className="flex-1 border rounded-l-lg p-1 text-xs md:text-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Type your message..."
            />
            <button
              onClick={() => handleSendMessage(input)}
              className="bg-green-600 text-white px-2 py-1 rounded-r-lg hover:bg-green-700 text-xs md:text-sm"
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
