import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

/**
 * Canonical strategy (IMPORTANT):
 * - In the RootLayout we set canonical to "/" (relative).
 * - Each page should override with a RELATIVE canonical like "/about/" or "/consultation-request/".
 *
 * This keeps URLs consistent + avoids accidentally setting every page’s canonical to the homepage.
 */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  // Title template is perfect for SEO.
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },

  description: site.description,

  // PI-focused keywords (Google mostly ignores keywords, but other engines/tools still read them)
  keywords: [
    "Personal injury attorney San Diego",
    "Personal injury lawyer El Cajon",
    "Car accident attorney San Diego",
    "Motorcycle accident lawyer San Diego",
    "Truck accident attorney San Diego",
    "Slip and fall lawyer San Diego",
    "Wrongful death attorney San Diego",
    "Injury lawyer San Diego County",
    "Insurance claim attorney California",
    "Crystal Farida attorney",
    "Farida Law SD",
  ],

  // Recommended extras
  applicationName: site.name,
  category: "Legal",
  creator: "Farida Law SD",
  publisher: "Farida Law SD",
  authors: [{ name: "Crystal Farida" }],

  // Canonical default (pages override this)
  alternates: {
    canonical: "/", // resolves to `${site.url}/` because metadataBase is set
  },

  // Good default indexing rules + richer googlebot directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Prevent weird iOS auto-linking if it interferes with your UI
  // (You already provide your own tel/mailto links in components.)
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  // Favicons / icons (add these files when ready)
  icons: {
    icon: "/favicon.ico",
    // apple: "/apple-touch-icon.png",
  },

  // If you add a manifest later, uncomment:
  // manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} — Personal Injury Attorney`,
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [site.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0F",
  // Optional:
  // colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      {/* Make the global default dark to avoid “white flash” */}
      <body className="min-h-dvh bg-ink text-white font-sans antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>

        <LocalBusinessJsonLd />
        <Navbar />

        <main id="content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
