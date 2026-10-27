import { Playfair_Display, Poppins } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: "Best Catering Services in Delhi | CC Catering & Event Service",
  description:
    "Wedding, birthday and corporate catering in Delhi NCR with 25+ years of experience. Call +91 87963 57726 for a free quote.",
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    title: "Best Catering Services in Delhi | CC Catering & Event Service",
    description:
      "Wedding, birthday and corporate catering in Delhi NCR with 25+ years of experience.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}