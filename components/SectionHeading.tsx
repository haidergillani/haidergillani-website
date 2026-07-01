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
      <p className="mb-3 text-[12px] uppercase tracking-[0.24em] text-gold-soft">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl font-light tracking-tightest text-white sm:text-4xl">
        {title}
      </h2>
      {sub && (
        <p className="mt-4 text-[15px] leading-relaxed text-haze">{sub}</p>
      )}
    </div>
  );
}
