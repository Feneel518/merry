import type { Metadata } from "next";
import { Roboto_Mono, Syne } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";

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
  title: {
    default: "Merry Matrix | Where Creativity Meets Innovation",
    template: "%s | Merry Matrix",
  },
  description:
    "Merry Matrix builds dynamic, intuitive solutions that simplify and enhance user experiences. Join us in shaping the future of design and technology.",
  keywords: [
    "Merry Matrix",
    "creative agency",
    "UI/UX design",
    "web development",
    "digital transformation",
    "technology solutions",
    "product design",
    "branding",
    "software development",
    "creative tech studio",
  ],
  authors: [{ name: "Merry Matrix", url: "https://merrymatrix.com" }],
  creator: "Merry Matrix",
  publisher: "Merry Matrix",
  generator: "Next.js",
  metadataBase: new URL("https://merrymatrix.com"),

  openGraph: {
    title: "Merry Matrix | Where Creativity Meets Innovation",
    description:
      "We build dynamic, intuitive solutions that simplify and enhance user experiences. Join us in shaping the future of design and technology.",
    url: "https://merrymatrix.com",
    siteName: "Merry Matrix",
    images: [
      {
        url: "https://merrymatrix.com/og-image.jpg", // 🔁 Replace with actual image
        width: 1200,
        height: 630,
        alt: "Merry Matrix – Where Creativity Meets Innovation",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Merry Matrix | Where Creativity Meets Innovation",
    description:
      "We build dynamic, intuitive solutions that simplify and enhance user experiences. Join us in shaping the future of design and technology.",
    images: ["https://merrymatrix.com/og-image.jpg"], // 🔁 Replace with actual image
    creator: "@merrymatrix", // 🔁 Optional: Add your Twitter handle
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#FFFAFA", // Match your brand
      },
    ],
  },

  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#FFFAFA" }],

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    viewportFit: "cover",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  alternates: {
    canonical: "https://merrymatrix.com",
    languages: {
      "en-US": "https://merrymatrix.com",
    },
  },
};

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
        <Cursor></Cursor>
      </body>
    </html>
  );
}
