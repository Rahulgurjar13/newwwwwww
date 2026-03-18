"use client";

import EnquiryPopup from "@/utils/EnquiryForm";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import CountUp from "@/utils/CountUp";
import Link from "next/link";


function SacredDivider() {
  return (
    <div className="flex items-center gap-3 my-2 md:my-6 lg:my-6 ">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
      <span className="text-amber-500 text-lg">✦</span>
      <span className="text-amber-400 text-sm">ॐ</span>
      <span className="text-amber-500 text-lg">✦</span>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
    </div>
  );
}

export default function HeroTemple({ TempleData }: { TempleData: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);


  return (
    <>

      <EnquiryPopup onClose={() => setIsOpen(false)} open={isOpen} />

      {/* ── HERO */}

      <section
        className="relative overflow-hidden pb-28 pt-10 md:pt-14 lg:pt-14"
        style={{
          background: "linear-gradient(145deg, #7A2E00 0%, #A84010 40%, #D4621A 75%, #E8821A 100%)",
        }}
      >
        {/* ── Breadcrumbs ── */}
        <nav className="max-w-7xl mx-auto px-6 mb-3 -mt-6">
          <ol className="flex items-center flex-wrap gap-2 text-xs md:text-sm">

            {/* Home */}
            <li className="flex items-center gap-2">
              <Link
                href="/"
                className="text-amber-200/80 hover:text-white transition-colors"
              >
                Home
              </Link>

              <svg
                className="w-3 h-3 text-amber-300/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>

            {/* Temples */}
            <li className="flex items-center gap-2">
              <Link
                href="/mathura-vrindavan-temples"
                className="text-amber-200/80 hover:text-white transition-colors"
              >
                Temples
              </Link>

              <svg
                className="w-3 h-3 text-amber-300/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>

            {/* Current Page */}
            <li className="max-w-[220px] md:max-w-[360px]">
              <span
                className="bg-white/10 backdrop-blur px-3 py-1 rounded-full text-amber-100 truncate block"
                title={TempleData.title}
              >
                {TempleData.title}
              </span>
            </li>

          </ol>
        </nav>

        {/* Subtle ambient blobs*/}
        <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-orange-300 blur-[160px] opacity-20 pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[340px] h-[340px] bg-yellow-300 blur-[140px] opacity-15 pointer-events-none" />


        <div
          className="absolute -top-28 -right-28 w-[460px] h-[460px] rounded-full opacity-10 pointer-events-none"
          style={{ border: "1.5px dashed #F2C94C" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* Grid: left text | right image — both start at same top */}
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* LEFT */}
            <div className="pt-1 md:pt-2 lg:pt-2">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/25 text-amber-100 px-5 py-2 ml-10 md:ml-0 lg:ml-0 rounded-full text-xs tracking-[0.16em] uppercase font-medium">
                <span className="w-1.5 h-1.5 bg-amber-300 rounded-full inline-block" />
                Sacred Temple Guide
              </div>

              {/* Title */}
              <h1
                className="text-lg md:text-2xl text-center md:text-start lg:text-start font-bold leading-tight mt-5"
                style={{ color: "#FDF6EC" }}
              >
                {TempleData.title}
              </h1>

              {/* Location */}
              <div className="flex items-center gap-2 mt-4">
                <svg className="w-4 h-4 text-amber-300 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-amber-200/90 text-sm tracking-wide">{TempleData.location}</span>
              </div>

              <SacredDivider />

              {/* Description */}
              <div className="max-w-xl">

                <p
                  className={`text-amber-50/80 leading-relaxed text-xs md:text-lg transition-all duration-300 ${expanded ? "" : "line-clamp-3"
                    }`}
                >
                  {TempleData.subcontent}
                </p>

                {TempleData.subcontent?.length > 120 && (
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-3 text-sm cursor-pointer font-medium text-amber-300 hover:text-amber-200 transition flex items-center gap-1 group"
                  >
                    {expanded ? "Read Less" : "Read More"}

                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : "group-hover:translate-x-1"
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}

              </div>

              {/* CTA */}
              <div className="flex items-center gap-5 mt-8">
                <button
                  className="cta-btn cursor-pointer text-white px-10 py-4 rounded-full font-semibold text-xs md:text-base lg:text-base tracking-wide shadow-lg "
                  onClick={() => setIsOpen(true)}
                >
                  Plan Your Visit
                </button>
                <button className="text-amber-200/80 text-sm tracking-wide hover:text-amber-100 transition flex items-center gap-2 group">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Stats */}

            </div>

            {/* RIGHT — image starts at same level as heading */}
            <div className="relative">
              {/* Decorative arch above image */}
              <div
                className="absolute -top-5 left-1/2 -translate-x-1/2 w-[82%] h-20 rounded-t-full pointer-events-none opacity-20"
                style={{ border: "1px solid #F2C94C", borderBottom: "none" }}
              />

              {/* Gold border image frame */}
              <div
                className="relative rounded-[28px] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.40)]"
                style={{ border: "1.5px solid rgba(242,201,76,0.45)" }}
              >
                <Image
                  src={TempleData.image}
                  alt={TempleData.alt}
                  width={600}
                  height={520}
                  priority
                  className="object-cover w-full"
                />

                {/* Bottom overlay */}
                <div
                  className="absolute bottom-0 inset-x-0 h-32"
                  style={{ background: "linear-gradient(to top, rgba(60,16,4,0.75) 0%, transparent 100%)" }}
                />

                {/* Floating badge on image */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <div className="bg-black/45 backdrop-blur border border-amber-400/30 rounded-xl px-4 py-2.5">
                    <p className="text-amber-300 text-xs tracking-wider uppercase font-medium">Temple Darshan</p>
                    <p className="text-white/80 text-xs mt-0.5">{TempleData.timing?.[0]?.title ?? "Open Daily"}</p>
                  </div>
                  <div className="bg-amber-500 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-md flex items-center gap-1.5">
                    LIVE DARSHAN
                    <span className="w-1.5 h-1.5 bg-white rounded-full inline-block" />
                  </div>
                </div>
              </div>

              {/* Om glyph corner */}
              <span className="absolute -top-3 -right-2 text-amber-400/35 text-4xl select-none">ॐ</span>
              <div className="flex gap-10 mt-10 pt-8 border-t border-white/15">
                {[
                  { num: "500", suff: '+', label: "Years Heritage" },
                  { num: "10", suff: 'k+', label: "Daily Devotees" },
                  { num: "365", suff: '', label: "Days Open" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl font-bold" style={{ color: "#F2C94C" }}><CountUp end={Number(s.num)} suffix={s.suff} /> </p>
                    <p className="text-amber-200/60 text-xs tracking-widest uppercase mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Wave curve divider */}
        <div className="wave-bottom" />
      </section>

      {/* ── VISITOR GUIDE */}
      
   
    </>
  );
}  