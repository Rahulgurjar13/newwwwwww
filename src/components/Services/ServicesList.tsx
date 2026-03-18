"use client";

import {
  ShieldCheck, Car, Users, Music2, Waves,
  HandHeart, Camera, Banknote, CheckCircle2,
} from "lucide-react";
import Image from "next/image";

const SERVICES = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "VIP Darshan & Puja",
    color: "amber",
    image: "/images/Services/VIP-Darshan-&-Puja-converted.webp",
    points: ["Priority Temple Access", "Guided Worship", "Personalised Rituals"],
  },
  {
    id: 2,
    icon: Car,
    title: "Luxury Transport",
    color: "teal",
    image: "/images/Services/Luxury-Transport_converted.webp",
    points: ["Chauffeur-driven comfort", "Local Tours", "Airport Transfers", "Sedan / SUV / MUV / Urbania"],
  },
  {
    id: 3,
    icon: Users,
    title: "Certified Spiritual Guides",
    color: "purple",
    image: "/images/Services/Certified-Spiritual-Guides-converted.webp",
    points: ["Expert knowledge of local history", "Mythology & sacred sites", "Multilingual guides"],
  },
  {
    id: 4,
    icon: Music2,
    title: "Traditional Artists & Bhajans",
    color: "pink",
    image: "/images/Services/Traditional-Artists-&-Bhajans_converted.webp",
    points: ["Live Music", "Local Art", "Devotional Experience"],
  },
  {
    id: 5,
    icon: Waves,
    title: "Yamuna Boating",
    color: "blue",
    image: "/images/Services/Yamuna-Boating_converted.webp",
    points: ["Serene Boat Rides", "Sunset Views", "Yamuna Aarti Experience"],
  },
  {
    id: 6,
    icon: HandHeart,
    title: "Seva Arrangements",
    color: "green",
    image: "/images/Services/Gau-Daan_converted.webp",
    points: ["Organise Offerings", "Gau Daan", "Personalised Temple Contribution"],
  },
  {
    id: 7,
    icon: Camera,
    title: "Photo / Videography",
    color: "coral",
    image: "/images/Services/Photo-&-Videography_converted.webp",
    points: ["Professional Photo / Videographer", "Content creation & events"],
  },
  {
    id: 8,
    icon: Banknote,
    title: "Foreign Currency Exchange",
    color: "gray",
    image: "/images/Services/MoneyExchange.webp",
    points: ["Instant Currency Conversion", "Major International Currencies", "Secure & Trusted", "Competitive Rates"],
  },
];

const COLOR_MAP: Record<string, { bg: string; icon: string; dot: string; border: string }> = {
  amber:  { bg: "bg-amber-50",  icon: "text-amber-700",  dot: "bg-amber-400",  border: "border-amber-200"  },
  teal:   { bg: "bg-teal-50",   icon: "text-teal-700",   dot: "bg-teal-400",   border: "border-teal-200"   },
  purple: { bg: "bg-purple-50", icon: "text-purple-700", dot: "bg-purple-400", border: "border-purple-200" },
  pink:   { bg: "bg-pink-50",   icon: "text-pink-700",   dot: "bg-pink-400",   border: "border-pink-200"   },
  blue:   { bg: "bg-blue-50",   icon: "text-blue-700",   dot: "bg-blue-400",   border: "border-blue-200"   },
  green:  { bg: "bg-green-50",  icon: "text-green-700",  dot: "bg-green-400",  border: "border-green-200"  },
  coral:  { bg: "bg-orange-50", icon: "text-orange-700", dot: "bg-orange-400", border: "border-orange-200" },
  gray:   { bg: "bg-gray-50",   icon: "text-gray-600",   dot: "bg-gray-400",   border: "border-gray-200"   },
};



function TreeConnector({ count }: { count: number }) {

  const WIDTH = 1280;
  const TRUNK_X = WIDTH / 2;
  const TRUNK_BOT = 48;
  const SPINE_Y = TRUNK_BOT;
  const DROP_Y = 80;

  const SLOT_W = WIDTH / count;
  const centers = Array.from({ length: count }, (_, i) => SLOT_W * i + SLOT_W / 2);

  return (
    <div className="hidden lg:block">
      <svg viewBox={`0 0 ${WIDTH} ${DROP_Y + 12}`} width="100%">
        <line x1={TRUNK_X} y1={0} x2={TRUNK_X} y2={TRUNK_BOT} stroke="#FDBA74" strokeWidth="1.5"/>
        <line x1={centers[0]} y1={SPINE_Y} x2={centers[count - 1]} y2={SPINE_Y} stroke="#FDBA74" strokeWidth="1.5"/>

        {centers.map((cx, i) => (
          <g key={i}>
            <line x1={cx} y1={SPINE_Y} x2={cx} y2={DROP_Y} stroke="#FDBA74" strokeWidth="1.5"/>
            <circle cx={cx} cy={DROP_Y} r="3.5" fill="#FB923C"/>
          </g>
        ))}
      </svg>
    </div>
  );
}


function ServiceCard({ svc }: { svc: (typeof SERVICES)[number] }) {

  const c = COLOR_MAP[svc.color];
  const Icon = svc.icon;

  return (
    <div
      className={`
      group flex flex-col rounded-2xl bg-white
      border border-gray-100 overflow-hidden
      transition-all duration-300
      hover:-translate-y-2 hover:shadow-xl
      hover:${c.border}
      `}
    >
      <div className={`h-1 w-full ${c.dot}`} />

      <div className="flex flex-col flex-1 p-4 sm:p-5">

        {/* Header */}
        <div className="flex items-start justify-between mb-4">

          {/* icon */}
          <div className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${c.bg}`}>
            <Icon size={18} strokeWidth={1.8} className={c.icon}/>
          </div>

          {/* image */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-orange-100 shadow-sm">
            <Image src={svc.image} alt={svc.title} fill className="object-cover" loading="lazy"/>
          </div>

        </div>

        <h3 className="font-semibold text-gray-900 text-[14px] mb-3 group-hover:text-orange-600">
          {svc.title}
        </h3>

        <ul className="flex flex-col gap-1.5 flex-1">
          {svc.points.map((pt) => (
            <li key={pt} className="flex items-start gap-2 text-[12px] text-gray-500">
              <CheckCircle2 size={13} className={`${c.icon} mt-0.5`} />
              {pt}
            </li>
          ))}
        </ul>

      </div>

      <div className={`h-[2px] ${c.dot} opacity-0 group-hover:opacity-100 transition`} />
    </div>
  );
}


export default function ServicesList() {

  const row1 = SERVICES.slice(0, 4);
  const row2 = SERVICES.slice(4);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">

      {/* Title */}
      <div className="flex justify-center pt-10 pb-6">
        <span className="rounded-full px-6 py-2 text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-orange-500 to-orange-400 shadow-md">
          Our Services
        </span>
      </div>

      {/* Row 1 */}
      <div className="relative">
        <TreeConnector count={row1.length}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {row1.map((svc) => (
            <ServiceCard key={svc.id} svc={svc}/>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="hidden lg:flex justify-center py-8">
        <div className="h-8 w-px bg-orange-200"/>
      </div>

      {/* Row 2 */}
      <div className="relative lg:-top-6">
        <TreeConnector count={row2.length}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {row2.map((svc) => (
            <ServiceCard key={svc.id} svc={svc}/>
          ))}
        </div>
      </div>

    </section>
  );
}