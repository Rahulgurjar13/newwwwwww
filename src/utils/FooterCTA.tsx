"use client"

import Image from 'next/image';
import React, { useState } from 'react'
import EnquiryPopup from './EnquiryForm';
// import PopUpForm from '../AllCourses/PopUpForm';

const FooterCTA = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <>
            <EnquiryPopup onClose={() => setIsOpen(false)} open={isOpen} />

            <section className="w-full pt-10 px-4">
                <div
                    className="
                              max-w-7xl mx-auto
                              bg-gradient-to-r from-orange-700 via-orange-600 to-orange-400
                              rounded-tr-2xl
                              rounded-tl-2xl
                              flex flex-col lg:flex-row
                              items-center
                              gap-8 lg:gap-12
                              px-4 sm:px-8 lg:px-12
                              py-8 lg:py-12
                              "
                >
                    {/* Image Section */}
                    <div className="relative w-full lg:w-1/2 flex justify-center">
                        <Image
                            src="/images/utils/CTAIMAGE.webp"
                            alt="confused person"
                            width={200}
                            height={50}
                            className="
                                      w-full
                                      max-w-xs sm:max-w-sm md:max-w-md
                                      h-auto
                                      object-cover
                                      rounded-xl
                                      "
                        />

                        <span className="absolute -top-6 sm:-top-8 right-6 sm:right-10 text-4xl sm:text-5xl">
                            ❓
                        </span>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
                        <h2
                            className="
                                      font-bold
                                      text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                                      leading-tight
                                      mb-6
                                    "
                        >
                            Follow Krishna’s   <span className='text-yellow-400 font-extrabold'>footsteps,</span> not crowded routes.
                        </h2>

                        <button
                            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition shadow-md cursor-pointer" onClick={() => setIsOpen(true)}
                        >
                            Go With Us
                            <span className="text-xl">→</span>
                        </button>
                    </div>
                </div>
            </section>

        </>

    )
}

export default FooterCTA