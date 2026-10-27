import { whyUs } from "@/lib/content";

export default function WhyUs() {
  return (
    <section className="bg-brand py-20 text-cream">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            Why CC Catering
          </p>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            The Details That Make a Difference
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w) => (
            <div
              key={w.title}
              className="rounded-2xl border border-gold/30 bg-brand-dark/60 p-7 text-center"
            >
              <div className="mb-4 text-4xl">{w.icon}</div>
              <h3 className="font-heading text-lg font-semibold text-gold">
                {w.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/85">
                {w.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}