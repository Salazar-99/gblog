import {
  createOgImageResponse,
  ogContentType,
  ogSize,
} from "@/lib/og-template";

export const dynamic = "force-static";
export const alt = "Blog";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createOgImageResponse({
    title: "Blog",
    description: "Personal site and blog",
  });
}
