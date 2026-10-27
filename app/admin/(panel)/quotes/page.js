import StatusBadge from "@/components/admin/StatusBadge";
import { sampleQuotes } from "@/lib/adminSample";

export default function QuotesPage() {
  return (
    <>
      <h1 className="font-heading text-3xl font-bold text-brand">
        Quote Requests
      </h1>
      <p className="text-sm text-ink/60">
        Every enquiry from the website forms will appear here.
      </p>

      <div className="mt-8 overflow-x-auto rounded-2xl bg-white p-2 shadow-sm">
        <table className="w-full min-w-[900px] text-left text-sm">
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
            </tr>
          </thead>
          <tbody>
            {sampleQuotes.map((q) => (
              <tr key={q.id} className="border-t border-ink/10 align-top">
                <td className="p-4 text-ink/60">{q.createdAt}</td>
                <td className="font-medium">{q.name}</td>
                <td>
                  <a href={`tel:${q.phone}`} className="text-brand hover:underline">
                    {q.phone}
                  </a>
                  {q.email && <div className="text-xs text-ink/60">{q.email}</div>}
                </td>
                <td>{q.eventType}</td>
                <td>{q.eventDate}</td>
                <td>{q.guests}</td>
                <td className="max-w-[220px] text-ink/70">{q.message || "-"}</td>
                <td>
                  <StatusBadge status={q.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}