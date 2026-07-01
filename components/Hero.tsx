import WorldMap from "./WorldMap";
import { locations, profile } from "@/lib/data";

export default function Hero() {
  const countries = new Set(locations.map((l) => l.country)).size;

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-16 pt-28"
    >
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[12px] uppercase tracking-[0.22em] text-gold-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          {profile.role} · {profile.location}
        </p>
        <h1 className="text-balance font-serif text-[2.6rem] font-light leading-[1.05] tracking-tightest text-white sm:text-6xl">
          I&apos;ve built across{" "}
          <span className="italic text-gold">{locations.length} cities</span> on
          four continents.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-haze sm:text-base">
          {profile.summary}
        </p>
      </div>

      <div id="map" className="relative scroll-mt-24">
        <div className="pointer-events-none absolute -inset-x-8 -top-8 bottom-0 rounded-[2rem] bg-gradient-to-b from-white/[0.03] to-transparent" />
        <WorldMap />
        <p className="mt-4 text-center text-[12px] uppercase tracking-[0.2em] text-haze/60">
          Hover or tap a city to see the work
        </p>
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-2xl grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-ink-850/40 py-5 backdrop-blur">
        <Stat value={`${locations.length}`} label="Cities" />
        <Stat value={`${countries}`} label="Countries" />
        <Stat value="4" label="Continents" />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-4 text-center">
      <p className="font-serif text-3xl text-white sm:text-4xl">{value}</p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-haze">
        {label}
      </p>
    </div>
  );
}
