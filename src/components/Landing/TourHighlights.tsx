import { Sparkles, Music, Ship, ShoppingBag, Footprints, Landmark, Sunrise, TreePine } from "lucide-react";

const highlights = [
  {
    icon: Landmark,
    title: "Krishna Janmabhoomi",
    desc: "Divine experience at the birthplace of Lord Krishna.",
  },
  {
    icon: Footprints,
    title: "Raman Reti",
    desc: "Walk where Krishna played as a child in Gokul.",
  },
  {
    icon: Sunrise,
    title: "Keshi Ghat Aarti",
    desc: "Witness the mesmerising evening Aarti on the Yamuna River.",
  },
  {
    icon: Sparkles,
    title: "Iconic Temples",
    desc: "Visit Dwarkadhish, Banke Bihari Temple and Prem Mandir.",
  },
  {
    icon: TreePine,
    title: "Vrindavan Streets",
    desc: "Roam the narrow streets full of culture, tradition and bazaars.",
  },
  {
    icon: Ship,
    title: "Boat Ride",
    desc: "Take a scenic boat ride at Mathura's historic ghats.",
  },
  {
    icon: ShoppingBag,
    title: "Local Cuisine",
    desc: "Taste Mathura's famous pedas and street-side chaats.",
  },
  {
    icon: Music,
    title: "Nidhivan & Seva Kunj",
    desc: "Visit the mystical Nidhivan and serene Seva Kunj.",
  },
];

export default function TourHighlights() {
  return (
    <section id="highlights" className="py-16 md:py-20 px-5 sm:px-8 bg-[#FFF5EE]">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold text-orange-600 uppercase tracking-wider mb-4">
            What Awaits You
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Tour Highlights
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-orange-500" />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in the spiritual heart of Braj with these unforgettable experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 flex flex-col items-center text-center
              hover:border-orange-200 hover:shadow-lg transition duration-300 relative overflow-hidden"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-amber-400
              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-4
              group-hover:bg-orange-100 transition-colors duration-300">
                <h.icon size={26} className="text-orange-500" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5">{h.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
