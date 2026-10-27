import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";

export default async function AdminGuard({ children }) {
  const session = await getSession();
  if (!session) redirect("/admin/login");
  return children;
}