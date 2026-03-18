import DivineDivider from "@/utils/DivineDivider";
import { HeartHandshake, Star, Flower2, PhoneCall } from "lucide-react";

const features = [
  {
    icon: HeartHandshake,
    title: "1200+ Happy Pilgrims",
    desc: "Trusted by devotees from all across India for peaceful and well-organized Mathura–Vrindavan yatras.",
  },
  {
    icon: Star,
    title: "4.9/5 Devotee Rating",
    desc: "Highly rated by travelers for comfort, transparency, and authentic spiritual experiences.",
  },
  {
    icon: Flower2,
    title: "Curated with Seva Bhav",
    desc: "Every itinerary is thoughtfully designed around darshan, parikrama, and sacred Braj traditions.",
  },
  {
    icon: PhoneCall,
    title: "24/7 Yatra Support",
    desc: "Our team is always available before, during, and after your Vrindavan journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-b from-white via-orange-50 to-white py-20">

      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose Our Mathura–Vrindavan Tours
          </h2>

          {/* Connected Gradient Line */}
          {/* <div className="mt-5 flex justify-center">
            <div className="h-1 w-48 rounded-full bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          </div> */}
          <DivineDivider/>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  bg-white
                  rounded-3xl
                  p-8
                  border border-orange-100
                  shadow-md
                  transition-all duration-300
                  hover:-translate-y-3
                  hover:shadow-2xl
                  hover:border-orange-300
                  cursor-pointer
                  text-center
                "
              >

                {/* Top Accent Bar */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition" />

                {/* Icon */}
                <div className="
                    mx-auto
                    w-20 h-20
                    rounded-full
                    bg-orange-100
                    flex items-center justify-center
                    mb-6
                    transition
                    group-hover:bg-orange-500
                  "
                >
                  <Icon className="w-9 h-9 text-orange-500 group-hover:text-white transition" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
