export default function BlogLoading() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse overflow-hidden rounded-2xl bg-white shadow-sm"
          >
            <div className="h-52 bg-ink/10" />
            <div className="space-y-3 p-6">
              <div className="h-4 w-1/3 rounded bg-ink/10" />
              <div className="h-6 w-4/5 rounded bg-ink/10" />
              <div className="h-4 w-full rounded bg-ink/10" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
