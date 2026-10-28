import { NextResponse } from "next/server";
import {
  COOKIE_NAME,
  USER_COOKIE,
  verifySessionToken,
  verifyUserToken,
} from "@/lib/session";

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  /* ---------- Admin area ---------- */
  if (pathname.startsWith("/admin")) {
    const session = await verifySessionToken(
      request.cookies.get(COOKIE_NAME)?.value
    );

    if (pathname.startsWith("/admin/login")) {
      if (session) return NextResponse.redirect(new URL("/admin", request.url));
      return NextResponse.next();
    }

    if (!session) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
    return NextResponse.next();
  }

  /* ---------- Customer area ---------- */
  const user = await verifyUserToken(request.cookies.get(USER_COOKIE)?.value);

  if (pathname.startsWith("/account")) {
    if (!user) return NextResponse.redirect(new URL("/login", request.url));
    return NextResponse.next();
  }

  // Already logged in? Skip the login and register pages.
  if (pathname === "/login" || pathname === "/register") {
    if (user) return NextResponse.redirect(new URL("/account", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/account/:path*", "/login", "/register"],
};