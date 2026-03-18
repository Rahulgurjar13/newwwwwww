"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Clock, MapPin, Bell, ChevronDown } from "lucide-react";
import Link from "next/link";

const QUICK_STATS = [
  { icon: Clock,  value: "5:00 AM", label: "Earliest Opens"  },
  { icon: Bell,   value: "30+",     label: "Temples Listed"  },
  { icon: MapPin, value: "2 Cities", label: "Mathura & Vrindavan" },
];

const FLOATING_TIMES = ["5:00 AM", "12:00 PM", "7:30 PM", "8:00 AM", "6:00 PM", "9:00 AM"];

export default function TempleTimingsHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-orange-950
      min-h-[380px] sm:min-h-[440px] md:min-h-[500px] lg:min-h-[520px]
      flex flex-col"
    >
     {/* BREADCRUMBS */}
      <nav
        aria-label="Breadcrumb"
        className="absolute left-6 sm:left-10 md:left-14 lg:left-20 top-4 z-40"
      >
        <ol
          className="flex items-center gap-2 text-xs sm:text-sm
          px-4 py-2 rounded-full
          bg-white/10 backdrop-blur-md
          border border-orange-300/20
          text-orange-100 shadow-lg"
        >
          <li>
            <Link
              href="/"
              className="hover:text-orange-400 transition-colors duration-200"
            >
              Home
            </Link>
          </li>

          <li className="text-orange-300/60">/</li>

          <li>
            <Link
              href="/mathura-vrindavan-temple-timings"
              className="hover:text-orange-400 transition-colors duration-200"
            >
              Temple Timings
            </Link>
          </li>
        </ol>
      </nav>

          

      {/* ── Background Image ── */}
      <Image
        src="/images/temple-timings-hero.webp"
        alt="Mathura Vrindavan temples"
        fill
        priority
        sizes="100vw"
        className={[
          "object-cover object-center transition-transform duration-[1600ms] ease-out",
          mounted ? "scale-100" : "scale-108",
        ].join(" ")}
      />

      {/* ── Multi-layer overlay: deep orange-brown, not black ── */}
      <div className="absolute inset-0 bg-gradient-to-b
        from-orange-950/80 via-orange-900/70 to-orange-950/95" />
      <div className="absolute inset-0 bg-gradient-to-r
        from-orange-950/60 via-transparent to-orange-950/40" />

      {/* ── Top-left warm glow ── */}
      <div className="absolute -top-20 -left-20 w-72 h-72 sm:w-96 sm:h-96
        rounded-full bg-orange-500/20 blur-3xl pointer-events-none" />

      {/* ── Bottom-right accent glow ── */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 sm:w-80 sm:h-80
        rounded-full bg-orange-400/15 blur-3xl pointer-events-none" />

      {/* ── Floating clock chips (decorative, hidden on mobile) ── */}
      {FLOATING_TIMES.map((time, i) => (
        <div
          key={i}
          className={[
            "hidden lg:flex absolute items-center gap-1.5",
            "bg-white/8 backdrop-blur-sm border border-orange-300/20",
            "text-orange-200 text-[11px] font-semibold px-3 py-1.5 rounded-full",
            "transition-all duration-1000",
            mounted ? "opacity-100" : "opacity-0",
          ].join(" ")}
          style={{
            top:              ["18%","62%","28%","75%","42%","85%"][i],
            right:            ["8%", "6%","12%","14%","5%", "18%"][i],
            transitionDelay:  `${600 + i * 150}ms`,
            transform:        `translateY(${[0,8,-6,4,-3,6][i]}px)`,
            animation:        `floatChip ${[4,5,4.5,5.5,4.2,5.2][i]}s ease-in-out ${i*0.4}s infinite alternate`,
          }}
        >
          <Clock size={10} className="text-orange-400" />
          {time}
        </div>
      ))}

      {/* ── Thin top orange bar ── */}
      <div className="absolute top-0 left-0 right-0 h-1
        bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600" />

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col justify-center flex-1
        px-5 sm:px-10 md:px-14 lg:px-20
        pt-10 pb-8 sm:pt-14 sm:pb-10 md:pt-16 md:pb-12
        max-w-6xl mx-auto w-full"
      >

        {/* Eyebrow badge */}
        <div
          className={[
            "inline-flex items-center gap-2 mb-4 sm:mb-5 w-fit",
            "px-3 sm:px-4 py-1 sm:py-1.5 rounded-full",
            "border border-orange-400/35 bg-orange-400/12",
            "text-orange-300 text-[10px] sm:text-[11px] font-semibold tracking-[.18em] uppercase",
            "transition-all duration-700",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
          style={{ transitionDelay: "200ms" }}
        >
          <Bell size={11} className="text-orange-400 animate-[ring_2s_ease-in-out_infinite]" />
          Complete Temple Guide · 2026
        </div>

        {/* Heading */}
        <h1
          className={[
            "font-bold text-white leading-[1.1] mb-4 sm:mb-5",
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
            "transition-all duration-700",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
          style={{ transitionDelay: "380ms" }}
        >
          Mathura Vrindavan
          <br />
          <span className="relative">
            <span className="text-orange-400">Temple </span>
            <span className="italic text-orange-200">Timings</span>
            {/* animated underline */}
            <span
              className={[
                "absolute left-0 -bottom-1.5 h-[3px] rounded-full",
                "bg-gradient-to-r from-orange-500 to-orange-300",
                "transition-all duration-700",
                mounted ? "w-full" : "w-0",
              ].join(" ")}
              style={{ transitionDelay: "1200ms" }}
            />
          </span>
        </h1>

        {/* Sub text */}
        <p
          className={[
            "text-orange-100/70 leading-relaxed mb-8 sm:mb-10",
            "text-sm sm:text-base max-w-xs sm:max-w-md md:max-w-lg",
            "transition-all duration-700",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
          style={{ transitionDelay: "520ms" }}
        >
          Plan your visit with accurate darshan timings, aarti schedules, and
          entry details for all major temples in{" "}
          <span className="text-orange-300 font-medium">Mathura</span> and{" "}
          <span className="text-orange-300 font-medium">Vrindavan</span>.
        </p>

        {/* ── Stats row ── */}
        <div
          className={[
            "flex flex-wrap items-center gap-x-6 gap-y-4 sm:gap-x-8 mb-8 sm:mb-10",
            "transition-all duration-700",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
          style={{ transitionDelay: "660ms" }}
        >
          {QUICK_STATS.map((s, i) => (
            <div key={i} className="flex items-center gap-2.5 sm:gap-3">
              {/* icon bubble */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl
                bg-orange-500/25 border border-orange-400/30
                flex items-center justify-center shrink-0">
                <s.icon size={14} className="text-orange-400" />
              </div>
              <div>
                <p className="text-white font-bold text-sm sm:text-base leading-none mb-0.5">
                  {s.value}
                </p>
                <p className="text-orange-200/60 text-[10px] sm:text-xs uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
              {/* divider — only between items */}
              {i < QUICK_STATS.length - 1 && (
                <div className="hidden sm:block w-px h-8 bg-orange-300/20 ml-2 sm:ml-3" />
              )}
            </div>
          ))}
        </div>

        {/* ── CTA buttons ── */}
        <div
          className={[
            "flex flex-wrap items-center gap-3 sm:gap-4",
            "transition-all duration-700",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
          style={{ transitionDelay: "800ms" }}
        >
          {/* Primary */}
          <a
            href="#temple-timings"
            className="group relative inline-flex items-center gap-2 sm:gap-2.5 overflow-hidden
              px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full
              bg-gradient-to-r from-orange-500 to-orange-600 text-white
              text-xs sm:text-sm font-semibold
              shadow-[0_6px_24px_rgba(234,88,12,0.45)]
              hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(234,88,12,0.55)]
              transition-all duration-200"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full
              transition-transform duration-500
              bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            View All Timings
            <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform duration-200" />
          </a>

          {/* Secondary */}
          <a
            href="#plan-visit"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full
              border border-orange-300/30 bg-white/8 backdrop-blur-sm
              text-orange-200 hover:text-white hover:border-orange-300/60 hover:bg-white/12
              text-xs sm:text-sm font-medium
              transition-all duration-200"
          >
            <Clock size={13} />
            Aarti Schedule
          </a>
        </div>
      </div>

      {/* ── Bottom scroll cue ── */}
      <div
        className={[
          "relative z-10 flex justify-center pb-4 sm:pb-6",
          "transition-all duration-700",
          mounted ? "opacity-100" : "opacity-0",
        ].join(" ")}
        style={{ transitionDelay: "1600ms" }}
      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[.2em] text-orange-300/50">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border border-orange-300/25 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-orange-400/70 animate-bounce" />
          </div>
        </div>
      </div>

      {/* keyframes */}
      <style>{`
        @keyframes floatChip {
          from { transform: translateY(0px);   }
          to   { transform: translateY(-10px); }
        }
        @keyframes ring {
          0%, 100% { transform: rotate(0deg);   }
          15%       { transform: rotate(15deg);  }
          30%       { transform: rotate(-12deg); }
          45%       { transform: rotate(8deg);   }
          60%       { transform: rotate(-5deg);  }
          75%       { transform: rotate(0deg);   }
        }
      `}</style>
    </section>
  );
}