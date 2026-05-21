# gblog

This is the source code for my personal website and blog at [gerardosalazar.com](https://gerardosalazar.com).

It's a Next.js app with `shadcn` components and MDX for content.

It's currently deployed on [my single-node kubernetes cluster](https://github.com/Salazar-99/gnode) and has CI/CD configured via GitHub Actions and Azure Container Registry (see `.github/workflows/deploy.yaml`).

## Adding a blog post

A post is split across three places: metadata registry, MDX body, and a route loader. The slug must match in all three.

### 1. Register metadata — `src/lib/blog-posts.ts`

Add an entry to the `blogPosts` array. This drives the blog index, page `<title>` / `og:description`, and the subtitle on the share preview card.

```ts
{
  slug: "my-post",           // URL: /blog/my-post
  title: "My Post Title",
  description: "Short summary for the index and social previews.",
  date: "2026-05-19",        // ISO date; used for sorting (newest first)
},
```

### 2. Write the article — `src/content/blog/<slug>.mdx`

Create `src/content/blog/my-post.mdx` with the post body in MDX (headings, links, code blocks, etc.). Do not export `metadata` here — use `blog-posts.ts` instead.

```mdx
# My Post Title
2026-05-19

## Section

Your content here.
```

#### Images and diagrams

- **Photos and figures:** put files under `public/blog/<slug>/` (e.g. `public/blog/gchat-0/photo.jpg`). They are served at `/blog/<slug>/photo.jpg`. Use the `BlogImage` component:

```mdx
import { BlogImage } from "@/components/blog/blog-image";

<BlogImage
  src="/blog/my-post/photo.jpg"
  alt="Description for screen readers"
  width={1200}
  height={800}
  caption="Optional caption"
/>
```

- **SVG diagrams:** add a React component under `src/components/blog/diagrams/` and import it in the MDX file (see `gcs-tpu-flow.tsx`).

### 3. Wire the import — `src/lib/post-content.ts`

Add a line to `postModules` so the dynamic route can load the file:

```ts
"my-post": () => import("@/content/blog/my-post.mdx"),
```

### 4. Verify

```bash
npm run dev
```

- Post: http://localhost:3010/blog/my-post
- Share card: http://localhost:3010/blog/my-post/opengraph-image

On `npm run build`, Next.js also pre-renders Open Graph / Twitter images from `src/lib/og-template.tsx` (title + `description` from `blog-posts.ts`).

## Development

Run the development server (fixed port **3010** so it does not collide with Docker on 3000):

```bash
npm run dev
```

### Preview Open Graph cards locally

Open the image routes in a browser (not the blog HTML page):

- http://localhost:3010/opengraph-image
- http://localhost:3010/blog/opengraph-image
- http://localhost:3010/blog/SLUG/opengraph-image (e.g. `gchat-0`)

If you see a blank white page, check the terminal: when port 3010 is taken, Next.js picks another port (e.g. 3002). Use whatever URL `next dev` prints. Hitting the wrong port (often **3000**, used by other local services) returns 404 and looks like an empty image.

