"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  MAP_HEIGHT,
  MAP_WIDTH,
  countryPaths,
  graticulePath,
  project,
  projectToPercent,
} from "@/lib/geo";
import { orgs, places, roles, type OrgId, type Place, type Role } from "@/lib/data";
import OrgLogo from "./OrgLogo";

const OCEANS: { name: string; coords: [number, number] }[] = [
  { name: "Pacific Ocean", coords: [-148, 6] },
  { name: "Atlantic Ocean", coords: [-36, 24] },
  { name: "Indian Ocean", coords: [80, -24] },
];

// How long a callout lingers after the pointer leaves, so it can be reached.
const CLOSE_DELAY = 160;

const rolesByPlace = new Map<string, Role[]>();
for (const r of roles) {
  rolesByPlace.set(r.placeId, [...(rolesByPlace.get(r.placeId) ?? []), r]);
}

const countryCount = new Set(places.map((p) => p.country)).size;
const visited = new Set(places.map((p) => p.countryCode));

// Land tones: countries I've lived in are a shade deeper; the one under the
// pointer turns sage, a quiet tint of the pine accent.
const LAND = "#EFE9DB";
const LAND_VISITED = "#D2BC8E";
const LAND_ACTIVE = "#A9BBA3";

type Pin = Place & { left: number; top: number };

