
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const inputClass =
  "w-full rounded-lg border border-brand/20 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

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
      const res = await fetch(
        `/api/user/${isRegister ? "register" : "login"}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(json.error || "Something went wrong.");
      }

      // Update the navbar authentication button.
      window.dispatchEvent(new Event("auth-changed"));

      // Redirect after successful login or registration.
      router.push("/account");
      router.refresh();
    } catch (err) {
      setError(err.message || "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl bg-white p-6 shadow-xl sm:p-8"
    >
      {/* Heading and Admin Login button */}
      <div className="flex flex-col gap-4 border-b border-brand/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-heading text-2xl font-bold text-brand">
          {isRegister ? "Create your account" : "Welcome back"}
        </h2>

        <Link
          href="/admin/login"
          className="inline-flex shrink-0 items-center justify-center rounded-full border-2 border-brand px-5 py-2 text-sm font-semibold text-brand transition duration-200 hover:bg-brand hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          Admin Login
        </Link>
      </div>

      {/* Hidden spam trap */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {/* Name */}
      {isRegister && (
        <input
          name="name"
          required
          autoComplete="name"
          placeholder="Your name"
          className={inputClass}
        />
      )}

      {/* Email */}
      <input
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Email address"
        className={inputClass}
      />

      {/* Phone */}
      {isRegister && (
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Phone number (optional)"
          className={inputClass}
        />
      )}

      {/* Password */}
      <input
        name="password"
        type="password"
        required
        minLength={8}
        maxLength={72}
        autoComplete={isRegister ? "new-password" : "current-password"}
        placeholder={
          isRegister ? "Password (at least 8 characters)" : "Password"
        }
        className={inputClass}
      />

      {/* Confirm password */}
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

      {/* Error message */}
      {error && (
        <p
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
        >
          {error}
        </p>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-brand py-3 text-sm font-semibold text-cream transition duration-200 hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading
          ? "Please wait..."
          : isRegister
            ? "Create Account"
            : "Log In"}
      </button>

      {/* Switch between login and registration */}
      <p className="text-center text-sm text-ink/70">
        {isRegister ? (
          <>
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-brand hover:text-gold"
            >
              Log in
            </Link>
          </>
        ) : (
          <>
            New here?{" "}
            <Link
              href="/register"
              className="font-semibold text-brand hover:text-gold"
            >
              Create an account
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
