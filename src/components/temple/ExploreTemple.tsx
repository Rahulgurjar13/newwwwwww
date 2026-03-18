import Image from "next/image";
import Link from "next/link";

export default function ExploreTemple({ TempleData }: { TempleData: any }) {
  return (
    <section className="pt-10 pb-5 md:py-20 bg-[#fdf7f2]">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT CONTENT */}
        <div>

          <h2 className="text-center md:text-start text-xl md:text-2xl font-bold mb-6">
            Explore the <span className="text-orange-500">{TempleData.title}</span>
          </h2>

          <p className="text-gray-700 leading-relaxed text-center md:text-start text-sm md:text-[14px]">
            Discover the divine beauty of{" "}
            <span className="font-semibold text-orange-600">
              {TempleData.title}
            </span>, a sacred temple located in{" "}
            <span className="font-medium text-gray-900">
              {TempleData.location}
            </span>. This holy site is deeply connected with the divine pastimes of{" "}
            <span className="font-semibold text-orange-500">Lord Krishna</span> and the
            spiritual heritage of <span className="font-medium">Braj Bhoomi</span>.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed text-center md:text-start text-sm md:text-[14px]">
            Known for its traditional architecture and peaceful surroundings, the
            temple attracts devotees and travelers seeking blessings, devotion,
            and spiritual tranquility in the sacred land of{" "}
            <span className="font-medium text-gray-900">
              Mathura and Vrindavan
            </span>.
          </p>


          <div className="flex flex-col md:flex-row gap-4 mb-6 mt-5">

            <div className="bg-orange-500 text-white px-5 py-3 text-center rounded-full text-xs md:text-sm font-medium">
              Let's Meet Krishna
            </div>

            <Link href="/tour-packages">
            <div className="bg-orange-500 text-white px-5 py-3 text-center rounded-full text-xs md:text-sm font-medium">
              Explore Tours
            </div>
            </Link>

          </div>

        </div>

        {/* IMAGE */}

        <div className="hidden md:block relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">

          <Image
            src="/images/Home/mathura-vrindavan-second.webp"
            alt="Temple Interior"
            fill
            loading="lazy"
            className="object-cover"
          />

        </div>

      </div>

    </section>
  );
}