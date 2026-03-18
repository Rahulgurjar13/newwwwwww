"use client";

import { useState, useRef, useEffect } from "react";

export const destinations = [
  "Gokul",
  "Mathura",
  "Vrindavan",
  "Govardhan",
  "Barsana",
  "Agra",
  "Fatehpur Sikri",
  "Delhi",
  "Bhandirvan",
];

export default function DestinationDropdown({
  selectedDest = [],
  onChange,
}: any) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleDestination = (place: string) => {
    let updated;

    if (selectedDest.includes(place)) {
      updated = selectedDest.filter((d: string) => d !== place);
    } else {
      updated = [...selectedDest, place];
    }

    onChange("selectedDest", updated);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full z-50" ref={containerRef}>
      <input
        type="text"
        placeholder="Destination"
        value={selectedDest}
        onClick={() => setOpen((prev) => !prev)}
        onChange={()=>true}
        className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 bg-orange-50"
      />

      {open && (
        <div
          className="
              absolute z-[9999] mt-1 sm:mt-3 w-full max-h-80 overflow-y-auto
              rounded-2xl border border-orange-200
              bg-white/95 backdrop-blur-md
              shadow-[0_20px_50px_rgba(0,0,0,0.15)] destination-scroll
              p-2
         "
        >
          {destinations.map((place, idx) => {
            const isSelected = selectedDest.includes(place);

            return (
              <label
                key={idx}
                className={`
                flex items-center justify-between
                gap-3 px-4 py-3
                rounded-xl
                cursor-pointer
                transition-all duration-200
          ${
            isSelected
              ? "bg-orange-100 text-orange-700 shadow-sm"
              : "hover:bg-orange-50 text-gray-700"
          }
        `}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleDestination(place)}
                    className="hidden"
                  />

                  {/* Custom Checkbox */}
                  <div
                    className={`
              w-5 h-5 rounded-md flex items-center justify-center
              border-2 transition-all
              ${
                isSelected
                  ? "bg-orange-500 border-orange-500"
                  : "border-gray-300"
              }
            `}
                  >
                    {isSelected && (
                      <span className="text-white text-xs">✓</span>
                    )}
                  </div>

                  <span className="text-sm font-medium">{place}</span>
                </div>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}
