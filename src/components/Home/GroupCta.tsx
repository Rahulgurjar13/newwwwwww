"use client";

import EnquiryPopup from "@/utils/EnquiryForm";
import Image from "next/image";
import { useState } from "react";

export default function GroupCta() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <EnquiryPopup onClose={() => setIsOpen(false)} open={isOpen} />

      <section className="max-w-7xl mx-auto px-4 my-16 sm:my-20">
        <div
          className="
            relative
            h-[220px] sm:h-[240px] md:h-[280px]
            rounded-2xl
            overflow-hidden
          "
        >
          {/* BACKGROUND IMAGE */}
          <Image
            src="/images/Home/mathura-vrindavan-cta.webp"
            alt="Mathura Vrindavan Temples"
            fill
            loading="lazy"
            className="object-cover"
          />

          {/* GRADIENT OVERLAY */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-orange-500 via-orange-500/90 to-transparent
            "
          />

          {/* CONTENT */}
          <div className="relative z-10 h-full flex items-center">
            <div
              className="
                max-w-xl
                px-5 sm:px-8 md:px-12
                text-white
              "
            >
              <h2
                className="
                  text-xl sm:text-2xl md:text-3xl
                  font-bold
                  leading-snug
                "
              >
                Bigger Group? Get special offers <br />
                up to{" "}
                <span className="text-yellow-200">50% Off!</span>
              </h2>

              <p
                className="
                  mt-3 sm:mt-4
                  text-xs sm:text-sm md:text-base
                  text-orange-100
                "
              >
                Experience Mathura & Vrindavan with your group.
              </p>

              <button
                onClick={() => setIsOpen(true)}
                className="
                  mt-5 sm:mt-6
                  bg-white
                  text-orange-600
                  font-semibold
                  px-5 sm:px-6
                  py-2.5 sm:py-3
                  rounded-lg
                  hover:bg-orange-50
                  transition
                  cursor-pointer
                "
              >
                Get A Callback
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
