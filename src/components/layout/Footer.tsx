import { Link } from "react-router-dom";
import { Crown, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const footerLinks = {
  explore: [
    { label: "Rooms & Suites", href: "/rooms" },
    { label: "Dining", href: "/dining" },
    { label: "Spa & Wellness", href: "/spa" },
    { label: "Events", href: "/events" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Partners", href: "/partners" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/faqs" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                <Crown className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-semibold">Grandeur</h2>
                <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/70">
                  Hotels & Resorts
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              Experience unparalleled luxury and world-class hospitality at Grandeur Hotels.
              Where every moment becomes a treasured memory.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/70">
                  123 Luxury Avenue, Manhattan, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/70">reservations@grandeur.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Grandeur Hotels & Resorts. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-primary-foreground/60 text-sm hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 text-sm hover:text-accent transition-colors">
              Terms
            </Link>
            <Link to="/cookies" className="text-primary-foreground/60 text-sm hover:text-accent transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
