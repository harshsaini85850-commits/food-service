import Link from "next/link";

export default function PageHeader({ title, subtitle }) {
  return (
    <section className="bg-brand py-16 text-center text-cream">
      <div className="mx-auto max-w-3xl px-4">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          / {title}
        </p>
        <h1 className="font-heading text-4xl font-bold sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 leading-relaxed text-cream/85">{subtitle}</p>
        )}
      </div>
    </section>
  );
}