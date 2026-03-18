"use client";

import { useState, useRef, useEffect } from "react";


export const categories = [
  {
    group: "1 Day",
    items: [
      "1 Day Tour Package"
    ],
  },
  {
    group: "2 Day",
    items: [
      "2 Day Tour Package"
    ],
  },
  {
    group: "3 Day",
    items: [
      "3 Day Tour Package"
    ],
  },
  {
    group: "4 Day",
    items: [
      "5 Day Tour Package"
    ],
  },
  {
    group: "6 Day",
    items: [
      "6 Day Tour Package"
    ],
  },
  {
    group: "7 Day",
    items: [
      "7 Day Tour Package"
    ],
  },
  {
    group: "8 Day",
    items: [
      "8 Day Tour Package"
    ],
  },
  {
    group: "9 Day",
    items: [
      "9 Day Tour Package"
    ],
  },
  {
    group: "10 Day",
    items: [
      "10 Day Tour Package"
    ],
  },
];



export default function CategoryDropDown({category , onChange} : any) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
    <div className="relative w-full z-40" ref={containerRef}>
      <input
        type="text"
        placeholder="Days Of Tour Package"
        value={category}
        onClick={() => setOpen((prev) => !prev)}
        onChange={()=>true}
        className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 bg-orange-50"
      />

      {open && (
        <div className="absolute z-[999] mt-2 w-full max-h-72 overflow-y-auto rounded-xl border border-orange-200 bg-white shadow-xl no-scrollbar">
          {categories.map((section) => (
            <div key={section.group}>
              <div className="sticky top-0 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
                📍 {section.group}
              </div>

              {section.items.map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    onChange("category", item)
                    setOpen(false);
                  }}
                  className="cursor-pointer px-4 py-2 text-sm hover:bg-orange-100"
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
