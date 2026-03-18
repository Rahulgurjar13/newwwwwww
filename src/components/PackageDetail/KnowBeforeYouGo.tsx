"use client";

import { Info, CheckCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function KnowBeforeYouGo({ PackageData }: any) {
  const [open, setOpen] = useState(false); // default open

  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Dropdown Card */}
        <div className="relative rounded-2xl border border-orange-200 bg-white/70 backdrop-blur-md shadow-xl overflow-hidden">

          {/* Accent Bar */}
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" />

          {/* Header (Clickable) */}
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center justify-between gap-4 p-6 cursor-pointer select-none"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg">
                <Info className="w-6 h-6" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Know Before You Go
              </h2>
            </div>

            <ChevronDown
              className={`w-6 h-6 text-orange-500 transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              open ? "max-h-full opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <ul className="px-6 pb-6 md:px-8 space-y-4">
              {PackageData?.documents?.map((item: any, index: number) => (
                <li
                  key={index}
                  className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-orange-50"
                >
                  <div>
                    <CheckCircle className="w-5 h-5 mt-1 text-orange-500 group-hover:scale-110 transition-transform cursor-pointer" />
                 </div>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
