"use client";

import { useState, useEffect, useRef } from "react";
import QuickEnquiry from "../Home/QuickEnquiry";
import EnquiryPopup from "@/utils/EnquiryForm";

const TEMPLES = [
  { id: 1,  name: "Shri Banke Bihari Ji",       location: "Vrindavan" },
  { id: 2,  name: "Shri Krishna Janambhoomi",    location: "Mathura"   },
  { id: 3,  name: "Shri Dwarkadhish Temple",     location: "Mathura"   },
  { id: 4,  name: "Shri Radha Raman",            location: "Vrindavan" },
  { id: 5,  name: "Shri Rangji Temple",          location: "Vrindavan" },
  { id: 6,  name: "Shri Nidhivan",               location: "Vrindavan" },
  { id: 7,  name: "ISKCON Temple",               location: "Vrindavan" },
  { id: 8,  name: "Prem Mandir",                 location: "Vrindavan" },
  { id: 9,  name: "Seva / Sewa Kunj",            location: "Vrindavan" },
  { id: 10, name: "Bhuteshwar Mahadev",          location: "Mathura"   },
  { id: 11, name: "Shri Radha Rani Temple",      location: "Barsana"   },
  { id: 12, name: "Shri Nand Mahal",             location: "Nandgaon"  },
  { id: 13, name: "Shri Balram Temple",          location: "Vrindavan" },
  { id: 14, name: "Raman Reti",                  location: "Gokul"     },
  { id: 15, name: "Goverdhan Hill",              location: "Govardhan" },
  { id: 16, name: "Mata Vaishno Devi Temple",    location: "Mathura"   },
  { id: 17, name: "Madan Mohan Temple",          location: "Vrindavan" },
  { id: 18, name: "Birla Mandir",                location: "Mathura"   },
  { id: 19, name: "Pagal Baba",                  location: "Vrindavan" },
  { id: 20, name: "Katyani Peeth",               location: "Vrindavan" },
  { id: 21, name: "Govind Dev Ji Temple",        location: "Vrindavan" },
  { id: 22, name: "Dau Ji",                      location: "Baldeo"    },
  { id: 23, name: "84 Khambbha",                 location: "Mathura"   },
  { id: 24, name: "Rawal",                       location: "Rawal"     },
  { id: 25, name: "Chandrawali",                 location: "Vrindavan" },
];

const LOCATIONS = ["All", "Vrindavan", "Mathura", "Barsana", "Gokul", "Govardhan", "Nandgaon", "Baldeo", "Rawal"];

