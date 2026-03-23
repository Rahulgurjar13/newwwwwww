"use client";
import { MapPin, Clock, Star, Crown, ArrowRight } from "lucide-react";

const openForm = () => window.dispatchEvent(new Event("open-lead-popup"));

const packages = [
  {
    title: "1 Day – Vrindavan Darshan",
    duration: "1 Day",
    price: "1,499",
    coverage: "Banke Bihari • Prem Mandir • ISKCON Temple",
    popular: false,
  },
  {
    title: "1 Day – Govardhan Barsana Tour",
    duration: "1 Day",
    price: "1,499",
    coverage: "Govardhan Parikrama • Barsana • Radha Rani Temple",
    popular: false,
  },
  {
    title: "2 Days – Mathura Vrindavan Tour",
    duration: "2 Days / 1 Night",
    price: "2,499",
    coverage: "Krishna Janmabhoomi • Dwarkadhish • Banke Bihari",
    popular: true,
  },
  {
    title: "3 Days – Agra Mathura Vrindavan",
    duration: "3 Days / 2 Nights",
    price: "3,399",
    coverage: "Taj Mahal • Krishna Janmabhoomi • Banke Bihari",
    popular: false,
  },
  {
    title: "4 Days – Mathura Vrindavan Agra",
    duration: "4 Days / 3 Nights",
    price: "3,799",
    coverage: "Mathura Temples • Vrindavan Darshan • Taj Mahal",
    popular: false,
  },
  {
    title: "5 Days – Braj 84 Kos Yatra",
    duration: "5 Days / 4 Nights",
    price: "4,199",
    coverage: "Govardhan • Barsana • Nandgaon • Radha Kund",
    popular: false,
  },
  {
    title: "6 Days – Ayodhya Varanasi Tour",
    duration: "6 Days / 5 Nights",
    price: "4,599",
    coverage: "Ram Janmabhoomi • Kashi Vishwanath • Ganga Aarti",
    popular: false,
  },
  {
    title: "10 Days – Complete Spiritual Tour",
    duration: "10 Days / 9 Nights",
    price: "6,599",
    coverage: "Braj Temples • Ayodhya • Kashi • Chitrakoot",
    popular: false,
  },
];

export default function TourPackages() {
  return (
    <section id="packages" className="py-16 md:py-20 px-5 sm:px-8 bg-[#FFF5EE]">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold text-orange-600 uppercase tracking-wider mb-4">
            Choose Your Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Tour Packages
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-orange-500" />
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Fully customizable packages from 1 to 10 days. Private and group options available.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition duration-300 ${
                pkg.popular ? "border-2 border-orange-500 ring-2 ring-orange-200" : "border border-gray-100"
              }`}
            >
              {pkg.popular && (
                <div className="bg-orange-500 text-white text-center py-1.5 text-xs font-bold flex items-center justify-center gap-1">
                  <Crown size={12} />
                  Most Popular
                </div>
              )}

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <span className="inline-flex items-center gap-1 self-start rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600 mb-3">
                  <Clock size={12} />
                  {pkg.duration}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug">{pkg.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-4 flex items-start gap-1.5 leading-relaxed">
                  <MapPin size={14} className="text-orange-400 shrink-0 mt-0.5" />
                  {pkg.coverage}
                </p>
                <div className="mt-auto" />
                <div className="mb-4">
                  <span className="text-2xl font-extrabold text-orange-500">₹{pkg.price}</span>
                  <span className="text-sm text-gray-400"> /person</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={openForm}
                    className={`flex-1 cursor-pointer rounded-full py-2.5 text-sm font-bold transition duration-300 ${
                      pkg.popular
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "border-2 border-orange-500 text-orange-500 hover:bg-orange-50"
                    }`}
                  >
                    Book Now
                  </button>
                  <button
                    onClick={openForm}
                    className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0 hover:bg-orange-100 transition duration-300 cursor-pointer"
                  >
                    <ArrowRight size={16} className="text-orange-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={openForm}
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3 text-sm font-bold text-white hover:bg-orange-600 shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
          >
            Enquire About Any Package
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
