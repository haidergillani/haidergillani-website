import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative mx-auto max-w-4xl scroll-mt-20 px-6 py-24 text-center"
    >
      <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-pine">
        Get in touch
      </p>
      <h2 className="mx-auto max-w-2xl text-balance font-serif text-3xl font-normal leading-tight tracking-tightest text-ink sm:text-5xl">
        Still moving. Let&apos;s build something{" "}
        <span className="italic text-pine">worth the miles.</span>
      </h2>

      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-block rounded-full bg-pine px-7 py-3 text-sm font-semibold text-cream shadow-md transition-colors hover:bg-pine-deep"
      >
        {profile.email}
      </a>

      <div className="mt-10 flex items-center justify-center gap-3">
        <Social href={profile.socials.github} label="GitHub" />
        <Social href={profile.socials.linkedin} label="LinkedIn" />
        <Social href={profile.socials.instagram} label="Instagram" />
      </div>

      <p className="mt-16 text-[12px] text-ink-faint">
        © {new Date().getFullYear()} {profile.name}. Designed &amp; built from
        wherever I happen to be.
      </p>
    </footer>
  );
}

function Social({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-ink/12 bg-cream-card/70 px-4 py-2 text-[13px] font-medium text-ink-soft shadow-sm transition-colors hover:border-pine/40 hover:text-pine"
    >
      {label}
    </a>
  );
}
