"use client"

import { useState } from "react"
import { HelpCircle } from "lucide-react"

export default function TempleFAQ({TempleData} : {TempleData : any}) {

  const [active, setActive] = useState<number | null>(0)

  

  return (

    <section className="py-10 md:py-28 bg-[#fdf7f2]">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <h2 className="text-2xl md:text-4xl font-bold text-[#7a2e00]">
            Temple Visitor Questions
          </h2>

          <div className="w-32 h-[3px] bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-600 mt-6 max-w-xl mx-auto text-xs md:text-sm ">
            Explore the most common questions asked by pilgrims and visitors
            about the {TempleData.title}
          </p>

        </div>

        {/* Timeline Container */}

        <div className="relative">

          {/* Vertical Timeline Line */}

          <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-gradient-to-b from-orange-300 to-yellow-300 h-full"></div>

          <div className="space-y-20">

            {TempleData.faqs.map((faq : any , index : number) => {

              const isLeft = index % 2 === 0

              return (

                <div
                  key={index}
                  className={`flex items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >

                  <div className="w-full md:w-[46%]">

                    {/* Timeline Node */}

                    <div className="relative">

                      <div className="absolute top-6 -right-[42px] md:-right-[46px] hidden md:block">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 shadow-lg"></div>
                      </div>

                      {/* Card */}

                      <div
                        onClick={() =>
                          setActive(active === index ? null : index)
                        }
                        className="cursor-pointer bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-orange-100 hover:shadow-2xl hover:-translate-y-1 transition"
                      >

                        <div className="flex items-center gap-3">

                          <HelpCircle className="text-orange-500" size={22} />

                          <h3 className="font-semibold text-[#7a2e00] text-sm md:text-md">
                            {faq.question}
                          </h3>

                        </div>

                        {/* Answer */}

                        <div
                          className={`overflow-hidden transition-all duration-500 ${
                            active === index
                              ? "max-h-40 mt-4"
                              : "max-h-0"
                          }`}
                        >

                          <p className="text-gray-600 leading-relaxed text-sm md:text-md">
                            {faq.answer}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              )

            })}

          </div>

        </div>

      </div>

    </section>

  )
}