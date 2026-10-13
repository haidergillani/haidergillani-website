import { orgs, type Org, type OrgId } from "@/lib/data";

export default function OrgLogo({
  id,
  size = 40,
  className = "",
}: {
  id: OrgId;
  size?: number;
  className?: string;
}) {
  const org: Org = orgs[id];
  const box = {
    width: size,
    height: size,
    borderRadius: Math.round(size * 0.24),
  };
  const base = `inline-flex shrink-0 items-center justify-center overflow-hidden border border-ink/10 ${className}`;

  if (!org.logo) {
    return (
      <span
        aria-hidden
        title={org.name}
        className={`${base} whitespace-nowrap bg-[#EDE5D2] font-mono font-medium tracking-tight text-ink/80`}
        style={{ ...box, fontSize: Math.max(7, size * 0.22) }}
      >
        {org.mark}
      </span>
    );
  }

  return (
    <span aria-hidden title={org.name} className={`${base} bg-white`} style={box}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={org.logo}
        alt=""
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
        className={org.fit === "cover" ? "h-full w-full object-cover" : "h-[70%] w-[70%] object-contain"}
      />
    </span>
  );
}
