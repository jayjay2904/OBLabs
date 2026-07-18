import Link from "next/link";
import { products, site } from "@/data/site";
import { Logo } from "./logo";

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-brand"><Logo /><p>Practical AI products designed around real people and real problems.</p><a href={`mailto:${site.email}`}>{site.email}</a></div>
      <div><h2>Products</h2>{products.map(p => <Link key={p.slug} href={`/products/${p.slug}`}>{p.name}</Link>)}</div>
      <div><h2>Company</h2><Link href="/our-story">Our story</Link><Link href="/#philosophy">Philosophy</Link><Link href="/updates">Updates</Link><Link href="/contact">Contact</Link></div>
      <div><h2>Legal</h2><Link href="/privacy">Privacy</Link><Link href="/cookies">Cookies</Link><Link href="/terms">Terms</Link></div>
    </div>
    <div className="container footer-base"><span>© {new Date().getFullYear()} One Better Labs</span><span>One better decision at a time.</span></div>
  </footer>;
}
