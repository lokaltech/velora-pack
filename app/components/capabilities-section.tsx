import Link from "next/link";
import { SectionTag } from "./section-tag";

const stats = [
  { value: "5", label: "Production Lines", icon: "M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.413m4.684-2.652 1.15-.413m0 0 1.41-.513M12 3v1.5m0 16.5V21" },
  { value: "250 Ton / Month", label: "Production Capacity", icon: "M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" },
  { value: "10,000 m²", label: "Factory Area", icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-6.75 4.5h6.75m-6.75 4.5h6.75m-6.75 4.5h6.75" },
  { value: "98%", label: "On-Time Delivery Rate", icon: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" },
] as const;

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="border-t border-border bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-8">
          <div className="min-w-0 lg:col-span-4">
            <SectionTag>Our Capabilities</SectionTag>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-velora-navy sm:text-3xl lg:text-4xl">
              High Capacity.
              <br className="hidden sm:block" />
              {" "}Consistent Quality.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text/60 sm:text-base">
              We operate modern extrusion and converting lines with strict quality
              control—delivering consistent OPP film and bags for high-volume B2B
              clients across Indonesia and export markets.
            </p>
            <Link
              href="#about"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-velora-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-velora-navy/90 sm:w-auto sm:py-2.5"
            >
              Learn More About Us
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="lg:col-span-4">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-slate-200 via-slate-100 to-film-blue/50 shadow-md sm:aspect-square lg:aspect-square">
              <div className="flex h-full flex-col items-center justify-center p-6 text-center sm:p-8">
                <svg className="h-12 w-12 text-velora-blue/60 sm:h-14 sm:w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
                <p className="mt-4 text-sm font-medium text-text/50">Factory machinery photo</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:col-span-4 lg:flex lg:flex-col lg:gap-4">
            {stats.map(({ value, label, icon }) => (
              <div
                key={label}
                className="flex min-w-0 items-center gap-3 rounded-xl border border-border bg-background p-4 sm:gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-film-blue/50 text-velora-blue sm:h-11 sm:w-11">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-velora-navy sm:text-base">{value}</p>
                  <p className="text-xs text-text/60 sm:text-sm">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
