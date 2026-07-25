import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CTA, Eyebrow, ProductVisual, SectionIntro, Status } from "@/components/ui";
import { ArloProductPage } from "@/components/arlo-product-page";
import { products } from "@/data/site";

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  if (slug === "arlo") return {
    title: "Meet Arlo — Your AI Companion for ADHD",
    description: "Support that understands. Not another productivity app. Just one better step, every day.",
    openGraph: { images: [{ url: "/arlo/meet-arlo-hero.png", width: 1792, height: 1024, alt: "Meet Arlo, your AI companion for ADHD" }] },
  };
  return { title: product.name, description: product.positioning };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  if (slug === "arlo") return <ArloProductPage />;

  return <div className="page-shell">
    <section className="product-page-hero"><div className="container product-page-hero-grid"><div><Status>{product.status}</Status><h1>{product.name}</h1><p className="positioning">{product.positioning}</p><p className="promise">{product.promise}</p><div className="button-row" style={{ marginTop: 32 }}><Link className="button" href="/contact">Follow the journey <span>↗</span></Link><Link className="button button-ghost" href="/products">All products <span>→</span></Link></div></div><ProductVisual slug={product.slug} name={product.name} number={product.number} /></div></section>
    <section className="content-section"><div className="container editorial-grid"><div><Eyebrow>Built for real life</Eyebrow><h2>Start with the problem. Remove the friction.</h2></div><div className="editorial-copy"><p>{product.audience}</p><p>{product.problem}</p><p>{product.approach}</p></div></div></section>
    <section className="content-section"><div className="container"><SectionIntro eyebrow="Product direction" title="What we’re exploring." text="These capabilities describe the current direction of the product while it remains in development." /><div className="capability-grid">{product.capabilities.map((capability, index) => <div className="capability" key={capability}><span>0{index + 1}</span><p>{capability}</p></div>)}</div></div></section>
    <section className="content-section"><div className="container"><SectionIntro eyebrow="Product principles" title={`How ${product.name} should feel.`} /><div className="principle-cards">{product.principles.map((principle) => <div className="principle-card" key={principle.title}><h3>{principle.title}</h3><p>{principle.text}</p></div>)}</div></div></section>
    <section className="content-section"><div className="container status-panel"><div><Status>{product.status}</Status><h2>Built carefully. Shared honestly.</h2><p>{product.name} is currently in development. Join the OB Labs journey or get in touch to discuss early interest.</p></div><Link className="button" href="/contact">Get in touch <span>↗</span></Link></div></section>
    <CTA />
  </div>;
}
