"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ASSETS, BRAND_ALT, NAV_MAIN, SITE } from "@/data/site";

const navLinkClass =
  "block whitespace-nowrap px-2 py-2 text-[15px] font-normal uppercase tracking-wide text-[var(--color-header-middle-bg)] transition-colors duration-300 hover:text-[var(--color-content-heading)] lg:px-3 lg:text-[16px] xl:px-4";

function DesktopNav() {
  return (
    <ul className="hidden min-[901px]:flex min-[901px]:flex-wrap min-[901px]:items-center min-[901px]:justify-end min-[901px]:gap-0">
      {NAV_MAIN.map((item) =>
        item.children ? (
          <li key={item.title} className="group relative">
            <button
              type="button"
              className={cn(navLinkClass, "flex items-center gap-0.5")}
              aria-haspopup="menu"
            >
              {item.title}
              <ChevronDown className="h-3 w-3 opacity-70" aria-hidden />
            </button>
            <ul
              className={cn(
                "pointer-events-none absolute right-0 top-full z-50 min-w-[240px] origin-top scale-y-95 opacity-0 shadow-[0_5px_15px_rgba(0,0,0,.15)] transition-all duration-300",
                "border border-[var(--color-content-border)] bg-[var(--color-header-middle-bg)] py-2 text-[var(--color-header-middle-text)]",
                "group-hover:pointer-events-auto group-hover:scale-y-100 group-hover:opacity-100",
              )}
              role="menu"
            >
              {item.children.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="block px-4 py-2 text-[15px] font-normal normal-case tracking-normal transition-colors hover:text-white"
                    role="menuitem"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ) : (
          <li key={item.title}>
            <Link
              href={item.href ?? "#"}
              className={cn(
                navLinkClass,
                item.href === "/" && "text-[var(--color-header-middle-bg)]",
              )}
            >
              {item.title}
            </Link>
          </li>
        ),
      )}
    </ul>
  );
}

function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleClose = () => {
    setExpanded(null);
    onClose();
  };

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-[200] bg-black/45 backdrop-blur-[2px] transition-opacity min-[901px]:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={handleClose}
        aria-hidden
      />
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-[201] w-[min(100%,340px)] overflow-y-auto bg-[var(--color-header-middle-bg)] text-[var(--color-header-middle-text)] shadow-xl transition-transform duration-300 min-[901px]:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="border-b border-white/15 bg-white px-4 py-3">
          <Image
            src={ASSETS.logoBanner}
            alt={BRAND_ALT}
            width={ASSETS.logoBannerWidth}
            height={ASSETS.logoBannerHeight}
            className="h-11 w-auto max-w-full object-contain object-left"
          />
        </div>
        <div className="flex items-center justify-between border-b border-white/15 px-4 py-4">
          <span className="text-lg font-semibold uppercase tracking-wide">
            Menu
          </span>
          <button
            type="button"
            onClick={handleClose}
            className="rounded-md p-2 hover:bg-white/10"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col px-2 py-4">
          {NAV_MAIN.map((item) =>
            item.children ? (
              <div key={item.title} className="border-b border-white/10">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-3 py-3 text-left text-[17px] font-semibold uppercase tracking-wide"
                  onClick={() =>
                    setExpanded((e) => (e === item.title ? null : item.title))
                  }
                  aria-expanded={expanded === item.title}
                >
                  {item.title}
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform",
                      expanded === item.title ? "rotate-180" : "",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-[max-height] duration-300",
                    expanded === item.title ? "max-h-[480px]" : "max-h-0",
                  )}
                >
                  <ul className="pb-3 pl-4">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          onClick={handleClose}
                          className="block py-2 text-[15px] text-white/90 hover:text-white"
                        >
                          {c.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.title}
                href={item.href ?? "#"}
                onClick={handleClose}
                className="border-b border-white/10 px-3 py-3 text-[17px] font-semibold uppercase tracking-wide"
              >
                {item.title}
              </Link>
            ),
          )}
        </nav>
      </div>
    </>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className="relative z-[111] w-full shadow-[0_1px_0_rgba(0,0,0,0.08)]"
      id="page-header"
    >
      {/* Contact bar — left aligned */}
      <div className="bg-[var(--color-header-top-bg)] text-[var(--color-header-top-text)]">
        <div className="mx-auto flex max-w-[var(--site-content-width)] flex-wrap items-center justify-start gap-x-6 gap-y-1 px-6 py-2 text-[15px] leading-9 lg:gap-x-8">
          <a
            href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 hover:text-white"
          >
            <Phone className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
            <span>{SITE.phones[0]}</span>
          </a>
          <a
            href={`tel:${SITE.phones[1].replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 hover:text-white"
          >
            <Phone className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
            <span>{SITE.phones[1]}</span>
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2 hover:text-white"
          >
            <Mail className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
            <span>{SITE.email}</span>
          </a>
        </div>
      </div>

      {/* Logo left + navigation right (single row) */}
      <div className="border-b border-[var(--color-content-border)] bg-white">
        <div className="mx-auto flex max-w-[var(--site-content-width)] items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:gap-6">
          <Link
            href="/"
            className="inline-flex min-w-0 flex-1 items-center pr-2 min-[901px]:flex-none min-[901px]:pr-0"
          >
            <Image
              src={ASSETS.logoBanner}
              alt={BRAND_ALT}
              width={ASSETS.logoBannerWidth}
              height={ASSETS.logoBannerHeight}
              className="h-[58px] w-auto max-w-full object-contain object-left sm:h-[70px] lg:h-[82px] xl:h-[90px] min-[901px]:max-w-[520px]"
              priority
              quality={95}
            />
          </Link>

          <div className="flex shrink-0 items-center">
            <button
              type="button"
              className="rounded-md p-2 hover:bg-black/[0.04] min-[901px]:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-7 w-7 text-[var(--color-header-middle-bg)]" />
            </button>
            <nav className="hidden min-[901px]:block" aria-label="Primary">
              <DesktopNav />
            </nav>
          </div>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
