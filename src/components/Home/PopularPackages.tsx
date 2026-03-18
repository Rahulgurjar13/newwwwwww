import Link from "next/link";
import TourCard from "./TourCard";
import { Suspense } from "react";

const tours = [
  {
    title: "1 Day Vrindavan Darshan",
    subtitle: "Banke Bihari • Prem Mandir • ISKCON Temple",
    duration: "1 Day",
    price: "1499",
    image: "/images/Home/oneday-vrindavan.webp",
    slug: "tour-packages/one-day/vrindavan-tour-package"
  },
  {
    title: "Mathura & Vrindavan Tour",
    subtitle: "Krishna Janmabhoomi • Dwarkadhish • Banke Bihari",
    duration: "2D / 1N",
    price: "2499",
    image: "/images/Home/two-days-mathura-vrindavan.webp",
    slug: "/tour-packages/two-days/mathura-vrindavan-tour"
  },
  {
    title: "3 Days Agra Mathura Vrindavan Tour Package",
    subtitle: "Taj Mahal • Krishna Janmabhoomi • Banke Bihari",
    duration: "3 Day",
    price: "3399",
    image: "/images/Home/three-days-tour-packages.webp",
    slug: "/tour-packages/three-days/agra-mathura-vrindavan-tour-package"
  },
  {
    title: "4 Days Mathura Vrindavan Agra Tour Package",
    subtitle: "Mathura Temples • Vrindavan Darshan • Taj Mahal",
    duration: "4D",
    price: "3799",
    image: "/images/Home/four-days-tour-packages.webp",
    slug: "/tour-packages/four-days/mathura-vrindavan-agra-tour-package"
  },
  {
    title: "5 Days Braj 84 Kos Yatra",
    subtitle: "Govardhan • Barsana • Nandgaon • Radha Kund",
    duration: "5 Day",
    price: "4199",
    image: "/images/Home/five-days-tour-packages.webp",
    slug: "/tour-packages/five-days/braj-84-kos-yatra"
  },
  {
    title: "6 Days Mathura Vrindavan Ayodhya Varanasi Tour",
    subtitle: "Ram Janmabhoomi • Kashi Vishwanath • Ganga Aarti",
    duration: "6 Days",
    price: "4599",
    image: "/images/Home/six-days-tour-packages.webp",
    slug: "tour-packages/six-days/mathura-vrindavan-ayodhya-varanasi-tour"
  },
  {
    title: "10 Days Mathura Vrindavan Ayodhya Varanasi Chitrakoot Tour Package",
    subtitle: "Braj Temples • Ayodhya • Kashi • Chitrakoot",
    duration: "10D",
    price: "6599",
    image: "/images/Home/ten-days-tour-packages.webp",
    slug: "tour-packages/ten-days/mathura-vrindavan-ayodhya-varanasi-chitrakoot-tour-package"
  },
];

export default function PopularTours() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* HEADER */}
        <div className="mb-8 sm:mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Popular Mathura–Vrindavan Packages
            </h2>
            <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-gray-600">
              Most loved spiritual tours by pilgrims
            </p>
          </div>

          {/* Desktop button */}
          <Link href={'/tour-packages'} className="hidden md:block text-orange-600 font-semibold cursor-pointer">
            View All →
          </Link>
           
        </div>

        {/* SLIDER */}
        <div className="relative">
          <div
            className="
              flex gap-4 sm:gap-6
              overflow-x-auto pb-4
              scroll-smooth
              snap-x snap-mandatory
              orange-scrollbar
            "
          >
            {tours.map((tour, index) => (
              <div
                key={index}
                className="
                  snap-start
                  min-w-[90%]
                  sm:min-w-[70%]
                  md:min-w-[48%]
                  lg:min-w-[32%]
                "
              >
                <Suspense fallback={<div>Loading...</div>}><TourCard {...tour} /></Suspense>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View All */}
        <div className="mt-6 text-center md:hidden">
          <button className="text-orange-600 font-semibold">
            View All Packages →
          </button>
        </div>

      </div>
    </section>
  );
}
