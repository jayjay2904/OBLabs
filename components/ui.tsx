import Image from "next/image";
import Link from "next/link";
import { LineIcon } from "./icons";

export function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow"><span />{children}</p>; }

export function SectionIntro({ eyebrow, title, text, align = "left" }: { eyebrow: string; title: string; text?: string; align?: "left" | "center" }) {
  return <div className={`section-intro ${align === "center" ? "center" : ""}`}><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export function Status({ children }: { children: React.ReactNode }) { return <span className="status"><i />{children}</span>; }

const heroImages: Record<string, string> = { arlo: "/arlo/meet-arlo-hero.png", cueiq: "/cueiq/meet-cueiq-hero.png" };
const squareHeroImages: Record<string, string> = { cueiq: "/cueiq/meet-cueiq-square.png" };

export function ProductVisual({ slug, name, number, square }: { slug: string; name: string; number: string; square?: boolean }) {
  const hero = (square && squareHeroImages[slug]) || heroImages[slug];
  if (hero) return <div className={`product-visual visual-${slug}`} aria-hidden="true"><Image src={hero} alt="" fill sizes="(max-width:900px) 92vw, 560px" className="product-visual-image" /><span className="visual-number">{number}</span></div>;
  return <div className={`product-visual visual-${slug}`} aria-hidden="true"><div className="visual-grid"/><span className="visual-number">{number}</span><div className="visual-orbit"><LineIcon name={slug} size={44}/></div><strong>{name}</strong><span className="visual-line" /></div>;
}

export function CTA() {
  return <section className="cta-section"><div className="container"><div className="cta-card"><div><Eyebrow>The next step</Eyebrow><h2>Let’s build one better future.</h2><p>Follow the journey as we create practical AI products designed around real people and real problems.</p></div><div className="button-row"><Link className="button" href="/products">Explore our products <span>→</span></Link><Link className="button button-ghost" href="/contact">Get in touch <span>↗</span></Link></div></div></div></section>;
}
