"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: 1,
    title: "VIP Darshan & Puja",
    points: ["Priority Temple Access", "Guided Worship", "Personalized Rituals"],
    image: "/images/Services/VIP-Darshan-&-Puja-converted.webp",
    alt: "VIP darshan and puja service in Mathura Vrindavan temples with priority access"
  },
  {
    id: 2,
    title: "Luxury Transport",
    points: [
      "Chauffeur-driven Comfort",
      "Local Tours",
      "Airport Transfers",
      "Sedan / SUV / MUV / Urbania"
    ],
    image: "/images/Services/Luxury-Transport_converted.webp",
    alt: "Luxury transport service for Mathura Vrindavan tour with chauffeur driven car"
  },
  {
    id: 3,
    title: "Certified Spiritual Guides",
    points: [
      "Expert Knowledge of Local History",
      "Mythology & Sacred Sites",
      "Personalised Narration"
    ],
    image: "/images/Services/Certified-Spiritual-Guides-converted.webp",
    alt: "Certified spiritual guide explaining Vrindavan and Mathura temple history and mythology"
  },
  {
    id: 4,
    title: "Traditional Artists & Bhajans",
    points: ["Live Music", "Local Art", "Devotional Experience"],
    image: "/images/Services/Traditional-Artists-&-Bhajans_converted.webp",
    alt: "Traditional bhajan artists performing devotional music in Vrindavan temples"
  },
  {
    id: 5,
    title: "Yamuna Boating",
    points: ["Serene Boat Rides", "Sunset Views", "Yamuna Aarti Experience"],
    image: "/images/Services/Yamuna-Boating_converted.webp",
    alt: "Boat ride on Yamuna river during Mathura Vrindavan spiritual tour"
  },
  {
    id: 6,
    title: "Seva Arrangements",
    points: [
      "Organise Offerings",
      "Gau Daan",
      "Personalised Temple Contribution"
    ],
    image: "/images/Services/Gau-Daan_converted.webp",
    alt: "Gau daan and seva arrangements at temples in Mathura and Vrindavan"
  },
  {
    id: 7,
    title: "Photo & Videography Services",
    points: [
      "Hire Professional Photographer",
      "Videographer for Content Creation / Events"
    ],
    image: "/images/Services/Photo-&-Videography_converted.webp",
    alt: "Professional photography and videography service for Vrindavan temple tours"
  },
  {
    id: 8,
    title: "Foreign Currency Exchange",
    points: [
      "Instant Currency Conversion",
      "Major International Currencies Accepted",
      "Secure & Trusted Exchange Service",
      "Competitive Exchange Rates"
    ],
    image: "/images/Services/MoneyExchange.webp",
    alt: "Foreign currency exchange service for international tourists visiting Mathura Vrindavan"
  }
];

function ServiceCard({ s, index }: { s: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
      bg-white border border-orange-200 rounded-xl p-4 sm:p-5 shadow-sm
       flex flex-row items-center gap-4 sm:gap-5
      transition-all duration-500
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}
      `}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      {/* TEXT */}
      <div className="flex-1 w-full">
        <h3 className="text-sm font-semibold text-orange-900 uppercase tracking-wider mb-2">
          {s.title}
        </h3>

        <ul className="flex flex-col gap-1">
          {s.points.map((pt, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-[5px] h-[5px] rounded-full bg-orange-500 mt-[6px]" />
              <span className="text-[0.85rem] sm:text-[0.9rem] text-neutral-700 leading-relaxed">
                {pt}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* IMAGE */}
      <div className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] rounded-full flex-shrink-0 bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-dashed border-orange-300 flex items-center justify-center overflow-hidden relative">

        {/* Replace with Image */}
        <Image src={s.image} alt={s.alt} fill loading='lazy' />
        
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setHeaderVisible(true);
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative bg-orange-50 py-16 sm:py-20 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[700px] h-[300px] bg-[radial-gradient(ellipse,rgba(249,115,22,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* OM Watermark */}
      <div className="absolute bottom-[2%] right-[2%] text-[clamp(90px,16vw,200px)] text-orange-500/5 font-bold select-none pointer-events-none">
        ॐ
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div ref={headerRef} className="text-center mb-10 sm:mb-12">

          <div
            className={`
            flex items-center justify-center gap-3 mb-4
            transition-all duration-700
            ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}
          >
            <div className="w-[30px] h-[1px] bg-orange-400" />
            <span className="text-xs tracking-[0.2em] text-orange-500 uppercase">
              What We Offer
            </span>
            <div className="w-[30px] h-[1px] bg-orange-400" />
          </div>

          <h2
            className={`
            text-[clamp(1.6rem,4vw,2.4rem)] font-semibold text-orange-700 tracking-wider
            transition-all duration-700
            ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}
          >
            Vrindavan Guest Services
          </h2>

          {/* UNDERLINE */}
          <div className="flex justify-center items-center gap-2 mt-4">
            <div
              className={`h-[2px] bg-gradient-to-r from-transparent to-orange-500 rounded
              transition-all duration-1000
              ${headerVisible ? "w-[52px]" : "w-0"}`}
            />
            <div className="w-[7px] h-[7px] bg-orange-500 rotate-45 opacity-80" />
            <div
              className={`h-[2px] bg-gradient-to-r from-orange-500 to-transparent rounded
              transition-all duration-1000
              ${headerVisible ? "w-[52px]" : "w-0"}`}
            />
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 sm:gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.id} s={s} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}