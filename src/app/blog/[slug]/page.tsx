import { notFound } from "next/navigation";
import Navbar from "@/utils/Navbar";
import Foter from "@/utils/Footer"
import RelatedBlog from "@/components/Blog/RelatedBlog";
import BlogFAQ from "@/components/Blog/BlogFAQ";
import AddCard from "@/components/Blog/AddCTA";
import BlogCategories from "@/components/Blog/BlogCategories";
import LeftContent from "@/components/Blog/LeftContent";
import { supabase } from "@/lib/supabase/SupabaseConfig";
import FooterCTA from "@/utils/FooterCTA";
import GroupCta from "@/components/Home/GroupCta";

export async function generateMetadata({ params }: { params: { slug: string } }) {

    const { slug } = await params;

    const { data } = await supabase
        .from("Blog")
        .select("*")
        .eq("slug", slug)
        .single();


    const baseUrl = "https://vrindavanmathuraguide.com";
    const url = `${baseUrl}/blog/${slug}`;

    const title = data?.meta?.title ?? data?.title ?? "Vrindavan Blog";
    const description = data?.meta?.description ?? "";

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
                    url: data?.image ?? `${baseUrl}/og-blog.jpg`,
                    width: 1200,
                    height: 630,
                    alt: data?.title ?? "Vrindavan Blog",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [
                data?.image ?? `${baseUrl}/og-blog.jpg`
            ],
        },

        robots: {
            index: true,
            follow: true,
        },
    };
}


const getBlogData = async (BlogId: string) => {
    const { data, error } = await supabase
        .from("Blog")
        .select("*")
        .eq("slug", BlogId)
        .single();

    if (error) {

        console.error(error);

    }

    return data;


}




const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {

    const { slug } = await params;


    const { data: blog, error } = await supabase
        .from("Blog")
        .select("id, slug")
        .eq("slug", slug)
        .maybeSingle();


    if (!blog || error) {

        notFound();

    }

    const Blogs = await getBlogData(slug);

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `https://vrindavanmathuraguide.com/blog/${Blogs.slug}#article`,

        "headline": Blogs.title,
        "description": Blogs.schema?.description,
        "image": Blogs.image ?? "https://vrindavanmathuraguide.com/og-blog.jpg",

        "author": {
            "@type": "Person",
            "name": Blogs.author || "Vrindavan Mathura Guide Team"
        },

        "publisher": {
            "@type": "Organization",
            "@id": "https://vrindavanmathuraguide.com/#organization",
            "name": "Vrindavan Mathura Guide",
            "logo": {
                "@type": "ImageObject",
                "url": "https://vrindavanmathuraguide.com/favicon.ico",
                "width": 300,
                "height": 300
            }
        },

        "datePublished": Blogs.created_at,
        "dateModified": Blogs.created_at,

        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://vrindavanmathuraguide.com/blog/${Blogs.slug}`
        },

        "articleSection": Blogs.category || "Travel Guide",
    };


    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `https://vrindavanmathuraguide.com/blog/${Blogs.slug}#breadcrumb`,
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
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": Blogs.title,
                "item": `https://vrindavanmathuraguide.com/blog/${Blogs.slug}`
            }
        ]
    };

    const faqSchema =
        Blogs.faqs?.length > 0
            ? {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": Blogs.faqs.map((faq: any) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            }
            : null;


    return (

        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        [articleSchema, breadcrumbSchema, faqSchema].filter(Boolean)
                    )
                }}
            />

            <Navbar />

            <div className="w-full min-h-screen bg-slate-50"  >


                <div className="max-w-7xl mx-auto px-4">

                    <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-10" >


                        <LeftContent Blogs={Blogs} />


                        <aside className="relative shadow-xs">

                            <div className="sticky top-44 space-y-6">

                                <AddCard />

                                <BlogCategories />

                            </div>

                        </aside>

                    </div>

                </div>

                <GroupCta />

                <BlogFAQ Blogs={Blogs} />

                <RelatedBlog slug={slug} />


            </div>

            <Foter />

        </>

    );
};

export default Page;
