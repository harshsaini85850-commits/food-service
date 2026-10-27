"use client";

const message =
  "25+ Years of Catering Excellence — Great Food, Memorable Celebrations.";

export default function AnnouncementBar() {
  const openQuote = () => window.dispatchEvent(new Event("open-quote"));

  return (
    <div className="overflow-hidden bg-brand text-sm text-cream">
      <div className="flex w-max animate-marquee py-2 whitespace-nowrap hover:[animation-play-state:paused]">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="flex items-center gap-4 pr-16">
            {message}
            <button
              onClick={openQuote}
              className="font-semibold text-gold underline-offset-4 hover:underline"
            >
              Book Your Event Now →
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}