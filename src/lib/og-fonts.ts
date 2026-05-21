import { readFile } from "node:fs/promises";
import { join } from "node:path";

const geistSansDir = join(
  process.cwd(),
  "node_modules/geist/dist/fonts/geist-sans",
);

let fontsPromise: Promise<{
  regular: ArrayBuffer;
  bold: ArrayBuffer;
}> | null = null;

function toArrayBuffer(buffer: Buffer): ArrayBuffer {
  return Uint8Array.from(buffer).buffer;
}

/** Loads the same Geist Sans files as `geist/font/sans` (blog body + headings). */
export function loadOgFonts() {
  if (!fontsPromise) {
    fontsPromise = Promise.all([
      readFile(join(geistSansDir, "Geist-Regular.ttf")),
      readFile(join(geistSansDir, "Geist-Bold.ttf")),
    ]).then(([regular, bold]) => ({
      regular: toArrayBuffer(regular),
      bold: toArrayBuffer(bold),
    }));
  }
  return fontsPromise;
}
