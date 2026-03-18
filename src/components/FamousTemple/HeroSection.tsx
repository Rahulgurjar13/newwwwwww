"use client";

import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
const EnquiryPopup = dynamic(()=>import('@/utils/EnquiryForm'))

const STATS = [
  { num: "25+", label: "Sacred Temples" },
  { num: "5K+", label: "Pilgrims Served" },
  { num: "4.9★", label: "Avg Rating" },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
          <EnquiryPopup open={open} onClose={() => setOpen(false)} />
      </Suspense>

      <section className="w-full bg-orange-50 px-3 sm:px-4 lg:px-6 py-4 sm:py-6">

        {/* ── Card ── */}
        <div
          className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl sm:rounded-3xl
            h-[400px] sm:h-[440px] md:h-[470px] lg:h-[500px]
            shadow-[0_16px_48px_rgba(194,65,12,0.22)] sm:shadow-[0_40px_100px_rgba(194,65,12,0.32)]"
        >
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="absolute left-5 sm:left-9 md:left-11 lg:left-14 top-4 z-20"
          >
            <ol className="flex items-center gap-2 text-[11px] sm:text-xs px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-orange-300/25 text-orange-100 shadow-lg">
              <li>
                <Link href="/" className="hover:text-orange-300 transition-colors duration-200">
                  Home
                </Link>
              </li>

              <li className="text-orange-300/60">/</li>

              <li aria-current="page" className="text-orange-200/80">
                Mathura Vrindavan Temples
              </li>
            </ol>
          </nav>

          {/* Background Image */}
          <Image
            src="/images/Home/AboutUsSmall.webp"
            alt="Mathura Vrindavan temples"
            fill
            priority
            sizes="(max-width:640px) 100vw, (max-width:1024px) 95vw, 1200px"
            className={[
              "object-cover transition-transform duration-[1400ms] ease-out",
              mounted ? "scale-100" : "scale-110",
            ].join(" ")}
          />

          {/* Warm orange overlay — stronger on mobile so text is legible */}
          <div className="absolute inset-0
            bg-gradient-to-r from-orange-900/95 via-orange-800/85 to-orange-700/50
            sm:from-orange-900/90 sm:via-orange-800/72 sm:to-orange-600/25
            lg:to-orange-500/15" />

          {/* Ambient glow */}
          <div className="absolute -top-12 -left-12 rounded-full pointer-events-none animate-pulse
            w-52 h-52 sm:w-80 sm:h-80 lg:w-[480px] lg:h-[520px]
            bg-orange-600/20 blur-3xl" />

          {/* Mandala rings — only md+ */}
          <div className="hidden md:block absolute -right-16 -bottom-16 rounded-full border border-orange-400/20
            w-64 h-64 lg:w-96 lg:h-96 animate-spin [animation-duration:28s]">
            <div className="absolute inset-4 rounded-full border border-dashed border-orange-400/15
              animate-spin [animation-duration:18s] [animation-direction:reverse]" />
            <div className="absolute inset-8 rounded-full border border-orange-400/10
              animate-spin [animation-duration:12s]" />
          </div>

          {/* Corner pulse dot */}
          <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-orange-400/70 animate-pulse" />

          {/* ── Content ── */}
          <div className="relative z-10 flex flex-col justify-center h-full
            px-5 sm:px-9 md:px-11 lg:px-14
            max-w-full sm:max-w-md md:max-w-xl"
          >

            {/* Badge */}
            <div
              className={[
                "inline-flex items-center gap-2 mb-4 sm:mb-5 w-fit",
                "px-3 sm:px-4 py-1 sm:py-1.5 rounded-full",
                "border border-orange-500/40 bg-orange-500/15 text-orange-300",
                "text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase",
                "transition-all duration-700",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
              ].join(" ")}
              style={{ transitionDelay: "300ms" }}
            >
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span>25 Sacred Temples · Vrindavan &amp; Mathura</span>
            </div>

            {/* Heading */}
            <h1
              className={[
                "font-bold text-orange-50 leading-[1.1] mb-4 sm:mb-5 transition-all duration-700",
                "text-[28px] sm:text-4xl md:text-5xl",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              ].join(" ")}
              style={{ transitionDelay: "500ms" }}
            >
              Famous{" "}
              <span className="italic text-orange-400">Temples</span>
              {" "}of
              <br />
              <span className="relative inline-block">
                Mathura Vrindavan
                <span
                  className={[
                    "absolute left-0 -bottom-1 h-[3px] rounded-full",
                    "bg-gradient-to-r from-orange-500 to-orange-300",
                    "transition-all duration-700",
                    mounted ? "w-full" : "w-0",
                  ].join(" ")}
                 
                />
              </span>
            </h1>

            {/* Sub text — hidden on xs, visible sm+ */}
            <p
              className={[
                "hidden sm:block text-xs sm:text-sm text-orange-100/80 leading-relaxed",
                "mb-5 sm:mb-7 max-w-[280px] sm:max-w-sm transition-all duration-700",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              ].join(" ")}
              style={{ transitionDelay: "700ms" }}
            >
              Embark on a{" "}
              <span className="text-orange-50 font-medium">divine journey</span>{" "}
              through must-visit temples. Experience the sacred atmosphere and create
              memories that last a lifetime with our curated packages.
            </p>

            {/* Stats row */}
            <div
              className={[
                "flex items-center gap-3 sm:gap-5 mb-5 sm:mb-7 transition-all duration-700",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              ].join(" ")}
              style={{ transitionDelay: "900ms" }}
            >
              {STATS.map((s, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-5">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm sm:text-xl font-bold text-orange-300 leading-none">
                      {s.num}
                    </span>
                    <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-orange-200/60">
                      {s.label}
                    </span>
                  </div>
                  {i < STATS.length - 1 && (
                    <div className="w-px h-5 sm:h-8 bg-orange-300/20" />
                  )}
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div
              className={[
                "flex items-center gap-3 sm:gap-4 transition-all duration-700",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              ].join(" ")}
              style={{ transitionDelay: "1100ms" }}
            >
              {/* Primary button */}
              <button
                onClick={() => setOpen(true)}
                className="group relative inline-flex items-center gap-2 sm:gap-3 cursor-pointer
                  px-4 sm:px-6 lg:px-7 py-2.5 sm:py-3 lg:py-3.5 rounded-full
                  bg-gradient-to-br from-orange-500 to-orange-700 text-white
                  text-xs sm:text-sm font-semibold whitespace-nowrap
                  shadow-[0_6px_20px_rgba(234,88,12,0.4)] sm:shadow-[0_8px_28px_rgba(234,88,12,0.45)]
                  hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(234,88,12,0.55)]
                  transition-all duration-200 overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                  transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                Enquire Now
                <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/25 flex items-center justify-center
                  text-[10px] group-hover:translate-x-0.5 transition-transform duration-200">
                  →
                </span>
              </button>

              {/* Ghost button */}
              <Link
                href="/tour-packages"
                className="group inline-flex items-center gap-2 sm:gap-2.5
                  text-orange-100/70 hover:text-orange-200 text-xs sm:text-sm
                  transition-colors duration-200 whitespace-nowrap"
              >
                <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-full shrink-0
                  border border-orange-200/30 group-hover:border-orange-300/70
                  group-hover:bg-orange-400/20 flex items-center justify-center
                  text-[9px] sm:text-[10px] transition-all duration-200">
                  ▶
                </span>
                <span className="hidden sm:inline">Watch Tour</span>
              </Link>
            </div>
          </div>

          {/* Scroll hint — sm+ only */}
          <div
            className={[
              "hidden sm:flex absolute bottom-5 right-6 sm:bottom-6 sm:right-10",
              "items-center gap-2 transition-all duration-700",
              mounted ? "opacity-100" : "opacity-0",
            ].join(" ")}
            style={{ transitionDelay: "1800ms" }}
          >
            <div className="w-7 sm:w-9 h-px bg-gradient-to-r from-transparent to-orange-400/60" />
            <span className="text-[9px] uppercase tracking-[.16em] text-orange-200/50">
              Scroll to explore
            </span>
          </div>

        </div>
      </section>
    </>
  );
}