import Footer from "@/utils/Footer";
import Navbar from "@/utils/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://vrindavanmathuraguide.com"),

    title: "Terms & Refund Policy | Vrindavan Mathura Guide",

    description:
        "Read the official Terms & Conditions and Refund Policy of Vrindavan Mathura Guide including cancellation rules, booking terms and refund timelines.",

    alternates: {
        canonical: "/refund-policy",
    },

    robots: {
        index: true,
        follow: true,
    },

    openGraph: {
        type: "website",
        url: "/refund-policy",
        title: "Terms & Refund Policy | Vrindavan Mathura Guide",
        description:
            "Understand booking rules, cancellation charges and refund timelines for Vrindavan tours and services.",
        siteName: "Vrindavan Mathura Guide",
    },

    twitter: {
        card: "summary",
        title: "Terms & Refund Policy | Vrindavan Mathura Guide",
        description:
            "Official booking terms and refund policy of Vrindavan Mathura Guide.",
    },
};

export default function RefundPolicyPage() {

    const termsSchema = {
        "@context": "https://schema.org",
        "@type": "TermsOfService",
        "@id": "https://vrindavanmathuraguide.com/refund-policy#webpage",
        "url": "https://vrindavanmathuraguide.com/refund-policy",
        "name": "Terms & Refund Policy - Vrindavan Mathura Guide",
        "description":
            "Official Terms & Conditions and Refund Policy of Vrindavan Mathura Guide including booking, cancellation and refund rules.",
        "inLanguage": "en-IN",
        "isPartOf": {
            "@id": "https://vrindavanmathuraguide.com/#website"
        },
        "publisher": {
            "@id": "https://vrindavanmathuraguide.com/#organization"
        },
        "datePublished": "2026-01-01",
        "dateModified": "2026-01-01"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://vrindavanmathuraguide.com/refund-policy#breadcrumb",
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
                "name": "Terms & Refund Policy",
                "item": "https://vrindavanmathuraguide.com/refund-policy"
            }
        ]
    };
    return (
        <>

            <script
                id="terms-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([termsSchema, breadcrumbSchema])
                }}
            />

            <Navbar />
            <section className="relative min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100">

                {/* Soft Glow Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-72 bg-orange-300/20 blur-3xl rounded-full" />
                </div>

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                    {/* Header */}
                    <header className="text-center mb-14">
                        <span className="inline-block text-sm font-semibold tracking-widest text-orange-600 uppercase">
                            Legal Information
                        </span>

                        <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
                            Terms & Refund Policy
                        </h1>

                        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
                            Please read these terms carefully before booking services with
                            <span className="font-semibold text-orange-600">
                                {" "}Vrindavan Mathura Guide
                            </span>.
                        </p>
                    </header>

                    {/* Content Card */}
                    <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-orange-100 p-6 sm:p-10 space-y-10">

                        {[
                            {
                                title: "1. Acceptance of Terms",
                                content:
                                    "By accessing our website or booking any service, you agree to be bound by these Terms & Conditions.",
                            },
                            {
                                title: "2. Scope of Services",
                                content: (
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Guided tours</li>
                                        <li>Taxi and transport services</li>
                                        <li>Pilgrimage packages</li>
                                        <li>Braj 84 Kosh Yatra</li>
                                        <li>Event & pooja planning services</li>
                                    </ul>
                                ),
                            },
                            {
                                title: "3. Booking & Payments",
                                content: (
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Advance payment may be required to confirm bookings</li>
                                        <li>Payments via Bank Transfer, Razorpay, UPI, or Cash</li>
                                        <li>Prices may vary during peak seasons or festivals</li>
                                    </ul>
                                ),
                            },
                            {
                                title: "4. Cancellation & Refund Policy",
                                content: (
                                    <>
                                        <p className="mb-3 font-medium text-gray-700">
                                            Cancellation charges apply on the advance amount:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>10% deduction if cancelled 1 month prior</li>
                                            <li>50% deduction if cancelled 1 week prior</li>
                                            <li>100% deduction if cancelled 1 day prior</li>
                                            <li>No refund for no-shows or early departure</li>
                                        </ul>
                                        <p className="mt-3 text-sm text-gray-600">
                                            Refunds, if applicable, are processed within 7–10 working days.
                                        </p>
                                    </>
                                ),
                            },
                            {
                                title: "5. Limitation of Liability",
                                content: (
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Temple or darshan timing changes</li>
                                        <li>Heavy crowd conditions</li>
                                        <li>Weather-related disruptions</li>
                                        <li>Local administration delays</li>
                                        <li>Government or temple authority decisions</li>
                                    </ul>
                                ),
                            },
                            {
                                title: "6. Force Majeure Clause",
                                content: (
                                    <>
                                        <p className="mb-3">
                                            We are not liable for delays or failures caused by:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Major festivals (Holi, Janmashtami, Ekadashi, etc.)</li>
                                            <li>Road closures or traffic restrictions</li>
                                            <li>Government orders</li>
                                            <li>Natural calamities</li>
                                            <li>Strikes or public disturbances</li>
                                        </ul>
                                    </>
                                ),
                            },
                            {
                                title: "7. Code of Conduct & Respect",
                                content: (
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Respect local customs and religious sentiments</li>
                                        <li>Follow temple dress codes and rules</li>
                                        <li>Maintain decorum during yatras and darshan</li>
                                    </ul>
                                ),
                            },
                            {
                                title: "8. Health & Personal Responsibility",
                                content: (
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Personal belongings safety</li>
                                        <li>Health conditions and medications</li>
                                        <li>Following safety instructions during tours</li>
                                    </ul>
                                ),
                            },
                            {
                                title: "9. Intellectual Property",
                                content:
                                    "All website content, text, images, and logos belong to Vrindavan Mathura Guide and may not be reproduced without permission.",
                            },
                            {
                                title: "10. Governing Law & Jurisdiction",
                                content:
                                    "These Terms are governed by the laws of India with jurisdiction in Mathura, Uttar Pradesh courts.",
                            },
                            {
                                title: "11. Amendments",
                                content:
                                    "We reserve the right to modify these Terms & Conditions at any time without prior notice.",
                            },
                        ].map((section, index) => (
                            <div key={index}>
                                <h2 className="text-xl sm:text-2xl font-bold text-orange-700 mb-3">
                                    {section.title}
                                </h2>
                                <div className="text-gray-700 leading-relaxed text-sm sm:text-base">
                                    {section.content}
                                </div>
                            </div>
                        ))}

                        {/* Contact Section */}
                        <div className="rounded-xl bg-orange-50 border border-orange-200 p-6 mt-10">
                            <h3 className="text-lg font-semibold text-orange-700 mb-3">
                                Contact Details
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base">
                                📧 Email:{" "}
                                <a
                                    href="mailto:info@vrindavanmathuraguide.com"
                                    className="text-orange-600 font-medium hover:underline"
                                >
                                    info@vrindavanmathuraguide.com
                                </a>
                                <br />
                                📞 Phone: +91 7302265809
                                <br />
                                📍 Mathura, Uttar Pradesh, India
                            </p>
                        </div>
                    </div>

                    {/* Footer */}
                    <p className="mt-10 text-center text-xs text-gray-500">
                        © {new Date().getFullYear()} Vrindavan Mathura Guide. All rights reserved.
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
}
