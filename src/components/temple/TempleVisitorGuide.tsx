"use client";

import EnquiryPopup from "@/utils/EnquiryForm";
import { useState } from "react";

function SacredDivider() {
  return (
    <div className="flex items-center gap-3 my-2 md:my-6 lg:my-6 ">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
      <span className="text-amber-500 text-lg">✦</span>
      <span className="text-amber-400 text-sm">ॐ</span>
      <span className="text-amber-500 text-lg">✦</span>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
    </div>
  );
}

export default function TempleVisitorGuide({
  TempleData,
}: {
  TempleData: any;
 
}) {

  const [open, setIsOpen] = useState(false);
  const richHtmlClasses = `
    text-sm text-[#4A2010] leading-relaxed
    [&_table]:w-full [&_table]:border-collapse [&_table]:rounded-xl [&_table]:overflow-hidden [&_table]:mb-4
    [&_thead]:bg-amber-50
    [&_th]:text-left [&_th]:px-4 [&_th]:py-2.5 [&_th]:text-xs [&_th]:font-semibold [&_th]:text-amber-700 [&_th]:uppercase [&_th]:tracking-wide [&_th]:border-b [&_th]:border-amber-200
    [&_td]:px-4 [&_td]:py-2.5 [&_td]:border-b [&_td]:border-amber-100/60
    [&_tr:last-child_td]:border-b-0
    [&_tr:hover_td]:bg-amber-50/50
    [&_p]:mb-3 [&_p:last-child]:mb-0
    [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-[#2C1810] [&_h2]:mt-5 [&_h2]:mb-2
    [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-[#2C1810] [&_h3]:mt-4 [&_h3]:mb-2
    [&_ul]:list-none [&_ul]:space-y-2 [&_ul]:mb-3
    [&_li]:flex [&_li]:items-start [&_li]:gap-2
    [&_li]:before:content-['·'] [&_li]:before:text-amber-500 [&_li]:before:font-bold [&_li]:before:mt-0.5
    [&_strong]:font-semibold [&_strong]:text-[#2C1810]
  `;

  return (
    <>
      <EnquiryPopup open={open} onClose={()=>setIsOpen(false)}/>
      <section className="bg-[#FFF7EE]">
      <div className="max-w-4xl mx-auto px-6 py-10 md:py-24">

        {/* Header */}
        <div className="text-center mb-5 md:mb-14">
          <p className="text-amber-500 text-xs tracking-[0.22em] uppercase font-semibold mb-3">
            Before You Arrive
          </p>
          <h2 className="text-2xl md:text-5xl font-bold text-[#2C1810]">
            Temple Visitor Guide
          </h2>
          <SacredDivider />
        </div>

        {/* Single column stacked cards */}
        <div className="flex flex-col gap-6">

          {/* Darshan Timings */}
          <div className="bg-white rounded-3xl px-8 py-6 md:py-8 border border-amber-200/60 shadow-[0_8px_28px_rgba(193,68,14,0.08)]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#E8660A] to-[#D4A017] flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#2C1810]">Darshan Timings</h4>
                <p className="text-amber-600/70 text-xs tracking-wide">Daily Schedule</p>
              </div>
            </div>
            <div
              className={richHtmlClasses}
              dangerouslySetInnerHTML={{ __html: TempleData.timing }}
            />
          </div>

          {/* Best Time to Visit */}
          <div className="bg-white rounded-3xl px-8 py-6 md:py-8 border border-amber-200/60 shadow-[0_8px_28px_rgba(193,68,14,0.08)]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#C1440E] to-[#E8660A] flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#2C1810]">Best Time to Visit</h4>
                <p className="text-amber-600/70 text-xs tracking-wide">Seasonal Guide</p>
              </div>
            </div>
            <div
              className={richHtmlClasses}
              dangerouslySetInnerHTML={{ __html: TempleData.bestvisit }}
            />
          </div>

        </div>

        {/* Enquiry strip */}
        <div className="mt-12 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#2C1810] via-[#7A2E00] to-[#C1440E] shadow-[0_20px_60px_rgba(193,68,14,0.25)]">
          <div>
            <p className="text-amber-300 text-xs tracking-widest uppercase mb-1 text-center md:text-start">
              Need Help Planning?
            </p>
            <h3 className="text-center md:text-start text-xl md:text-3xl text-white font-semibold">
              Connect with our Temple Guides
            </h3>
          </div>
          <button
            className="cursor-pointer text-white px-9 py-4 rounded-full font-semibold tracking-wide border border-white/30 hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(true)}
          >
            Send an Enquiry
          </button>
        </div>

      </div>
    </section>
    </>
   
  );
}