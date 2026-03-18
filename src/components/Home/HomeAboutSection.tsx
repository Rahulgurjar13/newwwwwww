import Image from "next/image";
import { CheckCircle, MapPin, Users, Headphones } from "lucide-react";

export default function HomeAboutSection() {
  return (
    <section className="relative bg-gradient-to-b from-orange-50 to-white py-20 overflow-hidden">

      {/* ── TOP BORDER ── */}
      <div className="absolute top-0 left-0 right-0 z-10">
        {/* Thick gradient line */}
        <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
        {/* Wave SVG */}
        <div className="w-full overflow-hidden leading-none" style={{ height: 36 }}>
          <svg viewBox="0 0 1440 36" preserveAspectRatio="none" className="w-full h-full">
            <path
              d="M0,18 C180,36 360,0 540,18 C720,36 900,0 1080,18 C1260,36 1380,6 1440,18 L1440,0 L0,0 Z"
              fill="rgba(249,115,22,0.08)"
            />
          </svg>
        </div>
        {/* Center ornament */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-9 h-9 rounded-full bg-white border-2 border-orange-300
          flex items-center justify-center shadow-sm text-base">
          🪔
        </div>
      </div>

      {/* ── BACKGROUND ACCENTS ── */}
      <div className="absolute top-10 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)" }} />
      <div className="absolute bottom-10 left-0 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)" }} />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGES */}
        <div className="relative">
          <div className="relative aspect-[2.5/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/Home/AboutUsLarge.webp"
              alt="Banke Bihari Temple Vrindavan"
              fill
              loading="lazy"
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-[55%] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/images/Home/AboutUsSmall.webp"
              alt="Prem Mandir Vrindavan"
              loading="lazy"
              fill
              sizes="(max-width:1024px) 55vw, 27vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-orange-300" />
            <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium">
              About Us
            </span>
            <div className="h-px w-8 bg-orange-300" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 leading-tight mb-6">
            Personalised Mathura – Vrindavan Yatra Experiences
          </h2>

          {/* Decorative divider under heading */}
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[2px] w-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-300" />
            <div className="w-1.5 h-1.5 rounded-sm bg-orange-400 rotate-45" />
            <div className="h-[2px] w-6 rounded-full bg-orange-200" />
          </div>

          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              We design soulful Mathura and Vrindavan tour experiences rooted
              in devotion, comfort, and deep local expertise. From sacred
              temples and Yamuna ghats to peaceful darshans, every journey is
              carefully planned so travellers can experience Braj with calm
              understanding instead of confusion.
            </p>
            <p>
              Our focus is not simply to arrange temple visits, but to create a
              meaningful spiritual journey. We guide pilgrims through important
              temples such as Banke Bihari Temple, Prem Mandir, and the sacred
              ghats of the Yamuna while maintaining a comfortable and balanced
              travel pace.
            </p>
            <p>
              We believe travel does not fail because of inspiration — it fails
              because of poor execution. That is why we manage every step of the
              journey ourselves, from planning itineraries and coordinating
              temple visits to providing on-ground assistance throughout the trip.
            </p>
            <p>
              By combining local knowledge with reliable operations, we ensure
              that every Mathura Vrindavan yatra remains organised,
              personalised, and stress-free. When you travel with us, your only
              focus is devotion and experience — we take care of everything else.
            </p>
          </div>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-3 mt-8">
            {[
              { icon: Users, label: "Experienced Local Guides" },
              { icon: Headphones, label: "24 × 7 Yatra Support" },
              { icon: MapPin, label: "Single Point Coordination" },
              { icon: CheckCircle, label: "No Third-Party Handoffs" },
            ].map(({ icon: Icon, label }, i) => (
              <div key={i}
                className="flex items-center gap-3 bg-white rounded-xl px-4 py-3
                  border border-orange-100 shadow-sm hover:border-orange-300
                  hover:shadow-md transition-all duration-200">
                <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100
                  flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-orange-500" />
                </div>
                <span className="text-sm text-gray-700 leading-snug">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>


    </section>
  );
}