import TempleTimingsHero from "@/components/TempleTiming/TempleTimingsHero";
const TempleTimingsSection = dynamic(() =>
  import("@/components/TempleTiming/TempleTimingsSection")
);
import Navbar from "@/utils/Navbar";
const Footer = dynamic(()=>import('@/utils/Footer'))
import dynamic from "next/dynamic";
import { Suspense } from "react";

export const metadata = {
  title: "Temple Timings in Mathura Vrindavan | Darshan & Aarti Schedule",
  description:
    "Check temple timings of famous temples in Mathura and Vrindavan including Banke Bihari, Prem Mandir and ISKCON. Get complete darshan and aarti schedule.",
  keywords: [
    "Vrindavan temple timings",
    "Mathura temple darshan time",
    "Banke Bihari temple timings",
    "Prem Mandir aarti time",
  ],
  openGraph: {
    title: "Temple Timings in Mathura Vrindavan",
    description:
      "Complete darshan and aarti schedule for temples in Mathura and Vrindavan.",
    type: "website",
    url: "https://www.vrindavanmathuraguide.com/mathura-vrindavan-temple-timings",
    images: [
      {
        url: "/images/Packages/package-hero.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Page() {

const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Temple Timings in Mathura Vrindavan",
    description:
      "Complete darshan and aarti schedule of famous temples in Mathura and Vrindavan.",
    url: "https://www.vrindavanmathuraguide.com/mathura-vrindavan-temple-timings",
    publisher: {
      "@type": "TravelAgency",
       name: "Vrindavan Mathura Guide",
       "url": "https://www.vrindavanmathuraguide.com"
      
    },
};

const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `https://vrindavanmathuraguide.com/mathura-vrindavan-temple-timings#breadcrumb`,
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
                "name": "Temple Timing",
                "item": "https://vrindavanmathuraguide.com/mathura-vrindavan-temple-timings"
            },
           
        ]
};

  return (
    <div>

      <Navbar/>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }}
      />

      <TempleTimingsHero />

      <Suspense fallback={<div>Loading...</div>}>
        <TempleTimingsSection />
        <Footer/>
      </Suspense>



    </div>
  );
}