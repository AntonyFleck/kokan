// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Open Graph (OG) meta tags */}
          <meta property="og:title" content="Konkanbhoomi Developers" />
          <meta
            property="og:description"
            content="Selling residential plots in kokan"
          />
          <meta property="og:url" content="https://konkanbhoomi.com/" />
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
