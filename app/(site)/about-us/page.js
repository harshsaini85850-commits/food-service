import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PhotoBox from "@/components/PhotoBox";
import StatsBand from "@/components/StatsBand";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { aboutStats, values } from "@/lib/content";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata = {
  title: "About Us | CC Catering & Event Service, Delhi",
  description:
    "Learn about CC Catering & Event Service, a Delhi catering team with 25+ years of experience in weddings, parties and corporate events.",
};

export default function AboutUsPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Over 25 years of bringing people together over good food across Delhi NCR."
      />

      {/* Our story */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            Our Story
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand sm:text-4xl">
            Great Food Brings People Together
          </h2>
          <div className="mt-5 space-y-4 leading-relaxed text-ink/80">
            <p>
              {site.name} has been serving Delhi families, businesses and
              event hosts for more than 25 years. What started with a love for
              honest, home-style cooking has grown into a full catering and
              event service.
            </p>
            <p>
              We cook rich Punjabi and North Indian favourites, and we plan
              each menu around your occasion, your guests and your budget.
              Whether you are hosting a grand wedding or a small family
              gathering, we treat it as our own celebration.
            </p>
            <p>
              Our goal is simple: make hosting easier for you, and make the
              food something your guests talk about long after the event.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="mt-8 inline-block rounded-full bg-brand px-7 py-3 text-sm font-semibold text-cream transition hover:bg-brand-dark"
          >
            Talk to Us
          </Link>
        </div>

        <PhotoBox
          src={images.aboutStory}
          alt="Our catering kitchen"
          className="h-80 rounded-3xl shadow-xl sm:h-[30rem]"
        />
      </section>

      <StatsBand stats={aboutStats} />

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeading
          eyebrow="What We Stand For"
          title="The Values Behind Every Plate"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-gold/40 bg-white p-7 text-center shadow-sm"
            >
              <div className="mb-4 text-4xl">{v.icon}</div>
              <h3 className="font-heading text-lg font-semibold text-brand">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team / service */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <PhotoBox
            src={images.aboutTeam}
            alt="Our catering team at work"
            className="h-80 rounded-3xl shadow-xl sm:h-96"
          />
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
              Our Team
            </p>
            <h2 className="font-heading text-3xl font-bold text-brand sm:text-4xl">
              Cooks, Planners and Service Staff Who Care
            </h2>
            <p className="mt-5 leading-relaxed text-ink/80">
              Behind every event is a team of experienced cooks, event
              coordinators and trained service staff. We plan the menu, set up
              the counters, serve your guests and clean up, so you can enjoy
              your own celebration.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink/85">
              <li className="flex gap-3">
                <span className="text-gold">✔</span> Experienced cooks for
                every cuisine we serve
              </li>
              <li className="flex gap-3">
                <span className="text-gold">✔</span> On-site coordination from
                setup to cleanup
              </li>
              <li className="flex gap-3">
                <span className="text-gold">✔</span> Trained staff for events
                of any size
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's Make Your Celebration Delicious"
        text="Share your event details and we will send a custom menu and quote within 2 hours."
      />
    </>
  );
}