import { Suspense } from "react";
import { redirect } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import OpenQuoteButton from "@/components/OpenQuoteButton";
import LogoutButton from "@/components/LogoutButton";
import StatusBadge from "@/components/admin/StatusBadge";
import { getUserSession } from "@/lib/auth";
import { getUserById } from "@/lib/users";
import { getUserQuotes } from "@/lib/quotes";

export const metadata = {
  title: "My Account | CC Catering & Event Service",
  robots: { index: false, follow: false },
};

export default function AccountPage() {
  return (
    <>
      <PageHeader
        title="My Account"
        subtitle="Your details and the quote requests you have sent us."
      />
      {/* Suspense is needed because this page reads the login cookie */}
      <Suspense
        fallback={
          <div className="mx-auto max-w-4xl px-4 py-20 text-center text-ink/60">
            Loading your account...
          </div>
        }
      >
        <AccountContent />
      </Suspense>
    </>
  );
}

async function AccountContent() {
  const session = await getUserSession();
  if (!session) redirect("/login");

  const user = await getUserById(session.sub);

  // Cookie is valid but the account is gone (for example it was deleted)
  if (!user) {
    return (
      <section className="mx-auto max-w-md px-4 py-20 text-center">
        <p className="mb-6 text-ink/75">
          We could not find your account. Please log out and sign up again.
        </p>
        <LogoutButton />
      </section>
    );
  }

  const quotes = await getUserQuotes(user.id);

  return (
    <section className="mx-auto max-w-4xl space-y-10 px-4 py-16">
      <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-white p-6 shadow-sm">
        <div>
          <h2 className="font-heading text-2xl font-bold text-brand">
            {user.name}
          </h2>
          <p className="mt-1 text-sm text-ink/70">{user.email}</p>
          {user.phone && <p className="text-sm text-ink/70">{user.phone}</p>}
        </div>
        <div className="flex flex-wrap gap-3">
          <OpenQuoteButton className="rounded-full bg-brand px-6 py-2 text-sm font-semibold text-cream transition hover:bg-brand-dark">
            New Quote Request
          </OpenQuoteButton>
          <LogoutButton />
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 font-heading text-xl font-semibold text-brand">
          My Quote Requests
        </h2>

        {quotes.length === 0 ? (
          <p className="py-6 text-center text-sm text-ink/60">
            You have not sent any request while logged in yet. Use "New Quote
            Request" and it will show up here.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="text-xs uppercase text-ink/50">
                <tr>
                  <th className="py-2">Sent</th>
                  <th>Event</th>
                  <th>Event date</th>
                  <th>Guests</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {quotes.map((q) => (
                  <tr key={q.id} className="border-t border-ink/10">
                    <td className="py-3 text-ink/60">{q.createdAt}</td>
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
        )}
      </div>
    </section>
  );
}