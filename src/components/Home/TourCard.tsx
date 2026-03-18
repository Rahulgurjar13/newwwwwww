"use client"

import Image from "next/image";
import { CheckCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import EnquiryPopup from "@/utils/EnquiryForm";
import { useState } from "react";

interface TourCardProps {
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  image: string;
  slug: string;
}

export default function TourCard({
  title,
  subtitle,
  duration,
  price,
  image,
  slug,
}: TourCardProps) {

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const goToPage = () => router.push(slug);

  return (
    <>
      <EnquiryPopup open={isOpen} onClose={() => setIsOpen(false)} />

      <div
        onClick={goToPage}
        className="rounded-2xl overflow-hidden cursor-pointer bg-white shadow-sm hover:shadow-xl transition duration-300"
      >

        {/* IMAGE */}
        <div className="relative h-60">
          <Image
            src={image}
            alt={title}
            loading="lazy"
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="object-cover h-full w-full"
          />
        </div>

        {/* CONTENT */}
        <div className="p-5">

          <h3 className="text-lg font-bold text-gray-900 leading-tight h-16">
            {title}
          </h3>

          <p className="text-sm text-gray-600 mt-1">
            {subtitle}
          </p>

          {/* FEATURES */}
          <ul className="mt-4 space-y-2 text-sm text-gray-700 flex flex-wrap gap-x-6 gap-y-1">

            <li className="flex gap-2 items-center">
              <CheckCircleIcon className="w-5 h-5 text-green-400" />
              AC Cab Included
            </li>

            <li className="flex gap-2 items-center">
              <CheckCircleIcon className="w-5 h-5 text-green-400" />
              Local Braj Guide
            </li>

            <li className="flex gap-2 items-center">
              <CheckCircleIcon className="w-5 h-5 text-green-400" />
              Temple Darshan
            </li>

          </ul>

          {/* PRICE + CTA */}
          <div className="mt-5 flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">Starting from</p>
              <p className="text-xl font-bold text-orange-600">
                ₹{price}
                <span className="text-sm text-gray-500 font-normal">
                  /person
                </span>
              </p>
            </div>

            <button
              onClick={(e)=>{
                e.stopPropagation();
                setIsOpen(true);
              }}
              className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl font-semibold text-sm transition"
            >
              Book Now
            </button>

          </div>

        </div>

      </div>
    </>
  );
}