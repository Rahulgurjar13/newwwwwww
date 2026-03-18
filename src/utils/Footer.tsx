"use client"
import { MapPin, Mail, Instagram, Twitter, Phone, Youtube, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import EnquiryPopup from "./EnquiryForm";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const socialMedia = [
    { icon: Instagram, url: "https://www.instagram.com/mathuravrindavantour", label: "Instagram" },
    { icon: Youtube,   url: "https://www.youtube.com/@mathuravrindavantour",  label: "YouTube"   },
    { icon: Twitter,   url: "https://twitter.com/mathuravrindavan",           label: "Twitter"   },
  ];

  const packages = [
    { label: "1 Day Vrindavan Darshan", href: "/tour-packages/one-day/vrindavan-tour-package" },
    { label: "Mathura Vrindavan Tour",  href: "/tour-packages/two-days/mathura-vrindavan-tour" },
    { label: "5 Days Braj 84 Kos Yatra",href: "/tour-packages/five-days/braj-84-kos-yatra" },
    { label: "3 Days Agra Mathura Vrindavan Tour Package", href: "/tour-packages/three-days/agra-mathura-vrindavan-tour-package" },
    { label: "4 Days Mathura Vrindavan Agra Tour Package", href: "/tour-packages/four-days/mathura-vrindavan-agra-tour-package" },

    { label: "6 Days Mathura Vrindavan Ayodhya Varanasi Tour", href: "/tour-packages/six-days/mathura-vrindavan-ayodhya-varanasi-tour" },
    { label: "Same Day Govardhan Barsana Tour", href: "/tour-packages/one-day/govardhan-barsana-tour" },


  ];

  const highlights = [
    "Krishna Janmabhoomi",
    "Banke Bihari Temple",
    "Prem Mandir Aarti",
    "Yamuna Aarti",
  ];

  const quickLinks = [
    { label: "All Packages", href: "/tour-packages" },
    { label: "Custom Yatra", href: "/" },
    { label: "About Us",     href: "/about" },
    { label: "Contact",      href: "/" },
  ];

  return (
    <>
     <EnquiryPopup open={isOpen} onClose={()=>setIsOpen(false)}/>
     <footer className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #fff3e8 0%, #ffe8d0 40%, #ffd4a8 100%)" }}>

      {/* ── Decorative large circles ── */}
      <div className="absolute pointer-events-none"
        style={{ width: 500, height: 500, borderRadius: "50%", top: -180, right: -120,
          background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)" }} />
      <div className="absolute pointer-events-none"
        style={{ width: 360, height: 360, borderRadius: "50%", bottom: -100, left: -80,
          background: "radial-gradient(circle, rgba(234,88,12,0.14) 0%, transparent 70%)" }} />

      {/* ── Concentric ring ornament (top-left) ── */}
      <div className="absolute pointer-events-none" style={{ top: 40, left: -60, opacity: 0.12 }}>
        {[120, 90, 60].map((s, i) => (
          <div key={i} className="absolute rounded-full border border-orange-500"
            style={{ width: s, height: s, top: (120 - s) / 2, left: (120 - s) / 2 }} />
        ))}
      </div>

      {/* ── Diagonal stripe texture ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(135deg, rgba(249,115,22,0.04) 0px, rgba(249,115,22,0.04) 1px, transparent 1px, transparent 28px)",
      }} />

      {/* ── Big OM watermark ── */}
      <div className="absolute pointer-events-none select-none"
        style={{ fontSize: 300, bottom: 20, right: -10, lineHeight: 1,
          color: "rgba(249,115,22,0.08)", fontWeight: 700 }}>
        ॐ
      </div>

      {/* ═══════════════HERO BAND ════════════════ */}
      <div className="relative z-10 border-b border-orange-200/60"
        style={{ background: "linear-gradient(90deg, #f97316 0%, #fb923c 50%, #f97316 100%)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-14 py-8
          flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">

          {/* Brand */}
          <div>
            <div className="text-white font-extrabold text-2xl tracking-tight leading-tight drop-shadow-sm">
              Mathura Vrindavan Tour
            </div>
            <div className="text-orange-100 text-sm mt-1 italic">
              श्री कृष्ण शरणम् मम:
            </div>
          </div>

          {/* CTA */}
          <button onClick={()=>setIsOpen(true)}
            className="inline-flex items-center cursor-pointer gap-2 bg-white text-orange-600 font-semibold
              text-sm px-5 py-2.5 rounded-full shadow-md
              hover:bg-orange-50 hover:shadow-lg transition-all duration-200 shrink-0">
            Plan Your Yatra
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>

      {/* ════════════════ MAIN GRID ════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Contact ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange-700 mb-6">
              Get in Touch
            </div>

            <div className="space-y-4">
              {[
                { icon: Phone, text: "+91 7302265809" },
                { icon: MapPin, text: "Mathura – Vrindavan Road,\nUttar Pradesh, India" },
                { icon: Mail, text: "info@vrindavanmathuraguide.com" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex gap-3 items-start group">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 shadow-sm transition-all duration-200 group-hover:scale-105"
                    style={{ background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.25)" }}>
                    <Icon size={15} className="text-orange-600" />
                  </div>
                  <span className="text-sm text-orange-900/70 leading-relaxed whitespace-pre-line pt-1.5">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Social row */}
            <div className="mt-7 flex gap-2.5">
              {socialMedia.map((s, i) => (
                <Link key={i} href={s.url} aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-110 hover:shadow-md"
                  style={{ background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.25)" }}>
                  <s.icon size={16} className="text-orange-600" />
                </Link>
              ))}
            </div>
          </div>

          {/* ── Tour Packages ── */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-orange-700 mb-6">
              Tour Packages
            </h4>
            <ul className="space-y-3.5">
              {packages.map((p, i) => (
                <li key={i}>
                  <Link href={p.href}
                    className="text-sm text-orange-900/65 hover:text-orange-600 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0
                      group-hover:scale-125 transition-transform" />
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Holy Sites ── */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-orange-700 mb-6">
              Holy Sites
            </h4>
            <ul className="space-y-3.5">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-orange-900/65">
                  <span className="text-orange-400 text-xs">✦</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Quick Links + Stats ── */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-orange-700 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3.5 mb-8">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <Link href={l.href}
                    className="text-sm text-orange-900/65 hover:text-orange-600 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0
                      group-hover:scale-125 transition-transform" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Stat cards */}
            <div className="grid grid-cols-1 gap-3">
              {[
                { num: "1200+", label: "Happy Pilgrims" },
                { num: "4.9 ★", label: "Average Rating"  },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl px-4 py-3 shadow-sm"
                  style={{
                    background: "rgba(249,115,22,0.12)",
                    border: "1px solid rgba(249,115,22,0.22)",
                  }}>
                  <div className="text-lg font-extrabold text-orange-600 leading-none">{s.num}</div>
                  <div className="text-xs text-orange-800/60 mt-1 tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ════════════════ DESTINATION STRIP ════════════════ */}
      <div className="relative z-10 border-t border-orange-200/60"
        style={{ background: "rgba(249,115,22,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4
          flex flex-wrap justify-center gap-x-1 gap-y-1 text-center">
          {["Mathura Vrindavan Tours","Govardhan Parikrama","Barsana Darshan","Braj 84 Kos Yatra","Prem Mandir Aarti"].map((d, i, arr) => (
            <span key={i} className="flex items-center gap-1">
              <span className="text-xs text-orange-600/55 tracking-wide">{d}</span>
              {i < arr.length - 1 && <span className="text-orange-400/40 text-xs">·</span>}
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════ BOTTOM BAR ════════════════ */}
      <div className="relative z-10 border-t border-orange-200/60">
        <div className="max-w-7xl mx-auto px-6 py-4
          flex flex-wrap items-center justify-between gap-3">
          <Link href="/privacy-policy"
            className="text-xs text-orange-700/50 hover:text-orange-600 transition-colors">
            Privacy Policy
          </Link>
          <p className="text-xs text-orange-700/50 text-center">
            © {new Date().getFullYear()} Mathura Vrindavan Tour · All rights reserved
          </p>
          <Link href="/refund-policy"
            className="text-xs text-orange-700/50 hover:text-orange-600 transition-colors">
            Refund Policy
          </Link>
        </div>
      </div>

    </footer>
    </>
    
  );
}