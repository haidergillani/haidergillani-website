"use client";

import { motion } from "framer-motion";
import { locations } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Journey() {
  return (
    <section id="journey" className="relative mx-auto max-w-4xl px-6 py-24 scroll-mt-20">
      <SectionHeading
        eyebrow="The Route"
        title="One city at a time"
        sub="Minerva has no campus — its students move city to city, continent to continent. Here is where each chapter landed, and the work that came with it."
      />

      <div className="relative mt-16">
        {/* vertical line */}
        <div className="absolute left-[14px] top-2 h-full w-px bg-gradient-to-b from-pine/50 via-brass/30 to-transparent sm:left-1/2" />

        <div className="space-y-10">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.04 * i }}
              className={`relative pl-10 sm:w-1/2 sm:pl-0 ${
                i % 2 === 0
                  ? "sm:ml-0 sm:pr-12 sm:text-right"
                  : "sm:ml-auto sm:pl-12"
              }`}
            >
              {/* node */}
              <span
                className={`absolute top-1.5 grid h-7 w-7 place-items-center rounded-full border border-brass/50 bg-cream-card text-xs shadow-sm left-0 sm:left-auto ${
                  i % 2 === 0 ? "sm:-right-[14px]" : "sm:-left-[14px]"
                }`}
              >
                {loc.flag}
              </span>

              <div className="rounded-2xl border border-ink/10 bg-cream-card/70 p-5 shadow-sm transition-all hover:border-pine/30 hover:shadow-md">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-xl text-ink">
                    {loc.city}
                    <span className="text-ink-faint">, {loc.country}</span>
                  </h3>
                </div>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-pine">
                  {loc.chapter}
                  {loc.years ? ` · ${loc.years}` : ""}
                </p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft">
                  {loc.blurb}
                </p>
                <ul
                  className={`mt-3 flex flex-wrap gap-1.5 ${
                    i % 2 === 0 ? "sm:justify-end" : ""
                  }`}
                >
                  {loc.highlights.map((h) => (
                    <li
                      key={h.org}
                      className="rounded-full border border-ink/10 bg-cream-deep/60 px-2.5 py-1 text-[11px] font-medium text-ink"
                    >
                      {h.org}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
