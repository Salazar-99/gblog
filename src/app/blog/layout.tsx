import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: "%s | Gerardo Salazar",
  },
  description: "Personal site and blog",
  openGraph: {
    title: "Blog",
    description: "Personal site and blog",
    type: "website",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Personal site and blog",
  },
};
  

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen px-6 py-12 md:px-12">
      <article className="prose prose-neutral dark:prose-invert mx-auto max-w-2xl font-sans">
        {children}
      </article>
    </main>
  );
}
  