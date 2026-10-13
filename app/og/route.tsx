import { ImageResponse } from "next/og";
import { places, profile } from "@/lib/data";

export const runtime = "nodejs";

const WIDTH = 1200;
const HEIGHT = 630;

// Load a Google Font as TTF for Satori. Returns null on any failure so the
// image still renders with the bundled default font.
async function loadFont(family: string, weight: number): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}`,
      {
        headers: {
          // an old UA makes Google Fonts serve TTF (Satori can't read woff2)
          "User-Agent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6) AppleWebKit/533",
        },
      }
    ).then((r) => r.text());
    const match = css.match(/src:\s*url\((.+?)\)\s*format\('(?:truetype|opentype|woff)'\)/);
    if (!match) return null;
    return await fetch(match[1]).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export async function GET() {
  const [display, body, mono] = await Promise.all([
    loadFont("Fraunces", 400),
    loadFont("Libre+Franklin", 400),
    loadFont("IBM+Plex+Mono", 400),
  ]);

  const fonts = [
    display && { name: "Fraunces", data: display, weight: 400 as const, style: "normal" as const },
    body && { name: "Libre Franklin", data: body, weight: 400 as const, style: "normal" as const },
    mono && { name: "IBM Plex Mono", data: mono, weight: 400 as const, style: "normal" as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; weight: 400; style: "normal" }[];

  const countries = new Set(places.map((p) => p.country)).size;
  const ink = "#1F1B16";
  const muted = "#615A4D";
  const faint = "#9A907F";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 36,
          background: "#F6F1E7",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: `1px solid rgba(31,27,22,0.28)`,
            padding: "54px 60px",
            background: "#FBF8F1",
            fontFamily: body ? "Libre Franklin" : undefined,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontFamily: mono ? "IBM Plex Mono" : undefined,
              fontSize: 20,
              color: muted,
            }}
          >
            <div style={{ display: "flex" }}>{profile.now.join("  ·  ")}</div>
            <div style={{ display: "flex" }}>haidergillani.com</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: display ? "Fraunces" : undefined,
                fontSize: 124,
                lineHeight: 1,
                letterSpacing: -4,
                color: ink,
              }}
            >
              {profile.name}
            </div>
            <div style={{ display: "flex", fontSize: 30, color: muted, marginTop: 28 }}>
              {`AI engineer. Places lived and worked, 2021 – 2026.`}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {places.map((p) => (
                <div key={p.id} style={{ display: "flex", alignItems: "center", marginRight: 28, marginBottom: 10 }}>
                  <div
                    style={{ width: 10, height: 10, borderRadius: 999, background: "#23574A", marginRight: 9 }}
                  />
                  <div style={{ display: "flex", fontSize: 21, color: ink }}>{p.city}</div>
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: mono ? "IBM Plex Mono" : undefined,
                fontSize: 17,
                color: faint,
              }}
            >
              {`${places.length} places · ${countries} countries`}
            </div>
          </div>
        </div>
      </div>
    ),
    { width: WIDTH, height: HEIGHT, fonts: fonts.length ? fonts : undefined }
  );
}
