import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/lib/og-fonts";
import { siteSansFamily } from "@/lib/site-fonts";

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = "image/png";

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength - 1).trimEnd()}…`;
}

export type OgImageProps = {
  title: string;
  description?: string;
};

export async function createOgImageResponse({
  title,
  description,
}: OgImageProps) {
  const { regular, bold } = await loadOgFonts();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 72,
          background:
            "linear-gradient(145deg, #0a0a0a 0%, #171717 45%, #262626 100%)",
          color: "#fafafa",
          fontFamily: siteSansFamily,
        }}
      >
        <div
          style={{
            fontSize: 36,
            fontWeight: 400,
            letterSpacing: "-0.02em",
            color: "rgba(255, 255, 255, 0.85)",
          }}
        >
          Gerardo Salazar
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            gap: 24,
            paddingTop: 40,
            paddingBottom: 16,
          }}
        >
          <div
            style={{
              fontSize: title.length > 48 ? 52 : 60,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          {description ? (
            <div
              style={{
                fontSize: 28,
                fontWeight: 400,
                lineHeight: 1.35,
                color: "rgba(255, 255, 255, 0.5)",
                maxWidth: 960,
              }}
            >
              {truncate(description, 140)}
            </div>
          ) : null}
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        {
          name: siteSansFamily,
          data: regular,
          weight: 400,
          style: "normal",
        },
        {
          name: siteSansFamily,
          data: bold,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
