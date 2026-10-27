export default function StatsBand({ stats }) {
  return (
    <section className="bg-brand py-14 text-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-heading text-3xl font-bold text-gold sm:text-4xl">
              {s.value}
            </p>
            <p className="mt-2 text-sm uppercase tracking-wider text-cream/85">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}