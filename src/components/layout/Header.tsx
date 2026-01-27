import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Crown, User, ClipboardList } from "lucide-react";
import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Amenities", href: "/amenities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const portalLinks = [
  { label: "Admin", href: "/admin", icon: Crown },
  { label: "Reception", href: "/reception", icon: ClipboardList },
  { label: "Guest Login", href: "/login", icon: User },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled || !isHome
          ? "bg-card/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
            <Crown className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1
              className={cn(
                "font-serif text-xl font-semibold transition-colors duration-300",
                isScrolled || !isHome ? "text-foreground" : "text-primary-foreground"
              )}
            >
              Grandeur
            </h1>
            <p
              className={cn(
                "text-xs tracking-[0.2em] uppercase transition-colors duration-300",
                isScrolled || !isHome ? "text-muted-foreground" : "text-primary-foreground/70"
              )}
            >
              Hotels & Resorts
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "link-underline text-sm font-medium tracking-wide transition-colors duration-300",
                isScrolled || !isHome
                  ? "text-foreground hover:text-accent"
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Portal Links */}
        <div className="hidden lg:flex items-center gap-3">
          {portalLinks.map((portal) => (
            <Link key={portal.href} to={portal.href}>
              <Button
                variant={isScrolled || !isHome ? "outline" : "hero-outline"}
                size="sm"
                className="gap-2"
              >
                <portal.icon className="w-4 h-4" />
                {portal.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "lg:hidden p-2 rounded-lg transition-colors",
            isScrolled || !isHome
              ? "text-foreground hover:bg-muted"
              : "text-primary-foreground hover:bg-primary-foreground/10"
          )}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-foreground font-medium hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                {portalLinks.map((portal) => (
                  <Link key={portal.href} to={portal.href} className="block">
                    <Button variant="outline" className="w-full gap-2">
                      <portal.icon className="w-4 h-4" />
                      {portal.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
