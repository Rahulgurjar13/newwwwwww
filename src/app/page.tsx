import dynamic from 'next/dynamic'
import Navbar from '@/utils/Navbar'
import { Suspense } from 'react'
import EnquirySection from '@/components/Home/Enquiryform'
import HeroSection from '@/components/Home/Hero'
import Footer from '@/utils/Footer'
import DestinationFilter from '@/components/Home/DestinationFilter'
import type { Metadata } from "next";
const ServicesSection = dynamic(() => import("@/components/Home/ServicesSection"))
const AboutBrajSection = dynamic(() => import("@/components/Home/AboutBrajSection"))
const HomeAboutSection = dynamic(() => import("@/components/Home/HomeAboutSection"))
const GroupCta = dynamic(() => import("@/components/Home/GroupCta"))
const TrustBuildingSection = dynamic(() => import("@/components/Home/TrustBuildSec"))
const VrindavanTrustStats = dynamic(() => import("@/components/Home/VrindavanTrustStats"))
const WhyChooseUs = dynamic(() => import("@/components/Home/WhyChooseUs"))
const PopularTours = dynamic(() => import("@/components/Home/PopularPackages"));
const PhotoGallerySection = dynamic(() => import("@/components/Home/PhotoGallerySec"));
const TestimonialsSection = dynamic(() => import("@/components/Home/TestimonialsSection"));
const ToursWeOperate = dynamic(() => import("@/components/Home/ToursWeOperateSection"));
const HomeFAQSection = dynamic(() => import("@/components/Home/HomeFaqs"));

