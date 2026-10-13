import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Libre_Franklin } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

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
const title = `${profile.name}, ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: profile.description,
  authors: [{ name: profile.name }],
  openGraph: {
    title,
    description: profile.description,
    url: siteUrl,
    siteName: profile.name,
    type: "website",
    images: [{ url: "/og", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.description,
    images: ["/og"],
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='18' fill='%23F6F1E7'/%3E%3Ccircle cx='50' cy='50' r='15' fill='%2323574A'/%3E%3Ccircle cx='50' cy='50' r='27' fill='none' stroke='%2323574A' stroke-width='3'/%3E%3C/svg%3E",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f1e7",
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
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
