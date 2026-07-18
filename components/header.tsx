"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation } from "@/data/site";
import { Logo } from "./logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="nav-shell">
      <Logo />
      <button className="menu-button" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}><span /><span /><span className="sr-only">Toggle menu</span></button>
      <nav id="primary-nav" className={open ? "nav-open" : ""} aria-label="Primary navigation">
        {navigation.map((item) => <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
        <Link className="button button-small" href="/contact" onClick={() => setOpen(false)}>Get in touch <span>↗</span></Link>
      </nav>
    </div>
  </header>;
}
