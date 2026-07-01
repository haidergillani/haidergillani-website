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
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream-card/70 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-pine shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-pine" />
          {profile.role} · {profile.location}
        </p>
        <h1 className="text-balance font-serif text-[2.6rem] font-normal leading-[1.05] tracking-tightest text-ink sm:text-6xl">
          I&apos;ve built across{" "}
          <span className="italic text-pine">{locations.length} cities</span> on
          four continents.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-ink-soft sm:text-base">
          {profile.summary}
        </p>
      </div>

      <div id="map" className="relative scroll-mt-24">
        <WorldMap />
        <p className="mt-4 text-center text-[12px] font-medium uppercase tracking-[0.2em] text-ink-faint">
          Hover or tap a city to see the work
        </p>
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-2xl grid-cols-3 divide-x divide-ink/10 rounded-2xl border border-ink/10 bg-cream-card/60 py-5 shadow-sm">
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
      <p className="font-serif text-3xl text-pine sm:text-4xl">{value}</p>
      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
        {label}
      </p>
    </div>
  );
}
