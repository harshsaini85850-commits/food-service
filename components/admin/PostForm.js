"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import PhotoBox from "@/components/PhotoBox";
import PostContent from "@/components/PostContent";
import { slugify } from "@/lib/slugify";

const inputClass =
  "w-full rounded-lg border border-brand/20 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

const smallBtn =
  "rounded-md border border-brand/30 px-3 py-1 text-xs font-semibold text-brand hover:bg-brand hover:text-cream disabled:opacity-50";

export default function PostForm({ initial = {}, mode = "new" }) {
  const router = useRouter();

  const [title, setTitle] = useState(initial.title || "");
  const [slug, setSlug] = useState(initial.slug || "");
  const [slugEdited, setSlugEdited] = useState(Boolean(initial.slug));
  const [category, setCategory] = useState(initial.category || "");
  const [excerpt, setExcerpt] = useState(initial.excerpt || "");
  const [content, setContent] = useState(initial.content || "");
  const [status, setStatus] = useState(initial.status || "published");
  const [cover, setCover] = useState(initial.cover || "");

  const [preview, setPreview] = useState(false);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const bodyFileRef = useRef(null);
  const coverFileRef = useRef(null);

  function onTitleChange(value) {
    setTitle(value);
    if (!slugEdited) setSlug(slugify(value));
  }

  function insert(text) {
    setContent((c) => (c ? `${c}\n\n${text}` : text));
  }

  async function uploadFile(file) {
    if (file.size > 4 * 1024 * 1024) {
      throw new Error("Image is too large. Please use one under 4 MB.");
    }
    const fd = new FormData();
    fd.append("file", file);

    const res = await fetch("/api/upload", { method: "POST", body: fd });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(json.error || "Upload failed.");
    return json.url;
  }

  async function onCoverFile(e) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    setUploading(true);
    setError("");
    try {
      setCover(await uploadFile(file));
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  }

  async function onBodyFile(e) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    setUploading(true);
    setError("");
    try {
      const url = await uploadFile(file);
      const alt = file.name
        .replace(/\.[^.]+$/, "")
        .replace(/[-_]+/g, " ")
        .replace(/[\[\]()]/g, "");
      insert(`![${alt}](${url})`);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      const res = await fetch(
        mode === "edit" ? `/api/posts/${initial.id}` : "/api/posts",
        {
          method: mode === "edit" ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            slug,
            excerpt,
            category,
            content,
            cover,
            status,
          }),
        }
      );
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Could not save the post.");

      router.push("/admin/blog");
      router.refresh();
    } catch (err) {
      setError(err.message);
      setSaving(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Left: writing area */}
        <div className="space-y-5 rounded-2xl bg-white p-6 shadow-sm">
          <div>
            <label className="mb-1 block text-sm font-semibold text-brand">
              Title
            </label>
            <input
              value={title}
              onChange={(e) => onTitleChange(e.target.value)}
              required
              maxLength={160}
              placeholder="e.g. How to Plan a Wedding Menu"
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-brand">
              Web address (slug)
            </label>
            <div className="flex items-center gap-2 text-sm text-ink/60">
              <span>/blog/</span>
              <input
                value={slug}
                onChange={(e) => {
                  setSlug(slugify(e.target.value));
                  setSlugEdited(true);
                }}
                required
                className={inputClass}
              />
            </div>
            {mode === "edit" && (
              <p className="mt-1 text-xs text-ink/50">
                Changing this breaks links already shared for this post.
              </p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-brand">
              Short summary
            </label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={2}
              required
              maxLength={400}
              placeholder="One or two lines shown on the blog list"
              className={inputClass}
            />
          </div>

          <div>
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <label className="text-sm font-semibold text-brand">
                Article content
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => insert("## Heading text")}
                  className={smallBtn}
                >
                  + Heading
                </button>
                <button
                  type="button"
                  onClick={() => bodyFileRef.current?.click()}
                  disabled={uploading}
                  className={smallBtn}
                >
                  {uploading ? "Uploading..." : "+ Upload image"}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    insert("![Image description](https://image-link-here)")
                  }
                  className={smallBtn}
                >
                  + Image link
                </button>
                <button
                  type="button"
                  onClick={() => setPreview(!preview)}
                  className="rounded-md bg-gold px-3 py-1 text-xs font-semibold text-ink"
                >
                  {preview ? "Edit" : "Preview"}
                </button>
              </div>
              <input
                ref={bodyFileRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/avif"
                onChange={onBodyFile}
                className="hidden"
              />
            </div>

            {preview ? (
              <div className="min-h-[320px] rounded-lg border border-brand/20 bg-cream p-5">
                {content.trim() ? (
                  <PostContent content={content} />
                ) : (
                  <p className="text-sm text-ink/50">Nothing to preview yet.</p>
                )}
              </div>
            ) : (
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={14}
                required
                placeholder={
                  "Write your article here.\n\nLeave a blank line between paragraphs.\nStart a line with ## for a heading."
                }
                className={`${inputClass} font-mono`}
              />
            )}
            <p className="mt-2 text-xs text-ink/50">
              Tip: blank line = new paragraph. <code>## Title</code> = heading.
              Each image sits on its own line, like{" "}
              <code>![description](link)</code>.
            </p>
          </div>
        </div>

        {/* Right: publish settings */}
        <aside className="space-y-5">
          <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-heading text-lg font-semibold text-brand">
              Publish
            </h3>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className={inputClass}
            >
              <option value="published">Published (visible on the site)</option>
              <option value="draft">Draft (hidden)</option>
            </select>
            <button
              type="submit"
              disabled={saving || uploading}
              className="w-full rounded-full bg-brand py-3 text-sm font-semibold text-cream transition hover:bg-brand-dark disabled:opacity-60"
            >
              {saving
                ? "Saving..."
                : mode === "edit"
                ? "Save Changes"
                : status === "draft"
                ? "Save Draft"
                : "Publish Post"}
            </button>
          </div>

          <div className="space-y-3 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-heading text-lg font-semibold text-brand">
              Category
            </h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              maxLength={60}
              placeholder="e.g. Wedding Tips"
              className={inputClass}
            />
          </div>

          <div className="space-y-3 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-heading text-lg font-semibold text-brand">
              Cover image
            </h3>
            {cover ? (
              <PhotoBox
                src={cover}
                alt="Cover preview"
                className="h-40 rounded-xl"
              />
            ) : (
              <div className="flex h-40 items-center justify-center rounded-xl border-2 border-dashed border-brand/30 text-sm text-ink/50">
                No image chosen
              </div>
            )}

            <input
              value={cover}
              onChange={(e) => setCover(e.target.value)}
              placeholder="Paste an image link (https://...)"
              className={inputClass}
            />

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => coverFileRef.current?.click()}
                disabled={uploading}
                className={smallBtn}
              >
                {uploading ? "Uploading..." : "Upload image"}
              </button>
              {cover && (
                <button
                  type="button"
                  onClick={() => setCover("")}
                  className={smallBtn}
                >
                  Remove
                </button>
              )}
            </div>
            <input
              ref={coverFileRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/avif"
              onChange={onCoverFile}
              className="hidden"
            />
          </div>
        </aside>
      </div>
    </form>
  );
}