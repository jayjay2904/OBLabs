import type { Metadata } from "next";
import Link from "next/link";
import { CTA, Eyebrow, ProductVisual, Status } from "@/components/ui";
import { products } from "@/data/site";

export const metadata: Metadata = { title: "Products", description: "Explore CueIQ, Arlo and Echo—three practical AI products from One Better Labs." };
export default function ProductsPage(){return <div className="page-shell"><section className="page-hero"><div className="container"><Eyebrow>Our products</Eyebrow><h1>AI products for the moments that need <span className="gradient-text">more clarity.</span></h1><p className="lede">A connected portfolio built to reduce cognitive load and help people move from uncertainty to one useful next decision.</p></div></section>{products.map(p=><section className="product-feature" key={p.slug}><div className="container product-feature-grid"><div><Status>{p.status}</Status><h2>{p.name}</h2><p className="positioning">{p.positioning}</p><p className="summary">{p.summary}</p><Link className="text-link" href={`/products/${p.slug}`}>Explore {p.name} →</Link></div><ProductVisual slug={p.slug} name={p.name} number={p.number}/></div></section>)}<CTA/></div>}
