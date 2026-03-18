import Footer from "@/utils/Footer";
import Navbar from "@/utils/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://vrindavanmathuraguide.com"),

    title: "Privacy Policy | Vrindavan Mathura Guide",

    description:
        "Read the official privacy policy of Vrindavan Mathura Guide to understand how we collect, use and protect your personal information.",

    alternates: {
        canonical: "/privacy-policy",
    },

    robots: {
        index: true,
        follow: true,
    },

    openGraph: {
        type: "website",
        url: "/privacy-policy",
        title: "Privacy Policy | Vrindavan Mathura Guide",
        description:
            "Learn how Vrindavan Mathura Guide protects your personal data and ensures secure travel bookings.",
        siteName: "Vrindavan Mathura Guide",
    },

    twitter: {
        card: "summary",
        title: "Privacy Policy | Vrindavan Mathura Guide",
        description:
            "Official privacy policy of Vrindavan Mathura Guide.",
    },
};

export default function PrivacyPolicyPage() {

    const privacySchema = {
        "@context": "https://schema.org",
        "@type": "PrivacyPolicy",
        "@id": "https://vrindavanmathuraguide.com/privacy-policy#webpage",
        "url": "https://vrindavanmathuraguide.com/privacy-policy",
        "name": "Privacy Policy - Vrindavan Mathura Guide",
        "description":
            "Official privacy policy of Vrindavan Mathura Guide explaining data collection, security practices and user rights.",
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
        "@id": "https://vrindavanmathuraguide.com/privacy-policy#breadcrumb",
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
                "name": "Privacy Policy",
                "item": "https://vrindavanmathuraguide.com/privacy-policy"
            }
        ]
    };
    return (
        <>

            <script
                id="privacy-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([privacySchema, breadcrumbSchema])
                }}
            />
            <Navbar />
            <section className="relative min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100">

                {/* Decorative Background Glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-72 bg-orange-300/20 blur-3xl rounded-full" />
                </div>

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                    {/* Header */}
                    <header className="text-center mb-14">
                        <span className="inline-block text-sm font-semibold tracking-widest text-orange-600 uppercase">
                            Legal & Transparency
                        </span>

                        <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
                            Privacy Policy
                        </h1>

                        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
                            Your trust matters to us. This policy explains how <span className="font-semibold text-orange-600">Vrindavan Mathura Guide</span> protects your personal data.
                        </p>

                        <p className="mt-2 text-sm text-gray-500">
                            Effective Date: <span className="font-medium text-gray-700">January 2026</span>
                        </p>
                    </header>

                    {/* Content Card */}
                    <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-orange-100 p-6 sm:p-10 space-y-10">

                        {/* Section Template */}
                        {[
                            {
                                title: "1. Applicability",
                                content:
                                    "This Privacy Policy applies to all users accessing our website, booking services, or interacting with us through online or offline channels.",
                            },
                            {
                                title: "2. Information We Collect",
                                content: (
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Full Name</li>
                                        <li>Email Address</li>
                                        <li>Phone Number</li>
                                        <li>
                                            Government-issued ID copies (Aadhaar, Passport, Voter ID, etc.)
                                            for hotel check-ins, darshan registrations, and travel permits
                                        </li>
                                        <li>Payment-related details (processed via secure gateways)</li>
                                    </ul>
                                ),
                            },
                            {
                                title: "3. Purpose of Data Collection",
                                content: (
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Tour bookings and travel arrangements</li>
                                        <li>Hotel and temple/darshan registrations</li>
                                        <li>Taxi and pilgrimage coordination</li>
                                        <li>Legal and regulatory compliance</li>
                                        <li>Customer support and communication</li>
                                        <li>Internal record keeping</li>
                                    </ul>
                                ),
                            },
                            {
                                title: "4. Legal Basis for Processing",
                                content: (
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>User consent</li>
                                        <li>Legitimate business requirements</li>
                                        <li>Compliance with legal obligations</li>
                                    </ul>
                                ),
                            },
                            {
                                title: "5. Cookies & Tracking Technologies",
                                content:
                                    "We use cookies to improve performance, analyze traffic, and enhance user experience. Cookies do not collect sensitive personal data and can be disabled via browser settings.",
                            },
                            {
                                title: "6. Data Security & Protection",
                                content: (
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Secure storage of government ID documents</li>
                                        <li>Restricted access to sensitive data</li>
                                        <li>Encrypted digital storage wherever applicable</li>
                                        <li>Limited retention based on legal or operational needs</li>
                                    </ul>
                                ),
                            },
                            {
                                title: "7. Data Sharing & Disclosure",
                                content: (
                                    <>
                                        <p className="mb-3">
                                            We do not sell, rent, or trade personal data.
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Hotels</li>
                                            <li>Temple authorities</li>
                                            <li>Government agencies</li>
                                            <li>Payment gateways (Razorpay / UPI / Banking partners)</li>
                                        </ul>
                                    </>
                                ),
                            },
                            {
                                title: "8. Data Retention",
                                content:
                                    "Personal data is retained only as long as necessary to fulfill services or legal requirements and is securely deleted thereafter.",
                            },
                            {
                                title: "9. User Rights under DPDP Act, 2023",
                                content: (
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Access personal data</li>
                                        <li>Request correction or deletion</li>
                                        <li>Withdraw consent (subject to law)</li>
                                        <li>Raise grievances</li>
                                    </ul>
                                ),
                            },
                            {
                                title: "10. International Visitors (GDPR)",
                                content:
                                    "International visitors are protected under GDPR. Data is collected only for travel and pilgrimage services. No marketing is done without explicit consent.",
                            },
                            {
                                title: "11. Changes to Privacy Policy",
                                content:
                                    "We may update this policy at any time. Continued use of our services implies acceptance of updates.",
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

                        {/* Contact Box */}
                        <div className="mt-12 rounded-xl bg-orange-50 border border-orange-200 p-6">
                            <h3 className="text-lg font-semibold text-orange-700 mb-3">
                                Contact Information
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base">
                                📍 <strong>Vrindavan Mathura Guide</strong><br />
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
                                📍 Location: Mathura, Uttar Pradesh, India
                            </p>
                        </div>
                    </div>

                    {/* Footer Note */}
                    <p className="mt-10 text-center text-xs text-gray-500">
                        © {new Date().getFullYear()} Vrindavan Mathura Guide. All rights reserved.
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
}
