"use client";

import { useEffect, useState } from "react";

const eventTypes = [
  "Wedding / Shaadi",
  "Birthday",
  "Corporate Event",
  "Kitty Party",
  "Pooja",
  "Anniversary",
  "Other",
];

const guestRanges = ["50–100", "100–200", "200–500", "500+"];

const inputClass =
  "w-full rounded-lg border border-brand/20 bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

export default function QuoteForm({ onSuccess }) {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) throw new Error(json.error || "Something went wrong.");

      setStatus("success");
      form.reset();
      onSuccess?.();
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
        <div className="mb-3 text-5xl">🎉</div>
        <h3 className="font-heading text-2xl text-brand">Thank you!</h3>
        <p className="mt-2 text-sm text-ink/80">
          We have received your request and will respond within 2 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-brand underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 rounded-2xl bg-white p-6 shadow-xl"
    >
      <h3 className="font-heading text-2xl text-brand">Get a Free Quote</h3>

      {/* Hidden spam trap: real people never fill this */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <input
        name="name"
        required
        placeholder="Your Name"
        className={inputClass}
      />

      <div className="grid gap-3 sm:grid-cols-2">
        <input
          name="phone"
          type="tel"
          required
          placeholder="Phone Number"
          className={inputClass}
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          className={inputClass}
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <input
          name="eventDate"
          type="date"
          min={minDate}
          required
          className={inputClass}
        />
        <select
          name="guests"
          required
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>
            Number of Guests
          </option>
          {guestRanges.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      <select
        name="eventType"
        required
        defaultValue=""
        className={inputClass}
      >
        <option value="" disabled>
          Type of Event
        </option>
        {eventTypes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <textarea
        name="message"
        rows={3}
        placeholder="Message / Special Requirements"
        className={inputClass}
      />

      {status === "error" && (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-brand py-3 text-sm font-semibold text-cream transition hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Request My Free Quote"}
      </button>

      <p className="text-center text-xs text-ink/60">
        We respond within 2 hours!
      </p>
    </form>
  );
}