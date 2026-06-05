"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

import { QuotationLink } from "./quotation-trigger";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#about", label: "About Us" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{
          y: -20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm"
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-[72px] sm:px-6 lg:px-8">
          <Link
            href="/"
            className="relative h-10 w-28 shrink-0 sm:h-11 sm:w-32 md:w-36"
            onClick={closeMenu}
          >
            <Image
              src="/images/logo-simplified2.png"
              alt="Velora Pack"
              fill
              className="object-contain object-left"
              sizes="(max-width: 640px) 112px, 144px"
              priority
            />
          </Link>

          <ul className="hidden items-center gap-5 xl:gap-7 lg:flex">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="whitespace-nowrap text-sm font-medium text-text/70 transition-colors hover:text-velora-navy"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <QuotationLink className="hidden rounded-md bg-velora-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-velora-navy/90 md:inline-flex">
              Request Quotation
            </QuotationLink>
            <motion.button
              whileTap={{
                scale: 0.95,
              }}
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-text/70 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </nav>

        {/* <div
        id="mobile-nav"
        className={`fixed inset-0 top-16 z-40 lg:hidden sm:top-[72px] ${
          menuOpen ? "visible" : "invisible"
        }`}
        aria-hidden={!menuOpen}
      > */}
      </motion.header>
      <div
        id="mobile-nav"
        className={`fixed inset-0 top-16 z-[999] lg:hidden sm:top-[72px] ${
          menuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <button
          type="button"
          className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu"
          onClick={closeMenu}
        />

        {/* Drawer */}
        <motion.div
          initial={{
            x: "100%",
          }}
          animate={{
            x: 0,
          }}
          exit={{
            x: "100%",
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl border-l border-border transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col p-6">
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block rounded-md px-3 py-3 text-base font-medium text-text/80 transition-colors hover:bg-background hover:text-velora-navy"
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-border pt-6">
              <div className="flex flex-col gap-3">
                <QuotationLink
                  className="inline-flex h-11 items-center justify-center rounded-md bg-velora-navy text-sm font-semibold text-white"
                  onClick={closeMenu}
                >
                  Request Quotation
                </QuotationLink>

                <Link
                  href="#contact"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-border text-sm font-semibold text-velora-navy"
                  onClick={closeMenu}
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
