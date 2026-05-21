import { getBlogPostSlugs } from "@/lib/blog-posts";

export const dynamic = "force-static";
import { createPostOgImage } from "@/lib/create-post-og-image";
import { ogContentType, ogSize } from "@/lib/og-template";

export const contentType = ogContentType;
export const size = ogSize;

export function generateStaticParams() {
  return getBlogPostSlugs().map((slug) => ({ slug }));
}

export const alt = "Blog post";

export default createPostOgImage;
