"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function logout() {
    setBusy(true);
    await fetch("/api/user/logout", { method: "POST" });
    window.dispatchEvent(new Event("auth-changed"));
    router.push("/");
    router.refresh();
  }

  return (
    <button
      onClick={logout}
      disabled={busy}
      className="rounded-full border-2 border-brand px-6 py-2 text-sm font-semibold text-brand transition hover:bg-brand hover:text-cream disabled:opacity-60"
    >
      {busy ? "Logging out..." : "Log Out"}
    </button>
  );
}