export const metadata: Metadata = {
  title: "Mathura Vrindavan Tour Packages | Krishna Temple Darshan & Braj Spiritual Tours",
  description:
    "Explore Mathura & Vrindavan with trusted local tour guides. Book temple darshan, taxi services and customized spiritual tour packages at the best price.",
  keywords: [
    "Mathura Vrindavan tour package",
    "Vrindavan local guide",
    "Mathura taxi service",
    "Temple darshan package",
    "Mathura Vrindavan travel guide",
  ],
  alternates: {
    canonical: "https://vrindavanmathuraguide.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mathura Vrindavan Tour Packages | Local Guide & Darshan",
    description:
      "Discover Mathura & Vrindavan with expert local guides. Taxi, temple darshan & spiritual tour packages available.",
    url: "https://vrindavanmathuraguide.com/",
    siteName: "Mathura Vrindavan Tour Guide",
    images: [
      {
        url: "https://vrindavanmathuraguide.com/Experience_my_India.webp",
        width: 1600,
        height: 900,
        alt: "Mathura Vrindavan Tour",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathura Vrindavan Tour Packages",
    description:
      "Book Mathura Vrindavan tours with local guides, taxi & darshan services.",
    images: ["https://vrindavanmathuraguide.com/Experience_my_India.webp"],
  },
};




const Home = () => {



  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mathura Vrindavan Tour Guide",
    "url": "https://vrindavanmathuraguide.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://vrindavanmathuraguide.com/filter?destination={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Mathura Vrindavan Tour Guide",
    "url": "https://vrindavanmathuraguide.com/",
    "logo": " https://vrindavanmathuraguide.com/Experience_my_India.webp",
    "description":
      "Mathura Vrindavan Tour Guide offers local guides, taxi services, temple darshan assistance and customized spiritual tour packages.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mathura",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Mathura Vrindavan"
    },
  };

  const touristAttractionSchema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "Mathura Vrindavan Temples",
    "description":
      "Sacred Krishna temples in Mathura and Vrindavan including Banke Bihari Temple, ISKCON Temple and Shri Krishna Janmabhoomi.",
    "touristType": "Spiritual Travelers",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Spiritual Tour and Travel Services",
    "provider": {
      "@type": "TravelAgency",
      "name": "Mathura Vrindavan Tour Guide",
      "url": "https://vrindavanmathuraguide.com/"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Mathura Vrindavan, Uttar Pradesh, India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mathura Vrindavan Spiritual Travel Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "VIP Temple Darshan & Puja",
            "description": "Priority access to temples, guided worship, and personalized rituals for devotees visiting Mathura and Vrindavan."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Luxury Transport Services",
            "description": "Comfortable chauffeur-driven cars including Sedan, SUV and Urbania for temple tours and airport transfers."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Certified Spiritual Guides",
            "description": "Experienced local guides with deep knowledge of Braj history, Krishna mythology and sacred temples."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Yamuna Boating Experience",
            "description": "Peaceful Yamuna river boat rides with sunset views and Yamuna Aarti experience."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Seva & Temple Ritual Arrangements",
            "description": "Organised temple offerings, Gau Daan services and personalized devotional contributions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Traditional Bhajans & Cultural Experiences",
            "description": "Live devotional music, local Braj artists and spiritual cultural performances."
          }
        }
      ]
    }
  };


  const testimonialsSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Mathura Vrindavan Tour Guide",
  "url": "https://vrindavanmathuraguide.com/",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1200",
    "bestRating": "5"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Rahul Khanna" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "We booked a Mathura Vrindavan tour package for our family and the experience was very smooth. The pickup was on time, temple visits were well planned, and we never felt rushed. Everything felt organised from start to finish.",
      "address": { "@type": "PostalAddress", "addressLocality": "Delhi", "addressCountry": "IN" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Lakshmi Narayanan" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Travelling from South India, we were worried about managing temple queues and local transport. The team handled everything properly and guided us on darshan timing. The journey felt comfortable and peaceful.",
      "address": { "@type": "PostalAddress", "addressLocality": "Bengaluru", "addressCountry": "IN" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Pooja Verma" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "The itinerary was practical and not overloaded. We could visit the temples calmly and still have enough rest during the day. For families travelling with elders, the planning made a big difference.",
      "address": { "@type": "PostalAddress", "addressLocality": "Lucknow", "addressCountry": "IN" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Amitabh Sengupta" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Our driver knew the local routes very well, which helped us avoid unnecessary traffic and delays. Temple darshan was arranged during manageable hours. Overall, the trip felt smooth and well coordinated.",
      "address": { "@type": "PostalAddress", "addressLocality": "Kolkata", "addressCountry": "IN" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Karthik Subramanian" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "This was my first visit to Braj, and I was unsure how to cover all the important places. The itinerary helped us visit Mathura, Vrindavan, and nearby temples in a comfortable way without confusion.",
      "address": { "@type": "PostalAddress", "addressLocality": "Chennai", "addressCountry": "IN" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Neha Arora" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "The best part of the tour was the timing of the temple visits. We reached major temples early and avoided heavy queues. That small planning detail made the experience much more peaceful.",
      "address": { "@type": "PostalAddress", "addressLocality": "Chandigarh", "addressCountry": "IN" }
    }
  ]
};

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the best tour guide for Mathura and Vrindavan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "The best Mathura Vrindavan tour guide is one who provides local expertise, flexible tour planning, temple darshan assistance and reliable taxi services. A trusted local guide ensures a peaceful and well-organized spiritual journey."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in Mathura Vrindavan tour packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Mathura Vrindavan tour packages usually include local sightseeing, temple darshan assistance, taxi services, guided tours, and customized itineraries based on your travel duration."
        }
      },
      {
        "@type": "Question",
        "name": "Is one day enough for Mathura Vrindavan tour?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "One day is sufficient for a quick Mathura Vrindavan tour covering major temples, but a 2–3 day tour is recommended for a relaxed and complete spiritual experience."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide taxi services for Mathura Vrindavan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, reliable taxi services are available for Mathura and Vrindavan sightseeing, including pickup from Delhi, Agra and nearby cities."
        }
      }
    ]
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            websiteSchema,
            organizationSchema,
            touristAttractionSchema,
            servicesSchema,
            testimonialsSchema,
            faqSchema
          ])
        }}
      />
      <Navbar />
      <HeroSection />
      <DestinationFilter />
      <Suspense fallback={<div className="h-40 animate-pulse bg-gray-100 rounded-xl" />}>
        <AboutBrajSection />
        <EnquirySection />
        <PopularTours />
        <GroupCta />
        <ServicesSection />
        <HomeAboutSection />
        <WhyChooseUs />
        <TrustBuildingSection />
        {/* <PhotoGallerySection /> */}
        <TestimonialsSection />
        <ToursWeOperate />
        <HomeFAQSection />
        <VrindavanTrustStats />
      </Suspense>
      <Footer />
    </>
  )
}

export default Home