import { SectionTag } from "../section-tag";

const certifications = [
  "ISO 9001",
  "SGS",
  "RoHS",
  "Food Grade",
  "REACH",
  "Halal Indonesia",
] as const;

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="border-t border-border bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <SectionTag>Certifications</SectionTag>
        <h2 className="mt-2 text-2xl font-bold text-velora-navy sm:text-3xl lg:text-4xl">
          Certified Quality You Can Trust
        </h2>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-5">
          {certifications.map((name) => (
            <li
              key={name}
              className="flex h-16 items-center justify-center rounded-lg border border-border bg-background px-3 grayscale transition-all hover:grayscale-0 sm:h-20 sm:px-4"
            >
              <span className="text-center text-xs font-bold leading-tight tracking-wide text-text/40 sm:text-sm">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
