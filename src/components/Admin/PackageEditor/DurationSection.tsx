"use client";

import { useState, SetStateAction } from "react";
import { Plus, Trash2 } from "lucide-react";
import React from "react";

type BreakdownItem = {
  id: string;
  days: string;
  place: string;
};

export default function DurationSection({ days, nights, onChange, breakdown, setBreakdown }: {
  days: string , nights: string , onChange: any, breakdown: BreakdownItem[], setBreakdown: React.Dispatch<SetStateAction<BreakdownItem[]>>
}) {



  const addBreakdown = () => {
    setBreakdown((prev) => [
      ...prev,
      { id: crypto.randomUUID(), days: "1", place: "" },
    ]);
  };



  const removeBreakdown = (id: string) => {
    setBreakdown((prev) => prev.filter((b) => b.id !== id));
  };

  const updateBreakdown = (
    id: string,
    field: "days" | "place",
    value: string
  ) => {
    setBreakdown((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, [field]: field === "days" ? Number(value) : value } : b
      )
    );
  };



  return (
    <div className='border-2 border-indigo-500 rounded-3xl w-full  p-8 shadow-md shadow-indigo-500 hover:shadow-lg cursor-pointer transition'>

      <div className="border rounded-3xl p-6 shadow-md border-2 border-indigo-500 rounded-3xl w-full p-8 shadow-md shadow-indigo-500 hover:shadow-lg cursor-pointer transition mb-2">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">
          Package Duration
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-2 border-indigo-500 rounded-3xl w-full p-6 shadow-md shadow-indigo-500 cursor-pointer mb-5">
          <div>

            <label className="text-sm text-white/70">Days</label>
            <input
              type="number"
              placeholder="Days"
              required
              value={days}
              onChange={(e) =>
                onChange('day', e.target.value)
              }
               className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
            />

          </div>

          <div>

            <label className="text-sm text-white/70">Night</label>
            <input
              type="number"
              placeholder="Nights"
              required
              value={nights}
              onChange={
                (e) => onChange('night', e.target.value)
              }
               className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
            />

          </div>


        </div>

        {/* Preview */}
        {(days || nights) && (
          <p className="mt-4 text-sm text-gray-600">
            Duration Preview:{" "}
            <span className="font-semibold text-orange-600">
              {days || 0} Days / {nights || 0} Nights
            </span>
          </p>
        )}
      </div>

      <div className="border-2 border-indigo-500 rounded-3xl w-full p-6 shadow-md shadow-indigo-500 cursor-pointer mb-5">
        <h3 className="text-lg font-semibold text-gray-100 mb-4">
          Duration Breakdown
        </h3>

        <div className="space-y-4">
          {breakdown.map((item, index) => (
            <div
              key={item.id}
              className="border-2 border-indigo-500 rounded-3xl w-full p-6 shadow-md shadow-indigo-500 cursor-pointer mb-5"
            >
              <div className="flex  gap-3">
                <input
                  required
                  type="number"
                  min={1}
                  value={item.days}
                  onChange={(e) =>
                    updateBreakdown(item.id, "days", e.target.value)
                  }
                   className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
                />

                <input
                  required
                  type="text"
                  placeholder="Place (e.g. Vrindavan)"
                  value={item.place}
                  onChange={(e) =>
                    updateBreakdown(item.id, "place", e.target.value)
                  }
                  className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
                            border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
                />
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Day {index + 1}
                </span>

                <button
                  type="button"
                  onClick={() => removeBreakdown(item.id)}
                  className="flex items-center gap-1 text-red-600 text-sm hover:text-red-700 cursor-pointer"
                >
                  <Trash2 size={14} /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Button */}
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={addBreakdown}
            className="flex items-center gap-2 px-6 py-3 rounded-full
            bg-blue-800 hover:bg-blue-900 text-white font-semibold
            transition cursor-pointer"
        
          >
            <Plus size={16} /> Add Breakdown
          </button>
        </div>
      </div>
    </div>
  );
}
