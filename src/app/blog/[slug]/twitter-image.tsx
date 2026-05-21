import { getBlogPostSlugs } from "@/lib/blog-posts";
import { createPostOgImage } from "@/lib/create-post-og-image";
import { ogContentType, ogSize } from "@/lib/og-template";

export const dynamic = "force-static";
export const alt = "Blog post";
export const contentType = ogContentType;
export const size = ogSize;

export function generateStaticParams() {
  return getBlogPostSlugs().map((slug) => ({ slug }));
}

export default createPostOgImage;
