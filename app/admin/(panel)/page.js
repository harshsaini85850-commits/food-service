import Link from "next/link";
import StatusBadge from "@/components/admin/StatusBadge";
import { sampleQuotes } from "@/lib/adminSample";
import { posts } from "@/lib/posts";

export default function AdminDashboard() {
  const newCount = sampleQuotes.filter((q) => q.status === "new").length;

  const stats = [
    {
      label: "New Requests",
      value: newCount,
      icon: "🔔",
      href: "/admin/quotes",
    },
    {
      label: "Total Requests",
      value: sampleQuotes.length,
      icon: "📩",
      href: "/admin/quotes",
    },
    {
      label: "Blog Posts",
      value: posts.length,
      icon: "📝",
      href: "/admin/blog",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-brand">
            Dashboard
          </h1>
          <p className="text-sm text-ink/60">
            Welcome back. Here is today's summary.
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-cream transition hover:bg-brand-dark"
        >
          + Add New Post
        </Link>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        {stats.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="text-4xl">{s.icon}</span>
            <div>
              <p className="font-heading text-3xl font-bold text-brand">
                {s.value}
              </p>
              <p className="text-sm text-ink/60">{s.label}</p>
            </div>
          </Link>
        ))}
      </div>

      <section className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-heading text-xl font-semibold text-brand">
            Recent Quote Requests
          </h2>
          <Link
            href="/admin/quotes"
            className="text-sm font-semibold text-brand hover:text-gold"
          >
            View all →
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="text-xs uppercase text-ink/50">
              <tr>
                <th className="py-2">Name</th>
                <th>Event</th>
                <th>Date</th>
                <th>Guests</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {sampleQuotes.slice(0, 3).map((q) => (
                <tr key={q.id} className="border-t border-ink/10">
                  <td className="py-3 font-medium">{q.name}</td>
                  <td>{q.eventType}</td>
                  <td>{q.eventDate}</td>
                  <td>{q.guests}</td>
                  <td>
                    <StatusBadge status={q.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
