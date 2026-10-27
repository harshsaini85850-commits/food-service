import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { site } from "@/lib/site";

const tags = [
  "Weddings",
  "Corporate Events",
  "Private Parties",
  "Custom Menus",
];

export default function Hero() {
  return (
    <section
      id="quote"
      className="group relative bg-brand-dark bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/40363819/pexels-photo-40363819.jpeg')",
      }}
    >
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgba(43,27,23,0.75)] to-[rgba(107,21,34,0.4)] " />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-[1.2fr_1fr] lg:py-24">
        {/* Left: text */}
        <div className="text-cream">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            Premium Catering for Every Occasion
          </p>

          <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Exceptional Food.
            <br />
            <em className="text-gold">Unforgettable</em>
            <br />
            Celebrations.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85">
            From grand Delhi weddings to cosy family gatherings and corporate
            lunches, {site.name} brings{" "}
            <strong className="text-gold">25+ years of experience</strong>, rich
            flavours and polished service to every celebration.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/our-services"
              className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
            >
              Plan Your Event
            </Link>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
            >
              WhatsApp Us
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-3">
            {tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-gold bg-gold px-4 py-1.5 text-xs font-medium text-black"
              >
                ✓ {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: form */}
        <QuoteForm />
      </div>
    </section>
  );
}
