"use client";
import Image from "next/image";
import Link from "next/link";
import EnquiryPopup from "../EnquiryForm";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { supabase } from "@/lib/supabase/SupabaseConfig";
import PackageDropDown from "../PackageDropDown";

type PackageType = {
  id: number
  title: string
  category: string
  duration: string
  rating: number
  reviews: number
  price: number
  heroimage: {
    id: string,
    image: string,
    alt: string
  }
}

const CATEGORIES = [
  "Explore All",
  "1 Day Tour Package", ,
  "2 Day Tour Package",
  "3 Day Tour Package",
  "4 Day Tour Package",
  "5 Day Tour Package",
  "6 Day Tour Package",
  "7 Day Tour Package",
  "8 Day Tour Package",
  "9 Day Tour Package",
  "10 Day Tour Package",

]

export default function NormalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  


 



  return (
    <>
      <EnquiryPopup onClose={() => setIsOpen(false)} open={isOpen} />

      <nav className="w-full bg-white relative" aria-label="Primary navigation">
        <div className="flex items-center justify-between px-4 sm:px-8 py-2">

          {/* LEFT */}
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image
                src="/images/Admin/Experience_my_India.webp"
                width={140}
                height={30}
                alt="Mathura Vrindavan Tour Guide logo"
                className="cursor-pointer"
                priority
              />
            </Link>
                       


            {/* DESKTOP LINKS */}
            <div className="hidden lg:flex items-center space-x-16 ml-30 font-bold text-gray-700">
              {[{name : "Home", url : '/'}, {name :"Packages", url : '/tour-packages'}, {name : "Temples", url : '/mathura-vrindavan-temples'}, {name : "Temple Timing", url : '/mathura-vrindavan-temple-timings'}, {name : "Services", url : '/services'} , {name :"About Us", url : "/about"}].map((item, idx)=>{
                 if(item.name=='Packages'){
                   return  <span key={idx}><PackageDropDown from={"normal"} /></span>;
                 }
                return (
                   <Link
                    key={item.url}
                    href={`${item.url}`}
                    className="relative px-1 transition-all duration-300 ease-out
                      hover:-translate-y-[2px] hover:text-orange-600
                      before:absolute before:inset-x-0 before:-bottom-1 before:h-[2px]
                      before:bg-gradient-to-r before:from-transparent before:via-orange-500 before:to-transparent
                      before:scale-x-0 before:origin-center before:transition-transform before:duration-300
                      hover:before:scale-x-100"
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>

          </div>

          {/* RIGHT (DESKTOP CTA) */}
          <div className="hidden lg:flex">
            <button
              onClick={() => setIsOpen(true)}
              className="px-5 py-2.5 text-base font-semibold rounded-full
              bg-gradient-to-r from-orange-600 to-orange-500 text-white
              shadow-md hover:shadow-lg active:scale-95 transition cursor-pointer"
            >
              Enquire Now
            </button>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden border-t bg-white px-6 py-6 space-y-5 shadow-md">
            <div className="flex flex-col gap-4 font-semibold text-gray-700">
              <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link href="/tour-packages" onClick={() => setMobileOpen(false)}>Packages</Link>
              <Link href="/mathura-vrindavan-temples" onClick={()=>setMobileOpen(false)}>Temples</Link>
              <Link href="/services" onClick={()=>setMobileOpen(false)} >Services</Link>
              <Link href="/about" onClick={() => setMobileOpen(false)}>About Us</Link>

              {/*                                                    <Link href="/blog" onClick={() => setMobileOpen(false)}>Blogs</Link> */}
            </div>

            <button
              onClick={() => {
                setMobileOpen(false);
                setIsOpen(true);
              }}
              className="w-full mt-4 px-6 py-3 rounded-full
              bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold"
            >
              Enquire Now
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
