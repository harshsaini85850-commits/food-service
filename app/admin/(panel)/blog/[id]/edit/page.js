import Link from "next/link";
import { notFound } from "next/navigation";
import PostForm from "@/components/admin/PostForm";
import DeleteButton from "@/components/admin/DeleteButton";
import { getAdminPostById } from "@/lib/posts";

export default async function EditPostPage({ params }) {
  const { id } = await params;
  const post = await getAdminPostById(id);

  if (!post) notFound();

  return (
    <>
      <Link href="/admin/blog" className="text-sm font-semibold text-brand hover:text-gold">
        ← Back to posts
      </Link>

      <div className="mb-6 mt-3 flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-heading text-3xl font-bold text-brand">Edit Post</h1>
        <DeleteButton
          url={`/api/posts/${post.id}`}
          redirectTo="/admin/blog"
          label="Delete this post"
          confirmText={`Delete "${post.title}"? This cannot be undone.`}
        />
      </div>

      <PostForm mode="edit" initial={post} />
    </>
  );
}