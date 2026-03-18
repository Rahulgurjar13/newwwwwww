"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { supabase } from "@/lib/supabase/SupabaseConfig";
import EnquiryPopup from "@/utils/EnquiryForm";

type TimingType = {
   id : string;
   title : string;
}

type BestVisitType = {
   id : string;
   title : string;
}

type Temple = {
  id: string;
  title: string;
  location: string;
  slug: string;
  image: string;
  subContent : string;
  excerpt: string;
  timing : TimingType;
  bestVisite : BestVisitType;
  tag?: string;
};


function useInView(ref: React.RefObject<HTMLElement>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

const TAG_COLORS: Record<string, string> = {
  "Must Visit": "bg-orange-100 text-orange-600",
  Heritage:     "bg-amber-100 text-amber-700",
  Sacred:       "bg-yellow-100 text-yellow-700",
  Pilgrimage:   "bg-orange-50 text-orange-500",
  Popular:      "bg-red-50 text-red-500",
  Ancient:      "bg-stone-100 text-stone-600",
};

export default function FamousTemplesSection() {
  const [hovered, setHovered] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null!);
  const inView = useInView(sectionRef);
  const [temples, setTemples] = useState<any[] | []>([])
  const [open, setOpen] = useState(false);

 async function getTemples(){
     const {data, error} = await supabase.from('Temple').select('*');

     if(error){
       console.log("Error Famous Temple", error);
       return;
     }

     setTemples(data);
  
  }

  useEffect(()=>{
     getTemples();
  },[])

  return (
    <>
      <EnquiryPopup open={open} onClose={()=>setOpen(false)}/>
      <section ref={sectionRef} className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className={`mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-orange-400" />
            <span className="text-orange-500 text-xs font-semibold tracking-[.2em] uppercase">
              Sacred Places
            </span>
          </div>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-950 leading-tight">
              Famous Temples of{" "}
              <span className="text-orange-500">Mathura Vrindavan</span>
            </h2>
            <Link
              href="/temples"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors duration-200 group"
            >
              View all temples
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {temples.map((temple, idx) => (
            <div
              key={temple.id}
              onMouseEnter={() => setHovered(temple.id)}
              onMouseLeave={() => setHovered(null)}
              className={[
                "group relative bg-white rounded-2xl overflow-hidden border transition-all duration-300",
                hovered === temple.id
                  ? "border-orange-300 shadow-[0_12px_40px_rgba(234,88,12,0.15)] -translate-y-1"
                  : "border-orange-100 shadow-sm",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              ].join(" ")}
              style={{ transitionDelay: inView ? `${idx * 80}ms` : "0ms" }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                 
                  src={temple.image}
                  alt={temple.title}
                  loading="lazy"
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* gradient fade bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />

                {/* Tag pill */}
                {/* {temple.tag && (
                  <span className={`absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full ${TAG_COLORS[temple.tag] ?? "bg-orange-100 text-orange-600"}`}>
                    {temple.location}
                  </span>
                )} */}
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col gap-3">
                {/* Title + location */}
                <div>
                  <h3 className="text-base font-bold text-orange-950 leading-snug group-hover:text-orange-600 transition-colors duration-200">
                    {temple.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs text-orange-400 mt-1">
                    <MapPin size={11} />
                    {temple.location}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-orange-50" />

                {/* Excerpt */}
                <p className="text-sm text-stone-500 leading-relaxed line-clamp-3">
                  {temple.subcontent}
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-2 pt-1">
                  <button onClick={()=>setOpen(true)} className="flex-1 cursor-pointer inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-orange-600 border border-orange-200 rounded-full px-4 py-2 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200">
                    <Phone size={11} />
                    Request a Callback
                  </button>
                  <Link
                    href={`mathura-vrindavan-temples/${temple.slug}`}
                    className="flex-1  cursor-pointer inline-flex items-center justify-center gap-1 text-xs font-semibold text-stone-500 border border-stone-200 rounded-full px-4 py-2 hover:bg-stone-100 transition-all duration-200"
                  >
                    Read More
                    <ArrowRight size={11} />
                  </Link>
                </div>
              </div>

              {/* Bottom orange accent line on hover */}
              <span
                className={`absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 ${
                  hovered === temple.id ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
   
  );
}