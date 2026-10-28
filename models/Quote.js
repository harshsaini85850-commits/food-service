import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    phone: { type: String, required: true, trim: true, maxlength: 20 },
    email: { type: String, trim: true, maxlength: 120, default: "" },
    eventDate: { type: Date, required: true },
    eventType: { type: String, required: true, maxlength: 50 },
    guests: { type: String, required: true, maxlength: 20 },
    message: { type: String, trim: true, maxlength: 1000, default: "" },
    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  },
  { timestamps: true },
);

export default mongoose.models.Quote || mongoose.model("Quote", QuoteSchema);
