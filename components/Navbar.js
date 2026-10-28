"use client";

import Logo from "@/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";
import AuthButton from "@/components/AuthButton";

const links = [
  { href: "/", label: "Home" },
  { href: "/our-services", label: "Our Services" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/CC-Catering-menu.pdf", label: "Menu", external: true },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (href) =>
    `block py-2 text-sm font-medium transition hover:text-brand ${
      pathname === href ? "text-brand" : "text-ink"
    }`;

  return (
    <header className="sticky top-0 z-40 bg-cream/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-12 w-auto" />
          <span className="hidden font-heading text-sm font-semibold text-brand sm:block">
            {site.tagline}
          </span>
        </Link>

        {/* Desktop menu */}

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) =>
            l.external ? (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass(l.href)}
              >
                {l.label}
              </a>
            ) : (
              <Link key={l.label} href={l.href} className={linkClass(l.href)}>
                {l.label}
              </Link>
            ),
          )}
          <AuthButton className="text-sm font-medium text-brand transition hover:text-gold" />
          <a
            href={site.phoneLink}
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-cream transition hover:bg-brand-dark"
          >
            📞 {site.phone}
          </a>
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md border border-brand/30 px-3 py-2 text-brand lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-brand/10 bg-cream px-4 pb-4 lg:hidden">
          {links.map((l) =>
            l.external ? (
              (<AuthButton
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-brand"
              />)(
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass(l.href)}
                >
                  {l.label}
                </a>,
              )
            ) : (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className={linkClass(l.href)}
              >
                {l.label}
              </Link>
            ),
          )}
          <a
            href={site.phoneLink}
            className="mt-2 block rounded-full bg-brand px-5 py-2 text-center text-sm font-semibold text-cream"
          >
            📞 {site.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
