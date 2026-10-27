export default function FaqList({ items }) {
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {items.map((f) => (
        <details
          key={f.q}
          className="group rounded-2xl border border-brand/15 bg-white p-5 shadow-sm"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-semibold text-brand">
            {f.q}
            <span className="text-2xl text-gold transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">{f.a}</p>
        </details>
      ))}
    </div>
  );
}