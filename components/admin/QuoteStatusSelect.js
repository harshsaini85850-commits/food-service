"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const colors = {
  new: "bg-red-100 text-red-700",
  contacted: "bg-amber-100 text-amber-700",
  closed: "bg-green-100 text-green-700",
};

export default function QuoteStatusSelect({ id, initial }) {
  const router = useRouter();
  const [status, setStatus] = useState(initial);
  const [busy, setBusy] = useState(false);

  async function onChange(e) {
    const next = e.target.value;
    const previous = status;
    setStatus(next);
    setBusy(true);

    try {
      const res = await fetch(`/api/quotes/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: next }),
      });
      if (!res.ok) throw new Error("Update failed");
      router.refresh();
    } catch {
      setStatus(previous);
      alert("Could not update the status. Please try again or sign in again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <select
      value={status}
      onChange={onChange}
      disabled={busy}
      className={`rounded-full px-3 py-1 text-xs font-semibold capitalize outline-none ${colors[status]} ${
        busy ? "opacity-60" : ""
      }`}
    >
      <option value="new">New</option>
      <option value="contacted">Contacted</option>
      <option value="closed">Closed</option>
    </select>
  );
}