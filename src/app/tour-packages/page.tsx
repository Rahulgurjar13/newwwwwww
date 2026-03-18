import Navbar from "@/utils/Navbar";
import PackageHero from "@/components/Packages/PackageHero";
const AboutPackages = dynamic(()=>import('@/components/Packages/AboutPackages'))
const PackagesCTA = dynamic(()=>import('@/components/Packages/PackagesCTA'))
const PackagesFaq = dynamic(()=>import('@/components/Packages/PackageFaqs'))
const PackagesGrid = dynamic(()=>import('@/components/Packages/PackagesGrid'))
import Footer from "@/utils/Footer";
const VrindavanTrustStats = dynamic(()=>import("@/components/Home/VrindavanTrustStats"))
import type { Metadata } from "next";
import { supabase } from "@/lib/supabase/SupabaseConfig";
const TrustBuildingSection = dynamic(()=>import("@/components/Home/TrustBuildSec"))
import dynamic from "next/dynamic";
import { Suspense } from "react";


export const metadata: Metadata = {
  metadataBase: new URL("https://vrindavanmathuraguide.com"),

  title: {
    default: "Vrindavan Tour Packages | Mathura Vrindavan Yatra & Darshan Tours",
    template: "%s | Vrindavan Mathura Guide",
  },

  description:
    "Book the best Vrindavan tour packages including Mathura temple darshan, Govardhan Parikrama, AC taxi service and customizable spiritual itineraries.",

  alternates: {
    canonical: "/packages",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "/packages",
    title: "Vrindavan Tour Packages | Mathura Vrindavan Yatra",
    description:
      "Explore curated Vrindavan tour packages including temple darshan, Govardhan Parikrama and spiritual yatras.",
    siteName: "Vrindavan Mathura Guide",
    images: [
      {
        url: "/images/Packages/package-hero.webp",
        width: 1600,
        height: 900,
        alt: "Vrindavan Tour Packages",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vrindavan Tour Packages",
    description:
      "Explore Mathura Vrindavan yatra packages with trusted guides and taxi services.",
    images: ["/images/Packages/package-hero.webp"],
  },

  category: "Travel",
};

const faqs = [
  {
    question: "Which Mathura Vrindavan tour package is best for first-time visitors?",
    answer:
      "For first-time visitors, we recommend our 1 Day or 2 Days Mathura Vrindavan tour packages. These cover major temples like Krishna Janmabhoomi, Banke Bihari Ji, ISKCON Temple, Prem Mandir, and Yamuna Ghats at a comfortable pace.",
  },
  {
    question: "Are Mathura Vrindavan tour packages suitable for senior citizens?",
    answer:
      "Yes, our Mathura Vrindavan packages are designed to be senior-citizen friendly. We provide AC vehicles, slow-paced itineraries, minimal walking options, and assistance during temple darshan wherever possible.",
  },
  {
    question: "Do your packages include pickup and drop?",
    answer:
      "Yes, most of our Mathura Vrindavan tour packages include pickup and drop services from Mathura Railway Station, hotels, or nearby locations. Pickup points can be customized as per your requirement.",
  },
  {
    question: "Can I customize a Mathura Vrindavan tour package?",
    answer:
      "Absolutely. All our packages can be customized based on your time, group size, darshan preference, and comfort level. You can also include Govardhan Parikrama, Barsana, Nandgaon, or Gokul in your itinerary.",
  },
  {
    question: "What is the best time to visit Mathura and Vrindavan?",
    answer:
      "The best time to visit Mathura and Vrindavan is from October to March when the weather is pleasant. Festivals like Janmashtami and Holi are spiritually vibrant but attract large crowds.",
  },
  {
    question: "Are guides included in Mathura Vrindavan tour packages?",
    answer:
      "Yes, experienced local Braj guides are available with most of our packages. They help with temple history, darshan timings, and navigating crowded areas efficiently.",
  },
];



async function getAllPackages() {
  const { data, error } = await supabase.from('Package').select('*');

  if (error) {
    console.log("package", error.message)
    return [];
  }

  return data;
}



export default async function Page() {
  const packages = await getAllPackages();

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://vrindavanmathuraguide.com/packages#webpage",
    "url": "https://vrindavanmathuraguide.com/packages",
    "name": "Vrindavan Tour Packages",
    "description":
      "Browse curated Vrindavan tour packages including temple darshan, Govardhan Parikrama and spiritual yatras.",
    "isPartOf": {
      "@id": "https://vrindavanmathuraguide.com/#website"
    }
  };


  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://vrindavanmathuraguide.com/packages#itemlist",
    "name": "Vrindavan Tour Packages",
    "itemListElement": packages.map((pkg: any, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://vrindavanmathuraguide.com/packages/${pkg.slug}`,
      "name": pkg.title
    }))
  };


  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://vrindavanmathuraguide.com/packages#breadcrumb",
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
        "name": "Packages",
        "item": "https://vrindavanmathuraguide.com/packages"
      }
    ]
  };


  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://vrindavanmathuraguide.com/packages#faq",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>


      <script
        id="packages-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            collectionPageSchema,
            itemListSchema,
            breadcrumbSchema,
            faqSchema
          ])
        }}
      />

      <Navbar />

      <PackageHero
        badge="Most Popular Vrindavan Yatra"
        title="Vrindavan Tour Package"
        description="Experience the divine land of Shri Krishna with a peaceful and well-planned Vrindavan tour. This package covers major temples, sacred ghats, and spiritual landmarks with comfort, devotion, and local guidance."
        image="/images/Packages/package-hero.webp"

      />

      <Suspense fallback={<div>Loading...</div>}>
        
          <AboutPackages />
          <PackagesGrid />
          <PackagesCTA />
          <TrustBuildingSection />
          <VrindavanTrustStats />
          <PackagesFaq />

      </Suspense>

      
      <Footer />
    </>
  );
}