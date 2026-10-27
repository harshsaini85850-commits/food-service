"use client";

import { useEffect, useState } from "react";
import QuoteForm from "@/components/QuoteForm";

export default function QuotePopup() {
  const [open, setOpen] = useState(false);

  // Listen for the "open-quote" signal from buttons across the site
  useEffect(() => {
    const openIt = () => setOpen(true);
    window.addEventListener("open-quote", openIt);
    return () => window.removeEventListener("open-quote", openIt);
  }, []);

  // Close with Esc and lock page scrolling while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink/70 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative my-8 w-full max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute -top-3 -right-3 z-10 h-9 w-9 rounded-full bg-gold text-lg font-bold text-ink shadow-lg"
        >
          ✕
        </button>
        <QuoteForm />
      </div>
    </div>
  );
}