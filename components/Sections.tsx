import {
  education,
  profile,
  projects,
  recognition,
  roles,
} from "@/lib/data";

function SectionHead({ title, aside }: { title: string; aside?: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-ink/20 pb-3">
      <h2 className="font-display text-[28px] leading-none tracking-[-0.01em] sm:text-[32px]">
        {title}
      </h2>
      {aside && <div className="font-mono text-[12px] text-ink-faint">{aside}</div>}
    </div>
  );
}

const shell = "mx-auto max-w-plate px-4 sm:px-6";

export function Work() {
  return (
    <section id="work" className={`${shell} scroll-mt-6 pt-28`}>
      <SectionHead title="Work" aside="2022 – now" />
      <ol>
        {roles.map((r) => (
          <li
            key={r.id}
            id={`role-${r.id}`}
            className="grid scroll-mt-8 gap-3 border-b border-ink/10 py-9 md:grid-cols-[13rem_1fr] md:gap-10 [&:target_h3]:text-pine"
          >
            <div className="tabular font-mono text-[12px] leading-5">
              <p className="text-ink">{r.period}</p>
              <p className="text-ink-faint">{r.place}</p>
            </div>
            <div className="max-w-prose">
              <h3 className="font-display text-[24px] leading-tight transition-colors">
                {r.url ? (
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="link">
                    {r.org}
                  </a>
                ) : (
                  r.org
                )}
              </h3>
              <p className="mt-1 text-[15px] text-ink-muted">{r.title}</p>
              <p className="mt-4 text-[16px] leading-[1.7]">{r.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className={`${shell} scroll-mt-6 pt-28`}>
      <SectionHead
        title="Projects"
        aside={
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="link">
            More on GitHub
          </a>
        }
      />
      <ul className="grid md:grid-cols-2 md:gap-x-12">
        {projects.map((p) => (
          <li key={p.name} className="border-b border-ink/10 py-7">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-[21px] leading-tight">{p.name}</h3>
              <span className="tabular font-mono text-[12px] text-ink-faint">{p.year}</span>
            </div>
            <p className="mt-2 max-w-prose text-[15px] leading-relaxed text-ink-muted">{p.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Background() {
  return (
    <section className={`${shell} grid gap-20 pt-28 md:grid-cols-2 md:gap-12`}>
      <div>
        <SectionHead title="Recognition" />
        <ul>
          {recognition.map((r) => (
            <li key={r.what} className="border-b border-ink/10 py-5">
              <p className="font-display text-[18px] leading-snug">{r.what}</p>
              <p className="mt-1 text-[15px] leading-relaxed text-ink-muted">{r.detail}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <SectionHead title="Education" />
        <ul>
          {education.map((e) => (
            <li key={e.school} className="border-b border-ink/10 py-5">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-display text-[18px] leading-snug">{e.school}</p>
                <span className="tabular font-mono text-[12px] text-ink-faint">{e.year}</span>
              </div>
              <p className="mt-1 text-[15px] leading-relaxed text-ink-muted">{e.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className={`${shell} scroll-mt-6 pb-20 pt-28`}>
      <SectionHead title="Contact" />
      <div className="mt-8">
        <a
          href={`mailto:${profile.email}`}
          className="link break-words font-display text-[22px] sm:text-[36px]"
        >
          {profile.email}
        </a>
        <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
          <a href={profile.resume} download className="link">
            Download résumé (PDF)
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="link">
            LinkedIn
          </a>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="link">
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
