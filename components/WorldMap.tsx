"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { countryPaths, projectToPercent, MAP_WIDTH, MAP_HEIGHT } from "@/lib/geo";
import { locations, type Location } from "@/lib/data";

type Positioned = Location & { left: number; top: number };

export default function WorldMap() {
  const [active, setActive] = useState<string | null>(null);

  const pins = useMemo<Positioned[]>(
    () =>
      locations.map((loc) => {
        const { left, top } = projectToPercent(loc.coordinates);
        return { ...loc, left, top };
      }),
    []
  );

  return (
    <div
      className="relative w-full select-none"
      style={{ aspectRatio: `${MAP_WIDTH} / ${MAP_HEIGHT}` }}
      onMouseLeave={() => setActive(null)}
    >
      {/* Map */}
      <svg
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        className="absolute inset-0 h-full w-full overflow-visible"
        role="img"
        aria-label="World map showing the cities Haider Gillani has lived and worked in"
      >
        <defs>
          <radialGradient id="mapGlow" cx="50%" cy="42%" r="60%">
            <stop offset="0%" stopColor="#16223b" />
            <stop offset="100%" stopColor="#0a0e1a" />
          </radialGradient>
        </defs>
        <rect
          x="0"
          y="0"
          width={MAP_WIDTH}
          height={MAP_HEIGHT}
          fill="url(#mapGlow)"
        />
        <g>
          {countryPaths.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="#1a2438"
              stroke="#2b3a58"
              strokeWidth={0.5}
              className="transition-colors"
            />
          ))}
        </g>
        {/* connective arcs between home base and each city */}
        <g stroke="#d9b168" strokeWidth={0.6} fill="none" opacity={0.16}>
          {pins.slice(1).map((p) => {
            const home = pins[0];
            const x1 = (home.left / 100) * MAP_WIDTH;
            const y1 = (home.top / 100) * MAP_HEIGHT;
            const x2 = (p.left / 100) * MAP_WIDTH;
            const y2 = (p.top / 100) * MAP_HEIGHT;
            const mx = (x1 + x2) / 2;
            const my = Math.min(y1, y2) - Math.abs(x2 - x1) * 0.18 - 12;
            return <path key={p.id} d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`} />;
          })}
        </g>
      </svg>

      {/* Pins + cards */}
      {pins.map((pin) => (
        <Pin
          key={pin.id}
          pin={pin}
          active={active === pin.id}
          onEnter={() => setActive(pin.id)}
          onToggle={() =>
            setActive((cur) => (cur === pin.id ? null : pin.id))
          }
        />
      ))}
    </div>
  );
}

function Pin({
  pin,
  active,
  onEnter,
  onToggle,
}: {
  pin: Positioned;
  active: boolean;
  onEnter: () => void;
  onToggle: () => void;
}) {
  const openLeft = pin.left > 62;
  const openUp = pin.top > 58;
  const size = pin.featured ? 13 : 10;

  return (
    <div
      className="absolute z-10"
      style={{ left: `${pin.left}%`, top: `${pin.top}%` }}
    >
      <button
        type="button"
        onMouseEnter={onEnter}
        onFocus={onEnter}
        onClick={onToggle}
        aria-label={`${pin.city}, ${pin.country}`}
        className="group absolute -translate-x-1/2 -translate-y-1/2 outline-none"
        style={{ width: size + 14, height: size + 14 }}
      >
        {/* pulse */}
        <span
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/60 animate-pulseRing"
          style={{ width: size, height: size }}
        />
        {/* dot */}
        <span
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-soft bg-gold shadow-[0_0_12px_rgba(217,177,104,0.9)] transition-transform duration-200 ${
            active ? "scale-150" : "group-hover:scale-125"
          }`}
          style={{ width: size, height: size }}
        />
      </button>

      {/* label under featured pins for a sense of the map even before hover */}
      {pin.featured && !active && (
        <span
          className="pointer-events-none absolute -translate-x-1/2 translate-y-2 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.18em] text-haze/70"
          style={{ left: 0, top: 8 }}
        >
          {pin.city}
        </span>
      )}

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute z-30 w-[min(78vw,300px)]"
            style={{
              left: openLeft ? "auto" : 14,
              right: openLeft ? 14 : "auto",
              top: openUp ? "auto" : 14,
              bottom: openUp ? 14 : "auto",
            }}
            onMouseEnter={onEnter}
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-850/95 shadow-2xl backdrop-blur-xl ring-1 ring-black/40">
              <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="text-2xl leading-none">{pin.flag}</span>
                <div className="min-w-0">
                  <p className="truncate font-serif text-lg leading-tight text-white">
                    {pin.city}
                  </p>
                  <p className="truncate text-[11px] uppercase tracking-[0.16em] text-gold-soft/90">
                    {pin.chapter}
                    {pin.years ? ` · ${pin.years}` : ""}
                  </p>
                </div>
              </div>
              <div className="px-4 py-3">
                <p className="mb-3 text-[13px] leading-relaxed text-haze">
                  {pin.blurb}
                </p>
                <ul className="space-y-2">
                  {pin.highlights.map((h) => {
                    const inner = (
                      <>
                        <span className="mt-[6px] h-1.5 w-1.5 flex-none rounded-full bg-gold/80" />
                        <span className="min-w-0">
                          <span className="font-medium text-white">
                            {h.org}
                          </span>
                          <span className="text-haze"> — {h.role}</span>
                          {h.note && (
                            <span className="ml-1 rounded-full bg-gold/15 px-1.5 py-0.5 text-[10px] font-medium text-gold-soft">
                              {h.note}
                            </span>
                          )}
                        </span>
                      </>
                    );
                    return (
                      <li key={h.org} className="text-[12.5px] leading-snug">
                        {h.url ? (
                          <a
                            href={h.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-2 rounded-md transition-colors hover:text-white"
                          >
                            {inner}
                          </a>
                        ) : (
                          <span className="flex gap-2">{inner}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
