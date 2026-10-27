import PageHeader from "@/components/PageHeader";
import BlogCard from "@/components/BlogCard";
import CtaBand from "@/components/CtaBand";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Catering Blog | Tips, Menus & Event Ideas | CC Catering",
  description:
    "Catering tips, menu ideas and event planning advice for weddings, parties and corporate events in Delhi NCR.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <PageHeader
        title="Our Blog"
        subtitle="Menu ideas, planning tips and stories from the catering kitchen."
      />

      <section className="mx-auto max-w-7xl px-4 py-20">
        {posts.length === 0 ? (
          <p className="text-center text-ink/70">
            No posts yet. Please check back soon.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>

      <CtaBand />
    </>
  );
}