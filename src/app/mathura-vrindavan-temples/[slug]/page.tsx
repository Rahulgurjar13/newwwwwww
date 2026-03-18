const GroupCta = dynamic(() => import('@/components/Home/GroupCta'))
const ExploreTemple = dynamic(() => import('@/components/temple/ExploreTemple'))
import HeroTemple from '@/components/temple/Herotemple'
const TempleFAQ = dynamic(() => import('@/components/temple/TempleFaqs'))
const TempleHistory = dynamic(() => import('@/components/temple/TempleHistory'))
const TempleJourney = dynamic(() => import('@/components/temple/TempleJourney'))
const TempleOverview = dynamic(() => import('@/components/temple/TempleOverview'))
const TempleStory = dynamic(() => import('@/components/temple/TempleStroy'))
const TempleVisitorGuide = dynamic(()=>import('@/components/temple/TempleVisitorGuide'))
import { supabase } from '@/lib/supabase/SupabaseConfig'
import Footer from '@/utils/Footer'
import Navbar from '@/utils/Navbar'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'


const baseUrl = "https://vrindavanmathuraguide.com";

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
) {

    const { slug } = await params;

    const { data } = await supabase
        .from("Temple")
        .select("*")
        .eq("slug", slug)
        .single();

    const baseUrl = "https://vrindavanmathuraguide.com";
    const url = `${baseUrl}/temples/${slug}`;

    const title =
        data?.meta?.title ??
        `${data?.name} Temple Vrindavan – Darshan Timings, History & Travel Guide`;

    const description =
        data?.meta?.description ??
        `Complete guide to ${data?.name} Temple in Vrindavan including history, darshan timings, aarti schedule, location, and travel tips.`;

    const image =
        data?.image ??
        `${baseUrl}/og-vrindavan-temple.jpg`;

    return {
        metadataBase: new URL(baseUrl),

        title,
        description,

        keywords: [
            `${data?.title} temple`,
            `${data?.name} darshan timings`,
            `${data?.name} history`,
            "Vrindavan temples",
            "Mathura Vrindavan temples",
            "Krishna temples Vrindavan"
        ],

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
                    url: image,
                    width: 1600,
                    height: 900,
                    alt: data?.name ?? "Temple",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },

        robots: {
            index: true,
            follow: true,
        },
    };
}



const getTempleData = async (TempleId: string) => {
    const { data, error } = await supabase
        .from("Temple")
        .select("*")
        .eq("slug", TempleId)
        .single();

    if (error) {

        console.error(error);

    }

    console.log(data);

    return data;


}


const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {

    const { slug } = await params;


    const { data: temple, error } = await supabase
        .from("Temple")
        .select("id, slug")
        .eq("slug", slug)
        .maybeSingle();


    if (!temple || error) {

        notFound();

    }

    const Temple = await getTempleData(slug);

    const webpageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${baseUrl}/temples/${Temple.slug}#webpage`,
        "url": `${baseUrl}/temples/${Temple.slug}`,
        "name": Temple?.schema?.title,
        "description": Temple?.schema?.description,
        "inLanguage": "en",
        "isPartOf": {
            "@type": "WebSite",
            "name": "Vrindavan Mathura Guide",
            "url": baseUrl
        }
    };

    const templeSchema = {
        "@context": "https://schema.org",
        "@type": "HinduTemple",
        "@id": `${baseUrl}/temples/${Temple.slug}#temple`,
        "name": Temple?.schema?.title,
        "description": Temple?.schema?.description,
        "url": `${baseUrl}/temples/${Temple.slug}`,
        "image": Temple?.image,
        "touristType": "Religious Pilgrimage",

        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vrindavan",
            "addressRegion": "Uttar Pradesh",
            "addressCountry": "India"
        },

        "containedInPlace": {
            "@type": "Place",
            "name": "Vrindavan"
        },

        "sameAs": [
            "https://en.wikipedia.org/wiki/Vrindavan",
            "https://www.google.com/maps"
        ]
    };

    const attractionSchema = {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "@id": `${baseUrl}/temples/${Temple.slug}#attraction`,
        "name": Temple?.schema?.title,
        "description": Temple?.schema?.description,
        "url": `${baseUrl}/temples/${Temple.slug}`,
        "image": Temple?.image,

        "isPartOf": {
            "@type": "Place",
            "name": "Vrindavan"
        },

        "touristType": [
            "Religious Tourists",
            "Spiritual Travelers",
            "Pilgrims"
        ]
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${baseUrl}/temples/${Temple.slug}#article`,
        "headline": `${Temple?.schema?.title} Temple Vrindavan`,
        "description": Temple?.schema?.description,
        "image": Temple?.image,

        "author": {
            "@type": "Organization",
            "name": "Vrindavan Mathura Guide"
        },

        "publisher": {
            "@type": "Organization",
            "name": "Vrindavan Mathura Guide",
            "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/Experience_my_India.webp`
            }
        },

        "mainEntityOfPage": `${baseUrl}/temples/${Temple.slug}`
    };

    const faqSchema =
        Temple?.faqs?.length > 0
            ? {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "@id": `${baseUrl}/temples/${Temple.slug}#faq`,
                "mainEntity": Temple.faqs.map((faq: any) => ({
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
        "@id": `${baseUrl}/temples/${Temple.slug}#breadcrumb`,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": baseUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Vrindavan Temples",
                "item": `${baseUrl}/mathura-vrindavan-temples`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": Temple?.title,
                "item": `${baseUrl}/temples/${Temple.slug}`
            }
        ]
    };

    return (
        <>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        webpageSchema,
                        templeSchema,
                        attractionSchema,
                        articleSchema,
                        breadcrumbSchema,
                        faqSchema
                    ])
                }}
            />
            <Navbar />
            <HeroTemple TempleData={Temple} />
            <Suspense fallback={<div className="h-40 animate-pulse bg-gray-100 rounded-xl" />}>
                <TempleVisitorGuide TempleData={Temple}/>
                <TempleStory TempleData={Temple} />
                <TempleJourney TempleData={Temple} />
                <GroupCta />
                <TempleOverview TempleData={Temple} />
                <TempleHistory TempleData={Temple} />
                <ExploreTemple TempleData={Temple} />
                <TempleFAQ TempleData={Temple} />
            </Suspense>
            <Footer />
        </>
    )
}

export default Page