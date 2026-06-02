import Link from "next/link";

export function CtaSection() {
  return (
    <section
      id="quotation"
      className="relative overflow-hidden bg-velora-navy py-12 sm:py-14 lg:py-16"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        aria-hidden
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center lg:grid lg:grid-cols-3 lg:items-center lg:gap-8 lg:text-left">
          <div className="min-w-0 lg:col-span-1">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to Elevate Your Packaging?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
              Get a tailored quotation for OPP polybags, printed film, and
              custom sizes—backed by ISO-certified production.
            </p>
          </div>

          <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center lg:col-span-1 lg:max-w-none lg:justify-center">
            <Link
              href="#contact"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-velora-navy transition-colors hover:bg-film-blue sm:w-auto"
            >
              Request Quotation
              <span aria-hidden>→</span>
            </Link>
            <a
              href="https://wa.me/6281284849822"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-white/40 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="flex justify-center lg:col-span-1 lg:justify-end">
            <div className="relative h-32 w-40 overflow-hidden rounded-xl border border-white/20 bg-gradient-to-br from-film-blue/30 to-white/10 shadow-xl sm:h-40 sm:w-48">
              <div className="flex h-full flex-col items-center justify-center p-4 text-center">
                <p className="text-xl font-extrabold tracking-widest text-white/90 sm:text-2xl">
                  VELORA
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-white/50">
                  Premium OPP Bag
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
