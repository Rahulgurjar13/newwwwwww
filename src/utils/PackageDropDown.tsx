"use client";

import {
  TrendingUp, Star, Clock, MapPin, ArrowRight, Compass,
  ChevronDown, BadgePercent, Headphones, CreditCard,
  RotateCcw, Globe, Timer, X
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase/SupabaseConfig";

type PackageType = {
  id: number;
  slug: string;
  title: string;
  category: string;
  duration: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  location?: string;
  destination?: string;
  heroimage: { id: string; image: string; alt: string };
};

const DURATION_CATEGORIES = [
  "Explore All",
  "1 Day Tour Package",
  "2 Day Tour Package",
  "3 Day Tour Package",
  "4 Day Tour Package",
  "5 Day Tour Package",
  "6 Day Tour Package",
  "7 Day Tour Package",
  "8 Day Tour Package",
  "9 Day Tour Package",
  "10 Day Tour Package",
];

const CATEGORY_META: Record<string, { icon: string; num: string; word: string }> = {
  "Explore All": { icon: "🌍", num: "All", word: "Days" },
  "1 Day Tour Package": { icon: "⚡", num: "1", word: "Day" },
  "2 Day Tour Package": { icon: "🌅", num: "2", word: "Days" },
  "3 Day Tour Package": { icon: "🗺️", num: "3", word: "Days" },
  "4 Day Tour Package": { icon: "🏕️", num: "4", word: "Days" },
  "5 Day Tour Package": { icon: "✈️", num: "5", word: "Days" },
  "6 Day Tour Package": { icon: "🌄", num: "6", word: "Days" },
  "7 Day Tour Package": { icon: "🏖️", num: "7", word: "Days" },
  "8 Day Tour Package": { icon: "🌿", num: "8", word: "Days" },
  "9 Day Tour Package": { icon: "🦋", num: "9", word: "Days" },
  "10 Day Tour Package": { icon: "🏆", num: "10", word: "Days" },
};



const TRUST_ITEMS = [
  { icon: RotateCcw, text: "Free Cancellation" },
  { icon: CreditCard, text: "Easy EMI" },
  { icon: Headphones, text: "24 / 7 Support" },
];

const HIGHLIGHTS = [
  { label: "Best Rated", value: "4.9 ★" },
  { label: "Destinations", value: "50 +" },
  { label: "Travelers", value: "5K +" },
];



export default function PackageDropDown({from} : {from : string}) {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory]= useState("Explore All");
  const [activeDest, setActiveDest] = useState("All Destinations");
  const [packages, setPackages]= useState<PackageType[]>([]);
  const timeoutRef= useRef<ReturnType<typeof setTimeout> | null>(null);

  //Get all data

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from("Package").select("*");
      if (!error) setPackages(data ?? []);
    })();
  }, []);

  const destSet = Array.from(
    new Set(packages.map((p) => p.destination ?? p.location).filter(Boolean))
  ) as string[];

  const destList =["All Destinations","Gokul",
  "Mathura",
  "Vrindavan",
  "Govardhan",
  "Barsana",
  "Agra",
  "Fatehpur Sikri",
  "Delhi",
  "Bhandirvan"]
 

  const categoryRows = DURATION_CATEGORIES.map((label) => ({
    real : label,
    label : CATEGORY_META[label!].num + " " + CATEGORY_META[label!].word + " Package",
    count: label === "Explore All"
      ? packages.length
      : packages.filter((p) => p.category === label).length,
  }));

  const byDuration =
    activeCategory === "Explore All"
      ? packages
      : packages.filter((p) => p.category === activeCategory);

  const filtered =
    activeDest === "All Destinations"
      ? byDuration
      : byDuration.filter((p) => (p.destination ?? p.location) === activeDest);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 180);
  };

  return (
    <>
     

      <div className="pkdd relative h-full" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>

        {/* NAV TRIGGER */}
        <Link href="/tour-packages" className={`nav-link ${open ? "open" : ""} mt-1`}>
          Packages
          <span className="offer-pill">OFFER</span>
          <ChevronDown size={14} className="chev" strokeWidth={2.5} />
        </Link>

        {/* MEGA PANEL */}
        {open && (
          <div
            className={`pkdd-panel absolute  top-full mt-5 -left-10 bg-white rounded-2xl z-50 overflow-hidden`}
            style={{
              width: 870,
             
              boxShadow: "0 20px 70px rgba(0,0,0,.13), 0 0 0 1px rgba(0,0,0,.05)",
            }}
          >
            {/* ORANGE TOP BAR */}
            <div
              className="flex items-center justify-between px-8 py-2.5"
              style={{ background: "linear-gradient(90deg, #E85800, #FF7A00, #FF9E00)" }}
            >
              <div className="flex items-center gap-2">
                <BadgePercent size={14} color="#fff" />
                <span className="ou text-white text-xs font-semibold" style={{ letterSpacing: ".3px" }}>
                  Exclusive Deals — Up to 40% Off on Selected Packages
                </span>
              </div>
              <div className="flex items-center gap-7">
                {HIGHLIGHTS.map((h) => (
                  <div key={h.label} className="flex items-center gap-1.5">
                    <span className="text-white text-xs" style={{ opacity: .72 }}>{h.label}</span>
                    <span className="text-white text-xs font-bold">{h.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* BODY */}
            <div className="flex" >

              {/* LEFT — Duration sidebar */}
              <div
                className="flex flex-col py-5 px-3 slim-scroll overflow-y-auto"
                style={{ width: 210, borderRight: "1px solid #F0F0F0", flexShrink: 0 }}
              >
                <p className="section-label px-2">Duration</p>
                {categoryRows.map(({ real, label, count }) => (
                  <button
                    key={label}
                    className={`dur-item ${activeCategory === real ? "active" : ""}`}
                    onMouseEnter={() => setActiveCategory(real)}
                    onClick={() => { setActiveCategory(real); setActiveDest("All Destinations"); }}
                  >
                    <span>{label}</span>
                    {count > 0 && <span className="dur-badge">{count}</span>}
                  </button>
                ))}
              </div>

              {/* RIGHT — Destination filter + package grid */}
              <div className="flex flex-col flex-1 p-5 gap-4">

                {/* DESTINATION FILTER */}
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <Globe size={12} style={{ color: "#FF6B00" }} />
                    <p className="section-label" style={{ margin: 0 }}>Filter by Destination</p>
                    {activeDest !== "All Destinations" && (
                      <button
                        onClick={() => setActiveDest("All Destinations")}
                        className="flex items-center gap-1 ml-auto text-xs font-semibold"
                        style={{ color: "#FF6B00", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                      >
                        <X size={11} /> Clear
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {destList.slice(0, 14).map((dest) => (
                      <button
                        key={dest}
                        className={`dest-chip ${activeDest === dest ? "active" : ""}`}
                        onClick={() => setActiveDest(dest)}
                      >
                        {dest !== "All Destinations" && <MapPin size={10} />}
                        {dest}
                      </button>
                    ))}
                  </div>
                </div>

                {/* DIVIDER */}
                <div style={{ height: 1, background: "#F2F2F2" }} />

                {/* RESULTS HEADER */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={13} style={{ color: "#FF6B00" }} />
                    <span className="ou text-sm font-semibold" style={{ color: "#1A1A1A" }}>
                      {activeCategory === "Explore All" ? "All Packages" : activeCategory}
                      {activeDest !== "All Destinations" && (
                        <span style={{ color: "#FF6B00" }}> · {activeDest}</span>
                      )}
                    </span>
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: "#FFF0E4", color: "#CC4A00" }}
                    >
                      {filtered.length} found
                    </span>
                  </div>
                  <Link
                    href="/tour-"
                    className="flex items-center gap-1 text-xs font-semibold"
                    style={{ color: "#FF6B00", textDecoration: "none" }}
                  >
                    View all <ArrowRight size={12} />
                  </Link>
                </div>

                {/* PACKAGE GRID */}
                <div
                  className="grid gap-3 slim-scroll overflow-y-auto"
                  style={{ gridTemplateColumns: "repeat(2, 1fr)", maxHeight: 260 }}
                >
                  {filtered.slice(0, 9).map((pkg) => (
                    <Link key={pkg.id} href={`/tour-packages/${pkg.duration}/${pkg.slug}`} className="pkg-card">
                      <p className="pkg-title ou">{pkg.title}</p>

                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-xs" style={{ color: "#9CA3AF" }}>
                          <Timer size={11} /> {pkg.duration}
                        </span>
                        {(pkg.destination ?? pkg.location) && (
                          <span className="flex items-center gap-1 text-xs" style={{ color: "#9CA3AF" }}>
                            <MapPin size={11} /> {pkg.destination ?? pkg.location}
                          </span>
                        )}
                      </div>

                      <div style={{ height: 1, background: "#F5F5F5" }} />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star size={12} fill="#FBBF24" stroke="none" />
                          <span className="text-xs font-semibold" style={{ color: "#92400E" }}>{pkg.rating}</span>
                          <span className="text-xs" style={{ color: "#9CA3AF" }}>({pkg.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          {pkg.originalPrice && (
                            <span className="text-xs line-through" style={{ color: "#C0C0C0" }}>
                              ₹{pkg.originalPrice.toLocaleString("en-IN")}
                            </span>
                          )}
                          <span className="ou text-sm font-bold" style={{ color: "#16A34A" }}>
                            ₹{pkg.price.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}

                  {filtered.length === 0 && (
                    <div className="empty-state">
                      <Globe size={34} strokeWidth={1.2} style={{ color: "#DDD" }} />
                      <p className="ou text-sm font-semibold" style={{ color: "#999" }}>No packages found</p>
                      <p className="text-xs" style={{ color: "#BBB" }}>Try a different destination or duration</p>
                    </div>
                  )}
                </div>

                {/* CTA ROW */}
                <div className="flex items-center gap-3 pt-1">
                  <Link href="/tour-packages" className="cta-primary ou" style={{ flex: 1 }}>
                    <Compass size={15} />
                    Explore All {activeCategory !== "Explore All" ? activeCategory + "s" : "Packages"}
                    <ArrowRight size={14} />
                  </Link>
                  <Link href="/tour-packages?filter=offers" className="cta-secondary ou">
                    <BadgePercent size={14} />
                    Hot Deals
                  </Link>
                </div>
              </div>
            </div>

            {/* FOOTER BAR */}
            <div
              className="flex items-center justify-between px-8 py-2.5"
              style={{ borderTop: "1px solid #F0F0F0", background: "#FAFAFA" }}
            >
              <div className="flex items-center gap-7">
                {TRUST_ITEMS.map(({ icon: Icon, text }) => (
                  <span key={text} className="flex items-center gap-1.5 text-xs" style={{ color: "#777" }}>
                    <Icon size={12} style={{ color: "#FF6B00" }} strokeWidth={2} />
                    {text}
                  </span>
                ))}
              </div>
              <Link
                href="/"
                className="text-xs font-semibold flex items-center gap-1"
                style={{ color: "#FF6B00", textDecoration: "none" }}
              >
                Need help choosing? Talk to us <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}