"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-white/10">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="font-serif text-xl text-white">
            Farida Law SD<span className="text-gold">.</span>
          </span>
          <span className="hidden sm:block text-xs tracking-premium text-white/60">
            ATTORNEY
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm no-underline ${
                pathname === item.href
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <ButtonLink href="/consultation-request/" size="sm">
            Request Consultation
          </ButtonLink>
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          <Container className="py-4 flex flex-col gap-3">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white no-underline"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/consultation-request/" className="mt-2">
              Request Consultation
            </ButtonLink>
          </Container>
        </div>
      )}
    </header>
  );
}
