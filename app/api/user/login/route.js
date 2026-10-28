import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { startUserSession } from "@/lib/auth";
import { tooMany } from "@/lib/rateLimit";

// Used when the email doesn't exist, so the reply takes the same time either way
const DUMMY_HASH = bcrypt.hashSync("not-a-real-password", 10);

export async function POST(request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";

    if (tooMany(`login:${ip}`, 10, 15 * 60 * 1000)) {
      return NextResponse.json(
        { error: "Too many attempts. Please try again in 15 minutes." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");

    await connectDB();

    const user = await User.findOne({ email }).lean();
    const ok = await bcrypt.compare(password, user ? user.passwordHash : DUMMY_HASH);

    if (!user || !ok) {
      return NextResponse.json(
        { error: "Incorrect email or password." },
        { status: 401 }
      );
    }

    await startUserSession(user._id);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("User login error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}