export default function Atlas() {
  const [active, setActive] = useState<string | null>(null);
  const plateRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  const pins = useMemo<Pin[]>(
    () => places.map((p) => ({ ...p, ...projectToPercent(p.coords) })),
    []
  );
  const activePin = pins.find((p) => p.id === active) ?? null;

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  function open(id: string) {
    window.clearTimeout(closeTimer.current);
    setActive(id);
  }
  function keepOpen() {
    window.clearTimeout(closeTimer.current);
  }
  function closeSoon() {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setActive(null), CLOSE_DELAY);
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

  // Hover (or a first tap) opens a place; clicking an open place jumps to its work.
  function selectPin(id: string) {
    const first = rolesByPlace.get(id)?.[0];
    if (active === id && first) {
      window.location.hash = `role-${first.id}`;
    } else {
      open(id);
    }
  }

  function showOnMap(id: string) {
    open(id);
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
        >
          <svg
            viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            <defs>
              <radialGradient id="sea" cx="50%" cy="42%" r="75%">
                <stop offset="0%" stopColor="#FDFBF6" />
                <stop offset="100%" stopColor="#F1EADB" />
              </radialGradient>
            </defs>
            <rect width={MAP_WIDTH} height={MAP_HEIGHT} fill="url(#sea)" />
            <path
              d={graticulePath}
              fill="none"
              stroke="#1F1B16"
              strokeOpacity={0.07}
              strokeWidth={0.6}
            />
            {/* a soft halo along the coasts, like the water line on a printed map */}
            <g fill="none" stroke="#E4D9C2" strokeWidth={3.5} strokeLinejoin="round">
              {countryPaths.map((c, i) => (
                <path key={i} d={c.d} />
              ))}
            </g>
            <g stroke="#CBBD9C" strokeWidth={0.5} strokeLinejoin="round">
              {countryPaths.map((c, i) => (
                <path
                  key={i}
                  d={c.d}
                  fill={
                    c.id === activePin?.countryCode
                      ? LAND_ACTIVE
                      : visited.has(c.id)
                        ? LAND_VISITED
                        : LAND
                  }
                  className="transition-[fill] duration-300"
                />
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
              onOpen={() => open(pin.id)}
              onLeave={closeSoon}
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
              <span className="h-2.5 w-2.5 rounded-full bg-pine ring-2 ring-plate" />
              Hover over a city to see what I did there
            </p>
            <p className="mt-1.5 flex items-center gap-2 text-[12px] text-ink-muted">
              <span className="h-2.5 w-2.5 border border-[#CBBD9C]" style={{ background: LAND_VISITED }} />
              Countries I&apos;ve lived in
            </p>
          </div>

          {activePin && (
            <div
              role="dialog"
              aria-label={activePin.city}
              className="absolute z-30 hidden w-[19rem] md:block"
              style={calloutPosition(activePin)}
              onPointerEnter={keepOpen}
              onPointerLeave={(e) => e.pointerType === "mouse" && closeSoon()}
              onFocus={keepOpen}
              onBlur={closeSoon}
            >
              <span
                aria-hidden
                className={`absolute h-2.5 w-2.5 rotate-45 border-ink/25 bg-plate ${
                  activePin.left > 58
                    ? "-right-[6px] border-r border-t"
                    : "-left-[6px] border-b border-l"
                }`}
                style={activePin.top > 50 ? { bottom: 17 } : { top: 17 }}
              />
              <div className="border border-ink/25 bg-plate p-4 shadow-[0_12px_32px_-14px_rgba(31,27,22,0.35)]">
                <PlaceDetail place={activePin} />
              </div>
            </div>
          )}
        </div>

        <figcaption className="mt-4 font-mono text-[11px] text-ink-faint md:hidden">
          Every place I've lived and worked since 2021. Tap a city, or pick one from the list below.
        </figcaption>
      </figure>

      {activePin && (
        <div className="relative mt-4 border border-ink/20 bg-plate p-4 md:hidden">
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-3 top-3 font-mono text-[11px] text-ink-muted"
          >
            Close
          </button>
          <PlaceDetail place={activePin} />
        </div>
      )}

      <div className="mt-14 grid gap-6 md:grid-cols-[13rem_1fr] md:gap-10">
        <div>
          <h2 className="font-display text-[22px] leading-tight">Where I&apos;ve lived and worked</h2>
        </div>
        <ol className="sm:columns-2 sm:gap-10">
          {places.map((p) => (
            <li key={p.id} className="break-inside-avoid">
              <button
                type="button"
                onMouseEnter={() => open(p.id)}
                onMouseLeave={closeSoon}
                onFocus={() => open(p.id)}
                onBlur={closeSoon}
                onClick={() => showOnMap(p.id)}
                className={`group flex w-full items-center justify-between gap-4 border-t border-ink/10 py-2.5 text-left transition-colors ${
                  p.id === active ? "text-pine" : "text-ink"
                }`}
              >
                <span className="min-w-0">
                  <span className="font-display text-[17px]">{p.city}</span>
                  <span className="ml-2 text-[13px] text-ink-muted">{p.index}</span>
                </span>
                <span className="flex shrink-0 gap-1">
                  {p.orgs.map((id) => (
                    <OrgLogo key={id} id={id} size={22} />
                  ))}
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
  onOpen,
  onLeave,
  onSelect,
}: {
  pin: Pin;
  active: boolean;
  onOpen: () => void;
  onLeave: () => void;
  onSelect: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className="absolute z-10" style={{ left: `${pin.left}%`, top: `${pin.top}%` }}>
      <button
        type="button"
        aria-label={`${pin.city}, ${pin.country}`}
        aria-expanded={active}
        onPointerEnter={(e) => e.pointerType === "mouse" && onOpen()}
        onPointerLeave={(e) => e.pointerType === "mouse" && onLeave()}
        onFocus={(e) => e.currentTarget.matches(":focus-visible") && onOpen()}
        onBlur={onLeave}
        onClick={onSelect}
        className="group absolute grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center rounded-full"
      >
        <span
          className={`block rounded-full bg-pine ring-2 ring-plate shadow-[0_1px_3px_rgba(31,27,22,0.35)] transition-all duration-150 ${
            active
              ? "h-[13px] w-[13px] shadow-[0_0_0_6px_rgba(168,131,76,0.35)] md:h-4 md:w-4"
              : rolesByPlace.has(pin.id)
                ? "h-[9px] w-[9px] group-hover:scale-125 md:h-[13px] md:w-[13px]"
                : "h-[7px] w-[7px] group-hover:scale-125 md:h-[10px] md:w-[10px]"
          }`}
        />
        {/* the city name is part of the hover target */}
        <span
          className={`absolute top-1/2 hidden -translate-y-1/2 whitespace-nowrap px-1 py-1.5 font-display text-[13px] leading-none transition-colors md:block ${
            pin.labelSide === "left" ? "right-[calc(50%+8px)]" : "left-[calc(50%+8px)]"
          } ${active ? "text-pine" : "text-ink/80 group-hover:text-pine"}`}
        >
          {pin.city}
        </span>
      </button>
    </div>
  );
}

function PlaceDetail({ place }: { place: Place }) {
  const here = rolesByPlace.get(place.id) ?? [];
  const covered = new Set<OrgId>(here.map((r) => r.orgId));
  const others = place.orgs.filter((id) => !covered.has(id));

  return (
    <>
      <div className="flex items-baseline justify-between gap-3 pr-10 md:pr-0">
        <p className="font-display text-[21px] leading-tight">{place.city}</p>
        <p className="font-mono text-[11px] text-ink-faint">{place.country}</p>
      </div>
      <p className="mt-2 text-[14px] leading-snug text-ink-muted">{place.note}</p>
      <ul className="mt-3 space-y-1 border-t border-ink/10 pt-3">
        {here.map((r) => (
          <li key={r.id}>
            <a
              href={`#role-${r.id}`}
              className="group -mx-2 flex items-center gap-3 rounded-sm px-2 py-1.5 transition-colors hover:bg-pine/[0.06]"
            >
              <OrgLogo id={r.orgId} size={28} />
              <span className="min-w-0 flex-1 text-[13px] leading-snug">
                <span className="block font-medium text-ink group-hover:text-pine">{r.org}</span>
                <span className="block text-ink-muted">{r.title}</span>
              </span>
              <span className="tabular whitespace-nowrap font-mono text-[11px] text-ink-faint">
                {r.period}
              </span>
            </a>
          </li>
        ))}
        {others.map((id) => (
          <li key={id} className="-mx-2 flex items-center gap-3 px-2 py-1.5">
            <OrgLogo id={id} size={28} />
            <span className="text-[13px] font-medium text-ink">{orgs[id].name}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

// Open the callout toward the side of the plate with more room, with its
// pointer level with the marker.
function calloutPosition(pin: Pin): React.CSSProperties {
  const style: React.CSSProperties = {};
  if (pin.left > 58) style.right = `calc(${100 - pin.left}% + 18px)`;
  else style.left = `calc(${pin.left}% + 18px)`;
  if (pin.top > 50) style.bottom = `calc(${100 - pin.top}% - 22px)`;
  else style.top = `calc(${pin.top}% - 22px)`;
  return style;
}
