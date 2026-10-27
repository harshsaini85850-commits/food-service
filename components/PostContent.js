import PhotoBox from "@/components/PhotoBox";

export default function PostContent({ content }) {
  const blocks = content
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <div className="space-y-5 text-base leading-relaxed text-ink/85">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="pt-4 font-heading text-2xl font-bold text-brand"
            >
              {block.slice(3)}
            </h2>
          );
        }

        const img = block.match(/^!\[(.*?)\]\((.*?)\)$/);
        if (img) {
          return (
            <PhotoBox
              key={i}
              src={img[2]}
              alt={img[1]}
              className="h-72 rounded-2xl shadow-md sm:h-96"
            />
          );
        }

        return <p key={i}>{block}</p>;
      })}
    </div>
  );
}