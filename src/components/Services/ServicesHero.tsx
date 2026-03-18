"use client";

import {
  Star, 
  ArrowRight, Phone,
} from "lucide-react";
import { Suspense, useMemo, useState } from "react";
import dynamic from "next/dynamic";
const EnquiryPopup = dynamic(()=>import('@/utils/EnquiryForm'));
const QuickEnquiry = dynamic(()=>import('../Home/QuickEnquiry'));
import Link from "next/link";






/* ── COMPONENT ────────────────────────────────────────────────────────────── */
export default function ServicesHero() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const STATS = useMemo(()=>[
  { value: "5000+", label: "Happy Pilgrims" },
  { value: "7",     label: "Premium Services" },
  { value: "4.9★",  label: "Average Rating" },
  { value: "24/7",  label: "Guest Support" },
],[]);
  
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
       <EnquiryPopup open={open} onClose={()=>setOpen(false)}/>
    <QuickEnquiry open={isOpen} onClose={()=>setIsOpen(false)}/>
    </Suspense> 
    <section className="relative w-full overflow-hidden bg-[#FFFAF6]">

      {/* ── DECORATIVE BG BLOBS ── */}

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="my-4 mb-3 flex justify-center"
      >
        <ol
          className="flex items-center gap-2 text-xs sm:text-sm
          px-4 py-2 rounded-full
          bg-white border border-orange-200
          text-gray-600 shadow-sm"
        >
          <li>
            <Link
              href="/"
              className="hover:text-orange-600 transition-colors"
            >
              Home
            </Link>
          </li>

          <li className="text-gray-400">/</li>

          <li className="text-orange-600 font-medium">
            Services
          </li>
        </ol>
      </nav>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #FF6B00 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute  -left-32 w-[400px] h-[400px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #FF9200 0%, transparent 70%)" }}
      />

      {/*
          HERO SECTION
     */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 text-center">

        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 mb-6">
          <Star size={13} fill="#FF6B00" stroke="none" />
          <span className="text-xs font-semibold tracking-wide text-orange-600 uppercase">
            Premium Guest Services · Vrindavan
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl font-black tracking-tight text-gray-900 leading-[1.1] mb-5">
          Vrindavan&nbsp;
          <span
            className="relative inline-block"
            style={{ color: "#FF6B00" }}
          >
            Guest Services
            {/* underline stroke */}
             <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 9 C60 3, 180 3, 298 9"
                stroke="#FF6B00"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </span>
        </h1>

        {/* Sub-heading */}
        <p className="mx-auto max-w-2xl text-lg text-gray-500 leading-relaxed mb-10">
          Crafted for devotees and travellers seeking a sacred, seamless experience
          in the holy land of Vrindavan. Every service, curated with devotion.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
             onClick={()=>setOpen(true)}
            className="inline-flex items-center gap-2 cursor-pointer rounded-xl px-7 py-3.5 text-sm font-semibold text-white transition-all"
            style={{
              background: "linear-gradient(135deg, #FF6B00, #FF9200)",
              boxShadow: "0 6px 24px rgba(255,107,0,.32)",
            }}
          >
            Book a Service <ArrowRight size={15} />
          </button>
          <button
            onClick={()=>setIsOpen(true)}
            className="inline-flex items-center gap-2 cursor-pointer  rounded-xl border-2 border-orange-400 px-7 py-3.5 text-sm font-semibold text-orange-600 bg-white hover:bg-orange-50 transition-all"
          >
            <Phone size={14}  /> Call Now
          </button>
        </div>

        {/* Stats bar */}
        <div className="mx-auto grid max-w-3xl grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-orange-100 bg-orange-100">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center py-5 bg-white">
              <span className="text-2xl font-black text-gray-900">{value}</span>
              <span className="mt-1 text-xs text-gray-500 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>


    
      </section>
    </>
  
  );
}

