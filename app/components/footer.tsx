"use client";

import Link from "next/link";
import { motion } from "motion/react";

const productLinks = [
  "OPP Polybag",
  "Printed OPP",
  "OPP Roll Film",
  "Perforated Bags",
  "Custom Sizes",
];

const capabilityLinks = [
  "Production Lines",
  "Monthly Capacity",
  "Quality Control",
  "Export Ready",
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Values", href: "#about" },
  { label: "Careers", href: "#contact" },
];

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Facebook", href: "#" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-velora-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <p className="text-lg font-extrabold tracking-wide">VELORA PACK</p>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              Premium OPP packaging manufacturer serving fashion, garment, and
              distribution brands across Indonesia.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {socials.map(({ label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{
                    y: -3,
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-md border border-white/20
                    text-xs font-bold text-white/80
                    transition-colors
                    hover:bg-white/10
                  "
                >
                  {label[0]}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">
              Products
            </h3>

            <ul className="mt-4 space-y-2">
              {productLinks.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                >
                  <Link
                    href="#products"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">
              Capabilities
            </h3>

            <ul className="mt-4 space-y-2">
              {capabilityLinks.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                >
                  <Link
                    href="#capabilities"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            id="about"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">
              Company
            </h3>

            <ul className="mt-4 space-y-2">
              {companyLinks.map(({ label, href }) => (
                <motion.li
                  key={label}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                >
                  <Link
                    href={href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">
              Contact Us
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="tel:+622112345678"
                  className="break-all transition-colors hover:text-white"
                >
                  +62 21 1234 5678
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@velorapack.com"
                  className="break-all transition-colors hover:text-white"
                >
                  info@velorapack.com
                </a>
              </li>

              <li className="leading-relaxed">
                Jl. Industri Raya No. 88
                <br />
                Bekasi, West Java, Indonesia
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="
            mt-10 flex flex-col gap-4
            border-t border-white/15
            pt-8 text-center text-sm text-white/50
            sm:mt-12 sm:flex-row
            sm:items-center
            sm:justify-between
            sm:text-left
          "
        >
          <p>© {new Date().getFullYear()} Velora Pack. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-4 sm:justify-end sm:gap-6">
            <Link href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>

            <Link href="#" className="transition-colors hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
