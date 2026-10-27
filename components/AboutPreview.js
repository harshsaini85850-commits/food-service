import Link from "next/link";
import PhotoBox from "@/components/PhotoBox";
import { images } from "@/lib/images";

export default function AboutPreview() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2">
      <div className="relative">
        <PhotoBox
          src={images.about}
          alt="Decorated buffet counters"
          className="h-80 rounded-3xl shadow-xl sm:h-[28rem]"
        />
        <div className="absolute -bottom-5 -right-2 rounded-2xl bg-gold px-6 py-4 text-center shadow-lg sm:right-6">
          <p className="font-heading text-3xl font-bold text-ink">25+</p>
          <p className="text-xs font-semibold uppercase tracking-wider text-ink">
            Years of Service
          </p>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
          About CC Catering
        </p>
        <h2 className="font-heading text-3xl font-bold text-brand sm:text-4xl">
          Making Every Celebration More Delicious
        </h2>
        <p className="mt-5 leading-relaxed text-ink/80">
          Great food brings people together. We help make special occasions
          memorable with thoughtfully planned menus, delicious dishes and
          catering experiences shaped around each event. Whether it is a
          wedding, a family celebration or a professional gathering, our goal
          is to make hosting easier and more enjoyable.
        </p>
        <Link
          href="/about-us"
          className="mt-8 inline-block rounded-full bg-brand px-7 py-3 text-sm font-semibold text-cream transition hover:bg-brand-dark"
        >
          Discover Our Story
        </Link>
      </div>
    </section>
  );
}