import OpenQuoteButton from "@/components/OpenQuoteButton";
import { site } from "@/lib/site";

export default function CtaBand({
  title = "Ready to Plan Your Event?",
  text = "Tell us about your celebration and get a free quote within 2 hours.",
}) {
  return (
    <section className="bg-gold py-14 text-center">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="font-heading text-3xl font-bold text-ink">{title}</h2>
        <p className="mt-3 text-ink/80">{text}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <OpenQuoteButton className="rounded-full bg-brand px-8 py-3 text-sm font-semibold text-cream transition hover:bg-brand-dark">
            Get a Free Quote
          </OpenQuoteButton>
          <a
            href={site.phoneLink}
            className="rounded-full border-2 border-ink px-8 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-cream"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}   