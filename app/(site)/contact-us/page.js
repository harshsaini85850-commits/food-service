import PageHeader from "@/components/PageHeader";
import ContactInfoCard from "@/components/ContactInfoCard";
import QuoteForm from "@/components/QuoteForm";
import SectionHeading from "@/components/SectionHeading";
import FaqList from "@/components/FaqList";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact Us | CC Catering & Event Service, Delhi",
  description:
    "Call, WhatsApp or send a message to get a free catering quote in Delhi NCR. We reply within 2 hours.",
};

export default function ContactUsPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    site.address
  )}&output=embed`;

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Tell us about your event and get a free, no-obligation quote. We respond within 2 hours."
      />

      {/* Info cards + form */}
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand sm:text-4xl">
            Let's Plan Your Celebration
          </h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            Call, message or fill in the form. Share your event type, date and
            guest count, and we will send a custom menu and price.
          </p>

          <div className="mt-8 grid gap-4">
            <ContactInfoCard icon="📞" title="Call Us" href={site.phoneLink}>
              {site.phone}
            </ContactInfoCard>

            <ContactInfoCard icon="💬" title="WhatsApp" href={site.whatsapp}>
              Chat with us for a quick reply
            </ContactInfoCard>

            <ContactInfoCard
              icon="✉️"
              title="Email"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </ContactInfoCard>

            <ContactInfoCard icon="📍" title="Our Address">
              {site.address}
            </ContactInfoCard>

            <ContactInfoCard icon="🚚" title="Service Area">
              {site.serviceArea}
            </ContactInfoCard>

            <ContactInfoCard
              icon="📸"
              title="Instagram"
              href={site.instagram}
            >
              See our latest events
            </ContactInfoCard>
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <QuoteForm />
        </div>
      </section>

      {/* Map */}
      
{/* Map */}
<section className="mx-auto max-w-7xl px-4 pb-20">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.338886102237!2d76.7167157747899!3d30.680739874609305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feeba8a195ec7%3A0xf46a8ab1e3efbcf4!2sCoffee%20Bar%20%26%20Patisserie%2C%20La%20vanilla%2C%20SCO%2035%2C%20opp.%20CP67%20MALL%2C%20near%20Quasar%20salon%2C%20Sector%2079%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140308!5e0!3m2!1sen!2sin!4v1793082283683!5m2!1sen!2sin"
    title="CC Catering location on Google Maps"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen
    className="h-96 w-full rounded-3xl border-0 shadow-lg"
  />
</section>


      {/* FAQ */}
      <section className="bg-cream pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions We Hear Often"
            text="Quick answers before you get in touch."
          />
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  );
}