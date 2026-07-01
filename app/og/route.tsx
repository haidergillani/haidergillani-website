import { ImageResponse } from "next/og";
import { profile, locations } from "@/lib/data";

export const runtime = "nodejs";

// Load a Google Font as TTF for Satori. Returns null on any failure so the
// image still renders with the bundled default font.
async function loadFont(
  family: string,
  weight: number
): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}`,
      {
        headers: {
          // an old UA makes Google Fonts serve TTF (Satori can't read woff2)
          "User-Agent":
            "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6) AppleWebKit/533",
        },
      }
    ).then((r) => r.text());
    const match = css.match(
      /src:\s*url\((.+?)\)\s*format\('(?:truetype|opentype|woff)'\)/
    );
    if (!match) return null;
    return await fetch(match[1]).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export async function GET() {
  const [serif, sans] = await Promise.all([
    loadFont("Fraunces", 600),
    loadFont("Inter", 500),
  ]);

  const fonts = [
    serif && { name: "Fraunces", data: serif, weight: 600 as const, style: "normal" as const },
    sans && { name: "Inter", data: sans, weight: 500 as const, style: "normal" as const },
  ].filter(Boolean) as {
    name: string;
    data: ArrayBuffer;
    weight: 600 | 500;
    style: "normal";
  }[];

  const serifFamily = serif ? "Fraunces" : "serif";
  const sansFamily = sans ? "Inter" : "sans-serif";

  const countries = new Set(locations.map((l) => l.country)).size;
  const featured = locations.filter((l) => l.featured).slice(0, 6);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F7F2E7",
          padding: 70,
          fontFamily: sansFamily,
          border: "10px solid #F7F2E7",
          outline: "1px solid rgba(33,28,21,0.14)",
          outlineOffset: -70,
        }}
      >
        {/* top row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 60,
                height: 60,
                borderRadius: 14,
                background: "#255C4A",
                color: "#F7F2E7",
                fontFamily: serifFamily,
                fontSize: 32,
              }}
            >
              HG
            </div>
            <div
              style={{
                fontSize: 20,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#6E6552",
              }}
            >
              haidergillani.com
            </div>
          </div>
          <div
            style={{
              fontSize: 18,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#255C4A",
              fontWeight: 600,
            }}
          >
            AI Engineer
          </div>
        </div>

        {/* center */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: serifFamily,
              fontSize: 108,
              lineHeight: 1.02,
              letterSpacing: -3,
              color: "#211C15",
            }}
          >
            Haider Gillani
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 26 }}>
            <div style={{ width: 54, height: 3, background: "#B08D57" }} />
            <div
              style={{
                fontSize: 34,
                color: "#255C4A",
                fontFamily: serifFamily,
                fontStyle: "italic",
              }}
            >
              a world map of where I&apos;ve built
            </div>
          </div>
          <div style={{ fontSize: 26, color: "#6E6552", marginTop: 22 }}>
            {`${locations.length} cities · ${countries} countries · 4 continents`}
          </div>
        </div>

        {/* bottom row of pins */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {featured.map((l, i) => (
            <div key={l.id} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {i > 0 && <div style={{ width: 44, height: 2, background: "rgba(37,92,74,0.35)" }} />}
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <div
                  style={{
                    width: 13,
                    height: 13,
                    borderRadius: 999,
                    background: "#255C4A",
                    border: "2px solid #B08D57",
                  }}
                />
                <div style={{ fontSize: 20, color: "#211C15" }}>{l.city}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { width: size().width, height: size().height, fonts: fonts.length ? fonts : undefined }
  );
}

function size() {
  return { width: 1200, height: 630 };
}
