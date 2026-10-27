import connectDB from "@/lib/mongodb";
import Quote from "@/models/Quote";

const STATUSES = ["new", "contacted", "closed"];

const day = (d) => (d ? new Date(d).toISOString().slice(0, 10) : "");

// Turns a database record into plain data that pages can safely use
function serialize(q) {
  return {
    id: String(q._id),
    name: q.name,
    phone: q.phone,
    email: q.email || "",
    eventType: q.eventType,
    eventDate: day(q.eventDate),
    guests: q.guests,
    message: q.message || "",
    status: q.status,
    createdAt: day(q.createdAt),
  };
}

export async function getQuotes({ status, limit = 100 } = {}) {
  await connectDB();
  const filter = STATUSES.includes(status) ? { status } : {};
  const docs = await Quote.find(filter)
    .sort({ createdAt: -1 })
    .limit(limit)
    .lean();
  return docs.map(serialize);
}

export async function getQuoteCounts() {
  await connectDB();
  const [total, newCount] = await Promise.all([
    Quote.countDocuments(),
    Quote.countDocuments({ status: "new" }),
  ]);
  return { total, newCount };
}