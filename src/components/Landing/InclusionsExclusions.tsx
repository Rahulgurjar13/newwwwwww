import { CheckCircle, XCircle } from "lucide-react";

const inclusions = [
  "01 Night Accommodation in Deluxe Room",
  "Breakfast included",
  "VIP Darshan at Banke Bihari Temple",
  "All taxes included",
  "Driver fee",
  "Mathura Vrindavan Gokul sightseeing",
  "AC vehicle throughout",
];

const exclusions = [
  "Any meal unless specified above",
  "Air fare / Train tickets",
  "Entrance fees to monuments",
  "Personal expenses (telephone, laundry)",
  "Travel insurance",
  "GST and Parking charges",
];

export default function InclusionsExclusions() {
  return (
    <section className="py-16 md:py-20 px-5 sm:px-8 bg-white">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold text-orange-600 uppercase tracking-wider mb-4">
            Package Details
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {"What's Included"}
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-orange-500" />
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Inclusions */}
          <div className="bg-white rounded-2xl shadow-md border border-green-100 overflow-hidden">
            <div className="bg-green-50 px-6 py-4 border-b border-green-100">
              <h3 className="text-lg font-bold text-green-700 flex items-center gap-2">
                <CheckCircle size={20} className="text-green-500" />
                Included ✅
              </h3>
            </div>
            <ul className="p-6 space-y-4">
              {inclusions.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                <XCircle size={20} className="text-gray-500" />
                Not Included ❌
              </h3>
            </div>
            <ul className="p-6 space-y-4">
              {exclusions.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle size={18} className="text-gray-400 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
