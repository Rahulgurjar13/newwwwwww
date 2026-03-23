import dynamic from "next/dynamic";
import { Suspense } from "react";
import type { Metadata } from "next";
import Navbar from "@/utils/Navbar";
import Footer from "@/utils/Footer";
import MathuraHero from "@/components/Landing/MathuraHero";
import TourPackages from "@/components/Landing/TourPackages";
import TourHighlights from "@/components/Landing/TourHighlights";
import ServicesLanding from "@/components/Landing/ServicesLanding";
import TemplesSection from "@/components/Landing/TemplesSection";

const WhyChooseUs = dynamic(() => import("@/components/Home/WhyChooseUs"));
const TestimonialsSection = dynamic(() => import("@/components/Home/TestimonialsSection"));
const FAQSection = dynamic(() => import("@/components/Landing/FAQSection"));
const EnquiryFormLanding = dynamic(() => import("@/components/Landing/EnquiryFormLanding"));
const StickyBar = dynamic(() => import("@/components/Landing/StickyBar"));
const LeadPopup = dynamic(() => import("@/components/Landing/LeadPopup"));

/* ─────────────────── SEO Metadata ─────────────────── */

export const metadata: Metadata = {
  title: "Mathura Vrindavan Agra Tour Packages | Starting ₹1,499 | Book Now",
  description:
    "Book the best Mathura Vrindavan Agra tour packages starting ₹1,499/person. 1 to 10 day trips with VIP Darshan, AC transport, accommodation. Covers Mathura, Vrindavan, Gokul, Agra, Govardhan, Barsana, Ayodhya and Varanasi.",
  keywords: [
    "Mathura Vrindavan tour package",
    "Agra Mathura Vrindavan tour",
    "Vrindavan tour package from Delhi",
    "Braj 84 Kos Yatra",
    "Mathura Vrindavan Ayodhya Varanasi tour",
    "Banke Bihari VIP darshan package",
  ],
  alternates: {
    canonical: "https://vrindavanmathuraguide.com/2-days-mathura-vrindavan-tour",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Mathura Vrindavan Agra Tour Packages | Starting ₹1,499",
    description:
      "Customised spiritual tour packages from 1 to 10 days covering Mathura, Vrindavan, Gokul, Agra, Govardhan, Barsana, Ayodhya and Varanasi.",
    url: "https://vrindavanmathuraguide.com/2-days-mathura-vrindavan-tour",
    siteName: "Mathura Vrindavan Tour Guide",
    images: [
      {
        url: "https://vrindavanmathuraguide.com/Experience_my_India.webp",
        width: 1600,
        height: 900,
        alt: "Mathura Vrindavan Agra Tour Packages",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathura Vrindavan Agra Tour Packages | ₹1,499",
    description:
      "Book 1-10 day tours of Mathura, Vrindavan, Agra with VIP darshan and AC transport.",
    images: ["https://vrindavanmathuraguide.com/Experience_my_India.webp"],
  },
};

import CtaBreak from "@/components/Landing/CtaBreak";

/* ─────────────────── JSON-LD Schemas ─────────────────── */

const tourSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Mathura Vrindavan Agra Tour Packages",
  description:
    "Customised spiritual tour packages from 1 to 10 days covering Mathura, Vrindavan, Gokul, Agra, Govardhan, Barsana, Ayodhya and Varanasi.",
  touristType: "Spiritual Travelers",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "1499",
    highPrice: "6599",
    priceCurrency: "INR",
    offerCount: 8,
  },
  provider: {
    "@type": "TravelAgency",
    name: "Mathura Vrindavan Tour Guide",
    url: "https://vrindavanmathuraguide.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I book a Mathura Vrindavan tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call or WhatsApp at +91 7302265809, email info@vrindavanmathuraguide.com, or fill the enquiry form on our website.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide pickup from Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide pickup and drop from Delhi, Agra, Jaipur, and all nearby cities with AC vehicles.",
      },
    },
    {
      "@type": "Question",
      name: "What is the starting price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our packages start at ₹1,499 per person for a 1-day Vrindavan Darshan tour.",
      },
    },
  ],
};

/* ─────────────────── Page Component ─────────────────── */

export default function MathuraVrindavanLandingPage() {
  return (
    <div className="bg-[#FFF5EE]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([tourSchema, faqSchema]),
        }}
      />

      {/* Lead Popup */}
      <Suspense fallback={null}>
        <LeadPopup />
      </Suspense>

      <Navbar />
      <MathuraHero />

      {/* Packages — the main conversion section */}
      <TourPackages />

      {/* CTA Break */}
      <CtaBreak
        text="Can't decide? Let us plan the perfect tour for you!"
        buttonText="Get Free Consultation"
      />

      {/* Highlights */}
      <TourHighlights />

      {/* Services */}
      <ServicesLanding />

      {/* CTA Break */}
      <CtaBreak
        text="VIP Darshan + AC Vehicle + Stay — All Included"
        buttonText="Fill Enquiry Form"
      />

      {/* Temples */}
      <TemplesSection />

      <Suspense
        fallback={
          <div className="h-40 animate-pulse bg-orange-50 rounded-xl m-4" />
        }
      >
        <WhyChooseUs />
        <TestimonialsSection />
        <FAQSection />
        <EnquiryFormLanding />
        <StickyBar />
      </Suspense>

      <Footer />
    </div>
  );
}
