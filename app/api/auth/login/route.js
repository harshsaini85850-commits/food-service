import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { COOKIE_NAME, MAX_AGE, createSessionToken } from "@/lib/session";

// Simple brute-force brake: 5 wrong tries per 15 minutes per IP.
// (In-memory, so it resets on restart. It's a speed bump, not a fortress.)
const failures = new Map();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_FAILS = 5;

function isLocked(ip) {
  const rec = failures.get(ip);
  if (!rec) return false;
  if (Date.now() - rec.first > WINDOW_MS) {
    failures.delete(ip);
    return false;
  }
  return rec.count >= MAX_FAILS;
}

function recordFailure(ip) {
  const rec = failures.get(ip);
  if (!rec || Date.now() - rec.first > WINDOW_MS) {
    failures.set(ip, { count: 1, first: Date.now() });
  } else {
    rec.count += 1;
  }
}

export async function POST(request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";

    if (isLocked(ip)) {
      return NextResponse.json(
        { error: "Too many attempts. Please try again in 15 minutes." },
        { status: 429 }
      );
    }

    const { ADMIN_EMAIL, ADMIN_PASSWORD_HASH } = process.env;
    if (!ADMIN_EMAIL || !ADMIN_PASSWORD_HASH) {
      console.error("ADMIN_EMAIL or ADMIN_PASSWORD_HASH missing in .env.local");
      return NextResponse.json({ error: "Server is not set up." }, { status: 500 });
    }

    const body = await request.json();
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");

    const emailOk = email === ADMIN_EMAIL.trim().toLowerCase();
    // Always run the password check, so response time doesn't reveal if the email was right
    const passwordOk = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);

    if (!emailOk || !passwordOk) {
      recordFailure(ip);
      return NextResponse.json(
        { error: "Incorrect email or password." },
        { status: 401 }
      );
    }

    failures.delete(ip);

    const token = await createSessionToken(email);
    const store = await cookies();
    store.set(COOKIE_NAME, token, {
      httpOnly: true, // JavaScript in the browser can't read it
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: MAX_AGE,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}