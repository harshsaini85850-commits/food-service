export default function Logo({ className = "h-12 w-auto" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="CC Catering logo"
    >
      <circle cx="50" cy="50" r="46" fill="#8b1e2d" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="#c9a227" strokeWidth="2" />
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fontSize="34"
        fontWeight="700"
        fontFamily="serif"
        fill="#fff8ec"
      >
        CC
      </text>
    </svg>
  );
}