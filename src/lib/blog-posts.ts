export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
}

/** Add new posts here; pair each slug with `src/content/blog/<slug>.mdx`. */
export const blogPosts: BlogPost[] = [
  {
    slug: "gchat-0",
    title: "gchat-0: The Origin Story",
    description:
      "My JAX implementation of nanochat for training LLMs on TPUs",
    date: "2026-05-20",
  },
  {
    slug: "gnode",
    title: "gnode: IaC for a single-node Kubernetes cluster on Azure",
    description:
      "Having a personal kubernetes cluster to deploy your projects and use as a lab is really convenient. gnode makes deploying a small cluster and exposing it to the internet trivial. In this blog I describe how it works, how to use it, and some of the annoying parts of cloud infrastructure I faced along the way.",
    date: "2025-12-23",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
