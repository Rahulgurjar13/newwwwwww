"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "How do I book a tour?",
    a: "Call or WhatsApp at +91 7302265809, email info@vrindavanmathuraguide.com, or fill the enquiry form on this page.",
  },
  {
    q: "Do you provide pickup from Delhi?",
    a: "Yes! We provide pickup and drop from Delhi, Agra, Jaipur, and all nearby cities with AC vehicles.",
  },
  {
    q: "Are the packages customizable?",
    a: "Absolutely. All packages can be customized for group size, duration, accommodation level, and specific temples to visit.",
  },
  {
    q: "Do you serve international tourists?",
    a: "Yes, we specialize in serving international pilgrims with foreign currency exchange and English-speaking guides.",
  },
  {
    q: "What is the best time to visit Mathura Vrindavan?",
    a: "October to March is ideal. Holi in Braj (Lathmar Holi in Barsana) is a world-famous event worth experiencing.",
  },
  {
    q: "What is Braj 84 Kos Yatra?",
    a: "A sacred pilgrimage covering 84 villages of the Braj region. Our 5-day package covers this entire yatra with guided assistance.",
  },
  {
    q: "Do you arrange hotel accommodation?",
    a: "Yes, from budget dharamshalas to luxury heritage hotels — we handle everything based on your preference and budget.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We offer flexible cancellation. Full details are available on our refund policy page at vrindavanmathuraguide.com/refund-policy.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-20 px-5 sm:px-8 bg-[#FFF5EE]">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold text-orange-600 uppercase tracking-wider mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-orange-500" />
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between text-left px-5 sm:px-6 py-4 cursor-pointer"
              >
                <span className="text-sm sm:text-base font-semibold text-gray-900 pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-orange-500 shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 sm:px-6 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
