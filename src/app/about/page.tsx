import AboutHero from '@/components/About/AboutHero'
import AboutMissionSection from '@/components/About/AboutMissionSection'
import PhotoGalleryCarousel from '@/components/About/AboutPhotoGallery'
import PopularTours from '@/components/Home/PopularPackages'
import TrustBuildingSection from '@/components/Home/TrustBuildSec'
import WhyChooseUs from '@/components/Home/WhyChooseUs'
import Footer from '@/utils/Footer'
import FooterCTA from '@/utils/FooterCTA'
import Navbar from '@/utils/Navbar'

const About = () => {

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://mathuravrindavantourguide.com/about",
    "name": "About Mathura Vrindavan Tour Guide",
    "url": "https://mathuravrindavantourguide.com/about",

    "description":
      "Learn about Mathura Vrindavan Tour Guide, our mission, local expertise, trusted services, and commitment to providing peaceful and well-organized spiritual journeys.",

    "isPartOf": {
      "@id": "https://mathuravrindavantourguide.com/#organization"
    },

    "inLanguage": "en-IN",

  };


  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://mathuravrindavantourguide.com/#organization",

    "name": "Mathura Vrindavan Tour Guide",
    "url": "https://mathuravrindavantourguide.com",
    "logo": "https://mathuravrindavantourguide.com/favicon.ico",

    "description":
      "Mathura Vrindavan Tour Guide is a local travel agency providing expert guides, taxi services, temple darshan assistance, and customized spiritual tour packages in Mathura and Vrindavan.",

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

    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7302265809",
      "contactType": "Customer Support",
      "availableLanguage": ["English", "Hindi"]
    }
  };


  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            aboutPageSchema,
            organizationSchema,

          ])
        }}
      />
      <Navbar />
      <AboutHero />
      <AboutMissionSection />
      <WhyChooseUs />
      <PhotoGalleryCarousel />
      <TrustBuildingSection />
      <PopularTours />
      <FooterCTA />
      <Footer />
    </>
  )
}

export default About