import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Eyebrow } from "@/components/ui";
import { site } from "@/data/site";
export const metadata:Metadata={title:"Contact",description:"Contact One Better Labs about products, partnerships and early access."};
export default function ContactPage(){return <div className="page-shell"><section className="page-hero"><div className="container"><Eyebrow>Get in touch</Eyebrow><h1>Start a <span className="gradient-text">useful conversation.</span></h1><p className="lede">Product questions, early-access interest, thoughtful partnerships or a simple hello—we’d like to hear from you.</p></div></section><section className="content-section"><div className="container contact-layout"><aside className="contact-aside"><h2>What would you like to explore?</h2><p>Use the form for product enquiries, partnerships, early-access interest or general questions.</p><p>You can also email us directly at <a href={`mailto:${site.email}`}>{site.email}</a>.</p></aside><ContactForm/></div></section></div>}
