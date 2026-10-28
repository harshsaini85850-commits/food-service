import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Quote from "@/models/Quote";
import { sendQuoteEmail } from "@/lib/mailer";
import { getUserSession } from "@/lib/auth";

export async function POST(request) {
  try {
    const body = await request.json();

    // Spam trap: bots fill the hidden field, people don't
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const eventType = String(body.eventType || "").trim();
    const guests = String(body.guests || "").trim();
    const message = String(body.message || "").trim();
    const eventDate = new Date(body.eventDate);

    if (!name || !phone || !eventType || !guests || isNaN(eventDate)) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!/^[0-9+\-\s()]{7,20}$/.test(phone)) {
      return NextResponse.json(
        { error: "Please enter a valid phone number." },
        { status: 400 }
      );
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

        // If a customer is logged in, link the request to their account
    const userSession = await getUserSession();

    await connectDB();

    // 1) Save first, so no lead is ever lost
    const quote = await Quote.create({
            user: userSession?.sub || undefined,
      name,
      phone,
      email,
      eventDate,
      eventType,
      guests,
      message,
    });

    // 2) Then email the owner. If this fails, the quote is still saved.
    try {
      await sendQuoteEmail(quote);
    } catch (mailError) {
      console.error("Quote email failed:", mailError.message);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json(
      { error: "Server error. Please call us instead." },
      { status: 500 }
    );
  }
}