
import Link from "next/link";
import { site } from "@/lib/site";

const dishes = [
  { emoji: "🍛", name: "Rich Indian Flavours", position: "food-float-one" },
  { emoji: "🥗", name: "Freshly Prepared", position: "food-float-two" },
  { emoji: "🍰", name: "Beautiful Finishes", position: "food-float-three" },
];

export default function Hero2() {
  return (
    <section className="relative isolate overflow-hidden bg-cream py-20 sm:py-24 lg:py-28">
      {/* Decorative background shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-gold/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2 lg:gap-20">
        {/* Left: content */}
        <div className="relative z-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Made with passion, served with love
          </p>

          <h2 className="font-heading text-4xl font-bold leading-tight text-brand-dark sm:text-5xl lg:text-6xl">
            Every Dish Tells
            <br />
            <span className="italic text-brand">A Delicious Story.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
            From the first bite to the final celebration, we bring together
            fresh ingredients, beautiful presentation and memorable flavours
            to make every occasion special.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/our-services"
              className="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-cream shadow-md transition duration-300 hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Explore Our Services
            </Link>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brand/30 px-7 py-3 text-sm font-semibold text-brand transition duration-300 hover:bg-brand/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Discuss Your Menu
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink/70">
            <span>✓ Fresh Ingredients</span>
            <span>✓ Thoughtful Presentation</span>
            <span>✓ Every Occasion</span>
          </div>
        </div>

        {/* Right: animated food display */}
        <div className="relative mx-auto flex min-h-[360px] w-full max-w-lg items-center justify-center sm:min-h-[440px]">
          {/* Decorative rings */}
          <div
            aria-hidden="true"
            className="absolute h-64 w-64 rounded-full border border-brand/15 sm:h-80 sm:w-80"
          />
          <div
            aria-hidden="true"
            className="absolute h-48 w-48 rounded-full border border-gold/50 sm:h-64 sm:w-64"
          />

          {/* Main food feature */}
          <div className="relative z-10 flex h-52 w-52 flex-col items-center justify-center rounded-full border-4 border-white bg-brand shadow-2xl sm:h-64 sm:w-64">
            <span
              aria-hidden="true"
              className="food-main-animation text-8xl sm:text-9xl"
            >
              🍽️
            </span>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold sm:text-sm">
              Crafted to delight
            </p>
          </div>

          {/* Floating food cards */}
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className={`absolute z-20 ${dish.position}`}
            >
              <div className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-xl backdrop-blur-sm sm:p-4">
                <span
                  aria-hidden="true"
                  className="text-3xl sm:text-4xl"
                >
                  {dish.emoji}
                </span>
                <span className="max-w-28 text-xs font-semibold text-brand-dark sm:text-sm">
                  {dish.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
