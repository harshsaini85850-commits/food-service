import mongoose from "mongoose";
import { cacheTag, cacheLife } from "next/cache";
import connectDB from "@/lib/mongodb";
import Post from "@/models/Post";
import { connection } from "next/server";

function readTime(content = "") {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

// Turns a database record into plain data that pages can safely use
function serialize(p) {
  return {
    id: String(p._id),
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    content: p.content,
    cover: p.cover || "",
    status: p.status,
    date: new Date(p.publishedAt || p.createdAt).toISOString(),
    readTime: readTime(p.content),
  };
}

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/* ---------- PUBLIC reads (cached, published posts only) ---------- */

export async function getAllPosts() {
  "use cache";
  cacheTag("posts");
  cacheLife("hours");

  await connectDB();
  const docs = await Post.find({ status: "published" })
    .sort({ publishedAt: -1, createdAt: -1 })
    .lean();
  return docs.map(serialize);
}

export async function getPostBySlug(slug) {
  "use cache";
  cacheTag("posts");
  cacheLife("hours");

  await connectDB();
  const doc = await Post.findOne({ slug, status: "published" }).lean();
  return doc ? serialize(doc) : null;
}

/* ---------- ADMIN reads (always fresh, includes drafts) ---------- */

/* ---------- ADMIN reads (always fresh, includes drafts) ---------- */

export async function getAdminPosts() {
  await connection(); // wait for a real visitor, never run at build time
  await connectDB();
  const docs = await Post.find({}).sort({ createdAt: -1 }).lean();
  return docs.map(serialize);
}

export async function getAdminPostById(id) {
  await connection();
  if (!mongoose.isValidObjectId(id)) return null;
  await connectDB();
  const doc = await Post.findById(id).lean();
  return doc ? serialize(doc) : null;
}

export async function getPostCount() {
  await connection();
  await connectDB();
  return Post.countDocuments();
}