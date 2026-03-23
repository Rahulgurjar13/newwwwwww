"use client";
import { Phone, FileText } from "lucide-react";
import Link from "next/link";

export default function StickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      {/* Urgency micro-strip */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 text-white text-center py-1 px-2">
        <p className="text-xs font-bold animate-pulse">
          🔥 Only 3 Seats Left at ₹2,299 — Book Now!
        </p>
      </div>

      <div className="flex items-center justify-between px-4 py-3">
        {/* Price */}
        <div>
          <span className="text-lg font-extrabold text-orange-500">₹2,299</span>
          <span className="text-xs text-gray-500 block leading-tight">/person onwards</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <Link
            href="tel:+917300620809"
            className="inline-flex items-center gap-1.5 rounded-full bg-green-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-green-700 transition duration-300"
          >
            <Phone size={14} />
            Call Now
          </Link>
          <a
            href="#enquiry"
            className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-4 py-2.5 text-xs font-bold text-white hover:bg-orange-600 transition duration-300"
          >
            <FileText size={14} />
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
}
