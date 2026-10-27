import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import QuotePopup from "@/components/QuotePopup";
import JsonLd from "@/components/JsonLd";

export default function SiteLayout({ children }) {
  return (
    <>
      <JsonLd />
      <AnnouncementBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingButtons />
      <QuotePopup />
    </>
  );
}