import Link from "next/link";

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
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-lg font-extrabold tracking-wide">VELORA PACK</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              Premium OPP packaging manufacturer serving fashion, garment, and
              distribution brands across Indonesia.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 text-xs font-bold text-white/80 transition-colors hover:bg-white/10"
                  aria-label={label}
                >
                  {label[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">
              Products
            </h3>
            <ul className="mt-4 space-y-2">
              {productLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#products"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">
              Capabilities
            </h3>
            <ul className="mt-4 space-y-2">
              {capabilityLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#capabilities"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div id="about">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>
                <a href="tel:+622112345678" className="break-all hover:text-white">
                  +62 21 1234 5678
                </a>
              </li>
              <li>
                <a href="mailto:info@velorapack.com" className="break-all hover:text-white">
                  info@velorapack.com
                </a>
              </li>
              <li className="leading-relaxed">
                Jl. Industri Raya No. 88
                <br />
                Bekasi, West Java, Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-8 text-center text-sm text-white/50 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} Velora Pack. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:justify-end sm:gap-6">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
