"use client";

import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";

type EnquiryForm = {
  name: string;
  phone: string;
  message: string;
};

export default function EnquirySection() {
  const [form, setForm] = useState<EnquiryForm>({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const WHATSAPP = "917302265809";


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!form.name.trim() || !form.phone.trim()) {
      setError("Please enter your name and phone number.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          phone: form.phone,
          message: form.message || "Not specified",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);

      const whatsappMessage = encodeURIComponent(
        `New Yatra Enquiry 
          Name: ${form.name}
          Phone: ${form.phone}
          Tour: ${form.message || "Not specified"}

          Please contact the devotee as soon as possible.`
      );

      setTimeout(() => {
        window.open(
          `https://wa.me/${WHATSAPP}?text=${whatsappMessage}`,
          "_blank"
        );
      }, 700);

      // 3️⃣ Reset form
      setForm({
        name: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section className="w-full bg-[#fff7ed] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 px-5 sm:px-6 items-stretch">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          <span className="text-orange-500 font-semibold tracking-wide mb-2 text-sm sm:text-base">
            PLAN YOUR YATRA
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Begin Your Sacred Journey to{" "}
            <span className="text-orange-600">Mathura & Vrindavan</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-700 text-base sm:text-lg max-w-xl">
            Discover the divine land of Shri Krishna with peaceful darshan,
            local expertise, and comfortable travel.
          </p>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="mt-6 sm:mt-8 space-y-3 sm:space-y-4"
          >
            <label htmlFor="name" className="sr-only">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-orange-200 px-4 py-3 focus:ring-2 focus:ring-orange-400"
            />

            <label htmlFor="phone" className="sr-only">Mobile Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-lg border border-orange-200 px-4 py-3 focus:ring-2 focus:ring-orange-400"
            />

            <label
              htmlFor="tourType"
              className="sr-only"
            >
              Select Tour Type
            </label>
            <select
              id="tourType"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-orange-200 px-4 py-3 text-gray-700 cursor-pointer focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select Tour Type</option>
              <option>1 Day Vrindavan Darshan</option>
              <option>Mathura Vrindavan Package</option>
              <option>Govardhan Parikrama</option>
              <option>Custom Yatra Plan</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl transition disabled:opacity-70"
            >
              {loading ? "Submitting..." : "Get Free Consultation"}
            </button>

            {/* ERROR */}
            {error && (
              <p className="text-sm text-red-600 font-medium">{error}</p>
            )}

            {/* SUCCESS */}
            {success && (
              <p className="text-sm text-green-600 font-medium">
                Enquiry sent successfully! Redirecting to WhatsApp…
              </p>
            )}
          </form>

          <p className="mt-3 text-xs sm:text-sm text-gray-500">
            🔒 Your details are safe. We respect your privacy.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[360px] lg:min-h-[420px]">
          <Image
            src="/images/Home/mathura-vrindavan.webp"
            alt="Mathura Vrindavan Temple View"
            fill
            loading="lazy"
            sizes="(max-width:1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/40 via-yellow-300/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}