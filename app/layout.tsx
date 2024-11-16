import type { Metadata } from "next";
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
  title:
    "Konkanbhoomi selling residensial plots in konkan,bungalow plots in konkan,residensial plots in konkan,residensial plots in kokan,NA plots in kokan,kokan,kokanbhoomi,konkanbhoomi,kokanbhumi,konkanbhumi,NA plots in konkan",
  description:
    "selling residensial plots in konkan,Konkanbhoomi selling residensial plots in konkan,bungalow plots in konkan,residensial plots in konkan,residensial plots in kokan,NA plots in kokan,kokan,kokanbhoomi,konkanbhoomi,kokanbhumi,konkanbhumi,NA plots in konkan",
  keywords: [
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
      </body>
    </html>
  );
}
