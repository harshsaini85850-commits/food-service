
"use client";

import { useState } from "react";
import Link from "next/link";

const dishes = [
  {
    id: "indian",
    name: "Indian Feast",
    detail: "Slow-cooked favourites",
    symbol: "🍛",
  },
  {
    id: "fresh",
    name: "Fresh & Colourful",
    detail: "Seasonal, vibrant plates",
    symbol: "🥗",
  },
  {
    id: "dessert",
    name: "Sweet Finish",
    detail: "A little celebration",
    symbol: "🍰",
  },
];

function ServerIllustration() {
  return (
    <svg
      viewBox="0 0 120 160"
      role="img"
      aria-label="A catering server carrying a tray"
      className="hero3-server-art"
    >
      <ellipse cx="58" cy="151" rx="31" ry="6" fill="#2b1b17" opacity=".12" />

      {/* Uniform */}
      <path d="M42 67 Q59 56 76 68 L84 113 L35 113 Z" fill="#6b1522" />
      <path d="M47 70 L59 88 L71 70 L77 111 L40 111 Z" fill="#f7f0e5" />

      {/* Head and hair */}
      <circle cx="59" cy="42" r="20" fill="#b8754e" />
      <path d="M39 42 Q35 19 58 18 Q81 18 79 42 L74 34 Q61 28 45 36 Z" fill="#2b1b17" />
      <circle cx="52" cy="43" r="2" fill="#2b1b17" />
      <circle cx="66" cy="43" r="2" fill="#2b1b17" />
      <path d="M53 51 Q59 56 66 50" fill="none" stroke="#6b3528" strokeWidth="2" strokeLinecap="round" />

      {/* Arms */}
      <path d="M42 72 Q28 80 21 93" fill="none" stroke="#b8754e" strokeWidth="10" strokeLinecap="round" />
      <path d="M74 72 Q88 70 94 56" fill="none" stroke="#b8754e" strokeWidth="10" strokeLinecap="round" />
      <path d="M94 56 L101 47" fill="none" stroke="#b8754e" strokeWidth="7" strokeLinecap="round" />

      {/* Legs and shoes */}
      <path d="M44 111 L42 139" stroke="#2b1b17" strokeWidth="12" strokeLinecap="round" />
      <path d="M73 111 L77 139" stroke="#2b1b17" strokeWidth="12" strokeLinecap="round" />
      <path d="M30 141 L46 141" stroke="#2b1b17" strokeWidth="9" strokeLinecap="round" />
      <path d="M70 141 L87 141" stroke="#2b1b17" strokeWidth="9" strokeLinecap="round" />

      {/* Serving tray */}
      <path d="M78 54 Q92 48 108 51" fill="none" stroke="#d7ad58" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="99" cy="48" rx="21" ry="5" fill="#f7f0e5" stroke="#d7ad58" strokeWidth="2" />
      <ellipse cx="99" cy="47" rx="14" ry="3" fill="#6b1522" />
      <circle cx="93" cy="46" r="3" fill="#d7ad58" />
      <circle cx="101" cy="47" r="3" fill="#f0c66b" />
      <circle cx="106" cy="46" r="2" fill="#6f8a43" />
    </svg>
  );
}

