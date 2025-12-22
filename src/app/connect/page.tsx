import { LinkedInIcon, XIcon, GitHubIcon } from "@/components/icons";

export default function ConnectPage() {
  return (
    <main className="flex min-h-[calc(100vh-73px)] flex-col items-center justify-center">
      <div className="flex items-center gap-16">
        <a
          href="https://linkedin.com/in/gsalazar01"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black transition-opacity hover:opacity-60 dark:text-white"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="h-20 w-20" />
        </a>
        <a
          href="https://x.com/g_spyglass"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black transition-opacity hover:opacity-60 dark:text-white"
          aria-label="X"
        >
          <XIcon className="h-20 w-20" />
        </a>
        <a
          href="https://github.com/Salazar-99"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black transition-opacity hover:opacity-60 dark:text-white"
          aria-label="GitHub"
        >
          <GitHubIcon className="h-20 w-20" />
        </a>
      </div>
    </main>
  );
}

