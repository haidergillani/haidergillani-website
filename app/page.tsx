import Atlas from "@/components/Atlas";
import { Background, Contact, Projects, Work } from "@/components/Sections";
import { profile } from "@/lib/data";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <header className="mx-auto flex max-w-plate items-baseline justify-between gap-6 px-4 pt-6 sm:px-6">
        <p className="hidden font-mono text-[12px] text-ink-muted sm:block">
          {profile.now.join("  ·  ")}
        </p>
        <nav aria-label="Sections" className="flex gap-6 text-[14px]">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-ink-muted transition-colors hover:text-ink">
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="mx-auto grid max-w-plate gap-6 px-4 pb-12 pt-16 sm:px-6 md:grid-cols-[1fr_minmax(0,30rem)] md:items-end md:gap-12 md:pt-28">
          <h1 className="font-display text-[46px] leading-[0.95] tracking-[-0.025em] sm:text-[72px]">
            Haider Gillani
          </h1>
          <p className="text-[17px] leading-relaxed text-ink-muted sm:text-[18px]">
            {profile.intro}
          </p>
        </section>

        <Atlas />
        <Work />
        <Projects />
        <Background />
        <Contact />
      </main>

      <footer className="mx-auto flex max-w-plate justify-between gap-6 border-t border-ink/15 px-4 py-6 font-mono text-[11px] text-ink-faint sm:px-6">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Map data: Natural Earth</span>
      </footer>
    </>
  );
}
