"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "gnode",
    title: "gnode: IaC for a single-node Kubernetes cluster on Azure",
    description: "Having a personal kubernetes cluster to deploy your projects and use as a lab is really convenient. gnode makes deploying a small cluster and exposing it to the internet trivial. In this blog I describe how it works, how to use it, and some of the annoying parts of cloud infrastructure I faced along the way.",
    date: "2025-12-23",
  }
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    let posts = blogPosts;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = blogPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.description.toLowerCase().includes(query)
      );
    }

    // Sort by date descending (most recent first)
    return [...posts].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [searchQuery]);

  return (
    <main className="pt-2 px-12 pb-12">
      <div className="max-w-3xl mx-auto">

        <div className="mb-12">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
          />
        </div>

        <div className="space-y-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0"
              >
                <Link href={`/blog/${post.slug}`} className="block group no-underline">
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {post.description}
                  </p>
                  <time className="text-sm text-gray-500 dark:text-gray-500">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </Link>
              </article>
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 py-8">
              No posts found matching your search.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
