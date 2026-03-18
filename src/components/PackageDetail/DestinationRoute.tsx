"use client";

import { useState } from "react";
import { ChevronDown, Route } from "lucide-react";

type Segment = {
  id: string;
  from: string;
  to: string;
};

type RouteType = {
  source: string;
  destination: string;
  segments: Segment[];
};

export default function DestinationRoute({
  routeData,
}: {
  routeData: RouteType;
}) {
  const [open, setOpen] = useState(false);

  const mainRoute = `${routeData.source} → ${routeData.destination}`;

  return (
    <div className="w-full max-w-3xl px-5 ">

      {/* MAIN BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className={`group relative w-full flex items-center justify-between rounded-2xl border px-6 py-5 text-left transition-all duration-300 cursor-pointer
        ${open
            ? "border-orange-500 bg-orange-50 shadow-orange-200 shadow-lg"
            : "border-gray-200 bg-white hover:border-orange-300"
          }`}
      >
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-md">
            <Route size={18} />
          </span>

          <div>
            <p className="text-sm text-gray-500">Route</p>
            <p className="text-base font-semibold text-orange-600">
              {mainRoute}
            </p>
          </div>
        </div>

        <ChevronDown
          className={`h-6 w-6 text-orange-500 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* DROPDOWN DETAILS */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-5 shadow-inner">

          <ol className="space-y-3 list-decimal pl-5 text-gray-700">
            {routeData.segments.map((segment, index) => (
              <li key={segment.id} className="font-medium">
                {segment.from} → {segment.to}
              </li>
            ))}

            {/* Final destination if needed */}
            {routeData.segments.length > 0 && (
              <li className="font-medium text-orange-600">
                Final Arrival: {routeData.destination}
              </li>
            )}
          </ol>

        </div>
      </div>
    </div>
  );
}
