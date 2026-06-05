"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export function CtaSection() {
  return (
    <section
      id="quotation"
      className="relative overflow-hidden bg-velora-navy py-12 sm:py-14 lg:py-16"
    >
      {/* Animated Background Pattern */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-10"
        aria-hidden
        animate={{
          backgroundPosition: ["0px 0px", "24px 24px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
        }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col items-center gap-8 text-center lg:grid lg:grid-cols-3 lg:items-center lg:gap-8 lg:text-left">
          {/* Left Content */}
          <div className="min-w-0 lg:col-span-1">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to Elevate Your Packaging?
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
              Get a tailored quotation for OPP polybags, printed film, and
              custom sizes backed by ISO-certified production.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center lg:col-span-1 lg:max-w-none lg:justify-center">
            <motion.div
              whileHover={{
                y: -2,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <Link
                href="#contact"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-velora-navy transition-colors hover:bg-film-blue sm:w-auto"
              >
                Request Quotation
                <span aria-hidden>→</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                y: -2,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <a
                href="https://wa.me/6281284849822"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-white/40 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Logo */}
          <div className="flex justify-center lg:col-span-1 lg:justify-end">
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/logo.png"
                width={300}
                height={300}
                alt="Velora Logo"
                className="rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
