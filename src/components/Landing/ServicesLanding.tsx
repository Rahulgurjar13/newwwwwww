import { Star, Car, BookOpen, Music, Ship, Heart, Camera, Banknote } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Star,
    title: "VIP Darshan & Puja",
    desc: "Priority temple access, guided worship and personalized rituals. Skip the lines for an intimate darshan.",
  },
  {
    icon: Car,
    title: "Luxury Transport",
    desc: "Sedan, SUV, MUV & Urbania. Chauffeur-driven AC vehicles with pickup from Delhi, Agra and Jaipur.",
  },
  {
    icon: BookOpen,
    title: "Certified Spiritual Guides",
    desc: "Local experts fluent in Hindi & English who bring mythological and historical insights to every site.",
  },
  {
    icon: Music,
    title: "Traditional Artists & Bhajans",
    desc: "Live devotional bhajan performances and Braj artists for an immersive cultural experience.",
  },
  {
    icon: Ship,
    title: "Yamuna Boating",
    desc: "Serene boat rides on the sacred Yamuna River with sunset views and the divine Yamuna Aarti.",
  },
  {
    icon: Heart,
    title: "Seva Arrangements",
    desc: "Gau Daan, temple contributions and personalized seva organised with full transparency.",
  },
  {
    icon: Camera,
    title: "Photo & Videography",
    desc: "Professional photographers to capture your spiritual journey with artistry and respect.",
  },
  {
    icon: Banknote,
    title: "Foreign Currency Exchange",
    desc: "Instant conversion for major international currencies at competitive exchange rates.",
  },
];

export default function ServicesLanding() {
  return (
    <section className="py-16 md:py-20 px-5 sm:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold text-orange-600 uppercase tracking-wider mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-orange-500" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                <s.icon size={22} className="text-orange-500" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5">{s.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Link */}
        <div className="text-center mt-8">
          <Link
            href="/services"
            className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition"
          >
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
