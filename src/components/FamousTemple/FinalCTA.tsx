"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight, Shield, AlertTriangle, Phone, Mail, User, Calendar, CheckCircle, Sparkles } from "lucide-react";
import emailjs from '@emailjs/browser'

function useInView(ref: React.RefObject<HTMLElement>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

const PERKS = [
  "Free Cancellation",
  "No Hidden Charges",
  "Expert-Curated Tours",
  "24/7 Support",
];

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null!);
  const inView = useInView(sectionRef);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "" });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          arival : form.date
          
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);
      setForm({
        name: "",
        phone: "",
        email: "",
        date: "",
       
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitted(false);
    }
  };

  return (
    <section ref={sectionRef} className="relative bg-white py-24 px-4 overflow-hidden">

      {/* ── very subtle warm tint top-right ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-50 blur-[120px] pointer-events-none -z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── eyebrow ── */}
        <div className={`flex items-center justify-center gap-3 mb-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-orange-400" />
          <span className="text-orange-500 text-xs font-semibold tracking-[.22em] uppercase">Limited Time Offer</span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-orange-400" />
        </div>

        {/* ── Heading ── */}
        <div className={`text-center mb-12 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-orange-950 leading-tight mb-4">
            Planning a Trip?{" "}
            <span className="text-orange-500">Let's See</span>
            <br className="hidden sm:block" />
            {" "}What Discount You Get!
          </h2>
          <p className="text-stone-500 text-base max-w-xl mx-auto leading-relaxed">
            Fill in your details and our travel experts will craft a personalised
            itinerary with the best deals — absolutely free.
          </p>
        </div>

        {/* ── Main card ── */}
        <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(234,88,12,0.12)] border border-orange-100">

            {/* orange top strip */}
            <div className="h-1.5 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400" />

            <div className="grid lg:grid-cols-[1fr_auto] bg-white">

              {/* ── LEFT — form ── */}
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-2.5 mb-8">
                  <div className="w-9 h-9 rounded-xl bg-orange-500 flex items-center justify-center shadow-[0_4px_12px_rgba(234,88,12,0.4)]">
                    <Sparkles size={16} color="white" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-orange-950">Get Free Tour Plan</p>
                    <p className="text-xs text-stone-400">Response within 2 hours</p>
                  </div>
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-10 gap-4">
                    <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center">
                      <CheckCircle size={32} className="text-orange-500" />
                    </div>
                    <p className="text-lg font-bold text-orange-950">We'll be in touch soon!</p>
                    <p className="text-sm text-stone-400 text-center max-w-xs">
                      Our travel expert will call you within 2 hours with a personalised plan.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", date: "" }); }}
                      className="text-xs text-orange-500 font-semibold hover:underline"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">

                    {/* Name */}
                    <div className="relative group">
                      <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-300 group-focus-within:text-orange-500 transition-colors" />
                      <input
                        required
                        type="text"
                        placeholder="First name"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-orange-100 bg-orange-50/40 text-sm text-orange-950 placeholder:text-stone-400 focus:outline-none focus:border-orange-400 focus:bg-white transition-all duration-200"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative group">
                      <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-300 group-focus-within:text-orange-500 transition-colors" />
                      <input
                        required
                        type="email"
                        placeholder="Email address"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-orange-100 bg-orange-50/40 text-sm text-orange-950 placeholder:text-stone-400 focus:outline-none focus:border-orange-400 focus:bg-white transition-all duration-200"
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative group">
                      <Phone size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-300 group-focus-within:text-orange-500 transition-colors" />
                      <input
                        required
                        type="tel"
                        placeholder="Phone number"
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-orange-100 bg-orange-50/40 text-sm text-orange-950 placeholder:text-stone-400 focus:outline-none focus:border-orange-400 focus:bg-white transition-all duration-200"
                      />
                    </div>

                    {/* Travel date */}
                    <div className="relative group">
                      <Calendar size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-300 group-focus-within:text-orange-500 transition-colors" />
                      <input
                        type="date"
                        placeholder="Travel date"
                        value={form.date}
                        onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-orange-100 bg-orange-50/40 text-sm text-orange-950 placeholder:text-stone-400 focus:outline-none focus:border-orange-400 focus:bg-white transition-all duration-200"
                      />
                    </div>

                    {/* Submit */}
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="group cursor-pointer w-full relative overflow-hidden inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-sm py-4 rounded-xl shadow-[0_8px_28px_rgba(234,88,12,0.4)] hover:shadow-[0_12px_36px_rgba(234,88,12,0.5)] hover:-translate-y-0.5 transition-all duration-200"
                      >
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        Request a Quote — It's Free
                        <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                      </button>
                      <p className="text-center text-xs text-stone-400 mt-3">
                        No spam. No obligations. Just great travel advice.
                      </p>
                      {success && <p className="text-green-400">Enquir sended successfully</p>}
                    </div>
                  </form>
                )}
              </div>

              {/* ── RIGHT — perks panel ── */}
              <div className="hidden lg:flex flex-col justify-center gap-6 bg-gradient-to-b from-orange-500 to-orange-600 px-10 py-10 min-w-[240px]">
                <p className="text-white font-bold text-base leading-snug">
                  Why plan with us?
                </p>
                <div className="flex flex-col gap-4">
                  {PERKS.map((p) => (
                    <div key={p} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <CheckCircle size={12} className="text-white" />
                      </span>
                      <span className="text-white/90 text-sm font-medium">{p}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-6 border-t border-white/20">
                  <p className="text-white/60 text-xs mb-1">Trusted by</p>
                  <p className="text-white font-bold text-2xl">5,000+</p>
                  <p className="text-white/70 text-xs">happy pilgrims & travellers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Fraud warning ── */}
        <div className={`mt-6 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex gap-4 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-5">
            <div className="shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
              <AlertTriangle size={15} className="text-amber-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-amber-800 mb-1">
                Beware of Fraudulent Agencies
              </p>
              <p className="text-xs text-amber-700/80 leading-relaxed">
                For your protection: Other travel agencies may be using our name to sell misleadingly cheap tours.
                Ensure all bookings and payments are made directly through our executives.
                We are not accountable for bookings made outside our official channels.
              </p>
            </div>
          </div>
        </div>

        {/* ── Trust strip ── */}
        <div className={`mt-8 flex items-center justify-center gap-2 transition-all duration-700 delay-400 ${inView ? "opacity-100" : "opacity-0"}`}>
          <Shield size={13} className="text-orange-400" />
          <span className="text-xs text-stone-400">
            100% Secure · Your data is never shared · Official bookings only
          </span>
        </div>

      </div>
    </section>
  );
}