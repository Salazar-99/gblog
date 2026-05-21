import { getBlogPost } from "@/lib/blog-posts";
import {
  createOgImageResponse,
  ogContentType,
  ogSize,
} from "@/lib/og-template";

export { ogContentType as contentType, ogSize as size };

type OgImageRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function createPostOgImage({ params }: OgImageRouteProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return createOgImageResponse({
      title: "Post not found",
    });
  }

  return createOgImageResponse({
    title: post.title,
    description: post.description,
  });
}
