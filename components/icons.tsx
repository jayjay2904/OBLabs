type IconProps = { name: string; size?: number };

export function LineIcon({ name, size = 28 }: IconProps) {
  const shared = { width: size, height: size, viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (name === "human") return <svg {...shared}><path d="M16 5v22M10 8c2 1 3 3 3 5s-1 4-3 5m12-10c-2 1-3 3-3 5s1 4 3 5M9 13H6a3 3 0 0 0 0 6h3m14-6h3a3 3 0 0 1 0 6h-3M13 6a3 3 0 0 1 6 0v20a3 3 0 0 1-6 0" /></svg>;
  if (name === "progress") return <svg {...shared}><path d="m5 24 7-8 5 4L27 8"/><path d="M20 8h7v7"/></svg>;
  if (name === "trust") return <svg {...shared}><path d="M16 4 27 8v7c0 7-4.5 11-11 14C9.5 26 5 22 5 15V8l11-4Z"/><path d="m12 16 3 3 6-7"/></svg>;
  if (name === "cueiq") return <svg {...shared}><circle cx="7" cy="8" r="2.5"/><circle cx="25" cy="8" r="2.5"/><circle cx="16" cy="24" r="4"/><path d="M9.5 8h13M8.5 10l5.5 9M23.5 10 18 19M16 21v6M13 24h6"/></svg>;
  if (name === "arlo") return <svg {...shared}><path d="M6 6h20a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H16l-7 5v-5H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Z"/><path d="M8 11h16M8 15h12M8 19h9"/></svg>;
  if (name === "echo") return <svg {...shared}><path d="M4 27v-7h5v7H4Zm9 0V15h5v12h-5Zm9 0V10h5v17h-5Z"/><path d="m4 15 8-7 7 4 9-8M23 4h5v5"/></svg>;
  return <svg {...shared}><path d="M7 8h13a5 5 0 0 1 0 10h-3"/><path d="m21 14-4 4 4 4M12 13H9a5 5 0 0 0 0 10h13"/></svg>;
}
