"use client";

export default function OpenQuoteButton({ children, className = "" }) {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event("open-quote"))}
      className={className}
    >
      {children}
    </button>
  );
}