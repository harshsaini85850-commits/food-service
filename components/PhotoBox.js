export default function PhotoBox({ src, alt, className = "" }) {
  const fallback = "linear-gradient(135deg, #8b1e2d55, #c9a22755)";

  return (
    <div
      role="img"
      aria-label={alt}
      className={`bg-cover bg-center ${className}`}
      style={{
        backgroundImage: src ? `url("${src}"), ${fallback}` : fallback,
      }}
    />
  );
}
