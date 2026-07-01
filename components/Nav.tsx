import { profile } from "@/lib/data";

const links = [
  { href: "#map", label: "The Map" },
  { href: "#journey", label: "Journey" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-pine font-serif text-cream shadow-md">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-ink sm:block">
            {profile.name}
          </span>
        </a>
        <nav className="flex items-center gap-0.5 rounded-full border border-ink/10 bg-cream-card/70 px-1.5 py-1.5 shadow-sm backdrop-blur-md sm:gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap rounded-full px-2.5 py-1.5 text-[12px] font-medium text-ink-soft transition-colors hover:bg-pine/10 hover:text-pine sm:px-3.5 sm:text-[13px]"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
