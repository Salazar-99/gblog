import Image from "next/image";
import { cn } from "@/lib/utils";

type BlogImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  className?: string;
};

export function BlogImage({
  src,
  alt,
  width = 1200,
  height = 800,
  caption,
  className,
}: BlogImageProps) {
  return (
    <figure className={cn("not-prose my-8", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full rounded-lg border border-border"
        sizes="(max-width: 672px) 100vw, 672px"
      />
      {caption ? (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
