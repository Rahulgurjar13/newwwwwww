import { MapPin } from "lucide-react";
import Link from "next/link";

const templeGroups = [
  {
    label: "Vrindavan",
    temples: [
      "Banke Bihari Temple",
      "ISKCON Temple",
      "Prem Mandir",
      "Radha Raman Temple",
      "Radha Damodar Temple",
      "Madan Mohan Temple",
      "Nidhivan",
      "Seva Kunj",
      "Gopeshwar Mahadev Temple",
    ],
  },
  {
    label: "Mathura",
    temples: [
      "Shri Krishna Janmabhoomi",
      "Dwarkadhish Temple",
      "Vishram Ghat",
      "Kusum Sarovar",
      "Gita Mandir",
      "Keshi Ghat",
    ],
  },
  {
    label: "Govardhan & Barsana",
    temples: [
      "Govardhan Hill (Giriraj)",
      "Mansi Ganga",
      "Radha Rani Temple (Barsana)",
      "Nandgaon",
    ],
  },
];

export default function TemplesSection() {
  return (
    <section className="py-16 md:py-20 px-5 sm:px-8 bg-[#FFF5EE]">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold text-orange-600 uppercase tracking-wider mb-4">
            Sacred Places
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Temples We Cover
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-orange-500" />
        </div>

        {/* Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templeGroups.map((group, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h3 className="text-sm font-bold text-orange-600 uppercase tracking-wider mb-4">
                {group.label}
              </h3>
              <ul className="space-y-2.5">
                {group.temples.map((t, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                    <MapPin size={13} className="text-orange-400 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="text-center mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/mathura-vrindavan-temples"
            className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition"
          >
            Full temple directory →
          </Link>
          <Link
            href="/mathura-vrindavan-temple-timings"
            className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition"
          >
            Darshan timings →
          </Link>
        </div>
      </div>
    </section>
  );
}
