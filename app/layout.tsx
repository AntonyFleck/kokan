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

export const metadata: Metadata = {
  title: "Konkanbhoomi",
  description: "Selling residential plots in kokan",
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
  ].join(", "),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* //////////// */}
        <meta
          property="og:image"
          content="https://konkanbhoomi.com/favicon.ico"
        />
        <meta property="og:site_name" content="Your Website Name" />

        {/* Schema.org JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "Konkanbhoomi Developers",
              url: "https://konkanbhoomi.com/",
              logo: "https://konkanbhoomi.com/favicon.ico",
            }),
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Viewport meta tag for responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="1ExsylMG8UQC2EZT1lLbZiylwCt0p5w1TE4Y9D1UaHg"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* /////////////// */}
        <meta
          name="keywords"
          content={[
            "kokan",
            "kokanbhoomi",
            "konkanbhoomi",
            "kokanbhumi",
            "konkanbhumi",
            "NA plots in konkan",
            "NA plots in kokan",
            "residensial plots in konkan",
            "residensial plots in kokan",
            "bungalow plots in konkan",
            "residensial plots in kokan",
          ].join(", ")}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
