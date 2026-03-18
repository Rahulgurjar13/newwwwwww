
import {
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Car,
  Users,
  PhoneCall,
  Flower2,
} from "lucide-react";

const trustCards = [
  {
    title: "Born in Braj Bhoomi",
    desc: "We are locals of Mathura–Vrindavan. Every route and temple is known to us.",
    icon: MapPin,
  },
  {
    title: "Yatra, Not Just a Tour",
    desc: "Planned around darshan, aartis and parikrama — never rushed.",
    icon: Flower2,
  },
  {
    title: "100% Transparent Pricing",
    desc: "No hidden charges. No last-minute surprises.",
    icon: ShieldCheck,
  },
  {
    title: "Verified Vehicles & Drivers",
    desc: "Clean vehicles with pilgrim-experienced drivers.",
    icon: Car,
  },
  {
    title: "Elder & Family Friendly",
    desc: "Slow pace journeys with proper breaks.",
    icon: Users,
  },
  {
    title: "Real Human Support",
    desc: "Real people before, during and after your yatra.",
    icon: PhoneCall,
  },
  {
    title: "Seva Bhav",
    desc: "This is not business — it is service to devotees.",
    icon: HeartHandshake,
  },
];

export default function TrustBuildingSection() {


  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-bold text-orange-600
              leading-snug md:leading-tight
            "
          >
            Trust is built by <br /> devotion & honesty
          </h2>

          <p
            className="
              mt-4 sm:mt-6
              text-gray-700
              text-base sm:text-lg
              max-w-xl
              leading-relaxed
            "
          >
            Every journey to Mathura & Vrindavan is sacred.
            We treat your yatra with the same respect
            as our own family’s pilgrimage.
          </p>

          <p className="mt-3 sm:mt-4 italic text-orange-500 text-sm sm:text-base">
            “Yatra is not travel — it is faith.”
          </p>
        </div>

        {/* CSS AUTO SCROLL */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="
                flex gap-4 sm:gap-6
                animate-marquee
                hover:[animation-play-state:paused]
              "
            >
              {[...trustCards, ...trustCards].map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={index}
                    className="
                      min-w-[240px] sm:min-w-[260px] lg:min-w-[280px]
                      reveal bg-gradient-to-br from-orange-500 to-orange-400
                     
                      cursor-pointer
                      text-white
                      rounded-3xl
                      p-5 sm:p-6
                      shadow-lg
                    "
                  >
                    <div
                      className="
                        w-10 h-10 sm:w-12 sm:h-12
                        bg-white/20
                        rounded-full
                        flex items-center justify-center
                        mb-3 sm:mb-4
                      "
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2">
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* fade edge */}
          <div
            className="
              pointer-events-none
              absolute top-0 right-0
              h-full
              w-16 sm:w-20 lg:w-24
              bg-gradient-to-l from-white to-transparent
            "
          />
        </div>
      </div>
    </section>
  );
}
