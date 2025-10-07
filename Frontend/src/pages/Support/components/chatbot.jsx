import React, { useState, useRef, useEffect } from "react";

export default function Chatbot({ onClose }) {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! 👋 How can I help you today?" }
  ]);

  const chatEndRef = useRef(null);

  // Rule-based responses
  const responses = {
    shipment: "📦 You can track your shipment from the 'Track Shipment' option in the navbar.",
    payment: "💳 For payment issues, please check your payment method or contact support at payments@cargolink.com.",
    transporter: "🚚 Transporter support: Call us at 022 4410 4410 for driver-related queries.",
    default: "🤔 Sorry, I didn't understand that. Please try 'Shipment Help', 'Payment Help', or 'Transporter Help'."
  };

  const sendMessage = (text) => {
    if (!text) return;
    setMessages([...messages, { sender: "user", text }]);

    // Rule-based reply
    setTimeout(() => {
      let key = text.toLowerCase();
      let reply = responses.default;
      if (key.includes("shipment")) reply = responses.shipment;
      else if (key.includes("payment")) reply = responses.payment;
      else if (key.includes("transporter")) reply = responses.transporter;

      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 600);
  };

  // Auto-scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="bg-white rounded-2xl shadow-2xl w-96 h-[28rem] flex flex-col animate-slideUp border border-gray-200 overflow-hidden">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-3 flex justify-between items-center">
        <span className="font-semibold text-lg">Support Bot 🤖</span>
        <button onClick={onClose} className="hover:text-gray-200 text-xl font-bold">✕</button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`px-4 py-2 rounded-2xl max-w-[75%] break-words shadow ${
              msg.sender === "bot"
                ? "bg-gray-200 text-gray-800 self-start"
                : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white self-end ml-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Quick Buttons */}
      <div className="flex flex-wrap gap-2 p-3 border-t bg-gray-50">
        {["Shipment Help", "Payment Help", "Transporter Help"].map((btn) => (
          <button
            key={btn}
            onClick={() => sendMessage(btn)}
            className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-200 transition"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
