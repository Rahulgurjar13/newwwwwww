import Image from "next/image";
import { MapPin, Clock, Users, CheckCircle } from "lucide-react";
import Link from "next/link";

// const tour-packages = [
//   {
//     id: 1,
//     title: "2 Day Vrindavan Darshan Package",
//     location: "Banke Bihari · ISKCON · Prem Mandir",
//     duration: "2 Days / 1 Night",
//     price: "4,999",
//     image: "/images/Packages/vrindavan-darshan.webp",
//     people: "Ideal for Families & Elders",
//   },
//   {
//     id: 2,
//     title: "2 Day Mathura Vrindavan Tour",
//     location: "Krishna Janmabhoomi · Vrindavan",
//     duration: "2 Days / 1 Night",
//     price: "5,499",
//     image: "/images/Packages/mathura-vrindavan.webp",
//     people: "Best for First-Time Visitors",
//   },
// ];

export default function FilterGrid({packages , setIsOpen} : {packages : any[], setIsOpen : any}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {packages.map((pkg) => (
        <div
          key={pkg.id}
          className="
            group bg-white rounded-3xl overflow-hidden
            shadow-md hover:shadow-xl transition-all
            hover:-translate-y-1
          "
        >
          {/* Image */}
          <div className="relative h-56 overflow-hidden">
            <Image
              src={pkg.heroimage.image}
              alt={pkg.heroimage.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* DURATION BADGE */}
            {/* <span
              className="absolute top-4 left-4
              bg-orange-500 text-white text-xs font-semibold
              px-3 py-1 rounded-full shadow"
            >
              {pkg.duration}
            </span> */}

            {/* PRICE BADGE */}
            <span
              className="absolute bottom-4 right-4
              bg-white text-orange-600 text-sm font-bold
              px-4 py-1.5 rounded-full shadow"
            >
              ₹{pkg.price}
            </span>
          </div>

          {/* CONTENT */}
          <div className="p-6 space-y-4">

            {/* TITLE */}
            <h3 className="text-lg font-bold text-gray-900 leading-snug">
              {pkg.title}
            </h3>

            {/* LOCATION */}
            <p className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4 text-orange-500" />
              {pkg.destination}
            </p>

            {/* INFO ROW */}
            <div className="flex flex-wrap gap-3 text-xs text-gray-700">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-orange-500" />
                {pkg.duration}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4 text-orange-500" />
                Ideal for Families & Elders
              </span>
            </div>

            {/* HIGHLIGHTS */}
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                AC Cab
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Local Guide
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Temple Darshan
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Pickup & Drop
              </span>
            </div>

            {/* CTA */}
            <div className="flex gap-3 pt-2">
              <Link
                href={`/tour-packages/${pkg.duration}/${pkg.slug}`}
                className="
                  flex-1 text-center cursor-pointer
                  bg-orange-500 hover:bg-orange-600
                  text-white font-semibold py-2.5
                  rounded-xl transition
                "
              >
                View Details
              </Link>

              <button
                className="
                  flex-1 cursor-pointer
                  border border-orange-500 text-orange-600
                  hover:bg-orange-50
                  font-semibold py-2.5
                  rounded-xl transition
                "

                onClick={() => setIsOpen(true)}
              >
                Enquire Now
              </button>
            </div>

          </div>
        </div>
      ))}

    </div>
  );
}
