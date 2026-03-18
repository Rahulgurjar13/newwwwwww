import Image from "next/image";

const faqs = [
  {
    question: "Which Mathura Vrindavan tour package is best for first-time visitors?",
    answer:
      "For first-time visitors, we recommend our 1 Day or 2 Days Mathura Vrindavan tour packages. These cover major temples like Krishna Janmabhoomi, Banke Bihari Ji, ISKCON Temple, Prem Mandir, and Yamuna Ghats at a comfortable pace.",
  },
  {
    question: "Are Mathura Vrindavan tour packages suitable for senior citizens?",
    answer:
      "Yes, our Mathura Vrindavan packages are designed to be senior-citizen friendly. We provide AC vehicles, slow-paced itineraries, minimal walking options, and assistance during temple darshan wherever possible.",
  },
  {
    question: "Do your packages include pickup and drop?",
    answer:
      "Yes, most of our Mathura Vrindavan tour packages include pickup and drop services from Mathura Railway Station, hotels, or nearby locations. Pickup points can be customized as per your requirement.",
  },
  {
    question: "Can I customize a Mathura Vrindavan tour package?",
    answer:
      "Absolutely. All our packages can be customized based on your time, group size, darshan preference, and comfort level. You can also include Govardhan Parikrama, Barsana, Nandgaon, or Gokul in your itinerary.",
  },
  {
    question: "What is the best time to visit Mathura and Vrindavan?",
    answer:
      "The best time to visit Mathura and Vrindavan is from October to March when the weather is pleasant. Festivals like Janmashtami and Holi are spiritually vibrant but attract large crowds.",
  },
  {
    question: "Are guides included in Mathura Vrindavan tour packages?",
    answer:
      "Yes, experienced local Braj guides are available with most of our packages. They help with temple history, darshan timings, and navigating crowded areas efficiently.",
  },
];

export default function PackagesFaq() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

        {/* LEFT IMAGE */}
        <div className="relative h-[260px] sm:h-[360px] lg:h-[720px] rounded-3xl overflow-hidden shadow-md">
          <Image
            src="/images/Home/home-faqs.webp"
            alt="Mathura Vrindavan Tour FAQs"
            fill
            loading="lazy"
            className="object-cover"
          />

          {/* soft overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent" />
        </div>

        {/* RIGHT FAQs */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-3 h-[3px] w-32 sm:w-40 bg-gradient-to-r from-orange-600 via-orange-400 to-transparent rounded-full" />

          <p className="mt-4 text-sm sm:text-base text-gray-700 max-w-xl">
            Common questions about our Mathura Vrindavan tour packages,
            answered clearly to help you plan your yatra with confidence.
          </p>

          {/* FAQ LIST */}
          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group border border-orange-100 rounded-2xl p-4 sm:p-5 cursor-pointer"
              >
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg leading-snug">
                    {faq.question}
                  </h3>
                  <span className="text-orange-500 mt-1 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
