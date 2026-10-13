"use client";

import { useMemo, useRef, useState } from "react";
import {
  MAP_HEIGHT,
  MAP_WIDTH,
  countryPaths,
  formatCoords,
  graticulePath,
  project,
  projectToPercent,
} from "@/lib/geo";
import { places, roles, type Place, type Role } from "@/lib/data";

const OCEANS: { name: string; coords: [number, number] }[] = [
  { name: "Pacific Ocean", coords: [-148, 6] },
  { name: "Atlantic Ocean", coords: [-36, 24] },
  { name: "Indian Ocean", coords: [80, -24] },
];

const rolesByPlace = new Map<string, Role[]>();
for (const r of roles) {
  rolesByPlace.set(r.placeId, [...(rolesByPlace.get(r.placeId) ?? []), r]);
}

const countryCount = new Set(places.map((p) => p.country)).size;

type Pin = Place & { left: number; top: number };

export default function Atlas() {
  const [active, setActive] = useState<string | null>(null);
  const plateRef = useRef<HTMLDivElement>(null);

  const pins = useMemo<Pin[]>(
    () => places.map((p) => ({ ...p, ...projectToPercent(p.coords) })),
    []
  );
  const activePin = pins.find((p) => p.id === active) ?? null;

  // Hover previews a place; clicking an already-open place jumps to its work.
  function selectPin(id: string) {
    const first = rolesByPlace.get(id)?.[0];
    if (active === id && first) {
      window.location.hash = `role-${first.id}`;
    } else {
      setActive(id);
    }
  }

  // Markers sit close together on small screens and their tap targets overlap,
  // so a tap resolves to whichever marker is nearest the finger.
  function nearestPin(clientX: number, clientY: number): string | null {
    const rect = plateRef.current?.getBoundingClientRect();
    if (!rect) return null;
    let best: string | null = null;
    let bestDist = Infinity;
    for (const p of pins) {
      const dx = rect.left + (p.left / 100) * rect.width - clientX;
      const dy = rect.top + (p.top / 100) * rect.height - clientY;
      const dist = dx * dx + dy * dy;
      if (dist < bestDist) {
        bestDist = dist;
        best = p.id;
      }
    }
    return best;
  }

  function showOnMap(id: string) {
    setActive(id);
    plateRef.current?.scrollIntoView({ block: "center" });
  }

  return (
    <section
      id="map"
      aria-label="Map of places lived and worked"
      className="mx-auto max-w-plate px-4 sm:px-6"
    >
      <figure>
        <div
          ref={plateRef}
          className="relative border border-ink/25 bg-plate outline outline-1 outline-offset-[5px] outline-ink/10"
          style={{ aspectRatio: `${MAP_WIDTH} / ${MAP_HEIGHT}` }}
          onMouseLeave={() => setActive(null)}
        >
          <svg
            viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            <path
              d={graticulePath}
              fill="none"
              stroke="#1F1B16"
              strokeOpacity={0.08}
              strokeWidth={0.6}
            />
            <g fill="#E9E0CC" stroke="#CFC2A4" strokeWidth={0.5} strokeLinejoin="round">
              {countryPaths.map((d, i) => (
                <path key={i} d={d} />
              ))}
            </g>
            <g
              className="font-display"
              fill="#1F1B16"
              fillOpacity={0.34}
              fontSize={12.5}
              fontStyle="italic"
              letterSpacing={2.4}
              textAnchor="middle"
            >
              {OCEANS.map((o) => {
                const [x, y] = project(o.coords);
                return (
                  <text key={o.name} x={x} y={y}>
                    {o.name}
                  </text>
                );
              })}
            </g>
          </svg>

          {pins.map((pin) => (
            <Marker
              key={pin.id}
              pin={pin}
              active={pin.id === active}
              onPreview={() => setActive(pin.id)}
              onSelect={(e) =>
                // e.detail is 0 when the click comes from the keyboard
                selectPin(e.detail === 0 ? pin.id : nearestPin(e.clientX, e.clientY) ?? pin.id)
              }
            />
          ))}

          <div className="absolute bottom-[7%] left-[2.5%] hidden border border-ink/25 bg-plate/95 px-4 py-3 outline outline-1 outline-offset-[3px] outline-ink/15 md:block">
            <p className="font-display text-[15px] italic leading-tight">
              Places lived and worked
            </p>
            <p className="tabular mt-1 font-mono text-[11px] text-ink-muted">
              2021 – 2026 · {places.length} places · {countryCount} countries
            </p>
            <p className="mt-2.5 flex items-center gap-2 text-[12px] text-ink-muted">
              <span className="h-2 w-2 rounded-full bg-pine ring-[1.5px] ring-plate" />
              Hover a place to see what I did there
            </p>
          </div>

          {activePin && (
            <div
              className="pointer-events-auto absolute z-20 hidden w-72 md:block"
              style={calloutPosition(activePin)}
            >
              <div className="border border-ink/25 bg-plate p-4 shadow-[0_10px_30px_-14px_rgba(31,27,22,0.35)]">
                <PlaceDetail place={activePin} />
              </div>
            </div>
          )}
        </div>

        <figcaption className="mt-4 font-mono text-[11px] text-ink-faint md:hidden">
          Places lived and worked, 2021 – 2026. Tap a marker or a place below.
        </figcaption>
      </figure>

      {activePin && (
        <div className="mt-4 border border-ink/20 bg-plate p-4 md:hidden">
          <PlaceDetail place={activePin} />
        </div>
      )}

      <div className="mt-14 grid gap-6 md:grid-cols-[13rem_1fr] md:gap-10">
        <div>
          <h2 className="font-display text-[22px] leading-tight">
            Index of places
          </h2>
          <p className="mt-1.5 text-[14px] text-ink-muted">
            West to east, the way you read the map.
          </p>
        </div>
        <ol
          className="sm:columns-2 sm:gap-10"
          onMouseLeave={() => setActive(null)}
        >
          {places.map((p) => (
            <li key={p.id} className="break-inside-avoid">
              <button
                type="button"
                onMouseEnter={() => setActive(p.id)}
                onFocus={() => setActive(p.id)}
                onClick={() => showOnMap(p.id)}
                className={`flex w-full items-baseline justify-between gap-4 border-t border-ink/10 py-2.5 text-left transition-colors ${
                  p.id === active ? "text-pine" : "text-ink"
                }`}
              >
                <span>
                  <span className="font-display text-[17px]">{p.city}</span>
                  <span className="ml-2 text-[13px] text-ink-muted">{p.index}</span>
                </span>
                <span className="tabular hidden whitespace-nowrap font-mono text-[11px] text-ink-faint lg:inline">
                  {formatCoords(p.coords)}
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Marker({
  pin,
  active,
  onPreview,
  onSelect,
}: {
  pin: Pin;
  active: boolean;
  onPreview: () => void;
  onSelect: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className="absolute z-10" style={{ left: `${pin.left}%`, top: `${pin.top}%` }}>
      <button
        type="button"
        aria-label={`${pin.city}, ${pin.country}`}
        onPointerEnter={(e) => e.pointerType === "mouse" && onPreview()}
        onFocus={(e) => e.currentTarget.matches(":focus-visible") && onPreview()}
        onClick={onSelect}
        className="absolute grid h-7 w-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full"
      >
        <span
          className={`block rounded-full bg-pine ring-[1.5px] ring-plate transition-all duration-150 ${
            active
              ? "h-[11px] w-[11px] shadow-[0_0_0_4px_rgba(168,131,76,0.4)]"
              : "h-2 w-2"
          }`}
        />
      </button>
      <span
        className={`pointer-events-none absolute top-0 hidden -translate-y-1/2 whitespace-nowrap font-display text-[13px] leading-none md:block ${
          pin.labelSide === "left" ? "right-[10px]" : "left-[10px]"
        } ${active ? "text-pine" : "text-ink/80"}`}
      >
        {pin.city}
      </span>
    </div>
  );
}

function PlaceDetail({ place }: { place: Place }) {
  const here = rolesByPlace.get(place.id) ?? [];
  return (
    <>
      <p className="font-display text-[21px] leading-tight">{place.city}</p>
      <p className="tabular mt-1 font-mono text-[11px] text-ink-faint">
        {place.country} · {formatCoords(place.coords)}
      </p>
      <p className="mt-3 text-[14px] leading-snug text-ink-muted">{place.note}</p>
      {here.length > 0 && (
        <ul className="mt-3 space-y-2 border-t border-ink/10 pt-3">
          {here.map((r) => (
            <li key={r.id}>
              <a
                href={`#role-${r.id}`}
                className="group flex items-baseline justify-between gap-3 text-[13.5px] leading-snug"
              >
                <span>
                  <span className="font-medium text-ink group-hover:text-pine">{r.org}</span>
                  <span className="text-ink-muted"> · {r.title}</span>
                </span>
                <span className="tabular whitespace-nowrap font-mono text-[11px] text-ink-faint">
                  {r.period}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

// Open the callout toward the side of the plate with more room.
function calloutPosition(pin: Pin): React.CSSProperties {
  const style: React.CSSProperties = {};
  if (pin.left > 58) style.right = `calc(${100 - pin.left}% + 16px)`;
  else style.left = `calc(${pin.left}% + 16px)`;
  if (pin.top > 50) style.bottom = `calc(${100 - pin.top}% - 18px)`;
  else style.top = `calc(${pin.top}% - 18px)`;
  return style;
}
