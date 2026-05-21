import {
  createOgImageResponse,
  ogContentType,
  ogSize,
} from "@/lib/og-template";

export const dynamic = "force-static";

export const alt = "Gerardo Salazar";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createOgImageResponse({
    title: "Gerardo Salazar",
    description:
      "Software Engineering · Machine Learning",
  });
}
