import Link from "next/link";
import PhotoBox from "@/components/PhotoBox";
import { formatDate } from "@/lib/posts";

export default function BlogCard({ post }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/blog/${post.slug}`} className="block">
        <PhotoBox src={post.cover} alt={post.title} className="h-52" />
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-3 text-xs">
          <span className="rounded-full bg-gold/20 px-3 py-1 font-semibold text-brand">
            {post.category}
          </span>
          <span className="text-ink/60">{formatDate(post.date)}</span>
        </div>

        <h3 className="mt-3 font-heading text-xl font-semibold text-brand">
          <Link href={`/blog/${post.slug}`} className="hover:text-gold">
            {post.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-ink/75">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-5 inline-block text-sm font-semibold text-brand hover:text-gold"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}