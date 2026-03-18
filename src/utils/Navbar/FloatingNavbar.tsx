"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import EnquiryPopup from "../EnquiryForm";


const navItems = [
  { name: "Home", href: "/" },
  { name: "Packages", href: "/tour-packages" },
  {name : "Temples", href : '/mathura-vrindavan-temples'},
  {name : "Temple Timings", href : '/mathura-vrindavan-temple-timings'},
  {name : "Services" , href : "/services"},
  
  { name: "About", href: "/about" },

  // { name: "Blog", href: "/blog" },

];

export default function FloatingNavbar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [isOpen , setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <EnquiryPopup onClose={() => setIsOpen(false)} open={isOpen} />
      <div
        className={`fixed top-6 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2 transition-all duration-500
      ${show
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-8 pointer-events-none"
          }`}
      >
        <div className="flex items-center justify-between rounded-full bg-white px-6 py-3 backdrop-blur-xl shadow-xl border border-white/40"  role="navigation"
  aria-label="Secondary navigation">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/Admin/Experience_my_India.webp"
              width={140}
              height={30}
              alt="Mathura Vrindavan Tour Guide logo"
              priority
              className="cursor-pointer"
            />
          </Link>

          {/* Menu */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            {navItems.map((item, idx) => {
              const active = pathname === item.href;

              // if(item.name === "Packages"){
              //    return (
              //       <span key={idx} className=""><PackageDropDown from={"floating"} /></span>
              //    )
              // }
              return (
                <li key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className={active ? "cursor-pointer relative px-1 transition-all duration-3 ease-out hover:-translate-y-[2px] text-orange-600 before:absolute before:inset-x-0 before:-bottom-1 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-orange-500 before:to-transparent before:scale-x-0 before:origin-center before:transition-transform before:duration-300 before:scale-x-100 after:absolute after:inset-0 after:rounded-md after:bg-orange-500/10 after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100" : "cursor-pointer relative px-1 transition-all duration-3 ease-out hover:-translate-y-[2px] hover:text-orange-600 before:absolute before:inset-x-0 before:-bottom-1 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-orange-500 before:to-transparent before:scale-x-0 before:origin-center before:transition-transform before:duration-300 hover:before:scale-x-100 after:absolute after:inset-0 after:rounded-md after:bg-orange-500/10 after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100"}
                  >
                    {item.name}
                  </Link>

                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <button
            type="button"
            className="rounded-full bg-gradient-to-r from-orange-400 to-orange-400 px-5 py-2 text-sm font-semibold text-white shadow-md hover:scale-105 transition cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            Enquire Now

          </button>
        </div>
      </div>

    </>
  );
}
