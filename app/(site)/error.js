"use client";

export default function Error({ reset }) {
  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-5xl">😕</p>
      <h1 className="mt-4 font-heading text-3xl font-bold text-brand">
        Something went wrong
      </h1>
      <p className="mt-3 text-ink/70">
        Please try again. If it keeps happening, call us and we will help
        right away.
      </p>
      <button
        onClick={() => reset()}
        className="mt-8 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-cream transition hover:bg-brand-dark"
      >
        Try Again
      </button>
    </section>
  );
}