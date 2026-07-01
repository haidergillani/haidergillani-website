export default function SectionHeading({
  eyebrow,
  title,
  sub,
  center = true,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-pine">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl font-normal tracking-tightest text-ink sm:text-4xl">
        {title}
      </h2>
      {sub && (
        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{sub}</p>
      )}
    </div>
  );
}
