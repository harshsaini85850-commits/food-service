import Link from "next/link";
import PhotoBox from "@/components/PhotoBox";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/content";

export default function ServicesGrid() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Our Services"
          title="Our Catering Services in Delhi NCR"
          text="Every occasion deserves great food and thoughtful service. Explore catering options tailored to your celebration."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.id}
              className="group overflow-hidden rounded-2xl border border-brand/10 bg-cream shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <PhotoBox src={s.image} alt={s.title} className="h-52" />
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-brand">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {s.text}
                </p>
                <Link
                  href={`/our-services#${s.id}`}
                  className="mt-5 inline-block text-sm font-semibold text-brand hover:text-gold"
                >
                  Explore Service →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}