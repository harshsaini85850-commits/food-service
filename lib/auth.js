import { cookies } from "next/headers";
import {
  COOKIE_NAME,
  USER_COOKIE,
  USER_MAX_AGE,
  verifySessionToken,
  verifyUserToken,
  createUserToken,
} from "@/lib/session";

const cookieBase = {
  httpOnly: true, // JavaScript in the browser can't read it
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  path: "/",
};

/* Admin */
export async function getSession() {
  const store = await cookies();
  return verifySessionToken(store.get(COOKIE_NAME)?.value);
}

/* Customers */
export async function getUserSession() {
  const store = await cookies();
  return verifyUserToken(store.get(USER_COOKIE)?.value);
}

export async function startUserSession(userId) {
  const token = await createUserToken(userId);
  const store = await cookies();
  store.set(USER_COOKIE, token, { ...cookieBase, maxAge: USER_MAX_AGE });
}

export async function endUserSession() {
  const store = await cookies();
  store.set(USER_COOKIE, "", { ...cookieBase, maxAge: 0 });
}