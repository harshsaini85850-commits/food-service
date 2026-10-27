export default function ContactInfoCard({ icon, title, children, href }) {
  const body = (
    <div className="flex h-full gap-4 rounded-2xl border border-gold/40 bg-white p-6 shadow-sm transition hover:shadow-lg">
      <span className="text-3xl">{icon}</span>
      <div>
        <p className="font-heading text-lg font-semibold text-brand">{title}</p>
        <div className="mt-1 text-sm leading-relaxed text-ink/75">
          {children}
        </div>
      </div>
    </div>
  );

  if (!href) return body;

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="block"
    >
      {body}
    </a>
  );
}