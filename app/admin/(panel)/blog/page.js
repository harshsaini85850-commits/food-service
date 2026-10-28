import Link from "next/link";
import StatusBadge from "@/components/admin/StatusBadge";
import { getAdminPosts, formatDate } from "@/lib/posts";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function AdminBlogPage() {
  const posts = await getAdminPosts();

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-brand">
            Blog Posts
          </h1>
          <p className="text-sm text-ink/60">Add, edit or remove articles.</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-cream transition hover:bg-brand-dark"
        >
          + Add New Post
        </Link>
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl bg-white p-2 shadow-sm">
        {posts.length === 0 ? (
          <p className="p-8 text-center text-sm text-ink/60">
            No posts yet. Click "Add New Post" to write the first one.
          </p>
        ) : (
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="text-xs uppercase text-ink/50">
              <tr>
                <th className="p-4">Title</th>
                <th>Category</th>
                <th>Date</th>
                <th>Status</th>
                <th className="pr-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((p) => (
                <tr key={p.id} className="border-t border-ink/10">
                  <td className="p-4 font-medium">{p.title}</td>
                  <td>{p.category}</td>
                  <td>{formatDate(p.date)}</td>
                  <td>
                    <StatusBadge status={p.status} />
                  </td>
                  <td className="pr-4 text-right">
                    {p.status === "published" && (
                      <Link
                        href={`/blog/${p.slug}`}
                        target="_blank"
                        className="mr-3 text-ink/60 hover:text-brand"
                      >
                        View
                      </Link>
                    )}
                    <Link
                      href={`/admin/blog/${p.id}/edit`}
                      className="font-semibold text-brand hover:text-gold"
                    >
                      Edit
                    </Link>
                    <span className="ml-3">
                      <DeleteButton
                        url={`/api/posts/${p.id}`}
                        confirmText={`Delete "${p.title}"? This cannot be undone.`}
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
