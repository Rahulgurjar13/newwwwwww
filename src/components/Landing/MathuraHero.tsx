"use client";
import { MapPin, Clock, ChevronDown, Star, Shield, Users, Landmark, Headphones } from "lucide-react";
import { useState } from "react";
import EnquiryPopup from "@/utils/EnquiryForm";

export default function MathuraHero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <EnquiryPopup open={isOpen} onClose={() => setIsOpen(false)} />

      {/* Urgency Strip */}
      <div className="bg-red-600 text-white text-center py-2 px-4">
        <p className="text-xs sm:text-sm font-semibold tracking-wide">
          Limited Seats Left — Special Offer: Extra 10% Off This Week
        </p>
      </div>

      <section className="relative w-full overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#b3500a] via-[#cf7602] to-[#c45800]" />

        {/* Decorative */}
        <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-56 h-56 rounded-full bg-yellow-400/10 blur-3xl pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-4xl px-5 sm:px-8 pt-16 md:pt-24 pb-16 md:pb-20 flex flex-col items-center text-center">

          {/* Trust pill */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 border border-white/20 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-orange-100 mb-8">
            <Star size={13} className="text-yellow-300 fill-yellow-300" />
            4.9/5 Rated · Trusted by 10,000+ Pilgrims
          </span>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Mathura Vrindavan Agra
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent mt-1">
            Tour Packages
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-sm sm:text-base text-orange-100/90 max-w-lg leading-relaxed">
            Customised spiritual tour packages from 1 to 10 days covering Mathura, Vrindavan, Gokul, Agra, Govardhan and Barsana.
          </p>

          {/* Info pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 border border-white/15 px-4 py-1.5 text-xs sm:text-sm font-medium text-white">
              <Clock size={14} className="text-orange-200" />
              1 Day to 10 Days
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 border border-white/15 px-4 py-1.5 text-xs sm:text-sm font-medium text-white">
              <MapPin size={14} className="text-orange-200" />
              Mathura · Vrindavan · Gokul · Agra
            </span>
          </div>

          {/* Price */}
          <div className="mt-8">
            <span className="inline-block rounded-full bg-yellow-400 px-7 py-3 text-lg sm:text-xl font-extrabold text-gray-900 shadow-lg">
              Starting ₹2,299 /person
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={() => setIsOpen(true)}
              className="cursor-pointer px-8 py-3.5 rounded-full bg-white text-orange-600 font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 pulse-orange"
            >
              Get Free Consultation
            </button>
            <a
              href="#enquiry"
              className="cursor-pointer px-8 py-3.5 rounded-full border-2 border-white/80 text-white font-semibold text-base hover:bg-white/10 transition duration-300 text-center flex items-center justify-center gap-2"
            >
              Fill Enquiry Form
              <ChevronDown size={16} />
            </a>
          </div>

          {/* Trust line */}
          <div className="mt-5 flex items-center gap-4 text-xs text-orange-200/80">
            <span className="flex items-center gap-1"><Shield size={12} /> Free Cancellation</span>
            <span className="text-orange-300/40">·</span>
            <span className="flex items-center gap-1"><Users size={12} /> 24/7 Support</span>
          </div>

          {/* Stats — frosted glass cards matching the site style */}
          <div className="mt-12 w-full grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: Landmark, value: "500+", label: "Sacred Temples" },
              { icon: Users, value: "10,000+", label: "Happy Pilgrims" },
              { icon: Star, value: "4.9★", label: "Average Rating" },
              { icon: Headphones, value: "24/7", label: "Travel Support" },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-xl bg-gradient-to-br from-orange-500/60 to-orange-400/40 backdrop-blur border border-white/15 p-4 sm:p-5 text-center hover:scale-105 transition duration-300"
              >
                <stat.icon size={20} className="mx-auto text-yellow-200 mb-2" />
                <div className="text-xl sm:text-2xl font-extrabold text-white leading-tight">{stat.value}</div>
                <div className="text-xs text-orange-100/80 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom curve to blend into page bg */}
        <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 rounded-t-[100%] bg-[#FFF5EE] pointer-events-none" />
      </section>
    </>
  );
}
