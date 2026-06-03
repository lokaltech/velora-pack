"use client";
import { SectionTag } from "../section-tag";
import { motion } from "motion/react";
const steps = [
  {
    title: "Consultation",
    description: "Understand your product, volume, and packaging requirements.",
    icon: "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z",
  },
  {
    title: "Specification",
    description:
      "Confirm material, size, thickness, printing, and delivery timeline.",
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
  },
  {
    title: "Production",
    description:
      "Manufacture with in-line QC on extrusion and converting lines.",
    icon: "M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.413m4.684-2.652 1.15-.413m0 0 1.41-.513M12 3v1.5m0 16.5V21",
  },
  {
    title: "Quality Control",
    description:
      "Inspect clarity, seal strength, dimensions, and print accuracy.",
    icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
  },
  {
    title: "Delivery",
    description: "Ship on schedule with reliable logistics across Indonesia.",
    icon: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
  },
] as const;

export function ProcessSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <SectionTag>Our Process</SectionTag>
          <h2 className="mt-2 text-2xl font-bold text-velora-navy sm:text-3xl lg:text-4xl">
            From Concept to Delivery
          </h2>
        </motion.div>

        {/* Mobile / tablet: vertical timeline */}
        <ol className="relative mt-10 space-y-0 lg:hidden">
          {steps.map(({ title, description, icon }, index) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="relative flex gap-4 pb-8 last:pb-0"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-film-blue bg-white shadow-sm"
                >
                  <svg
                    className="h-6 w-6 text-velora-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={icon}
                    />
                  </svg>
                </motion.div>
                {index < steps.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-border" aria-hidden />
                )}
              </div>
              <div className="min-w-0 pb-2 pt-1">
                <span className="text-xs font-bold text-velora-blue">
                  0{index + 1}
                </span>
                <h3 className="mt-0.5 font-bold text-velora-navy">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-text/60">
                  {description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>

        {/* Desktop: horizontal steps */}
        <div className="relative mt-14 hidden lg:block">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className="absolute left-0 right-0 top-8 h-px bg-border"
            aria-hidden
          />
          <ol className="grid grid-cols-5 gap-6">
            {steps.map(({ title, description, icon }, index) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="relative flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-film-blue bg-white shadow-sm"
                >
                  <svg
                    className="h-7 w-7 text-velora-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={icon}
                    />
                  </svg>
                </motion.div>
                <span className="mt-3 text-xs font-bold text-velora-blue">
                  0{index + 1}
                </span>
                <h3 className="mt-1 font-bold text-velora-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text/60">
                  {description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
