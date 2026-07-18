import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return <Link className="logo" href="/" aria-label="One Better Labs home">
    <Image src="/brand/ob-mark.svg" width={48} height={38} alt="" priority />
    {!compact && <span className="logo-text">One Better <b>Labs</b></span>}
  </Link>;
}
