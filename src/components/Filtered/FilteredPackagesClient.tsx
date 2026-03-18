'use client';

import PackagesCTA from "@/components/Packages/PackagesCTA";
import Footer from "@/utils/Footer";
import Navbar from "@/utils/Navbar";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/SupabaseConfig";
import VrindavanTrustStats from "@/components/Home/VrindavanTrustStats";
import TrustBuildingSection from "@/components/Home/TrustBuildSec";
import FooterCTA from "@/utils/FooterCTA";
import EnquiryPopup from "@/utils/EnquiryForm";
import FilterGrid from "./FilterGrid";
import Link from "next/link";
import { TourCardSkeleton } from "@/utils/TourCardSkeleton";


export default function FilteredPackagesClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [packages, setPackages] =  useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const destination = searchParams.getAll("destination");
  const duration = searchParams.get("duration");

  console.log("Destinations", destination)

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getPackages = async () => {
  try {
    setError(null);

    let query = supabase
      .from("Package")
      .select("*");

    if (duration) {
      query = query.eq("category", duration);
    }

    if (destination.length > 0) {
      query = query.in("destination", destination);
    }

    const { data, error } = await query;

    if (error) throw error;

    setPackages(data || []);
     
  } catch (err: any) {
    console.log("Error fetching packages:", err.message);
    setError("Failed to load packages");
  } finally {
    setLoading(false);
  }
};

    // redirect safety
    useEffect(() => {
      if (!destination || !duration) {
        return;
      }

      getPackages();

    }, [destination, duration, router]);



    if (!destination || !duration || !packages ) return <div  className="text-xl text-center">
      
         Packages Not Found
     
    </div>;

  const readableTitle = `${duration} Day ${destination} Tour Package`;

  

      return (
        <>
        <EnquiryPopup onClose={() => setIsOpen(false)} open={isOpen} />
        <Navbar/>
          <section className="bg-[#FFF7ED] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* ---------- BREADCRUMB ---------- */}
            <nav className="flex flex-wrap items-center text-xs sm:text-sm text-gray-500 gap-1 mb-6">
              <Link href={'/home'} className="hover:text-orange-600 cursor-pointer">Home</Link>
              <span>/</span>
              
              <Link href={'/tour-packages'} className="hover:text-orange-600 cursor-pointer">Packages</Link>
              <span>/</span>
              <span className="text-orange-600 font-medium break-words">
                {duration} 
              </span>
            </nav>

            {/* ---------- TITLE ---------- */}
            <h1 className="
                text-2xl sm:text-3xl md:text-4xl 
                font-bold text-gray-900 
                leading-tight 
                break-words
              ">
              {readableTitle}
            </h1>

            {/* ---------- SUBTITLE ---------- */}
            <p className="mt-4 text-gray-700 max-w-3xl text-sm sm:text-base leading-relaxed">
              Explore our best {duration}-day spiritual tour packages,
              designed for peaceful darshan, comfortable travel,
              and a fulfilling journey across sacred destinations.
            </p>

            {/* ---------- DESTINATION TAGS ---------- */}
            <div className="mt-5 flex flex-wrap gap-2">
              {Array.isArray(destination)
                ? destination.map((place: string) => (
                    <span
                      key={place}
                      className="px-3 py-1.5 text-xs sm:text-sm 
                                bg-orange-100 text-orange-700 
                                rounded-full font-medium"
                    >
                      📍 {place}
                    </span>
                  ))
                : (
                  <span className="px-3 py-1.5 text-xs sm:text-sm 
                                  bg-orange-100 text-orange-700 
                                  rounded-full font-medium">
                    📍 {destination}
                  </span>
                )}
            </div>

            {/* ---------- DIVIDER ---------- */}
            <div className="mt-6 h-[3px] w-40 sm:w-48 bg-gradient-to-r from-orange-600 via-orange-400 to-transparent rounded-full" />

            {/* ---------- RESULT TEXT ---------- */}
            <p className="mt-6 text-xs sm:text-sm text-gray-500">
              Showing tour packages for{" "}
              <span className="font-medium text-gray-700">
                {Array.isArray(destination)
                  ? destination.join(", ")
                  : destination}
              </span>{" "}
              ({duration} Day)
            </p>

            {/* ---------- FILTER GRID ---------- */}
           {
              loading ? (
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                  <div className="grid md:grid-cols-3 gap-8">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <TourCardSkeleton key={i} />
                    ))}
                  </div>
                </div>
              ) : packages.length === 0 ? (
                <div className="mt-10 text-center text-gray-600">
                  No packages found
                </div>
              ) : (
                <div className="mt-10">
                  <FilterGrid packages={packages} setIsOpen={setIsOpen} />
                </div>
              )
            }
           

            <PackagesCTA />
            <VrindavanTrustStats />
            <TrustBuildingSection />

          </div>
          </section>

           <FooterCTA/>

          <Footer/>
          
        </>
      );
}
