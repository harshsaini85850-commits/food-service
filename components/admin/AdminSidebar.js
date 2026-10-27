"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Logo from "@/components/Logo";

const items = [
  { href: "/admin", label: "Dashboard", icon: "📊", exact: true },
  { href: "/admin/quotes", label: "Quote Requests", icon: "📩" },
  { href: "/admin/blog", label: "Blog Posts", icon: "📝" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (item) =>
    item.exact ? pathname === item.href : pathname.startsWith(item.href);

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  const base =
    "flex items-center gap-3 whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition";

  return (
    <aside className="bg-ink text-cream lg:min-h-screen lg:w-64 lg:shrink-0">
      <div className="flex items-center gap-3 px-5 py-4 lg:py-6">
        <Logo className="h-10 w-auto" />
        <div>
          <p className="font-heading text-lg leading-tight">CC Catering</p>
          <p className="text-xs text-cream/60">Admin Panel</p>
        </div>
      </div>

      <nav className="flex gap-1 overflow-x-auto px-3 pb-3 lg:flex-col lg:pb-0">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${base} ${
              isActive(item)
                ? "bg-brand text-cream"
                : "text-cream/75 hover:bg-white/10"
            }`}
          >
            <span>{item.icon}</span>
            {item.label}
          </Link>
        ))}

        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} text-cream/75 hover:bg-white/10`}
        >
          <span>🌐</span> View Website
        </a>

        <button
          type="button"
          onClick={logout}
          className={`${base} text-cream/75 hover:bg-white/10 lg:mt-6`}
        >
          <span>🚪</span> Logout
        </button>
      </nav>
    </aside>
  );
}