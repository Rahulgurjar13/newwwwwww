"use client";

import EnquiryPopup from "@/utils/EnquiryForm";
import React, { useState } from "react";
// import PopUpForm from "../AllCourses/PopUpForm";

const LetsConnect = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <EnquiryPopup onClose={() => setIsOpen(false)} open={isOpen} />
      <section
        className="
          relative 
          w-full 
          min-h-[150px] sm:min-h-[140px] md:min-h-[162px] lg:min-h-[170px]
          flex items-center
          rounded-b-4xl sm:rounded-b-full
          overflow-hidden
        "
        style={{
          backgroundImage: "url('/images/Blog/letsConnect.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}

        <div className="block absolute inset-0 bg-linear-to-r from-orange-400 via-orange-600/70 to-orange-600" />
        {/* <div className="block sm:hidden absolute inset-0 bg-linear-to-r from-[#6493cc] via-[#538ed6] to-[#6493cc]" /> */}

        <div className="
          relative z-10 
          w-full max-w-7xl mx-auto
          px-4 sm:px-36 md:px-26 lg:px-20 xl:px-16
        ">
          <div className="
            flex flex-col 
            sm:flex-row lg:flex-row
            items-start sm:items-center
            justify-between
            gap-4 sm:gap-5
            text-center sm:text-left
          ">

            {/* LEFT TEXT */}
            <div className="max-w-full sm:max-w-xl text-white">
              <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight">
                Let’s Plan Your Divine Journey Together
              </h2>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-blue-100">
                Have questions about Vrindavan–Mathura tours, temples, or travel arrangements?
              </p>
            </div>

            {/* RIGHT BUTTON */}
            <button
              onClick={() => setIsOpen(true)}
              className="
                w-full sm:w-auto
                mt-2 sm:mt-0
                px-4 py-3
                sm:px-9 sm:py-5
                bg-orange-200 hover:bg-orange-600
                text-blue-900
                font-bold
                rounded-full
                shadow-md
                transition
                text-sm
                cursor-pointer
                active:scale-95
              "
            >
              Let's Meet Krishna
            </button>
          </div>
        </div>
      </section>

    
    </>
  );
};

export default LetsConnect;
