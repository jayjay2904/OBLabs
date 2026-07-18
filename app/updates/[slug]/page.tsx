import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow } from "@/components/ui";
import { updates } from "@/data/site";
export function generateStaticParams(){return updates.map(u=>({slug:u.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const u=updates.find(x=>x.slug===slug);return u?{title:u.title,description:u.excerpt}:{}}
export default async function UpdatePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const u=updates.find(x=>x.slug===slug);if(!u)notFound();return <div className="page-shell"><article className="page-hero"><div className="container article"><Eyebrow>{u.category}</Eyebrow><h1>{u.title}</h1><p className="article-intro">{u.excerpt}</p><div className="article-body">{u.body.map(p=><p key={p}>{p}</p>)}<Link className="button button-ghost" href="/updates">← All updates</Link></div></div></article></div>}
