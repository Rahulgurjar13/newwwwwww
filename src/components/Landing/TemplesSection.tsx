"use client";
import { MapPin, Landmark } from "lucide-react";

const templeGroups = [
  {
    label: "Vrindavan",
    count: 9,
    temples: [
      "Banke Bihari Temple",
      "ISKCON Temple",
      "Prem Mandir",
      "Radha Raman Temple",
      "Radha Damodar Temple",
      "Madan Mohan Temple",
      "Nidhivan",
      "Seva Kunj",
      "Gopeshwar Mahadev Temple",
    ],
  },
  {
    label: "Mathura",
    count: 6,
    temples: [
      "Shri Krishna Janmabhoomi",
      "Dwarkadhish Temple",
      "Vishram Ghat",
      "Kusum Sarovar",
      "Gita Mandir",
      "Keshi Ghat",
    ],
  },
  {
    label: "Govardhan & Barsana",
    count: 4,
    temples: [
      "Govardhan Hill (Giriraj)",
      "Mansi Ganga",
      "Radha Rani Temple (Barsana)",
      "Nandgaon",
    ],
  },
];

export default function TemplesSection() {
  return (
    <section className="py-16 md:py-20 px-5 sm:px-8 bg-[#FFF5EE]">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold text-orange-600 uppercase tracking-wider mb-4">
            Sacred Places
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Temples We Cover
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-orange-500" />
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Covering 19+ temples across the holy Braj region
          </p>
        </div>

        {/* Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templeGroups.map((group, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100
            hover:shadow-lg hover:border-orange-100 transition duration-300">
              {/* Card header */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 px-6 py-4 border-b border-orange-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Landmark size={16} className="text-orange-500" />
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                    {group.label}
                  </h3>
                </div>
                <span className="text-xs font-semibold text-orange-500 bg-orange-100 px-2.5 py-0.5 rounded-full">
                  {group.count} Sites
                </span>
              </div>

              {/* Temple list */}
              <ul className="p-6 space-y-3">
                {group.temples.map((t, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <MapPin size={13} className="text-orange-400 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA — open popup */}
        <div className="text-center mt-10">
          <button
            onClick={() => window.dispatchEvent(new Event("open-lead-popup"))}
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 text-white font-bold px-8 py-3 text-sm hover:bg-orange-600 shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
          >
            Book Temple Tour Now
          </button>
        </div>
      </div>
    </section>
  );
}
