"use client"
import Image from "next/image"
import { useState } from "react";

export default function TempleHistory({TempleData} : {TempleData : any}) {
  const [expandedHistory, setExpandedHistory] = useState(false);
  return (
    <section className="py-24 bg-gradient-to-r from-[#8a3b00] to-[#ff7b00] text-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}

        <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-2xl">

          <Image
            src="/images/Home/home-faqs.webp"
            alt="Radha Krishna"
            fill
            loading="lazy"
            className="object-cover"
          />

        </div>

        {/* TEXT */}

        <div>

          <h2 className="text-center md:text-start text-3xl md:text-4xl font-bold mb-6">
            History & Significance
          </h2>

         <div className="max-w-2xl">

          <p
            className={`text-orange-100 leading-relaxed text-sm text-center md:text-start md:text-lg transition-all duration-300 ${
              expandedHistory ? "" : "line-clamp-3"
            }`}
          >
            {TempleData.history}
          </p>

            {TempleData.history?.length > 150 && (
              <button
                onClick={() => setExpandedHistory(!expandedHistory)}
                className="mt-8 bg-white text-orange-600 px-7 py-3 rounded-full font-semibold hover:scale-105  shadow-lg  transition flex items-center gap-1 group"
              >
                {expandedHistory ? "Read Less" : "Read More"}

                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    expandedHistory ? "rotate-180" : "group-hover:translate-x-1"
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

         
        </div>

      </div>

    </section>
  )
}