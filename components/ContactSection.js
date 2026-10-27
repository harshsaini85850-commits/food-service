import QuoteForm from "@/components/QuoteForm";
import { site } from "@/lib/site";

export default function ContactSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand sm:text-4xl">
            Book Your Catering Service in Delhi Today
          </h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            Reach out for a free consultation and custom quote. We cater across
            Delhi NCR. No event too small, no feast too grand.
          </p>

          <ul className="mt-8 space-y-6 text-sm">
            <li className="flex gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-semibold text-brand">Our Address</p>
                <p className="text-ink/75">{site.address}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-semibold text-brand">Phone / WhatsApp</p>
                <p className="text-ink/75">{site.phone}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl">🚚</span>
              <div>
                <p className="font-semibold text-brand">Service Area</p>
                <p className="text-ink/75">{site.serviceArea}</p>
              </div>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={site.phoneLink}
              className="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-cream transition hover:bg-brand-dark"
            >
              Call Now
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-7 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              WhatsApp Now
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-brand px-7 py-3 text-sm font-semibold text-brand transition hover:bg-brand hover:text-cream"
            >
              Follow on Instagram
            </a>
          </div>
        </div>

        <QuoteForm />
      </div>
    </section>
  );
}