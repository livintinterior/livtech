import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { JsonLd } from "@/components/shared/JsonLd";
import { siteConfig } from "@/lib/constants/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} -- ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  alternates: { canonical: siteConfig.url },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} -- ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: `${siteConfig.name} -- ${siteConfig.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@livetech_in",
    creator: "@livetech_in",
    title: `${siteConfig.name} -- ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, alt: siteConfig.name }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body style={{ background: "#ffffff", color: "#0a0a08" }}>
        <JsonLd data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${siteConfig.url}/#organization`,
              name: siteConfig.name,
              url: siteConfig.url,
              logo: { "@type": "ImageObject", url: `${siteConfig.url}/images/logo.png` },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: siteConfig.phone,
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Telugu", "Hindi"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address.line1,
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                postalCode: "500081",
                addressCountry: "IN",
              },
              sameAs: [
                siteConfig.social.linkedin,
                siteConfig.social.instagram,
                siteConfig.social.twitter,
                siteConfig.social.facebook,
                siteConfig.social.github,
              ],
            },
            {
              "@type": "WebSite",
              "@id": `${siteConfig.url}/#website`,
              url: siteConfig.url,
              name: siteConfig.name,
              description: siteConfig.description,
              publisher: { "@id": `${siteConfig.url}/#organization` },
              potentialAction: {
                "@type": "SearchAction",
                target: { "@type": "EntryPoint", urlTemplate: `${siteConfig.url}/search?q={search_term_string}` },
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "LocalBusiness",
              "@id": `${siteConfig.url}/#localbusiness`,
              name: siteConfig.name,
              url: siteConfig.url,
              telephone: siteConfig.phone,
              email: siteConfig.email.hello,
              image: `${siteConfig.url}/images/logo.png`,
              priceRange: "$$",
              openingHours: "Mo-Sa 09:00-19:00",
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address.line1,
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                postalCode: "500081",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 17.385,
                longitude: 78.4867,
              },
            },
          ],
        }} />
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingContact />
        </Providers>
      </body>
    </html>
  );
}