function useInView(ref: React.RefObject<HTMLElement>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

export default function TemplesSection() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null!);
  const inView = useInView(sectionRef);
  const [openEnq, setOpenEnq] = useState(false);
  const [openQui, setOpenQui] = useState(false);

  const filtered = active === "All" ? TEMPLES : TEMPLES.filter(t => t.location === active);

  return (
    <>
      <QuickEnquiry open={openQui} onClose={()=>setOpenQui(false)}/>
      <EnquiryPopup open={openEnq} onClose={()=>setOpenEnq(false)} />
      <section
      ref={sectionRef}
      className="relative bg-white py-14 px-4 overflow-hidden"
    >
      {/* ── clean top accent bar ── */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300" />

      <div className="relative max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div
          className={`text-center mb-16 transition-all duration-700 `}
        >
          {/* eyebrow */}
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-orange-400" />
            <span className="text-orange-500 text-xs font-semibold tracking-[.2em] uppercase">
              Sacred Destinations · 2026
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-orange-400" />
          </div>

          <h2 className="text-2xl sm:text-5xl font-bold text-orange-950 leading-tight mb-5">
            25 Must Visit Temples in
            <br />
            <span className="relative inline-block mt-1">
              <span className="text-orange-500">Vrindavan</span>
              {" & "}
              <span className="text-orange-500">Mathura</span>
              {/* animated underline */}
              <span
                className={`absolute left-0 -bottom-1.5 h-[3px] rounded-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-1000 delay-500 ${inView ? "w-full" : "w-0"}`}
              />
            </span>
          </h2>

          <p className="text-orange-800/60 text-base max-w-2xl mx-auto leading-relaxed">
            Follow in Krishna's footsteps through sacred temples, hidden treasures, and timeless spiritual landmarks.
            Your unforgettable divine journey starts here.
          </p>
        </div>

        {/* ── Filter tabs ── */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {LOCATIONS.map((loc) => (
            <button
              key={loc}
              onClick={() => setActive(loc)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 ${
                active === loc
                  ? "bg-orange-500 text-white border-orange-500 shadow-[0_4px_16px_rgba(234,88,12,0.35)]"
                  : "bg-white text-orange-700 border-orange-200 hover:border-orange-400 hover:bg-orange-50"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* ── count badge ── */}
        <div className="flex items-center justify-between mb-6 px-1">
          <span className="text-orange-400 text-xs font-medium tracking-widest uppercase">
            Showing {filtered.length} temples
          </span>
          <div className="flex items-center gap-1.5">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-4 h-4 fill-orange-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
            <span className="text-orange-800/50 text-xs ml-1">5.0 rated</span>
          </div>
        </div>

        {/* ── Temple grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((temple, idx) => (
            <div
              key={temple.id}
              onMouseEnter={() => setHovered(temple.id)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative flex items-center gap-4 bg-white rounded-2xl px-5 py-4 border border-orange-100 cursor-pointer transition-all duration-300 ${
                hovered === temple.id
                  ? "border-orange-400 shadow-[0_8px_32px_rgba(234,88,12,0.18)] -translate-y-0.5"
                  : "hover:border-orange-200 shadow-sm"
              } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: inView ? `${200 + idx * 40}ms` : "0ms" }}
            >
              {/* number */}
              <span
                className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  hovered === temple.id
                    ? "bg-orange-500 text-white shadow-[0_4px_12px_rgba(234,88,12,0.4)]"
                    : "bg-orange-50 text-orange-400"
                }`}
              >
                {String(temple.id).padStart(2, "0")}
              </span>

              {/* text */}
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold truncate transition-colors duration-200 ${
                  hovered === temple.id ? "text-orange-600" : "text-orange-950"
                }`}>
                  {temple.name}
                </p>
                <p className="text-[11px] text-orange-400/80 mt-0.5 tracking-wide">{temple.location}</p>
              </div>

              {/* arrow */}
              <svg
                className={`shrink-0 w-4 h-4 text-orange-300 transition-all duration-200 ${
                  hovered === temple.id ? "text-orange-500 translate-x-0.5" : ""
                }`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>

              {/* left accent bar */}
              <span
                className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-gradient-to-b from-orange-400 to-orange-600 transition-all duration-300 ${
                  hovered === temple.id ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* ── CTA strip ── */}
        <div
          className={`mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl px-8 py-6 shadow-[0_16px_48px_rgba(234,88,12,0.35)] transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="text-white font-bold text-lg">Plan Your Divine Journey</p>
            <p className="text-orange-100/80 text-sm mt-0.5">Get personalised Vrindavan & Mathura packages curated for you.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button onClick={()=>setOpenEnq(true)} className="group cursor-pointer relative inline-flex items-center gap-2 bg-white text-orange-600 font-semibold text-xs md:text-sm px-3 md:px-6 py-3 rounded-full shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 overflow-hidden">
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-orange-100/60 to-transparent" />
              Enquire Now
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button onClick={()=>setOpenQui(true)} className="text-orange-100/80 cursor-pointer hover:text-white text-sm font-medium transition-colors duration-200 whitespace-nowrap">
              Connect with Expert →
            </button>
          </div>
        </div>

      </div>
    </section>
    </>
   
  );
}