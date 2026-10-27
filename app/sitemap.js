import { site } from "@/lib/site";
import { getAllPosts } from "@/lib/posts";

export default async function sitemap() {
  const pages = ["", "/our-services", "/about-us", "/contact-us", "/blog"].map(
    (path) => ({
      url: `${site.url}${path}`,
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.8,
    })
  );

  const posts = await getAllPosts();
  const postUrls = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: p.date,
    priority: 0.6,
  }));

  return [...pages, ...postUrls];
}