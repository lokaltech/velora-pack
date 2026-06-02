import Link from "next/link";

const avatars = ["A", "B", "C", "D", "E"];

export function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 py-10 sm:py-12 lg:grid-cols-2 lg:gap-12 lg:py-16 xl:py-20">
          <div className="relative z-10 min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-velora-blue sm:text-xs sm:tracking-[0.2em]">
              Premium Plastic Packaging Solutions
            </p>

            <h1 className="mt-3 text-3xl font-bold leading-[1.15] tracking-tight text-velora-navy sm:mt-4 sm:text-4xl md:text-[2.75rem] lg:text-5xl">
              Premium Plastic Packaging Solutions for{" "}
              <span className="text-velora-blue">Modern Brands</span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-text/70 sm:mt-5 sm:text-lg">
              Helping fashion brands, garment manufacturers, and distributors
              protect and present products professionally.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-stretch">
              <Link
                href="#quotation"
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md bg-velora-navy px-5 text-sm font-semibold text-white transition-colors hover:bg-velora-navy/90 sm:flex-none sm:px-6"
              >
                Request Quotation
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="#contact"
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md border border-border bg-white px-5 text-sm font-semibold text-velora-navy transition-colors hover:bg-film-blue/40 sm:flex-none sm:px-6"
              >
                Contact Sales
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <div className="flex -space-x-2">
                {avatars.map((letter, i) => (
                  <span
                    key={letter}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-film-blue text-[10px] font-bold text-velora-navy sm:h-9 sm:w-9 sm:text-xs"
                    style={{ zIndex: avatars.length - i }}
                  >
                    {letter}
                  </span>
                ))}
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-velora-navy text-[9px] font-bold text-white sm:h-9 sm:w-9 sm:text-[10px]">
                  +500
                </span>
              </div>
              <p className="text-sm font-medium text-text/70">
                Trusted by{" "}
                <span className="font-semibold text-velora-navy">500+</span>{" "}
                Brands Nationwide
              </p>
            </div>
          </div>

          <div className="relative min-h-[220px] w-full overflow-hidden rounded-2xl border border-border shadow-md sm:min-h-[280px] md:min-h-[340px] lg:min-h-[420px]">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('images/banner1.png'), linear-gradient(135deg, #e8f2fc 0%, #d4e8f7 50%, #c5ddf0 100%)",
              }}
              role="img"
              aria-label="Plastic film production line"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-background/20"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
