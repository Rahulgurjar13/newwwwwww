"use client"
import EnquiryPopup from "@/utils/EnquiryForm";
import { MapPin, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import { useState } from "react";
import QuickEnquiry from "../Home/QuickEnquiry";
export default function ServicesCTA(){
    const [openPopUp, setOpenPopUp] = useState(false);
    const [openQucik, setOpenQuick] = useState(false);

    return (
        <>
          <EnquiryPopup open={openPopUp} onClose={()=>setOpenPopUp(false)} />
          <QuickEnquiry open={openQucik} onClose={()=>setOpenQuick(false)}/>
           <div
        className="relative mx-6 mb-16 max-w-7xl lg:mx-auto overflow-hidden rounded-3xl px-8 py-12 md:px-16 md:py-14 text-white"
        style={{ background: "linear-gradient(135deg, #E85800 0%, #FF7A00 50%, #FF9E00 100%)" }}
      >
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -top-12 -right-12 w-64 h-64 rounded-full bg-white opacity-[0.06]" />
        <div className="pointer-events-none absolute -bottom-8 left-20 w-48 h-48 rounded-full bg-white opacity-[0.04]" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-sm font-semibold opacity-80 uppercase tracking-widest mb-2">
              Ready for a sacred journey?
            </p>
            <h2 className="text-3xl font-black leading-tight">
              Let us plan your perfect<br />Vrindavan experience
            </h2>
            <div className="flex items-center gap-2 mt-3 opacity-85 text-sm">
              <MapPin size={14} />
              Vrindavan, Mathura, Uttar Pradesh
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
               onClick={()=>setOpenPopUp(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-orange-600 hover:bg-orange-50 transition-all"
            >
              Book Now <ArrowRight size={15} />
            </button>
            <button
              aria-label="Call Now"
              onClick={()=>setOpenQuick(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all"
            >
              <Phone size={14} />
              +91 7302265809
             
            </button>
          </div>
        </div>
      </div>
        </>
    )
}