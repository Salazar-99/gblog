import type { ComponentType } from "react";
import { getBlogPostSlugs } from "@/lib/blog-posts";

const postModules: Record<
  string,
  () => Promise<{ default: ComponentType }>
> = {
  "gchat-0": () => import("@/content/blog/gchat-0.mdx"),
  grl: () => import("@/content/blog/grl.mdx"),
  gnode: () => import("@/content/blog/gnode.mdx"),
};

export async function loadPostContent(slug: string) {
  const load = postModules[slug];
  if (!load) {
    return null;
  }
  return load();
}

/** Slugs that have a content file (should match `blog-posts.ts`). */
export function getContentSlugs(): string[] {
  return getBlogPostSlugs().filter((slug) => slug in postModules);
}
