import Link from "next/link";
import { notFound } from "next/navigation";
import PostForm from "@/components/admin/PostForm";

import { getAllPosts, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ id: p.slug }));
}

export default async function EditPostPage({ params }) {
  const { id } = await params;
  const post = await getPostBySlug(id);

  if (!post) notFound();

  return (
    <>
      <Link href="/admin/blog" className="text-sm font-semibold text-brand hover:text-gold">
        ← Back to posts
      </Link>
      <h1 className="mb-6 mt-3 font-heading text-3xl font-bold text-brand">
        Edit Post
      </h1>
      <PostForm mode="edit" initial={post} />
    </>
  );
}