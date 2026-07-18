type IconProps = { name: string; size?: number };

export function LineIcon({ name, size = 28 }: IconProps) {
  const shared = { width: size, height: size, viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (name === "human") return <svg {...shared}><path d="M16 5v22M10 8c2 1 3 3 3 5s-1 4-3 5m12-10c-2 1-3 3-3 5s1 4 3 5M9 13H6a3 3 0 0 0 0 6h3m14-6h3a3 3 0 0 1 0 6h-3M13 6a3 3 0 0 1 6 0v20a3 3 0 0 1-6 0" /></svg>;
  if (name === "progress") return <svg {...shared}><path d="m5 24 7-8 5 4L27 8"/><path d="M20 8h7v7"/></svg>;
  if (name === "trust") return <svg {...shared}><path d="M16 4 27 8v7c0 7-4.5 11-11 14C9.5 26 5 22 5 15V8l11-4Z"/><path d="m12 16 3 3 6-7"/></svg>;
  if (name === "cueiq") return <svg {...shared}><circle cx="11" cy="11" r="6"/><circle cx="22" cy="21" r="5"/><path d="m15.5 15.5 3 3M22 6v7M18.5 9.5h7"/></svg>;
  if (name === "arlo") return <svg {...shared}><path d="M7 23c-2-2-3-5-3-8a11 11 0 0 1 22 0c0 6-4 11-10 11h-5l-5 3 1-6Z"/><path d="M11 15h.01M16 15h.01M21 15h.01"/></svg>;
  return <svg {...shared}><path d="M7 8h13a5 5 0 0 1 0 10h-3"/><path d="m21 14-4 4 4 4M12 13H9a5 5 0 0 0 0 10h13"/></svg>;
}
