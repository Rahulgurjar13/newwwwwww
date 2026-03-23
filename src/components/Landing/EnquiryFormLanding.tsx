"use client";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function EnquiryFormLanding() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    persons: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry Form Data:", form);
    setSubmitted(true);
  };

  return (
    <section id="enquiry" className="py-16 md:py-20 px-5 sm:px-8 bg-gradient-to-r from-[#b3500a] via-[#cf7602] to-[#c45800] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-yellow-300/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-3xl relative z-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Book Your Spiritual Journey Today
          </h2>
          <p className="mt-3 text-orange-100 text-sm sm:text-base">
            Fill in your details and we'll get back to you within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
              <CheckCircle size={36} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600">We&apos;ll contact you soon to plan your divine journey.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Full Name */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                />
              </div>

              {/* Start Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Start Date</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                />
              </div>

              {/* Total Persons */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Total Persons</label>
                <select
                  name="persons"
                  value={form.persons}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition bg-white"
                >
                  <option value="">Select group size</option>
                  <option value="2">2 Adults</option>
                  <option value="4">4 Adults</option>
                  <option value="6">6 Adults</option>
                  <option value="12">12 Adults</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message (Optional)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Any special requirements or questions..."
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 w-full cursor-pointer rounded-full bg-orange-500 px-8 py-3.5 text-base font-bold text-white shadow-lg hover:bg-orange-600 hover:shadow-xl transition duration-300 flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Send Enquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
