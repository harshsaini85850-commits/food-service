import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 120,
    },
    title: { type: String, required: true, trim: true, maxlength: 160 },
    excerpt: { type: String, required: true, trim: true, maxlength: 400 },
    category: { type: String, required: true, trim: true, maxlength: 60 },
    content: { type: String, required: true },
    cover: { type: String, default: "" },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "published",
    },
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);