"use client";

import { motion } from "framer-motion";
import { projects, companies } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
      <SectionHeading
        eyebrow="Selected Work"
        title="What I built along the way"
        sub="Products, research, and teaching — most of it open on GitHub."
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
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-850/50 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-white/25 hover:bg-ink-800/60"
          >
            <span
              className="absolute inset-x-0 top-0 h-px opacity-60"
              style={{
                background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)`,
              }}
            />
            <div className="mb-4 flex items-center justify-between">
              <span
                className="inline-block h-8 w-8 rounded-lg"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${p.accent}, transparent 75%)`,
                  boxShadow: `0 0 18px ${p.accent}55`,
                }}
              />
              <span className="text-[11px] uppercase tracking-[0.16em] text-haze">
                {p.tag}
              </span>
            </div>
            <h3 className="font-serif text-xl text-white">{p.name}</h3>
            <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-haze">
              {p.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-white/[0.05] px-2 py-0.5 text-[11px] text-white/70"
                >
                  {s}
                </span>
              ))}
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-[12px] font-medium text-gold-soft opacity-0 transition-opacity group-hover:opacity-100">
              View project
              <span aria-hidden>→</span>
            </span>
          </motion.a>
        ))}
      </div>

      {/* companies wall */}
      <div className="mt-20">
        <p className="text-center text-[12px] uppercase tracking-[0.24em] text-haze">
          Companies &amp; institutions I&apos;ve worked with
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
          {companies.map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/75 transition-colors hover:border-gold/40 hover:text-white"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
