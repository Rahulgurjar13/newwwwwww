import dynamic from "next/dynamic";

const SearchBar = dynamic(() => import("@/utils/search/SearchBar"));

const CountUp = dynamic(() => import("@/utils/CountUp"));

export default function HeroSection() {

  return (

    <section className="relative min-h-[90vh] w-full flex flex-col">

      {/* Orange Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#b3500a] via-[#cf7602] to-[#c45800]" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-12 flex flex-col flex-1 pb-16 md:pb-20">

        {/* Top Section - Keeping original alignment */}
        <div className="w-full">
        {/* Badge */}
        <span className="ml-15 md:ml-0 lg:ml-0 backdrop-blur-md cursor-pointer
         border border-white/20 gap-2 rounded-full bg-orange-500/20 px-5 py-2 text-xs md:text-sm lg:text-sm  font-medium text-orange-200 backdrop-blur">
          🔱 Experience Divine Spirituality
        </span>

        {/* Heading */}
        <h1 className="mt-10 md:mt-6 lg:mt-6 text-center text-2xl font-bold leading-tight text-white md:text-5xl">
          Vrindavan Mathura Guide: Best
           {" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Tour Packages, 
          </span> 

          {" "}

          and
           {" "}
          
          
          <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Local Travel Experts
          </span> 
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-center text-sm md:text-lg lg:text-lg text-orange-100/90">
          Walk through ancient temples, sacred ghats, and timeless traditions.Curated spiritual journeys designed for peace, devotion, and comfort.
        </p>

        {/* Search Box */}
        <SearchBar />


        </div>

        {/* Stats */}
        <div className="mt-auto pt-16 md:pt-24 grid grid-cols-2 gap-6 text-center md:grid-cols-4 w-full">
          {[
            { value: "500", label: "Sacred Temples", suffix: "+" },
            { value: "50", label: "Happy Pilgrims", suffix: "K+" },
            { value: "100", label: "Curated Tours", suffix: "+" },
            { value: "4.9", label: "Average Rating", suffix: "★" },
          ].map((item, i) => (
            <div
              key={i}
              className="
                  rounded-xl
                  bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300
                  p-4 sm:p-5
                  backdrop-blur
                  -z-10
                  transition hover:scale-105
                  cursor-pointer
                "
            >

              <span
                className="
                    font-bold text-white
                    text-2xl sm:text-3xl
                    leading-tight
                    whitespace-nowrap
                  "
              >
               <CountUp end={Number(item.value)} suffix={item.suffix} />


              </span>


              <p
                className="
                    mt-1
                    text-xs sm:text-sm
                    text-orange-200
                    leading-snug
                  "
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 h-24 md:h-32 w-full rounded-t-[100%] bg-white pointer-events-none" />
    </section>
  );
}
