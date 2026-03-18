"use client";
import React from "react";

type SegmentType = {
  id: string;
  from: string;
  to: string;
};

type RouteType = {
  source: string;
  destination: string;
  segments: SegmentType[];
};

const DestRoutes = ({
  route,
  setRoute,
}: {
  route: RouteType;
  setRoute: React.Dispatch<React.SetStateAction<RouteType>>;
}) => {

  // Add Segment
  const handleAddSegment = () => {
    setRoute((prev) => ({
      ...prev,
      segments: [
        ...prev.segments,
        { id: crypto.randomUUID(), from: "", to: "" },
      ],
    }));
  };


  const handleSegmentChange = (
    id: string,
    field: "from" | "to",
    value: string
  ) => {
    setRoute((prev) => ({
      ...prev,
      segments: prev.segments.map((seg) =>
        seg.id === id ? { ...seg, [field]: value } : seg
      ),
    }));
  };

  // Delete Segment
  const handleDeleteSegment = (id: string) => {
    setRoute((prev) => ({
      ...prev,
      segments : prev.segments.filter((seg) => seg.id !== id),
    }));
  };

  return (
    <div className="border-2 border-indigo-500 rounded-3xl w-full p-8 shadow-md shadow-indigo-500 transition">

      <div className="text-3xl font-bold text-white text-center mb-8">
        Route Configuration
      </div>

      {/* SOURCE */}
      <div className="mb-6">
        <label className="text-white font-semibold">
          Source (Fixed)
        </label>
        <input
          type="text"
          required
          placeholder="Enter main source"
          value={route.source}
          onChange={(e) =>
            setRoute((prev) => ({
              ...prev,
              source: e.target.value,
            }))
          }
          className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
        />
      </div>

      {/* DESTINATION */}
      <div className="mb-8">
        <label className="text-white font-semibold">
          Destination (Fixed)
        </label>
        <input
          type="text"
          required
          placeholder="Enter main destination"
          value={route.destination}
          onChange={(e) =>
            setRoute((prev) => ({
              ...prev, 
              destination: e.target.value,
            }))
          }
          className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
        />
      </div>

   
      <div>
        <label className="text-white font-semibold">
          Route Segments (From → To)
        </label>

        {route.segments.map((segment) => (
          <div
            key={segment.id}
            className="mt-4 border border-indigo-400 p-4 rounded-xl"
          >
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="From"
                value={segment.from}
                required
                onChange={(e) =>
                  handleSegmentChange(
                    segment.id,
                    "from",
                    e.target.value
                  )
                }
                className="w-1/2 px-4 py-2 rounded-lg bg-white/5 text-white border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
              />

              <input
                type="text"
                placeholder="To"
                value={segment.to}
                required
                onChange={(e) =>
                  handleSegmentChange(
                    segment.id,
                    "to",
                    e.target.value
                  )
                }
                className="w-1/2 px-4 py-2 rounded-lg bg-white/5 text-white border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
              />
            </div>

            <button
              type="button"
              onClick={() => handleDeleteSegment(segment.id)}
              className="mt-3 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition cursor-pointer"
            >
              Delete
            </button>
          </div>
        ))}

        <div className="mt-5">
          <button
            type="button"
            onClick={handleAddSegment}
            className="px-6 py-3 bg-blue-800 text-white rounded-2xl hover:bg-green-500 transition cursor-pointer"
          >
            + Add Route Segment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestRoutes;
