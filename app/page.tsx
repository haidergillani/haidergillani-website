import Image from "next/image";
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
        <section className="mx-auto grid max-w-plate gap-10 px-4 pb-14 pt-12 sm:px-6 md:grid-cols-[1fr_auto] md:items-end md:gap-16 md:pt-20">
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
            <p className="mt-8 max-w-[34rem] text-[17px] leading-relaxed text-ink-muted sm:text-[18px]">
              {profile.intro}
            </p>
          </div>
          <div className="border border-ink/20 bg-plate p-1.5 outline outline-1 outline-offset-[5px] outline-ink/10 md:w-[18rem] lg:w-[20rem]">
            <Image
              src={profile.photo.src}
              width={profile.photo.width}
              height={profile.photo.height}
              alt={profile.photo.alt}
              priority
              sizes="(min-width: 1024px) 20rem, (min-width: 768px) 18rem, 100vw"
              className="aspect-[4/3] w-full object-cover object-[50%_25%] md:aspect-[4/5]"
            />
          </div>
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
