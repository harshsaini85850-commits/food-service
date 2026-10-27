export default function SectionHeading({ eyebrow, title, text, center = true }) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl font-bold text-brand sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 leading-relaxed text-ink/75">{text}</p>}
    </div>
  );
}