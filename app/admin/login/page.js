"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.get("email"),
          password: form.get("password"),
        }),
      });
      const json = await res.json();

      if (!res.ok) throw new Error(json.error || "Login failed.");

      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-lg border border-brand/20 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 rounded-2xl bg-white p-8 shadow-xl"
      >
        <div className="text-center">
          <Logo className="mx-auto h-16 w-auto" />
          <h1 className="mt-4 font-heading text-2xl font-bold text-brand">
            Admin Login
          </h1>
          <p className="mt-1 text-sm text-ink/60">
            Sign in to manage blog posts and quote requests.
          </p>
        </div>

        <input
          name="email"
          type="email"
          required
          autoComplete="username"
          placeholder="Admin email"
          className={inputClass}
        />
        <input
          name="password"
          type="password"
          required
          autoComplete="current-password"
          placeholder="Password"
          className={inputClass}
        />

        {error && (
          <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-brand py-3 text-sm font-semibold text-cream transition hover:bg-brand-dark disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}