import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf3]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 py-10 lg:py-14 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          {/* BREADCRUMBS */}
          <nav className="mb-4 text-sm text-gray-500 ">
            <ol className="flex flex-wrap justify-center lg:justify-start gap-2">
              <li>
                <Link href="/" className="hover:text-orange-500">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/about" className="hover:text-orange-500">
                  About Us
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium">
                Mathura Vrindavan Yatra
              </li>
            </ol>
          </nav>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-orange-500">Personalised, </span>
            Once In A Lifetime
            <br />
            <span className="text-gray-900">
              Mathura – Vrindavan Yatra
            </span>
          </h2>

          <p className="mt-5 sm:mt-6 max-w-xl mx-auto lg:mx-0 text-gray-600 text-base sm:text-lg leading-relaxed">
            We design soulful Mathura and Vrindavan tour experiences rooted in
            devotion, comfort, and local expertise. From sacred temples and
            Yamuna ghats to peaceful darshans, we walk with you at every step of
            your spiritual journey.
          </p>

          {/* TRUST POINTS */}
          <div className="mt-8 sm:mt-10 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
            {[
              "Experienced Local Guides",
              "24 × 7 Yatra Support",
              "Single Point Coordination",
              "No Third-Party Handoffs",
            ].map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE STACK */}
        <div className="relative flex justify-center lg:justify-end gap-4 sm:gap-6 " >

          {/* Main Tall Image */}
          <div className="relative h-[420px] sm:h-[500px] lg:h-[550px]
            w-[280px] sm:w-[360px] lg:w-[400px]
            rounded-[28px] sm:rounded-[32px]
            overflow-hidden border-8 border-white shadow-xl">
            <Image
              src="/images/About/AboutHero.webp"
              alt="Banke Bihari Temple Vrindavan"
              fill
              className="object-cover"
            />
          </div>

          {/* Side Images */}
          <div className="hidden sm:flex flex-col gap-4 sm:gap-6 pt-16 lg:pt-20">
            <div className="relative h-[180px] sm:h-[220px] w-[180px] sm:w-[220px]
              rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/Home/mathura-vrindavan.webp"
                alt="Prem Mandir Vrindavan"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[180px] sm:h-[220px] w-[180px] sm:w-[220px]
              rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/Home/home-faqs.webp"
                alt="Yamuna Ghat Mathura"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
