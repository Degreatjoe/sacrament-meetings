import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/meetings", label: "All Meetings" },
  { href: "/meetings/current", label: "Current Sunday" },
];

export default function NavLinks() {
  return (
    <nav className="nav-links" aria-label="Main navigation">
      {links.map((link) => {
        const active = link.href === "/";
        return (
          <Link
            key={link.href}
            href={link.href}
            className={active ? "nav-link active" : "nav-link"}
            aria-current={active ? "page" : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
