"use client";
import Link from "next/link";
import { Home, MapPin, Search } from "lucide-react";
import Navbar from "@/utils/Navbar";
import Footer from "@/utils/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-orange-50 via-white to-orange-100 px-6">
        <div className="max-w-3xl text-center">

          {/* Decorative Krishna Symbol */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-orange-500/10 flex items-center justify-center shadow-lg">
              <span className="text-4xl">🦚</span>
            </div>
          </div>

          {/* 404 Text */}
          <h1 className="text-7xl md:text-8xl font-extrabold text-orange-600 drop-shadow-sm">
            404
          </h1>

          {/* Heading */}
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
            You seem lost in <span className="text-orange-500">Braj</span>
          </h2>

          {/* Spiritual Message */}
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            The path you’re looking for doesn’t exist.
            But don’t worry — just like in Vrindavan, **Krishna always guides the lost souls**.
          </p>

          {/* Divider */}
          <div className="mt-6 flex justify-center">
            <span className="h-1 w-24 rounded-full bg-orange-400"></span>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-white font-semibold shadow-md hover:bg-orange-600 transition"
            >
              <Home size={18} />
              Back to Home
            </Link>

            <Link
              href="/tour-packages"
              className="inline-flex items-center gap-2 rounded-full border border-orange-400 px-6 py-3 text-orange-600 font-semibold hover:bg-orange-50 transition"
            >
              <MapPin size={18} />
              Explore Tours
            </Link>

            <Link
              href="/search"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-gray-700 font-semibold hover:bg-white transition"
            >
              <Search size={18} />
              Search Places
            </Link>

          </div>

          {/* Footer Quote */}
          <p className="mt-12 text-sm text-gray-500 italic">
            “In Vrindavan, even being lost is part of the journey.”
          </p>

        </div>
      </section>
      <Footer />
    </>
  );
}
