"use client";

import { useRef } from "react";
import Image from "next/image";
import { Clock, MapPin, ChevronLeft, ChevronRight, CheckIcon, CheckCircleIcon } from "lucide-react";

const packages = [
  {
    title: "Vrindavan Darshan Tour",
    description: "Complete darshan of major Vrindavan temples with comfort.",
    duration: "1 Day",
    price: "2999",
    image: "/images/Packages/vrindavan-darshan.webp",
    slug: "/tour-packages/vrindavan-darshan",
  },
  {
    title: "Vrindavan Tour Package",
    description: "Ideal for first-time visitors covering temples & ghats.",
    duration: "2 Days / 1 Night",
    price: "4999",
    image: "/images/Packages/vrindavan-tour.webp",
    slug: "/tour-packages/vrindavan-tour",
  },
  {
    title: "Govardhan Parikrama Tour",
    description: "Sacred Govardhan Parikrama with guided support.",
    duration: "1 Day",
    price: "6999",
    image: "/images/Packages/govardhan-parikrama.webp",
    slug: "/tour-packages/govardhan-parikrama",
  },
  {
    title: "Barsana & Nandgaon Tour",
    description: "Visit Radha Rani Temple and sacred Braj sites.",
    duration: "1 Day",
    price: "3999",
    image: "/images/Packages/barsana-nandgaon.webp",
    slug: "/tour-packages/barsana-nandgaon",
  },
];

export default function PackagesSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const cardWidth = sliderRef.current.firstElementChild?.clientWidth || 300;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-[#FFF7ED]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Tour Packages
            </h2>
            <div className="mt-3 h-[3px] w-40 bg-gradient-to-r from-orange-600 via-orange-400 to-transparent rounded-full" />
          </div>

          {/* DESKTOP CONTROLS */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full bg-white shadow flex items-center justify-center hover:bg-orange-50"
            >
              <ChevronLeft className="text-orange-600" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full bg-white shadow flex items-center justify-center hover:bg-orange-50"
            >
              <ChevronRight className="text-orange-600" />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        >
          {packages.map((pkg, index) => (
            <article
              key={index}
              className="min-w-[280px] sm:min-w-[340px] lg:min-w-[360px]
                bg-white rounded-3xl overflow-hidden shadow-md snap-start"
            >
              {/* IMAGE */}
              <div className="relative h-52">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {pkg.title}
                </h3>

                <p className="mt-2 text-gray-600 text-sm">
                  {pkg.description}
                </p>
                 
                 

                 <ul className="mt-4 space-y-2 text-sm text-gray-700 flex flex-wrap gap-x-6 gap-y-1">
                  <li className="flex gap-2 items-center"> <CheckCircleIcon className="size-5 text-green-400"/> AC Cab Included</li>
                  <li className="flex gap-2 items-center"> <CheckCircleIcon className="size-5 text-green-400"/> Local Braj Guide</li>
                  <li className="flex gap-2 items-center"> <CheckCircleIcon className="size-5 text-green-400"/> Temple Darshan</li>
                 </ul>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-700">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-orange-500" />
                    {pkg.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Vrindavan
                  </span>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-lg font-bold text-orange-600">
                    ₹{pkg.price}
                    <span className="text-sm text-gray-500 font-normal">
                      /person
                    </span>
                  </p>

                  <a
                    href={pkg.slug}
                    className="px-5 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
