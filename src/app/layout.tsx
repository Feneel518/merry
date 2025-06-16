import { Roboto_Mono, Syne } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { Toaster } from "@/components/ui/sonner";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const roboto = Roboto_Mono({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "100", "200", "300"],
});

export const metadata = {
  title: "MerryMatrix - Custom Websites, SEO & Branding Services",
  description:
    "Boost your online presence with MerryMatrix. We offer custom web design, SEO, UI/UX, and digital marketing tailored for your brand.",
  keywords:
    "Custom website development, SEO agency, UI/UX design, digital marketing, branding agency, web design Australia",
  authors: [{ name: "MerryMatrix", url: "https://merrymatrix.vercel.app" }],
  openGraph: {
    title: "MerryMatrix - Boost Your Digital Presence",
    description:
      "We craft modern websites and marketing strategies to grow your business online.",
    url: "https://merrymatrix.vercel.app",
    siteName: "MerryMatrix",
    images: [
      {
        url: "/og-image.png", // Add a custom OG image to /public
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MerryMatrix",
    description:
      "Custom website development, branding, and digital marketing that actually converts.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://merrymatrix.vercel.app"),
};

<DefaultSeo
  title="MerryMatrix | Creative Web & Brand Studio"
  description="MerryMatrix builds stunning websites, bold brands, and SEO systems that grow businesses."
  canonical="https://merrymatrix.vercel.app"
  openGraph={{
    type: "website",
    locale: "en_IN",
    url: "https://merrymatrix.vercel.app",
    site_name: "MerryMatrix",
    images: [
      {
        url: "https://merrymatrix.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MerryMatrix Studio",
      },
    ],
  }}
  twitter={{
    handle: "@merrymatrix",
    site: "@merrymatrix",
    cardType: "summary_large_image",
  }}
/>;

<Head>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "MerryMatrix",
        url: "https://merrymatrix.vercel.app",
        logo: "https://merrymatrix.vercel.app/logo.png",
        description:
          "A design-first web studio building stunning websites, bold brands, and scalable SEO strategies.",
        sameAs: [
          "https://www.linkedin.com/company/merrymatrix",
          "https://www.instagram.com/merrymatrix",
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
      }),
    }}
  />
</Head>;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${roboto.variable} antialiased max-w-screen overflow-x-hidden bg-[#FFFAFA]`}
      >
        {children}
        <Toaster />
        <Cursor></Cursor>
      </body>
    </html>
  );
}
