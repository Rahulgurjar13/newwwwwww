"use client";
import { Users, Car, Crown } from "lucide-react";
import { useState } from "react";
import EnquiryPopup from "@/utils/EnquiryForm";

const plans = [
  { group: "2 Adults", vehicle: "AC Sedan Cab", price: "4,499", popular: false },
  { group: "4 Adults", vehicle: "AC Sedan Cab", price: "2,999", popular: true },
  { group: "6 Adults", vehicle: "AC Innova / Ertiga", price: "2,599", popular: false },
  { group: "12 Adults", vehicle: "AC Tempo Traveller", price: "2,299", popular: false },
];

export default function TourPricing() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <EnquiryPopup open={isOpen} onClose={() => setIsOpen(false)} />

      <section id="pricing" className="py-16 md:py-20 px-5 sm:px-8 bg-[#FFF5EE]">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="text-center mb-12">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold text-orange-600 uppercase tracking-wider mb-4">
              Best Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Transparent Pricing
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-orange-500" />
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Price per person based on group size. No hidden charges.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-2xl shadow-md p-5 sm:p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300 ${
                  plan.popular ? "border-2 border-orange-500 scale-105" : "border border-gray-100"
                }`}
              >
                {/* Most Popular badge */}
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-md whitespace-nowrap">
                    <Crown size={12} />
                    Most Popular
                  </span>
                )}

                {/* Group icon */}
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-4 mt-2">
                  <Users size={24} className="text-orange-500" />
                </div>

                {/* Group size */}
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{plan.group}</h3>

                {/* Vehicle */}
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 mb-4">
                  <Car size={14} className="text-gray-400" />
                  {plan.vehicle}
                </div>

                {/* Price */}
                <div className="mb-5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-orange-500">₹{plan.price}</span>
                  <span className="text-sm text-gray-400 block">/person</span>
                </div>

                {/* CTA */}
                <button
                  onClick={() => setIsOpen(true)}
                  className={`w-full cursor-pointer px-5 py-2.5 rounded-full font-semibold text-sm transition duration-300 ${
                    plan.popular
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "border-2 border-orange-500 text-orange-500 hover:bg-orange-50"
                  }`}
                >
                  Book This
                </button>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-xs sm:text-sm text-gray-500 mt-8">
            *Price includes accommodation, sightseeing and transfer charges.
          </p>
        </div>
      </section>
    </>
  );
}
