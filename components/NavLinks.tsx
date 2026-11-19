"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/meetings", label: "All Meetings" },
  { href: "/meetings/current", label: "Current Sunday" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex min-h-12 justify-center gap-8 bg-ward-green text-white max-sm:gap-2 print:hidden" aria-label="Main navigation">
      {links.map((link) => {
        const active =
          link.href === "/"
            ? pathname === "/"
            : link.href === "/meetings"
              ? pathname === link.href || /^\/meetings\/\d+$/.test(pathname)
              : pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`grid place-items-center border-b-[3px] px-2 text-sm transition-colors max-sm:text-xs ${
              active
                ? "border-ward-gold text-white"
                : "border-transparent text-white/85 hover:border-white/50 hover:text-white"
            }`}
            aria-current={active ? "page" : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
