"use client";

import Image from "next/image";

export default function AboutMissionSection() {
    return (
        <section className="bg-[#f7f8fa] py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Top Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-4xl font-bold mb-6">
                            Our <span className="text-orange-500">Mission</span>
                        </h2>

                        <p className="text-gray-700 mb-4">
                            At <strong>YourBrand</strong>, our mission is to design and operate
                            meaningful travel experiences that turn journeys into lasting memories.
                        </p>

                        <p className="text-gray-700 mb-4">
                            We believe travel doesn’t fail in inspiration — it fails in execution.
                            That’s why we go beyond planning to take full ownership of your journey,
                            from itinerary design to on-ground coordination and real-time problem
                            resolution.
                        </p>

                        <p className="text-gray-700 mb-6">
                            By combining smart technology with experienced human operations, we ensure
                            every trip is personalized, reliable, and stress-free.
                        </p>

                        <p className="font-semibold text-gray-900">
                            When you travel with us, <span className="text-orange-500">we take care of everything.</span>
                        </p>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="relative flex flex-col items-center">
                        <Image
                            src="/founders.png" // replace with your image
                            alt="Founders"
                            width={360}
                            height={420}
                            className="rounded-xl object-cover"
                        />

                        {/* Names */}
                        <div className="absolute top-6 left-0 text-sm text-gray-600">
                            <p className="font-semibold">Founder Name</p>
                            <p>CEO & Co-Founder</p>
                        </div>

                        <div className="absolute top-6 right-0 text-sm text-gray-600 text-right">
                            <p className="font-semibold">Co-Founder Name</p>
                            <p>Co-Founder</p>
                        </div>

                        {/* Quote Card */}
                        <div className="bg-white shadow-lg rounded-xl p-6 text-center max-w-sm mt-6">
                            <p className="italic text-gray-700">
                                “Great trips don’t fail in planning — they fail in execution.
                                We exist to own the hard part.”
                            </p>
                        </div>
                    </div>
                </div>

                {/* BOTTOM CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

                    <FeatureCard
                        title="End-to-End Ownership"
                        desc="From planning to execution, we manage every detail of your journey."
                        bg="bg-orange-50"
                        icon="🗺️"
                    />

                    <FeatureCard
                        title="On-Ground Control"
                        desc="Hotels, transport, guides — everything coordinated in real time."
                        bg="bg-blue-50"
                        icon="📍"
                    />

                    <FeatureCard
                        title="Transparent Responsibility"
                        desc="Clear inclusions, no hidden surprises, and full accountability."
                        bg="bg-green-50"
                        icon="🛡️"
                    />

                    <FeatureCard
                        title="AI + Human Support"
                        desc="Smart planning backed by real humans available 24/7."
                        bg="bg-yellow-50"
                        icon="🤝"
                    />
                </div>
            </div>
        </section>
    );
}

/* Feature Card Component */
function FeatureCard({
    title,
    desc,
    bg,
    icon,
}: {
    title: string;
    desc: string;
    bg: string;
    icon: string;
}) {
    return (
        <div className={`${bg} p-6 rounded-xl border border-gray-100`}>
            <div className="text-3xl mb-4">{icon}</div>
            <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
            <p className="text-sm text-gray-600">{desc}</p>
        </div>
    );
}
