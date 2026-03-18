import Navbar from '@/utils/Navbar';
import Footer from '@/utils/Footer';
import FooterCTA from "@/utils/FooterCTA";
import type { Metadata } from 'next';
import LetsConnect from '@/components/Blog/LetsConnect';
import VrindavanTrustStats from '@/components/Home/VrindavanTrustStats';
import GroupCta from '@/components/Home/GroupCta';
import PopularTours from '@/components/Home/PopularPackages';
import BlogArchive from '@/components/Blog/BlogArchive';


export const metadata: Metadata = {
  metadataBase: new URL("https://vrindavanmathuraguide.com"),

  title: {
    default: "Mathura Vrindavan Blog | Temple Darshan, Travel & Spiritual Guides",
    template: "%s | Mathura Vrindavan Blog",
  },

  description:
    "Explore detailed temple guides, darshan timings, travel tips, festivals, Govardhan Parikrama routes and spiritual insights from Mathura & Vrindavan.",

  alternates: {
    canonical: "/blog",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "/blog",
    title: "Mathura Vrindavan Blog",
    description:
      "Temple darshan guides, festival updates, Govardhan Parikrama routes and spiritual travel insights from Mathura & Vrindavan.",
    siteName: "Mathura Vrindavan Tour Guide",
    images: [
      {
        url: "/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Mathura Vrindavan Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mathura Vrindavan Blog",
    description:
      "Temple darshan timings, Govardhan Parikrama guide and Vrindavan travel tips.",
    images: ["/og-blog.jpg"],
  },

  category: "Travel",
};



const page = async () => {


  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://vrindavanmathuraguide.com/blog#webpage",
    "url": "https://vrindavanmathuraguide.com/blog",
    "name": "Mathura Vrindavan Blog",
    "description":
      "Temple darshan guides, travel tips and spiritual insights from Mathura and Vrindavan.",
    "isPartOf": {
      "@id": "https://vrindavanmathuraguide.com/#website"
    },
    "about": {
      "@type": "Thing",
      "name": "Mathura and Vrindavan Travel"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://vrindavanmathuraguide.com/blog#breadcrumb",
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
        "name": "Blog",
        "item": "https://vrindavanmathuraguide.com/blog"
      }
    ]
  };



  return (

    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webPageSchema, breadcrumbSchema])
        }}
      />

      <Navbar />

      <LetsConnect />

      <BlogArchive />

      <PopularTours />

      <GroupCta />

      <VrindavanTrustStats />

      <FooterCTA />

      <Footer />
    </>
  );

}

export default page