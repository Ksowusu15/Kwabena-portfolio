import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { profile } from "@/data/site";
import { SITE_URL } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} | Software Engineer`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Portfolio of Kwabena Owusu Soadwa, a software engineer and full-stack developer in Accra, Ghana building reliable web applications with Python, Flask, JavaScript, SQL, React, and Next.js.",
  keywords: [
    "Kwabena Owusu Soadwa",
    "Software Engineer Ghana",
    "Full-Stack Developer Accra",
    "Python Developer",
    "Flask Developer",
    "React Developer",
    "Next.js Developer",
  ],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  publisher: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${profile.name} | Software Engineer`,
    description: "Building practical, polished, production-ready web applications.",
    url: SITE_URL,
    siteName: `${profile.name} Portfolio`,
    locale: "en_GH",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${profile.name} portfolio` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Software Engineer`,
    description: "Building practical, polished, production-ready web applications.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: SITE_URL,
  image: `${SITE_URL}/images/profile.png`,
  jobTitle: "Software Engineer and Full-Stack Developer",
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Accra", addressCountry: "GH" },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: ["Python", "Flask", "JavaScript", "TypeScript", "React", "Next.js", "SQL", "MySQL"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("portfolio-theme");var d=t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
