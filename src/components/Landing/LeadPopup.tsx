"use client";
import { X, Send, CheckCircle, Clock, Shield, Gift } from "lucide-react";
import { useState, useEffect } from "react";

export default function LeadPopup() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    persons: "",
  });

  useEffect(() => {
    const alreadyClosed = sessionStorage.getItem("leadPopupClosed");
    if (alreadyClosed) return;

    const timer = setTimeout(() => setShow(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("leadPopupClosed", "true");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead Popup Form:", form);
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-popup">
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition cursor-pointer"
        >
          <X size={18} className="text-gray-600" />
        </button>

        {/* Orange header strip */}
        <div className="bg-gradient-to-r from-[#b3500a] via-[#cf7602] to-[#c45800] px-6 py-5 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-yellow-400/90 px-3 py-1 text-xs font-bold text-gray-900 mb-3">
            <Clock size={12} />
            Limited Period Offer
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
            Get Your Free Tour Quote
          </h3>
          <p className="text-orange-100 text-sm mt-1.5">
            2 Days Mathura Vrindavan Package — Starting ₹2,299
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={36} className="text-green-500" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You! 🙏</h4>
            <p className="text-gray-600 text-sm">Our travel expert will call you within 30 minutes.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6">
            {/* Trust badges */}
            <div className="flex items-center justify-center gap-4 mb-5">
              {[
                { icon: Shield, label: "Verified" },
                { icon: Gift, label: "Best Price" },
                { icon: Clock, label: "Instant Reply" },
              ].map((b, i) => (
                <span key={i} className="flex items-center gap-1 text-xs text-gray-500">
                  <b.icon size={12} className="text-orange-500" />
                  {b.label}
                </span>
              ))}
            </div>

            <div className="space-y-3.5">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your Name *"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number *"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
              />
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
              />
              <select
                name="persons"
                value={form.persons}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition bg-white"
              >
                <option value="">Number of Persons</option>
                <option value="2">2 Adults</option>
                <option value="4">4 Adults</option>
                <option value="6">6 Adults</option>
                <option value="12">12 Adults</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button
              type="submit"
              className="mt-5 w-full cursor-pointer rounded-full bg-orange-500 px-6 py-3.5 text-base font-bold text-white shadow-lg hover:bg-orange-600 hover:shadow-xl transition duration-300 flex items-center justify-center gap-2 pulse-orange"
            >
              <Send size={16} />
              Get Free Quote Now
            </button>

            <p className="text-center text-xs text-gray-400 mt-3">
              ✅ No spam · We reply within 30 minutes
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
