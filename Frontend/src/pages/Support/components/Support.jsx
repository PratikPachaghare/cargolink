import React, { useState } from "react";
import Chatbot from "./chatbot.jsx";

export default function Support({ onClose }) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Overlay for Support Modal */}
      <div className="fixed inset-0 bg-black/50 z-40 flex justify-center items-center">
        <div className="bg-white rounded-xl shadow-2xl w-[600px] p-6 relative animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
          >
            ✕
          </button>

          {/* Title */}
          <h2 className="text-2xl font-bold text-blue-600 mb-3 text-center">
            Help Center
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Need assistance? We're happy to help, reach us through the channels below
          </p>

          {/* Support Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Customer Support */}
            <div className="p-4 border rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-bold text-gray-800">📞 Customer Support</h3>
              <p className="text-sm text-gray-600 mt-1">
                For bookings & queries email us at{" "}
                <a href="mailto:help@cargolink.in" className="text-blue-600 underline">
                  help@cargolink.in
                </a>
              </p>
              <p className="text-sm text-gray-600">Or call us on: +91 98765 43210</p>
            </div>

            {/* Drive With Us */}
            <div className="p-4 border rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-bold text-gray-800">🚚 Drive with CargoLink</h3>
              <p className="text-sm text-gray-600 mt-1">
                Have a tempo or truck? Earn by transporting goods along your route.
              </p>
              <p className="text-sm text-gray-600">
                Call: <a href="tel:+919876543211" className="text-blue-600 underline">+91 98765 43211</a>
              </p>
            </div>

            {/* Packers and Movers */}
            <div className="p-4 border rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-bold text-gray-800">📦 Packers & Movers</h3>
              <p className="text-sm text-gray-600 mt-1">
                Support for house shifting & heavy goods.
              </p>
              <p className="text-sm text-gray-600">
                Email:{" "}
                <a href="mailto:packers@cargolink.in" className="text-blue-600 underline">
                  packers@cargolink.in
                </a>
              </p>
            </div>

            {/* Enterprise Services */}
            <div className="p-4 border rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-bold text-gray-800">🏢 Enterprise Services</h3>
              <p className="text-sm text-gray-600 mt-1">
                Need bulk logistics? Contact us for enterprise transport solutions.
              </p>
              <p className="text-sm text-gray-600">
                Email:{" "}
                <a href="mailto:enterprise@cargolink.in" className="text-blue-600 underline">
                  enterprise@cargolink.in
                </a>
              </p>
            </div>
          </div>

          {/* Chatbot Option */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsChatOpen(true)}
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              💬 Chat with Bot
            </button>
          </div>
        </div>
      </div>

      {/* Chatbot Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center">
          <Chatbot onClose={() => setIsChatOpen(false)} />
        </div>
      )}
    </>
  );
}
