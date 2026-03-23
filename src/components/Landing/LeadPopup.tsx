"use client";
import { X, Send, CheckCircle, Shield, Star, Clock } from "lucide-react";
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
    if (!alreadyClosed) {
      const timer = setTimeout(() => setShow(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const openHandler = () => {
      setSubmitted(false);
      setShow(true);
    };
    window.addEventListener("open-lead-popup", openHandler);
    return () => window.removeEventListener("open-lead-popup", openHandler);
  }, []);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("leadPopupClosed", "true");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead Popup Form:", form);
    setSubmitted(true);
    setTimeout(() => handleClose(), 3000);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal — matches hero form card */}
      <div className="relative w-full max-w-[420px] bg-white rounded-2xl border border-gray-400 shadow-2xl overflow-hidden animate-popup">
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition cursor-pointer"
        >
          <X size={16} className="text-white" />
        </button>

        {/* Orange gradient header — same as hero form */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 px-6 py-5">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 backdrop-blur-sm">
            QUICK ENQUIRY
          </span>
          <h3 className="text-xl font-bold text-white">Plan Your Braj Tour</h3>
          <p className="mt-1 text-sm text-orange-100">
            Share your details — we&apos;ll send the best plan.
          </p>
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
              <h4 className="text-lg font-bold text-gray-900 mb-1">Enquiry Sent! 🙏</h4>
              <p className="text-sm text-gray-500">Our expert will call you within 30 minutes.</p>
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

              {/* Number of Travellers */}
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
                text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2"
              >
                <Send size={15} />
                Send Enquiry
              </button>

              <p className="text-center text-xs text-gray-400">
                By submitting, you agree to be contacted via call or WhatsApp.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
