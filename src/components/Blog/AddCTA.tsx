import Image from "next/image";
import Link from "next/link";

export default function AdCTA() {

    return (
        <div className="hidden  lg:flex flex-col items-center ">
            <div
                className="relative group w-full max-w-sm sm:max-w-md rounded-xl
                          overflow-hidden border-4 shadow-lg shadow-orange-400
                          hover:shadow-xl transition-all duration-300 hover:shadow-orange-500"
            >
                {/* IMAGE */}
                <img
                    src="/images/Blog/BlogRightImage.webp"
                    alt="Mathura Vrindavan Tour Booking"
                    className="w-full h-[50vh] object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                />
            </div>

            {/* Button */}
            <button
                className="mt-5 sm:mt-6 bg-orange-700 hover:bg-orange-800
                          text-white font-semibold
                          text-base sm:text-lg
                          px-6 sm:px-8 py-3
                          rounded-3xl shadow-md
                          transition-all duration-200 cursor-pointer"
            >
                 Book Your Darshan
            </button>
        </div>
    );
}
