import Atlas from "@/components/Atlas";
import Header from "@/components/Header";
import OrgLogo from "@/components/OrgLogo";
import { Background, Contact, Projects, Work } from "@/components/Sections";
import { profile } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Header />

      <main id="top" className="scroll-mt-20">
        <section className="mx-auto grid max-w-plate gap-8 px-4 pb-12 pt-14 sm:px-6 md:grid-cols-[1fr_minmax(0,30rem)] md:items-end md:gap-12 md:pt-24">
          <div>
            <h1
              id="hero-name"
              className="font-display text-[46px] leading-[0.95] tracking-[-0.025em] sm:text-[72px]"
            >
              {profile.name}
            </h1>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3" aria-label="Current roles">
              {profile.now.map((n) => (
                <li key={n.label} className="flex items-center gap-2.5 text-[14px] text-ink">
                  <OrgLogo id={n.orgId} size={26} />
                  {n.label}
                </li>
              ))}
            </ul>
          </div>
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
