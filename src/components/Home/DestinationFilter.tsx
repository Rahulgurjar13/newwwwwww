"use client"

import { useState, useMemo, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Clock, MapPin, Users } from "lucide-react"
import EnquiryPopup from "@/utils/EnquiryForm"
import { supabase } from "@/lib/supabase/SupabaseConfig"
import { useRouter } from "next/navigation"
import { TourCardSkeleton } from "@/utils/TourCardSkeleton"

/* -------------------- DATA -------------------- */

type PackageType = {
  id: number
  title: string
  category: string
  duration: string
  rating: number
  reviews: number
  price: number
  heroimage: {
    id: string,
    image: string,
    alt: string
  }
}

const CATEGORIES = [
  "Explore All",
  "1 Day Tour Package", ,
  "2 Day Tour Package",
  "3 Day Tour Package",
  "4 Day Tour Package",
  "5 Day Tour Package",
  "6 Day Tour Package",
  "7 Day Tour Package",
  "8 Day Tour Package",
  "9 Day Tour Package",
  "10 Day Tour Package",

]


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





/* -------------------- COMPONENT -------------------- */

export default function DestinationFilter() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("Explore All")
  const [packages, setPackages] = useState<PackageType[]>([])
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);


  const getPackageData = async () => {

    const { data, error } = await supabase.from("Package").select("*");

    if (error) {
      console.log("This is the error I have get in the Home Page Packages Filter : ");
      console.log(error);
    }

    setPackages(data ?? []);
    setLoading(false);
  }

  useEffect(() => {
    getPackageData();
  }, []);

  const filteredPackages = activeCategory === "Explore All" ? packages : packages.filter(
    (pkg: any) => pkg.category === activeCategory
  )




  return (
    <>
      <EnquiryPopup onClose={() => setIsOpen(false)} open={isOpen} />
      <section className="mt-5 bg-gradient-to-b from-orange-50 to-white w-full mx-auto px-4 py-10 space-y-8">

        <div className="w-full text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-orange-500">
            Mathura Vrindavan Tour Packages
          </h2>

          {/* Gradient Underline */}
          <div className="flex justify-center">
            <div className="h-1 w-70  sm:w-80 md:w-90 lg:w-160 rounded-full 
                            bg-gradient-to-r 
                            from-transparent 
                            via-orange-500 
                            to-transparent" />
          </div>
        </div>


        {/* ---------- CATEGORY CAROUSEL ---------- */}

        <div className="flex justify-start md:justify-center items-center gap-6 md:gap-8 overflow-x-auto no-scrollbar py-2">
          {CATEGORIES.filter(Boolean).map((cat) => {
            const m = CATEGORY_META[cat!];
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat!)}
                className={`flex-shrink-0 flex flex-col items-center gap-1 min-w-[76px]
          rounded-[20px] px-4 py-3.5 border-[1.5px] cursor-pointer
          transition-all duration-300 outline-none
          ${isActive
                    ? "bg-gradient-to-br from-orange-400 to-orange-600 border-transparent text-white -translate-y-1.5 scale-105 shadow-xl shadow-orange-400/45"
                    : "bg-white/65 border-orange-200 text-orange-800 hover:bg-orange-50 hover:border-orange-400 hover:-translate-y-1"
                  }`}
              >
                <span className={`font-bold leading-none transition-transform
          ${cat === "Explore All" ? "text-base" : "text-2xl"}
          ${isActive ? "text-white scale-110" : "text-orange-700"}`}>
                  {m.num}
                </span>
                <span className={`text-[9px] font-semibold uppercase tracking-widest
          ${isActive ? "text-white/80" : "text-orange-500"}`}>
                  {m.word}
                   <p>package</p>
                </span>
                <div className={`w-1.5 h-1.5 rounded-full transition-all
          ${isActive ? "bg-white/75 shadow-[0_0_6px_rgba(255,255,255,0.9)]" : "bg-orange-200"}`} />
              </button>
            );
          })}
        </div>


        {/* ---------- TITLE ---------- */}
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center px-5 py-4">
            <div className="text-xl md:text-3xl lg:text-3xl font-semibold text-orange-400">
              {CATEGORY_META[activeCategory].num + " " + CATEGORY_META[activeCategory].word + " " + "Tour " + "Package"}
            </div>
            <Link href={'/tour-packages'} className="text-orange-500 font-medium hover:underline">
              View All →
            </Link>
          </div>

          {/* ---------- CARDS GRID ---------- */}
          {
            loading ? (
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid md:grid-cols-3 gap-8">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <TourCardSkeleton key={i} />
                  ))}
                </div>
              </div>
            ) :

              <div className="
              max-h-[95vh] sm:max-h-[78vh]
              overflow-y-auto pr-2 orange-scrollbar
            "
                style={{ scrollbarGutter: "stable" }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all p-5  overflow-y-auto pr-2 orange-scrollbar">
                  {filteredPackages.map((pkg: any) => (
                    <div
                      key={pkg.id}
                      className="
                  group bg-white rounded-3xl overflow-hidden
                  shadow-md hover:shadow-xl transition-all
                  hover:-translate-y-1
            "
                    >
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden cursor-pointer" onClick={() => router.push(`/tour-packages/${pkg.duration}/${pkg.slug}`)}>
                        <Image
                          src={pkg.heroimage.image}
                          alt={pkg.heroimage.alt}
                          loading="lazy"
                          fill
                          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* DURATION BADGE */}
                        {/* <span
                    className="absolute top-4 left-4
                bg-orange-500 text-white text-xs font-semibold
                px-3 py-1 rounded-full shadow"
                  >
                    {pkg.duration} 
                  </span> */}

                        {/* PRICE BADGE */}
                        <span
                          className="absolute bottom-4 right-4
                bg-white text-orange-600 text-sm font-bold
                px-4 py-1.5 rounded-full shadow"
                        >
                          ₹{pkg.price}
                        </span>
                      </div>

                      {/* CONTENT */}
                      <div className="p-6 space-y-4">

                        {/* TITLE */}
                        <h3 className="text-lg font-bold text-gray-900 leading-snug cursor-pointer" onClick={() => router.push(`/tour-packages/${pkg.duration}/${pkg.slug}`)}>
                          {pkg.title}
                        </h3>

                        {/* LOCATION */}
                        <p className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 text-orange-500" />
                          {pkg.destination}
                        </p>

                        {/* INFO ROW */}
                        <div className="flex flex-wrap gap-3 text-xs text-gray-700">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-orange-500" />
                            {pkg.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-orange-500" />
                            Ideal for Families & Elders
                          </span>
                        </div>

                        {/* HIGHLIGHTS */}
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                          <span className="flex items-center gap-1">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            AC Cab
                          </span>
                          <span className="flex items-center gap-1">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Local Guide
                          </span>
                          <span className="flex items-center gap-1">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Temple Darshan
                          </span>
                          <span className="flex items-center gap-1">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Pickup & Drop
                          </span>
                        </div>

                        {/* CTA */}
                        <div className="flex gap-3 pt-2">
                          <Link
                            href={`/tour-packages/${pkg.duration}/${pkg.slug}`}
                            className="flex-1 text-center cursor-pointer
                    bg-orange-500 hover:bg-orange-600
                    text-white font-semibold py-2.5
                    rounded-xl transition
                  "
                          >
                            View Details
                          </Link>

                          <button
                            className="
                    flex-1 cursor-pointer
                    border border-orange-500 text-orange-600
                    hover:bg-orange-50
                    font-semibold py-2.5
                    rounded-xl transition
                  "

                            onClick={() => setIsOpen(true)}
                          >
                            Enquire Now
                          </button>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>

              </div>
          }


        </div>




      </section>
    </>
  )
}
