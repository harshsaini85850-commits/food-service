"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="h-11 w-11 rounded-full bg-gold text-lg font-bold text-ink shadow-lg transition hover:scale-110"
        >
          ↑
        </button>
      )}
      <a
        href={site.phoneLink}
        aria-label="Call us"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-xl text-white shadow-lg transition hover:scale-110"
      >
        📞
      </a>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-xl text-white shadow-lg transition hover:scale-110"
      >
        💬
      </a>
    </div>
  );
}
