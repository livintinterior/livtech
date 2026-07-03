export const siteConfig = {
  name: "Livtech",
  tagline: "Transforming Ideas into Powerful Digital Solutions",
  description:
    "Livetech.in is a modern technology company delivering complete digital transformation solutions for startups, businesses, enterprises, educational institutions, healthcare organizations, and government agencies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://livetech.in",
  ogImage: "/images/og-image.png",
  email: {
    hello: "info@livtech.in",
    support: "support@livetech.in",
    sales: "sales@livetech.in",
  },
  phone: "+91-8074991699",
  whatsapp: "+91-8074991699",
  address: {
    line1: "123, Tech Park, Cyber City",
    line2: "Hyderabad, Telangana 500081",
    country: "India",
  },
  hours: "Monday to Saturday, 9 AM – 7 PM IST",
  social: {
    linkedin: "https://linkedin.com/company/livetech-in",
    instagram: "https://instagram.com/livetech.in",
    facebook: "https://facebook.com/livetech.in",
    twitter: "https://x.com/livetech_in",
    github: "https://github.com/livetech-in",
    youtube: "https://youtube.com/@livetech-in",
  },
  keywords: [
    "web development",
    "mobile app development",
    "UI/UX design",
    "digital marketing",
    "SEO",
    "cloud solutions",
    "AI solutions",
    "custom software development",
    "cybersecurity",
    "IT infrastructure",
    "Hyderabad",
    "India",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
