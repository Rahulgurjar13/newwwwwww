import ServicesHero from "@/components/Services/ServicesHero";
const ServicesList = dynamic(() => import('@/components/Services/ServicesList'));
const ServicesCTA = dynamic(() => import('@/components/Services/ServicesCTA'))
const Footer = dynamic(() => import('@/utils/Footer'))

import Navbar from "@/utils/Navbar";
import dynamic from "next/dynamic";
import { Suspense } from "react";


export const metadata = {
  title: "Vrindavan Guest Services | VIP Darshan, Travel & Temple Assistance",
  description:
    "Discover premium guest services in Vrindavan including VIP darshan arrangements, temple guidance, travel assistance, accommodation help and spiritual tour services.",

  alternates: {
    canonical: "https://vrindavanmathuraguide.com/services",
  },

  openGraph: {
    title: "Vrindavan Guest Services",
    description:
      "Premium services for pilgrims visiting Vrindavan including temple guidance, VIP darshan, travel assistance and curated spiritual experiences.",
    url: "https://vrindavanmathuraguide.com/services",
    siteName: "Vrindavan Mathura Guide",
    images: [
      {
        url: "https://vrindavanmathuraguide.com/images/Home/oneday-vrindavan.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vrindavan Guest Services",
    description:
      "Explore premium services for pilgrims visiting Vrindavan.",
    images: ["https://vrindavanmathuraguide.com/images/Home/oneday-vrindavan.webp"],
  },
};



export default function Page() {

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Vrindavan Guest Services",
    "description":
      "VIP darshan arrangements, temple guidance, travel assistance and spiritual services in Vrindavan.",
    "provider": {
      "@type": "TravelAgency",
      "name": "Vrindavan Mathura Guide",
      "url": "https://vrindavanmathuraguide.com"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Vrindavan, Uttar Pradesh, India"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `https://vrindavanmathuraguide.com/services#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vrindavanmathuraguide.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://vrindavanmathuraguide.com/services"
      },

    ]
  };


  return (
    <div>

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema]) }}
      />

      <Navbar />

      <ServicesHero />

      <Suspense fallback={<div>Loading...</div>}>

        <ServicesList />

        <ServicesCTA />

        <Footer />

      </Suspense>

    </div>
  );
}