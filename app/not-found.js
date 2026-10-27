import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata = { title: "Page not found | CC Catering" };

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-4 text-center">
      <Logo className="h-20 w-auto" />
      <p className="mt-6 font-heading text-7xl font-bold text-gold">404</p>
      <h1 className="mt-2 font-heading text-3xl font-bold text-brand">
        This page isn't on the menu
      </h1>
      <p className="mt-3 max-w-md text-ink/70">
        The page you are looking for may have moved or never existed. Let's get
        you back to something delicious.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-cream transition hover:bg-brand-dark"
        >
          Go to Home
        </Link>
        <Link
          href="/our-services"
          className="rounded-full border-2 border-brand px-7 py-3 text-sm font-semibold text-brand transition hover:bg-brand hover:text-cream"
        >
          Our Services
        </Link>
        <Link
          href="/contact-us"
          className="rounded-full border-2 border-brand px-7 py-3 text-sm font-semibold text-brand transition hover:bg-brand hover:text-cream"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}