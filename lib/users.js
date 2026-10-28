import mongoose from "mongoose";
import { connection } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function getUserById(id) {
  await connection();
  if (!mongoose.isValidObjectId(id)) return null;
  await connectDB();
  const u = await User.findById(id).lean();
  if (!u) return null;
  return {
    id: String(u._id),
    name: u.name,
    email: u.email,
    phone: u.phone || "",
  };
}