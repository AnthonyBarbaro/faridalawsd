"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Container from "@/components/Container";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { Menu, X, Phone } from "lucide-react";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href);
}

/**
 * Keep nav on one line by shortening labels until very large screens.
 * Tune these as you like.
 */
function renderNavLabel(label: string) {
  const short =
    label === "Practice Areas"
      ? "Practice"
      : label === "Client Intake"
      ? "Intake"
      : label === "Consultation"
      ? "Consult"
      : label;

  return (
    <>
      <span className="hidden 2xl:inline whitespace-nowrap">{label}</span>
      <span className="2xl:hidden whitespace-nowrap">{short}</span>
    </>
  );
}


export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const activeMap = useMemo(() => {
    const map = new Map<string, boolean>();
    for (const item of site.nav) map.set(item.href, isActivePath(pathname, item.href));
    return map;
  }, [pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Desktop: add subtle shadow when scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50",
          "border-b border-white/10",
          "backdrop-blur supports-[backdrop-filter]:bg-black/55",
          scrolled ? "bg-black/80 shadow-[0_10px_40px_rgba(0,0,0,0.45)]" : "bg-black/65",
        ].join(" ")}
      >
        {/* Thin premium accent line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/70 to-sky-300/50" />

        <Container className="h-16">
          <div className="flex h-full items-center gap-6">
            {/* LEFT: Brand (locked to far-left, never wraps) */}
            <Link
              href="/"
              className="group flex items-center gap-3 no-underline shrink-0"
              aria-label="Farida Law San Diego Home"
            >
              <span
                className="
                  inline-flex h-9 w-9 items-center justify-center
                  rounded-xl bg-white/8 ring-1 ring-white/10
                  transition group-hover:ring-gold/30 group-hover:bg-white/10
                "
                aria-hidden="true"
              >
                <span className="font-serif text-lg text-white">F</span>
              </span>

          <div className="flex flex-col leading-none">
            <span className="font-serif text-lg sm:text-xl text-white whitespace-nowrap">
              Farida Law<span className="text-gold"></span>
            </span>

            <span className="hidden xl:block text-[10px] tracking-[0.26em] text-white/65 uppercase">
              Personal Injury
            </span>

            <span className="hidden xl:block text-[10px] tracking-[0.22em] text-white/45 uppercase mt-[2px]">
              Attorney
            </span>
          </div>
            </Link>

            {/* CENTER: Desktop nav (spread out, premium spacing) */}
            <nav className="hidden lg:flex flex-1 justify-center min-w-0">
              {/* 
                Max width makes the nav feel balanced + spaced, not cramped.
                justify-between spreads items across that width.
              */}
              <div className="w-full max-w-[680px] xl:max-w-[720px] 2xl:max-w-[800px] flex items-center justify-between">

                {site.nav.map((item) => {
                  const active = activeMap.get(item.href) ?? false;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={[
                        "relative flex-none whitespace-nowrap no-underline transition",
                        "text-[13px] xl:text-sm",
                        active ? "text-white" : "text-white/75 hover:text-white",
                        // The padding below is what makes it feel “not tight”
                        "px-4 py-2 rounded-2xl",
                        "hover:bg-white/7",
                      ].join(" ")}
                    >
                      {renderNavLabel(item.label)}

                      {/* Active underline (inside padding so it looks aligned) */}
                      <span
                        className={[
                          "pointer-events-none absolute left-4 right-4 -bottom-1 h-[2px] rounded-full transition",
                          active
                            ? "bg-gradient-to-r from-gold via-gold to-sky-300 opacity-100"
                            : "bg-transparent opacity-0",
                        ].join(" ")}
                        aria-hidden="true"
                      />
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* RIGHT: Desktop actions (locked to far-right) */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <a
                href={`tel:${site.contact.phoneE164}`}
                className="
                  inline-flex items-center gap-2
                  rounded-2xl border border-white/10
                  bg-white/5 px-4 py-2
                  text-sm text-white/85
                  hover:bg-white/10 hover:border-white/15
                  transition whitespace-nowrap
                "
                aria-label={`Call ${site.contact.phoneDisplay}`}
              >
                <Phone size={16} className="text-sky-300" />

                <span className="xl:hidden">Call</span>
              </a>

              <ButtonLink href="/consultation-request/" size="sm" variant="primary">
                <span className="hidden xl:inline">Request Consultation</span>
                <span className="xl:hidden">Consultation</span>
              </ButtonLink>
            </div>

            {/* MOBILE: call + hamburger */}
            <div className="lg:hidden ml-auto flex items-center gap-2">
              <a
                href={`tel:${site.contact.phoneE164}`}
                className="
                  inline-flex h-10 w-10 items-center justify-center
                  rounded-xl border border-white/10 bg-white/5
                  text-white hover:bg-white/10 transition
                "
                aria-label={`Call ${site.contact.phoneDisplay}`}
              >
                <Phone size={18} className="text-sky-300" />
              </a>

              <button
                className="
                  inline-flex h-10 w-10 items-center justify-center
                  rounded-xl border border-white/10 bg-white/5
                  text-white hover:bg-white/10 transition
                "
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                {open ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* MOBILE overlay + drawer */}
      <div
        className={["lg:hidden", open ? "pointer-events-auto" : "pointer-events-none"].join(" ")}
        aria-hidden={!open}
      >
        {/* Overlay */}
        <button
          className={[
            "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={() => setOpen(false)}
          aria-label="Close menu overlay"
        />

        {/* Drawer */}
        <div
          className={[
            "fixed right-0 top-0 z-50 h-dvh w-[86%] max-w-sm",
            "border-l border-white/10 bg-black/80 backdrop-blur",
            "transition-transform duration-200 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="h-px w-full bg-gradient-to-r from-gold/70 via-sky-300/50 to-transparent" />

          <div className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.22em] text-white/60">MENU</p>
                <p className="mt-1 font-serif text-xl text-white whitespace-nowrap">
                  Farida Law San Diego<span className="text-gold"></span>
                </p>
                   <p className="mt-1 text-xs text-white/75">Personal Injury Attorney</p>
                <p className="mt-1 text-xs text-white/60">San Diego, CA</p>
              </div>

              <button
                className="
                  inline-flex h-10 w-10 items-center justify-center
                  rounded-xl border border-white/10 bg-white/5
                  text-white hover:bg-white/10 transition
                "
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X />
              </button>
            </div>

            <div className="mt-6 space-y-1">
              {site.nav.map((item) => {
                const active = activeMap.get(item.href) ?? false;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={[
                      "flex items-center justify-between rounded-2xl px-4 py-3 no-underline transition",
                      active
                        ? "bg-white/10 text-white ring-1 ring-gold/25"
                        : "text-white/80 hover:bg-white/10 hover:text-white",
                    ].join(" ")}
                  >
                    <span className="text-sm whitespace-nowrap">{item.label}</span>
                    <span
                      className={["h-2 w-2 rounded-full", active ? "bg-gold" : "bg-transparent"].join(
                        " "
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-white/60">Contact</p>

              <a
                href={`tel:${site.contact.phoneE164}`}
                className="mt-2 block text-sm text-white/85 hover:text-white whitespace-nowrap"
              >
                {site.contact.phoneDisplay}
              </a>

              <a
                href={`mailto:${site.contact.email}`}
                className="mt-2 block text-sm text-white/85 hover:text-white break-all"
              >
                {site.contact.email}
              </a>

              <div className="mt-4">
                <ButtonLink href="/consultation-request/" className="w-full" size="md">
                  Request Consultation
                </ButtonLink>
              </div>
            </div>

            <p className="mt-6 text-[11px] text-white/50 leading-relaxed">
              Attorney Advertising. This website is for informational purposes only and does not create an
              attorney–client relationship.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
