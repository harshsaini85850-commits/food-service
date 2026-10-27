import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { steps } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <SectionHeading
        eyebrow="How It Works"
        title="Your Event, Planned with Ease"
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.no} className="rounded-2xl bg-white p-7 shadow-sm">
            <span className="font-heading text-5xl font-bold text-gold/60">
              {s.no}
            </span>
            <h3 className="mt-2 font-heading text-lg font-semibold text-brand">
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">{s.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/contact-us"
          className="inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold text-cream transition hover:bg-brand-dark"
        >
          Start Planning Your Event
        </Link>
      </div>
    </section>
  );
}