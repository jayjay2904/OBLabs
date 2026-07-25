import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/data/site";
import "./globals.css";
import "./arlo.css";

const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Meet Arlo — Your AI Companion for ADHD", template: "%s — One Better Labs" },
  description: "Meet Arlo, a calm and supportive AI companion for ADHD. One better step, every day.",
  alternates: { canonical: "/" },
  openGraph: { title: "Meet Arlo — Your AI Companion for ADHD", description: "Support that understands. Not another productivity app. Just one better step, every day.", url: site.url, siteName: site.name, type: "website", images: [{ url: "/arlo/meet-arlo-hero.png", width: 1792, height: 1024, alt: "Meet Arlo, your AI companion for ADHD" }] },
  twitter: { card: "summary_large_image", title: "Meet Arlo — Your AI Companion for ADHD", description: "Support that understands. One better step, every day.", images: ["/arlo/meet-arlo-hero.png"] },
  icons: { icon: "/brand/ob-mark.svg", apple: "/brand/ob-mark.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const org = { "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url, email: site.email, logo: `${site.url}/brand/ob-labs-logo.svg`, description: site.description };
  return <html lang="en" className={space.variable}><body><a href="#main-content" className="skip-link">Skip to content</a><Header /><main id="main-content">{children}</main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} /></body></html>;
}
