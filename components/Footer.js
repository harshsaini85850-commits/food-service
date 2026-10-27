import Logo from "@/components/Logo";
import Link from "next/link";
import { site } from "@/lib/site";
import CurrentYear from "@/components/CurrentYear";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/our-services", label: "Our Services" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/blog", label: "Blog" },
];

const services = [
  { href: "/our-services#wedding", label: "Wedding Catering" },
  { href: "/our-services#birthday", label: "Birthday Party Catering" },
  { href: "/our-services#corporate", label: "Corporate Event Catering" },
  { href: "/our-services#mehndi", label: "Mehndi Function Catering" },
  { href: "/our-services#festival", label: "Festival Catering" },
  { href: "/our-services#anniversary", label: "Anniversary Catering" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="mb-4 h-14 w-auto" />
          <p className="text-sm leading-relaxed">
            Authentic Punjabi flavours, thoughtful presentation and warm
            hospitality for weddings, parties and corporate events.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-lg text-gold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/CC-Catering-menu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                Menu
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-lg text-gold">
            Catering Services
          </h3>
          <ul className="space-y-2 text-sm">
            {services.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-lg text-gold">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>{site.address}</li>
            <li>
              <a href={site.phoneLink} className="hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                Follow on Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-4 text-center text-xs">
  © <CurrentYear /> {site.name}. All rights reserved.
       </div>
    </footer>
  );
}