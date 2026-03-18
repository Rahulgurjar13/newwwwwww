const InclusionExclusion = dynamic(() => import("@/components/PackageDetail/InclusionExclusion"));
const PackageDurationStrip = dynamic(() => import("@/components/PackageDetail/PackageDurationStrip"));
const PackageHighlights = dynamic(() => import("@/components/PackageDetail/PackageHighlights"));
const PackageInclusionsStrip = dynamic(() => import("@/components/PackageDetail/PackageInclusionsStrip"));
const GroupCta = dynamic(() => import("@/components/Home/GroupCta"));
const DestinationRoute = dynamic(() => import("@/components/PackageDetail/DestinationRoute"));
const ItineraryAccordion = dynamic(() => import("@/components/PackageDetail/ItineraryAccordion"));
import PackageHero from "@/components/PackageDetail/PackageHero";
const Policies = dynamic(() => import("@/components/PackageDetail/Policies"));
const ProductRatings = dynamic(() => import("@/components/PackageDetail/ProductRatings"));
import Footer from "@/utils/Footer";
import Navbar from "@/utils/Navbar";
const SideForm = dynamic(() => import("@/components/PackageDetail/SideForm"));
const PackageFaqSection = dynamic(() => import("@/components/PackageDetail/PackageFaqSection"));
const PackageTestimonials = dynamic(() => import("@/components/PackageDetail/PackageTestimonial"));
import { supabase } from "@/lib/supabase/SupabaseConfig";
const KnowBeforeYouGo = dynamic(() => import("@/components/PackageDetail/KnowBeforeYouGo"));
const TrustBuildingSection = dynamic(() => import("@/components/Home/TrustBuildSec"));
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const PackageOverview = dynamic(() => import("@/components/PackageDetail/PackageOverview"));



