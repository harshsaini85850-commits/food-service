import { NextResponse } from "next/server";
import { getUserSession } from "@/lib/auth";
import { getUserById } from "@/lib/users";

export async function GET() {
  const session = await getUserSession();
  if (!session) return NextResponse.json({ user: null });

  const user = await getUserById(session.sub);
  if (!user) return NextResponse.json({ user: null });

  return NextResponse.json({ user: { name: user.name, email: user.email } });
}