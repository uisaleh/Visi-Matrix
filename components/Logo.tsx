import Link from "next/link";

/** VisiMatrix mark: the V from the existing logo on a flat accent square. */
export function LogoMark({ size = 26 }: { size?: number }) {
  return (
    <svg className="vm-logo__mark" width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" />
      <path fillRule="evenodd" clipRule="evenodd" d="M6.5 6H11.1L16 18.8L20.9 6H25.5L16 26L6.5 6Z" />
    </svg>
  );
}

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="vm-logo" aria-label="VisiMatrix home">
      <LogoMark />
      <span>VisiMatrix</span>
    </Link>
  );
}
