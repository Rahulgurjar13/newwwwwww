"use client";

import { X, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";

interface QuickEnquiryProps {
  open: boolean;
  onClose: () => void;
}

export default function QuickEnquiry({ open, onClose }: QuickEnquiryProps) {
  if (!open) return null;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const WHATSAPP = "7302265809";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone) {
      alert("Please enter name and phone number");
      return;
    }

    setLoading(true);

    try {
      // Send Email
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name,
          phone,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);

      //Redirect to WhatsApp after short delay
      const whatsappMessage = encodeURIComponent(
        `New Quick Enquiry \n\nName: ${name}\nPhone: ${phone}\n\nPlease contact as soon as possible.`
      );

      setTimeout(() => {
        window.open(
          `https://wa.me/${WHATSAPP}?text=${whatsappMessage}`,
          "_blank"
        );
      }, 600);


      setName("");
      setPhone("");

    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed top-23 left-5 inset-0 z-50 flex items-center cursor-pointer">

      <div onClick={onClose} className="absolute inset-0" />

      {/* Card */}
      <div
        className="
          relative w-[90%] max-w-sm
          rounded-3xl p-6
          bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100
          shadow-[0_20px_60px_rgba(255,140,0,0.35)]
          animate-popup
        "
      >
        {/* Close */}
        <button
          aria-label="Close Form"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white p-2 shadow hover:scale-110 transition cursor-pointer"
        >
          <X className="h-4 w-4 text-orange-700" aria-hidden="true"/>
        </button>

        {/* Avatar */}
        <div className="absolute -top-10 left-6">
          <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 p-1 shadow-lg">
            <div className="h-full w-full overflow-hidden rounded-full bg-white">
              <Image
                src="/images/Home/mathura-vrindavan.webp"
                alt="Tour Assistant"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <form className="mt-10" onSubmit={handleSubmit}>
          <h2 className="text-xl font-extrabold text-orange-900">
            Quick Enquiry
          </h2>
          <p className="mt-1 text-sm text-orange-700">
            We’ll contact you shortly 🌼
          </p>

          {/* Inputs */}
          <div className="mt-5 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-full border border-orange-200 bg-white/80 px-5 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full rounded-full border border-orange-200 bg-white/80 px-5 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          {/* CTA */}
          <button
            type="submit"
            disabled={loading}
            className="
              mt-6 flex w-full items-center justify-center gap-2
              rounded-full py-3
              bg-gradient-to-r from-orange-600 to-amber-500
              text-white font-semibold
              shadow-lg
              hover:scale-[1.03] hover:shadow-xl
              transition-all cursor-pointer
              disabled:opacity-60
            "
          >
            <Phone className="h-4 w-4" />
            {loading ? "Sending..." : "Call Now"}
          </button>

          {success && (
            <p className="mt-3 text-xs text-green-700 text-center">
              Enquiry sent successfully ✔ Redirecting to WhatsApp…
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
