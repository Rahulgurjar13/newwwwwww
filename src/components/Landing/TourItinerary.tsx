import { MapPin, CheckCircle } from "lucide-react";

const days = [
  {
    day: "Day 1",
    location: "Mathura – Gokul",
    activities: [
      "Early morning drive from Delhi to Mathura (162 km)",
      "Visit Shri Krishna Janmabhoomi Temple",
      "Move to Gokul — Gokul Nath Temple and Raman Reti",
      "Lunch in Mathura",
      "Visit Dwarkadhish Temple and Vishram Ghat",
      "Walk along Keshi Ghat and Yamuna River ghats",
      "Explore Mathura local markets — Krishna idols, brass items, Mathura peda",
      "Dinner and overnight stay in Mathura",
    ],
  },
  {
    day: "Day 2",
    location: "Vrindavan",
    activities: [
      "Visit Banke Bihari Temple (VIP Darshan Included)",
      "Prem Mandir",
      "Nidhivan and Seva Kunj",
      "ISKCON Temple",
      "Pagal Baba Temple",
      "Return to Delhi by evening",
    ],
  },
];

export default function TourItinerary() {
  return (
    <section id="itinerary" className="py-16 md:py-20 px-5 sm:px-8 bg-white">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold text-orange-600 uppercase tracking-wider mb-4">
            Day-by-Day Plan
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Trip Itinerary
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-orange-500" />
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            A carefully planned itinerary for a peaceful and complete spiritual experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center connector line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-orange-200" />

          <div className="space-y-10 md:space-y-0">
            {days.map((d, i) => (
              <div key={i} className="relative md:flex md:items-start md:gap-8">

                {/* Timeline dot (centered on desktop) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 w-8 h-8 rounded-full bg-orange-500 items-center justify-center shadow-lg z-10">
                  <MapPin size={16} className="text-white" />
                </div>

                {/* Day 1 — left side on desktop */}
                {i === 0 && (
                  <>
                    <div className="md:w-1/2 md:pr-12">
                      <div className="bg-white border-l-4 border-orange-500 rounded-2xl shadow-md p-6 sm:p-8 hover:shadow-lg transition duration-300">
                        <div className="flex items-center gap-3 mb-5">
                          <span className="inline-block rounded-full bg-orange-500 px-4 py-1 text-xs font-bold text-white uppercase tracking-wider">
                            {d.day}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900">{d.location}</h3>
                        </div>
                        <ul className="space-y-3">
                          {d.activities.map((a, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <CheckCircle size={18} className="text-orange-500 shrink-0 mt-0.5" />
                              <span className="text-sm sm:text-base text-gray-600">{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </>
                )}

                {/* Day 2 — right side on desktop */}
                {i === 1 && (
                  <>
                    <div className="hidden md:block md:w-1/2" />
                    <div className="md:w-1/2 md:pl-12 md:mt-20">
                      <div className="bg-white border-l-4 border-orange-500 rounded-2xl shadow-md p-6 sm:p-8 hover:shadow-lg transition duration-300">
                        <div className="flex items-center gap-3 mb-5">
                          <span className="inline-block rounded-full bg-orange-500 px-4 py-1 text-xs font-bold text-white uppercase tracking-wider">
                            {d.day}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900">{d.location}</h3>
                        </div>
                        <ul className="space-y-3">
                          {d.activities.map((a, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <CheckCircle size={18} className="text-orange-500 shrink-0 mt-0.5" />
                              <span className="text-sm sm:text-base text-gray-600">{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
