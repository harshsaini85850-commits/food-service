import Link from "next/link";
import PostForm from "@/components/admin/PostForm";

export default function NewPostPage() {
  return (
    <>
      <Link href="/admin/blog" className="text-sm font-semibold text-brand hover:text-gold">
        ← Back to posts
      </Link>
      <h1 className="mb-6 mt-3 font-heading text-3xl font-bold text-brand">
        Add New Post
      </h1>
      <PostForm mode="new" />
    </>
  );
}