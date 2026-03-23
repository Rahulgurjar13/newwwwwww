"use client";
import { Phone, MessageCircle, FileText } from "lucide-react";

const openForm = () => window.dispatchEvent(new Event("open-lead-popup"));

export default function StickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      {/* Urgency micro-strip */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 text-white text-center py-1 px-2">
        <p className="text-xs font-bold animate-pulse">
          🔥 Only 3 Seats Left at ₹2,299 — Book Now!
        </p>
      </div>

      <div className="flex items-center px-3 py-2.5 gap-2">
        {/* Price */}
        <div className="shrink-0">
          <span className="text-base font-extrabold text-orange-500">₹2,299</span>
          <span className="text-[10px] text-gray-500 block leading-tight">/person</span>
        </div>

        {/* Buttons */}
        <div className="flex-1 grid grid-cols-3 gap-1.5">
          <a
            href="tel:+917302265809"
            className="flex items-center justify-center gap-1 rounded-lg bg-green-600 py-2.5 text-[11px] font-bold text-white"
          >
            <Phone size={13} />
            Call
          </a>
          <a
            href="https://wa.me/7302265809"
            target="_blank"
            className="flex items-center justify-center gap-1 rounded-lg bg-[#25D366] py-2.5 text-[11px] font-bold text-white"
          >
            <MessageCircle size={13} />
            WhatsApp
          </a>
          <button
            onClick={openForm}
            className="flex items-center justify-center gap-1 rounded-lg bg-orange-500 py-2.5 text-[11px] font-bold text-white cursor-pointer"
          >
            <FileText size={13} />
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}
