"use client";
import { CheckCircle, Phone, Shield, Star, Clock, Users, MapPin, Send } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function EnquiryFormLanding() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", date: "", persons: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry Form Data:", form);
    setSubmitted(true);
  };

  return (
    <section id="enquiry" className="py-14 md:py-20 px-5 sm:px-8 bg-gradient-to-br from-[#1a0a00] via-[#3d1a00] to-[#5c2a00] relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-orange-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-500/10 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        {/* ─── LEFT — Content ─── */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block rounded-full bg-orange-500/15 border border-orange-400/25 px-4 py-1.5 text-xs font-bold text-orange-300 uppercase tracking-wider mb-5">
            Book Now
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-snug">
            Ready to Start Your<br className="hidden sm:block" /> Spiritual Journey?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Share your details and our Braj tour expert will call you within 30 minutes with a customised plan.
          </p>

          {/* Trust points */}
          <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-xs sm:text-sm text-gray-200">
              <Shield size={14} className="text-orange-400" />
              10,000+ Happy Travellers
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-xs sm:text-sm text-gray-200">
              <Star size={14} className="text-orange-400" />
              4.9/5 Rated
            </span>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Link
              href="tel:+917302265809"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition"
            >
              <Phone size={15} className="text-green-400" />
              +91 7302265809
            </Link>
            <Link
              href="https://wa.me/7302265809"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700 transition"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>

        {/* ─── RIGHT — Form Card (matching hero form) ─── */}
        <div className="w-full lg:w-[420px] shrink-0">
          <div className="bg-white rounded-2xl border border-gray-400 shadow-lg overflow-hidden">

            {/* Orange header */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 px-6 py-5">
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 backdrop-blur-sm">
                QUICK ENQUIRY
              </span>
              <h3 className="text-xl font-bold text-white">Plan Your Braj Tour</h3>
              <p className="mt-1 text-sm text-orange-100">
                Fill the form — we&apos;ll send the best plan.
              </p>

              {/* Trust badges */}
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                  <Shield size={12} /> Trusted
                </span>
                <span className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                  <Star size={12} /> 4.9 Rated
                </span>
                <span className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                  <Clock size={12} /> Fast Reply
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
                  {/* Name */}
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
                      peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
                      peer-focus:top-1 peer-focus:text-xs peer-focus:text-orange-600 pointer-events-none">
                        Full Name *
                      </label>
                    )}
                  </div>

                  {/* Phone with +91 */}
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
                        peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
                        peer-focus:top-1 peer-focus:text-xs peer-focus:text-orange-600 pointer-events-none">
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
                      peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
                      peer-focus:top-1 peer-focus:text-xs peer-focus:text-orange-600 pointer-events-none">
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
    </section>
  );
}
