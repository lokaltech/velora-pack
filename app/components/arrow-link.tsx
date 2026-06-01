import Link from "next/link";

export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1 text-sm font-semibold text-velora-blue transition-colors hover:text-velora-navy ${className}`}
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
