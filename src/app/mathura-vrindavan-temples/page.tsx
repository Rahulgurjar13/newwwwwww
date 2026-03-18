import HeroSection from '@/components/FamousTemple/HeroSection'
import Navbar from '@/utils/Navbar';
import TemplesSection from '@/components/FamousTemple/TemplesSection';
const FamousTemplesSection = dynamic(() => import('@/components/FamousTemple/FamousTemplesSection'));
const PackageCTA = dynamic(() => import('@/components/Packages/PackagesCTA'));
const PopularPackages = dynamic(() => import('@/components/Home/PopularPackages'));
const FinalCTA = dynamic(() => import('@/components/FamousTemple/FinalCTA'))
const Footer = dynamic(() => import('@/utils/Footer'));
import dynamic from "next/dynamic";
import { Suspense } from 'react';


export const metadata = {
  title: "Famous Temples in Mathura Vrindavan | Complete Temple Guide 2026",
  description:
    "Discover the most famous temples in Mathura and Vrindavan including Banke Bihari Temple, Prem Mandir, ISKCON Temple and more. Plan your spiritual journey with temple details and travel guidance.",

  keywords: [
    "Mathura Vrindavan temples",
    "Famous temples in Vrindavan",
    "Banke Bihari Temple Vrindavan",
    "Prem Mandir temple",
    "ISKCON temple Vrindavan",
    "Mathura temples list"
  ],

  alternates: {
    canonical: "https://www.vrindavanmathuraguide.com/mathura-vrindavan-temples"
  },

  openGraph: {
    title: "Famous Temples in Mathura Vrindavan",
    description:
      "Explore sacred temples of Mathura and Vrindavan including Banke Bihari, Prem Mandir, ISKCON and more.",
    url: "/images/Packages/package-hero.webps",
    siteName: "Vrindavan Mathura Guide",
    images: [
      {
        url: "/images/Packages/package-hero.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Famous Temples in Mathura Vrindavan",
    description:
      "Complete guide to sacred temples in Mathura and Vrindavan.",
    images: ["/images/Packages/package-hero.webp"],
  },
};

export default function Page() {

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://vrindavanmathuraguide.com/mathura-vrindavan-temples#webpage",
    "url": "https://vrindavanmathuraguide.com/mathura-vrindavan-temples",
    "name": "Famous Temples in Mathura Vrindavan",
    "description":
      "Complete guide to famous temples in Mathura and Vrindavan including Banke Bihari Temple, Prem Mandir and ISKCON Temple.",
    "isPartOf": {
      "@id": "https://vrindavanmathuraguide.com/#website"
    },
    "about": {
      "@type": "Place",
      "name": "Mathura and Vrindavan"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `https://vrindavanmathuraguide.com/mathura-vrindavan-temples#breadcrumb`,
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
        "name": "Mathura Vrindavan Temples",
        "item": "https://vrindavanmathuraguide.com/mathura-vrindavan-temples"
      },

    ]
  };

  return (
    <div className="">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([webPageSchema, breadcrumbSchema]) }}
      />

      <HeroSection />
      <TemplesSection />

      <Suspense fallback={<div>Loading...</div>}>


        <FamousTemplesSection />
        <PackageCTA />
        <PopularPackages />
        <FinalCTA />
        <Footer />

      </Suspense>



    </div>
  )
}