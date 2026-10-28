import Link from "next/link";
import QuoteStatusSelect from "@/components/admin/QuoteStatusSelect";
import DeleteButton from "@/components/admin/DeleteButton";
import { getQuotes } from "@/lib/quotes";

const tabs = [
  { key: "", label: "All" },
  { key: "new", label: "New" },
  { key: "contacted", label: "Contacted" },
  { key: "closed", label: "Closed" },
];

export default async function QuotesPage({ searchParams }) {
  const { status = "" } = await searchParams;
  const quotes = await getQuotes({ status });

  return (
    <>
      <h1 className="font-heading text-3xl font-bold text-brand">
        Quote Requests
      </h1>
      <p className="text-sm text-ink/60">
        Every enquiry from the website forms appears here.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <Link
            key={t.key}
            href={t.key ? `/admin/quotes?status=${t.key}` : "/admin/quotes"}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              status === t.key
                ? "bg-brand text-cream"
                : "bg-white text-brand hover:bg-brand/10"
            }`}
          >
            {t.label}
          </Link>
        ))}
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl bg-white p-2 shadow-sm">
        {quotes.length === 0 ? (
          <p className="p-8 text-center text-sm text-ink/60">
            No quote requests here yet.
          </p>
        ) : (
          <table className="w-full min-w-[960px] text-left text-sm">
            <thead className="text-xs uppercase text-ink/50">
              <tr>
                <th className="p-4">Received</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Event</th>
                <th>Date</th>
                <th>Guests</th>
                <th>Message</th>
                <th>Status</th>
                <th className="pr-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {quotes.map((q) => (
                <tr key={q.id} className="border-t border-ink/10 align-top">
                  <td className="p-4 text-ink/60">{q.createdAt}</td>
                  <td className="font-medium">{q.name}</td>
                  <td>
                    <a
                      href={`tel:${q.phone}`}
                      className="text-brand hover:underline"
                    >
                      {q.phone}
                    </a>
                    {q.email && (
                      <div className="text-xs text-ink/60">{q.email}</div>
                    )}
                  </td>
                  <td>{q.eventType}</td>
                  <td>{q.eventDate}</td>
                  <td>{q.guests}</td>
                  <td className="max-w-[220px] text-ink/70">
                    {q.message || "-"}
                  </td>
                  <td>
                    <QuoteStatusSelect id={q.id} initial={q.status} />
                  </td>
                  <td className="pr-4 text-right">
                    <DeleteButton
                      url={`/api/quotes/${q.id}`}
                      confirmText={`Delete the request from ${q.name}? This cannot be undone.`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}