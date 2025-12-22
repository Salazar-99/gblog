export const metadata = {
    title: {
      default: "Gerardo Salazar",
      template: "%s | Gerardo Salazar",
    },
    description: "Personal site and blog",
  };
  

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen px-6 py-12 md:px-12">
      <article className="prose prose-neutral dark:prose-invert mx-auto max-w-2xl">
        {children}
      </article>
    </main>
  );
}
  