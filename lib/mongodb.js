import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// Reuse one connection instead of opening a new one on every request
let cached = global._mongoose;
if (!cached) {
  cached = global._mongoose = { conn: null, promise: null };
}

export default async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is missing in .env.local");
  }

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false });
  }

  try {
    cached.conn = await cached.promise;
    console.log(`✅ MongoDB connected: ${cached.conn.connection.name}`);
  } catch (err) {
    cached.promise = null; // allow a retry on the next request
    console.error("❌ MongoDB connection failed:", err.message);
    throw err;
  }

  return cached.conn;
}