export default function Hero3() {
  const [selectedDish, setSelectedDish] = useState(dishes[0]);
  const [serving, setServing] = useState(false);
  const [animationId, setAnimationId] = useState(0);
  const [servedCount, setServedCount] = useState(0);

  function serveDish(dish) {
    setSelectedDish(dish);
    setServing(false);
    setAnimationId((current) => current + 1);

    // Start a fresh animation after React updates the selected dish.
    requestAnimationFrame(() => setServing(true));
    setServedCount((count) => count + 1);
  }

  function finishServing() {
    setServing(false);
  }

  return (
    <section className="hero3-section relative isolate overflow-hidden bg-brand-dark py-20 text-cream sm:py-24 lg:py-28">
      <div aria-hidden="true" className="hero3-glow hero3-glow-one" />
      <div aria-hidden="true" className="hero3-glow hero3-glow-two" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left: interactive menu */}
        <div className="order-2 relative z-10 lg:order-1">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            A little theatre on every table
          </p>

          <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Choose a Dish.
            <br />
            <span className="italic text-gold">Watch Us Serve.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            Great catering is more than food. It is the care, timing and little
            details that make guests feel special. Pick a plate and let our
            tiny serving team get to work.
          </p>

          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
            {dishes.map((dish) => {
              const isSelected = selectedDish.id === dish.id;

              return (
                <button
                  key={dish.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => serveDish(dish)}
                  className={`hero3-dish-button rounded-2xl border p-4 text-left transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark ${
                    isSelected
                      ? "border-gold bg-gold text-brand-dark shadow-lg"
                      : "border-white/15 bg-white/5 text-cream hover:border-gold/70 hover:bg-white/10"
                  }`}
                >
                  <span className="block text-3xl" aria-hidden="true">
                    {dish.symbol}
                  </span>

                  <span className="mt-3 block text-sm font-bold">
                    {dish.name}
                  </span>

                  <span
                    className={`mt-1 block text-xs leading-relaxed ${
                      isSelected ? "text-brand-dark/75" : "text-cream/60"
                    }`}
                  >
                    {dish.detail}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => serveDish(selectedDish)}
              className="rounded-full bg-gold px-6 py-3 text-sm font-bold text-brand-dark transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
            >
              Serve this dish ✦
            </button>

            <p aria-live="polite" className="text-sm text-cream/65">
              {servedCount === 0
                ? "Choose a dish to start the action."
                : `Serving ${selectedDish.name} · ${servedCount} ${
                    servedCount === 1 ? "dish" : "dishes"
                  } served`}
            </p>
          </div>

          <Link
            href="/our-services"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold underline decoration-gold/50 underline-offset-4 transition hover:decoration-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Plan your catering experience <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Right: animated serving scene */}
        <div className="order-1 relative mx-auto w-full max-w-2xl lg:order-2">
          <div className="hero3-stage relative min-h-[320px] overflow-hidden rounded-[2rem] border border-gold/20 shadow-2xl sm:min-h-[420px]">
            <div aria-hidden="true" className="hero3-stage-light" />

            <div className="absolute left-5 top-5 z-20 rounded-full bg-white/85 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-dark shadow-sm sm:left-7 sm:top-7">
              The serving stage
            </div>

            <div aria-hidden="true" className="hero3-sparkle hero3-sparkle-one">✦</div>
            <div aria-hidden="true" className="hero3-sparkle hero3-sparkle-two">✧</div>
            <div aria-hidden="true" className="hero3-sparkle hero3-sparkle-three">✦</div>

            {/* Table */}
            <div className="hero3-table" aria-hidden="true">
              <div className="hero3-table-top" />
              <div className="hero3-table-leg hero3-table-leg-left" />
              <div className="hero3-table-leg hero3-table-leg-right" />
            </div>

            {/* Server */}
            <div className={`hero3-server-track ${serving ? "is-serving" : ""}`}>
              <div
                key={animationId}
                className={`hero3-server ${serving ? "is-serving" : ""}`}
                onAnimationEnd={finishServing}
              >
                <ServerIllustration />
                <span className="hero3-server-label">Your host</span>
              </div>
            </div>

            {/* Selected dish */}
            <div
              key={`plate-${animationId}`}
              className={`hero3-serving-plate ${serving ? "is-serving" : ""}`}
            >
              <span className="hero3-plate-symbol" aria-hidden="true">
                {selectedDish.symbol}
              </span>
              <span className="hero3-steam hero3-steam-one" aria-hidden="true" />
              <span className="hero3-steam hero3-steam-two" aria-hidden="true" />
              <span className="hero3-steam hero3-steam-three" aria-hidden="true" />
            </div>

            <div className="hero3-stage-caption">
              <span className="hero3-caption-dot" />
              <span>
                {serving
                  ? "Fresh from the kitchen…"
                  : `${selectedDish.name}, made memorable`}
              </span>
            </div>

            <p className="absolute bottom-5 right-5 z-20 text-xs font-medium text-brand-dark/50 sm:bottom-7 sm:right-7">
              Interactive catering preview
            </p>
          </div>

          <p className="mt-4 text-center text-xs leading-relaxed text-cream/55">
            Tap a dish to change the plate and animate the server. Motion
            respects your device accessibility settings.
          </p>
        </div>
      </div>
    </section>
  );
}
