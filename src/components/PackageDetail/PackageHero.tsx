"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";
import EnquiryPopup from "@/utils/EnquiryForm";
import { useState } from "react";
import { IndianRupee } from "lucide-react";

export default function PackageHero({ PackageData }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <EnquiryPopup open={isOpen} onClose={() => setIsOpen(false)} />

      <section className="relative w-full px-6 py-12 lg:px-16">

        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-100 via-orange-50 to-white" />

        {/* BreadCrumbs */}
        <nav className="text-sm text-orange-400 mb-4 px-3 sm:px-16 -mt-6">
          <ol className="flex flex-wrap items-center gap-y-1">
            <li className="flex items-center shrink-0">
              <Link href="/" className="hover:text-orange-500 transition-colors whitespace-nowrap">Home</Link>
              <span className="mx-2 text-orange-300">/</span>
            </li>
            <li className="flex items-center shrink-0">
              <Link href="/tour-packages" className="font-medium hover:text-orange-500 transition-colors whitespace-nowrap">Packages</Link>
              <span className="mx-2 text-orange-300">/</span>
            </li>
            <li className="flex items-center min-w-0">
              <span className="font-medium text-orange-500 truncate" title={PackageData.slug}>
                {PackageData.slug}
              </span>
            </li>
          </ol>
        </nav>

        {/* ── DESKTOP LAYOUT (lg+) ── */}
        <div className="hidden lg:block mx-auto max-w-7xl">
          <div className="grid grid-cols-3 gap-6">
            {/* Big image */}
            <div className="relative col-span-2 h-[420px] rounded-3xl overflow-hidden group cursor-pointer">
              <Image
                src={PackageData.heroimage.image}
                alt={PackageData.heroimage.alt}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-orange-600 shadow">
                🔥 Premium Experience
              </div>
            </div>

            {/* 4 small images */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {PackageData.childImage?.map((item: any, i: any) => (
                <div key={i} className="relative rounded-2xl overflow-hidden group">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop title + price row */}
          <div className="mt-8 flex items-center justify-between gap-6">
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight break-words">
                {PackageData.title}
              </h1>
              <div className="flex items-center gap-2 mt-3 text-sm">
                <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                <span className="font-semibold">{PackageData.rating || "4.8"}</span>
                <span className="text-gray-600">({PackageData.reviews || "120"}) reviews</span>
              </div>
            </div>

            <div className="shrink-0 bg-white/70 backdrop-blur-md border border-orange-100 shadow-xl rounded-2xl px-6 py-5">
              <div className="flex items-center gap-8">
                <div className="text-right">
                  <p className="text-xs uppercase tracking-wide text-gray-500">Starting from</p>
                  <div className="flex items-end justify-end gap-1">
                    <span className="text-4xl font-extrabold text-orange-600 flex items-center">
                      <IndianRupee size={34} />
                      {PackageData.price}
                    </span>
                    <span className="text-sm text-gray-500 mb-1">/person</span>
                  </div>
                  <div className="flex justify-end">
                    <span className="mt-2 text-xs bg-orange-50 text-orange-600 px-3 py-1 rounded-full font-medium">
                      Best Price Guarantee
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(true)}
                  className="whitespace-nowrap cursor-pointer px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Book Now →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE LAYOUT (below lg) */}
        <div className="lg:hidden mx-auto max-w-7xl">

          {/* Big hero image with title + price overlaid at bottom */}
          <div className="relative aspect-[4/3] sm:h-[320px] rounded-3xl overflow-hidden group cursor-pointer">
            <Image
              src={PackageData.heroimage.image}
              alt={PackageData.heroimage.alt}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Badge */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-orange-600 shadow">
              🔥 Premium Experience
            </div>

            {/* Title + rating overlay at bottom of hero image */}
            {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent px-4 pb-4 pt-10">
              <h1 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
                {PackageData.title}
              </h1>
              <div className="flex items-center gap-2 mt-1 text-xs">
                <Star className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
                <span className="font-semibold text-white">{PackageData.rating || "4.8"}</span>
                <span className="text-white/70">({PackageData.reviews || "120"}) reviews</span>
              </div>
            </div> */}
          </div>

          {/* 4 small images in a 2x2 grid */}
          <div className="grid grid-cols-4 gap-2 mt-2">
            {PackageData.childImage?.map((item: any, i: any) => (
              <div key={i} className="relative h-20 sm:h-24 rounded-xl overflow-hidden group cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            ))}
          </div>

          {/* Second way to show title */}

          <div className="  px-2 pb-4 pt-10">
              <h1 className="text-lg sm:text-xl font-extrabold text-black leading-tight">
                {PackageData.title}
              </h1>
              <div className="flex items-center gap-2  text-xs mt-4">
                <Star className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
                <span className="font-semibold ">{PackageData.rating || "4.8"}</span>
                <span className="">({PackageData.reviews || "120"}) reviews</span>
              </div>
              
          </div>

         

          {/* Price + CTA card below images */}
          <div className="mt-4 bg-white/70 backdrop-blur-md border border-orange-100 shadow-xl rounded-2xl px-5 py-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">Starting from</p>
                <div className="flex items-end gap-0.5 mt-0.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-orange-600 flex items-center">
                    <IndianRupee size={22} />
                    {PackageData.price}
                  </span>
                  <span className="text-xs text-gray-500 mb-1">/person</span>
                </div>
                <span className="text-xs bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full font-medium">
                  Best Price Guarantee
                </span>
              </div>
              <button
                onClick={() => setIsOpen(true)}
                className="shrink-0 cursor-pointer px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-sm shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Book Now →
              </button>
            </div>
          </div>

        </div>

      </section>
    </>
  );
}