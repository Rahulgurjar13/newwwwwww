"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import QuickEnquiry from "./QuickEnquiry";

export default function GlobalQuickEnquiry() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname.startsWith("/admin")) return null;

  return (
    <>
      {/* ── Bottom-left: Call circle — no label ── */}
      <div className="fixed bottom-6 left-5 z-[990]">
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-orange-400 opacity-30 animate-ping" />
          <button
            aria-label="Call Us"
            onClick={() => setOpen(true)}
            className="
              relative
              w-14 h-14 rounded-full
              flex items-center justify-center
              text-white
              shadow-xl shadow-orange-300/50
              ring-2 ring-white
              transition-transform duration-200 hover:scale-110 active:scale-95
              cursor-pointer
            "
            style={{ background: "linear-gradient(135deg,#ea580c,#f97316)" }}
          >
            <Phone className="w-6 h-6" />
          </button>
        </div>
      </div>

      <QuickEnquiry open={open} onClose={() => setOpen(false)} />
    </>
  );
}
