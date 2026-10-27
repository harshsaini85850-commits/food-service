import nodemailer from "nodemailer";

// Stops visitor text from breaking the email's HTML
const esc = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export async function sendQuoteEmail(q) {
  const { EMAIL_USER, EMAIL_APP_PASSWORD, OWNER_EMAIL } = process.env;

  if (!EMAIL_USER || !EMAIL_APP_PASSWORD || !OWNER_EMAIL) {
    throw new Error("Email settings are missing in .env.local");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: EMAIL_USER, pass: EMAIL_APP_PASSWORD },
  });

  const date = new Date(q.eventDate).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  await transporter.sendMail({
    from: `"CC Catering Website" <${EMAIL_USER}>`,
    to: OWNER_EMAIL,
    replyTo: q.email || undefined,
    subject: `New quote request: ${q.eventType} (${q.guests} guests)`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:520px">
        <h2 style="color:#8b1e2d;margin-bottom:4px">New Quote Request</h2>
        <p style="color:#666;margin-top:0">Received from the website form</p>
        <table cellpadding="8" style="font-size:14px;border-collapse:collapse;width:100%">
          <tr><td style="background:#fff8ec"><b>Name</b></td><td>${esc(q.name)}</td></tr>
          <tr><td style="background:#fff8ec"><b>Phone</b></td><td><a href="tel:${esc(q.phone)}">${esc(q.phone)}</a></td></tr>
          <tr><td style="background:#fff8ec"><b>Email</b></td><td>${esc(q.email) || "-"}</td></tr>
          <tr><td style="background:#fff8ec"><b>Event</b></td><td>${esc(q.eventType)}</td></tr>
          <tr><td style="background:#fff8ec"><b>Date</b></td><td>${date}</td></tr>
          <tr><td style="background:#fff8ec"><b>Guests</b></td><td>${esc(q.guests)}</td></tr>
          <tr><td style="background:#fff8ec"><b>Message</b></td><td>${esc(q.message) || "-"}</td></tr>
        </table>
        <p style="color:#666;font-size:13px">Reply to this email to reach the customer (if they gave an email), or call the number above.</p>
      </div>
    `,
  });
}