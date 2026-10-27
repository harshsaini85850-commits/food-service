import { Suspense } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminGuard from "@/components/admin/AdminGuard";

export default function PanelLayout({ children }) {
  return (
    // Suspense is required because the guard reads cookies (Next.js 16 rule)
    <Suspense fallback={<div className="min-h-screen bg-cream" />}>
      <AdminGuard>
        <div className="min-h-screen bg-cream lg:flex">
          <AdminSidebar />
          <div className="min-w-0 flex-1 p-5 sm:p-8">{children}</div>
        </div>
      </AdminGuard>
    </Suspense>
  );
}