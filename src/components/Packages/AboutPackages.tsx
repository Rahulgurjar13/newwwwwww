export default function AboutPackages() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADING */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            About Our Vrindavan Tour Packages
          </h2>

          {/* ORANGE GRADIENT UNDERLINE */}
          <div className="mt-3 h-[3px] w-32 sm:w-40 md:w-44
            bg-gradient-to-r from-orange-600 via-orange-400 to-transparent rounded-full" />
        </div>

        {/* DETAILS */}
        <details className="group relative rounded-2xl border border-orange-300 shadow-lg p-4 sm:p-6">

          {/* SUMMARY */}
          <summary className="list-none cursor-pointer focus:outline-none">
            <div className="relative">

              {/* INTRO TEXT */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed pr-4 sm:pr-6">
                Our Vrindavan tour packages are thoughtfully designed for
                devotees seeking a peaceful and spiritually enriching journey
                in the holy land of Shri Krishna. Each yatra focuses on
                comfortable darshan, local Braj guidance, and a calm pace
                suitable for families, elders, and first-time visitors.
              </p>

              {/* FADE OVERLAY */}
              <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 sm:h-12
                bg-gradient-to-t from-white to-transparent group-open:hidden"
              />

              {/* EXPAND CUE */}
              <div className="mt-4 flex items-center gap-2 text-orange-600 font-medium text-sm sm:text-base">
                <span>Continue reading</span>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  ↓
                </span>
              </div>

            </div>
          </summary>

          {/* EXPANDED CONTENT */}
          <div className="mt-6 text-gray-700 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              Vrindavan is not merely a destination but a sacred experience,
              where every temple, ghat, and parikrama path carries deep
              spiritual meaning. Our itineraries include Banke Bihari Ji,
              ISKCON Temple, Prem Mandir, Nidhivan, and Yamuna Ghats, planned
              carefully according to darshan timings.
            </p>

            <p>
              We provide comfortable AC vehicles, experienced local Braj
              guides, and flexible schedules to ensure a smooth and
              stress-free yatra. Special care is given to senior citizens
              with slow-paced travel, proper rest breaks, and easy temple
              access wherever possible.
            </p>

            <p>
              For devotees seeking deeper immersion, our packages can be
              customized to include Govardhan Parikrama, Barsana, Nandgaon,
              and other sacred locations of Braj Bhoomi based on time and
              preference.
            </p>

            <p>
              With years of experience organizing Vrindavan yatras, we follow
              the principle of <strong>seva bhav</strong> — serving devotees
              with honesty, transparency, and deep respect for Braj
              traditions.
            </p>
          </div>

        </details>
      </div>
    </section>
  );
}
