"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AuthButton({ className = "", onClick }) {
  const [user, setUser] = useState(undefined); // undefined = still checking

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        const res = await fetch("/api/user/me", { cache: "no-store" });
        const json = await res.json();
        if (alive) setUser(json.user);
      } catch {
        if (alive) setUser(null);
      }
    }

    load();
    window.addEventListener("auth-changed", load);
    return () => {
      alive = false;
      window.removeEventListener("auth-changed", load);
    };
  }, []);

  if (user === undefined) return null;

  if (user) {
    return (
      <Link href="/account" onClick={onClick} className={className}>
        👤 {user.name.split(" ")[0]}
      </Link>
    );
  }

  return (
    <Link href="/login" onClick={onClick} className={className}>
      Login
    </Link>
  );
}