import { slugify } from "@/lib/slugify";

export function readPostInput(body) {
  const title = String(body.title || "").trim();
  const slug = slugify(body.slug || title);
  const excerpt = String(body.excerpt || "").trim();
  const category = String(body.category || "").trim();
  const content = String(body.content || "").trim();
  const cover = String(body.cover || "").trim();
  const status = body.status === "draft" ? "draft" : "published";

  let error = "";
  if (!title || !slug || !excerpt || !category || !content) {
    error = "Please fill in the title, web address, summary, category and content.";
  } else if (title.length > 160) {
    error = "The title must be under 160 characters.";
  } else if (excerpt.length > 400) {
    error = "The short summary must be under 400 characters.";
  } else if (content.length > 100000) {
    error = "The article is too long.";
  } else if (cover && !/^https?:\/\//i.test(cover)) {
    error = "The cover image must be a full link starting with https://";
  }

  return { error, data: { title, slug, excerpt, category, content, cover, status } };
}