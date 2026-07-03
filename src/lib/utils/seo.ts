import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants/site";

interface MetadataParams {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
  path?: string;
}

export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
  keywords,
  path = "",
}: MetadataParams): Metadata {
  const metaTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;

  const metaDescription = description ?? siteConfig.description;
  const metaImage = image ?? siteConfig.ogImage;
  const url = `${siteConfig.url}${path}`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: keywords ?? [...siteConfig.keywords],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: siteConfig.name,
      title: metaTitle,
      description: metaDescription,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: "@livetech_in",
    },
  };
}