export async function generateMetadata({ params }: { params: Promise<{ slug: string, duration: string }> }) {

  const { slug, duration } = await params;

  const { data } = await supabase
    .from("Package")
    .select("*")
    .eq("slug", slug)
    .eq('duration', duration)
    .single();

  const baseUrl = "https://vrindavanmathuraguide.com";
  const url = `${baseUrl}/tour-packages/${duration}/${slug}`;

  const title = data?.meta?.title ?? data?.title ?? "Travel Package";
  const description =
    data?.meta?.description ?? data?.shortDescription ?? "";

  console.log("THE DATA IS :");
  console.log(data);

  console.log("THE TITLE IS : ");
  console.log(title);

  return {
    metadataBase: new URL(baseUrl),

    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: "Vrindavan Mathura Guide",
      images: [
        {
          url: data?.heroimage?.image ?? `${baseUrl}/og-mathura-vrindavan-tour.jpg`,
          width: 1600,
          height: 900,
          alt: data?.title ?? "Tour Package",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        data?.heroimage?.image ?? `${baseUrl}/og-mathura-vrindavan-tour.jpg`
      ],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}



const getPackageData = async (slug: string, duration: string) => {
  const { data, error } = await supabase.from("Package").select("*").
    eq("slug", slug).eq('duration', duration).single();

  if (error) {
    console.log("There is some of the error I have get : ");
    console.log(error);
  }

  return data;
}



const page = async ({ params }: { params: Promise<{ slug: string, duration: string }> }) => {

  const { slug, duration } = await params;
  const PackageData = await getPackageData(slug, duration);

  const { data: packages, error } = await supabase
    .from("Package")
    .select("id, slug")
    .eq("slug", slug)
    .eq('duration', duration)
    .maybeSingle();


  if (!packages || error) {

    notFound();

  }


  if (!packages || error) {

    notFound();

  }

  const baseUrl = "https://vrindavanmathuraguide.com";
  const packageUrl = `${baseUrl}/tour-packages/${PackageData?.slug}`;

  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${packageUrl}#tour`,
    "name": PackageData?.title ?? "Mathura Vrindavan Tour Package",
    "description": PackageData?.shortDescription ?? "",
    "touristType": "Religious Tour",
    "provider": {
      "@type": "TravelAgency",
      "@id": "https://vrindavanmathuraguide.com/#organization",
      "name": "Vrindavan Mathura Guide",
      "url": baseUrl
    }
  };


  const packageSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${packageUrl}#tour`,
    "name": PackageData?.schema?.title || "Mathura Vrindavan Tour Package",
    "description": PackageData?.schema?.description,
    "touristType": "Religious Tour",
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": PackageData?.itinerary?.map((item: any, index: number) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "TouristAttraction",
          "name": item.title,
          "description": item.description
        }
      }))
    },
    "provider": {
      "@type": "TravelAgency",
      "name": "Vrindavan Mathura Guide",
      "url": baseUrl
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${packageUrl}#product`,
    "name": PackageData?.title ?? "Tour Package",
    "image": PackageData?.heroimage?.image ?? `${baseUrl}/og-mathura-vrindavan-tour.jpg`,
    "description": PackageData?.schema?.description ?? "",
    "category": "Tour Package",
    "brand": {
      "@type": "Brand",
      "name": "Vrindavan Mathura Guide"
    },

    ...(PackageData?.price && {
      "offers": {
        "@type": "Offer",
        "url": packageUrl,
        "priceCurrency": "INR",
        "price": String(PackageData.price),  // ALWAYS STRING
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31",
        "seller": {
          "@type": "Organization",
          "name": "Vrindavan Mathura Guide"
        }
      }
    }),

    ...(PackageData?.rating &&
      PackageData?.reviewCount && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": String(PackageData.rating),
        "reviewCount": String(PackageData.reviewCount)
      }
    })
  };


  const faqSchema =
    PackageData?.faqs?.length > 0
      ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${packageUrl}#faq`,
        "mainEntity": PackageData.faqs.map((faq: any) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
      : null;



  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${packageUrl}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl + "/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Packages",
        "item": `${baseUrl}/tour-packages`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": PackageData?.title ?? "Tour Package",
        "item": packageUrl
      }
    ]
  };



  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [touristTripSchema, packageSchema, productSchema, faqSchema, breadcrumbSchema]
          ),
        }}
      />

      <Navbar />

      {/* HERO */}
      <PackageHero PackageData={PackageData} />

      {/* MAIN CONTENT + SIDEBAR */}
      <section className="w-full min-h-screen bg-white  ">
        <div className="max-w-7xl mx-auto  py-12 ">

          {/* GRID */}
          <div className=" grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10  ">

            {/* LEFT CONTENT */}
            <main className="space-y-12">

              <Suspense fallback={<div className="h-40 animate-pulse bg-gray-100 rounded-xl" />}>

                <PackageDurationStrip
                  duration={`${PackageData.day}D / ${PackageData.night}N`}
                  breakdown={PackageData.durationbreakdown}
                />

                <PackageInclusionsStrip packageData={PackageData} />


                <DestinationRoute routeData={PackageData.destroutes} />
                <PackageOverview overview={PackageData.overview} />

                <PackageHighlights PackageData={PackageData} />

                <ItineraryAccordion PackageData={PackageData} />

                <InclusionExclusion PackageData={PackageData} />
              </Suspense>

            </main>

            {/* RIGHT SIDEBAR */}

            <aside className="hidden lg:block ">
              <div className="sticky top-28">
                <Suspense fallback={<div className="h-40 animate-pulse bg-gray-100 rounded-xl" />}>
                  <SideForm />
                </Suspense>
              </div>
            </aside>




          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-40 animate-pulse bg-gray-100 rounded-xl" />}>

        {/* BELOW CONTENT */}
        <KnowBeforeYouGo PackageData={PackageData} />
        <GroupCta />
        <ProductRatings />
        <PackageTestimonials PackageData={PackageData} />
        <TrustBuildingSection />
        <PackageFaqSection PackageData={PackageData} />
        <Policies PackageData={PackageData} />

      </Suspense>

      <Footer />
    </>
  );
};

export default page;
