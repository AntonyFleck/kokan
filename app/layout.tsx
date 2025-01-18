import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Konkanbhoomi",
//   description: "Selling residential plots in kokan",
//   keywords: [
//     "kokanbhoomi",
//     "konkanbhoomi",
//     "kokanbhumi",
//     "konkanbhumi",
//     "NA plots in konkan",
//     "NA plots in kokan",
//     "residential plots in konkan",
//     "residential plots in kokan",
//     "bungalow plots in konkan",
//   ].join(", "),
// };

export const metadata: Metadata = {
  title: "Konkanbhoomi Developers",
  description: "Selling residential plots in kokan",

  // 2. Search Engine Optimization (SEO) Metadata
  metadataBase: new URL("https://www.konkanbhoomi.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "es-ES": "/es-ES",
    },
  },

  // 3. Robots and Crawling Directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 4. Verification Metadata for Search Engines
  verification: {
    google: "1ExsylMG8UQC2EZT1lLbZiylwCt0p5w1TE4Y9D1UaHg",
  },

  // 5. Open Graph Metadata for Social Media Sharing
  openGraph: {
    title: "Konkanbhoomi Developers",
    description: "Selling residential plots in kokan",
    url: "https://www.konkanbhoomi.com",
    siteName: "konkanbhoomi",
    images: [
      {
        url: "/favicon.ico", // Recommended size: 1200x630 pixels
        width: 1200,
        height: 630,
        alt: "Your Application Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 7. Application-Specific Metadata
  applicationName: "Konkanbhoomi Developers",
  authors: [
    { name: "Konkanbhoomi", url: "https://www.konkanbhoomi.com/about" },
  ],
  generator: "Next.js",
  keywords: [
    "kokanbhoomi",
    "konkanbhoomi",
    "kokanbhumi",
    "konkanbhumi",
    "NA plots in konkan",
    "NA plots in kokan",
    "residential plots in konkan",
    "residential plots in kokan",
    "bungalow plots in konkan",
  ],

  // 8. Manifest and Icons
  //manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag */}
        <script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5Q4VV378');
      `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5Q4VV378"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>

        {children}
        <Analytics />
      </body>
    </html>
  );
}
