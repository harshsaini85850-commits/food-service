import { site } from "@/lib/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api", "/account"],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}