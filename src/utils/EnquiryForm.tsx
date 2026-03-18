"use client";

import { X, Phone, ShieldCheck, Zap, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

interface EnquiryPopupProps {
  open: boolean;
  onClose: () => void;
}

type EnquiryForm = {
  name: string;
  phone: string;
  email: string;
  pickup: string;
  hotel: string;
  adults: string;
  children: string;
  arrival: string;
  departure: string;
  message: string;
};

export default function EnquiryPopup({ open, onClose }: EnquiryPopupProps) {
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState<EnquiryForm>({
    name: "",
    phone: "",
    email: "",
    pickup: "",
    hotel: "",
    adults: "",
    children: "",
    arrival: "",
    departure: "",
    message: "",
  });

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setAnimate(true));
    } else {
      setAnimate(false);
      setSuccess(false);
    }
  }, [open]);

  if (!open) return null;


  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          pickup: form.pickup,
          hotel: form.hotel,
          adults: form.adults,
          children: form.children,
          arrival: form.arrival,
          departure: form.departure,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);
      setForm({
        name: "",
        phone: "",
        email: "",
        pickup: "",
        hotel: "",
        adults: "",
        children: "",
        arrival: "",
        departure: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="fixed inset-0 z-[999] flex items-start justify-center no-scrollbar">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        className={`relative bg-white w-full max-w-5xl mx-4 rounded-3xl shadow-xl
        max-h-[90vh] overflow-y-auto overflow-hidden z-10
        transform transition-all duration-500 ease-out no-scrollbar
        ${animate ? "translate-y-11 opacity-100" : "-translate-y-40 opacity-0"}`}
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow hover:bg-gray-100 cursor-pointer"
        >
          <X />
        </button>

        {/* HEADER */}
        <div className="p-8 border-b bg-orange-300">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            QUICK ENQUIRY
          </span>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Plan Your Braj Tour
              </h2>
              <p className="mt-2 text-gray-600">
                Share your details. Our team will contact you shortly with the
                best route & package plan.
              </p>

              {/* TRUST BADGES */}
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-yellow-300 shadow-lg shadow-orange-300">
                  <ShieldCheck className="w-4 h-4 text-orange-500" /> Trusted
                </span>
                <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-yellow-300 shadow-lg shadow-orange-300">
                  <Zap className="w-4 h-4 text-orange-500" /> Fast Response
                </span>
                <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-yellow-300 shadow-lg shadow-orange-300">
                  <MapPin className="w-4 h-4 text-orange-500" /> Local Experts
                </span>
              </div>
            </div>

            {/* CALL BOX (UNCHANGED) */}
            <div className="bg-white rounded-3xl px-4 py-2 shadow-lg shadow-orange-200 border border-orange-300">
              <div className="flex">
                <p className="text-gray-500">Call Now&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p className="font-semibold text-gray-900 mb-4">
                  +91 7302265809
                </p>
              </div>
              <a
                href="https://wa.me/7302265809"
                target="_blank"
                className="block text-center bg-green-500 hover:bg-green-600 text-white rounded-2xl py-2 px-4 font-semibold"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* FORM */}
       <form
        onSubmit={handleSubmit}
        className="p-10 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {/* FULL NAME */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">
            Full Name *
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="input"
            placeholder="Your full name"
            required
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">
            Phone Number *
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="input"
            placeholder="+91 XXXXX XXXXX"
            required
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">
            Email Address *
          </label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="input"
            placeholder="example@email.com"
            required
          />
        </div>

        {/* PICKUP */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">
            Pickup & Drop Location
          </label>
          <input
            name="pickup"
            value={form.pickup}
            onChange={handleChange}
            className="input"
            placeholder="Hotel / Railway Station"
          />
        </div>

        {/* HOTEL */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">
            Hotel Category
          </label>
          <select
            name="hotel"
            value={form.hotel}
            onChange={handleChange}
            className="input"
          >
            <option value="">Select category</option>
            <option>Budget</option>
            <option>3 Star</option>
            <option>4 Star</option>
            <option>5 Star</option>
          </select>
        </div>

        {/* ADULTS */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">
            Number of Adults *
          </label>
          <input
            name="adults"
            value={form.adults}
            onChange={handleChange}
            className="input"
            placeholder="e.g. 2"
            required
          />
        </div>

        {/* CHILDREN */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">
            Number of Children
          </label>
          <input
            name="children"
            value={form.children}
            onChange={handleChange}
            className="input"
            placeholder="Optional"
          />
        </div>

        {/* ARRIVAL */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">
            Arrival Date
          </label>
          <input
            name="arrival"
            value={form.arrival}
            onChange={handleChange}
            className="input"
            type="date"
          />
        </div>

        {/* DEPARTURE */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">
            Departure Date
          </label>
          <input
            name="departure"
            value={form.departure}
            onChange={handleChange}
            className="input"
            type="date"
          />
        </div>

        {/* MESSAGE */}
        <div className="md:col-span-3">
          <label className="block text-xs text-gray-500 mb-1">
            Message / Special Requirements
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="input h-28 resize-none"
            placeholder="Any special request, senior citizens, darshan priority, etc."
          />
        </div>

        {/* ACTIONS */}
        <div className="md:col-span-3 flex flex-wrap gap-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-3xl font-semibold cursor-pointer"
          >
            {loading ? "Sending..." : "Send Enquiry"}
          </button>

          <a
            href="https://wa.me/7302265809"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-3xl font-semibold"
          >
            WhatsApp
          </a>
        </div>

        {success && (
          <p className="md:col-span-3 text-green-600 font-medium">
            Enquiry sent successfully! We’ll contact you shortly.
          </p>
        )}

        <p className="md:col-span-3 text-xs text-gray-500">
          By submitting, you agree to be contacted via call or WhatsApp.
        </p>
      </form>

      </div>
    </div>
  );
}
