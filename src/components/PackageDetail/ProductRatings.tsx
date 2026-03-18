"use client";

import { Heart, Star, PhoneCall, Users } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "3 Million+",
    desc: "Happy travelers from 70+ countries across the globe.",
  },
  {
    icon: Star,
    title: "4.8 / 5",
    desc: "Top-rated experiences across Google & TripAdvisor.",
  },
  {
    icon: Heart,
    title: "Curated with Love",
    desc: "Thoughtfully designed Indian-friendly itineraries.",
  },
  {
    icon: PhoneCall,
    title: "24/7 Assistance",
    desc: "Support before, during & after your journey.",
  },
];

export default function ProductRatings() {
  return (
    <section className="relative w-full bg-white py-20">
      {/* Soft Orange Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-50/70 to-white" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group relative rounded-3xl bg-white p-8 text-center transition-all shadow-md duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-200 cursor-pointer"
              >
                {/* Floating Icon */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg transition-transform duration-500 group-hover:scale-110">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-2xl font-extrabold text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>

                {/* Decorative Glow */}
                <span className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="absolute inset-0 rounded-3xl bg-orange-400/10 blur-xl" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
