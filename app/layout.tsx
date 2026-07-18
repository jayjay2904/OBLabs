import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/data/site";
import "./globals.css";

const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "One Better Labs — Practical AI, built around people", template: "%s — One Better Labs" },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { title: "One Better Labs", description: site.description, url: site.url, siteName: site.name, type: "website" },
  twitter: { card: "summary_large_image", title: "One Better Labs", description: site.description },
  icons: { icon: "/brand/ob-mark.svg", apple: "/brand/ob-mark.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const org = { "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url, email: site.email, logo: `${site.url}/brand/ob-labs-logo.svg`, description: site.description };
  return <html lang="en" className={space.variable}><body><a href="#main-content" className="skip-link">Skip to content</a><Header /><main id="main-content">{children}</main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} /></body></html>;
}
