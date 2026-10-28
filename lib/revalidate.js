import { revalidateTag, revalidatePath } from "next/cache";

export function refreshBlog() {
  try {
    revalidateTag("posts", { expire: 0 }); // expire immediately
  } catch {
    revalidateTag("posts", "max"); // fallback for other Next.js 16 versions
  }
  revalidatePath("/blog");
  revalidatePath("/blog/[slug]", "page");
}