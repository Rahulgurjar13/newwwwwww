"use client";

import EnquiryPopup from "@/utils/EnquiryForm";
import { MapPin, Clock, Users, Footprints } from "lucide-react";
import { useState } from "react";

export default function ToursWeOperate() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <EnquiryPopup onClose={() => setIsOpen(false)} open={isOpen} />

      <section className="py-16 sm:py-20 lg:py-24 bg-linear-to-tr from-[#ffeed7] to-[#ffa11e]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">

          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 lg:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-3 sm:mb-4">
              Our Services
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Tours We Operate
            </h2>

            <p className="mt-3 sm:mt-4 text-gray-700 text-base sm:text-lg">
              We specialize in peaceful, well-planned Vrindavan yatras and
              selected sacred destinations of Braj Bhoomi — focused on darshan,
              parikrama, and spiritual comfort.
            </p>
          </div>

          {/* TOUR CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {/* CARD TEMPLATE */}
            {[
              {
                icon: MapPin,
                title: "Vrindavan Darshan Tour",
                desc:
                  "Complete darshan of major temples including Banke Bihari, ISKCON, Prem Mandir, Nidhivan, and Yamuna Ghats.",
                points: [
                  "Ideal for first-time visitors",
                  "Elder-friendly pace",
                  "Half-day & full-day options",
                ],
              },
              {
                icon: Footprints,
                title: "Vrindavan Parikrama Yatra",
                desc:
                  "Guided Vrindavan Parikrama covering sacred kunds, groves (vanas), and leelasthal.",
                points: [
                  "Walking or assisted parikrama",
                  "Spiritual guidance available",
                  "Morning / evening options",
                ],
              },
              {
                icon: Users,
                title: "Group & Family Vrindavan Tours",
                desc:
                  "Customized tours for families, bhajan mandalis, senior citizen groups, and temple yatras.",
                points: [
                  "Custom itinerary",
                  "Comfortable vehicles",
                  "Group coordinator support",
                ],
              },
              {
                icon: Clock,
                title: "Govardhan Parikrama Tour",
                desc:
                  "Sacred Govardhan Hill Parikrama with proper halts, meals, and spiritual flow.",
                points: [
                  "21 km traditional route",
                  "Walking / vehicle support",
                  "One-day or two-day plan",
                ],
              },
              {
                icon: MapPin,
                title: "Barsana & Nandgaon Tour",
                desc:
                  "Visit Radha Rani Temple (Barsana) and Nandgaon, deeply connected to Braj leelas.",
                points: [
                  "Half-day / full-day",
                  "Festival special tours",
                  "Local guidance",
                ],
              },
              {
                icon: Users,
                title: "Custom Vrindavan Yatra",
                desc:
                  "Design your own Vrindavan itinerary based on darshan priority, time, and comfort.",
                points: [
                  "Fully customizable",
                  "One-to-one planning",
                  "Ideal for repeat visitors",
                ],
              },
            ].map((tour, index) => {
              const Icon = tour.icon;
              return (
                <div
                  key={index}
                  className="
                    bg-white
                    rounded-3xl
                    p-6 sm:p-8
                    shadow-sm
                    transition
                    cursor-pointer
                    hover:shadow-lg
                    lg:hover:scale-105
                  "
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 sm:mb-5">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {tour.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    {tour.desc}
                  </p>

                  <ul className="text-sm text-gray-700 space-y-2">
                    {tour.points.map((p, i) => (
                      <li key={i}>• {p}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <button
              onClick={() => setIsOpen(true)}
              className="
                inline-block
                px-8 sm:px-10
                py-3.5 sm:py-4
                rounded-full
                bg-orange-500
                text-white
                font-medium
                hover:bg-orange-600
                transition
                cursor-pointer
              "
            >
              Enquire & Book Your Yatra
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
