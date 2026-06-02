import Link from "next/link";
import { ArrowLink } from "../arrow-link";
import { SectionTag } from "../section-tag";
import Image from "next/image";

const products = [
  {
    title: "OPP Polybag",
    description:
      "Crystal-clear bags for apparel, textiles, and retail packaging with reliable seal strength.",
    tone: "from-sky-100 to-blue-50",
    productImage: "/images/product-opp-polybag.png",
  },
  {
    title: "Printed OPP",
    description:
      "Custom logo and brand printing for professional product presentation at scale.",
    tone: "from-indigo-100 to-violet-50",
    productImage: "/images/product-batik.png",
  },
  {
    title: "OPP Roll Film",
    description:
      "High-clarity roll stock for automatic packing lines and garment factories.",
    tone: "from-cyan-100 to-teal-50",
    productImage: "/images/product-opp-rollfilm.png",
  },
  {
    title: "Perforated Bags",
    description:
      "Easy-tear perforation for efficient packing workflows and consumer convenience.",
    tone: "from-blue-100 to-slate-50",
    productImage: "/images/product-perforated-bags.png",
  },
  {
    title: "Custom Sizes",
    description:
      "Tailored dimensions and thickness to match your product specs and machinery.",
    tone: "from-[#B8D9FF] to-sky-50",
    productImage: "/images/product-frosted2.png",
  },
] as const;

export function ProductsSection() {
  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <SectionTag>Our Products</SectionTag>
            <h2 className="mt-2 text-2xl font-bold text-velora-navy sm:text-3xl lg:text-4xl">
              OPP Packaging Solutions
            </h2>
          </div>
          <ArrowLink href="#products" className="shrink-0">
            View All Products
          </ArrowLink>
        </div>

        {/* Mobile / tablet: horizontal scroll */}
        <div className="mt-8 -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory scrollbar-none md:mx-0 md:hidden md:px-0">
          {products.map(({ title, description, tone, productImage }) => (
            <ProductCard
              key={title}
              title={title}
              description={description}
              tone={tone}
              className="w-[min(280px,85vw)] shrink-0 snap-start"
              productImage={productImage}
            />
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="mt-8 hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map(({ title, description, tone, productImage }) => (
            <ProductCard
              key={title}
              title={title}
              description={description}
              tone={tone}
              productImage={productImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  title,
  description,
  tone,
  className = "",
  productImage,
}: {
  title: string;
  description: string;
  tone: string;
  className?: string;
  productImage?: string;
}) {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all hover:shadow-lg ${className}`}
    >
      <div className="relative aspect-[4/5] max-h-48 overflow-hidden sm:max-h-none">
        {productImage ? (
          <Image
            src={productImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${tone}`} />
        )}
      </div>

      <div className="relative flex flex-1 flex-col p-4">
        <h3 className="font-bold text-velora-navy">{title}</h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-text/60 line-clamp-3">
          {description}
        </p>

        <Link
          href="#quotation"
          className="mt-4 inline-flex h-8 w-8 items-center justify-center self-end rounded-full border border-border text-velora-blue transition-colors group-hover:border-velora-blue group-hover:bg-film-blue/40"
          aria-label={`Learn more about ${title}`}
        >
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
