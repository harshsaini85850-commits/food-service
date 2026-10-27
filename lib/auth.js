import { cookies } from "next/headers";
import { COOKIE_NAME, verifySessionToken } from "@/lib/session";

export async function getSession() {
  const store = await cookies();
  return verifySessionToken(store.get(COOKIE_NAME)?.value);
}