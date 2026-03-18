"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
;

const galleryImages = [
  {
    src: "https://images.openai.com/static-rsc-3/DG8Qxgsap-D1s_gTHDB7sz6ea07TSrUyr7FovpJv4n58Cwm2QvWyMgrfjkA_Br-jaZLQEJBMWMaZlo0V0qNj-qqXtI7K4UXcXjZWtgc-Wmc?purpose=fullsize",
    title: "Vrindavan Temple Complex",
    alt: "Vrindavan temple complex with devotees and traditional architecture",
    location: "Vrindavan",
  },
  {
    src: "https://images.openai.com/static-rsc-3/nGgTVV4eBCf2jO4th21jDJwqqsbkyslbE8tg5hBd9vz-XopcjJkzftMC7Y448gaR3ZCG2bZg5oLI7_7Z8zAJi1o-H90yMCpwsPPMDjM773Y?purpose=fullsize",
    title: "Banke Bihari Temple",
    alt: "Shri Banke Bihari Temple entrance in Vrindavan with devotees visiting for darshan",
    location: "Vrindavan",
  },
  {
    src: "https://static.toiimg.com/thumb/resizemode-4%2Cwidth-1280%2Cheight-720%2Cmsid-106644822/106644822.jpg",
    title: "Krishna Janmabhoomi Temple",
    alt: "Shri Krishna Janmabhoomi Temple in Mathura birthplace of Lord Krishna",
    location: "Mathura",
  },
  {
    src: "https://images.openai.com/static-rsc-3/LFut7VfZsM4dwEiKMkoaeUTDJY9zqIW8Vm68VwZ9_xw1GObo-dTrC6f5yHGKu9aOHgdnYEpuzel1Aaj3q7fS5rfsfLbxzIFufEC-E8-jDOk?purpose=fullsize",
    title: "Prem Mandir",
    alt: "Prem Mandir illuminated white marble temple in Vrindavan at night",
    location: "Vrindavan",
  },
  {
    src: "https://images.openai.com/static-rsc-3/F-eKQL-b1bx5lRFx3R0vXMVN7DW7XsnxVCpA2fyDo1vbCQUXYvXs0nGqbiSzJ1nl57zawmmJnqojTqfTrA4TKduzE_panswQEm3YmS4LaO8?purpose=fullsize",
    title: "Yamuna River Ghat",
    alt: "Yamuna River ghat in Vrindavan with temples and devotees performing rituals",
    location: "Vrindavan",
  },
  {
    src: "https://images.openai.com/static-rsc-3/GEebH1_NCceA7Q9S8FQZOc4iyEd4jAjg7t_fa9zShSNK1clSHu8rRSB6xdb-D0Bd0mR1kdYUJfULUl_WZYjarRWY9ub27u5BjMXOCttI8Vw?purpose=fullsize",
    title: "Mathura Temple Area",
    alt: "Ancient temples and ghats in the holy city of Mathura Uttar Pradesh",
    location: "Mathura",
  },
  {
    src: "https://i.redd.it/sq5vjzciddp41.png",
    title: "Vrindavan Parikrama",
    alt: "Devotees performing the sacred Vrindavan Parikrama pilgrimage route",
    location: "Vrindavan",
  },
  {
    src: "https://www.adotrip.com/public/images/city/master_images/5e3d3c434964b-Vrindavan_Attractions.jpg",
    title: "Radha Rani Temple Barsana",
    alt: "Radha Rani Temple in Barsana dedicated to Radha near Mathura",
    location: "Barsana",
  },
  {
    src: "https://www.revv.co.in/blogs/wp-content/uploads/2021/01/Holi-celebrations-in-Barsana.jpeg",
    title: "Govardhan Parikrama",
    alt: "Devotees performing Govardhan Parikrama pilgrimage near Mathura",
    location: "Govardhan",
  },
  {
    src: "https://images.openai.com/static-rsc-3/GEebH1_NCceA7Q9S8FQZOc4iyEd4jAjg7t_fa9zShSNK1clSHu8rRSB6xdb-D0Bd0mR1kdYUJfULUl_WZYjarRWY9ub27u5BjMXOCttI8Vw?purpose=fullsize",
    title: "Mathura Temple Area",
    alt: "Ancient temples and ghats in the holy city of Mathura Uttar Pradesh",
    location: "Mathura",
  },
];


export default function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#FFF7ED]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4">
            Sacred Places
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-orange-600">
            Explore the Divine Gallery
          </h2>

          <p className="mt-4 text-gray-700">
            Witness the timeless beauty of Mathura & Vrindavan through sacred
            temples, ghats and spiritual destinations.
          </p>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => {
            const isLarge = index === 0 || index === 5;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500
                  ${isLarge ? "md:col-span-2 md:row-span-2" : ""}
                  ${hoveredIndex !== null && hoveredIndex !== index ? "opacity-60" : "opacity-100"}
                `}
              >
                {/* IMAGE */}
                <div className={`overflow-hidden ${isLarge ? "aspect-[4/3]" : "aspect-square"}`}>
                  <Image
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    fill
                    className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* DARK GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* TEXT CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {image.title}
                  </h3>

                  <p className="mt-1 text-white/80 text-sm flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {image.location}
                  </p>
                </div>

                {/* DECORATIVE CORNERS */}
                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-white/60 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-white/60 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition">
            View All Photos
          </button>
        </div> */}

      </div>
    </section>
  );
}

