"use client";

import EnquiryPopup from "@/utils/EnquiryForm";
import Image from "next/image";
import { useState } from "react";

const openWhatsApp = (source: string) => {
  console.log("WhatsApp CTA clicked from:", source);

  const message = encodeURIComponent(
    "Hi, I’m planning a group yatra to Mathura & Vrindavan. Please guide me with packages and pricing."
  );

  const phone = "917302265809";
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
};

export default function PackagesCTA() {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <EnquiryPopup onClose={() => setIsOpen(false)} open={isOpen} />
    
      <section className="py-16 sm:py-20 bg-[#FFF7ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="relative overflow-hidden rounded-3xl
      bg-linear-to-br from-orange-600 via-orange-500 to-orange-300">

            {/* LIMITED TIME BADGE */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20">
              <span className="bg-white/95 text-orange-600
          px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-md">
                ⏰ Limited-Time Group Offer
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 sm:mt-0">

              {/* LEFT CONTENT */}
              <div className="relative z-10 p-6 sm:p-8 md:p-14 text-white">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Planning a Group Yatra to <br /> Mathura & Vrindavan?
                </h2>

                <p className="mt-4 text-white/90 max-w-xl text-sm sm:text-base">
                  Get special group discounts and customized itineraries for
                  families, senior citizens, temple groups, and bhajan mandalis.
                  We handle darshan planning, travel, and comfort.
                </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">

                <button
                  onClick={() => setIsOpen(true)}
                  className="w-full sm:w-auto
                  bg-white text-orange-600 font-semibold
                  px-6 sm:px-8 py-3 rounded-xl
                  hover:bg-orange-50 transition shadow-md
                  text-sm sm:text-base cursor-pointer"
                >
                  Get a Callback
                </button>

                <button
                  onClick={() => openWhatsApp("packages-cta")}
                  className="w-full sm:w-auto
                  bg-green-500 hover:bg-green-600
                  text-white font-semibold
                  px-6 sm:px-8 py-3 rounded-xl
                  transition shadow-md
                  text-sm sm:text-base cursor-pointer"
                >
                  WhatsApp Yatra Expert
                </button>

              </div>
              </div>

              {/* IMAGE */}
              <div className="relative h-[220px] sm:h-[280px] lg:h-auto hidden md:block">

                {/* MOBILE IMAGE (NO DIAGONAL) */}
                <div className="hidden relative h-full w-full ">
                  <Image
                    src="/images/Packages/holy-image.webp"
                    alt="Group Yatra to Mathura Vrindavan"
                    fill
                    loading="lazy"
                    className="object-cover"
                  />
                </div>

                {/* DESKTOP IMAGE (DIAGONAL) */}
                <div
                  className="hidden lg:block absolute inset-0"
                  style={{
                    clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)",
                  }}
                >
                  <Image
                    src="/images/Packages/holy-image.webp"
                    alt="Group Yatra to Mathura Vrindavan"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l
              from-black/20 via-black/10 to-transparent" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}
