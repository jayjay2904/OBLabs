import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui";
import { updates } from "@/data/site";
export const metadata:Metadata={title:"Updates",description:"Development notes, product thinking and company news from One Better Labs."};
export default function UpdatesPage(){return <div className="page-shell"><section className="page-hero"><div className="container"><Eyebrow>From the lab</Eyebrow><h1>Notes on building <span className="gradient-text">one better.</span></h1><p className="lede">Honest development updates, product thinking and lessons from the journey. No manufactured milestones.</p></div></section><section className="content-section"><div className="container updates-grid">{updates.map(u=><Link className="update-card" href={`/updates/${u.slug}`} key={u.slug}><small>{u.category}</small><h2>{u.title}</h2><p>{u.excerpt}</p><span>Read note →</span></Link>)}</div></section></div>}
