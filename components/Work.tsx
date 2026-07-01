"use client";

import { motion } from "framer-motion";
import { projects, companies, alsoBuilt } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
      <SectionHeading
        eyebrow="Selected Work"
        title="What I built along the way"
        sub="AI products, research, and founding work — from enterprise scale at HP to a startup of my own."
      />

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.05 * (i % 3) }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-cream-card/70 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-pine/30 hover:shadow-lg"
          >
            <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-pine to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="mb-3 flex items-start justify-between gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-pine">
                {p.tag}
              </span>
              {p.metric && (
                <span className="whitespace-nowrap rounded-full bg-brass/12 px-2 py-0.5 text-[10.5px] font-semibold text-brass">
                  {p.metric}
                </span>
              )}
            </div>
            <h3 className="font-serif text-xl text-ink">{p.name}</h3>
            <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-ink-soft">
              {p.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-cream-deep/70 px-2 py-0.5 text-[11px] font-medium text-ink-soft"
                >
                  {s}
                </span>
              ))}
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold text-pine opacity-0 transition-opacity group-hover:opacity-100">
              View project <span aria-hidden>→</span>
            </span>
          </motion.a>
        ))}
      </div>

      {/* also built */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
          Also built
        </span>
        {alsoBuilt.map((item) => (
          <span
            key={item}
            className="rounded-full border border-ink/10 bg-cream-card/60 px-3 py-1 text-[12px] text-ink-soft"
          >
            {item}
          </span>
        ))}
      </div>

      {/* companies wall */}
      <div className="mt-20">
        <p className="text-center text-[12px] font-semibold uppercase tracking-[0.22em] text-ink-faint">
          Companies &amp; institutions I&apos;ve worked with
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {companies.map((c) => (
            <span
              key={c}
              className="rounded-full border border-ink/12 bg-cream-card/70 px-4 py-2 text-sm font-medium text-ink shadow-sm transition-colors hover:border-pine/40 hover:text-pine"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
