import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Libre_Franklin } from "next/font/google";
import "./globals.css";
import { education, profile, recognition } from "@/lib/data";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
  style: ["normal", "italic"],
});

const body = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const siteUrl = "https://haidergillani.com";
const title = `${profile.name} | AI Engineer at HP`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${profile.name}` },
  description: profile.description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  keywords: [
    "Haider Gillani",
    "AI engineer",
    "AI engineer Pakistan",
    "Pakistani AI engineer",
    "AI Engineering Lead HP",
    "HP AI",
    "machine learning engineer",
    "LLM engineer",
    "agentic AI",
    "miQ",
    "StarcAI",
    "Minerva University",
    "Cadet College Hasanabdal",
    "San Francisco",
    "Pakistan Mission to the United Nations",
  ],
  alternates: { canonical: "/" },
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
  openGraph: {
    type: "profile",
    firstName: "Haider",
    lastName: "Gillani",
    title,
    description: profile.description,
    url: siteUrl,
    siteName: profile.name,
    locale: "en_US",
    images: [{ url: "/og", width: 1200, height: 630, alt: `${profile.name}, AI engineer` }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.description,
    images: ["/og"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#f6f1e7",
};

// Structured data so search engines understand who this page is about.
const personId = `${siteUrl}/#person`;
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      givenName: "Haider",
      familyName: "Gillani",
      url: siteUrl,
      image: `${siteUrl}${profile.photo.src}`,
      description: profile.description,
      jobTitle: "AI Engineering Lead",
      email: `mailto:${profile.email}`,
      nationality: { "@type": "Country", name: "Pakistan" },
      worksFor: { "@type": "Organization", name: "HP Inc.", url: "https://www.hp.com" },
      alumniOf: education.map((e) => ({
        "@type": e.orgId === "minerva" ? "CollegeOrUniversity" : "EducationalOrganization",
        name: e.school,
      })),
      award: recognition.map((r) => r.what),
      knowsAbout: [
        "Artificial intelligence",
        "Machine learning",
        "Large language models",
        "Agentic AI",
        "Natural language processing",
        "Sentiment analysis",
        "Real-time audio",
        "WebRTC",
        "MLOps",
      ],
      sameAs: [profile.links.linkedin, profile.links.github],
    },
    {
      "@type": "Organization",
      name: "miQ",
      url: "https://trymiq.com",
      founder: { "@id": personId },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: profile.name,
      inLanguage: "en",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: title,
      mainEntity: { "@id": personId },
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
