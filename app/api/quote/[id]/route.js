import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "@/lib/mongodb";
import Quote from "@/models/Quote";
import { getSession } from "@/lib/auth";

const STATUSES = ["new", "contacted", "closed"];

// The proxy only guards /admin pages, so API routes must check the pass themselves
async function guard(params) {
  const session = await getSession();
  if (!session) {
    return { error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) };
  }
  const { id } = await params;
  if (!mongoose.isValidObjectId(id)) {
    return { error: NextResponse.json({ error: "Invalid id" }, { status: 400 }) };
  }
  return { id };
}

export async function PATCH(request, { params }) {
  const g = await guard(params);
  if (g.error) return g.error;

  try {
    const { status } = await request.json();
    if (!STATUSES.includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    await connectDB();
    const updated = await Quote.findByIdAndUpdate(g.id, { status }, { new: true });
    if (!updated) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Quote update error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const g = await guard(params);
  if (g.error) return g.error;

  try {
    await connectDB();
    const deleted = await Quote.findByIdAndDelete(g.id);
    if (!deleted) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Quote delete error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}