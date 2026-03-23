"use client";
import { MapPin, Clock, Star, Shield, Users, Phone, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function MathuraHero() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", date: "", persons: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Hero Form:", form);
    setSubmitted(true);
  };

  return (
    <>
      {/* Urgency Strip — orange themed */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 text-white text-center py-2.5 px-4">
        <p className="text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-yellow-300 animate-pulse" />
          Limited Seats Left — Special Offer: Extra 10% Off This Week
        </p>
      </div>

      <section className="relative w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a00] via-[#3d1a00] to-[#5c2a00]" />

        {/* Decorative glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-orange-600/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-orange-500/15 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-amber-500/10 blur-[80px] pointer-events-none" />

        {/* Content — split layout */}
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 py-14 md:py-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* ─── LEFT — Content ─── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 border border-orange-400/25 px-4 py-2 mb-6">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="text-xs sm:text-sm font-medium text-orange-200">4.9/5 Rated · 10,000+ Happy Pilgrims</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight text-white">
              Mathura Vrindavan Agra
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight text-orange-400 mt-1">
              Tour Packages
            </h2>

            {/* Subtitle */}
            <p className="mt-5 text-sm sm:text-base text-gray-300 max-w-lg leading-relaxed mx-auto lg:mx-0">
              Customised spiritual tour packages from 1 to 10 days covering Mathura, Vrindavan, Gokul, Agra, Govardhan and Barsana.
            </p>

            {/* Info pills */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-xs sm:text-sm font-medium text-gray-200">
                <Clock size={14} className="text-orange-400" />
                1 to 10 Days
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-xs sm:text-sm font-medium text-gray-200">
                <MapPin size={14} className="text-orange-400" />
                Mathura · Vrindavan · Agra
              </span>
            </div>

            {/* Price + CTA row */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto">
              <span className="block sm:inline-block rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-lg font-extrabold text-white shadow-lg shadow-orange-500/30 text-center">
                Starting ₹1,499/person
              </span>
              <Link
                href="tel:+917300620809"
                className="flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 transition duration-300"
              >
                <Phone size={15} className="text-green-400" />
                Call Now
              </Link>
            </div>

            {/* Trust micro */}
            <div className="mt-6 grid grid-cols-3 sm:flex sm:flex-wrap sm:items-center gap-3 sm:gap-5 text-xs text-gray-400 text-center sm:text-left justify-center lg:justify-start">
              <span className="flex flex-col sm:flex-row items-center gap-1 sm:gap-1.5">
                <Shield size={13} className="text-orange-400" />
                Free Cancellation
              </span>
              <span className="flex flex-col sm:flex-row items-center gap-1 sm:gap-1.5">
                <Users size={13} className="text-orange-400" />
                24/7 Support
              </span>
              <span className="flex flex-col sm:flex-row items-center gap-1 sm:gap-1.5">
                <Star size={13} className="text-orange-400" />
                VIP Darshan
              </span>
            </div>
          </div>

          {/* ─── RIGHT — Lead Form Card ─── */}
          <div className="w-full lg:w-[420px] shrink-0">
            <div className="bg-white rounded-2xl border border-gray-400 shadow-lg overflow-hidden">

              {/* Header — rich orange matching page theme */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 px-6 py-5">
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 backdrop-blur-sm">
                  QUICK ENQUIRY
                </span>
                <h3 className="text-xl font-bold text-white">Plan Your Braj Tour</h3>
                <p className="mt-1 text-sm text-orange-100">
                  Share your details — we&apos;ll send the best plan.
                </p>

                {/* Trust badges */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                    <Shield size={12} />
                    Trusted
                  </span>
                  <span className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                    <Star size={12} />
                    4.9 Rated
                  </span>
                  <span className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                    <Clock size={12} />
                    Fast Reply
                  </span>
                </div>
              </div>

              {/* Form body */}
              <div className="p-6">
                {submitted ? (
                  <div className="py-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-500" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Enquiry Sent!</h4>
                    <p className="text-sm text-gray-500">Our team will call you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name - floating label style */}
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder=" "
                        className="peer w-full rounded-xl border border-gray-300 px-4 pt-5 pb-2
                        text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-200"
                      />
                      {!form.name && (
                        <label className="absolute left-4 top-3 text-gray-500 text-sm
                        transition-all duration-200
                        peer-placeholder-shown:top-4
                        peer-placeholder-shown:text-sm
                        peer-focus:top-1
                        peer-focus:text-xs
                        peer-focus:text-orange-600 pointer-events-none">
                          Full Name *
                        </label>
                      )}
                    </div>

                    {/* Phone with +91 prefix */}
                    <div className="flex gap-2">
                      <div className="w-16 border border-gray-300 rounded-xl flex items-center justify-center text-sm text-gray-600 shrink-0">
                        +91
                      </div>
                      <div className="relative flex-1">
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder=" "
                          className="peer w-full rounded-xl border border-gray-300 px-4 pt-5 pb-2
                          text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-200"
                        />
                        {!form.phone && (
                          <label className="absolute left-4 top-3 text-gray-500 text-sm
                          transition-all duration-200
                          peer-placeholder-shown:top-4
                          peer-placeholder-shown:text-sm
                          peer-focus:top-1
                          peer-focus:text-xs
                          peer-focus:text-orange-600 pointer-events-none">
                            Phone Number *
                          </label>
                        )}
                      </div>
                    </div>

                    {/* Travel Date */}
                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        className="peer w-full rounded-xl border border-gray-300 px-4 pt-5 pb-2
                        text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-200"
                      />
                      <label className="absolute left-3 top-1 text-xs text-gray-500
                      peer-focus:text-orange-600 pointer-events-none">
                        Travel Date
                      </label>
                    </div>

                    {/* Travellers */}
                    <div className="relative">
                      <input
                        type="text"
                        name="persons"
                        value={form.persons}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full rounded-xl border border-gray-300 px-4 pt-5 pb-2
                        text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-200"
                      />
                      {!form.persons && (
                        <label className="absolute left-4 top-3 text-gray-500 text-sm
                        transition-all duration-200
                        peer-placeholder-shown:top-4
                        peer-placeholder-shown:text-sm
                        peer-focus:top-1
                        peer-focus:text-xs
                        peer-focus:text-orange-600 pointer-events-none">
                          Number of Travellers
                        </label>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 cursor-pointer
                      text-white font-semibold py-3 rounded-xl transition"
                    >
                      Send Enquiry
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting, you agree to be contacted via call or WhatsApp.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 60L1440 60L1440 20C1440 20 1200 0 720 0C240 0 0 20 0 20L0 60Z" fill="#FFF5EE" />
          </svg>
        </div>
      </section>
    </>
  );
}
