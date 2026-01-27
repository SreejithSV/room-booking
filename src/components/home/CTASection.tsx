import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { Button } from "../ui/button";

export function CTASection() {
  return (
    <section className="py-24 bg-champagne">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Ready to Experience Luxury?
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Book Your Unforgettable Stay
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Contact our reservations team to customize your perfect getaway.
            Special packages and exclusive offers await.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="gold" size="xl">
              Reserve Now
            </Button>
            <Button variant="luxury-outline" size="xl">
              Request a Call Back
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a
              href="tel:+15551234567"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Call Us</p>
                <p className="font-semibold">+1 (555) 123-4567</p>
              </div>
            </a>
            <a
              href="mailto:reservations@grandeur.com"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email Us</p>
                <p className="font-semibold">reservations@grandeur.com</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
