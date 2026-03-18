import Image from "next/image";

const FAQS = [
  {
    q: "What services does Vrindavan Mathura Guide provide?",
    a: "Vrindavan Mathura Guide helps travellers plan comfortable temple visits and spiritual tours in Mathura and Vrindavan. The website provides guidance for temple darshan, tour packages, local travel support, and practical information for pilgrims visiting Braj."
  },
  {
    q: "What types of tour packages are available on Vrindavan Mathura Guide?",
    a: "You can find different options such as one day Mathura Vrindavan tours, two day temple tours, weekend pilgrimage trips, and customised spiritual journeys based on your travel needs."
  },
  {
    q: "Can Vrindavan Mathura Guide help with Mathura and Vrindavan temple darshan planning?",
    a: "Yes. The website provides guidance about temple timings, darshan schedules, and the best sequence to visit important temples in Mathura and Vrindavan."
  },
  {
    q: "Are Mathura Vrindavan tours suitable for families and senior citizens?",
    a: "Yes. Most tours are designed to be comfortable for families, elderly travellers, and devotees who prefer a calm and well-planned journey."
  },
  {
    q: "How far are Mathura and Vrindavan from Delhi?",
    a: "Mathura is about 180 km from Delhi, and Vrindavan is around 15 km from Mathura. The journey usually takes about three to four hours by road."
  },
  {
    q: "What is the best time to visit Mathura and Vrindavan?",
    a: "The most comfortable time to visit is between October and March when the weather remains pleasant for temple visits and local sightseeing."
  },
  {
    q: "Are customised Mathura Vrindavan tour packages available?",
    a: "Yes. Vrindavan Mathura Guide can help arrange customised travel plans depending on your schedule, group size, and temple preferences."
  },
  {
    q: "Which temples are usually included in a Mathura Vrindavan tour?",
    a: "Most journeys include Shri Krishna Janmabhoomi Temple, Dwarkadhish Temple, Banke Bihari Temple, ISKCON Temple, Prem Mandir, and visits to Yamuna ghats."
  },
  {
    q: "Can travellers book a tour directly through Vrindavan Mathura Guide?",
    a: "Yes. Visitors can explore available tour options and connect through the website to plan their Mathura Vrindavan trip."
  },
  {
    q: "Why should travellers use Vrindavan Mathura Guide for planning their trip?",
    a: "Vrindavan Mathura Guide focuses on clear information, practical planning, and comfortable travel so visitors can experience the spiritual atmosphere of Braj without confusion."
  }
];

export default function HomeFAQSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-14 items-center">

        {/* LEFT IMAGE */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg h-[260px] sm:h-[320px] md:h-[380px] lg:h-[38vw] max-h-[520px]">
          <Image
            src="/images/Home/mathura-vrindavan.webp"
            alt="Mathura Vrindavan Spiritual Journey"
            sizes="(max-width:1024px) 100vw, 50vw"
            loading="lazy"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent" />
        </div>

        {/* RIGHT FAQ */}
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4">
            FAQs
          </span>

          <h2 className="text-2xl sm:text-4xl font-bold text-orange-600 mb-4 sm:mb-6">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-700 mb-6 sm:mb-8 max-w-xl text-sm sm:text-base">
            Everything you need to know before planning your sacred journey
            to Mathura & Vrindavan.
          </p>

          <div className="space-y-3 sm:space-y-4 max-h-[520px] overflow-y-auto orange-scrollbar pr-2">

            {FAQS.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-orange-200 p-4 sm:p-5"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-800 text-sm sm:text-base">
                  {faq.q}
                  <span className="transition-transform group-open:rotate-180 text-orange-500">
                    ▼
                  </span>
                </summary>

                <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  {faq.a}
                </p>
              </details>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}