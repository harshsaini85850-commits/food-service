import Link from "next/link";
import { notFound } from "next/navigation";
import PhotoBox from "@/components/PhotoBox";
import PostContent from "@/components/PostContent";
import BlogCard from "@/components/BlogCard";
import CtaBand from "@/components/CtaBand";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: "Post not found | CC Catering" };

  return {
    title: `${post.title} | CC Catering Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const all = await getAllPosts();
  const related = all.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 py-14">
        <Link
          href="/blog"
          className="text-sm font-semibold text-brand hover:text-gold"
        >
          ← Back to Blog
        </Link>

        <div className="mt-6 flex items-center gap-3 text-xs">
          <span className="rounded-full bg-gold/20 px-3 py-1 font-semibold text-brand">
            {post.category}
          </span>
          <span className="text-ink/60">
            {formatDate(post.date)} · {post.readTime}
          </span>
        </div>

        <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-brand sm:text-5xl">
          {post.title}
        </h1>

        <PhotoBox
          src={post.cover}
          alt={post.title}
          className="mt-8 h-72 rounded-3xl shadow-lg sm:h-[26rem]"
        />

        <div className="mt-10">
          <PostContent content={post.content} />
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="mb-8 text-center font-heading text-3xl font-bold text-brand">
              More from the Blog
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title="Planning an Event?"
        text="Tell us about your celebration and get a free menu and quote within 2 hours."
      />
    </>
  );
}