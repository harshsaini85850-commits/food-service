"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const inputClass =
  "w-full rounded-lg border border-brand/20 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

export default function AuthForm({ mode }) {
  const router = useRouter();
  const isRegister = mode === "register";
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const payload = Object.fromEntries(new FormData(e.currentTarget));

    if (isRegister && payload.password !== payload.confirm) {
      setError("The two passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`/api/user/${isRegister ? "register" : "login"}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");

      window.dispatchEvent(new Event("auth-changed")); // updates the navbar button
      router.push("/account");
      router.refresh();
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl bg-white p-8 shadow-xl"
    >
      <h2 className="font-heading text-2xl font-bold text-brand">
        {isRegister ? "Create your account" : "Welcome back"}
      </h2>

      {/* Hidden spam trap */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      {isRegister && (
        <input
          name="name"
          required
          autoComplete="name"
          placeholder="Your name"
          className={inputClass}
        />
      )}

      <input
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Email address"
        className={inputClass}
      />

      {isRegister && (
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Phone number (optional)"
          className={inputClass}
        />
      )}

      <input
        name="password"
        type="password"
        required
        minLength={8}
        maxLength={72}
        autoComplete={isRegister ? "new-password" : "current-password"}
        placeholder={isRegister ? "Password (at least 8 characters)" : "Password"}
        className={inputClass}
      />

      {isRegister && (
        <input
          name="confirm"
          type="password"
          required
          autoComplete="new-password"
          placeholder="Repeat password"
          className={inputClass}
        />
      )}

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
        {loading ? "Please wait..." : isRegister ? "Create Account" : "Log In"}
      </button>

      <p className="text-center text-sm text-ink/70">
        {isRegister ? (
          <>
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-brand hover:text-gold">
              Log in
            </Link>
          </>
        ) : (
          <>
            New here?{" "}
            <Link href="/register" className="font-semibold text-brand hover:text-gold">
              Create an account
            </Link>
          </>
        )}
      </p>
    </form>
  );
}