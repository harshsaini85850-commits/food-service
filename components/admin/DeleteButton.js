"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteButton({
  url,
  label = "Delete",
  confirmText = "Delete this item? This cannot be undone.",
  redirectTo,
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function onClick() {
    if (!window.confirm(confirmText)) return;
    setBusy(true);

    try {
      const res = await fetch(url, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      if (redirectTo) router.push(redirectTo);
      router.refresh();
    } catch {
      alert("Could not delete. Please try again or sign in again.");
      setBusy(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={busy}
      className="font-semibold text-red-600 hover:underline disabled:opacity-50"
    >
      {busy ? "..." : label}
    </button>
  );
}