import React, { useState } from "react";
import { FaSearch, FaChevronDown, FaChevronUp, FaEnvelope } from "react-icons/fa";

const faqs = [
  {
    question: "How can I track my shipment?",
    answer:
      "You can track your shipment by entering your tracking ID on the CargoTrack page. You’ll get real-time updates on shipment status and delivery time.",
  },
  {
    question: "What should I do if my parcel is delayed?",
    answer:
      "If your parcel is delayed, please contact our support team via the contact form or email us at support@cargo.com. We’ll resolve it as soon as possible.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, you can cancel your booking within 24 hours of confirmation. After that, cancellation charges may apply.",
  },
  {
    question: "Do you offer insurance for goods?",
    answer:
      "Yes, we offer insurance coverage for valuable or fragile goods. You can add insurance during the booking process.",
  },
  {
    question: "How can I become a Cargo partner?",
    answer:
      "You can apply to become a Cargo Partner through our 'Partner With Us' section, fill the registration form, and our team will get in touch with you.",
  },
];

const SupportPage = () => {
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Support & Help Center</h1>
      <p className="text-gray-600 mb-6 text-center max-w-xl">
        Find answers to common questions or contact our support team.
      </p>

      {/* Search Bar */}
      <div className="relative w-full max-w-md mb-10">
        <input
          type="text"
          placeholder="Search your question..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <FaSearch className="absolute left-3 top-3.5 text-gray-400" />
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-2xl space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-blue-500" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </button>

              {activeIndex === index && (
                <div className="px-4 pb-4 text-gray-600 border-t border-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No results found.</p>
        )}
      </div>

      {/* Contact Support Section */}
      <div className="mt-12 w-full max-w-lg bg-white p-6 shadow-md rounded-xl text-center">
        <FaEnvelope className="text-blue-500 text-3xl mx-auto mb-3" />
        <h2 className="text-xl font-semibold mb-2">Still need help?</h2>
        <p className="text-gray-600 mb-4">
          Contact our support team and we’ll respond within 24 hours.
        </p>
        <a
          href="mailto:support@cargo.com"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default SupportPage;
