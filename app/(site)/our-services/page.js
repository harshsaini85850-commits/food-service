import PageHeader from "@/components/PageHeader";
import PhotoBox from "@/components/PhotoBox";
import CtaBand from "@/components/CtaBand";
import OpenQuoteButton from "@/components/OpenQuoteButton";
import { serviceDetails } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata = {
  title: "Our Catering Services in Delhi NCR | CC Catering & Event Service",
  description:
    "Wedding, corporate, birthday, mehndi, festival and anniversary catering across Delhi NCR. Get a free quote today.",
};

export default function OurServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Every occasion deserves great food and thoughtful service. Explore catering options tailored to your celebration across Delhi NCR."
      />

      <div className="mx-auto max-w-7xl space-y-20 px-4 py-20">
        {serviceDetails.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2"
          >
            <PhotoBox
              src={images[s.image] || s.image}
              alt={s.title}
              className={`h-72 rounded-3xl shadow-lg sm:h-96 ${
                i % 2 === 1 ? "lg:order-2" : ""
              }`}
            />

            <div>
              <h2 className="font-heading text-3xl font-bold text-brand">
                {s.title}
              </h2>
              <p className="mt-4 leading-relaxed text-ink/80">{s.text}</p>

              <ul className="mt-6 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-ink/85">
                    <span className="mt-0.5 text-gold">✔</span>
                    {p}
                  </li>
                ))}
              </ul>

              <OpenQuoteButton className="mt-8 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-cream transition hover:bg-brand-dark">
                Get a Quote for {s.title}
              </OpenQuoteButton>
            </div>
          </section>
        ))}
      </div>

      <CtaBand />
    </>
  );
}