import { SignJWT, jwtVerify } from "jose";

export const COOKIE_NAME = "cc_admin";
export const MAX_AGE = 60 * 60 * 24 * 7; // admin: 7 days

export const USER_COOKIE = "cc_user";
export const USER_MAX_AGE = 60 * 60 * 24 * 30; // customers: 30 days

function secretKey() {
  const secret = process.env.JWT_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("JWT_SECRET is missing or too short in .env.local");
  }
  return new TextEncoder().encode(secret);
}

/* ---------- Admin ---------- */
export async function createSessionToken(email) {
  return new SignJWT({ role: "admin", email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secretKey());
}

export async function verifySessionToken(token) {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secretKey());
    return payload.role === "admin" ? payload : null;
  } catch {
    return null;
  }
}

/* ---------- Customers ---------- */
export async function createUserToken(userId) {
  return new SignJWT({ role: "user" })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(String(userId))
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(secretKey());
}

export async function verifyUserToken(token) {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secretKey());
    return payload.role === "user" && payload.sub ? payload : null;
  } catch {
    return null;
  }
}