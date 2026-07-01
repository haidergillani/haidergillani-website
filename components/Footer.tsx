import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative mx-auto max-w-4xl scroll-mt-20 px-6 py-24 text-center"
    >
      <p className="mb-3 text-[12px] uppercase tracking-[0.24em] text-gold-soft">
        Get in touch
      </p>
      <h2 className="mx-auto max-w-2xl text-balance font-serif text-3xl font-light leading-tight tracking-tightest text-white sm:text-5xl">
        Still moving. Let&apos;s build something{" "}
        <span className="italic text-gold">worth the miles.</span>
      </h2>

      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-block rounded-full border border-gold/40 bg-gold/10 px-7 py-3 text-sm font-medium text-gold-soft transition-colors hover:bg-gold hover:text-ink-950"
      >
        {profile.email}
      </a>

      <div className="mt-10 flex items-center justify-center gap-3">
        <Social href={profile.socials.github} label="GitHub" />
        <Social href={profile.socials.linkedin} label="LinkedIn" />
        <Social href={profile.socials.instagram} label="Instagram" />
      </div>

      <p className="mt-16 text-[12px] text-haze/60">
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
      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[13px] text-haze transition-colors hover:border-gold/40 hover:text-white"
    >
      {label}
    </a>
  );
}
