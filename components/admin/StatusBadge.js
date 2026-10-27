const styles = {
  new: "bg-red-100 text-red-700",
  contacted: "bg-amber-100 text-amber-700",
  closed: "bg-green-100 text-green-700",
  published: "bg-green-100 text-green-700",
  draft: "bg-gray-200 text-gray-700",
};

export default function StatusBadge({ status }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
        styles[status] || styles.draft
      }`}
    >
      {status}
    </span>
  );
}