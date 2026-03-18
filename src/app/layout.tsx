import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import GlobalWidgets from "@/utils/GlobalWidgets";




const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vrindavanmathuraguide.com"),

  title: {
    default: "Mathura Vrindavan Tour Guide | Temple Darshan & Braj Yatra Packages",
    template: "%s | Vrindavan Mathura Guide",
  },

  description:
    "Explore Mathura, Vrindavan, Govardhan and Barsana with trusted local guides. Book temple darshan assistance, taxi services and customized Braj spiritual tour packages.",

  keywords: [
    "Mathura Vrindavan tour package",
    "Vrindavan temple darshan",
    "Braj yatra package",
    "Mathura Vrindavan taxi service",
    "Govardhan parikrama tour",
    "Vrindavan local guide",
  ],

  alternates: {
    canonical: "https://vrindavanmathuraguide.com",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://vrindavanmathuraguide.com",
    siteName: "Vrindavan Mathura Guide",
    title: "Mathura Vrindavan Tour Guide | Temple Darshan & Braj Yatra",
    description:
      "Discover sacred places of Braj with experienced local guides. Temple darshan, taxi services and customized spiritual tours in Mathura & Vrindavan.",
    images: [
      {
        url: "https://vrindavanmathuraguide.com/Experience_my_India.webp",
        width: 1600,
        height: 900,
        alt: "Mathura Vrindavan Tour Guide",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mathura Vrindavan Tour Guide",
    description:
      "Temple darshan assistance, taxi services and Braj yatra packages.",
    images: [
      "https://vrindavanmathuraguide.com/Experience_my_India.webp",
    ],
  },

  category: "Travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
        <GlobalWidgets/>

      </body>

    </html>

  );
}
