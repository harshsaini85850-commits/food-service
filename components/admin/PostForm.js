"use client";

import { useState } from "react";
import PhotoBox from "@/components/PhotoBox";
import PostContent from "@/components/PostContent";

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const inputClass =
  "w-full rounded-lg border border-brand/20 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

export default function PostForm({ initial = {}, mode = "new" }) {
  const [title, setTitle] = useState(initial.title || "");
  const [slug, setSlug] = useState(initial.slug || "");
  const [slugEdited, setSlugEdited] = useState(Boolean(initial.slug));
  const [category, setCategory] = useState(initial.category || "");
  const [excerpt, setExcerpt] = useState(initial.excerpt || "");
  const [content, setContent] = useState(initial.content || "");
  const [status, setStatus] = useState("published");
  const [cover, setCover] = useState(initial.cover || "");
  const [preview, setPreview] = useState(false);
  const [notice, setNotice] = useState("");

  function onTitleChange(value) {
    setTitle(value);
    if (!slugEdited) setSlug(slugify(value));
  }

  function onCoverChange(e) {
    const file = e.target.files?.[0];
    if (file) setCover(URL.createObjectURL(file));
  }

  function insert(text) {
    setContent((c) => (c ? `${c}\n\n${text}` : text));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // DEMO ONLY: real saving comes with the backend.
    setNotice(
      "Demo only: nothing was saved. Saving works once the backend is connected."
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {notice && (
        <p className="rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-800">
          {notice}
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
                  className="rounded-md border border-brand/30 px-3 py-1 text-xs font-semibold text-brand hover:bg-brand hover:text-cream"
                >
                  + Heading
                </button>
                <button
                  type="button"
                  onClick={() =>
                    insert("![Image description](https://image-link-here)")
                  }
                  className="rounded-md border border-brand/30 px-3 py-1 text-xs font-semibold text-brand hover:bg-brand hover:text-cream"
                >
                  + Image
                </button>
                <button
                  type="button"
                  onClick={() => setPreview(!preview)}
                  className="rounded-md bg-gold px-3 py-1 text-xs font-semibold text-ink"
                >
                  {preview ? "Edit" : "Preview"}
                </button>
              </div>
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
              The <b>+ Image</b> button adds an image line. After the backend is
              built, uploading a picture will fill in its link automatically.
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
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
            <button
              type="submit"
              className="w-full rounded-full bg-brand py-3 text-sm font-semibold text-cream transition hover:bg-brand-dark"
            >
              {mode === "edit" ? "Save Changes" : "Publish Post"}
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
              type="file"
              accept="image/*"
              onChange={onCoverChange}
              className="block w-full text-sm file:mr-3 file:rounded-full file:border-0 file:bg-gold file:px-4 file:py-2 file:text-xs file:font-semibold file:text-ink"
            />
          </div>
        </aside>
      </div>
    </form>
  );
}