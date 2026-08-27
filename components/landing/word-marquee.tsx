const WORDS = [
  "TESTLAR",
  "BILETLAR",
  "DARSLAR",
  "IMTIHON",
  "PRAVA",
  "STATISTIKA",
  "PDD",
];

function Track() {
  return (
    <div className="flex shrink-0 items-center">
      {WORDS.map((word, i) => (
        <span key={word} className="flex items-center">
          <span
            className={
              "font-heading whitespace-nowrap px-6 text-4xl font-extrabold tracking-tight sm:px-8 md:text-6xl " +
              (i % 2 === 0 ? "text-outline" : "text-gradient")
            }
          >
            {word}
          </span>
          <span className="size-2.5 shrink-0 rotate-45 rounded-[3px] bg-primary/50" />
        </span>
      ))}
    </div>
  );
}

export function WordMarquee() {
  return (
    <section aria-hidden="true" className="marquee py-10 sm:py-14">
      <div
        className="marquee-track"
        style={{ "--marquee-duration": "30s" } as React.CSSProperties}
      >
        <Track />
        <Track />
      </div>
    </section>
  );
}
