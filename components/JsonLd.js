import { site } from "@/lib/site";
import { images } from "@/lib/images";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: images.hero || undefined,
    description:
      "Wedding, birthday, corporate and festival catering in Delhi NCR with 25+ years of experience.",
    areaServed: site.serviceArea,
    address: {
      "@type": "PostalAddress",
      streetAddress: "K-19, near Chakki Wali Gali, Block K, Shyam Nagar, Vishnu Garden",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110018",
      addressCountry: "IN",
    },
    sameAs: [site.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}